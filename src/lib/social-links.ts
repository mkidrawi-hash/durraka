const WHATSAPP_PHONE = '966126192224'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello Durraka, I would like to request a quotation for a GFRC/GRC project.',
)

export const SOCIAL_LINKS = {
  linkedin: {
    href: 'https://www.linkedin.com/in/durraka-factory-035a86296',
    label: 'Visit Durraka Factory on LinkedIn',
  },
  whatsapp: {
    href: `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`,
    phone: '+966 12 619 2224',
    label: 'Contact Durraka on WhatsApp',
  },
} as const
