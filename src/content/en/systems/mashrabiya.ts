// English content for the GFRC/GRC Mashrabiya Screens system detail page.
//
// Phase 1 alignment: user-facing copy is being moved out of page components into
// content/<locale>/... so a future content/ar/... can mirror this structure for
// Arabic (RTL) without refactoring components.

import type { SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const mashrabiyaContent: SystemEnhancedData = {
  title: 'Mashrabiya Screens System',
  breadcrumb: 'Mashrabiya Screens',
  heroDescription:
    'GFRC/GRC patterned screens designed for privacy, shading, identity, and architectural façade expression — project-specific module coordination for modern and heritage-inspired designs.',
  heroImage: '/images/projects/mashrabiya-screen-gfrc.png',
  heroImageAlt: 'GFRC/GRC mashrabiya screen system — patterned façade screen expression',
  heroObjectPosition: 'center',

  photoTags: [
    { n: 1, label: 'Pattern Module', xPct: 30, yPct: 38 },
    { n: 2, label: 'Screen Rhythm', xPct: 60, yPct: 28 },
    { n: 3, label: 'Privacy & Shading Expression', xPct: 45, yPct: 55 },
    { n: 4, label: 'Opening Relationship', xPct: 72, yPct: 50 },
    { n: 5, label: 'Façade Integration Zone', xPct: 25, yPct: 68 },
    { n: 6, label: 'Finish Direction', xPct: 65, yPct: 72 },
  ],

  quickRead: [
    { text: 'Custom pattern language and identity' },
    { text: 'Privacy and shading expression' },
    { text: 'Modern and heritage-inspired designs' },
    { text: 'Project-specific module coordination' },
  ],

  systemIntent:
    'Designed to create patterned façade screens that balance visual identity, privacy, shading, and architectural rhythm — translating design intent into precision-manufactured GFRC/GRC screen panels.',

  commonApplications:
    'Residential projects, hospitality buildings, cultural projects, commercial façades, government buildings, and heritage-inspired developments.',

  keyDesignConsiderations: [
    'Pattern module and repetition',
    'Screen openness and visual privacy',
    'Relationship with windows and openings',
    'Façade rhythm and alignment',
    'Finish and colour direction',
    'Coordination with project design intent',
  ],

  importantNote:
    'This guide is for design and coordination purposes only. Final pattern geometry, panelisation, and project-specific engineering details are developed through approved submissions.',

  infoRequiredCustom: [
    'Pattern reference or design intent',
    'Screen dimensions and approximate area',
    'Architectural elevations',
    'Opening locations',
    'Preferred privacy / openness direction',
    'Project location',
    'Finish and colour direction',
    'Consultant / client requirements',
  ],

  designGuidance: [
    { label: 'Pattern Module Design', desc: 'Module size, geometry, and repetition strategy.' },
    { label: 'Screen Openness Ratio', desc: 'Balance between privacy, light, and visual transparency.' },
    { label: 'Façade Rhythm', desc: 'Screen module alignment with building grid and openings.' },
    { label: 'Frame & Border', desc: 'Perimeter frame, border return, and edge treatment.' },
    { label: 'Finish Direction', desc: 'Surface finish for screen panels and frame elements.' },
    { label: 'Coordination with Openings', desc: 'Screen placement relative to window and door openings.' },
  ],

  ctaTitle: 'Ready to Develop Your Mashrabiya Screen Design?',
}
