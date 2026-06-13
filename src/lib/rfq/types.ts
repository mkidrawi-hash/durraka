export type ScoreLabel = 'hot' | 'warm' | 'cold'

export type ClientType =
  | 'Architect'
  | 'Main Contractor'
  | 'Developer / Owner'
  | 'Façade Consultant'
  | 'Subcontractor'
  | 'Government Entity'

export type ProjectType =
  | 'Commercial'
  | 'Residential'
  | 'Government'
  | 'Hospitality'
  | 'Religious'
  | 'Infrastructure'

export type SystemRequired =
  | 'GFRC/GRC Façade Cladding'
  | 'Mashrabiya Systems'
  | 'Domes & Vaults'
  | 'Cornices & Profiles'
  | 'Columns & Pillars'
  | 'Custom Decorative Elements'
  | 'Multiple Systems'

export interface RfqFormData {
  fullName: string
  jobTitle: string
  company: string
  email: string
  phone: string
  clientType: ClientType | ''
  projectName: string
  projectLocation: string
  projectType: ProjectType | ''
  estimatedArea: string
  deliveryDate: string
  systemRequired: SystemRequired | ''
  notes: string
  website: string // honeypot — must be empty
}

export interface LeadScore {
  value: number     // 0–100
  label: ScoreLabel
  factors: string[] // human-readable scoring notes
}

export interface ScoredLead {
  data: RfqFormData
  score: LeadScore
  reference: string
  timestamp: string
}
