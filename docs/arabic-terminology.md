# Durraka — Arabic Terminology Reference (Official Glossary)

**Owner-approved.** This is the single source of truth for Arabic terminology across the
site. All current and future `src/content/ar/*` dictionary work — and any Arabic UI copy —
**must** follow these renderings consistently. Do **not** introduce alternative renderings
of an approved term.

## Approved terms

| English | Approved Arabic | Rule |
|---|---|---|
| GFRC / GRC | الخرسانة المسلحة بالألياف الزجاجية (GFRC) | Full term + acronym on **first mention per page**; plain **"GFRC"** (Latin) afterwards |
| Façade Cladding | تكسية الواجهات | Always |
| Finish / Finishes | تشطيب / تشطيبات | Always |
| Mashrabiya | مشربية | Always |
| Design Intent | المفهوم التصميمي | Always |
| Engineer Guidance | الدليل الاسترشادي للمهندسين | Always |
| Request a Quote | اطلب عرض سعر | Buttons / CTAs |
| Shop Drawings | المخططات التنفيذية | Always |
| Request Technical Review | اطلب مراجعة فنية | Buttons / CTAs |
| What's Included | ما تشمله الباقة | Package pages |
| Durraka (brand) | دراكة | Always — transliteration, no diacritics |
| Durraka Factory for Industry | مصنع دراكة للصناعة | Always |
| Cornice / Cornices | الكورنيش / الكرانيش | Always — owner-approved; **do not** use طوق / أطواق |

**Note.** These terminology decisions are **owner-approved**. Do not substitute synonyms or
alternative phrasings for any term above. When a new recurring term is translated, add it to
the **Proposed** table below marked for owner approval — do not treat a proposed term as
final until the owner moves it into the approved table.

## Proposed (pending owner approval)

Recurring domain terms used in the current machine-draft `ar/*` dictionaries that are **not
yet** in the approved list. Please confirm or correct; approved rows will be promoted above.

| English | Proposed Arabic | Where used |
|---|---|---|
| Architectural drawings & elevations | الرسومات والمساقط المعمارية | RFQ checklist, façade info-required |
| Quantities / BOQ (bill of quantities) | الكميات / جدول الكميات | Packages scope, RFQ |
| Profile (cornice section) | مقطع | Façade design guidance (Cornice itself is now approved: الكورنيش / الكرانيش) |
| Window surround / reveal | إطار النافذة / التجويف | Façade design guidance |
| Panel rhythm | إيقاع الألواح | Façade |
| Consultant / Contractor / Developer | استشاري / مقاول / مطوّر | Engineer-guidance roles |
| Project-Based Review | مراجعة قائمة على المشروع | Engineer-guidance eyebrow |
| Submit Request | إرسال الطلب | Engineer-guidance CTA |
| 3D Concept Render | عرض تصوّري ثلاثي الأبعاد | Packages 3D slot |
| Reference number | الرقم المرجعي | Engineer-guidance confirmation |

## How to use

- When translating a new page/dictionary, apply every **Approved** term exactly as written.
- For **GFRC / GRC**: the first time it appears on a given page, write
  `…بالخرسانة المسلحة بالألياف الزجاجية (GFRC)`; every later mention on that page is just
  `GFRC` (Latin).
- If a term you need isn't listed, add it to **Proposed** and flag it for the owner in the
  PR/handoff — never guess a final rendering silently.
