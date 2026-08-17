# Firestore schema

This is not a relational database. There are no foreign key constraints and
no joins — a "foreign key" here just means "a field that holds another
document's ID," and any report that combines two collections is assembled in
the browser after two separate reads. At 110 employees and a few thousand
records total, that is instant. Do not add denormalized counters or Cloud
Functions to work around this — it isn't needed yet, and if it ever looks
needed, that's a question to raise before building it, not a default.

## Collections

Document ID is shown in `{brackets}`. Indented collections are
**subcollections** — they only exist underneath one parent document and are
read as part of that parent's data, never queried across employees.

```
employees/{emp_id}                 payroll ID is the document ID — never the
                                    employee's name. Every other collection
                                    links back here via emp_id.
  acknowledgments/{doc_id}         on_file, signed_date, entered_by
  reviews/{milestone}              "30" | "60" | "90"
  onboarding_docs/{doc_id}

policy_documents/{doc_id}          title, type, version_label, effective_date,
                                    superseded_date, required_for, active

attendance/{occurrence_id}         emp_id, date, type, reason, entered_by
disciplinary_actions/{action_id}   emp_id, division (denormalized), level,
                                    category, issued_by, form_on_file,
                                    file_path
notes_to_file/{note_id}            emp_id, type, body, attachment_path,
                                    entered_by

incidents/{incident_id}            Cal/OSHA Form 300 fields only, division
                                    denormalized
safety_issues/{issue_id}
safety_meetings/{meeting_id}       attendee_emp_ids: array<string>

er_cases/{case_id}                 ER-YYYY-### as the document ID — continues
                                    the existing sequence, never renumbered
  interviews/{interview_id}        person, role, status, interviewed_by
    responses/{question_no}        question, response

tasks/{task_id}                    assigned_to, instructions, due_date
  reassignments/{id}
training_modules/{module_id}       sections and test questions as arrays
  completions/{staff_id}           score, attempts, completed_date,
                                    certificate_no

activity/{activity_id}             every module writes here on completion
settings/{list_name}               managed lists, values as an array
users/{uid}                        name, role: 'david' | 'tanya' |
                                    'admin_assistant' — uid is the Firebase
                                    Auth UID, so a doc read of
                                    /users/$(request.auth.uid) is how the
                                    security rules find out who's asking
```

## Shape rules

- **`emp_id` is the document ID** in `employees`, and the linking field
  everywhere else. Never store the employee's name as the link — names
  change, IDs don't.
- **Denormalize `division` onto `disciplinary_actions` and `incidents`** at
  write time. A transfer must not rewrite last year's numbers, so this is a
  deliberate copy, not a shortcut.
- **Subcollections for anything owned by exactly one parent** —
  acknowledgments, reviews, onboarding docs, interviews, interview responses,
  task reassignments, training completions. **Top-level collections for
  anything queried across employees** — attendance, discipline, incidents,
  notes, safety records, ER cases, tasks, training modules. That's why the
  split above isn't uniform: it follows the query pattern, not a rule of
  "always nest under employees."
- **`users` carries the role, and the role is what the rules check.**
  Closing an ER case checks `role == 'david'` in `firestore.rules`, not in
  the UI — a UI check is a suggestion; a rules check is enforcement.
- **Compute, never store:** manager name, anniversary, years of service,
  tenure band, review due dates, attendance frequency, all pay-related
  figures. If a field's value is derivable from other fields already in the
  document, it does not get its own field.
- **Composite indexes get added as queries are written**, not batched at the
  end. `firestore.indexes.json` in this repo is a living file — when the
  emulator or a deploy rejects a query for needing an index, add it there,
  don't wait for a final pass.

## Storage paths

Signed disciplinary documents and note attachments live in Cloud Storage,
mirroring the Firestore document that owns them:

```
disciplinary/{action_id}/{filename}
notes/{note_id}/{filename}
```

`storage.rules` restricts both read and write to authenticated users who
have a `/users/{uid}` document — the same authorization check as Firestore,
applied to file access.

## Fields that must never appear, anywhere in this schema

Enforced in `firestore.rules`, not left to convention — see
`docs/security-rules-explained.md` for the exact check and why field names
are matched rather than "trusted" from the UI:

- Compensation: pay rate, pay type, salary/salary band, bonus, comp history
- Social Security numbers
- Date of birth (birth *year* specifically — month/day are fine)
- Bank or direct deposit details
- I-9 / work authorization documents
- Medical detail beyond Form 300 fields (diagnosis, physician notes,
  workers' comp correspondence)
- ER narrative detail: witness statements, complainant identity
