import type { Metadata } from 'next'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { SystemPageLayout } from '@/components/systems/SystemPageLayout'

export const metadata: Metadata = {
  title: 'Mashrabiya Systems — Durraka',
  description:
    'Custom GFRC / GRC mashrabiya screen systems — geometric and bespoke patterns for privacy, shading, and architectural identity on façades across Saudi Arabia.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified mashrabiya screen system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      {/* Ground line */}
      <line x1="40" y1="278" x2="360" y2="278" stroke="#071B3B" strokeWidth="2.5" />
      {/* Outer frame */}
      <rect x="70" y="22" width="260" height="256" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.6" />
      {/* Left pilaster */}
      <rect x="70" y="22" width="22" height="256" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      {/* Right pilaster */}
      <rect x="308" y="22" width="22" height="256" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      {/* Top beam */}
      <rect x="70" y="22" width="260" height="22" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      {/* Bottom sill */}
      <rect x="70" y="256" width="260" height="22" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />

      {/* Diamond lattice — 3 cols × 4 rows in the open screen area (x:92–308, y:44–256) */}
      {/* Centers: x=130,200,270 / y=80,133,186,239 — diamonds ±26 */}
      {[80, 133, 186, 239].map(cy =>
        [130, 200, 270].map(cx => (
          <polygon
            key={`${cx}-${cy}`}
            points={`${cx},${cy - 26} ${cx + 26},${cy} ${cx},${cy + 26} ${cx - 26},${cy}`}
            stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.04"
          />
        ))
      )}

      {/* Callout leaders */}
      {/* 1 — Screen Frame */}
      <LeaderLine x1="70" y1="150" x2="30" y2="150" />
      <CalloutBadge n={1} cx={21} cy={150} />
      {/* 2 — Geometric Pattern */}
      <LeaderLine x1="200" y1="54" x2="200" y2="11" />
      <CalloutBadge n={2} cx={200} cy={8} />
      {/* 3 — Panel Module */}
      <LeaderLine x1="226" y1="133" x2="370" y2="133" />
      <CalloutBadge n={3} cx={379} cy={133} />
      {/* 4 — Opening Configuration */}
      <LeaderLine x1="226" y1="186" x2="370" y2="186" />
      <CalloutBadge n={4} cx={379} cy={186} />
      {/* 5 — Finish Direction */}
      <LeaderLine x1="130" y1="239" x2="30" y2="270" />
      <CalloutBadge n={5} cx={21} cy={278} />
      {/* 6 — Project Coordination Review */}
      <LeaderLine x1="200" y1="22" x2="200" y2="11" />
      <LeaderLine x1="200" y1="11" x2="370" y2="11" />
      <CalloutBadge n={6} cx={379} cy={11} />
    </svg>
  )
}

