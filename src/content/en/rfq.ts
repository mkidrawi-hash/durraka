// English copy for Phase 3 RFQ additions (dictionary-ready for a future ar mirror).
// Only the NEW Phase 3 copy lives here; the existing RFQ form copy remains inline.

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
} as const
