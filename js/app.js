//Hamburger button

const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
});




// ScrollInto
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



// active menu
const sections = document.querySelectorAll('.section');
const navLi = document.querySelectorAll ('nav ul li');

window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop-sectionHeight/3)){
            current = section.getAttribute('id');
        }
    })
navLi.forEach(li =>{
    li.classList.remove('active');
    if(li.classList.contains(current)){
        li.classList.add('active')
    }
})
})
