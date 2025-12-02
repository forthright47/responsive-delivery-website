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