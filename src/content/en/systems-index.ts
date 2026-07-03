// Systems index (/systems) copy. Chrome strings + per-system card title/
// description/imageAlt keyed by slug. Image paths, slug, and imageLocation come
// from lib/constants (SYSTEMS); only the human-readable copy is localized here.

export const systemsIndexContent = {
  metaTitle: 'GFRC/GRC Architectural Components',
  metaDescription:
    "Explore Durraka Factory's GFRC/GRC architectural components for façade cladding, mashrabiya screens, domes, cornices, columns, capitals, and bespoke decorative elements.",
  eyebrow: 'What We Manufacture',
  title: 'GFRC/GRC Architectural Components',
  intro:
    'Engineered architectural components for façades, entrances, domes, screens, columns, cornices, and bespoke decorative elements.',
  note: 'Most projects combine multiple GFRC/GRC components into one integrated architectural package, depending on the approved drawings, façade design, and project requirements.',
  projectSpecific: 'Project-specific manufacturing',
  exploreSystem: 'Explore System',
  requestTechnicalReview: 'Request Technical Review',

  ctaEyebrow: 'Get Started',
  ctaTitle: 'Need a Custom Solution?',
  ctaBody:
    'Our engineering team designs and manufactures bespoke GFRC/GRC elements to project-specific requirements — from concept to Kingdom-wide delivery.',
  ctaButton: 'Submit Your Requirements',

  // Keyed by SYSTEMS[].slug
  cards: {
    'gfrc-grc-facade-cladding': {
      title: 'Façade Cladding Components',
      description:
        'High-performance GFRC/GRC façade panels engineered for modern, heritage, and project-specific architectural elevations.',
      imageAlt: 'GFRC façade cladding components on a hospitality project · KAEC · 2025',
    },
    mashrabiya: {
      title: 'Mashrabiya & Screen Components',
      description:
        'Intricate perforated screens combining traditional Islamic geometry with contemporary manufacturing precision.',
      imageAlt: 'GFRC mashrabiya facade screens on a hospitality project · KAEC · 2025',
    },
    domes: {
      title: 'Domes & Vaulted Components',
      description:
        'Architectural dome and vaulted elements crafted for landmark entrances, mosques, hospitality, and heritage-inspired projects.',
      imageAlt: 'GRC dome elements on a mosque · Makkah · 2023',
    },
    cornices: {
      title: 'Cornices, Profiles & Mouldings',
      description:
        'Decorative cornices, mouldings, and architectural profiles produced to match project drawings and façade details.',
      imageAlt: '',
    },
    columns: {
      title: 'Columns, Capitals & Pilasters',
      description:
        'Classical and contemporary column components including shafts, capitals, bases, and pilasters.',
      imageAlt: 'GRC columns, arches, and decorative capitals on a mosque · Makkah · 2023',
    },
    custom: {
      title: 'Bespoke Decorative Components',
      description:
        'Custom GFRC/GRC architectural ornamentation developed for project-specific design requirements.',
      imageAlt: 'GRC bespoke decorative facade elements on a mosque · Makkah · 2023',
    },
  },
} as const
