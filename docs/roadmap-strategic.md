# Durraka — Strategic Roadmap

_Owner-facing strategy document. **Direction and sequencing only — no code, no
implementation in this file.** Each initiative below becomes its own scoped phase/PR when
it is picked up. Written to sit alongside the delivered engineering foundation
(`docs/lead-scoring.md`, `docs/analytics-events.md`)._

Last reviewed: 2026-07 · Status legend: ✅ shipped · 🟡 partial/scaffolded · ⬜ not started

---

## 0. Where we are today (the foundation this roadmap builds on)

The site has moved from a brochure to a **sales-engineering lead engine**. What already
exists and should be treated as load-bearing:

| Capability | State | Reference |
|---|---|---|
| 6 GFRC/GRC system pages (Façade Cladding, Mashrabiya & Screens, Domes & Vaults, Cornices & Mouldings, Columns & Capitals, Bespoke Decorative) | ✅ | `/systems/*` |
| Smart RFQ engine — conditional qualification fields, required-info checklist | ✅ | `/request-quotation`, `src/app/api/rfq` |
| Server-only lead scoring (score / tier / segment / routing) | ✅ | `docs/lead-scoring.md` |
| Controlled distribution — engineer guidance + specialized catalog (request-only, no auto-download, no public file URLs) | ✅ | `docs/` + `src/app/api/*` |
| Durable lead delivery — dual sink (Google Sheets + Resend), no silent lead loss | ✅ | RFQ / guidance / catalog routes |
| Project gallery with dual publish gate (`status` + `approvedForWeb`) and hardened lightbox | ✅ | `/gallery` |
| Analytics + first-touch UTM attribution written next to each lead | ✅ | `docs/analytics-events.md` |
| Arabic RTL shell (`/ar`, `dir="rtl" lang="ar"`) + one system page stub | 🟡 | `src/app/ar/*` |

**Strategic thesis.** Durraka's edge is not "we manufacture GFRC" — many do. It is
**engineering certainty for the specifier**: the consultant, the government reviewer, the
designer who needs to know a façade element will be approved, delivered, and installed on
program. Everything below compounds that thesis: become the reference specifiers *start*
from, and the request-for-quote is already half-won.

---

## 1. Saudi Architecture Intelligence (content authority) ⬜

**Goal:** own the search + specification decision at the moment an architect or consultant
is choosing a façade system for a Saudi project — before they've shortlisted a supplier.

**Why it wins:** GFRC selection in KSA is governed by a specific stack of constraints
(Vision 2030 landmark aesthetics, heritage/Salmani design language, coastal salt/humidity
in Jeddah, desert thermal cycling, Saudi Building Code, municipality façade approvals).
Nobody owns this content well. The factory that explains the *rules* becomes the default
reference — and references get the RFQ.

**Content pillars (each = a durable, deep resource page, not a blog post):**
1. **GFRC vs. alternatives in KSA** — GFRC vs. precast concrete, GRP, natural stone, ACM:
   weight, spans, fire, cost-per-m², approval track record. Decision matrix.
2. **Designing for the Saudi climate** — coastal chloride exposure (Jeddah/Red Sea),
   thermal movement, UV, sand abrasion; what it means for mix design, coatings, joints.
3. **Heritage & Salmani design language** — mashrabiya, cornices, arches, domes rendered in
   GFRC for contemporary landmark and government work; how tradition is met at production
   scale.
4. **Approvals & compliance** — Saudi Building Code touchpoints, municipality façade
   review, fire/structural documentation a consultant must assemble. (Position as guidance,
   not legal advice.)
5. **Specification library** — copy-ready spec clauses, tolerances, finish references, and
   the exact drawing/data a clean RFQ needs (ties directly to the RFQ checklist).

**Format discipline:** long-form, diagram-rich, genuinely useful, cite standards. Each
resource ends with a soft conversion — "Request engineer guidance on this system" — feeding
the existing controlled request flow, *not* a hard sell.

**Sequencing:** start with pillars 1 and 5 (highest RFQ intent), then 2, 3, 4. One PR per
pillar so each ships independently.

**Success signal:** organic entrances to these pages (Vercel Analytics), and their share of
sessions that reach an RFQ / engineer-guidance submit (custom events already instrumented).

---

## 2. Designer & Consultant Collaboration ⬜

**Goal:** convert architects, interior designers, and façade consultants from "buyers" into
**design partners** who specify Durraka by name early in the project.

**Why it wins:** the specifier chooses the supplier long before procurement does. If Durraka
is the easiest partner to *design with* — fast feedback, real tolerances, sample turnaround
— specification bias forms upstream of any tender.

