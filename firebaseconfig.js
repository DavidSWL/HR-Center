/**
 * firebaseconfig.js
 * Firebase initialization for the SouthWest Landscape HR Platform.
 *
 * SETUP: Replace every placeholder below with the values from
 *   Firebase Console → Project Settings → Your apps → Firebase SDK snippet
 *
 * This file is safe to commit — the apiKey identifies the project, it
 * isn't a secret. What actually protects the data is firestore.rules and
 * storage.rules, deployed separately.
 */

import { initializeApp }   from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth }         from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore }    from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getStorage }      from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

// ── Replace these with your HR-Center project's own credentials ────────────
const firebaseConfig = {
  apiKey: "AIzaSyA_uEz9yivQy5WqYF69XLbAUsq8ELu_QB4",
  authDomain: "hr-center-8ad6f.firebaseapp.com",
  projectId: "hr-center-8ad6f",
  storageBucket: "hr-center-8ad6f.firebasestorage.app",
  messagingSenderId: "262992323845",
  appId: "1:262992323845:web:60709d7dc994000710436c"
};
// ─────────────────────────────────────────────────────────────────────────

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
