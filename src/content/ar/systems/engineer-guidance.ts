// ⚠️ MACHINE DRAFT — pending professional Arabic review. Do NOT expose publicly
// until GFRC/GRC terminology is verified by the owner.
// Mirrors src/content/en/systems/engineer-guidance.ts.

import type { Translatable } from '@/lib/i18n'
import { engineerGuidanceContent } from '@/content/en/systems/engineer-guidance'

export const engineerGuidanceContentAr: Translatable<typeof engineerGuidanceContent> = {
  breadcrumbLast: 'التوجيه الهندسي',
  eyebrow: 'مراجعة قائمة على المشروع',
  title: 'طلب توجيه هندسي',
  intro:
    'يُقدَّم التوجيه الهندسي لنظام كسوة الواجهات GFRC / GRC من خلال مراجعة هندسية قائمة على المشروع. يتحقّق فريقنا من كل طلب قبل الرد.',
  consentLine:
    'يُصدر التوجيه الهندسي من خلال مراجعة هندسية قائمة على المشروع. سيتحقّق فريقنا من طلبك قبل الإرسال.',
  submitLabel: 'إرسال الطلب',
  confirmationTitle: 'تم استلام الطلب',
  confirmationBody:
    'سيقوم فريقنا الهندسي بالمراجعة والتواصل معك. تُصدر وثائق التوجيه بعد التحقّق القائم على المشروع.',
  confirmationReferenceLabel: 'رقمك المرجعي',
  errorFallback: 'فشل الإرسال. يُرجى المحاولة مرة أخرى أو التواصل عبر info@durraka.com.',

  roles: ['استشاري', 'مقاول', 'مطوّر', 'جهة حكومية', 'أخرى'],
  projectTypes: ['تجاري', 'ضيافة', 'سكني', 'تراثي', 'مؤسسي', 'متعدد الاستخدامات'],
  timelines: ['فوري', '1–3 أشهر', '3–6 أشهر', 'أكثر من 6 أشهر', 'غير محدد بعد'],
}
