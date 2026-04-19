const ROLES = {
  general:     { label: 'General',                  resume: '/resumes/morgan-escott-resume.pdf' },
  'sales-ops': { label: 'Sales Operations & CRM',   resume: '/resumes/morgan-escott-sales-ops.pdf' },
  marketing:   { label: 'Marketing & Copywriting',  resume: '/resumes/morgan-escott-marketing.pdf' },
  creative:    { label: 'Branding & Creative',       resume: '/resumes/morgan-escott-creative.pdf' },
  admin:       { label: 'Executive & Admin Support', resume: '/resumes/morgan-escott-admin.pdf' },
};

let activeRole = 'general';

function setRole(role) {
  activeRole = role;

  // 1. Update trigger label
  const label = document.getElementById('role-label');
  if (label) label.textContent = `Viewing: ${ROLES[role].label}`;

  // 2. Update resume button href
  const resumeBtn = document.querySelector('[data-resume-link]');
  if (resumeBtn) resumeBtn.href = ROLES[role].resume;

  // 3. Update aria-selected on menu items
  document.querySelectorAll('[data-role]').forEach(item => {
    item.setAttribute('aria-selected', item.dataset.role === role ? 'true' : 'false');
  });

  // 4. Swap visible role-specific content blocks
  document.querySelectorAll('[data-role-content]').forEach(el => {
    el.style.transition = 'opacity 300ms ease';
    el.style.opacity = '0';
    setTimeout(() => {
      el.hidden = !(el.dataset.roleContent === role || el.dataset.roleContent === 'general');
      el.style.opacity = '1';
    }, 150);
  });

  // 5. Dim non-relevant career/project cards
  document.querySelectorAll('[data-roles]').forEach(el => {
    const roles = el.dataset.roles.split(',').map(r => r.trim());
    const isRelevant = role === 'general' || roles.includes(role) || roles.includes('all');
    el.style.transition = 'opacity 300ms ease, filter 300ms ease';
    el.style.opacity = isRelevant ? '1' : '0.3';
    el.style.filter = isRelevant ? 'none' : 'grayscale(0.5)';
  });
}

function initRoleSwitcher() {
  const trigger = document.getElementById('role-trigger');
  const menu = document.querySelector('.role-switcher__menu');
  if (!trigger || !menu) return;

  trigger.addEventListener('click', () => {
    const isOpen = !menu.hidden;
    menu.hidden = isOpen;
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });

  menu.addEventListener('click', (e) => {
    const item = e.target.closest('[data-role]');
    if (!item) return;
    setRole(item.dataset.role);
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', initRoleSwitcher);
document.addEventListener('astro:after-swap', initRoleSwitcher);
