// English content for the GFRC/GRC Domes & Vaults system detail page.
//
// Phase 1 alignment: user-facing copy is being moved out of page components into
// content/<locale>/... so a future content/ar/... can mirror this structure for
// Arabic (RTL) without refactoring components. Only this page's copy has been
// migrated so far — other systems still hold copy inline and can follow the same
// pattern incrementally.

import type { SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const domesContent: SystemEnhancedData = {
  title: 'Domes & Vaults System',
  breadcrumb: 'Domes & Vaults',
  heroDescription:
    'GFRC/GRC dome and vault elements for heritage-inspired, institutional, hospitality, and landmark architectural projects — custom geometry and curvature with controlled surface finish.',
  heroImage: '/images/projects/dome-vault-gfrc.png',
  heroImageAlt: 'GFRC/GRC dome and vault architectural elements — heritage project dome expression',
  heroObjectPosition: 'center',

  photoTags: [
    { n: 1, label: 'Dome Geometry', xPct: 50, yPct: 18 },
    { n: 2, label: 'Base Transition Zone', xPct: 50, yPct: 62 },
    { n: 3, label: 'Curved GFRC/GRC Surface', xPct: 28, yPct: 38 },
    { n: 4, label: 'Decorative Band / Profile', xPct: 72, yPct: 48 },
    { n: 5, label: 'Finish Direction', xPct: 35, yPct: 25 },
    { n: 6, label: 'Project Coordination Review', xPct: 65, yPct: 75 },
  ],

  quickRead: [
    { text: 'Lightweight architectural dome expression' },
    { text: 'Custom geometry and curvature' },
    { text: 'Suitable for landmark and heritage projects' },
    { text: 'Project-specific geometry coordination' },
  ],

  systemIntent:
    'Designed to create curved architectural expressions with controlled geometry, surface finish, decorative bands, and project-specific proportions — from small decorative domes to large-scale architectural crowns.',

  commonApplications:
    'Mosques, villas, hospitality projects, cultural buildings, government buildings, and heritage developments.',

  keyDesignConsiderations: [
    'Dome diameter and proportion',
    'Base transition and surrounding profile',
    'Curved surface finish direction',
    'Decorative band coordination',
    'Visual alignment with the building mass',
    'Project-specific geometry review',
  ],

  importantNote:
    'This page provides concept and coordination guidance only. Final dome segmentation, support coordination, and engineering details are developed through approved project submissions.',

  infoRequiredCustom: [
    'Dome diameter or approximate size',
    'Architectural drawings and elevations',
    'Reference style or design intent',
    'Preferred finish and colour direction',
    'Project location',
    'Access and logistics considerations',
    'Consultant / client requirements',
    'Project timeline',
  ],

  designGuidance: [
    { label: 'Dome Diameter & Proportion', desc: 'Overall size, height-to-diameter ratio, and visual mass.' },
    { label: 'Base Transition Profile', desc: 'Transition detail between dome and drum or building body.' },
    { label: 'Rib & Band Expression', desc: 'Decorative rib lines and horizontal band coordination.' },
    { label: 'Curved Surface Finish', desc: 'Finish direction on curved surfaces for uniformity.' },
    { label: 'Lantern Coordination', desc: 'Lantern element relationship to dome crown.' },
    { label: 'Visual Alignment', desc: 'Alignment with minarets, towers, or architectural composition.' },
  ],

  ctaTitle: 'Ready to Discuss Your Dome or Vault Project?',
}
