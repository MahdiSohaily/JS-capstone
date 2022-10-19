/* eslint-disable linebreak-style */
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
const closeMenu = document.querySelector('.close-menu');

menuIcon.addEventListener('click', (e) => {
  e.target.style.display = 'none';
  navList.style.display = 'block';
  navList.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  menuIcon.style.display = 'block';
  navList.style.display = 'none';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) {
    menuIcon.style.display = 'none';
    navList.classList.remove('open');
    navList.style.display = 'block';
  } else {
    navList.classList.add('open');
    menuIcon.style.display = 'block';
    navList.style.display = 'none';
  }
});
