/**
 * app.js
 * Shared shell: sidebar, theme toggle, idle-timeout, small helpers used
 * by every page. Each page's own <script type="module"> calls initShell()
 * once, then does that page's own work.
 */

import { logout } from './auth.js';

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
      { key: 'reviews', label: 'New hires & reviews', href: '#', built: false },
      { key: 'discipline', label: 'Disciplinary actions', href: '#', built: false },
      { key: 'notes', label: 'Notes & files', href: 'notes.html', built: true },
    ],
  },
  {
    label: 'Safety',
    items: [
      { key: 'incidents', label: 'Incidents', href: '#', built: false },
      { key: 'safetymeetings', label: 'Safety meetings', href: '#', built: false },
    ],
  },
  {
    label: 'HR team',
    items: [
      { key: 'tasks', label: 'Tasks', href: 'tasks.html', built: true },
      { key: 'training', label: 'Team training', href: '#', built: false },
      { key: 'completed', label: 'Completed work', href: '#', built: false },
    ],
  },
  {
    label: 'Reporting',
    items: [
      { key: 'reports', label: 'Reports', href: '#', built: false },
      { key: 'er', label: 'Employee relations', href: '#', built: false },
      { key: 'docgen', label: 'Document generator', href: '#', built: false },
    ],
  },
  {
    label: 'System',
    items: [
      { key: 'settings', label: 'Settings', href: '#', built: false },
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
