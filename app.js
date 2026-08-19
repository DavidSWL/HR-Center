/**
 * app.js
 * Shared shell: sidebar, theme toggle, idle-timeout, small helpers used
 * by every page. Each page's own <script type="module"> calls initShell()
 * once, then does that page's own work.
 */

import { logout } from './auth.js';
import { db } from './firebaseconfig.js';
import { collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const IDLE_LIMIT_MS = 30 * 60 * 1000; // matches the login page's stated policy

export const NAV_SECTIONS = [
  {
    label: 'Overview',
    items: [
      { key: 'dashboard', label: 'Dashboard', href: 'dashboard.html', built: true },
    ],
  },
  {
    label: 'People',
    items: [
      { key: 'roster', label: 'Employee roster', href: 'employees.html', built: true },
      { key: 'comp', label: 'Policy compliance', href: 'compliance.html', built: true },
      { key: 'attendance', label: 'Attendance', href: 'attendance.html', built: true },
      { key: 'reviews', label: 'New hires & reviews', href: 'reviews.html', built: true },
      { key: 'discipline', label: 'Disciplinary actions', href: 'discipline.html', built: true },
      { key: 'terminations', label: 'Terminations', href: 'docgen.html?open=termination', built: true },
      { key: 'notes', label: 'Notes & files', href: 'notes.html', built: true },
    ],
  },
  {
    label: 'Safety',
    items: [
      { key: 'incidents', label: 'Incidents', href: 'safety.html', built: true },
      // Safety meetings tab pulled from nav for now, per request — the page
      // itself and its data are untouched, just unlinked.
    ],
  },
  {
    label: 'HR team',
    items: [
      { key: 'tasks', label: 'Tasks', href: 'tasks.html', built: true },
      { key: 'training', label: 'Team training', href: 'training.html', built: true },
      { key: 'completed', label: 'Completed work', href: 'activity.html', built: true },
    ],
  },
  {
    label: 'Reporting',
    items: [
      { key: 'reports', label: 'Reports', href: 'reports.html', built: true },
      { key: 'er', label: 'Employee relations', href: 'er.html', built: true },
      { key: 'docgen', label: 'Document generator', href: 'docgen.html', built: true },
    ],
  },
  {
    label: 'System',
    items: [
      { key: 'settings', label: 'Settings', href: 'settings.html', built: true },
    ],
  },
];

const ROLE_LABELS = {
  david: 'David',
  tanya: 'Tanya',
  admin_assistant: 'Admin Assistant',
};

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function renderSidebar(activeKey, profile) {
  const sections = NAV_SECTIONS.map((section) => {
    const items = section.items.map((item) => {
      if (!item.built) {
        return `<span class="nv disabled">${escapeHtml(item.label)}<span class="b soon">Soon</span></span>`;
      }
      const activeClass = item.key === activeKey ? ' on' : '';
      return `<a class="nv${activeClass}" href="${item.href}">${escapeHtml(item.label)}</a>`;
    }).join('');
    return `<div class="ng">${escapeHtml(section.label)}</div>${items}`;
  }).join('');

  const roleLabel = ROLE_LABELS[profile?.role] || profile?.role || '';

  return `
    <div class="side-b">
      <div class="w">SouthWest<br>Landscape <i>/ HR</i></div>
      <div class="m">Est. 1982 — 44 years</div>
    </div>
    <nav class="nav">${sections}</nav>
    <div class="side-f">
      Signed in <b>${escapeHtml(profile?.name || profile?.email || '')}</b> (${escapeHtml(roleLabel)})<br>
      HR access only
      <button id="signout-btn" type="button">Sign out</button>
    </div>
  `;
}

function initTheme() {
  const stored = localStorage.getItem('hr-theme') || 'light';
  const mainEl = document.getElementById('main');
  const setTheme = (theme) => {
    if (mainEl) mainEl.dataset.theme = theme;
    document.body.dataset.theme = theme;
    document.querySelectorAll('.toggle button').forEach((b) => {
      b.classList.toggle('on', b.dataset.t === theme);
    });
    localStorage.setItem('hr-theme', theme);
  };
  setTheme(stored);
  document.querySelectorAll('.toggle button').forEach((b) => {
    b.addEventListener('click', () => setTheme(b.dataset.t));
  });
}

function initIdleTimeout() {
  let timer;
  const reset = () => {
    clearTimeout(timer);
    timer = setTimeout(() => { logout(); }, IDLE_LIMIT_MS);
  };
  ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach((evt) =>
    window.addEventListener(evt, reset, { passive: true })
  );
  reset();
}

/**
 * Call once per page, after requireAuth() resolves. Renders the sidebar,
 * wires sign-out, sets up the light/dark toggle, and starts the idle
 * timer. Returns nothing — the page keeps going with its own
 * module-scoped code after this.
 */
export function initShell(activeKey, profile) {
  const sidebarEl = document.getElementById('sidebar');
  if (sidebarEl) {
    sidebarEl.innerHTML = renderSidebar(activeKey, profile);
    document.getElementById('signout-btn')?.addEventListener('click', logout);
  }
  initTheme();
  initIdleTimeout();
  initErNotifications(profile);
}

/**
 * Cases waiting on David's review get a badge on the nav item everywhere
 * in the app, not just inside Employee Relations itself — that's the
 * point of a notification. The pulse/chime only fire for David, since
 * he's the one being notified, not whoever pushed the case forward.
 */
async function initErNotifications(profile) {
  const erLink = document.querySelector('.nv[href="er.html"]');
  if (!erLink) return;
  try {
    const snap = await getDocs(query(collection(db, 'er_cases'), where('status', '==', 'review')));
    const count = snap.size;
    if (count === 0) return;

    const badge = document.createElement('span');
    badge.className = 'b';
    badge.textContent = String(count);
    erLink.appendChild(badge);

    if (profile?.role === 'david') {
      erLink.classList.add('er-flash');
      badge.classList.add('er-pulse');
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx && !sessionStorage.getItem('er-chime-played')) {
          const ctx = new AudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.frequency.value = 660;
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
          osc.connect(gain).connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.6);
          sessionStorage.setItem('er-chime-played', '1');
        }
      } catch { /* autoplay can be blocked — the visual flash still shows */ }
    }
  } catch (err) {
    console.error('ER notification check failed', err);
  }
}

