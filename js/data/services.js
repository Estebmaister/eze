/**
 * Services data — add or edit services here
 */
export const SERVICES = [
  {
    id: 'espalda',
    title: 'Dolor de espalda y cuello',
    image: 'assets/images/services/espalda.jpg',
    icon: 'spine',
  },
  {
    id: 'deportiva',
    title: 'Lesiones deportivas',
    image: 'assets/images/services/deportiva.jpg',
    icon: 'sport',
  },
  {
    id: 'postoperatoria',
    title: 'Rehabilitación postoperatoria',
    image: 'assets/images/services/postoperatoria.jpg',
    icon: 'rehab',
  },
  {
    id: 'articular',
    title: 'Dolor articular',
    image: 'assets/images/services/articular.jpg',
    icon: 'joint',
  },
  {
    id: 'postura',
    title: 'Corrección de postura',
    image: 'assets/images/services/postura.jpg',
    icon: 'posture',
  },
];

/**
 * SVG icons for each service type
 */
export const SERVICE_ICONS = {
  spine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M8 6h8M8 12h8M8 18h8"/></svg>`,
  sport: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  rehab: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  joint: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v4M9 16l3-4 3 4"/></svg>`,
  posture: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M8 8h8M6 16h12"/></svg>`,
};
