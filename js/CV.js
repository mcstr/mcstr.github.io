// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // VALIDATE THAT TOGGLE AND NAV EXIST

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // ADD SHOW-MENU CLASS TO THE DIV THAT WITH THE nav__menu CLASS

      nav.classList.toggle('show-menu');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// REMOVE MENU MOBILE WHEN CLICKING ONE OF THE OPTIONS

const navLink = document.querySelectorAll('.nav__link');
console.log(navLink);

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // when click on each nav__link, we remove the show menu class

  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// link SCROLL SECTION ACTIVE LINK

const sections = document.querySelectorAll('section[id]');
console.log(sections);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// SHOW SCROLL TOP

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');

  //When the scroll is higher that 560 viewport height, add the show-scroll class to the tag wit the scroll
  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop);

// DARK LIGHT THEME

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validation the dark-theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// we validate if the user previously chose a topic

if (selectedTheme) {
  //if the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );

  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
  // add or remove dark/light icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // save to localstorage the them and icon
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
