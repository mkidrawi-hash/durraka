// ⚠️ MACHINE DRAFT — pending professional Arabic review. Do NOT expose publicly
// until GFRC/GRC terminology is verified by the owner.
// Mirrors src/content/en/systems/engineer-guidance.ts. Terminology follows
// docs/arabic-terminology.md.

import type { Translatable } from '@/lib/i18n'
import { engineerGuidanceContent } from '@/content/en/systems/engineer-guidance'

export const engineerGuidanceContentAr: Translatable<typeof engineerGuidanceContent> = {
  breadcrumbLast: 'الدليل الاسترشادي للمهندسين',
  eyebrow: 'مراجعة قائمة على المشروع',
  title: 'اطلب الدليل الاسترشادي للمهندسين',
  intro:
    'يُقدَّم الدليل الاسترشادي للمهندسين لنظام تكسية الواجهات بالخرسانة المسلحة بالألياف الزجاجية (GFRC) من خلال مراجعة هندسية قائمة على المشروع. يتحقّق فريقنا من كل طلب قبل الرد.',
  consentLine:
    'يُصدر الدليل الاسترشادي للمهندسين من خلال مراجعة هندسية قائمة على المشروع. سيتحقّق فريقنا من طلبك قبل الإرسال.',
  submitLabel: 'إرسال الطلب',
  confirmationTitle: 'تم استلام الطلب',
  confirmationBody:
    'سيقوم فريقنا الهندسي بالمراجعة والتواصل معك. تُصدر وثائق الدليل الاسترشادي بعد التحقّق القائم على المشروع.',
  confirmationReferenceLabel: 'الرقم المرجعي الخاص بك',
  errorFallback: 'فشل الإرسال. يُرجى المحاولة مرة أخرى أو التواصل عبر info@durraka.com.',

  roles: ['استشاري', 'مقاول', 'مطوّر', 'جهة حكومية', 'أخرى'],
  projectTypes: ['تجاري', 'ضيافة', 'سكني', 'تراثي', 'مؤسسي', 'متعدد الاستخدامات'],
  timelines: ['فوري', '1–3 أشهر', '3–6 أشهر', 'أكثر من 6 أشهر', 'غير محدد بعد'],
}
