// ── Public package-page copy (English; dictionary-ready for later Arabic) ─────
// Shared wording used across all 6 package pages by PremiumPackageLayout.
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
} as const

export type PackagesContent = typeof packagesContent
