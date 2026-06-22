import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { SystemBoardLayout } from '@/components/systems/SystemBoardLayout'
import type { SystemBoardData } from '@/components/systems/SystemBoardLayout'

function DomeDiagram() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-label="Simplified dome system diagram"
    >
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="30" y1="268" x2="370" y2="268" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="90" y="210" width="220" height="58" stroke="#071B3B" strokeWidth="1.4" fill="white" fillOpacity="0.7" />
      <line x1="90" y1="230" x2="310" y2="230" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="90" y1="248" x2="310" y2="248" stroke="#071B3B" strokeWidth="0.6" />
      <path d="M 90 212 Q 90 48 200 38 Q 310 48 310 212" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.6" />
      <path d="M 118 212 Q 118 78 200 70 Q 282 78 282 212" stroke="#071B3B" strokeWidth="0.8" fill="none" />
      {[-80, -44, 0, 44, 80].map((dx, i) => (
        <line key={i} x1="200" y1="38" x2={200 + dx * 1.4} y2="212" stroke="#071B3B" strokeWidth="0.45" strokeDasharray="3 3" />
      ))}
      <ellipse cx="200" cy="110" rx="68" ry="10" stroke="#071B3B" strokeWidth="0.6" fill="none" />
      <ellipse cx="200" cy="160" rx="100" ry="10" stroke="#071B3B" strokeWidth="0.6" fill="none" />
      <line x1="200" y1="38" x2="200" y2="18" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="200" cy="12" r="7" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.8" />
      <line x1="200" y1="5" x2="200" y2="2" stroke="#071B3B" strokeWidth="1.2" />
      <LeaderLine x1="152" y1="90" x2="32" y2="90" />
      <CalloutBadge n={1} cx={23} cy={90} />
      <LeaderLine x1="268" y1="110" x2="368" y2="95" />
      <CalloutBadge n={2} cx={377} cy={88} />
      <LeaderLine x1="207" y1="12" x2="368" y2="12" />
      <CalloutBadge n={3} cx={377} cy={12} />
      <LeaderLine x1="310" y1="230" x2="368" y2="230" />
      <CalloutBadge n={4} cx={377} cy={230} />
      <LeaderLine x1="130" y1="170" x2="32" y2="200" />
      <CalloutBadge n={5} cx={23} cy={208} />
      <LeaderLine x1="200" y1="38" x2="200" y2="28" />
      <LeaderLine x1="200" y1="28" x2="32" y2="28" />
      <CalloutBadge n={6} cx={23} cy={28} />
    </svg>
  )
}

// ─── Technical detail drawings ────────────────────────────────────────────────

function DrawDomeSection() {
  return (
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="180" height="130" fill="#F8F9FA" />
      <line x1="20" y1="118" x2="160" y2="118" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 35 102 Q 35 28 90 18 Q 145 28 145 102" stroke="#071B3B" strokeWidth="1.4" fill="white" fillOpacity="0.7" />
      <path d="M 48 102 Q 48 44 90 36 Q 132 44 132 102" stroke="#071B3B" strokeWidth="0.7" fill="none" />
      <line x1="90" y1="18" x2="90" y2="6" stroke="#071B3B" strokeWidth="1" />
      <circle cx="90" cy="4" r="4" stroke="#071B3B" strokeWidth="0.9" fill="white" fillOpacity="0.9" />
      <ellipse cx="90" cy="60" rx="42" ry="6" stroke="#071B3B" strokeWidth="0.5" fill="none" />
      <ellipse cx="90" cy="82" rx="55" ry="6" stroke="#071B3B" strokeWidth="0.5" fill="none" />
      <rect x="35" y="100" width="110" height="10" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.07" />
      <line x1="10" y1="60" x2="48" y2="60" stroke="#071B3B" strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>
  )
}

function DrawRibProfile() {
  return (
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="180" height="130" fill="#F8F9FA" />
      <line x1="20" y1="118" x2="160" y2="118" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 30 100 Q 30 20 90 10 Q 150 20 150 100" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.75" />
      {[55, 68, 81, 94, 107].map((x, i) => {
        const t = (x - 30) / 120
        const y = 100 - 90 * Math.sin(Math.PI * t)
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="4" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.07" />
          </g>
        )
      })}
      <rect x="25" y="95" width="130" height="8" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.06" />
      <line x1="90" y1="10" x2="90" y2="2" stroke="#071B3B" strokeWidth="0.7" strokeDasharray="2 2" />
    </svg>
  )
}

