const WHATSAPP_PHONE = '966126192224'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello Durraka, I would like to request a quotation for a GFRC/GRC project.',
)
const WHATSAPP_MESSAGE_AR = encodeURIComponent(
  'مرحبًا دُرّاكة، أرغب بطلب عرض سعر لمشروع GFRC/GRC',
)

// Locale-aware WhatsApp deep link — Arabic prefilled message on /ar; the number
// stays international (LTR). Use instead of SOCIAL_LINKS.whatsapp.href on /ar pages.
export function whatsappHref(locale: 'en' | 'ar' = 'en'): string {
  const msg = locale === 'ar' ? WHATSAPP_MESSAGE_AR : WHATSAPP_MESSAGE
  return `https://wa.me/${WHATSAPP_PHONE}?text=${msg}`
}

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
