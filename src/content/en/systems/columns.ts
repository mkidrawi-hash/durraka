// English content for the GFRC/GRC Columns & Capitals system detail page.
//
// Phase 1 alignment: user-facing copy is being moved out of page components into
// content/<locale>/... so a future content/ar/... can mirror this structure for
// Arabic (RTL) without refactoring components.

import type { SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const columnsContent: SystemEnhancedData = {
  title: 'Columns & Capitals System',
  breadcrumb: 'Columns & Capitals',
  heroDescription:
    'Architectural GFRC/GRC columns, capitals, shafts, and bases for refined façade and entrance compositions — precision-manufactured for entrances, arcades, colonnades, and heritage-inspired architecture.',
  heroImage: '/images/projects/column-portico-gfrc.png',
  heroImageAlt: 'GFRC/GRC architectural columns and capitals — classical column portico expression',
  heroObjectPosition: 'center',

  photoTags: [
    { n: 1, label: 'Column Shaft', xPct: 25, yPct: 50 },
    { n: 2, label: 'Capital Expression', xPct: 45, yPct: 20 },
    { n: 3, label: 'Base Detail Zone', xPct: 30, yPct: 78 },
    { n: 4, label: 'Vertical Alignment', xPct: 65, yPct: 40 },
    { n: 5, label: 'Decorative Profile', xPct: 75, yPct: 55 },
    { n: 6, label: 'Finish & Texture Surface', xPct: 55, yPct: 70 },
  ],

  quickRead: [
    { text: 'Custom column profiles and proportions' },
    { text: 'Capital and base coordination' },
    { text: 'Suitable for entrances, arcades, and façades' },
    { text: 'Precision GFRC/GRC manufacturing' },
  ],

  systemIntent:
    'Designed to create vertical architectural expressions through column shafts, capitals, bases, and decorative profile elements — from classical heritage compositions to contemporary refined entrances.',

  commonApplications:
    'Grand entrances, villas, hotels, government buildings, commercial projects, and heritage-inspired architecture.',

  keyDesignConsiderations: [
    'Column height and proportion',
    'Capital and base relationship',
    'Vertical alignment with façade levels',
    'Decorative profile direction',
    'Surface texture and finish',
    'Coordination with openings, arcades, or entrance composition',
  ],

  importantNote:
    'This guide supports early design coordination. Final dimensions, segmentation, and engineering coordination are completed through approved drawings and project-specific review.',

  infoRequiredCustom: [
    'Column height and approximate diameter',
    'Architectural elevations and plans',
    'Capital and base reference style',
    'Quantity of columns',
    'Preferred finish direction',
    'Project location',
    'Project timeline',
    'Consultant / client requirements',
  ],

  designGuidance: [
    { label: 'Column Height & Proportion', desc: 'Overall height, diameter, and slenderness ratio.' },
    { label: 'Capital Style & Depth', desc: 'Capital type, projection, and decorative detail level.' },
    { label: 'Base & Plinth Coordination', desc: 'Base height, plinth relationship, and floor alignment.' },
    { label: 'Vertical Spacing', desc: 'Intercolumniation and visual rhythm across colonnade.' },
    { label: 'Surface Finish', desc: 'Finish direction for realistic or contemporary expression.' },
    { label: 'Entablature Relationship', desc: 'Beam, frieze, and cornice above the column line.' },
  ],

  ctaTitle: 'Ready to Design Your Column & Capital Composition?',
}