export function showToast(message, type = '') {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    toast.hidden = true;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.hidden = false;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.hidden = true; }, 3500);
}

export function formatDate(value) {
  if (!value) return '—';
  const d = typeof value === 'string' ? new Date(value + 'T00:00:00') : value;
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function yearsSince(dateStr) {
  if (!dateStr) return '—';
  const start = new Date(dateStr + 'T00:00:00');
  if (Number.isNaN(start.getTime())) return '—';
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const beforeAnniversary = (now.getMonth() < start.getMonth()) ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (beforeAnniversary) years--;
  return Math.max(years, 0);
}

// Field names the security rules reject on any write — matched here too,
// client-side, before an import ever reaches Firestore. Catching it here
// means one bad column shows up as a clear warning in the preview instead
// of silently failing the whole batch when the rules refuse the write.
const FORBIDDEN_COLUMN_PATTERNS = [
  /pay.?rate/i, /pay.?type/i, /salary/i, /bonus/i, /comp.?history/i, /hourly.?rate/i,
  /^employee.?type$/i, // "Hourly" / "Salary" — this *is* pay type, even though the header doesn't say "pay"
  /^ssn$/i, /social.?security/i, /ssn.?last4/i,
  /bank.?account/i, /bank.?routing/i, /direct.?deposit/i,
  /^dob$/i, /date.?of.?birth/i, /birth.?year/i,
  /^i9$/i, /work.?auth/i,
  /diagnosis/i, /physician/i, /workers.?comp/i, /medical.?restriction/i,
  /witness.?statement/i, /complainant.?identity/i,
];

/** Tokenizes CSV text into an array of arrays — quoted fields with
 * embedded commas and doubled quotes ("" -> ") are handled. No header
 * assumptions here; that's a separate step, because real exports
 * routinely have title rows above the real header row. */
export function csvTextToRows(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  const pushField = () => { row.push(field); field = ''; };
  const pushRow = () => { pushField(); rows.push(row); row = []; };

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      pushField();
    } else if (c === '\n') {
      if (field.length || row.length) pushRow();
    } else if (c === '\r') {
      // ignore — \r\n is handled by the \n branch
    } else {
      field += c;
    }
  }
  if (field.length || row.length) pushRow();
  return rows;
}

