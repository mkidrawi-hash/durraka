// ⚠️ MACHINE DRAFT — pending professional Arabic review. Do NOT strip this header
// until the owner approves. Mirrors src/content/en/common.ts. Terminology follows
// docs/arabic-terminology.md.

import type { Translatable } from '@/lib/i18n'
import { commonContent } from '@/content/en/common'

export const commonAr: Translatable<typeof commonContent> = {
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    systems: 'الأنظمة',
    packages: 'الباقات',
    gallery: 'معرض المشاريع',
    catalog: 'الكتالوج',
    contact: 'اتصل بنا',
  },
  cta: {
    requestQuotation: 'اطلب عرض سعر',
    contactDurraka: 'تواصل مع دراكة',
    contactUs: 'اتصل بنا',
    viewPackage: 'عرض الباقة',
    viewAllSystems: 'عرض جميع الأنظمة',
    viewAllPackages: 'عرض جميع الباقات',
    exploreSystems: 'استكشف أنظمتنا',
  },
  footer: {
    brandName: 'مصنع دراكة للصناعة',
    tagline: 'أنظمة معمارية من GFRC و GRC',
    description:
      'الشركة السعودية المتخصصة في تصنيع تكسية الواجهات من GFRC و GRC، وأنظمة المشربيات، والقباب المعمارية، والأطواق، والعناصر الزخرفية المخصصة.',
    navigationHeading: 'التنقّل',
    legalHeading: 'قانوني',
    contactHeading: 'اتصل بنا',
    phoneLabel: 'هاتف',
    whatsappLabel: 'واتساب',
    rightsReserved: 'جميع الحقوق محفوظة.',
  },
  legal: {
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
  },
  notFound: {
    code: '404',
    title: 'الصفحة غير موجودة',
    body: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    backHome: 'العودة إلى الرئيسية',
  },
  draftNotice:
    'النسخة العربية أولية وقيد التدقيق — للمحتوى المعتمد يرجى الرجوع للنسخة الإنجليزية',
}