**Initiatives:**
- **"Design with Durraka" hub** — a dedicated track for design professionals: what GFRC can
  and cannot do, achievable radii/spans/thicknesses, standard vs. bespoke profiles, finish
  and color range, and the collaboration workflow (concept → feasibility → shop drawings →
  mock-up → production).
- **BIM / CAD asset library** — downloadable detail families, profile sections, and typical
  connection details, gated through the existing controlled-distribution pattern (request →
  reference → manual send). Gives the design office something to drop straight into a model.
- **Sample & mock-up program** — a structured request path for physical samples and project
  mock-ups, qualified through RFQ-style fields so the sales-engineering team knows the
  project is real before committing a mock-up.
- **Consultant-specific lead handling** — lead scoring already weights Consultant/Designer
  roles; extend routing so consultant enquiries land with a technical contact (feasibility)
  rather than a commercial one. Governance in §4.

**Reuse, don't rebuild:** every request path here rides the existing controlled-distribution
+ dual-sink + attribution machinery. No new lead plumbing — just new front doors into it.

**Sequencing:** hub page first (authority + soft conversion), then sample/mock-up request
path, then the BIM library (heaviest asset-prep effort).

---

## 3. Content & Social Plan ⬜

**Goal:** a repeatable engine that turns real production and project work into demand,
without diluting the controlled-image discipline already established in the gallery.

**Channel priorities (B2B / specifier-led, in order):**
1. **LinkedIn** — primary. Decision-makers (consultants, developers, government,
   contractors) live here. Project spotlights, "how it's made," engineering explainers,
   team credibility.
2. **Instagram** — visual proof: finishes, texture, scale, before/after façades. Feeds
   designer aspiration.
3. **YouTube (later)** — factory walk-throughs, installation sequences, case studies. High
   production cost; defer until the content muscle exists.

**Content system (not one-off posts):**
- **Cadence:** a sustainable weekly rhythm beats a burst — e.g. 1 project/engineering post +
  1 process/credibility post per week. Consistency over volume.
- **Repurpose the deep content:** each §1 intelligence resource fragments into a week of
  social. Write once, distribute many.
- **Image governance is non-negotiable:** every project image passes the gallery's dual gate
  (`status: 'Public Safe'` **and** `approvedForWeb`) and any NDA crop **before** it appears
  anywhere social. The website gallery is the source of truth for what is publishable.
- **Every post carries UTM links** back to the relevant system/resource page
  (`utm_source=linkedin&utm_medium=social&utm_campaign=…`). First-touch attribution is
  already live — so social's contribution to actual RFQs becomes measurable, not assumed.
- **Arabic + English:** post bilingually as the RTL rollout (§6) matures; lead with the
  language of the target audience per campaign.

**Governance:** a lightweight monthly content calendar; approvals for project imagery run
through the same person/process that controls the gallery gate.

**Success signal:** attributed sessions and lead events by `utmSource`/`utmCampaign`
(already captured on every lead row and event).

---

## 4. Governance, SLA & Lead Operations 🟡

**Goal:** guarantee that the lead engine's output is *acted on* — fast, consistently, and
measurably. A scored lead that sits for three days is a lost project.

**What exists:** scoring + tier + routing + follow-up priority on every RFQ; Status column
defaults to "New"; dual-sink durability. The gap is the **human operating layer** on top.

**Initiatives:**
- **Response SLA by tier** — codify target first-response times (e.g. Green/high-priority
  within hours; Amber same business day; Red within 2 business days). Publish internally;
  measure against the lead timestamp already recorded.
- **Ownership & routing map** — named owner per segment/routing value (government,
  consultant/technical, commercial, designer). Make the routing field actionable, not
  decorative.
- **Lead lifecycle** — a small controlled Status vocabulary beyond "New"
  (New → Contacted → Qualified → Quoted → Won/Lost) maintained **in the sheet by the team**;
  the site still never writes Status. Enables funnel reporting.
- **No-silent-loss drill** — the routes already log a full recoverable lead JSON + return
  502 if every sink fails; add a periodic check that someone actually watches that log path
  and Resend/Sheets health.
- **Data hygiene & privacy** — retention policy for lead data + attribution; keep alignment
  with the published privacy policy; PII stays out of analytics (already enforced).

**This is mostly process, not code.** The one likely code follow-up is richer routing
destinations (§2). Treat SLA/ownership as an internal operations doc the owner maintains.

---

## 5. Sales Engineer Platform (the long-term vision) ⬜

