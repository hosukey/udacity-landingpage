//Hamburger button

const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
});



/**
* Define Global Variables
* 
*/
const homeBtn = document.querySelector('.navbar__item--aboutus');
const homePage = document.querySelector('.section0');

const serviceBtn = document.querySelector('.navbar__item--services');
const servicePage = document.querySelector('.section1');

const portfolioBtn = document.querySelector('.navbar__item--portfolio');
const portfolioPage = document.querySelector('.section2');

const contactBtn = document.querySelector('.navbar__item--contact');
const contactPage = document.querySelector('.section3');


portfolioBtn.addEventListener('click', ()=>{
    portfolioPage.scrollIntoView({
        behavior: 'smooth'
    });
});

serviceBtn.addEventListener('click', ()=>{
    servicePage.scrollIntoView({
        behavior:'smooth'
    });
});

contactBtn.addEventListener('click', ()=>{
    contactPage.scrollIntoView({
        behavior:'smooth'
    });
});

homeBtn.addEventListener('click', ()=>{
    homePage.scrollIntoView({
        behavior:'smooth'
    });
});



/**
* End Global Variables
* Start Helper Functions
* 
*/



/**
* End Helper Functions
* Begin Main Functions
* 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
* End Main Functions
* Begin Events
* 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
