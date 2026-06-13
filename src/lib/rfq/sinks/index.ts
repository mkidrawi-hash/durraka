import type { ScoredLead } from '../types'

export interface LeadSink {
  write(lead: ScoredLead): Promise<void>
}
