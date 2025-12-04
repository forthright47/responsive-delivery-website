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
window.addEventListener('scroll', scrollHeader);

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
    disableOnInteraction: false,
  }
});

// Show Scroll Up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// Dark Theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';

// Retrieve saved theme
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Apply saved theme
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === iconTheme ? 'add' : 'remove'](iconTheme);
}

// Toggle
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light');
    localStorage.setItem('selected-icon', themeButton.classList.contains(iconTheme) ? iconTheme : 'ri-moon-fill');
});


// Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
})

// Home Section Animation
sr.reveal(`.home-title, .home-description, .home-data, .button`, {interval: 100})
sr.reveal(`.home-image`, {delay: 900})
sr.reveal(`.home-phone`, {origin: 'left', delay: 1500})
sr.reveal(`.home-comment`, {origin: 'right', delay: 1800})
sr.reveal(`.home-social`, {origin: 'bottom', delay: 2100})

// Service Section Animation
sr.reveal(`.service-card, .service-title, .service-description`, {interval: 100})

// Menu Section Animation
sr.reveal(`.menu-card`, {interval: 100})

// Reviews Section Animation
sr.reveal(`.reviews-content`, {origin: 'right'})
sr.reveal(`reviews-image`, {origin: 'left', delay: 600})


// App section Animation
sr.reveal(`.app .section-subtitle, .app .section-title, .app-description, .app .button`, {interval: 100})
sr.reveal(`.app-image`, {origin: 'bottom', delay: 900})

// Map Section Animation
sr.reveal(`.map-area`, {origin: 'right'})
sr.reveal(`.map-card`, {origin: 'left', delay: 600})

// Footer Section Animation
sr.reveal(`.footer-data, .footer-content div`, {interval: 100})