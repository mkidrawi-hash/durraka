# Arabic Terminology Review — Worksheet

Owner review of the machine-draft `src/content/ar/*` dictionaries. Every user-facing string
is below with its English source and the current Arabic draft. Approved glossary terms
(`docs/arabic-terminology.md`) are already applied and consistent — **0 residual old terms**.

**How to use:** go through each row; where the Arabic is fine, leave it; where it needs a
change, tell me the correction (by field name). When a file is fully approved, I'll remove
its `⚠️ MACHINE DRAFT` header. Answer the **⚑ Decisions** first — they affect multiple files.

---

## ⚑ Decisions that affect multiple strings (please answer first)

1. **"Cornice" → currently `طوق` / `الأطواق` / `مقطع الطوق`.** Is `طوق` the term you want for an
   architectural cornice, or do you prefer **`كورنيش`** (common transliteration) or **`إفريز`**?
   This is a core GFRC product and appears in the façade page (`systemIntent`, `designGuidance`).
2. **Finish names** (façade `finishes`): Smooth `أملس` · Sandblasted `مصنفر بالرمل` ·
   Textured `محبَّب` · Stone-Like `شبيه بالحجر` · Custom Color `لون مخصص` · Heritage `تراثي`.
   Confirm or correct the finish vocabulary.
3. **"Estimated Bill of Quantities / BOQ" → `جدول الكميات التقديري`** (packages). Confirm.
4. **Proposed glossary terms** (in `docs/arabic-terminology.md`) — ratify or correct:
   architectural drawings `الرسومات والمساقط المعمارية` · quantities `الكميات` · cornice/profile
   `الطوق / المقطع` · window surround `إطار النافذة` · panel rhythm `إيقاع الألواح` ·
   consultant/contractor/developer `استشاري / مقاول / مطوّر` · government `جهة حكومية` ·
   project-based review `مراجعة قائمة على المشروع` · submit request `إرسال الطلب` ·
   3D concept render `عرض تصوّري ثلاثي الأبعاد` · reference number `الرقم المرجعي`.

Glossary-locked terms already applied (do not need re-checking unless you want to change the
glossary itself): **تكسية الواجهات** (façade cladding), **المفهوم التصميمي** (design intent),
**الدليل الاسترشادي للمهندسين** (engineer guidance), **المخططات التنفيذية** (shop drawings),
**الخرسانة المسلحة بالألياف الزجاجية (GFRC)** (first mention) then **GFRC**.

---

## File 1 — `src/content/ar/rfq.ts` (RFQ form)

| Field | English | Arabic (current) |
|---|---|---|
| qualification.intro | A few quick project details help us route your request to the right team. | بعض التفاصيل السريعة عن المشروع تساعدنا في توجيه طلبك إلى الفريق المناسب. |
| scaleBand.label | Approximate Scale | الحجم التقريبي |
| scaleBand.options | Large / Medium / Small | كبير / متوسط / صغير |
| consultantAppointed.label | Consultant Appointed? | هل تم تعيين استشاري؟ |
| targetStart.label | Target Start | تاريخ البدء المستهدف |
| targetStart.options | Immediate / 1–3 months / 3–6 months / 6+ months / Not sure yet | فوري / 1–3 أشهر / 3–6 أشهر / أكثر من 6 أشهر / غير محدد بعد |
| checklist.title | Required Project Information | معلومات المشروع المطلوبة |
| checklist.intro | To prepare an accurate scope and quotation, please have the following ready: | لإعداد نطاق عمل وعرض سعر دقيق، يُرجى تجهيز ما يلي: |
| checklist.items[0] | Architectural drawings and elevations | الرسومات والمساقط المعمارية |
| checklist.items[1] | Approximate areas and quantities | المساحات والكميات التقريبية |
| checklist.items[2] | Design intent images or references | صور أو مراجع للمفهوم التصميمي |
| checklist.items[3] | Preferred finish direction | اتجاه التشطيب المُفضّل |
| checklist.items[4] | Project location | موقع المشروع |
| checklist.items[5] | Project timeline | الجدول الزمني للمشروع |
| checklist.note | These help our engineering team review your project. You can share what you have now and add the rest later. | تساعد هذه المعلومات فريقنا الهندسي في مراجعة مشروعك. يمكنك مشاركة المتوفّر لديك الآن وإضافة الباقي لاحقاً. |

