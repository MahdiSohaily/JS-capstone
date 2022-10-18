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
  navList.classList.remove('open');
});
