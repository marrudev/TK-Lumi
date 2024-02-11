// Nav menu toggle
const menuIcon = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-menu');
const body = document.querySelector('html');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('disable-scroll');
});

// Menu button toggle
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// ADDED

// Close menu when clicking outside of it
menu.addEventListener('click', event => {
  if (!event.target.closest('.nav-menu')) {
    // If clicked element is not inside the menu, close the menu
    closeMenu();
  }
});

// Close menu when clicking on any link inside the menu
const menuLinks = document.querySelectorAll('.nav-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

function closeMenu() {
  menu.classList.remove('active');
  body.classList.remove('disable-scroll');
  menuOpen = false;
  menuBtn.classList.remove('open');
}

// END ADDED

window.addEventListener('scroll', function () {
  var container = document.getElementById('header-nav');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 10) {
    // Change background color after scrolling 100 pixels
    container.classList.add('bg-white');
  } else {
    container.classList.remove('bg-white');
  }
});
