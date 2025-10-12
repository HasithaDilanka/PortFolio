
// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
let isDark = true;

// // Check for saved theme preference
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//     body.setAttribute('data-theme', savedTheme);
//     isDark = savedTheme === 'dark';
//     themeToggle.textContent = isDark ? '🌙' : '☀️';
// }

// themeToggle.addEventListener('click', () => {
//     isDark = !isDark;
//     const theme = isDark ? 'dark' : 'light';
//     body.setAttribute('data-theme', theme);
//     themeToggle.textContent = isDark ? '🌙' : '☀️';
//     localStorage.setItem('theme', theme);
// });

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealOnScroll = () => {
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');

            // Animate skill bars
            if (element.classList.contains('skill-category') || element.closest('.skill-category')) {
                const skillItems = element.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 200);
                });
            }
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const slider = document.querySelector('.slides');
slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});
slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});


document.getElementById('send-email').addEventListener('click', function(e) {
  e.preventDefault();
  // encode subject/body if needed
  const to = 'hasionyxia@gmail.com';
  const subject = encodeURIComponent('Hello');
  const body = encodeURIComponent('Hi there, I wanted to say...');
  // using location.href usually invokes the OS handler (native mail app) when configured
  location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});

if (navigator.share) {
  navigator.share({
    title: 'Email',
    text: 'Send an email to hasionyxia@gmail.com',
    url: ''
  }).catch(()=> { location.href = 'mailto:hasionyxia@gmail.com'; });
} else {
  location.href = 'mailto:hasionyxia@gmail.com';
}
