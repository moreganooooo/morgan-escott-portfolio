const focus = document.querySelector('#role-focus');
const list = document.querySelector('.work-list');
if (focus && list) {
  focus.closest('label').hidden = false;
  focus.addEventListener('change', () => {
    const active = focus.value !== 'general';
    list.toggleAttribute('data-role-filtered', active);
    for (const item of document.querySelectorAll('[data-roles]')) {
      const roles = item.dataset.roles.split(',').map(role => role.trim());
      const matches = roles.includes(focus.value) || roles.includes('all');
      item.classList.toggle('role-match', active && matches);
      item.toggleAttribute('data-role-match', active && matches);
    }
  });
}