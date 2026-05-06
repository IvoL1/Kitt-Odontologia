const navList = document.querySelector('.header__nav-list');

const menuToggle = document.querySelector('.header__menu-toggle');

const menuToggleItems = document.querySelectorAll('.header__nav-list a');

function toggleMenu() {
  navList.classList.toggle('open');
  menuToggle.classList.toggle('is-open');
}

menuToggle.addEventListener('click', toggleMenu);

menuToggleItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (navList.classList.contains('open')) {
      toggleMenu();
    }
  });
});
