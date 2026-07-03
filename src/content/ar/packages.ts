// ⚠️ MACHINE DRAFT — pending professional Arabic review. Do NOT expose publicly
// until GFRC/GRC terminology is verified by the owner. Mirrors src/content/en/packages.ts.
// Terminology follows docs/arabic-terminology.md.

import type { Translatable } from '@/lib/i18n'
import { packagesContent } from '@/content/en/packages'

export const packagesContentAr: Translatable<typeof packagesContent> = {
  designIntent: {
    eyebrow: 'المفهوم التصميمي',
    heading: 'كيف تتكامل هذه الباقة',
    intro:
      'عرض تخطيطي لمواضع مكوّنات هذه الباقة وكيفية ترتيبها — المفهوم التصميمي فقط.',
    diagramCaption:
      'رسم تخطيطي للمفهوم التصميمي. ترتيب استرشادي فقط — وليس رسماً إنشائياً أو مخططاً تنفيذياً.',
    legendTitle: 'المكوّنات المعروضة',
  },

  concept3D: {
    label: 'عرض تصوّري ثلاثي الأبعاد',
    sublabel: 'يُقدَّم ضمن باقة الدليل الاسترشادي للمهندسين عند الطلب.',
  },

  scope: {
    eyebrow: 'نطاق الباقة',
    heading: 'نطاق الباقة والكميات التقديرية',
    intro: 'تشمل هذه الباقة عادةً المكوّنات التالية:',
    boqCallout:
      'يُعدّ جدول الكميات التقديري لهذه الباقة لكل مشروع على حدة، ويُشارَك بعد التحقّق من المشروع.',
    ctaLabel: 'اطلب الدليل الاسترشادي للمهندسين',
  },

  disclaimer:
    'الرسوم والصور في هذه الصفحة تصوّرية ولغرض فهم التصميم فقط. وهي لا تمثّل تفاصيل التنفيذ أو طرق التثبيت أو الحسابات الإنشائية أو الكميات النهائية. تُصدر الأعمال الهندسية والكميات وتفاصيل التركيب الخاصة بكل مشروع فقط بعد التحقّق عبر المخططات التنفيذية والمستندات الهندسية المعتمدة. المراجع المعروضة في مواضع أخرى من هذا الموقع لا تكشف أسماء العملاء أو بيانات المشاريع السرية.',
}
