# Lead Scoring — Internal Reference

> **Internal only.** This rubric is implemented server-side in
> `src/lib/leadScoring.ts` and runs inside `POST /api/rfq`. Scores, tiers, and
> tags are written to the RFQ Google Sheet (columns V–Z). **None of this is ever
> exposed to the visitor** — not in the client bundle, not in API responses.
> Never link or reference this file from any public page.

## Inputs used
`clientType` (role) · `projectType` · `scaleBand` · `targetStart` · `consultantAppointed` · `projectLocation`.

## Weights

| Factor | Values → points |
|---|---|
| **Role** (`clientType`) | Government/Semi-Gov **30** · Consultant **25** · Developer **25** · Contractor **20** · Designer/Architect **15** · Private/Other **5** |
| **Project type** | Government/Civic/Institutional **20** · Commercial/Hospitality **18** · Mixed-Use **15** · Heritage **12** · Residential **8** · other **6** |
| **Scale band** | Large **25** · Medium **15** · Small **8** · Unknown **3** |
| **Timeline** (`targetStart`) | Immediate or 1–3mo **20** · 3–6mo **15** · 6+mo **8** · Not sure **3** |
| **Consultant appointed** | Yes **10** · No **3** · blank **0** |
| **Location** | present **5** · blank **0** |

Max ≈ 110.

## Tier thresholds
- **Green** ≥ 65 → follow-up priority **High**
- **Amber** 40–64 → follow-up priority **Medium**
- **Red** < 40 → follow-up priority **Low**

## Tags written (Sheet columns X–Z)
- **Segment** (X): derived from project type — Government/Civic · Hospitality · Commercial · Mixed-Use · Heritage · Residential · General.
- **Routing** (Y): `B2G desk` (gov role/type) · `Commercial desk` (commercial/hospitality/mixed or dev/consultant/contractor) · `B2C desk` (residential/heritage/private) · `General desk`.
- **Follow-up Priority** (Z): High / Medium / Low from tier.

## Sheet columns (RFQ tab) — existing A–R unchanged; S–Z appended
`S Consultant Appointed · T Scale Band · U Target Start · V Lead Score · W Tier · X Segment · Y Routing · Z Follow-up Priority`

## Worked examples
| Lead | Role | Type | Scale | Timeline | Consultant | Score | Tier |
|---|---|---|---|---|---|---|---|
| 1 | Consultant (25) | Government (20) | Large (25) | Immediate (20) | Yes (10) + loc (5) | **105** | Green |
| 2 | Contractor (20) | Residential (8) | Small (8) | 6+mo (8) | No (3) + loc (5) | **52** | Amber |
| 3 | Developer (25) | Commercial (18) | Medium (15) | 3–6mo (15) | Yes (10) + loc (5) | **88** | Green |

## How to adjust
Edit the weight functions and `tier` thresholds in `src/lib/leadScoring.ts`, then
update this file. Keep it server-only — do not import `leadScoring` from any client
component, and do not return score/tier/tags in any API response to the visitor.
