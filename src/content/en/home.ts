export const homeContent = {
  hero: {
    eyebrow: 'GFRC & GRC Specialists — Saudi Arabia',
    titleLine1: 'Engineered GFRC',
    titleAccent: 'Architectural Systems',
    titleLine3: 'for Landmark Projects',
    description:
      'Durraka Factory for Industry manufactures GFRC façade cladding, mashrabiya panels, cornices, domes, columns, decorative elements, and custom architectural systems for projects across Saudi Arabia.',
  },
  metrics: [
    { value: 'Large-scale', label: 'Manufacturing', description: 'Large-scale GFRC/GRC production capability.' },
    { value: '24/7', label: 'Production', description: 'Round-the-clock output to meet any deadline.' },
    { value: 'Kingdom-wide', label: 'Delivery', description: 'Delivered across all regions of Saudi Arabia.' },
    { value: 'Custom', label: 'Engineering', description: 'Tailored solutions for every project.' },
  ],
  systemsSection: {
    eyebrow: 'What We Manufacture',
    title: 'GFRC/GRC Architectural Components',
    subtitle:
      'Six integrated GFRC/GRC manufacturing capabilities — combined on any project scope to deliver a complete architectural façade package.',
  },
  // Keyed by SYSTEMS id.
  systems: {
    'facade-cladding': {
      title: 'Façade Cladding Components',
      description: 'High-performance GFRC/GRC façade panels engineered for modern, heritage, and project-specific architectural elevations.',
    },
    mashrabiya: {
      title: 'Mashrabiya & Screen Components',
      description: 'Intricate perforated screens combining traditional Islamic geometry with contemporary manufacturing precision.',
    },
    domes: {
      title: 'Domes & Vaulted Components',
      description: 'Architectural dome and vaulted elements crafted for landmark entrances, mosques, hospitality, and heritage-inspired projects.',
    },
    cornices: {
      title: 'Cornices, Profiles & Mouldings',
      description: 'Decorative cornices, mouldings, and architectural profiles produced to match project drawings and façade details.',
    },
    columns: {
      title: 'Columns, Capitals & Pilasters',
      description: 'Classical and contemporary column components including shafts, capitals, bases, and pilasters.',
    },
    custom: {
      title: 'Bespoke Decorative Components',
      description: 'Custom GFRC/GRC architectural ornamentation developed for project-specific design requirements.',
    },
  },
  projectsSection: {
    eyebrow: 'Our Work',
    title: 'Project Scope Packages',
    subtitle:
      'Each project scope combines multiple GFRC/GRC capabilities into a single integrated package — matched to your architectural drawings and delivered across the Kingdom.',
  },
  // Keyed by project id (p1..p6). systems = chip labels.
  projects: {
    p1: { title: 'Grand Entrance & Gate Scope', tag: 'Integrated Entrance Scope', description: 'Complete GFRC/GRC package for landmark entrance gates and arrival facades — columns, arches, cornices, decorative frames, and facade cladding.', systems: ['Columns', 'Cornices', 'Decorative', 'Cladding'] },
    p2: { title: 'Villa & Palace Architectural Scope', tag: 'Palace & Villa Scope', description: 'Comprehensive GFRC/GRC package for luxury palaces and villas — classical columns, ornamental cornices, domes, and full facade cladding.', systems: ['Columns', 'Cornices', 'Domes', 'Cladding', 'Decorative'] },
    p3: { title: 'Heritage & Regional Architecture Scope', tag: 'Heritage Architecture Scope', description: 'Full scope for heritage-inspired and regionally influenced architecture — decorative domes, mashrabiya screens, cornices, and ornamental elements.', systems: ['Domes', 'Mashrabiya', 'Cornices', 'Decorative'] },
    p4: { title: 'Complete GFRC/GRC Facade Scope', tag: 'Full Facade Scope', description: 'Integrated large-scale facade package for commercial and institutional buildings — cladding panels, columns, cornices, screens, and custom details.', systems: ['Cladding', 'Columns', 'Cornices', 'Mashrabiya', 'Decorative'] },
    p5: { title: 'Custom Architectural Components Scope', tag: 'Custom Components Scope', description: 'Custom-engineered GFRC/GRC components for projects requiring bespoke ornamental elements — patterned screens, decorative panels, and profile details.', systems: ['Mashrabiya', 'Decorative', 'Cornices'] },
    p6: { title: 'Hospitality & Landmark Facade Scope', tag: 'Hospitality Facade Scope', description: 'Integrated facade package for luxury hotels and landmark developments — facade cladding, architectural columns, cornices, and ornamental details.', systems: ['Cladding', 'Columns', 'Cornices', 'Decorative'] },
  },
  rfqCta: {
    eyebrow: 'Get Started',
    title: 'Ready to Start Your Project?',
    body: 'Submit your project details and our team will review the scope, drawings, timeline, and technical requirements before preparing the next step.',
  },
} as const

export type HomeContent = typeof homeContent
export type SystemId = keyof typeof homeContent.systems
export type ProjectId = keyof typeof homeContent.projects
