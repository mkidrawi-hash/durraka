// ⚠️ MACHINE DRAFT — pending professional Arabic review. Mirrors src/content/en/gallery.ts.
// Terminology follows docs/arabic-terminology.md.

import type { Translatable } from '@/lib/i18n'
import { galleryContent } from '@/content/en/gallery'

export const galleryContentAr: Translatable<typeof galleryContent> = {
  metaTitle: 'معرض المشاريع',
  metaDescription:
    'استعرض مختارات من الأعمال المعمارية المنفّذة بالخرسانة المسلحة بالألياف الزجاجية (GFRC) وعناصر الواجهات والملامس والمراجع البصرية القائمة على المشاريع.',

  breadcrumbHome: 'الرئيسية',
  breadcrumbGallery: 'معرض المشاريع',
  eyebrow: 'مراجع بصرية',
  title: 'معرض المشاريع',
  intro:
    'استعرض مختارات من الأعمال المعمارية المنفّذة بالخرسانة المسلحة بالألياف الزجاجية (GFRC) وعناصر الواجهات والملامس والمراجع البصرية القائمة على المشاريع.',

  filterAll: 'الكل',
  countNone: 'لا توجد مراجع في هذه الفئة',
  countSingular: 'مرجع',
  countPlural: 'مراجع',
  projectCountSingular: 'مشروع',
  projectCountPlural: 'مشاريع',
  photoCountSingular: 'صورة',
  photoCountPlural: 'صور',

  emptyStateTitle: 'لا توجد مراجع في هذه الفئة بعد',
  emptyStateSubtext: 'ستظهر صور {category} هنا عند نشرها.',

  imageComingSoon: 'الصورة قريباً',

  cardView: 'عرض',
  cardViewProject: 'عرض المشروع',
  cardOpenPreview: 'فتح المعاينة: {title}',
  cardOpenProject: 'فتح صور المشروع: {title}',

  samplesBadge: 'عيّنات',

  projects: {
    'beachfront-hotel-resort-jeddah': {
      title: 'فندق ومنتجع الواجهة البحرية – جدة',
      chips: ['شاشات المشربية', 'تكسية الواجهات', 'الكرانيش والمقاطع', 'عناصر زخرفية'],
    },
    'kaec-2025-hospitality': { title: 'واجهات مشروع ضيافة' },
    'makkah-2023-heritage-mosque': { title: 'عناصر مسجد تراثي' },
    'landmark-mosque-aziziyah': { title: 'مسجد مميّز – العزيزية' },
    'mosque-domes-minaret': { title: 'قباب ومئذنة مسجد' },
    'grand-arcade-facade': { title: 'مجمع واجهة الرواق الكبير' },
    'infrastructure-cladding': { title: 'تكسية بنية تحتية — جسر ونفق' },
    'urban-high-rise-tower': { title: 'واجهة برج شاهق' },
    'mashrabiya-entry-screens': { title: 'مشربيات المداخل' },
    'architectural-samples': { title: 'عيّنات ونماذج معمارية' },
  },

  cityLabels: {
    Jeddah: 'جدة',
    KAEC: 'مدينة الملك عبدالله الاقتصادية',
    Makkah: 'مكة المكرمة',
    'Saudi Arabia': 'المملكة العربية السعودية',
  },

  lightboxEyebrow: 'معرض المشاريع',
  lightboxPreview: 'معاينة المعرض: {title}',
  lightboxClose: 'إغلاق المعاينة',
  lightboxPrevious: 'السابق',
  lightboxNext: 'التالي',
  lightboxZoomIn: 'تكبير',
  lightboxZoomOut: 'تصغير',
  lightboxResetZoom: 'إعادة تعيين التكبير',

  locationSaudiArabia: 'المملكة العربية السعودية',

  lightboxDisclosure:
    'للاستخدام كمرجع تصميمي فقط. لا يتم الإفصاح عن أسماء العملاء أو الهويات الدقيقة للمشاريع أو الكميات أو قيم العقود أو تفاصيل التثبيت أو المواصفات السرية.',
  galleryDisclosure:
    'جميع المراجع مخصّصة لأغراض التنسيق التصميمي فقط. لا يتم الإفصاح عن أسماء العملاء أو الهويات الدقيقة للمشاريع أو قيم العقود أو الكميات أو تفاصيل التثبيت أو المثبّتات أو الكوابيل أو تسلسل التركيب أو المواصفات السرية. تُعرض فقط المختارات الآمنة للنشر العام.',

  ctaHeading: 'لديك مشروع ترغب بمناقشته؟',
  ctaBody: 'شارك مخططاتك واحصل على عرض سعر خاص بمشروعك لأنظمة GFRC من فريقنا الهندسي.',
  ctaButton: 'اطلب عرض سعر',

  categoryLabels: {
    'Grand Entrances': 'المداخل الكبرى',
    'Facades & Cladding': 'الواجهات والتكسيات',
    Domes: 'القباب',
    Mashrabiya: 'المشربيات',
    'Columns & Capitals': 'الأعمدة والتيجان',
    Cornices: 'الكرانيش',
    'Decorative Elements': 'العناصر الزخرفية',
    Hospitality: 'الضيافة',
    Infrastructure: 'البنية التحتية',
    'High-Rise / Towers': 'الأبراج والمباني الشاهقة',
    'Architectural Details': 'التفاصيل المعمارية',
    'Samples & Mockups': 'العينات والنماذج',
    'Civic Identity Elements': 'عناصر الهوية المدنية',
  },

  images: {
    'beachfront-hotel-resort-mashrabiya-facade-01': {
      title: 'واجهة المشربية',
      alt: 'واجهة شاشات مشربية من GFRC على مبنى منتجع على الواجهة البحرية، جدة',
    },
    'beachfront-hotel-resort-arched-pool-courtyard-02': {
      title: 'فناء المسبح المقوّس',
      alt: 'واجهات فناء مقوّسة من GFRC حول شرفة مسبح المنتجع، جدة',
    },
    'beachfront-hotel-resort-mashrabiya-balconies-03': {
      title: 'شرفات المشربية',
      alt: 'شاشات مشربية من GFRC على شرفات واجهة المنتجع، جدة',
    },
    'beachfront-hotel-resort-seafront-elevation-04': {
      title: 'الواجهة البحرية',
      alt: 'واجهة GFRC للمنتجع المطلة على البحر، جدة',
    },
    'beachfront-hotel-resort-resort-aerial-08': {
      title: 'منظر جوي للمنتجع',
      alt: 'منظر جوي لمنتجع على الواجهة البحرية بعناصر واجهات GFRC، جدة',
    },
    'beachfront-hotel-resort-villas-golf-aerial-09': {
      title: 'منظر جوي للفلل والجولف',
      alt: 'منظر جوي لفلل المنتجع وملعب الجولف، جدة',
    },
    'beachfront-hotel-resort-masterplan-aerial-10': {
      title: 'منظر جوي للمخطط العام',
      alt: 'منظر جوي للمخطط العام لتطوير ضيافة على الواجهة البحرية، جدة',
    },
    'beachfront-hotel-resort-colonnade-mashrabiya-11': {
      title: 'الرواق وشاشات المشربية',
      alt: 'رواق من GFRC بشاشات مشربية في منتجع على الواجهة البحرية، جدة',
    },
    'kaec-2025-grand-entrance-001': {
      title: 'المدخل الكبير، KAEC',
      alt: 'عناصر واجهة المدخل الكبير بنظام GFRC لمشروع ضيافة، KAEC',
    },
    'kaec-2025-arrival-plaza-001': {
      title: 'واجهة ساحة الوصول، KAEC',
      alt: 'عناصر واجهة معمارية عند ساحة الوصول لمشروع ضيافة، KAEC',
    },
    'kaec-2025-facade-mashrabiya-001': {
      title: 'مشربيات الواجهة، KAEC',
      alt: 'مشربيات واجهة بنظام GFRC على مبنى ضيافة، KAEC',
    },
    'kaec-2025-facade-screens-002': {
      title: 'مشبّكات واجهة الضيافة، KAEC',
      alt: 'عناصر مشبّكات واجهة معمارية بنظام GFRC على مبنى ضيافة، KAEC',
    },
    'kaec-2025-mashrabiya-facade-003': {
      title: 'تفصيل مشربية الواجهة، KAEC',
      alt: 'تفصيل مشربية واجهة بنظام GFRC لمشروع ضيافة، KAEC',
    },
    'kaec-2025-facade-arches-screens-004': {
      title: 'أقواس ومشبّكات الواجهة، KAEC',
      alt: 'أقواس ومشبّكات واجهة بنظام GFRC لمشروع ضيافة، KAEC',
    },
    'kaec-2025-courtyard-facade-001': {
      title: 'واجهة الفناء، KAEC',
      alt: 'عناصر تكسية واجهة بنظام GFRC عند واجهة فناء ضيافة، KAEC',
    },
    'makkah-2023-domes-001': {
      title: 'عناصر القباب، مكة',
      alt: 'عناصر قبة بنظام GRC على واجهة مسجد، مكة',
    },
    'makkah-2023-mashrabiya-001': {
      title: 'مشربيات، مكة',
      alt: 'مشربيات بنظام GFRC بنمط هندسي متشابك، مكة',
    },
    'makkah-2023-columns-001': {
      title: 'أعمدة مقوّسة وتيجان، مكة',
      alt: 'أعمدة مقوّسة وتيجان زخرفية بنظام GRC على مسجد، مكة',
    },
    'makkah-2023-columns-002': {
      title: 'تفصيل رواق الأعمدة، مكة',
      alt: 'رواق أعمدة بنظام GRC بأحياز مقوّسة على واجهة مسجد، مكة',
    },
    'makkah-2023-decorative-001': {
      title: 'عناصر واجهة زخرفية، مكة',
      alt: 'عناصر واجهة زخرفية بنظام GRC على مسجد، مكة',
    },
    'makkah-2023-decorative-002': {
      title: 'تفصيل زخرفي، مكة',
      alt: 'تفاصيل واجهة زخرفية بنظام GRC على مسجد، مكة',
    },
    'cornice-makkah-2024': {
      title: 'نظام مقاطع الكورنيش، مكة، 2024',
      alt: 'كورنيش كلاسيكي بنظام GRC بحلية أسنان مشطية وطنف أفقي',
    },
    'grand-entrance-makkah-2024': {
      title: 'مدخل ضيافة كبير، مكة، 2024',
      alt: 'مدخل ضيافة كبير بنظام GRC بقوس ودعامات جدارية',
    },
    'facade-cladding-jeddah-2023': {
      title: 'تكسية واجهة سكنية، جدة، 2023',
      alt: 'تكسية واجهة سكنية بنظام GFRC بخطوط غائرة',
    },
    'dome-riyadh-2023': {
      title: 'قبة تراثية، الرياض، 2023',
      alt: 'قبة تراثية بنظام GRC بمقطع مضلّع',
    },
    'mashrabiya-medina-2024': {
      title: 'مشربيات الواجهة، المدينة المنورة، 2024',
      alt: 'مشربيات بنظام GFRC مقوّسة بكامل الارتفاع',
    },
    'columns-makkah-2023': {
      title: 'أعمدة مميّزة، مكة، 2023',
      alt: 'أعمدة ضخمة بنظام GRC بتيجان كلاسيكية',
    },
    'grand-arcade-facade-overall-view-001': {
      title: 'واجهة الرواق الكبير، منظر عام',
      alt: 'منظر عام لواجهة رواق كبير بتكسية GFRC وأحياز مقوّسة',
    },
    'grand-arcade-facade-overall-view-002': {
      title: 'واجهة الرواق الكبير، منظر ثانٍ',
      alt: 'منظر ثانٍ لواجهة رواق كبير بعناصر معمارية بنظام GFRC',
    },
    'grand-arcade-facade-wide-view-001': {
      title: 'واجهة الرواق الكبير، منظر واسع',
      alt: 'منظر واسع لواجهة رواق كبير بنظام GFRC بإيقاع أقواس متكرر',
    },
    'grand-arcade-facade-street-view-001': {
      title: 'واجهة الرواق الكبير، منظر من الشارع',
      alt: 'منظر من مستوى الشارع لواجهة رواق كبير بتكسية GFRC',
    },
    'grand-arcade-facade-side-perspective-001': {
      title: 'واجهة الرواق الكبير، منظور جانبي',
      alt: 'منظور جانبي لواجهة رواق كبير يُظهر عمق الكورنيش والتكسية بنظام GFRC',
    },
    'grand-arcade-facade-main-block-001': {
      title: 'واجهة الرواق الكبير، الكتلة الرئيسية',
      alt: 'واجهة الكتلة الرئيسية لرواق كبير بألواح تكسية GFRC مدمجة',
    },
    'grand-arcade-facade-institutional-view-001': {
      title: 'واجهة الرواق الكبير، مؤسسية',
      alt: 'واجهة مؤسسية لمجمّع رواق كبير بتكسية GFRC',
    },
    'grand-arcade-facade-colonnade-view-001': {
      title: 'واجهة رواق الأعمدة',
      alt: 'واجهة رواق أعمدة بأعمدة GFRC وأحياز مقوّسة',
    },
    'grand-arcade-facade-arch-detail-001': {
      title: 'تفصيل قوس واجهة الرواق',
      alt: 'تفصيل مقرّب لقوس واجهة رواق بنظام GFRC بمقاطع حلية زخرفية',
    },
    'bridge-infrastructure-cladding-overall-view-001': {
      title: 'تكسية البنية التحتية، منظر عام',
      alt: 'منظر عام لتكسية بنية تحتية بنظام GFRC على منشأة جسر',
    },
    'bridge-infrastructure-cladding-long-view-001': {
      title: 'تكسية البنية التحتية، منظر طولي',
      alt: 'منظر طولي لألواح تكسية بنية تحتية بنظام GFRC على جسر',
    },
    'bridge-infrastructure-cladding-support-detail-001': {
      title: 'تكسية البنية التحتية، تفصيل إنشائي',
      alt: 'منظر تفصيلي لتكسية بنية تحتية بنظام GFRC عند نقطة إسناد إنشائي',
    },
    'tunnel-pattern-cladding-001': {
      title: 'تكسية بنمط النفق',
      alt: 'ألواح تكسية منقوشة بنظام GFRC على منشأة نفق أو ممر سفلي',
    },
    'mashrabiya-entry-screen-doorway-001': {
      title: 'مشربية مدخل، باب',
      alt: 'مشربية مدخل بنظام GFRC تؤطّر فتحة باب',
    },
    'mashrabiya-entry-screen-doorway-002': {
      title: 'مشربية مدخل، منظر ثانٍ',
      alt: 'منظر ثانٍ للوح مشربية مدخل بنظام GFRC بكامل الهندسة',
    },
    'mosque-architectural-details-main-entrance-001': {
      title: 'المدخل الرئيسي لمنشأة دينية',
      alt: 'واجهة المدخل الرئيسي لمنشأة دينية بعناصر مقوّسة وتفاصيل زخرفية بنظام GFRC',
    },
    'mosque-architectural-details-dome-interior-001': {
      title: 'تفصيل معماري لقبة داخلية',
      alt: 'تفصيل معماري لقبة داخلية بتشطيب هندسي زخرفي بنظام GFRC',
    },
    'mosque-architectural-details-lattice-window-001': {
      title: 'تفصيل مشبّك نافذة متشابك',
      alt: 'مشبّك نافذة بنظام GFRC بنمط هندسي تقليدي على منشأة دينية',
    },
    'mosque-architectural-details-screen-windows-001': {
      title: 'نوافذ مشبّكة، نمط هندسي',
      alt: 'صف من ألواح نوافذ مشبّكة بنظام GFRC بنمط هندسي متشابك',
    },
    'mosque-architectural-details-minaret-001': {
      title: 'تفصيل معماري لمئذنة',
      alt: 'تفصيل معماري لمئذنة بنظام GFRC بتحزيم سطحي زخرفي',
    },
    'urban-high-rise-tower-full-height-view-001': {
      title: 'برج شاهق، منظر بكامل الارتفاع',
      alt: 'منظر بكامل الارتفاع لبرج حضري شاهق بتكسية واجهة GFRC',
    },
    'urban-high-rise-tower-corner-view-001': {
      title: 'برج شاهق، منظر زاوية',
      alt: 'منظر زاوية لبرج شاهق بتكسية GFRC وخطوط غائرة',
    },
    'urban-high-rise-tower-corner-view-002': {
      title: 'برج شاهق، منظر زاوية 2',
      alt: 'منظر زاوية ثانٍ لبرج شاهق بنظام تكسية واجهة GFRC',
    },
    'urban-high-rise-tower-street-view-001': {
      title: 'برج شاهق، منظر من الشارع',
      alt: 'منظر من مستوى الشارع لبرج شاهق يُظهر تكسية GFRC وواجهة القاعدة',
    },
    'architectural-sample-arched-screen-panel-001': {
      title: 'عيّنة لوح مشبّك مقوّس',
      alt: 'عيّنة لوح مشبّك مقوّس بنظام GFRC تُظهر هندسة المشبّك والتشطيب السطحي',
    },
    'architectural-sample-balustrade-001': {
      title: 'عيّنة درابزين',
      alt: 'عيّنة درابزين بنظام GFRC تُظهر المقطع وتفاصيل القوائم',
    },
    'architectural-sample-frame-panel-001': {
      title: 'عيّنة لوح بإطار',
      alt: 'عيّنة لوح بإطار بنظام GFRC تُظهر تفاصيل الإطار المصبوب والتشطيب السطحي',
    },
    'landmark-mosque-aziziyah-makkah-hero-001': {
      title: 'مسجد مميّز – العزيزية، مكة — الواجهة الخارجية',
      alt: 'مسجد مميّز في العزيزية، مكة، بقباب ومآذن مزخرفة بنظام GFRC',
    },
    'landmark-mosque-aziziyah-makkah-minaret-detail-001': {
      title: 'مسجد مميّز – العزيزية، مكة — تفصيل المئذنة',
      alt: 'تفصيل مئذنة مزخرفة بنظام GFRC في مسجد مميّز، العزيزية، مكة',
    },
    'landmark-mosque-aziziyah-makkah-dome-detail-001': {
      title: 'مسجد مميّز – العزيزية، مكة — تفصيل القبة والزخرفة',
      alt: 'تفصيل قبة زخرفية بنظام GFRC في مسجد مميّز، العزيزية، مكة',
    },
    'mosque-domes-minaret-gfrc-hero-001': {
      title: 'قباب ومئذنة مسجد، GFRC/GRC',
      alt: 'مسجد بنظام GFRC/GRC بقباب مزخرفة ومئذنة مفصّلة',
    },
    'mosque-domes-minaret-gfrc-dome-detail-001': {
      title: 'قبة مسجد زخرفية، GFRC/GRC',
      alt: 'قبة مسجد زخرفية بنظام GFRC بزخارف بارزة',
    },
    'mosque-domes-minaret-gfrc-minaret-facade-001': {
      title: 'واجهة مئذنة مسجد، GFRC/GRC',
      alt: 'واجهة مئذنة مسجد بنظام GFRC/GRC بتفاصيل زخرفية',
    },
    'mosque-domes-minaret-gfrc-facade-overview-001': {
      title: 'واجهة مسجد، GFRC/GRC',
      alt: 'واجهة مسجد بنظام GFRC/GRC بتكسية وكرانيش زخرفية',
    },
    'heritage-gfrc-facade-hero-001': {
      title: 'واجهة تراثية بنظام GFRC/GRC',
      alt: 'واجهة تراثية بنظام GFRC/GRC بأقواس وكرانيش وألواح مشبّكة زخرفية',
    },
  },
}
