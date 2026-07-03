// ── Public package-page copy (English; mirrored by src/content/ar/packages.ts) ──
// Shared wording used across all 6 package pages by PremiumPackageLayout, the
// component modal, the sticky mobile CTA, the design-intent diagram, and the
// /packages index. Page-specific package data lives in each package's client.tsx
// (moved to content/<locale>/packages/<slug> where localized).
// CONFIDENTIALITY: nothing here contains quantities, areas, prices, or fixing/
// structural detail. The estimated BOQ is represented by a CTA only.

export const packagesContent = {
  designIntent: {
    eyebrow: 'Design Intent',
    heading: 'How This Package Comes Together',
    intro:
      'A schematic view of where this package’s components sit and how they are arranged — design intent only.',
    // Caption shown under every 2D diagram.
    diagramCaption:
      'Schematic design-intent diagram. Indicative arrangement only — not a construction or shop drawing.',
    legendTitle: 'Components shown',
    // Suffix appended to the diagram aria-label after the package title.
    ariaSuffix: 'schematic design-intent diagram',
  },

  concept3D: {
    // Labelled placeholder shown when no real render is provided via config.
    label: '3D Concept Render',
    sublabel: 'Provided in the Engineer Guidance package on request.',
  },

  scope: {
    eyebrow: 'Package Scope',
    heading: 'Package Scope & Estimated Quantities',
    intro: 'This package typically includes the following components:',
    // Bordered BOQ callout — no numbers, CTA only.
    boqCallout:
      'An estimated bill of quantities for this package is prepared per project and shared after project verification.',
    ctaLabel: 'Request Engineer Guidance',
  },

  // PART 4 — page-end disclaimer (bordered, muted).
  disclaimer:
    'Diagrams and visuals on this page are conceptual and for design understanding only. They do not represent construction details, fixing methods, structural calculations, or final quantities. Project-specific engineering, quantities, and installation details are issued only after verification through approved shop drawings and engineering submissions. Project references shown elsewhere on this site do not disclose client names or confidential project data.',

  // ── Shared package-detail layout chrome (PremiumPackageLayout) ──────────────
  layout: {
    breadcrumb: 'Packages',
    illustrativeArea: 'Illustrative Area',
    visibleComponents: 'Visible Components',
    requestQuote: 'Request a Quote',
    whatsIncludedCta: "What's Included",
    quickRead: [
      'Custom architectural expression, matched to your design intent',
      'Precision-engineered GFRC/GRC — manufactured in Saudi Arabia',
      'Suitable for modern, heritage, and contemporary projects',
      'Project-specific scope — engineered from your drawings',
      'Technical review required before final quotation',
    ],
    overviewEyebrow: 'Package Overview',
    overviewHeading: 'What This Package Is Designed To Achieve',
    suitableFor: 'Suitable For',
    componentsEyebrow: 'Package Components',
    componentsHeading: "What's Included in This Package",
    componentsIntroPre: 'Each component is precision-manufactured to project drawings. Click',
    viewDetails: 'View Details',
    componentsIntroPost: 'to explore materials, architectural references, finishes, and scope.',
    componentsNote:
      'All component details are for sales-engineering reference only. Fixing methods, structural connections, and proprietary manufacturing details are not disclosed publicly.',
    finishSuffix: 'Finish',
    boardsEyebrow: 'Architecture Reference Boards',
    boardsHeading: 'Component Architecture Boards',
    boardsIntro: 'Detailed architecture reference boards for the GFRC/GRC components in this package.',
    boardsNote:
      'For design understanding and early scope coordination only. Detailed fixing, connection, and installation information is excluded.',
    processEyebrow: 'Our Process',
    processHeading: 'How a Project Is Reviewed',
    processIntro: 'From drawing submission to manufactured component — a clear, coordinated technical process.',
    finishesEyebrow: 'Finishes',
    finishesHeading: 'Available Finish Directions',
    finishDirections: [
      { label: 'Smooth Architectural Finish', description: 'Fine-textured, paint-ready surface for clean contemporary facades.' },
      { label: 'Sandblasted Finish', description: 'Lightly abraded surface revealing the aggregate character.' },
      { label: 'Stone-Like Texture', description: 'Aggregate and pigment combination to replicate natural stone.' },
      { label: 'Textured / Cast Finish', description: 'Ribbed, board-formed, or custom cast texture from mould.' },
      { label: 'Heritage Warm Tone', description: 'Warm-toned, hand-textured surface for classical heritage projects.' },
      { label: 'Custom Colour Match', description: 'Integral pigment matched to RAL, NCS, or project specification.' },
    ],
    infoEyebrow: 'Before We Can Quote',
    infoHeading: 'Information Required for Technical Review',
    infoIntro:
      'Submit the following for an accurate GFRC/GRC scope and pricing proposal. Our engineering team will review and follow up promptly.',
    informationRequired: [
      'Architectural elevations and drawings',
      'Sections through key elements',
      'BOQ / quantity schedule',
      'Structural drawings',
      'Finish and color references',
      'Available reference images',
      'Project location and timeline',
      'Site constraints or special requirements',
    ],
    ctaKicker: 'Have a project to review?',
    ctaHeading: 'Ready to discuss your GFRC/GRC scope?',
    ctaBody:
      'Share your drawings with our team. We will review the scope, confirm the components, and prepare a precise technical proposal.',
    requestQuotation: 'Request a Quotation',
    contactDurraka: 'Contact Durraka',
    importantNotePrefix: 'Important Note —',
  },

  // ── Component detail modal (ComponentDetailModal) ───────────────────────────
  modal: {
    kicker: 'GFRC/GRC — Component Detail',
    close: 'Close component detail',
    // Finish swatch labels (index-matched to COMPONENT_FINISHES).
    componentFinishes: ['Smooth White', 'Sand Buff', 'Stone Grey', 'Custom'],
    finishAriaSuffix: 'finish',
    tabs: {
      overview: 'Overview',
      materials: 'Materials',
      archDrawings: 'Arch. Drawings',
      shopDrawings: 'Shop Drawings',
      finishes: 'Finishes & Colors',
      inputs: 'Project Inputs',
      scope: 'Scope & Deliverables',
    },
    visualHotspots: 'Visual Hotspots',
    materialComposition: 'Material Composition',
    archDrawingsHeading: 'Architectural Drawing References',
    archDrawingsNote:
      'All dimensions are confirmed at the technical review stage against approved project drawings. Reference information only.',
    shopDrawingsHeading: 'Structural & Shop Drawing Notes',
    shopDrawingsNote:
      'Detailed fixing systems, connection details, and structural calculations are not published publicly. Shop drawings are prepared during technical review and remain project-confidential.',
    finishesHeading: 'Available Finishes & Colors',
    finishesNote:
      'A project-approved sample is required before manufacture begins. Final finish is confirmed against the approved sample and project specification.',
    inputsHeading: 'Required Project Inputs',
    inputsIntro:
      'Provide the following to enable a thorough technical review and accurate GFRC/GRC scope proposal from Durraka.',
    scopeHeading: 'Scope & Deliverables',
    footerNote: 'Reference content for scope coordination only. Installation and fixing details are excluded.',
    requestQuotation: 'Request a Quotation',
  },

  // ── Sticky mobile CTA (StickyMobileCTA) ─────────────────────────────────────
  stickyCta: {
    requestConsultation: 'Request Consultation',
    whatsappAria: 'Chat on WhatsApp',
  },

  // ── /packages index page (PackagesIndexView) ────────────────────────────────
  index: {
    metaTitle: 'GFRC/GRC Architectural Packages',
    metaDescription:
      "Explore AI concept references for Durraka Factory's GFRC/GRC architectural packages, including façade cladding, mashrabiya screens, domes, cornices, grand entrances, columns, capitals, and bespoke decorative elements.",
    eyebrow: 'GFRC/GRC Architectural Packages',
    title: 'Packages',
    intro:
      'Six scope packages representing the typical range of GFRC/GRC architectural systems Durraka manufactures. Each package includes AI concept visuals, design guidance, suitable applications, and information required for technical review.',
    aiNote: 'Visuals are AI-generated concept references — not completed project claims',
    viewPackage: 'View Package',
    footerNote:
      'All areas shown are illustrative and depend on the project scope, design intent, and submitted drawings. Final quantities, dimensions, and component counts are confirmed during the technical review process.',
    requestQuotation: 'Request a Quotation',
    // Keyed by package href (matches PACKAGES[].href in lib/constants-free page data).
    cards: {
      'commercial-facade-package': {
        title: 'Commercial Façade Package',
        shortDescription:
          'AI concept for a multi-storey commercial façade combining GFRC/GRC cladding panels, vertical rhythm, cornice lines, window surrounds, and controlled architectural expression.',
        illustrativeArea: 'Large-scale multi-storey façades',
        visibleComponents: ['Façade cladding panels', 'Cornices / profiles', 'Window surrounds', 'Edge / corner expression', 'Decorative vertical elements'],
        imageAlt: 'Modern commercial building facade featuring GFRC/GRC architectural cladding, cornice lines, and controlled facade expression.',
      },
      'mashrabiya-screen-package': {
        title: 'Mashrabiya Screen Package',
        shortDescription:
          'AI concept showing project-specific mashrabiya screens integrated with facade openings, privacy control, shading, and decorative architectural identity.',
        illustrativeArea: 'Screen & façade fields',
        visibleComponents: ['Mashrabiya screens', 'Window screens', 'Façade cladding', 'Decorative frames', 'Entrance screen panels'],
        imageAlt: 'Heritage villa facade with decorative GFRC/GRC mashrabiya screens integrated into facade openings for privacy and shading.',
      },
      'domes-cornices-package': {
        title: 'Domes & Cornices Package',
        shortDescription:
          'AI concept for architectural domes, cornices, mouldings, and ornamental profiles for religious, hospitality, and heritage-inspired projects.',
        illustrativeArea: 'Domes, cornices & rooflines',
        visibleComponents: ['Dome elements', 'Cornices', 'Mouldings', 'Arched openings', 'Decorative facade bands', 'Heritage profiles'],
        imageAlt: 'Palace and villa architecture featuring GFRC/GRC domes, ornamental cornices, heritage mouldings, and decorative arched profiles.',
      },
      'grand-entrance-package': {
        title: 'Grand Entrance Package',
        shortDescription:
          'AI concept for a large-scale entrance combining columns, capitals, arches, cornices, decorative panels, and façade cladding into one integrated architectural package.',
        illustrativeArea: 'Feature entrances & gateways',
        visibleComponents: ['Columns', 'Capitals', 'Arches', 'Cornices', 'Decorative panels', 'Entrance cladding'],
        imageAlt: 'Monumental grand arched entrance gate with GFRC/GRC columns, capitals, cornices, and integrated architectural facade cladding.',
      },
      'columns-capitals-package': {
        title: 'Columns & Capitals Package',
        shortDescription:
          'AI concept showing GFRC/GRC columns, capitals, bases, pilasters, and entrance colonnades for classical, heritage, and contemporary architectural projects.',
        illustrativeArea: 'Colonnades & porticos',
        visibleComponents: ['Column shafts', 'Capitals', 'Bases', 'Pilasters', 'Arched colonnades', 'Decorative panels'],
        imageAlt: 'Landmark government building facade with classical GFRC/GRC columns, capitals, bases, and arched colonnade architectural elements.',
      },
      'custom-decorative-elements-package': {
        title: 'Custom Decorative Elements Package',
        shortDescription:
          'AI concept for bespoke GFRC/GRC decorative elements including ornamental panels, calligraphy-inspired features, identity panels, special frames, and project-specific architectural details.',
        illustrativeArea: 'Bespoke ornament & identity',
        visibleComponents: ['Decorative panels', 'Custom ornaments', 'Identity features', 'Calligraphy-inspired panels', 'Special frames'],
        imageAlt: 'Custom GFRC/GRC decorative facade panels featuring ornamental details, identity features, and bespoke architectural components.',
      },
    },
  },
} as const

export type PackagesContent = typeof packagesContent