_My flag:_ none beyond the proposed-term ratifications (drawings, quantities).

---

## File 2 — `src/content/ar/systems/engineer-guidance.ts`

| Field | English | Arabic (current) |
|---|---|---|
| breadcrumbLast | Engineer Guidance | الدليل الاسترشادي للمهندسين |
| eyebrow | Project-Based Review | مراجعة قائمة على المشروع |
| title | Request Engineer Guidance | اطلب الدليل الاسترشادي للمهندسين |
| intro | Engineer guidance for the GFRC/GRC façade cladding system is issued through project-based engineering review. Our team verifies each request before responding. | يُقدَّم الدليل الاسترشادي للمهندسين لنظام تكسية الواجهات بالخرسانة المسلحة بالألياف الزجاجية (GFRC) من خلال مراجعة هندسية قائمة على المشروع. يتحقّق فريقنا من كل طلب قبل الرد. |
| consentLine | Engineer guidance is issued through project-based engineering review. Our team will verify your request before sending. | يُصدر الدليل الاسترشادي للمهندسين من خلال مراجعة هندسية قائمة على المشروع. سيتحقّق فريقنا من طلبك قبل الإرسال. |
| submitLabel | Submit Request | إرسال الطلب |
| confirmationTitle | Request Received | تم استلام الطلب |
| confirmationBody | Our engineering team will review and contact you. Guidance documents are issued after project-based verification. | سيقوم فريقنا الهندسي بالمراجعة والتواصل معك. تُصدر وثائق الدليل الاسترشادي بعد التحقّق القائم على المشروع. |
| confirmationReferenceLabel | Your reference number | الرقم المرجعي الخاص بك |
| errorFallback | Submission failed. Please try again or contact info@durraka.com. | فشل الإرسال. يُرجى المحاولة مرة أخرى أو التواصل عبر info@durraka.com. |
| roles | Consultant / Contractor / Developer / Government / Other | استشاري / مقاول / مطوّر / جهة حكومية / أخرى |
| projectTypes | Commercial / Hospitality / Residential / Heritage / Institutional / Mixed Use | تجاري / ضيافة / سكني / تراثي / مؤسسي / متعدد الاستخدامات |
| timelines | Immediate / 1–3 months / 3–6 months / 6+ months / Not sure yet | فوري / 1–3 أشهر / 3–6 أشهر / أكثر من 6 أشهر / غير محدد بعد |

_My flag:_ `confirmationReferenceLabel` could shorten to `رقمك المرجعي` (style, optional). Confirm `جهة حكومية` for Government.

---

## File 3 — `src/content/ar/packages.ts`

