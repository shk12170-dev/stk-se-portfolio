const toggles = document.querySelectorAll('.project-toggle');
toggles.forEach((toggle) => toggle.addEventListener('click', () => {
  const project = toggle.closest('.project');
  const open = project.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
}));
const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-header nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.style.display = open ? '' : 'flex';
  nav.style.position = open ? '' : 'absolute';
  nav.style.top = open ? '' : '70px'; nav.style.right = open ? '' : '18px';
  nav.style.background = open ? '' : '#0a1018'; nav.style.padding = open ? '' : '18px';
  nav.style.flexDirection = open ? '' : 'column';
});
