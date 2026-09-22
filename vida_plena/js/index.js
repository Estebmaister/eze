import { initNavigation } from './modules/navigation.js';
import { renderTreatments, renderTeam, renderFacilities } from './modules/render.js';
import { initWhatsApp, initSocialLinks } from './modules/whatsapp.js';

function init() {
  renderTreatments();
  renderTeam();
  renderFacilities();
  initNavigation();
  initWhatsApp();
  initSocialLinks();
}

document.addEventListener('DOMContentLoaded', init);
