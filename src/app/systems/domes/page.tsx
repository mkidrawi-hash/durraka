import type { Metadata } from 'next'
import { SystemBoardLayout } from '@/components/systems/SystemBoardLayout'
import type { SystemBoardData } from '@/components/systems/SystemBoardLayout'

export const metadata: Metadata = {
  title: 'Domes & Vaults — Durraka',
  description:
    'Architectural GFRC / GRC dome and vault systems for building crowns, feature rooftops, and heritage-inspired structures across Saudi Arabia.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Simplified dome system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="30" y1="268" x2="370" y2="268" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="90" y="210" width="220" height="58" stroke="#071B3B" strokeWidth="1.4" fill="white" fillOpacity="0.7" />
      <line x1="90" y1="230" x2="310" y2="230" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="90" y1="248" x2="310" y2="248" stroke="#071B3B" strokeWidth="0.6" />
      <path d="M 90 212 Q 90 48 200 38 Q 310 48 310 212" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.6" />
      <path d="M 118 212 Q 118 78 200 70 Q 282 78 282 212" stroke="#071B3B" strokeWidth="0.8" fill="none" />
      {([-80, -44, 0, 44, 80] as number[]).map((dx: number, i: number) => (
        <line key={i} x1="200" y1="38" x2={200 + dx * 1.4} y2="212" stroke="#071B3B" strokeWidth="0.45" strokeDasharray="3 3" />
      ))}
      <ellipse cx="200" cy="110" rx="68" ry="10" stroke="#071B3B" strokeWidth="0.6" fill="none" />
      <ellipse cx="200" cy="160" rx="100" ry="10" stroke="#071B3B" strokeWidth="0.6" fill="none" />
      <line x1="200" y1="38" x2="200" y2="18" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="200" cy="12" r="7" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.8" />
      <line x1="200" y1="5" x2="200" y2="2" stroke="#071B3B" strokeWidth="1.2" />
      <line x1="152" y1="90" x2="32" y2="90" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="23" cy="90" r="9" fill="#D71920" />
      <text x="23" y="94" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">1</text>
      <line x1="268" y1="110" x2="368" y2="95" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="88" r="9" fill="#D71920" />
      <text x="377" y="92" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">2</text>
      <line x1="207" y1="12" x2="368" y2="12" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="12" r="9" fill="#D71920" />
      <text x="377" y="16" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">3</text>
      <line x1="310" y1="230" x2="368" y2="230" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="230" r="9" fill="#D71920" />
      <text x="377" y="234" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">4</text>
      <line x1="130" y1="170" x2="32" y2="200" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="23" cy="208" r="9" fill="#D71920" />
      <text x="23" y="212" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">5</text>
      <line x1="200" y1="28" x2="32" y2="28" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="23" cy="28" r="9" fill="#D71920" />
      <text x="23" y="32" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">6</text>
    </svg>
  )
}

function DomeElevationDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="25" y="68" width="70" height="12" fill="white" fillOpacity="0.8" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="35" y="48" width="50" height="20" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <path d="M35,48 Q60,5 85,48" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
    </svg>
  )
}

function CorniceProfileDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="50" y="15" width="40" height="75" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="20" y="15" width="30" height="10" fill="white" fillOpacity="0.9" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="25" y="25" width="25" height="7" fill="#071B3B" fillOpacity="0.06" stroke="#071B3B" strokeWidth="0.6" />
      <rect x="30" y="32" width="20" height="5" fill="#071B3B" fillOpacity="0.05" stroke="#071B3B" strokeWidth="0.6" />
    </svg>
  )
}

function SpandrelPanelDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="15" y="15" width="90" height="70" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <path d="M25,85 L25,65 Q60,40 95,65 L95,85" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.7" />
    </svg>
  )
}

function LanternDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="42" y="10" width="36" height="10" fill="white" fillOpacity="0.9" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="45" y="20" width="30" height="45" fill="white" fillOpacity="0.8" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="40" y="65" width="40" height="8" fill="white" fillOpacity="0.8" stroke="#071B3B" strokeWidth="0.9" />
    </svg>
  )
}

