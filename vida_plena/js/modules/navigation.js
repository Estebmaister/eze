import { CONFIG } from '../config.js';

export function initNavigation() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav__link');
  const header = document.getElementById('header');

  if (!nav || !navToggle) return;

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    navToggle.classList.toggle('nav-toggle--open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      navToggle.classList.remove('nav-toggle--open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = header?.offsetHeight ?? 88;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const sections = CONFIG.sections
    .map((s) => document.getElementById(s.id))
    .filter(Boolean);

  const headerHeight = header?.offsetHeight ?? 88;
  const visibility = new Map();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      let activeId = null;
      let maxRatio = 0;
      visibility.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeId = id;
        }
      });

      if (!activeId) return;

      navLinks.forEach((link) => {
        link.classList.toggle('nav__link--active', link.dataset.section === activeId);
      });
    },
    {
      rootMargin: `-${headerHeight + 16}px 0px -45% 0px`,
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    }
  );

  sections.forEach((section) => observer.observe(section));
}
