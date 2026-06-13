import type { RfqFormData, LeadScore } from './types'

const CLIENT_WEIGHTS: Partial<Record<string, number>> = {
  'Developer / Owner': 25,
  'Main Contractor': 20,
  'Government Entity': 20,
  'Façade Consultant': 15,
  'Architect': 15,
  'Subcontractor': 10,
}

export function scoreLead(data: RfqFormData): LeadScore {
  let value = 0
  const factors: string[] = []

  // Estimated area — up to 30 pts
  const area = parseFloat(data.estimatedArea)
  if (area >= 5000) {
    value += 30
    factors.push('Large area ≥5,000 m²')
  } else if (area >= 1000) {
    value += 20
    factors.push('Medium area ≥1,000 m²')
  } else if (area > 0) {
    value += 10
    factors.push('Estimated area provided')
  }

  // Client type — up to 25 pts
  const clientWeight = CLIENT_WEIGHTS[data.clientType] ?? 0
  if (clientWeight > 0) {
    value += clientWeight
    factors.push(`Client type: ${data.clientType}`)
  }

  // System specificity — up to 15 pts
  if (data.systemRequired && data.systemRequired !== 'Multiple Systems') {
    value += 15
    factors.push(`Specific system: ${data.systemRequired}`)
  } else if (data.systemRequired === 'Multiple Systems') {
    value += 10
    factors.push('Multiple systems required')
  }

  // Phone provided — 10 pts
  if (data.phone) {
    value += 10
    factors.push('Phone / WhatsApp provided')
  }

  // Detailed notes — 10 pts
  if (data.notes.length > 50) {
    value += 10
    factors.push('Detailed project notes')
  }

  // Delivery date — 10 pts
  if (data.deliveryDate) {
    value += 10
    factors.push('Target delivery date specified')
  }

  const capped = Math.min(value, 100)
  const label = capped >= 60 ? 'hot' : capped >= 35 ? 'warm' : 'cold'

  return { value: capped, label, factors }
}
