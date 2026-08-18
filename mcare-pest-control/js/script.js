/* M Care Pest Control Services - Main Script */
'use strict';

/* ─── Scroll Progress ───────────────────────────────────────── */
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  if (scrollBar) scrollBar.style.width = `${(window.scrollY / total) * 100}%`;
}, { passive: true });

/* ─── Navbar ────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navOverlay = document.getElementById('nav-overlay');

window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  const backTop = document.getElementById('back-to-top');
  if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

function closeMenu() {
  hamburger?.classList.remove('active');
  navMenu?.classList.remove('open');
  navOverlay?.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  if (navOverlay) navOverlay.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navOverlay?.addEventListener('click', closeMenu);

/* ─── Smooth Scroll + Active Nav ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    const offset = 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* Active nav on scroll */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

/* ─── Back to Top ───────────────────────────────────────────── */
document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── FAQ Accordion ─────────────────────────────────────────── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item?.querySelector('.faq-answer');
    const isOpen = item?.classList.contains('active');
    // close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer')?.classList.remove('open');
    });
    // open clicked if it was closed
    if (!isOpen && item && answer) {
      item.classList.add('active');
      answer.classList.add('open');
    }
  });
});

/* ─── Scroll Reveal ─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
  revealObserver.observe(el);
});

/* ─── Service Highlight Cards → Scroll to Service ───────────── */
document.querySelectorAll('.highlight-card[data-target]').forEach(card => {
  card.addEventListener('click', () => {
    const targetId = card.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (target) {
      closeMenu();
      window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
    }
  });
});

/* ─── Contact Form ──────────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('f-name')?.value.trim();
  const phone = document.getElementById('f-phone')?.value.trim();
  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return;
  }
  // Simulate submission
  const btn = contactForm.querySelector('.btn-submit');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  }
  setTimeout(() => {
    contactForm.reset();
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    }
    if (formSuccess) {
      formSuccess.classList.add('show');
      setTimeout(() => formSuccess.classList.remove('show'), 5000);
    }
  }, 1200);
});

/* ─── Navbar close on resize ────────────────────────────────── */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});
