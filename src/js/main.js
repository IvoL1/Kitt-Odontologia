const navList = document.querySelector('.header__nav-list');

const menuToggle = document.querySelector('.header__menu-toggle');

function toggleMenu() {
  navList.classList.toggle('open');
  menuToggle.classList.toggle('is-open');
}

menuToggle.addEventListener('click', toggleMenu);