export default function MashrabiyaPage() {
  return (
    <SystemPageLayout data={{
      title: 'Mashrabiya Systems',
      breadcrumb: 'Mashrabiya',
      subtitle: 'Geometric precision. Architectural identity.',
      heroDescription: 'Custom GFRC / GRC mashrabiya screen systems — designed to project-specific geometric patterns for privacy, shading, and architectural character.',
      heroImage: '/images/projects/mashrabiya-screen-gfrc.png',
      heroImageAlt: 'Custom GFRC mashrabiya screen façade detail',
      heroObjectPosition: 'center',
      whatTitle: 'What is a Mashrabiya System?',
      whatBody: 'A mashrabiya is an architectural screen element produced in GFRC / GRC with repeating geometric or custom lattice patterns. It provides privacy, solar shading, and visual identity while allowing light and air to pass through. Durraka produces mashrabiya systems in custom patterns ranging from traditional Islamic geometry to contemporary perforated designs.',
      benefits: [
        { label: 'Geometric Pattern Variety', desc: 'Traditional lattice, modern perforated, and custom geometric configurations can all be produced from project drawings.' },
        { label: 'Privacy & Solar Shading', desc: 'Mashrabiya screens provide privacy and reduce solar gain while preserving natural light and ventilation.' },
        { label: 'Architectural Identity', desc: 'Custom screen patterns become a defining architectural element — expressing design intent at building scale.' },
        { label: 'Design Heritage', desc: 'Suitable for both heritage-inspired and contemporary architectural contexts across the Kingdom.' },
        { label: 'Durable Exterior Performance', desc: 'GFRC / GRC construction ensures long-term durability in outdoor and semi-outdoor environments.' },
        { label: 'Large Format Capability', desc: 'Modular panel system allows for large façade areas to be completed efficiently while maintaining pattern consistency.' },
      ],
      Diagram,
      callouts: [
        { n: 1, label: 'Screen Frame', desc: 'Structural border enclosing the lattice panel field.' },
        { n: 2, label: 'Geometric Pattern', desc: 'Repeating lattice or perforated pattern module across the screen area.' },
        { n: 3, label: 'Panel Module', desc: 'Individual screen panel unit, produced and installed as a modular system.' },
        { n: 4, label: 'Opening Configuration', desc: 'Size, shape, and rhythm of the openings within the lattice field.' },
        { n: 5, label: 'Finish Direction', desc: 'Surface finish applied to the screen frame and lattice elements.' },
        { n: 6, label: 'Project Coordination Review', desc: 'Pattern, module size, and installation scope confirmed through project review.' },
      ],
      applications: [
        'Hotel & Resort Façades', 'Retail & Commercial Developments', 'Residential Buildings',
        'Courtyard & Garden Screens', 'Heritage-Inspired Architecture', 'Government Buildings',
        'Cultural & Civic Projects', 'Interior Feature Screens',
      ],
      designGuidance: [
        { label: 'Pattern Design Direction', desc: 'Pattern geometry is developed from project drawings or reference images and confirmed before production.' },
        { label: 'Module & Panel Sizing', desc: 'Screen module dimensions are determined by façade area, pattern repeat, and coordination requirements.' },
        { label: 'Depth & Relief Expression', desc: 'Screen depth and opening thickness are design decisions that affect light, shadow, and visual character.' },
        { label: 'Frame & Border Expression', desc: 'Outer frame profile and border detailing are coordinated with the overall façade and architectural intent.' },
        { label: 'Finish Selection Direction', desc: 'Finish direction is selected to complement the pattern and the surrounding building materials.' },
        { label: 'Project Coordination Requirements', desc: 'Pattern confirmation, mockup review, and phasing requirements are agreed through project coordination prior to production.' },
      ],
      ctaTitle: 'Ready to Discuss Your Mashrabiya Package?',
      heroTags: ['GFRC/GRC', 'Mashrabiya Systems', 'Privacy & Shading', 'Custom Patterns'],
      gallery: [
        { src: '/images/projects/mashrabiya-screen-gfrc.png', alt: 'GFRC mashrabiya screen panels', scope: 'Mashrabiya Screens', status: 'Completed' },
        { src: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-mashrabiya-001.jpg', alt: 'GFRC mashrabiya screen on religious facility', caption: 'Mashrabiya screen panels', location: 'Makkah, Saudi Arabia', year: '2023', scope: 'Mashrabiya Screens', status: 'Completed' },
        { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-mashrabiya-001.jpg', alt: 'GFRC mashrabiya facade screens on hospitality building', caption: 'Mashrabiya facade screens', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Mashrabiya Screens', status: 'Completed' },
        { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-screens-002.jpg', alt: 'GFRC facade screen components', caption: 'Architectural facade screen components', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Mashrabiya Screens', status: 'Completed' },
        { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-mashrabiya-facade-003.jpg', alt: 'GFRC mashrabiya facade detail', caption: 'Mashrabiya facade detail view', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Mashrabiya Screens', status: 'Completed' },
      ],
    }} />
  )
}
