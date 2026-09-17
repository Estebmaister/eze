/**
 * Main entry point — initializes all modules
 */
import { initNavigation } from './modules/navigation.js';
import { renderServices } from './modules/services.js';
import { initContactForm } from './modules/contact-form.js';
import { initWhatsApp } from './modules/whatsapp.js';

function init() {
  renderServices();
  initNavigation();
  initContactForm();
  initWhatsApp();
}

document.addEventListener('DOMContentLoaded', init);
