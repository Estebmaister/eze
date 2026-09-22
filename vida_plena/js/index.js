import { initNavigation } from './modules/navigation.js';
import { renderTreatments, renderTeam, renderFacilities } from './modules/render.js';
import { initWhatsApp } from './modules/whatsapp.js';

function init() {
  renderTreatments();
  renderTeam();
  renderFacilities();
  initNavigation();
  initWhatsApp();
}

document.addEventListener('DOMContentLoaded', init);
