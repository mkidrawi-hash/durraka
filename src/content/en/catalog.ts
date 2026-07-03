// English copy for the Product Catalog page (public overview + gated detailed
// catalog request form). Single source of truth for catalog strings and the
// source of the option VALUES stored to Sheets — the Arabic mirror supplies
// display labels only (same index order → same stored English value). See
// DetailedCatalogRequestForm.tsx and CatalogView.tsx.
//
// File paths, PDF url, and analytics identifiers are intentionally NOT part of
// the translatable copy — they live in CatalogView.tsx.

export const catalogContent = {
  metaTitle: 'Product Catalog',
  metaDescription:
    'Download the Durraka Factory overview catalog for GFRC/GRC architectural systems — façade cladding, mashrabiya screens, domes, cornices, columns, and bespoke decorative elements.',

  // ── Page header ─────────────────────────────────────────────────────────────
  header: {
    eyebrow: 'Technical Resources',
    title: 'Product Catalog',
    intro:
      'Download the public overview catalog free of charge. The detailed technical catalog is available upon request to qualified contractors, consultants, and developers.',
  },

  // ── Section 1: Public overview catalog ──────────────────────────────────────
  publicSection: {
    eyebrow: 'Free Download',
    name: 'Durraka Overview Catalog',
    // Stored/tracked catalog identifiers — kept English on every locale so the
    // analytics + download-log columns stay consistent (see PublicCatalogDownload).
    trackingType: 'Public',
    intro:
      'A general introduction to Durraka Factory’s GFRC/GRC architectural systems — suitable for architects, project managers, developers, and procurement teams exploring our capabilities for upcoming projects.',
    bridgeQuestion: 'Need technical specifications, system data, and QA/QC details?',
    bridgeCta: 'Request the Detailed Technical Catalog',
    coversHeading: 'What this catalog covers',
    covers: [
      'GFRC/GRC system categories — what we manufacture',
      'Application sectors: hospitality, commercial, government, residential, religious',
      'Façade cladding, mashrabiya screens, domes, cornices, columns, and decorative elements',
      'General material properties and available surface finishes',
      'AI concept references illustrating design possibilities',
      'How to submit an RFQ and what to expect from the process',
    ],
    notCoveredHeading: 'Not included in public edition',
    notCovered: [
      'Technical mix designs or material formulations',
      'Structural engineering or fixing details',
      'Production capacity figures',
      'Project-specific pricing',
    ],
  },

  // ── Public download button ──────────────────────────────────────────────────
  download: {
    fileSizeLabel: 'PDF · 13 Pages · 2026 Edition',
    freeNoReg: 'Free · No registration required',
    button: {
      idle: 'Download Overview Catalog',
      preparing: 'Preparing…',
      started: 'Download Started',
      unavailable: 'Catalog Being Prepared',
    },
    unavailablePre: 'The catalog file is not yet uploaded. ',
    unavailableLink: 'Contact us',
    unavailablePost: ' for a copy.',
  },

  // ── Section 2: Detailed technical catalog ───────────────────────────────────
  detailedSection: {
    eyebrow: 'Gated Access',
    title: 'Detailed Technical Catalog',
    intro:
      'The B2B Detailed Catalog contains system-specific technical references, QA/QC documentation standards, and project workflow detail — available to contractors, consultants, developers, and design teams.',
    includedHeading: 'What’s Included',
    includes: [
      'System-specific technical references for all 6 GFRC categories',
      'Dimensional guidance, profile types, and standard span ranges',
      'QA/QC process overview and factory documentation standards',
      'RFQ requirements and shop drawing submission guide',
      'Surface finish specifications and available colour options',
      'Project workflow from brief to site delivery',
    ],
    slaNote: 'Access is reviewed and fulfilled within 1–2 business days.',
    requestAccessHeading: 'Request Access',
    requestAccessIntroPre: 'Complete the form below. Fields marked ',
    requestAccessIntroPost: ' are required.',
  },

  // ── Detailed catalog request form ───────────────────────────────────────────
  form: {
    ariaLabel: 'Detailed catalog request form',
    systemsGroupAria: 'Select systems of interest',
    labels: {
      fullName: 'Full Name',
      company: 'Company Name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      clientType: 'Client Type',
      projectType: 'Project Type',
      cityCountry: 'City / Country',
      timeline: 'Estimated Project Timeline',
      interestedSystems: 'Interested Systems',
      notes: 'Message / Project Notes',
      notesOptional: '(Optional)',
    },
    placeholders: {
      fullName: 'Ahmed Al-Rashidi',
      company: 'Al-Rashidi Engineering Co.',
      email: 'ahmed@company.com',
      phone: '+966 5X XXX XXXX',
      cityCountry: 'Jeddah, Saudi Arabia',
      notes: 'Briefly describe your project or any specific requirements…',
    },
    selectPlaceholder: 'Select…',
    // Option VALUES stored to Sheets. The Arabic mirror keeps the SAME order so
    // each localized label maps back to the correct English stored value.
    clientTypeOptions: [
      'Contractor',
      'Consultant',
      'Developer',
      'Government / Semi-Government',
      'Private Client',
      'Designer / Architect',
      'Other',
    ],
    projectTypeOptions: [
      'Villa',
      'Commercial',
      'Hospitality',
      'Mosque',
      'Government / Civic',
      'Residential Compound',
      'Mixed-use',
      'Other',
    ],
    systemOptions: [
      'GFRC/GRC Façade Cladding',
      'Cornices & Profiles',
      'Domes & Vaults',
      'Columns & Capitals',
      'Mashrabiya Screens',
      'Custom Decorative Elements',
    ],
    timelineOptions: ['Immediate', '1–3 months', '3–6 months', '6+ months', 'Not sure yet'],
    privacyNote: 'Your information is used only to process catalog access and project inquiries.',
    submit: 'Request Detailed Catalog',
    submitting: 'Submitting…',
    validation: {
      fullName: 'Full name is required.',
      company: 'Company name is required.',
      email: 'Email address is required.',
      emailInvalid: 'Please enter a valid email address.',
      phone: 'Phone / WhatsApp is required.',
      clientType: 'Please select your client type.',
      projectType: 'Please select your project type.',
      interestedSystems: 'Please select at least one system.',
      cityCountry: 'City / Country is required.',
      timeline: 'Please select your project timeline.',
      submitFailed: 'Submission failed. Please try again or contact info@durraka.com.',
    },
    success: {
      title: 'Request Received',
      body: 'Access request submitted. Our team will review and respond shortly.',
      referenceLabel: 'Reference:',
      submitAnother: 'Submit another request',
    },
  },

  // ── Footer note ─────────────────────────────────────────────────────────────
  footer: {
    note: 'All catalog content — including AI concept visuals — is provided for reference purposes only. Technical specifications are confirmed during the engineering review process. Catalog availability is subject to change without notice.',
    requestQuotationCta: 'Request a Quotation',
  },
} as const
