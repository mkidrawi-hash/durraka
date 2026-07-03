// English content for the GFRC/GRC Cornices & Profiles system detail page.
//
// Phase 1 alignment: user-facing copy is being moved out of page components into
// content/<locale>/... so a future content/ar/... can mirror this structure for
// Arabic (RTL) without refactoring components.

import type { SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const cornicesContent: SystemEnhancedData = {
  title: 'Cornices & Profiles System',
  breadcrumb: 'Cornices & Profiles',
  heroDescription:
    'GFRC/GRC cornices, bands, sill profiles, parapets, and façade lines for refined architectural definition — heritage and contemporary profile manufacturing with controlled shadow-line expression.',
  heroImage: '/images/projects/grand-entrance-gfrc.png',
  heroImageAlt: 'GFRC/GRC cornice and profile system — architectural façade profile expression',
  heroObjectPosition: 'center top',

  photoTags: [
    { n: 1, label: 'Main Cornice Line', xPct: 50, yPct: 22 },
    { n: 2, label: 'Parapet Profile', xPct: 75, yPct: 15 },
    { n: 3, label: 'Sill / Band Profile', xPct: 30, yPct: 55 },
    { n: 4, label: 'Corner Return', xPct: 82, yPct: 42 },
    { n: 5, label: 'Shadow Line Expression', xPct: 45, yPct: 35 },
    { n: 6, label: 'Finish & Texture Surface', xPct: 25, yPct: 70 },
  ],

  quickRead: [
    { text: 'Clean architectural profile definition' },
    { text: 'Strong shadow-line expression' },
    { text: 'Suitable for modern and heritage façades' },
    { text: 'Custom profile manufacturing' },
  ],

  systemIntent:
    'Designed to define façade edges, transitions, parapets, sills, bands, and decorative horizontal or vertical lines with precision-manufactured GFRC/GRC profiles.',

  commonApplications:
    'Villas, commercial buildings, hospitality projects, government projects, heritage façades, and institutional buildings.',

  keyDesignConsiderations: [
    'Main cornice proportion and projection',
    'Horizontal profile alignment',
    'Corner and return coordination',
    'Shadow-line direction',
    'Finish and colour consistency',
    'Coordination with façade openings and levels',
  ],

  importantNote:
    'This page provides early design guidance. Final profiles, dimensions, returns, and engineering coordination are confirmed through approved shop drawings and project submissions.',

  infoRequiredCustom: [
    'Architectural elevations',
    'Profile reference or design intent',
    'Approximate linear meters',
    'Corner and return locations',
    'Preferred finish direction',
    'Project location',
    'Project timeline',
    'Consultant / client requirements',
  ],

  designGuidance: [
    { label: 'Main Cornice Proportion', desc: 'Projection depth, height, and visual mass at roofline.' },
    { label: 'Horizontal Profile Alignment', desc: 'Ensuring string courses and bands align across the façade.' },
    { label: 'Corner & Return Coordination', desc: 'Return dimensions and miter/corner detail.' },
    { label: 'Shadow-Line Direction', desc: 'Profile depth for shadow expression in specific lighting contexts.' },
    { label: 'Finish Consistency', desc: 'Finish direction maintained across all profile elements.' },
    { label: 'Coordination with Openings', desc: 'Sill and surround relationship to window and door openings.' },
  ],

  ctaTitle: 'Ready to Define Your Façade Profiles?',
}
