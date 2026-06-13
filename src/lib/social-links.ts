const WHATSAPP_PHONE = '966126192224'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello Durraka, I would like to request a quotation for a GFRC/GRC project.',
)

export const SOCIAL_LINKS = {
  linkedin: {
    href: 'https://www.linkedin.com/company/durraka',
    label: 'Visit Durraka on LinkedIn',
  },
  whatsapp: {
    href: `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`,
    phone: '+966 12 619 2224',
    label: 'Contact Durraka on WhatsApp',
  },
} as const
