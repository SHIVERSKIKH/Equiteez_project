const mobileMenu = document.querySelector('.menu-mobile-btn');
const blockMenu = document.querySelector('.menu-mobile-list');

mobileMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.body.classList.toggle('stop-scrolling');
    blockMenu.classList.toggle('visit');
  };
 
