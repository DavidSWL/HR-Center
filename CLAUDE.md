# SouthWest Landscape HR Platform — project rules

## Who uses this
Three HR staff. Nobody else has a login. No manager portal, no employee
self-service. Design for people who live in this tool all day, not for
first-time visitors.

## Never store these fields — enforce in the schema, not by convention
- Any compensation data: pay rate, pay type, salary band, bonus, comp history.
  The offer letter generator takes a rate as a form input, prints it, and
  discards it. It is never written to the database.
- Social Security numbers
- Date of birth year. Birth month and birth day only.
- Bank or direct deposit details
- I-9 forms and work authorization documents — these live in a separate file
  by law and do not belong in this system
- Medical information beyond Cal/OSHA Form 300 fields. Injury type, body part,
  treatment level, days away and restricted days are permitted. Diagnosis,
  physician notes, restrictions paperwork and workers' comp correspondence are
  not, and there must be no field where they could be entered.
- Narrative employee relations detail, witness statements, and complainant
  identity. The case skeleton and structured question responses live here; the
  full narrative stays in the Word investigation notes.

## Data model rules
- One employees table. Every module foreign-keys to it. No module keeps its
  own roster.
- Compute, never store: manager name, anniversary, years of service, tenure
  band, review due dates, attendance frequency, all rates.
- Denormalize division onto disciplinary_actions and incidents at the time of
  the event. A transfer must not rewrite last year's numbers.
- Policy acknowledgment attaches to a document VERSION, not a document.
  Publishing a new version resets that column to missing.
- Employee relations case IDs continue the existing ER-YYYY-### sequence.
  Do not renumber.
- Attendance has no point system. Two occurrence types only: No Call No Show,
  and Other with a required reason.

## Behavior rules
- Every write records who did it and when. entered_by is never optional.
- Generating a document writes its record: a write-up creates the disciplinary
  action and a follow-up task; a termination writes separation_date and
  separation_type; an incident's corrective action becomes a task with an owner.
  A document that generates without filing defeats the reporting.
- An employee relations case cannot move to review while any interview is
  pending.
- Only David can close an employee relations case.
- Every report states its date range and its denominator on screen and in print.

## Firebase
- Security rules are the security model. Every collection denies by default and
  allows only authenticated users listed in /users. Closing an employee
  relations case requires role == 'david', enforced in the rules, not the UI.
- Rules must reject any document containing a pay, SSN or date-of-birth field.
- Test rules with the Firebase emulator before any real data is loaded.
- No Cloud Functions unless something genuinely cannot be done client-side.
  110 employees is small — aggregate in the browser.
- Add composite indexes to firestore.indexes.json as queries are written.

## Style
- Design system comes from hr-platform-mock.html. Do not invent a new one.
- Oregon green #154733 is the only green. Lighter tints of the same hue are
  allowed in dark mode where #154733 fails contrast.
- Red means late or at risk. Nothing else is red.
- No emojis anywhere in the UI or in generated documents.
- Spanish output is built in from the start for every employee-facing document,
  not added later.

## How to work with me
- I am not an engineer. Explain tradeoffs in plain language.
- Tell me when I'm asking for something that will cause a problem later.
- Do not add features I did not ask for.
- Stop and ask when a requirement is ambiguous rather than guessing.
