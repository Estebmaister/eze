import { CONFIG } from '../config.js';

export function initWhatsApp() {
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    if (link.tagName !== 'A') return;
    const message = encodeURIComponent(CONFIG.whatsapp.defaultMessage);
    link.href = `https://wa.me/${CONFIG.whatsapp.number}?text=${message}`;
  });
}

export function initSocialLinks() {
  const { instagram, facebook } = CONFIG.social;

  document.querySelectorAll('[data-social]').forEach((link) => {
    const network = link.dataset.social;
    if (network === 'instagram') link.href = instagram;
    if (network === 'facebook') link.href = facebook;
  });
}
