import { TREATMENTS, TREATMENT_ICONS } from '../data/treatments.js';
import { TEAM } from '../data/team.js';
import { FACILITIES, FACILITY_ICONS } from '../data/facilities.js';

export function renderTreatments() {
  const grid = document.getElementById('treatments-grid');
  if (!grid) return;

  grid.innerHTML = TREATMENTS.map((t) => `
    <article class="treatment-card" data-treatment="${t.id}">
      <img class="treatment-card__image" src="${t.image}" alt="${t.title}" loading="lazy">
      <div class="treatment-card__body">
        <div class="treatment-card__icon" aria-hidden="true">${TREATMENT_ICONS[t.icon] ?? ''}</div>
        <h3 class="treatment-card__title">${t.title}</h3>
        <p class="treatment-card__desc">${t.description}</p>
        <p class="treatment-card__benefits-label">Beneficios:</p>
        <ul class="check-list">
          ${t.benefits.map((b) => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');
}

export function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = TEAM.map((m) => `
    <article class="team-card" data-member="${m.id}">
      <img class="team-card__image" src="${m.image}" alt="${m.name}" loading="lazy">
      <div class="team-card__body">
        <p class="team-card__role">${m.role}</p>
        <h3 class="team-card__name">${m.name}</h3>
        <p class="team-card__specialty">${m.specialty}</p>
        <p class="team-card__bio">${m.bio}</p>
        <div class="team-card__tags">
          ${m.tags.map((tag) => `<span class="team-card__tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

export function renderFacilities() {
  const grid = document.getElementById('facilities-grid');
  if (!grid) return;

  grid.innerHTML = FACILITIES.map((f) => `
    <article class="facility-card" data-facility="${f.id}">
      <img class="facility-card__image" src="${f.image}" alt="${f.label}" loading="lazy">
      <div class="facility-card__label">
        <span aria-hidden="true">${FACILITY_ICONS[f.icon] ?? ''}</span>
        ${f.label}
      </div>
    </article>
  `).join('');
}
