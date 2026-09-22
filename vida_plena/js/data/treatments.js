export const TREATMENTS = [
  {
    id: 'alimentacion',
    title: 'Alimentación consciente',
    image: 'assets/images/treatments/alimentacion.jpg',
    description: 'Menús diseñados con ingredientes frescos y locales para nutrir tu cuerpo desde adentro.',
    benefits: [
      'Desintoxicación natural del organismo',
      'Mayor energía y claridad mental',
      'Hábitos alimenticios sostenibles',
    ],
    icon: 'leaf',
  },
  {
    id: 'masajes',
    title: 'Masajes fisioterapéuticos',
    image: 'assets/images/treatments/masajes.jpg',
    description: 'Técnicas manuales especializadas para aliviar tensiones, dolor y mejorar la movilidad.',
    benefits: [
      'Reducción de dolor muscular y articular',
      'Mejora de la circulación sanguínea',
      'Relajación profunda del sistema nervioso',
    ],
    icon: 'hands',
  },
  {
    id: 'colon',
    title: 'Lavados de colon',
    image: 'assets/images/treatments/colon.jpg',
    description: 'Terapia de limpieza intestinal en un entorno clínico seguro y profesional.',
    benefits: [
      'Limpieza profunda del colon',
      'Mejora de la digestión y absorción',
      'Sensación de ligereza y bienestar',
    ],
    icon: 'water',
  },
  {
    id: 'hielo',
    title: 'Terapias de hielo',
    image: 'assets/images/treatments/hielo.jpg',
    description: 'Exposición controlada al frío para activar tu sistema inmunológico y reducir inflamación.',
    benefits: [
      'Fortalecimiento del sistema inmune',
      'Reducción de inflamación crónica',
      'Mayor resistencia y vitalidad',
    ],
    icon: 'snow',
  },
  {
    id: 'alto-impacto',
    title: 'Terapias de alto impacto',
    image: 'assets/images/treatments/alto-impacto.jpg',
    description: 'Programas intensivos de movimiento y rendimiento para transformar tu condición física.',
    benefits: [
      'Incremento de fuerza y resistencia',
      'Optimización del rendimiento físico',
      'Mentalidad de superación y disciplina',
    ],
    icon: 'bolt',
  },
];

export const TREATMENT_ICONS = {
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.5 2 8 0 5.5-4.5 10-10 10z"/><path d="M2 21c0-3 2-5.5 5-6"/></svg>',
  hands: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 11V6a2 2 0 00-4 0M14 10V4a2 2 0 00-4 0v6M10 10V5a2 2 0 00-4 0v8a8 8 0 008 8h1a7 7 0 007-7v-3a2 2 0 00-4 0"/></svg>',
  water: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>',
  snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
};
