
//* Burger Menu

const burger = document.getElementById('burger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')

burger.addEventListener('click', () => {

  if(header.classList.contains('open')){ // Burger is closing
    header.classList.remove('open')
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
    menu.classList.remove('fade-in')
    menu.classList.add('fade-out')
    body.classList.remove('noscroll')
  } else { // Burger is opening
    header.classList.add('open')
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
    menu.classList.remove('fade-out')
    menu.classList.add('fade-in')
    body.classList.add('noscroll')
  }
})




//* Swiper initialisation
const screenWidth = window.innerWidth

let slidesPerView = 1

if(screenWidth >= 1023){
  slidesPerView = 2.5
}

const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 30,
  slidesPerView,
  centeredSlides: true,
  loop: true,
});