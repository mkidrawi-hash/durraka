// ⚠️ MACHINE DRAFT — pending professional Arabic review. Do NOT expose publicly
// until GFRC/GRC terminology is verified by the owner. Mirrors src/content/en/rfq.ts.

import type { Translatable } from '@/lib/i18n'
import { rfqContent } from '@/content/en/rfq'

export const rfqContentAr: Translatable<typeof rfqContent> = {
  qualification: {
    intro: 'بعض التفاصيل السريعة عن المشروع تساعدنا في توجيه طلبك إلى الفريق المناسب.',
    scaleBand: { label: 'الحجم التقريبي', placeholder: 'اختر الحجم', options: ['كبير', 'متوسط', 'صغير'] },
    consultantAppointed: { label: 'هل تم تعيين استشاري؟', placeholder: 'اختر', options: ['نعم', 'لا'] },
    targetStart: {
      label: 'تاريخ البدء المستهدف',
      placeholder: 'اختر الإطار الزمني',
      options: ['فوري', '1–3 أشهر', '3–6 أشهر', 'أكثر من 6 أشهر', 'غير محدد بعد'],
    },
  },

  checklist: {
    title: 'معلومات المشروع المطلوبة',
    intro: 'لإعداد نطاق عمل وعرض أسعار دقيق، يُرجى تجهيز ما يلي:',
    items: [
      'الرسومات والمساقط المعمارية',
      'المساحات والكميات التقريبية',
      'صور أو مراجع لمقصد التصميم',
      'اتجاه التشطيب المُفضّل',
      'موقع المشروع',
      'الجدول الزمني للمشروع',
    ],
    note: 'تساعد هذه المعلومات فريقنا الهندسي في مراجعة مشروعك. يمكنك مشاركة المتوفّر لديك الآن وإضافة الباقي لاحقاً.',
  },
}
