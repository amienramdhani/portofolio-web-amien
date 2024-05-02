// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixNavbar = header.offsetTop;

  if (window.pageYOffset > fixNavbar) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// ini untuk bagian hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
