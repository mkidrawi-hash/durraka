// English content for the custom decorative elements system detail page.
//
// Phase 1 alignment: user-facing copy is being moved out of page components into
// content/<locale>/... so a future content/ar/... can mirror this structure for
// Arabic (RTL) without refactoring components.

import type { SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const customContent: SystemEnhancedData = {
  title: 'Custom Decorative Elements System',
  breadcrumb: 'Custom Decorative Elements',
  heroDescription:
    'Project-specific GFRC/GRC decorative elements for entrances, façades, frames, arches, panels, and architectural features — translating design intent into custom manufactured architectural identity.',
  heroImage: '/images/projects/ornamental-facade-gfrc.png',
  heroImageAlt: 'GFRC/GRC custom decorative elements — ornamental façade and entrance expression',
  heroObjectPosition: 'center',

  photoTags: [
    { n: 1, label: 'Custom Decorative Panel', xPct: 30, yPct: 42 },
    { n: 2, label: 'Entrance Frame Element', xPct: 55, yPct: 25 },
    { n: 3, label: 'Arch / Opening Ornament', xPct: 50, yPct: 50 },
    { n: 4, label: 'Repeated Motif Zone', xPct: 72, yPct: 38 },
    { n: 5, label: 'Surface Finish Direction', xPct: 25, yPct: 68 },
    { n: 6, label: 'Project-Specific Design Review', xPct: 68, yPct: 70 },
  ],

  quickRead: [
    { text: 'Custom architectural expression and identity' },
    { text: 'Heritage and modern design capability' },
    { text: 'Suitable for landmark and identity-driven projects' },
    { text: 'Project-specific design coordination' },
  ],

  systemIntent:
    'Designed to translate architectural concepts into custom GFRC/GRC decorative components with controlled geometry, finish, and visual identity — from entrance frames to ornamental panels and feature walls.',

  commonApplications:
    'Grand entrances, feature walls, façade ornaments, arches and frames, cultural projects, hospitality projects, and luxury villas.',

  keyDesignConsiderations: [
    'Decorative motif direction',
    'Repetition and alignment',
    'Relationship with openings and façade frames',
    'Surface relief depth at a visual level',
    'Finish and colour direction',
    'Project-specific design review',
  ],

  importantNote:
    'This guide is for early design understanding and coordination. Final component geometry, panelisation, and engineering details are completed through approved project submissions.',

  infoRequiredCustom: [
    'Reference images or design intent',
    'Architectural drawings and elevations',
    'Approximate size and quantity',
    'Preferred motif or style direction',
    'Finish and colour direction',
    'Project location',
    'Project timeline',
    'Consultant / client requirements',
  ],

  designGuidance: [
    { label: 'Decorative Motif Direction', desc: 'Style, scale, and visual character of the ornamental element.' },
    { label: 'Repetition & Alignment', desc: 'Module repetition strategy across façade or entrance zone.' },
    { label: 'Relationship with Openings', desc: 'Frame and ornament coordination with door and window openings.' },
    { label: 'Relief Depth', desc: 'Visual depth direction for surface relief elements.' },
    { label: 'Finish & Colour', desc: 'Surface finish direction for all decorative components.' },
    { label: 'Project-Specific Review', desc: 'Design intent and scope confirmed through approved drawings.' },
  ],

  ctaTitle: 'Ready to Develop Your Custom Decorative Elements?',
}
