import type { Metadata } from 'next'
import { SystemBoardLayout } from '@/components/systems/SystemBoardLayout'
import type { SystemBoardData } from '@/components/systems/SystemBoardLayout'

export const metadata: Metadata = {
  title: 'Mashrabiya Systems — Durraka',
  description:
    'Custom GFRC / GRC mashrabiya screen systems — geometric and bespoke patterns for privacy, shading, and architectural identity on façades across Saudi Arabia.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified mashrabiya screen system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="40" y1="278" x2="360" y2="278" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="70" y="22" width="260" height="256" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.6" />
      <rect x="70" y="22" width="22" height="256" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      <rect x="308" y="22" width="22" height="256" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      <rect x="70" y="22" width="260" height="22" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      <rect x="70" y="256" width="260" height="22" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      {[80, 133, 186, 239].map((cy: number) =>
        [130, 200, 270].map((cx: number) => (
          <polygon
            key={`${cx}-${cy}`}
            points={`${cx},${cy - 26} ${cx + 26},${cy} ${cx},${cy + 26} ${cx - 26},${cy}`}
            stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.04"
          />
        ))
      )}
      <line x1="70" y1="150" x2="30" y2="150" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="150" r="9" fill="#D71920" />
      <text x="21" y="154" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">1</text>
      <line x1="200" y1="54" x2="200" y2="11" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="200" cy="8" r="9" fill="#D71920" />
      <text x="200" y="12" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">2</text>
      <line x1="226" y1="133" x2="370" y2="133" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="379" cy="133" r="9" fill="#D71920" />
      <text x="379" y="137" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">3</text>
      <line x1="226" y1="186" x2="370" y2="186" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="379" cy="186" r="9" fill="#D71920" />
      <text x="379" y="190" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">4</text>
      <line x1="130" y1="239" x2="30" y2="270" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="278" r="9" fill="#D71920" />
      <text x="21" y="282" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">5</text>
      <line x1="200" y1="22" x2="370" y2="11" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="379" cy="11" r="9" fill="#D71920" />
      <text x="379" y="15" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">6</text>
    </svg>
  )
}

function ScreenPatternDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="10" width="100" height="80" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.6" />
      {[30, 55, 80].map((cy: number) =>
        [35, 60, 85].map((cx: number) => (
          <polygon
            key={`${cx}-${cy}`}
            points={`${cx},${cy - 10} ${cx + 10},${cy} ${cx},${cy + 10} ${cx - 10},${cy}`}
            stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.04"
          />
        ))
      )}
    </svg>
  )
}

function PanelSectionDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="20" y="10" width="80" height="80" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <line x1="30" y1="10" x2="30" y2="90" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="90" y1="10" x2="90" y2="90" stroke="#071B3B" strokeWidth="0.7" />
      <rect x="30" y="10" width="60" height="80" fill="#071B3B" fillOpacity="0.04" />
    </svg>
  )
}

function FrameProfileDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <polygon points="20,80 20,20 35,20 35,35 80,35 80,80" fill="white" fillOpacity="0.8" stroke="#071B3B" strokeWidth="0.9" />
    </svg>
  )
}

function ModuleLayoutDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="10" width="48" height="38" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="62" y="10" width="48" height="38" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="10" y="52" width="48" height="38" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="62" y="52" width="48" height="38" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
    </svg>
  )
}

const boardData: SystemBoardData = {
  title: 'Mashrabiya Systems',
  boardTitle: 'Mashrabiya & Screen',
  boardTagline: 'Geometric precision meets architectural identity',
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
  boardComponents: ['Screen panels', 'Geometric lattice patterns', 'Frame & border elements', 'Opening configurations', 'Panel module system', 'Custom pattern design'],
  detailCards: [
    { title: 'SCREEN PATTERN', Drawing: ScreenPatternDrawing, callouts: ['Lattice Pattern', 'Frame Border', 'Opening Cell'] },
    { title: 'PANEL SECTION', Drawing: PanelSectionDrawing, callouts: ['Screen Depth', 'Pattern Zone', 'Frame Section'] },
    { title: 'FRAME PROFILE', Drawing: FrameProfileDrawing, callouts: ['Frame Width', 'Profile Section', 'Return Depth'] },
    { title: 'MODULE LAYOUT', Drawing: ModuleLayoutDrawing, callouts: ['Screen Module', 'Panel Joint', 'Field Area'] },
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
}

export default function MashrabiyaPage() {
  return <SystemBoardLayout data={boardData} />
}
