/**
 * Services module — renders service cards from data
 */
import { SERVICES, SERVICE_ICONS } from '../data/services.js';

export function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map((service) => `
    <article class="card" data-service="${service.id}">
      <img
        class="card__image"
        src="${service.image}"
        alt="${service.title}"
        loading="lazy"
        width="240"
        height="180"
      >
      <div class="card__body">
        <div class="card__icon" aria-hidden="true">
          ${SERVICE_ICONS[service.icon] ?? ''}
        </div>
        <h3 class="card__title">${service.title}</h3>
      </div>
    </article>
  `).join('');
}
