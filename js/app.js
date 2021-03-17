//Hamburger button

const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
});