/**
 * Reads a .csv or .xlsx file into { sheetName: rowsOfArrays } — every
 * cell stringified, dates rendered as YYYY-MM-DD. A .csv file always
 * comes back as a single sheet named "Sheet1". xlsx parsing is done by
 * SheetJS, loaded from its own CDN since Firebase's doesn't carry it —
 * everything still runs client-side, nothing leaves the browser.
 */
export async function readSpreadsheetSheets(file) {
  const isXlsx = /\.xlsx$/i.test(file.name) ||
    file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

  if (!isXlsx) {
    return { Sheet1: csvTextToRows(await file.text()) };
  }

  const XLSX = await import('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/xlsx.mjs');
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: 'array', cellDates: true });
  const sheets = {};
  for (const name of wb.SheetNames) {
    sheets[name] = XLSX.utils.sheet_to_json(wb.Sheets[name], { header: 1, raw: false, dateNF: 'yyyy-mm-dd', defval: '' })
      .map((row) => row.map((cell) => (cell instanceof Date ? cell.toISOString().slice(0, 10) : String(cell ?? '').trim())));
  }
  return sheets;
}

const normalizeHeader = (h) => String(h || '').trim().toLowerCase().replace(/[()]/g, '').replace(/[\s.\-/–—]+/g, '_').replace(/_+$/, '');

/**
 * Finds the real header row in a block of rows-of-arrays — real
 * exports routinely have a title and a description row before the
 * actual headers (see the roster/incident workbooks this was built
 * against). Scores every row by how many cells match a normalized
 * hint keyword and picks the best match, defaulting to row 0 if
 * nothing scores above zero so a clean file still works.
 */
function findHeaderRow(rowsOfArrays, hintKeywords) {
  const hints = new Set(hintKeywords.map(normalizeHeader));
  let best = 0, bestScore = -1;
  for (let i = 0; i < Math.min(rowsOfArrays.length, 15); i++) {
    const score = rowsOfArrays[i].filter((cell) => hints.has(normalizeHeader(cell))).length;
    if (score > bestScore) { bestScore = score; best = i; }
  }
  return bestScore > 0 ? best : 0;
}

/**
 * Turns rows-of-arrays into { headers, rows, forbiddenColumns },
 * auto-detecting the header row via hintKeywords (pass field names you
 * expect to see, in any casing/spacing — "Employee ID", "hire date",
 * etc.). Rows are plain objects keyed by normalized header. Any column
 * matching a pay/SSN/DOB/etc. pattern is dropped from every row
 * entirely, not just flagged, and listed in forbiddenColumns.
 */
export function objectsFromRows(rowsOfArrays, hintKeywords = []) {
  const headerRowIndex = findHeaderRow(rowsOfArrays, hintKeywords);
  const rawHeaders = (rowsOfArrays[headerRowIndex] || []).map((h) => String(h).trim());
  const headers = rawHeaders.map(normalizeHeader);

  const forbiddenColumns = [];
  const keepIndex = headers.map((h, i) => {
    const isForbidden = h !== '' && FORBIDDEN_COLUMN_PATTERNS.some((p) => p.test(h));
    if (isForbidden) forbiddenColumns.push(rawHeaders[i]);
    return !isForbidden;
  });

  const dataRows = rowsOfArrays.slice(headerRowIndex + 1);
  const objects = dataRows
    .filter((r) => r.some((v) => String(v).trim() !== ''))
    .map((r) => {
      const obj = {};
      headers.forEach((h, i) => {
        if (keepIndex[i] && h) obj[h] = String(r[i] || '').trim();
      });
      return obj;
    });

  return { headers: headers.filter((_, i) => keepIndex[i]), rows: objects, forbiddenColumns };
}
