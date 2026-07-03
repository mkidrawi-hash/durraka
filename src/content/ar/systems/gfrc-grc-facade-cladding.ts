// ⚠️ MACHINE DRAFT — pending professional Arabic review. Do NOT expose publicly
// until GFRC/GRC terminology is verified by the owner. Some phrases are reused
// from the earlier /ar facade stub; the rest are machine-drafted MSA.
// Mirrors src/content/en/systems/gfrc-grc-facade-cladding.ts (SystemEnhancedData).
//
// Non-text fields (image paths, hrefs, finish `type` keys, tag numbers/positions)
// are intentionally kept identical to the English source.

import type { SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const facadeCladdingContentAr: SystemEnhancedData = {
  title: 'نظام كسوة الواجهات GFRC / GRC',
  breadcrumb: 'كسوة واجهات GFRC / GRC',
  heroDescription:
    'نظام كسوة معماري عالي الأداء مصمَّم لواجهات متينة ومرنة في التصميم وخالدة عبر المشاريع الحديثة والتراثية والمعاصرة.',
  heroImage: '/images/projects/architectural-cladding-gfrc.png',
  heroImageAlt:
    'نظام كسوة واجهات معماري من GFRC/GRC يُظهر إيقاع الألواح وإطارات الفتحات والتعبير السطحي',
  heroObjectPosition: 'center',

  featureBadges: ['حرية معمارية', 'متانة عالية', 'خفيف الوزن', 'مقاوم للعوامل الجوية'],

  engineerGuidanceHref: '/systems/gfrc-grc-facade-cladding/engineer-guidance',

  finishes: [
    { type: 'smooth', label: 'أملس', desc: 'سطح معماري نظيف للتعبيرات المعاصرة للواجهات.' },
    { type: 'sandblasted', label: 'مصنفر بالرمل', desc: 'سطح مُنَقَّح ذو ملمس ومظهر معدني طبيعي.' },
    { type: 'textured', label: 'محبَّب', desc: 'ملمس سطحي مضبوط لإضفاء العمق والطابع البصري.' },
    { type: 'stone', label: 'شبيه بالحجر', desc: 'تشطيب معماري مستوحى من جماليات الحجر الطبيعي.' },
    { type: 'colour', label: 'لون مخصص', desc: 'اتجاه لوني قائم على المشروع يُطوَّر ليطابق مقصد التصميم.' },
    { type: 'heritage', label: 'تراثي', desc: 'اتجاه تشطيب للّغة المعمارية التقليدية والإقليمية.' },
  ],

  photoTags: [
    { n: 1, label: 'منطقة الكسوة المعمارية', xPct: 25, yPct: 45 },
    { n: 2, label: 'إيقاع الألواح ومحاذاتها', xPct: 58, yPct: 30 },
    { n: 3, label: 'تعبير إطار الفتحات', xPct: 42, yPct: 62 },
    { n: 4, label: 'معالجة الحواف والزوايا', xPct: 82, yPct: 38 },
    { n: 5, label: 'الملمس والتشطيب السطحي', xPct: 30, yPct: 72 },
    { n: 6, label: 'منطقة تنسيق المشروع', xPct: 65, yPct: 78 },
  ],

  quickRead: [
    { text: 'تعبير معماري مخصص للواجهات' },
    { text: 'مكوّنات GFRC/GRC مصنَّعة بدقة' },
    { text: 'مناسب للمشاريع الحديثة والتراثية' },
    { text: 'تنسيق تصميمي خاص بكل مشروع' },
  ],

  systemIntent:
    'مصمَّم لإنشاء أسطح خارجية معمارية بأشكال ومقاطع وملامس ومعالجات مخصصة للواجهات — من إيقاع الألواح وخطوط الأطواق إلى إطارات الفتحات وتعبير الحواف.',

  commonApplications:
    'المباني التجارية، ومشاريع الضيافة، والتطويرات السكنية، والواجهات المستوحاة من التراث، والمباني المؤسسية، والمشاريع متعددة الاستخدامات.',

  keyDesignConsiderations: [
    'إيقاع الألواح ومحاذاة الواجهة',
    'إطارات الفتحات وتعبير الإطار',
    'معالجة الحواف والزوايا',
    'اتجاه الملمس والتشطيب',
    'التنسيق مع الرسومات المعمارية المعتمدة',
    'مقاومة العوامل الجوية وأبعاد الفواصل',
  ],

  importantNote:
    'هذا التوجيه مُعدّ للفهم المبكر وإعداد عروض الأسعار وتنسيق التصميم. تُطوَّر الأبعاد النهائية والتفاصيل الهندسية والرسومات التنفيذية والمستندات الخاصة بالمشروع بعد مراجعة معلومات المشروع المعتمدة.',

  infoRequiredCustom: [
    'الرسومات والمساقط المعمارية',
    'المساحات والكميات التقريبية',
    'صور أو مراجع لمقصد التصميم',
    'اتجاه التشطيب المُفضّل',
    'موقع المشروع',
    'الجدول الزمني للمشروع',
    'متطلبات الاستشاري / العميل',
    'اعتبارات تصميمية خاصة',
  ],

  designGuidance: [
    { label: 'إيقاع تخطيط الألواح', desc: 'قياس الوحدات وتباعد الفواصل والتقسيم الأفقي.' },
    { label: 'اتجاه مقطع الطوق', desc: 'اختيار المقطع وعمقه وموضعه.' },
    { label: 'عمق إطار النافذة', desc: 'عمق التجويف وعرض الإطار وخط الظل.' },
    { label: 'معالجة الزوايا والحواف', desc: 'تفاصيل الأركان والألواح المرتدة وتعبيرات الزوايا.' },
    { label: 'اختيار التشطيب السطحي', desc: 'إرشادات حول خيارات التشطيب وفق السياق والظروف.' },
    { label: 'متطلبات التنسيق', desc: 'اعتبارات قياس فواصل الألواح ومقاومة العوامل الجوية.' },
  ],

  ctaTitle: 'هل أنت مستعد لمناقشة باقة كسوة الواجهات الخاصة بك؟',
}
