'use script';

// window.addEventListener('scroll', _.throttle((e) => {
//     console.log(e)
// }, 2000))

// const searchInput = document.querySelector('.search__input');

// searchInput.addEventListener('input', _.debounce((event) => {
//     console.log(event.target.value)
// }, 3000))

const navLinks = Array.from(document.querySelectorAll('.nav__link'));
const sections = Array.from(document.querySelectorAll('.navigation-section'));

const addActiveLink = link => {
  link.classList.add('active');
};

const removeActiveLink = link => {
  link.classList.remove('active');
};

const setActiveNavLinkByNavData = navData => {
  const activeLink = navLinks.find(
    elem => elem.getAttribute('data-nav') === navData,
  );
  addActiveLink(activeLink);
};

const options = {
  rootMargin: '50px',
  threshold: 1,
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(zoo);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

observer.observe(sections);

addActiveLink(navLinks[0]);
