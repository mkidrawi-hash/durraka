// English copy for the Request-for-Quotation journey (page header + form).
// This dictionary is the single source of truth for RFQ strings and the source
// of the option VALUES stored to Sheets — the Arabic mirror supplies display
// labels only (same index order → same stored English value). See RFQForm.tsx.

export const rfqContent = {
  // Conditional qualification fields — shown once a project type is chosen.
  qualification: {
    intro: 'A few quick project details help us route your request to the right team.',
    scaleBand: { label: 'Approximate Scale', placeholder: 'Select scale', options: ['Large', 'Medium', 'Small'] },
    consultantAppointed: { label: 'Consultant Appointed?', placeholder: 'Select', options: ['Yes', 'No'] },
    targetStart: {
      label: 'Target Start',
      placeholder: 'Select timeframe',
      options: ['Immediate', '1–3 months', '3–6 months', '6+ months', 'Not sure yet'],
    },
  },

  // Static "Required Project Information" checklist (text only — no uploads).
  checklist: {
    title: 'Required Project Information',
    intro: 'To prepare an accurate scope and quotation, please have the following ready:',
    items: [
      'Architectural drawings and elevations',
      'Approximate areas and quantities',
      'Design intent images or references',
      'Preferred finish direction',
      'Project location',
      'Project timeline',
    ],
    note: 'These help our engineering team review your project. You can share what you have now and add the rest later.',
  },

  // ── Page header (request-quotation route) ──────────────────────────────────
  page: {
    metaTitle: 'Request a GFRC/GRC Quotation',
    metaDescription:
      'Submit your GFRC/GRC project requirements to Durraka Factory. Our engineering team will review the scope and contact you with the next steps.',
    eyebrow: 'Get a Quote',
    title: 'Request a GFRC/GRC Quotation',
    intro:
      'Share your project requirements and our team will review the scope and contact you with the next steps.',
    startCta: 'Start RFQ',
    whatToExpect: 'What to expect',
    benefits: [
      'GFRC/GRC façade systems',
      'Project-based manufacturing',
      'Engineering review before pricing',
      'Confidential RFQ handling',
    ],
    beforeYouStart: 'Before You Start',
  },

  // ── Form ───────────────────────────────────────────────────────────────────
  form: {
    ariaLabel: 'Request for quotation form',
    projectInfoLegend: 'Project Information',
    yourDetailsLegend: 'Your Details',
    attachmentsLegend: 'Project Attachments',
    notesLegend: 'Project Notes / Requirements',
    labels: {
      projectName: 'Project Name',
      projectLocation: 'Project Location',
      systemRequired: 'System Required',
      estimatedArea: 'Estimated Area (m²)',
      projectType: 'Project Type',
      deliveryDate: 'Target Delivery Date',
      fullName: 'Full Name',
      jobTitle: 'Job Title',
      company: 'Company',
      email: 'Email Address',
      phone: 'Mobile / WhatsApp',
      clientType: 'Client Type / Role',
      largeFileLink: 'Large File Link',
      fileLinkNotes: 'File Link Notes',
    },
    placeholders: {
      projectName: 'e.g. Al Nakheel Tower',
      projectLocation: 'City, Saudi Arabia',
      estimatedArea: 'e.g. 5000',
      jobTitle: 'e.g. Project Manager',
      phone: '+966 5X XXX XXXX',
      largeFileLink: 'Paste Google Drive, OneDrive, Dropbox, or WeTransfer link...',
      fileLinkNotes: "Describe what's in the link, folder structure, or access instructions...",
      notes: 'Describe your project, any special requirements, design references, or questions...',
    },
    selectPlaceholders: {
      system: 'Select a system',
      projectType: 'Select type',
      clientType: 'Select role',
    },
    systemOptions: [
      'GFRC/GRC Façade Cladding',
      'Mashrabiya Systems',
      'Domes & Vaults',
      'Cornices & Profiles',
      'Columns & Pillars',
      'Custom Decorative Elements',
      'Multiple Systems',
    ],
    projectTypeOptions: ['Commercial', 'Residential', 'Government', 'Hospitality', 'Religious', 'Infrastructure'],
    clientTypeOptions: [
      'Architect',
      'Main Contractor',
      'Developer / Owner',
      'Façade Consultant',
      'Subcontractor',
      'Government Entity',
    ],
    attachments: {
      intro:
        'Optional attachments. Upload only what is available. If drawings are not ready, you can still submit the request. Files are not uploaded — only file names are included in the request notification.',
      drawingsNotAvailable: 'Drawings are not available yet',
      needDrawingSupport:
        'I need Durraka to support with preliminary drawings / shop drawings for review',
      slotLabels: [
        'BOQ / Bill of Quantities',
        'Architectural Drawings',
        'Structural Drawings',
        'Reference Images / Renderings',
      ],
      boqHint: 'Upload BOQ if available. We can also review drawings to estimate quantities.',
      chooseFile: 'Choose file',
      removeFile: 'Remove file',
      acceptedLabel: 'PDF, DWG, DXF, XLS, XLSX, DOC, DOCX, JPG, PNG, ZIP · Max 25 MB per file',
      fileTooLarge: 'File exceeds 25 MB limit.',
      largeFileHint: 'Use for large files, full drawing sets, or zipped packages.',
    },
    submit: 'Submit Request for Quotation',
    submitting: 'Submitting…',
    requiredNotePre: 'Fields marked',
    requiredNotePost: 'are required. Your information is kept confidential.',
    disclaimerLabel: 'Disclaimer:',
    disclaimer:
      'Submitting an RFQ through this website does not create a binding quotation, contract, purchase order, or commitment by Durraka Factory for Industry. All requests are subject to technical review, commercial evaluation, project scope confirmation, drawing review, and written approval.',
    validation: {
      fullName: 'Full name is required.',
      company: 'Company name is required.',
      email: 'Email address is required.',
      projectName: 'Project name is required.',
      projectLocation: 'Project location is required.',
      systemRequired: 'Please select a system.',
      emailInvalid: 'Please enter a valid email address.',
      submitFailed: 'Submission failed. Please try again.',
      networkError: 'A network error occurred. Please check your connection and try again.',
    },
  },

  // ── Success view ───────────────────────────────────────────────────────────
  success: {
    title: 'Request Submitted Successfully',
    body: 'Thank you. Your request has been received for review. Our team will review the scope and requirements and contact you with the next steps. Please quote the reference number below in all correspondence.',
    referenceLabel: 'Your RFQ Reference',
    submitAnother: 'Submit Another Request',
    returnHome: 'Return to Home',
  },
} as const
