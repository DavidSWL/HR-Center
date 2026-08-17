# HR-Center

Internal HR platform for SouthWest Landscape (110-employee landscaping
company, Southern California). Firebase (Auth, Firestore, Storage, Hosting)
on the backend, plain browser app on the front, no server in between.

## Status

This session built the security foundation — the part that has to be right
before any real employee data goes anywhere near this project:

- `firestore.rules` — deny-by-default security rules for every collection,
  role-gated closure of employee relations cases, and rejection of any
  write containing a pay, SSN, date-of-birth-year, bank, I-9, or medical
  field. See `docs/security-rules-explained.md` for a line-by-line
  walkthrough in plain language.
- `storage.rules` — same authorization model applied to uploaded documents
  (disciplinary write-ups, note attachments).
- `docs/firestore-schema.md` — the Firestore collection structure (no
  tables, no joins — see that doc for how the relational build plan maps
  onto documents and subcollections).
- `tests/firestore.rules.test.js` — 22 automated tests that run the rules
  above against the local Firebase emulator (no real project or login
  needed). Run them with `npm install && npm run test:rules`.
- `CLAUDE.md` — the project rules for whoever (human or Claude Code) builds
  the rest of this from here.
- `firebase.json` / `firestore.indexes.json` — emulator and deploy config.

Nothing here writes real employee data anywhere yet. There's no app UI
beyond a placeholder `public/index.html` — that's the next piece of work.

## What's still needed before this can go further

Three things need a human in a browser, logged into real accounts — nothing
in this repo can do these on its own:

1. **A Firebase project**, created at [console.firebase.google.com](https://console.firebase.google.com),
   with Firestore location set to `us-west1` (cannot be changed later —
   confirm before creating) and Authentication (email/password), Firestore,
   Storage, and Hosting enabled. When creating the Firestore database,
   choose **production mode**, not test mode — test mode leaves the
   database open to anyone for 30 days. Production mode starts locked down;
   deploying `firestore.rules` from this repo (`firebase deploy --only
   firestore:rules`) puts the real rules in place immediately.
2. **`firebase login`**, run locally, to connect the Firebase CLI to that
   project, followed by `firebase use --add` to write a `.firebaserc`
   pointing at the real project ID. (The project ID itself isn't a secret —
   it's fine to commit `.firebaserc` once it exists.)
3. **The three design/spec input files** referenced in the build plan —
   `hr-platform-mock.html`, `hr-platform-build-plan.md`, and
   `hr-shell-oregon.html` — need to be added to this repo before the actual
   app screens get built. They define the data model in full detail and the
   entire design system; nothing past the security foundation should be
   built without them.

## What must never be committed

- Any `.env` file
- A Firebase **service account key** (a JSON file, typically named like
  `*-firebase-adminsdk-*.json`) — this grants full admin access to the
  project and must never leave a local machine or a secrets manager
- Both are already covered by `.gitignore`

The `apiKey` that will eventually appear in the app's Firebase web config is
**not** a secret — it identifies the project, nothing more, and is meant to
ship in browser code. What actually protects the data is `firestore.rules`
and `storage.rules`.

## Local development

```
npm install
npm run test:rules   # runs the security rules against the local emulator
```

No Firebase login or real project is required to run the tests — they use
a `demo-` project ID, which the emulator recognizes as local-only.
