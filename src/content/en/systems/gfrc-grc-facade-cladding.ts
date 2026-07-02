// English content for the GFRC/GRC Façade Cladding system detail page.
//
// Phase 1 alignment: user-facing copy is being moved out of page components into
// content/<locale>/... so a future content/ar/... can mirror this structure for
// Arabic (RTL) without refactoring components. Only this page's copy has been
// migrated so far — other systems still hold copy inline and can follow the same
// pattern incrementally.

import type { SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const facadeCladdingContent: SystemEnhancedData = {
  title: 'GFRC / GRC Façade Cladding System',
  breadcrumb: 'GFRC / GRC Façade Cladding',
  heroDescription:
    'High-performance architectural cladding system designed for durable, design-flexible, and timeless façades across modern, heritage, and contemporary projects.',
  heroImage: '/images/projects/architectural-cladding-gfrc.png',
  heroImageAlt:
    'GFRC/GRC architectural façade cladding system showing panel rhythm, opening surrounds, and surface expression',
  heroObjectPosition: 'center',

  // Distinct feature badges row (rendered below the hero, before deeper content).
  featureBadges: ['Architectural Freedom', 'Durable', 'Lightweight', 'Weather Resistant'],

  photoTags: [
    { n: 1, label: 'Architectural Cladding Zone', xPct: 25, yPct: 45 },
    { n: 2, label: 'Panel Rhythm & Alignment', xPct: 58, yPct: 30 },
    { n: 3, label: 'Opening Surround Expression', xPct: 42, yPct: 62 },
    { n: 4, label: 'Edge & Corner Treatment', xPct: 82, yPct: 38 },
    { n: 5, label: 'Surface Texture & Finish', xPct: 30, yPct: 72 },
    { n: 6, label: 'Project Coordination Area', xPct: 65, yPct: 78 },
  ],

  quickRead: [
    { text: 'Custom architectural façade expression' },
    { text: 'Precision-engineered GFRC/GRC components' },
    { text: 'Suitable for modern and heritage projects' },
    { text: 'Project-specific design coordination' },
  ],

  systemIntent:
    'Designed to create architectural exterior surfaces with custom forms, profiles, textures, and façade treatments — from panel rhythm and cornice lines to opening surrounds and edge expression.',

  commonApplications:
    'Commercial buildings, hospitality projects, residential developments, heritage-inspired façades, institutional buildings, and mixed-use projects.',

  keyDesignConsiderations: [
    'Panel rhythm and façade alignment',
    'Opening surrounds and frame expression',
    'Edge and corner treatment',
    'Texture and finish direction',
    'Coordination with approved architectural drawings',
    'Weathering and joint sizing',
  ],

  importantNote:
    'This guidance is intended for early understanding, quotation preparation, and design coordination. Final dimensions, engineering details, shop drawings, and project-specific submissions are developed after reviewing the approved project information.',

  infoRequiredCustom: [
    'Architectural drawings and elevations',
    'Approximate areas and quantities',
    'Design intent images or references',
    'Preferred finish direction',
    'Project location',
    'Project timeline',
    'Consultant / client requirements',
    'Special design considerations',
  ],

  designGuidance: [
    { label: 'Panel Layout Rhythm', desc: 'Module sizing, joint spacing, and horizontal banding.' },
    { label: 'Cornice Profile Direction', desc: 'Profile selection, depth, and positioning.' },
    { label: 'Window Surround Depth', desc: 'Reveal depth, surround width, and shadow line.' },
    { label: 'Corner & Edge Treatment', desc: 'Quoin details, return panels, and corner expressions.' },
    { label: 'Surface Finish Selection', desc: 'Guidance on finish options for context and conditions.' },
    { label: 'Coordination Requirements', desc: 'Panel joint sizing and weathering considerations.' },
  ],

  ctaTitle: 'Ready to Discuss Your Façade Cladding Package?',
}