**Goal:** evolve the site from "lead capture" into a **guided sales-engineering platform** —
the tool a specifier uses to get to a confident, well-formed request with minimal friction,
and the tool Durraka uses to qualify and respond at scale.

**Vision, staged (each stage is independently valuable — do not wait for the end state):**

- **Stage A — Guided system selector.** An interactive "which system for your project"
  flow (project type → aesthetic → constraints → recommended system + typical
  considerations), ending in a pre-filled RFQ. Lowers the expertise barrier; improves lead
  quality by teaching the specifier what to ask for.
- **Stage B — Feasibility & estimate assist.** Rough area/quantity and indicative
  planning-stage guidance from structured inputs — *ranges and considerations, never a
  binding quote*. Manned by the controlled-request pattern where a real number is needed.
- **Stage C — Project workspace.** A lightweight authenticated space where a
  consultant/contractor tracks their enquiry: reference, submitted drawings, guidance
  documents received, status. Turns the reference number into a relationship.
- **Stage D — Internal sales-engineering console.** An internal view over the lead pipeline
  (scores, tiers, SLA clock, routing) — replacing raw-sheet triage with a purpose-built
  queue. Only worth building once lead volume justifies it.

**Guardrails carried forward from the foundation:**
- Controlled distribution stays controlled — no stage introduces auto-download or public
  file URLs for specialized assets.
- Scoring and any sensitive logic stay **server-only**, never in the client bundle or API
  responses (as today).
- Every stage is instrumented (custom events + attribution) so its impact on real RFQs is
  provable before the next stage is funded.

**Sequencing:** Stage A has the best effort-to-value ratio and reuses the RFQ engine
directly — it is the natural first move when this initiative is picked up. B, C, D follow
only as volume and evidence warrant.

---

## 6. Arabic / RTL Rollout ⬜ (scaffold exists 🟡)

**Goal:** a first-class Arabic experience for the Saudi market — not a translation
afterthought — reflecting that a large share of decision-makers (government, local
developers, contractors) operate primarily in Arabic.

**What exists:** an `/ar` route with an RTL layout shell (`dir="rtl" lang="ar"`) and a single
façade-cladding system page stub. The plumbing is proven; the content and completeness are
not.

**Rollout, phased:**
1. **Foundation & i18n strategy** — decide the routing/i18n model (locale-prefixed routes,
   shared components, one dictionary per locale). The English copy already lives in
   `src/content/en/*` — mirror it with `src/content/ar/*` so both locales draw from
   structured dictionaries rather than hard-coded strings. This is the enabling PR.
2. **Core journey in Arabic** — home, the 6 system pages, about, contact, and the **RFQ +
   engineer-guidance forms** (the money paths) fully translated and RTL-correct, including
   validation and success/error copy.
3. **RTL correctness pass** — mirror layout, iconography direction, number/date formatting
   (keep timestamps in AST as today), form field alignment, and the lightbox/gallery in RTL.
   Arabic typography (font, line-height, weight) reviewed by a native reader.
4. **Bilingual attribution & SEO** — `hreflang` alternate tags, per-locale metadata, and
   locale captured on the lead (extend attribution or source-page) so language preference is
   visible in the pipeline.
5. **Content parity discipline** — a rule that new English content ships with (or is quickly
   followed by) its Arabic equivalent, so the two locales don't drift.

**Quality bar:** professional/native translation of all specifier-facing and legal copy —
machine translation is unacceptable for a credibility-led B2B brand. Legal pages
(privacy, terms) need a qualified Arabic review.

**Sequencing:** #1 (i18n foundation) unblocks everything and should be a clean standalone
PR; #2 delivers the market value; #3–5 harden and scale.

---

## Priority summary (recommended order when these are picked up)

| # | Initiative | Rationale | Rough effort |
|---|---|---|---|
| 1 | §1 Saudi Architecture Intelligence (pillars 1 & 5) | Highest-intent demand capture; compounds forever | Medium, per-pillar |
| 2 | §3 Content & Social engine | Distributes §1; makes marketing spend measurable | Low code / ongoing |
| 3 | §4 Governance & SLA | Protects the value of every lead already captured | Mostly process |
| 4 | §6 Arabic i18n foundation (rollout step 1) | Unblocks the Saudi-market experience | Medium |
| 5 | §2 Designer collaboration hub | Upstream specification bias | Medium |
| 6 | §5 Sales Engineer Platform — Stage A selector | Highest-leverage product bet; reuses RFQ engine | Medium–High |

Each row above becomes its own scoped phase and PR. This document is the map, not the
territory — revisit and re-sequence as market signals (attributed leads, search demand,
sales feedback) come in.
