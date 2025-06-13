// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
  btn.addEventListener('click', function () {
    const answer = this.parentElement.querySelector('.faq-answer');
    const icon = this.querySelector('span');
    if (answer.classList.contains('hidden')) {
      // Close all others
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-question span').forEach(i => i.textContent = '+');
      answer.classList.remove('hidden');
      icon.textContent = '-';
    } else {
      answer.classList.add('hidden');
      icon.textContent = '+';
    }
  });
});

// Contact Form Submission (placeholder)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-success').classList.remove('hidden');
    contactForm.reset();
    setTimeout(() => {
      document.getElementById('form-success').classList.add('hidden');
    }, 4000);
  });
}

// Fade-in on scroll
function handleFadeIn() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('DOMContentLoaded', handleFadeIn); 