function DrawDrumBase() {
  return (
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="180" height="130" fill="#F8F9FA" />
      <line x1="20" y1="118" x2="160" y2="118" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 30 62 Q 30 8 90 8 Q 150 8 150 62" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.7" />
      <rect x="30" y="62" width="120" height="30" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.8" />
      <line x1="30" y1="75" x2="150" y2="75" stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.3" />
      <line x1="30" y1="83" x2="150" y2="83" stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.3" />
      <rect x="25" y="92" width="130" height="10" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.07" />
      <rect x="20" y="102" width="140" height="8" stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.08" />
      <line x1="10" y1="62" x2="30" y2="62" stroke="#071B3B" strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>
  )
}

function DrawLanternCrown() {
  return (
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="180" height="130" fill="#F8F9FA" />
      <line x1="20" y1="118" x2="160" y2="118" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="90" y1="2" x2="90" y2="14" stroke="#071B3B" strokeWidth="1" />
      <circle cx="90" cy="2" r="3" stroke="#071B3B" strokeWidth="0.8" fill="white" fillOpacity="0.9" />
      <path d="M 70 14 Q 72 8 90 6 Q 108 8 110 14 Z" stroke="#071B3B" strokeWidth="0.9" fill="white" fillOpacity="0.85" />
      <rect x="62" y="14" width="56" height="8" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.07" />
      <rect x="65" y="22" width="50" height="30" stroke="#071B3B" strokeWidth="1" fill="white" fillOpacity="0.8" />
      {[72, 80, 88, 96, 104].map((x) => (
        <line key={x} x1={x} y1={24} x2={x} y2={50} stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.25" />
      ))}
      <path d="M 55 52 L 62 52 Q 65 45 68 44 L 112 44 Q 115 45 118 52 L 125 52" stroke="#071B3B" strokeWidth="0.9" fill="none" />
      <rect x="40" y="52" width="100" height="10" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.07" />
      <path d="M 40 62 Q 40 100 90 105 Q 140 100 140 62" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.6" />
    </svg>
  )
}

const data: SystemBoardData = {
  title: 'Domes & Vaults',
  breadcrumb: 'Domes & Vaults',
  subtitle: 'Timeless form. Lightweight precision.',
  boardTagline: 'GFRC / GRC dome and vault systems for building crowns and heritage architecture',
  heroDescription: 'Architectural GFRC / GRC dome and vault systems — produced to custom profiles for building crowns, heritage-inspired projects, and feature rooftop elements.',
  heroImage: '/images/projects/dome-vault-gfrc.png',
  heroImageAlt: 'Architectural GFRC dome and vault elements',
  heroObjectPosition: 'center top',
  componentChecklist: [
    'Dome shell panels',
    'Rib & profile elements',
    'Lantern crown components',
    'Drum base elements',
    'Vaulted ceiling panels',
    'Finial & apex details',
    'Heritage dome expressions',
  ],
  Diagram: DomeDiagram,
  diagramLabel: 'Dome & Vault System — Cross-Section Overview',
  callouts: [
    { n: 1, label: 'Dome Shell Surface', desc: 'The primary curved surface of the dome, expressed in GFRC / GRC.' },
    { n: 2, label: 'Rib & Profile Expression', desc: 'Decorative ribs, bands, and profile details on the dome surface.' },
    { n: 3, label: 'Lantern Element', desc: 'The crown element at the apex of the dome, produced as a coordinated component.' },
    { n: 4, label: 'Drum Element', desc: 'The cylindrical or polygonal base section beneath the dome.' },
    { n: 5, label: 'Finish Direction', desc: 'Surface finish applied to the dome shell and associated elements.' },
    { n: 6, label: 'Project Coordination Review', desc: 'Profile, sizing, and delivery scope confirmed through project review.' },
  ],
  techDetails: [
    {
      title: 'Dome Section',
      Drawing: DrawDomeSection,
      labels: ['Dome shell surface', 'Profile rib bands', 'Drum transition', 'Lantern crown'],
    },
    {
      title: 'Rib Profile',
      Drawing: DrawRibProfile,
      labels: ['Shell surface plane', 'Rib projection', 'Rib profile form', 'Base ring band'],
    },
    {
      title: 'Drum Base',
      Drawing: DrawDrumBase,
      labels: ['Dome shell spring', 'Drum body', 'Drum band courses', 'Base cornice'],
    },
    {
      title: 'Lantern Crown',
      Drawing: DrawLanternCrown,
      labels: ['Finial & globe', 'Corinthian cap', 'Glazed lantern body', 'Dome shell transition'],
    },
  ],
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
  ctaBody: "Share your drawings, span, location, and finish requirements and Durraka's team will help you define the right dome or vault package for your project.",
}

export default function DomesPageContent() {
  return <SystemBoardLayout data={data} />
}
