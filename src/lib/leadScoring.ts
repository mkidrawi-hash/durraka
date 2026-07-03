// ── Lead scoring (SERVER-ONLY) ──────────────────────────────────────────────────
// IMPORTANT: this module must NEVER be imported by client components and its
// output must NEVER be returned to the visitor. It runs only inside the RFQ API
// route. See docs/lead-scoring.md for the full rubric and how to adjust it.

export interface LeadScoreInput {
  clientType?: string
  projectType?: string
  scaleBand?: string // 'Large' | 'Medium' | 'Small' | ''
  targetStart?: string // 'Immediate' | '1–3 months' | '3–6 months' | '6+ months' | 'Not sure yet' | ''
  consultantAppointed?: string // 'Yes' | 'No' | ''
  projectLocation?: string
}

export interface LeadScoreResult {
  score: number
  tier: 'Green' | 'Amber' | 'Red'
  segment: string
  routing: string
  followUpPriority: 'High' | 'Medium' | 'Low'
}

const has = (s: string | undefined, ...needles: string[]) => {
  const v = (s ?? '').toLowerCase()
  return needles.some((n) => v.includes(n))
}

function roleScore(r?: string): number {
  if (has(r, 'government', 'semi-government', 'gov')) return 30
  if (has(r, 'consultant')) return 25
  if (has(r, 'developer')) return 25
  if (has(r, 'contractor')) return 20
  if (has(r, 'designer', 'architect')) return 15
  return 5 // private / other / unspecified
}

function typeScore(t?: string): number {
  if (has(t, 'government', 'civic', 'institutional')) return 20
  if (has(t, 'commercial', 'hospitality')) return 18
  if (has(t, 'mixed')) return 15
  if (has(t, 'heritage')) return 12
  if (has(t, 'residential', 'villa')) return 8
  return 6
}

function scaleScore(s?: string): number {
  if (has(s, 'large')) return 25
  if (has(s, 'medium')) return 15
  if (has(s, 'small')) return 8
  return 3
}

function timelineScore(t?: string): number {
  if (has(t, 'immediate') || has(t, '1–3', '1-3')) return 20
  if (has(t, '3–6', '3-6')) return 15
  if (has(t, '6+')) return 8
  return 3 // not sure / unspecified
}

function consultantScore(c?: string): number {
  if (has(c, 'yes')) return 10
  if (has(c, 'no')) return 3
  return 0
}

function locationScore(l?: string): number {
  return (l ?? '').trim() ? 5 : 0
}

function segmentOf(t?: string): string {
  if (has(t, 'government', 'civic', 'institutional')) return 'Government / Civic'
  if (has(t, 'hospitality')) return 'Hospitality'
  if (has(t, 'commercial')) return 'Commercial'
  if (has(t, 'mixed')) return 'Mixed-Use'
  if (has(t, 'heritage')) return 'Heritage'
  if (has(t, 'residential', 'villa')) return 'Residential'
  return 'General'
}

function routingOf(role?: string, type?: string): string {
  if (has(role, 'government', 'gov') || has(type, 'government', 'civic', 'institutional')) return 'B2G desk'
  if (has(type, 'commercial', 'hospitality', 'mixed') || has(role, 'developer', 'consultant', 'contractor')) return 'Commercial desk'
  if (has(type, 'residential', 'villa', 'heritage') || has(role, 'private')) return 'B2C desk'
  return 'General desk'
}

export function scoreLead(input: LeadScoreInput): LeadScoreResult {
  const score =
    roleScore(input.clientType) +
    typeScore(input.projectType) +
    scaleScore(input.scaleBand) +
    timelineScore(input.targetStart) +
    consultantScore(input.consultantAppointed) +
    locationScore(input.projectLocation)

  const tier: LeadScoreResult['tier'] = score >= 65 ? 'Green' : score >= 40 ? 'Amber' : 'Red'
  const followUpPriority: LeadScoreResult['followUpPriority'] =
    tier === 'Green' ? 'High' : tier === 'Amber' ? 'Medium' : 'Low'

  return {
    score,
    tier,
    segment: segmentOf(input.projectType),
    routing: routingOf(input.clientType, input.projectType),
    followUpPriority,
  }
}
