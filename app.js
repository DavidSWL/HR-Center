/**
 * app.js
 * Shared shell: sidebar, theme toggle, small helpers used by every page.
 * Each page's own <script type="module"> calls initShell() once, then
 * does that page's own work.
 */

import { logout } from './auth.js';

export const NAV_SECTIONS = [
  {
    label: 'Overview',
    items: [
      { key: 'dashboard', label: 'Dashboard', href: '/dashboard.html', built: true },
    ],
  },
  {
    label: 'People',
    items: [
      { key: 'employees', label: 'Employees', href: '/employees.html', built: true },
      { key: 'compliance', label: 'Compliance', href: '#', built: false },
      { key: 'attendance', label: 'Attendance', href: '#', built: false },
      { key: 'discipline', label: 'Discipline & Notes', href: '#', built: false },
    ],
  },
  {
    label: 'Safety & ER',
    items: [
      { key: 'safety', label: 'Safety', href: '#', built: false },
      { key: 'er', label: 'Employee Relations', href: '#', built: false },
    ],
  },
  {
    label: 'Work',
    items: [
      { key: 'tasks', label: 'Tasks', href: '#', built: false },
      { key: 'training', label: 'Training', href: '#', built: false },
      { key: 'documents', label: 'Documents', href: '#', built: false },
      { key: 'reports', label: 'Reports', href: '#', built: false },
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
        return `<span class="nav-item disabled">${escapeHtml(item.label)}<span class="soon-tag">Soon</span></span>`;
      }
      const activeClass = item.key === activeKey ? ' active' : '';
      return `<a class="nav-item${activeClass}" href="${item.href}">${escapeHtml(item.label)}</a>`;
    }).join('');
    return `<div class="nav-section-label">${escapeHtml(section.label)}</div>${items}`;
  }).join('');

  const roleLabel = ROLE_LABELS[profile?.role] || profile?.role || '';

  return `
    <div class="sidebar-brand">SWL HR Center<small>SouthWest Landscape</small></div>
    ${sections}
    <div class="sidebar-footer">
      <div class="sidebar-user">${escapeHtml(profile?.name || profile?.email || '')}</div>
      <div class="sidebar-role">${escapeHtml(roleLabel)}</div>
      <button class="sidebar-signout" id="signout-btn" type="button">Sign out</button>
    </div>
  `;
}

function initTheme() {
  const stored = localStorage.getItem('hr-theme');
  if (stored === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const setLabel = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    toggle.textContent = isDark ? 'Light mode' : 'Dark mode';
  };
  setLabel();
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('hr-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('hr-theme', 'dark');
    }
    setLabel();
  });
}

/**
 * Call once per page, after requireAuth() resolves. Renders the sidebar,
 * wires sign-out, and sets up the light/dark toggle. Returns nothing —
 * the page keeps going with its own module-scoped code after this.
 */
export function initShell(activeKey, profile) {
  const sidebarEl = document.getElementById('sidebar');
  if (sidebarEl) {
    sidebarEl.innerHTML = renderSidebar(activeKey, profile);
    document.getElementById('signout-btn')?.addEventListener('click', logout);
  }
  initTheme();
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
