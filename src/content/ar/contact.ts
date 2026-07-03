// ⚠️ MACHINE DRAFT — pending professional Arabic review. Mirrors
// src/content/en/contact.ts. Terminology follows docs/arabic-terminology.md.

import type { Translatable } from '@/lib/i18n'
import { contactContent } from '@/content/en/contact'

export const contactContentAr: Translatable<typeof contactContent> = {
  metaTitle: 'اتصل بنا',
  metaDescription:
    'تواصل مع مصنع دراكة للصناعة — المتخصص في واجهات GFRC / GRC في المملكة العربية السعودية.',
  eyebrow: 'تواصل معنا',
  title: 'اتصل بنا',
  intro: 'قم بزيارة مكتبنا أو تواصل معنا مباشرةً لمناقشة متطلبات مشروعك من أنظمة GFRC / GRC.',

  contactInfoHeading: 'معلومات التواصل',
  addressLabel: 'العنوان',
  addressLine1: 'مكتب 203، الطابق الثاني',
  addressLine2: 'JBSA 2372، جدة، المملكة العربية السعودية',
  viewOnMaps: 'عرض على خرائط Google',
  mapsAria: 'عرض موقع مكتب دراكة على خرائط Google',
  phoneLabel: 'الهاتف',
  emailLabel: 'البريد الإلكتروني',

  quickBlock: {
    title: 'تفضّل نقاشاً سريعاً؟',
    body: 'تواصل مع دراكة عبر واتساب أو تابعنا على لينكدإن.',
    whatsapp: 'الدردشة عبر واتساب',
    linkedin: 'زيارة لينكدإن',
  },

  hours: {
    title: 'ساعات العمل',
    weekdays: 'الأحد – الخميس',
    weekdaysTime: '8:00 صباحاً – 6:00 مساءً',
    weekend: 'الجمعة – السبت',
    closed: 'مغلق',
  },

  form: {
    heading: 'أرسل رسالة',
    name: 'الاسم',
    company: 'الشركة',
    email: 'البريد الإلكتروني',
    subject: 'الموضوع',
    message: 'الرسالة',
    submit: 'إرسال الرسالة',
  },
}
