// Shared UI copy used by global chrome (header, footer, 404) and common CTAs.
// Mirrored to src/content/ar/common.ts (parity-checked).

export const commonContent = {
  nav: {
    home: 'Home',
    about: 'About',
    systems: 'Systems',
    packages: 'Packages',
    gallery: 'Project Gallery',
    catalog: 'Catalog',
    contact: 'Contact',
  },
  cta: {
    requestQuotation: 'Request a Quotation',
    contactDurraka: 'Contact Durraka',
    contactUs: 'Contact Us',
    viewPackage: 'View Package',
    viewAllSystems: 'View All Systems',
    viewAllPackages: 'View All Packages',
    exploreSystems: 'Explore Our Systems',
  },
  footer: {
    brandName: 'Durraka Factory for Industry',
    tagline: 'GFRC & GRC Architectural Systems',
    description:
      "Saudi Arabia's specialized manufacturer of GFRC & GRC façade cladding, mashrabiya systems, architectural domes, cornices, and custom decorative elements.",
    navigationHeading: 'Navigation',
    legalHeading: 'Legal',
    contactHeading: 'Contact',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    rightsReserved: 'All rights reserved.',
  },
  legal: {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
  notFound: {
    code: '404',
    title: 'Page Not Found',
    body: 'The page you are looking for does not exist or has moved.',
    backHome: 'Back to Home',
  },
  // AR-only draft notice bar text. Empty in English (never rendered on the EN site).
  draftNotice: '',
} as const

export type CommonContent = typeof commonContent
