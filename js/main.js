// show menu

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// active and remove menu

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  // active link
  navLink.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');

  // remove side menu on mobile
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show');
}

navLink.forEach((item) => item.addEventListener('click', linkAction));

// scroll reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

// scroll home

sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 50 });
sr.reveal('.home__img', { delay: 75 });
sr.reveal('.home__social-icon', { interval: 80 });

// scroll about
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 75 });
sr.reveal('.about__text', { delay: 80 });

// scroll skills
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', { delay: 75 });
sr.reveal('.skills__data', { delay: 75 });
sr.reveal('.skills__img', { delay: 80 });

// scroll work

sr.reveal('.work__img', { interval: 60 });