const boardData: SystemBoardData = {
  title: 'Domes & Vaults',
  boardTitle: 'Domes & Vaulted Forms',
  boardTagline: 'Landmark architecture in GFRC/GRC',
  breadcrumb: 'Domes & Vaults',
  subtitle: 'Timeless form. Lightweight precision.',
  heroDescription: 'Architectural GFRC / GRC dome and vault systems — produced to custom profiles for building crowns, heritage-inspired projects, and feature rooftop elements.',
  heroImage: '/images/projects/dome-vault-gfrc.png',
  heroImageAlt: 'GFRC dome and vault architectural elements',
  heroObjectPosition: 'center top',
  whatTitle: 'What are GFRC / GRC Domes & Vaults?',
  whatBody: 'GFRC / GRC domes and vaults are lightweight architectural elements used to crown buildings, define rooftop features, and create heritage-inspired architectural expressions. Produced in high-performance glass fibre reinforced concrete, they can be manufactured to complex curved profiles, custom sizes, and a range of surface finishes — combining visual impact with practical durability.',
  benefits: [
    { label: 'Complex Curved Geometry', desc: 'Domes and vaults in complex curved profiles are achievable in GFRC / GRC — enabling a wide range of architectural expressions.' },
    { label: 'Lightweight Performance', desc: 'GFRC / GRC achieves dome forms at a fraction of the weight of solid concrete, reducing structural loading.' },
    { label: 'Custom Profile Design', desc: 'Dome profiles, rib expressions, drum forms, and lantern elements can all be specified to project drawings.' },
    { label: 'Durable in Exposed Locations', desc: 'GFRC / GRC performs reliably in high-exposure rooftop and exterior environments across the Kingdom.' },
    { label: 'Heritage & Contemporary', desc: 'Suitable for heritage-inspired institutional buildings and modern architectural projects requiring a distinctive crown.' },
    { label: 'Large-Scale Capability', desc: 'Large dome diameters can be achieved through a panelised system, enabling efficient production and delivery.' },
  ],
  Diagram,
  callouts: [
    { n: 1, label: 'Dome Shell Surface', desc: 'The primary curved surface of the dome, expressed in GFRC / GRC.' },
    { n: 2, label: 'Rib & Profile Expression', desc: 'Decorative ribs, bands, and profile details on the dome surface.' },
    { n: 3, label: 'Lantern Element', desc: 'The crown element at the apex of the dome, produced as a coordinated component.' },
    { n: 4, label: 'Drum Element', desc: 'The cylindrical or polygonal base section beneath the dome.' },
    { n: 5, label: 'Finish Direction', desc: 'Surface finish applied to the dome shell and associated elements.' },
    { n: 6, label: 'Project Coordination Review', desc: 'Profile, sizing, and delivery scope confirmed through project review.' },
  ],
  boardComponents: ['Dome segments', 'Drum elements', 'Cornice rings', 'Spandrel panels', 'Arch elements', 'Lantern components'],
  detailCards: [
    { title: 'DOME ELEVATION', Drawing: DomeElevationDrawing, callouts: ['Dome Crown', 'Drum', 'Base Course'] },
    { title: 'CORNICE PROFILE', Drawing: CorniceProfileDrawing, callouts: ['Shelf', 'Cyma', 'Fascia'] },
    { title: 'SPANDREL PANEL', Drawing: SpandrelPanelDrawing, callouts: ['Spandrel Field', 'Arch Opening', 'Panel Border'] },
    { title: 'LANTERN', Drawing: LanternDrawing, callouts: ['Cap', 'Shaft', 'Collar'] },
  ],
  applications: [
    'Institutional Building Crowns', 'Heritage-Inspired Architecture', 'Hospitality Rooftops',
    'Government & Civic Buildings', 'Religious Architecture', 'Mixed-Use Feature Elements',
    'Residential Feature Domes', 'Ceremonial & Cultural Projects',
  ],
  designGuidance: [
    { label: 'Dome Profile Direction', desc: 'Dome profile, curvature, and geometry are established from architectural drawings and design intent references.' },
    { label: 'Rib & Ornament Expression', desc: 'Surface ribs, bands, and ornamental elements on the dome shell are coordinated as part of the design package.' },
    { label: 'Drum & Base Coordination', desc: 'The drum or base element beneath the dome is developed in coordination with the dome profile and architectural context.' },
    { label: 'Lantern & Finial Design', desc: 'Lantern, globe, and finial elements at the dome crown are designed and produced as coordinated components.' },
    { label: 'Finish Selection Direction', desc: 'Finish direction for dome shells and ribs is confirmed through design review and approved samples.' },
    { label: 'Project Coordination Requirements', desc: 'Profile confirmation, panel division strategy, and delivery requirements are agreed prior to production.' },
  ],
  ctaTitle: 'Ready to Discuss Your Dome & Vault Package?',
}

export default function DomesPage() {
  return <SystemBoardLayout data={boardData} />
}
