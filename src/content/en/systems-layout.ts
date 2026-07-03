// Shared chrome strings for SystemEnhancedLayout (used by the façade page + the
// 5 system pages). Page-specific content lives in each SystemEnhancedData object;
// these are the section labels, buttons, notes, and CTA copy.

export const systemLayoutContent = {
  systemEyebrow: 'GFRC / GRC System',
  hero: {
    requestEngineerGuidance: 'Request Engineer Guidance',
    viewSystemDetails: 'View System Details',
    imageAria: 'View system details — opens full image with information tags',
  },
  requestMoreInfo: {
    title: 'Request More Information',
    body: 'Tell us about your project and our team will assist you with design coordination and a project-based scope.',
  },
  guidance: {
    eyebrow: 'System Guidance',
    title: 'System Guidance Overview',
    systemIntent: 'System Intent',
    commonApplications: 'Common Applications',
    keyDesign: 'Key Design Considerations',
    finishDirections: 'Finish Directions',
    finishDirectionsBlurb: 'Custom colour and finish developed to project requirements.',
    infoRequired: 'Information Required for Review',
    moreItemsSuffix: 'more items',
    importantNote: 'Important Note',
  },
  finishesSection: {
    eyebrow: 'Material Finishes',
    title: 'Finish Options & Directions',
    blurb: 'All finish directions are reviewed on a project basis. Custom colour matching, special surface textures, and heritage-inspired finishes are available subject to project specification.',
  },
  sampleDrawing: {
    eyebrow: 'Sample Drawing Preview',
    title: 'Public-Safe Drawing Reference',
    body: 'A simplified drawing reference showing the general architectural concept for this system. All drawings are public-safe concept references only — project-specific shop drawings, engineering details, and fixing systems are developed through the approved design coordination process.',
    note: 'This sample drawing is for design coordination guidance only. No installation, fixing, anchoring, or structural details are shown.',
    caption: 'Sample Drawing — Concept Reference Only',
  },
  systemContext: {
    caption: 'System Context — Architectural Location',
    eyebrow: 'System Context Preview',
    title: 'Architectural Coordination Zone',
    body: 'A high-level conceptual illustration showing where this system is typically located in an architectural composition. This is provided for design coordination awareness only.',
    bullets: [
      'Shown as a schematic architectural location only — no fixing, structural, or installation detail is implied.',
      'Final coordination, engineering zones, and system placement are confirmed through project-specific approved drawings.',
      'Contact the Durraka team to discuss system coordination, design intent, and project-specific applications.',
    ],
  },
  designGuidanceSection: {
    eyebrow: 'Design Considerations',
    title: 'Design Guidance',
  },
  infoReviewSection: {
    eyebrow: 'Getting Started',
    title: 'Information Required for Review',
    body: 'To prepare a tailored quotation or project review, the following information is typically required.',
  },
  technicalNote: {
    label: 'Technical Note:',
    body: 'This page is provided for material understanding, design guidance, and early project coordination only. Project-specific engineering details, shop drawings, fixing systems, and structural calculations are issued through approved project submissions where required. All images, drawings, and illustrations shown are concept references — they do not represent actual project deliverables or imply specific installation methodologies.',
  },
  specialist: {
    eyebrow: 'Project Support',
    title: 'Talk to a Specialist',
    body: 'Our technical team is available to discuss system options, design coordination, and project-specific requirements.',
    sendBriefTitle: 'Send a Design Brief',
    sendBriefBody: 'Share your drawings or intent for a system review.',
    whatsappTitle: 'WhatsApp Consultation',
    whatsappBody: 'Quick consultation with our sales engineering team.',
  },
  finalCta: {
    eyebrow: 'Start Your Project',
    bodyFallback: "Share your drawings, design intent, or project requirements and Durraka's team will help define the right GFRC / GRC scope for your project.",
    speakToEngineer: 'Speak to a Sales Engineer',
  },
} as const

export type SystemLayoutContent = typeof systemLayoutContent
