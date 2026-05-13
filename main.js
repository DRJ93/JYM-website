 const hamburger = document.getElementById('hamburger');
const navLinks   = document.getElementById('nav-links');
const overlay    = document.getElementById('menu-overlay');

function openMenu() {
  navLinks.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = ''; // evita scroll de fondo
  hamburger.querySelector('i').classList.replace('bi-list', 'bi-x');
}

function closeMenu() {
  navLinks.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  hamburger.querySelector('i').classList.replace('bi-x', 'bi-list');
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

overlay.addEventListener('click', closeMenu);
