import { CONFIG } from '../config.js';

export function initWhatsApp() {
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    if (link.tagName !== 'A') return;
    const message = encodeURIComponent(CONFIG.whatsapp.defaultMessage);
    link.href = `https://wa.me/${CONFIG.whatsapp.number}?text=${message}`;
  });
}
