// Canonical production origin — used for metadataBase, sitemap, and hreflang
// alternates. Overridable per environment via NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://durraka.com'
).replace(/\/$/, '')

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Systems', href: '/systems' },
  { label: 'Packages', href: '/packages' },
  { label: 'Project Gallery', href: '/gallery' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Contact', href: '/contact' },
]

export const METRICS = [
  {
    value: 'Large-scale',
    unit: '',
    label: 'Manufacturing',
    description: 'Large-scale GFRC/GRC production capability.',
  },
  {
    value: '24/7',
    unit: '',
    label: 'Production',
    description: 'Round-the-clock output to meet any deadline.',
  },
  {
    value: 'Kingdom-wide',
    unit: '',
    label: 'Delivery',
    description: 'Delivered across all regions of Saudi Arabia.',
  },
  {
    value: 'Custom',
    unit: '',
    label: 'Engineering',
    description: 'Tailored solutions for every project.',
  },
]

export const SYSTEMS = [
  {
    id: 'facade-cladding',
    // Canonical detail-page slug. `id` is kept for the React key / backward
    // compatibility; the old /systems/facade-cladding route 308-redirects here.
    slug: 'gfrc-grc-facade-cladding',
    title: 'Façade Cladding Components',
    description:
      'High-performance GFRC/GRC façade panels engineered for modern, heritage, and project-specific architectural elevations.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-courtyard-facade-001.jpg',
    imageAlt: 'GFRC façade cladding components on a hospitality project · KAEC · 2025',
    imageLocation: 'KAEC · 2025',
  },
  {
    id: 'mashrabiya',
    slug: 'mashrabiya',
    title: 'Mashrabiya & Screen Components',
    description:
      'Intricate perforated screens combining traditional Islamic geometry with contemporary manufacturing precision.',
    image: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-mashrabiya-001.jpg',
    imageAlt: 'GFRC mashrabiya facade screens on a hospitality project · KAEC · 2025',
    imageLocation: 'KAEC · 2025',
  },
  {
    id: 'domes',
    slug: 'domes',
    title: 'Domes & Vaulted Components',
    description:
      'Architectural dome and vaulted elements crafted for landmark entrances, mosques, hospitality, and heritage-inspired projects.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-domes-001.jpg',
    imageAlt: 'GRC dome elements on a mosque · Makkah · 2023',
    imageLocation: 'Makkah · 2023',
  },
  {
    id: 'cornices',
    slug: 'cornices',
    title: 'Cornices, Profiles & Mouldings',
    description:
      'Decorative cornices, mouldings, and architectural profiles produced to match project drawings and façade details.',
    image: null,
    imageAlt: null,
    imageLocation: null,
  },
  {
    id: 'columns',
    slug: 'columns',
    title: 'Columns, Capitals & Pilasters',
    description:
      'Classical and contemporary column components including shafts, capitals, bases, and pilasters.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-arches-columns-capitals-001.jpg',
    imageAlt: 'GRC columns, arches, and decorative capitals on a mosque · Makkah · 2023',
    imageLocation: 'Makkah · 2023',
  },
  {
    id: 'custom',
    slug: 'custom',
    title: 'Bespoke Decorative Components',
    description:
      'Custom GFRC/GRC architectural ornamentation developed for project-specific design requirements.',
    image: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-decorative-elements-001.jpg',
    imageAlt: 'GRC bespoke decorative facade elements on a mosque · Makkah · 2023',
    imageLocation: 'Makkah · 2023',
  },
]

export const CONTACT_INFO = {
  address: 'Office 203, 2nd Floor',
  addressLine2: 'JBSA 2372, Jeddah, Saudi Arabia',
  email: 'info@durraka.com',
  phone: '+966 12 619 2224',
}

export const MAPS_URL = 'https://maps.app.goo.gl/G8pBA8gHzH8o5DdGA?g_st=iw'
