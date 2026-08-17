# The security rules, explained in plain language

This app has no server. The browser talks straight to Firestore and Storage.
That means `firestore.rules` and `storage.rules` are not a setting you
configure once and forget — they **are** the entire security model. Anything
they allow, a browser can do. Anything they don't explicitly allow is
refused, no matter what the app's own code tries to do.

This doc walks through both files. It's meant to be read alongside them —
open `firestore.rules` in one window and this in the other.

## The shape of the file

```
service cloud.firestore {
  match /databases/{database}/documents {
    ... one match block per collection ...
    match /{document=**} { allow read, write: if false; }
  }
}
```

Every `match` block says "here's a collection, and here's who can read or
write it." The very last block, `/{document=**}`, catches anything not
matched above and denies it outright. That's the "deny by default" posture:
a brand-new collection nobody wrote a rule for is closed automatically,
not open by accident.

## The four helper functions at the top

```
function signedIn() { return request.auth != null; }
```
True if the request came from *someone* logged in via Firebase
Authentication. Not enough on its own — see the next one.

```
function isHrUser() {
  return signedIn() &&
    exists(/databases/$(database)/documents/users/$(request.auth.uid));
}
```
True only if that logged-in person also has a document in the `users`
collection. This is the actual gate. There are exactly three `users`
documents — David's, Tanya's, and the admin assistant's — created by hand,
not through the app. Anyone who signs in without one of these (say, someone
who guesses a valid-looking email/password some other way) is authenticated
but not an HR user, and every rule below checks `isHrUser()`, not just
`signedIn()`.

```
function role() {
  return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role;
}
function isDavid() {
  return isHrUser() && role() == 'david';
}
```
Reads that person's `users` document and pulls out their `role` field. This
is how "only David can close a case" gets enforced — not by hiding a button
in the interface (which anyone with browser developer tools can undo), but
by Firestore itself refusing the write.

```
function hasForbiddenFields(data) {
  return data.keys().hasAny([...long list...]);
}
function isClean(data) { return !hasForbiddenFields(data); }
```
This is the exclusion list from `CLAUDE.md`, translated into a check.
`data.keys().hasAny([...])` looks at every field name in the document being
written and asks "does this list contain any of the forbidden names?" If
yes, the write is rejected — even if the app's own JavaScript never meant to
send that field, even if it's a typo, even if someone is testing the app
directly through the browser console. The list covers every spelling
convention (`pay_rate` and `payRate` both), because the rule can only catch
what it's told to look for.

## What each collection's rule actually says

Most collections follow the same pattern:

```
match /employees/{empId} {
  allow read: if isHrUser();
  allow create, update: if isHrUser() && isClean(request.resource.data);
  allow delete: if false;
}
```

Read line by line:
- **Read** — any of the three HR staff can read any employee record. There's
  no per-employee restriction, because all three people need to see all 110
  employees to do their jobs.
- **Create/update** — allowed only if the person is HR staff *and* the
  document they're trying to save doesn't contain a forbidden field.
  `request.resource.data` is Firestore's name for "the document as it would
  look after this write succeeds" — the check runs against the *result*,
  not just the fields being changed, so there's no way to sneak a forbidden
  field in through a partial update either.
- **Delete is always `false`.** Employees don't get deleted, they get
  terminated (a status change on the same document). The same "no deletes"
  rule appears on discipline, incidents, notes, and everything else that's a
  historical record — the point is that nothing in this system disappears,
  it gets superseded or marked inactive, so there's always an audit trail.

## The one place the rule isn't the same everywhere: employee relations

```
match /er_cases/{caseId} {
  allow create: if isHrUser() && isClean(request.resource.data)
    && request.resource.data.status != 'closed';
  allow update: if isHrUser() && isClean(request.resource.data)
    && (request.resource.data.status != 'closed' || isDavid());
  ...
}
```

- **Create** blocks a case from being opened already closed — that would be
  a way around the review requirement.
- **Update** reads: "allowed if the *resulting* status isn't `closed` — OR,
  if it is, only if the person is David." Because this checks the result of
  the whole write, someone can't dodge it by changing the status to
  `closed` in the same update that also changes five other fields — the
  rule still sees the final document has `status: closed` and still
  requires David.

This is the rule that makes "only David can close a case" real. The intake
form, the interview screens, everything else about employee relations
follows the same pattern as every other collection — this closure check is
the one place role matters.

## `users` itself has no write path

```
match /users/{uid} {
  allow read: if isHrUser();
  allow write: if false;
}
```

Every rule above depends on reading someone's role out of their `users`
document. If the app could also *write* to that collection, someone could
theoretically grant themselves David's role through the same channel. So
`users` is read-only from the client, permanently. Adding, removing, or
changing a role happens by hand in the Firebase Console (or with the Admin
SDK, which isn't subject to these rules at all) — the same way the three
accounts get created in the first place.

## `storage.rules` — the same idea, applied to files

```
function isHrUser() {
  return request.auth != null &&
    firestore.exists(/databases/(default)/documents/users/$(request.auth.uid));
}
```

Storage rules can't see the Firestore database automatically, so this line
explicitly reaches into Firestore to ask "does this person have a `/users`
document" — the exact same check as the Firestore rules, applied to file
uploads and downloads. A signed disciplinary write-up or a note attachment
is only reachable by someone who could already see the record it belongs
to.

```
function isReasonableUpload() {
  return request.resource.size < 25 * 1024 * 1024
    && request.resource.contentType.matches('application/pdf|image/.*');
}
```

Caps uploads at 25MB and restricts them to PDFs and images — enough for a
scanned, signed multi-page document, and not much else. This isn't a
security boundary so much as a guardrail against something going wrong
client-side and uploading garbage.

## What these rules do *not* do

They don't validate that a `division` is a real division, or that a `date`
field is a real date, or that an `emp_id` points to an employee that
actually exists. That kind of validation happens in the app's own form
code. The rules exist to enforce the things that must be true no matter
what the app's code does — who can touch a collection at all, who can close
a case, and which fields can never be saved. Everything else is the UI's
job, same as any other app.

## How this gets tested

`tests/firestore.rules.test.js` runs these rules against the local Firebase
emulator — no real project, no real data, no login required. It checks, in
order: that a signed-out visitor is refused, that a signed-in stranger
without a `/users` doc is refused, that HR staff can do normal work, that
every forbidden field gets rejected (tested individually, plus once inside
a subcollection), that `/users` can't be written by anyone, that an ER case
can't be created already closed, that Tanya can open and progress a case
but not close it, that David can close it, that closing can't be smuggled
in alongside other field changes, and that deletes are refused everywhere
they should be. Run it with `npm run test:rules`. It should be run again
any time `firestore.rules` or `storage.rules` change, before those changes
are deployed.
