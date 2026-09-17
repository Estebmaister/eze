/**
 * Navigation module — mobile menu, smooth scroll, active link tracking
 */
import { CONFIG } from '../config.js';

export function initNavigation() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav__link');
  const header = document.getElementById('header');

  if (!nav || !navToggle) return;

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    navToggle.classList.toggle('nav-toggle--open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      navToggle.classList.remove('nav-toggle--open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = header?.offsetHeight ?? 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Active link on scroll
  const sectionIds = CONFIG.sections.map((s) => s.id);
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('nav__link--active', link.dataset.section === id);
        });
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
