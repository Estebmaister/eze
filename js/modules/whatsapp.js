/**
 * WhatsApp module — sets up WhatsApp links from config
 */
import { CONFIG } from '../config.js';

export function initWhatsApp() {
  const links = document.querySelectorAll('[data-whatsapp]');

  links.forEach((link) => {
    if (link.tagName === 'A') {
      const message = encodeURIComponent(CONFIG.whatsapp.defaultMessage);
      link.href = `https://wa.me/${CONFIG.whatsapp.number}?text=${message}`;
    }
  });
}
