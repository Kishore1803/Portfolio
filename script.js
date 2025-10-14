// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Active link highlight on scroll
const links = document.querySelectorAll('.nav-link');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

const onScroll = () => {
  const y = window.scrollY + 120;
  sections.forEach((sec, i) => {
    if (!sec) return;
    const start = sec.offsetTop;
    const end = start + sec.offsetHeight;
    if (y >= start && y < end) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
};
window.addEventListener('scroll', onScroll);

// Contact form (demo only)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
if (form && msg) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const text = data.get('message')?.toString().trim();
    if (!name || !email || !text) {
      msg.textContent = 'Please complete all fields.';
      msg.style.color = '#f7b3b3';
      return;
    }
    msg.textContent = 'Thanks! Your message is ready to be sent (demo).';
    msg.style.color = '#a2f5cf';
    form.reset();
  });
}

// Footer year
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();
