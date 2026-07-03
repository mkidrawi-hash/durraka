// English copy for the Engineer Guidance request flow (dictionary-ready so a
// content/ar mirror can be added later without touching components).

export const engineerGuidanceContent = {
  breadcrumbLast: 'Engineer Guidance',
  eyebrow: 'Project-Based Review',
  title: 'Request Engineer Guidance',
  intro:
    'Engineer guidance for the GFRC / GRC façade cladding system is issued through project-based engineering review. Our team verifies each request before responding.',
  consentLine:
    'Engineer guidance is issued through project-based engineering review. Our team will verify your request before sending.',
  submitLabel: 'Submit Request',
  // {ref} is replaced with the returned reference number.
  confirmationTitle: 'Request Received',
  confirmationBody:
    'Our engineering team will review and contact you. Guidance documents are issued after project-based verification.',
  confirmationReferenceLabel: 'Your reference number',
  errorFallback: 'Submission failed. Please try again or contact info@durraka.com.',

  roles: ['Consultant', 'Contractor', 'Developer', 'Government', 'Other'],
  projectTypes: ['Commercial', 'Hospitality', 'Residential', 'Heritage', 'Institutional', 'Mixed Use'],
  timelines: ['Immediate', '1–3 months', '3–6 months', '6+ months', 'Not sure yet'],
} as const
