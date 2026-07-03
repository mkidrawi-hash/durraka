// Contact page copy. Address lines live here (per-locale) so the Arabic page can
// present an Arabic address; phone/email/maps come from lib/constants and render
// LTR inside RTL.

export const contactContent = {
  metaTitle: 'Contact',
  metaDescription:
    'Get in touch with Durraka Factory for Industry — GFRC/GRC façade specialists in Saudi Arabia.',
  eyebrow: 'Get in Touch',
  title: 'Contact Us',
  intro: 'Visit our office or contact us directly to discuss your GFRC/GRC project requirements.',

  contactInfoHeading: 'Contact Information',
  addressLabel: 'Address',
  addressLine1: 'Office 203, 2nd Floor',
  addressLine2: 'JBSA 2372, Jeddah, Saudi Arabia',
  viewOnMaps: 'View on Google Maps',
  mapsAria: 'View Durraka office location on Google Maps',
  phoneLabel: 'Phone',
  emailLabel: 'Email',

  quickBlock: {
    title: 'Prefer a quick discussion?',
    body: 'Contact Durraka on WhatsApp or connect with us on LinkedIn.',
    whatsapp: 'Chat on WhatsApp',
    linkedin: 'Visit LinkedIn',
  },

  hours: {
    title: 'Business Hours',
    weekdays: 'Sunday – Thursday',
    weekdaysTime: '8:00 AM – 6:00 PM',
    weekend: 'Friday – Saturday',
    closed: 'Closed',
  },

  form: {
    heading: 'Send a Message',
    name: 'Name',
    company: 'Company',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send Message',
  },
} as const
