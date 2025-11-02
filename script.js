// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  toggle.classList.toggle('open');
});

// Fade-in scroll animation
const fadeEls = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeEls.forEach(el => {
  appearOnScroll.observe(el);
});