| Field | English | Arabic (current) |
|---|---|---|
| designIntent.eyebrow | Design Intent | المفهوم التصميمي |
| designIntent.heading | How This Package Comes Together | كيف تتكامل هذه الباقة |
| designIntent.intro | A schematic view of where this package's components sit and how they are arranged — design intent only. | عرض تخطيطي لمواضع مكوّنات هذه الباقة وكيفية ترتيبها — المفهوم التصميمي فقط. |
| designIntent.diagramCaption | Schematic design-intent diagram. Indicative arrangement only — not a construction or shop drawing. | رسم تخطيطي للمفهوم التصميمي. ترتيب استرشادي فقط — وليس رسماً إنشائياً أو مخططاً تنفيذياً. |
| designIntent.legendTitle | Components shown | المكوّنات المعروضة |
| concept3D.label | 3D Concept Render | عرض تصوّري ثلاثي الأبعاد |
| concept3D.sublabel | Provided in the Engineer Guidance package on request. | يُقدَّم ضمن باقة الدليل الاسترشادي للمهندسين عند الطلب. |
| scope.eyebrow | Package Scope | نطاق الباقة |
| scope.heading | Package Scope & Estimated Quantities | نطاق الباقة والكميات التقديرية |
| scope.intro | This package typically includes the following components: | تشمل هذه الباقة عادةً المكوّنات التالية: |
| scope.boqCallout | An estimated bill of quantities for this package is prepared per project and shared after project verification. | يُعدّ جدول الكميات التقديري لهذه الباقة لكل مشروع على حدة، ويُشارَك بعد التحقّق من المشروع. |
| scope.ctaLabel | Request Engineer Guidance | اطلب الدليل الاسترشادي للمهندسين |
| disclaimer | (full confidentiality disclaimer) | الرسوم والصور في هذه الصفحة تصوّرية ولغرض فهم التصميم فقط… عبر المخططات التنفيذية والمستندات الهندسية المعتمدة… لا تكشف أسماء العملاء أو بيانات المشاريع السرية. |

_My flag:_ confirm BOQ term `جدول الكميات`.

---

## File 4 — `src/content/ar/systems/gfrc-grc-facade-cladding.ts` (façade page)

