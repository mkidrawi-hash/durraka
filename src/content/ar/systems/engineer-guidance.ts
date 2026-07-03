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

  form: {
    ariaLabel: 'نموذج طلب الدليل الاسترشادي للمهندسين',
    selectPlaceholder: 'اختر…',
    optional: '(اختياري)',
    labels: {
      fullName: 'الاسم الكامل',
      company: 'الشركة',
      role: 'الصفة',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف / واتساب',
      projectLocation: 'موقع المشروع (المدينة)',
      projectType: 'نوع المشروع',
      timeline: 'الإطار الزمني',
      approxScope: 'النطاق / المساحات التقريبية',
      notes: 'ملاحظات',
    },
    placeholders: {
      phone: '+966 5X XXX XXXX',
      approxScope: 'مثال: مساحات أو كميات الواجهات التقريبية',
      notes: 'صف مشروعك أو المفهوم التصميمي بإيجاز…',
    },
    submitting: 'جارٍ الإرسال…',
    submitAnother: 'إرسال طلب آخر',
    backToSystem: 'العودة إلى النظام',
    validation: {
      fullName: 'الاسم الكامل مطلوب.',
      company: 'الشركة مطلوبة.',
      role: 'يُرجى اختيار صفتك.',
      email: 'البريد الإلكتروني مطلوب.',
      emailInvalid: 'يُرجى إدخال بريد إلكتروني صحيح.',
      phone: 'الهاتف / واتساب مطلوب.',
      projectLocation: 'موقع المشروع مطلوب.',
      projectType: 'يُرجى اختيار نوع المشروع.',
      timeline: 'يُرجى اختيار الإطار الزمني.',
    },
  },

  page: {
    metaTitle: 'اطلب الدليل الاسترشادي للمهندسين — تكسية الواجهات GFRC',
    metaDescription:
      'اطلب الدليل الاسترشادي للمهندسين لنظام تكسية الواجهات من GFRC. يُصدر الدليل من خلال مراجعة هندسية قائمة على المشروع بعد تحقّق فريقنا من طلبك.',
    requestDetails: 'تفاصيل الطلب',
    requiredNotePre: 'الحقول المميّزة بـ',
    requiredNotePost: 'مطلوبة. لا يتم تنزيل أي مستند هنا — يراجع فريقنا طلبك ويردّ عليك.',
  },
}
