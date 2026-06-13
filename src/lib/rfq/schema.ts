import type { RfqFormData } from './types'

export class RfqValidationError extends Error {
  constructor(
    public readonly field: string,
    message: string,
  ) {
    super(message)
    this.name = 'RfqValidationError'
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const REQUIRED_FIELDS: [keyof RfqFormData, string][] = [
  ['fullName', 'Full name'],
  ['company', 'Company name'],
  ['email', 'Email address'],
  ['projectName', 'Project name'],
  ['projectLocation', 'Project location'],
  ['systemRequired', 'System required'],
]

export function validateRfq(raw: unknown): RfqFormData {
  if (!raw || typeof raw !== 'object') {
    throw new RfqValidationError('body', 'Request body is missing or invalid.')
  }

  const d = raw as Record<string, unknown>
  const str = (key: string) => String(d[key] ?? '').trim()

  for (const [field, label] of REQUIRED_FIELDS) {
    if (!str(field as string)) {
      throw new RfqValidationError(field as string, `${label} is required.`)
    }
  }

  if (!EMAIL_RE.test(str('email'))) {
    throw new RfqValidationError('email', 'Please enter a valid email address.')
  }

  return {
    fullName: str('fullName'),
    jobTitle: str('jobTitle'),
    company: str('company'),
    email: str('email'),
    phone: str('phone'),
    clientType: str('clientType') as RfqFormData['clientType'],
    projectName: str('projectName'),
    projectLocation: str('projectLocation'),
    projectType: str('projectType') as RfqFormData['projectType'],
    estimatedArea: str('estimatedArea'),
    deliveryDate: str('deliveryDate'),
    systemRequired: str('systemRequired') as RfqFormData['systemRequired'],
    notes: str('notes'),
    website: str('website'),
  }
}