| Field | English | Arabic (current) |
|---|---|---|
| title | GFRC / GRC Façade Cladding System | نظام تكسية الواجهات بالخرسانة المسلحة بالألياف الزجاجية (GFRC) |
| breadcrumb | GFRC / GRC Façade Cladding | تكسية واجهات GFRC |
| heroDescription | High-performance architectural cladding system… durable, design-flexible, and timeless façades… | نظام تكسية معماري عالي الأداء مصمَّم لواجهات متينة ومرنة في التصميم وخالدة… |
| heroImageAlt | GFRC/GRC architectural façade cladding system showing panel rhythm, opening surrounds, and surface expression | نظام تكسية واجهات معماري من GFRC يُظهر إيقاع الألواح وإطارات الفتحات والتعبير السطحي |
| featureBadges | Architectural Freedom / Durable / Lightweight / Weather Resistant | حرية معمارية / متانة عالية / خفيف الوزن / مقاوم للعوامل الجوية |
| finishes[].label | Smooth / Sandblasted / Textured / Stone-Like / Custom Color / Heritage | أملس / مصنفر بالرمل / محبَّب / شبيه بالحجر / لون مخصص / تراثي |
| finishes[0].desc | Clean architectural surface for contemporary façade expressions. | سطح معماري نظيف للتعبيرات المعاصرة للواجهات. |
| finishes[1].desc | Refined textured surface with a natural mineral appearance. | سطح مُنَقَّح ذو ملمس ومظهر معدني طبيعي. |
| finishes[2].desc | Controlled surface texture for depth and visual character. | ملمس سطحي مضبوط لإضفاء العمق والطابع البصري. |
| finishes[3].desc | Architectural finish inspired by natural stone aesthetics. | تشطيب معماري مستوحى من جماليات الحجر الطبيعي. |
| finishes[4].desc | Project-based colour direction developed to match design intent. | اتجاه لوني قائم على المشروع يُطوَّر ليطابق المفهوم التصميمي. |
| finishes[5].desc | Finish direction for traditional and regional architectural language. | اتجاه تشطيب للّغة المعمارية التقليدية والإقليمية. |
| photoTags[].label | Architectural Cladding Zone / Panel Rhythm & Alignment / Opening Surround Expression / Edge & Corner Treatment / Surface Texture & Finish / Project Coordination Area | منطقة التكسية المعمارية / إيقاع الألواح ومحاذاتها / تعبير إطار الفتحات / معالجة الحواف والزوايا / الملمس والتشطيب السطحي / منطقة تنسيق المشروع |
| quickRead[].text | Custom architectural façade expression / Precision-engineered GFRC/GRC components / Suitable for modern and heritage projects / Project-specific design coordination | تعبير معماري مخصص للواجهات / مكوّنات GFRC مصنَّعة بدقة / مناسب للمشاريع الحديثة والتراثية / تنسيق تصميمي خاص بكل مشروع |
| systemIntent | Designed to create architectural exterior surfaces… from panel rhythm and cornice lines to opening surrounds and edge expression. | مصمَّم لإنشاء أسطح خارجية معمارية… من إيقاع الألواح وخطوط الأطواق إلى إطارات الفتحات وتعبير الحواف. |
| commonApplications | Commercial buildings, hospitality projects, residential developments, heritage-inspired façades, institutional buildings, and mixed-use projects. | المباني التجارية، ومشاريع الضيافة، والتطويرات السكنية، والواجهات المستوحاة من التراث، والمباني المؤسسية، والمشاريع متعددة الاستخدامات. |
| keyDesignConsiderations | Panel rhythm and façade alignment / Opening surrounds and frame expression / Edge and corner treatment / Texture and finish direction / Coordination with approved architectural drawings / Weathering and joint sizing | إيقاع الألواح ومحاذاة الواجهة / إطارات الفتحات وتعبير الإطار / معالجة الحواف والزوايا / اتجاه الملمس والتشطيب / التنسيق مع الرسومات المعمارية المعتمدة / مقاومة العوامل الجوية وأبعاد الفواصل |
| importantNote | This guidance is intended for early understanding, quotation preparation, and design coordination. Final dimensions, engineering details, shop drawings, and project-specific submissions are developed after reviewing the approved project information. | هذا الدليل الاسترشادي مُعدّ للفهم المبكر وإعداد عروض الأسعار وتنسيق التصميم. تُطوَّر الأبعاد النهائية والتفاصيل الهندسية والمخططات التنفيذية والمستندات الخاصة بالمشروع بعد مراجعة معلومات المشروع المعتمدة. |
| infoRequiredCustom | (8 items — architectural drawings, areas & quantities, design-intent refs, finish direction, location, timeline, consultant/client requirements, special considerations) | الرسومات والمساقط المعمارية / المساحات والكميات التقريبية / صور أو مراجع للمفهوم التصميمي / اتجاه التشطيب المُفضّل / موقع المشروع / الجدول الزمني للمشروع / متطلبات الاستشاري / العميل / اعتبارات تصميمية خاصة |
| designGuidance[].label | Panel Layout Rhythm / Cornice Profile Direction / Window Surround Depth / Corner & Edge Treatment / Surface Finish Selection / Coordination Requirements | إيقاع تخطيط الألواح / اتجاه مقطع الطوق / عمق إطار النافذة / معالجة الزوايا والحواف / اختيار التشطيب السطحي / متطلبات التنسيق |
| ctaTitle | Ready to Discuss Your Façade Cladding Package? | هل أنت مستعد لمناقشة باقة تكسية الواجهات الخاصة بك؟ |

_My flags:_ (a) **cornice** = `الطوق / مقطع الطوق` — see Decision 1; (b) **finish names** — see Decision 2; (c) diagram SVG annotation labels (CORNICE LINE, PANEL RHYTHM…) are still English on the page — translating those is a small separate task, tell me if you want it now.

---

## Sign-off

- [ ] File 1 `rfq.ts` approved → remove MACHINE DRAFT header
- [ ] File 2 `engineer-guidance.ts` approved → remove header
- [ ] File 3 `packages.ts` approved → remove header
- [ ] File 4 `gfrc-grc-facade-cladding.ts` approved → remove header
- [ ] Proposed glossary terms ratified in `docs/arabic-terminology.md`

Once all four are approved, the draft notice bar (`commonAr.draftNotice` + ArLayout) can be removed.
