// ⚠️ MACHINE DRAFT — pending professional Arabic review. Do NOT expose publicly
// until GFRC/GRC terminology is verified by the owner. Mirrors src/content/en/rfq.ts.
// Terminology follows docs/arabic-terminology.md.
//
// IMPORTANT: These are DISPLAY LABELS only. The English dictionary supplies the
// option VALUES stored to Sheets; each array here must stay in the SAME order so
// the Arabic label maps to the correct English stored value (see RFQForm.tsx).

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
    intro: 'لإعداد نطاق عمل وعرض سعر دقيق، يُرجى تجهيز ما يلي:',
    items: [
      'الرسومات والمساقط المعمارية',
      'المساحات والكميات التقريبية',
      'صور أو مراجع للمفهوم التصميمي',
      'اتجاه التشطيب المُفضّل',
      'موقع المشروع',
      'الجدول الزمني للمشروع',
    ],
    note: 'تساعد هذه المعلومات فريقنا الهندسي في مراجعة مشروعك. يمكنك مشاركة المتوفّر لديك الآن وإضافة الباقي لاحقاً.',
  },

  page: {
    metaTitle: 'اطلب عرض سعر لأنظمة GFRC / GRC',
    metaDescription:
      'أرسل متطلبات مشروعك من أنظمة GFRC / GRC إلى مصنع دراكة للصناعة. سيراجع فريقنا الهندسي النطاق ويتواصل معك بالخطوات التالية.',
    eyebrow: 'اطلب عرض سعر',
    title: 'اطلب عرض سعر لأنظمة GFRC / GRC',
    intro: 'شارك متطلبات مشروعك وسيراجع فريقنا النطاق ويتواصل معك بالخطوات التالية.',
    startCta: 'ابدأ طلب عرض السعر',
    whatToExpect: 'ما الذي تتوقّعه',
    benefits: [
      'أنظمة واجهات GFRC / GRC',
      'تصنيع قائم على المشروع',
      'مراجعة هندسية قبل التسعير',
      'تعامل سرّي مع طلبات عروض الأسعار',
    ],
    beforeYouStart: 'قبل أن تبدأ',
  },

  form: {
    ariaLabel: 'نموذج طلب عرض سعر',
    projectInfoLegend: 'معلومات المشروع',
    yourDetailsLegend: 'بياناتك',
    attachmentsLegend: 'مرفقات المشروع',
    notesLegend: 'ملاحظات المشروع / المتطلبات',
    labels: {
      projectName: 'اسم المشروع',
      projectLocation: 'موقع المشروع',
      systemRequired: 'النظام المطلوب',
      estimatedArea: 'المساحة التقديرية (م²)',
      projectType: 'نوع المشروع',
      deliveryDate: 'تاريخ التسليم المستهدف',
      fullName: 'الاسم الكامل',
      jobTitle: 'المسمّى الوظيفي',
      company: 'الشركة',
      email: 'البريد الإلكتروني',
      phone: 'الجوال / واتساب',
      clientType: 'نوع العميل / الدور',
      largeFileLink: 'رابط ملف كبير',
      fileLinkNotes: 'ملاحظات على رابط الملف',
    },
    placeholders: {
      projectName: 'مثال: برج النخيل',
      projectLocation: 'المدينة، المملكة العربية السعودية',
      estimatedArea: 'مثال: 5000',
      jobTitle: 'مثال: مدير مشروع',
      phone: '+966 5X XXX XXXX',
      largeFileLink: 'الصق رابط Google Drive أو OneDrive أو Dropbox أو WeTransfer...',
      fileLinkNotes: 'صف محتوى الرابط أو هيكل المجلدات أو تعليمات الوصول...',
      notes: 'صف مشروعك أو أي متطلبات خاصة أو مراجع تصميمية أو أسئلة...',
    },
    selectPlaceholders: {
      system: 'اختر نظاماً',
      projectType: 'اختر النوع',
      clientType: 'اختر الدور',
    },
    systemOptions: [
      'تكسية واجهات GFRC / GRC',
      'أنظمة المشربية',
      'القباب والأقبية',
      'الكرانيش والمقاطع',
      'الأعمدة والدعامات',
      'العناصر الزخرفية المخصصة',
      'أنظمة متعددة',
    ],
    projectTypeOptions: ['تجاري', 'سكني', 'حكومي', 'ضيافة', 'ديني', 'بنية تحتية'],
    clientTypeOptions: [
      'معماري',
      'مقاول رئيسي',
      'مطوّر / مالك',
      'استشاري واجهات',
      'مقاول من الباطن',
      'جهة حكومية',
    ],
    attachments: {
      intro:
        'مرفقات اختيارية. أرفق ما هو متوفّر فقط. إذا لم تكن الرسومات جاهزة، يمكنك إرسال الطلب مع ذلك. لا تُرفع الملفات — تُدرَج أسماء الملفات فقط في إشعار الطلب.',
      drawingsNotAvailable: 'الرسومات غير متوفّرة بعد',
      needDrawingSupport:
        'أحتاج إلى دعم دراكة في إعداد رسومات أولية / مخططات تنفيذية للمراجعة',
      slotLabels: [
        'جدول الكميات (BOQ)',
        'الرسومات المعمارية',
        'الرسومات الإنشائية',
        'صور مرجعية / أعمال تصوّرية',
      ],
      boqHint: 'أرفق جدول الكميات إن وُجد. يمكننا أيضاً مراجعة الرسومات لتقدير الكميات.',
      chooseFile: 'اختر ملفاً',
      removeFile: 'إزالة الملف',
      acceptedLabel: 'PDF, DWG, DXF, XLS, XLSX, DOC, DOCX, JPG, PNG, ZIP · بحد أقصى 25 ميجابايت لكل ملف',
      fileTooLarge: 'حجم الملف يتجاوز الحد 25 ميجابايت.',
      largeFileHint: 'استخدمه للملفات الكبيرة أو مجموعات الرسومات الكاملة أو الحزم المضغوطة.',
    },
    submit: 'إرسال طلب عرض السعر',
    submitting: 'جارٍ الإرسال…',
    requiredNotePre: 'الحقول المميّزة بعلامة',
    requiredNotePost: 'إلزامية. تُعامَل معلوماتك بسرّية تامة.',
    disclaimerLabel: 'إخلاء مسؤولية:',
    disclaimer:
      'إرسال طلب عرض سعر عبر هذا الموقع لا يُنشئ عرض سعر أو عقداً أو أمر شراء أو التزاماً ملزماً من مصنع دراكة للصناعة. تخضع جميع الطلبات للمراجعة الفنية والتقييم التجاري وتأكيد نطاق المشروع ومراجعة الرسومات والموافقة الخطية.',
    validation: {
      fullName: 'الاسم الكامل مطلوب.',
      company: 'اسم الشركة مطلوب.',
      email: 'البريد الإلكتروني مطلوب.',
      projectName: 'اسم المشروع مطلوب.',
      projectLocation: 'موقع المشروع مطلوب.',
      systemRequired: 'يُرجى اختيار نظام.',
      emailInvalid: 'يُرجى إدخال بريد إلكتروني صحيح.',
      submitFailed: 'فشل الإرسال. يُرجى المحاولة مرة أخرى.',
      networkError: 'حدث خطأ في الشبكة. يُرجى التحقق من اتصالك والمحاولة مرة أخرى.',
    },
  },

  success: {
    title: 'تم إرسال الطلب بنجاح',
    body: 'شكراً لك. تم استلام طلبك للمراجعة. سيراجع فريقنا النطاق والمتطلبات ويتواصل معك بالخطوات التالية. يُرجى ذكر الرقم المرجعي أدناه في جميع المراسلات.',
    referenceLabel: 'رقمك المرجعي لطلب عرض السعر',
    submitAnother: 'إرسال طلب آخر',
    returnHome: 'العودة إلى الرئيسية',
  },
}
