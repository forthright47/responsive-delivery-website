// Show Menu
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
          toggle = document.getElementById(toggleId);

    toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
    });
}
showMenu('nav-menu', 'nav-toggle');

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Add Shadow Header
const scrollHeader = () => {
    const header = document.getElementById('header');

    // Add a class if the bottom offset is greater than 50 of viewport height
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

// Swiper Reviews
const swiperReviews = new Swiper('.reviews-swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  speed: 600,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    desableOnInteraction: false,
  }
});