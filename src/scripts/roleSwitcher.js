const focus = document.querySelector('#role-focus');
if (focus) {
  focus.closest('label').hidden = false;
  focus.addEventListener('change', () => {
    for (const item of document.querySelectorAll('[data-roles]')) {
      const roles = item.dataset.roles.split(',').map(role => role.trim());
      const matches = roles.includes(focus.value) || roles.includes('all');
      item.classList.toggle('role-match', focus.value !== 'general' && matches);
    }
  });
}
