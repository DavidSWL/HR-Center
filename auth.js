/**
 * auth.js
 * Login, logout, session persistence, and the /users role lookup every
 * page needs to know who's signed in and what they're allowed to do.
 */

import { auth, db } from './firebaseconfig.js';
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {
  doc,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export async function login(email, password, rememberMe = false) {
  const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
  await setPersistence(auth, persistence);
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  await signOut(auth);
  window.location.href = '/HR-Center/index.html';
}

export async function requestPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

export function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

/**
 * Every HR staff account has a /users/{uid} doc carrying name + role.
 * This is the same doc the security rules read to decide what a person
 * can do — this is just the app reading it to know what to show.
 */
export async function getCurrentUserProfile() {
  const user = await getCurrentUser();
  if (!user) return null;
  const snap = await getDoc(doc(db, 'users', user.uid));
  if (!snap.exists()) {
    return { uid: user.uid, email: user.email, name: user.email, role: null };
  }
  return { uid: user.uid, email: user.email, ...snap.data() };
}

/**
 * Auth guard — call at the top of every protected page. Redirects to
 * index.html if not signed in, or if signed in without a /users doc
 * (authenticated but not HR staff — the rules would refuse them anyway).
 */
export async function requireAuth() {
  const profile = await getCurrentUserProfile();
  if (!profile || !profile.role) {
    window.location.href = '/HR-Center/index.html';
    return null;
  }
  return profile;
}

export async function redirectIfAuthenticated() {
  const user = await getCurrentUser();
  if (user) {
    window.location.href = '/HR-Center/dashboard.html';
  }
}

export function friendlyAuthError(err) {
  const map = {
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-not-found': 'No account found with that email address.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/user-disabled': 'This account has been disabled. Contact your administrator.',
    'auth/network-request-failed': 'Network error. Check your connection and try again.',
  };
  return map[err.code] || 'An unexpected error occurred. Please try again.';
}
