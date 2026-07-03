export const aboutContent = {
  metaTitle: 'About',
  metaDescription:
    'Durraka Factory for Industry — a specialist GFRC/GRC façade manufacturer with structured production operations and Kingdom-wide delivery, serving projects across Saudi Arabia.',
  badge: 'Who We Are',
  title: 'About Durraka',
  h2: 'Precision-Engineered GFRC Architectural Systems',
  paragraphs: [
    'Durraka Factory for Industry is a Saudi-based specialist manufacturer of Glass Fibre Reinforced Concrete (GFRC/GRC) architectural elements. We supply façade cladding, mashrabiya screens, domes, cornices, columns, and bespoke decorative elements for construction projects across the Kingdom.',
    'With established GFRC/GRC manufacturing experience and structured production operations, we are equipped to serve large-scale developments while maintaining the precision required for heritage and luxury projects.',
    'Our engineering team works directly with architects, developers, and main contractors to translate design intent into manufacturable components — handling everything from shop drawings to Kingdom-wide site delivery.',
  ],
  mission: {
    title: 'Our Mission',
    body: 'To deliver precision-engineered GFRC/GRC architectural systems that meet the highest standards of quality, engineering, and on-site performance for projects across Saudi Arabia.',
  },
  values: {
    title: 'Our Values',
    items: [
      'Engineering excellence in every element',
      'Transparent partnership with our clients',
      'On-time delivery across the Kingdom',
      'Sustainable manufacturing practices',
    ],
  },
  stats: [
    { value: 'Since 2008', label: 'GFRC/GRC Manufacturing' },
    { value: '24/7', label: 'Operations' },
    { value: 'Kingdom-wide', label: 'Project Delivery' },
    { value: 'Custom', label: 'Project Engineering' },
  ],
} as const

export type AboutContent = typeof aboutContent
