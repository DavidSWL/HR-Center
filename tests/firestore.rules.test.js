const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} = require('@firebase/rules-unit-testing');

const DAVID = 'uid-david';
const TANYA = 'uid-tanya';
const AA = 'uid-admin-assistant';
const STRANGER = 'uid-not-hr-staff';

let testEnv;

test.before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: 'demo-swl-hr',
    firestore: {
      rules: fs.readFileSync(path.resolve(__dirname, '../firestore.rules'), 'utf8'),
      host: 'localhost',
      port: 8080,
    },
  });
});

test.after(async () => {
  await testEnv.cleanup();
});

test.beforeEach(async () => {
  await testEnv.clearFirestore();
  // Seed the three real HR accounts, bypassing rules — this mirrors how
  // these docs get created in real life (Firebase Console / Admin SDK),
  // not through the app.
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await db.collection('users').doc(DAVID).set({ name: 'David', role: 'david' });
    await db.collection('users').doc(TANYA).set({ name: 'Tanya', role: 'tanya' });
    await db.collection('users').doc(AA).set({ name: 'Admin Assistant', role: 'admin_assistant' });
  });
});

function as(uid) {
  return testEnv.authenticatedContext(uid).firestore();
}

function anonymous() {
  return testEnv.unauthenticatedContext().firestore();
}

// ---- baseline authorization -------------------------------------------

test('signed-out visitor cannot read employees', async () => {
  await assertFails(anonymous().collection('employees').doc('E100').get());
});

test('authenticated user with no /users doc cannot read employees', async () => {
  await assertFails(as(STRANGER).collection('employees').doc('E100').get());
});

test('an HR staff member can read and write a clean employee record', async () => {
  const db = as(TANYA);
  await assertSucceeds(
    db.collection('employees').doc('E100').set({
      first_name: 'Jordan',
      last_name: 'Ruiz',
      division: 'Maintenance',
      hire_date: '2024-03-01',
    })
  );
  await assertSucceeds(db.collection('employees').doc('E100').get());
});

test('unknown collections are denied even for HR staff (default deny)', async () => {
  await assertFails(as(DAVID).collection('some_future_module').doc('x').set({ a: 1 }));
});

// ---- forbidden fields ----------------------------------------------------

for (const field of ['pay_rate', 'salary', 'ssn', 'dob', 'date_of_birth', 'bank_account', 'diagnosis']) {
  test(`write to employees is rejected if it contains "${field}"`, async () => {
    await assertFails(
      as(TANYA).collection('employees').doc('E100').set({
        first_name: 'Jordan',
        [field]: 'should never be here',
      })
    );
  });
}

test('forbidden-field check also applies to subcollections', async () => {
  await assertFails(
    as(TANYA)
      .collection('employees')
      .doc('E100')
      .collection('reviews')
      .doc('30')
      .set({ completed: true, salary_band: 'B3' })
  );
});

test('forbidden-field check also applies to notes_to_file', async () => {
  await assertFails(
    as(DAVID).collection('notes_to_file').doc('N1').set({
      emp_id: 'E100',
      type: 'general',
      body: 'note',
      entered_by: DAVID,
      witness_statement: 'should never be here',
    })
  );
});

// ---- the /users collection is never client-writable --------------------

test('nobody — not even David — can write to /users from the client', async () => {
  await assertFails(
    as(DAVID).collection('users').doc(TANYA).set({ name: 'Tanya', role: 'david' })
  );
});

// ---- entered_by stamping -------------------------------------------------

test('attendance create without entered_by is rejected', async () => {
  await assertFails(
    as(TANYA).collection('attendance').doc('A1').set({
      emp_id: 'E100',
      date: '2026-08-17',
      type: 'other',
      reason: 'appointment',
    })
  );
});

test('attendance create with entered_by succeeds', async () => {
  await assertSucceeds(
    as(TANYA).collection('attendance').doc('A1').set({
      emp_id: 'E100',
      date: '2026-08-17',
      type: 'other',
      reason: 'appointment',
      entered_by: TANYA,
    })
  );
});

// ---- ER case closure is role-gated ---------------------------------------

test('a case cannot be created already closed, by anyone', async () => {
  await assertFails(
    as(DAVID).collection('er_cases').doc('ER-2026-001').set({
      status: 'closed',
      opened_by: DAVID,
    })
  );
});

test('Tanya can open and update an ER case, but cannot close it', async () => {
  const db = as(TANYA);
  await assertSucceeds(
    db.collection('er_cases').doc('ER-2026-002').set({
      status: 'open',
      opened_by: TANYA,
    })
  );
  await assertSucceeds(
    db.collection('er_cases').doc('ER-2026-002').update({ status: 'review' })
  );
  await assertFails(
    db.collection('er_cases').doc('ER-2026-002').update({ status: 'closed' })
  );
});

test('David can close an ER case', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await ctx.firestore().collection('er_cases').doc('ER-2026-003').set({
      status: 'review',
      opened_by: TANYA,
    });
  });
  await assertSucceeds(
    as(DAVID).collection('er_cases').doc('ER-2026-003').update({ status: 'closed' })
  );
});

test('closing while also changing other fields in the same write still requires David', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await ctx.firestore().collection('er_cases').doc('ER-2026-004').set({
      status: 'review',
      opened_by: TANYA,
      summary: 'draft',
    });
  });
  await assertFails(
    as(TANYA).collection('er_cases').doc('ER-2026-004').update({
      status: 'closed',
      summary: 'final',
    })
  );
});

// ---- no hard deletes -------------------------------------------------------

test('deleting a disciplinary action is always denied — retire, don\'t delete', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await ctx.firestore().collection('disciplinary_actions').doc('D1').set({
      emp_id: 'E100',
      division: 'Maintenance',
      level: 1,
      entered_by: DAVID,
    });
  });
  await assertFails(as(DAVID).collection('disciplinary_actions').doc('D1').delete());
});

// ---- activity log is append-only -----------------------------------------

test('activity log entries cannot be edited once written', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    await ctx.firestore().collection('activity').doc('AC1').set({
      module: 'attendance',
      entered_by: TANYA,
    });
  });
  await assertFails(
    as(TANYA).collection('activity').doc('AC1').update({ module: 'edited' })
  );
});
