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

  // Form UI strings. Option VALUES stored to Sheets stay English (the arrays
  // above); these are display labels/placeholders/validation only.
  form: {
    ariaLabel: 'Engineer guidance request form',
    selectPlaceholder: 'Select…',
    optional: '(Optional)',
    labels: {
      fullName: 'Full Name',
      company: 'Company',
      role: 'Role',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      projectLocation: 'Project Location (City)',
      projectType: 'Project Type',
      timeline: 'Timeline',
      approxScope: 'Approximate Scope / Areas',
      notes: 'Notes',
    },
    placeholders: {
      phone: '+966 5X XXX XXXX',
      approxScope: 'e.g. approximate façade areas or quantities',
      notes: 'Briefly describe your project or design intent…',
    },
    submitting: 'Submitting…',
    submitAnother: 'Submit another request',
    backToSystem: 'Back to System',
    validation: {
      fullName: 'Full name is required.',
      company: 'Company is required.',
      role: 'Please select your role.',
      email: 'Email address is required.',
      emailInvalid: 'Please enter a valid email address.',
      phone: 'Phone / WhatsApp is required.',
      projectLocation: 'Project location is required.',
      projectType: 'Please select a project type.',
      timeline: 'Please select a timeline.',
    },
  },

  page: {
    metaTitle: 'Request Engineer Guidance — GFRC / GRC Façade Cladding',
    metaDescription:
      'Request engineer guidance for the GFRC/GRC façade cladding system. Guidance is issued through project-based engineering review after our team verifies your request. No document is auto-downloaded.',
    requestDetails: 'Request Details',
    requiredNotePre: 'Fields marked',
    requiredNotePost: 'are required. No document is downloaded here — our team reviews your request and responds.',
  },
} as const
