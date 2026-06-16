import type { Metadata } from 'next'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { SystemPageLayout } from '@/components/systems/SystemPageLayout'

export const metadata: Metadata = {
  title: 'Domes & Vaults — Durraka',
  description:
    'Architectural GFRC / GRC dome and vault systems for building crowns, feature rooftops, and heritage-inspired structures across Saudi Arabia.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified dome system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      {/* Ground line */}
      <line x1="30" y1="268" x2="370" y2="268" stroke="#071B3B" strokeWidth="2.5" />
      {/* Drum base */}
      <rect x="90" y="210" width="220" height="58" stroke="#071B3B" strokeWidth="1.4" fill="white" fillOpacity="0.7" />
      {/* Drum detail lines */}
      <line x1="90" y1="230" x2="310" y2="230" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="90" y1="248" x2="310" y2="248" stroke="#071B3B" strokeWidth="0.6" />
      {/* Outer dome arc */}
      <path d="M 90 212 Q 90 48 200 38 Q 310 48 310 212" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.6" />
      {/* Inner dome arc (echo) */}
      <path d="M 118 212 Q 118 78 200 70 Q 282 78 282 212" stroke="#071B3B" strokeWidth="0.8" fill="none" />
      {/* Rib lines — radiating from apex */}
      {[-80, -44, 0, 44, 80].map((dx, i) => (
        <line key={i} x1="200" y1="38" x2={200 + dx * 1.4} y2="212" stroke="#071B3B" strokeWidth="0.45" strokeDasharray="3 3" />
      ))}
      {/* Horizontal rib rings */}
      <ellipse cx="200" cy="110" rx="68" ry="10" stroke="#071B3B" strokeWidth="0.6" fill="none" />
      <ellipse cx="200" cy="160" rx="100" ry="10" stroke="#071B3B" strokeWidth="0.6" fill="none" />
      {/* Lantern stem */}
      <line x1="200" y1="38" x2="200" y2="18" stroke="#071B3B" strokeWidth="1.2" />
      {/* Lantern globe */}
      <circle cx="200" cy="12" r="7" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.8" />
      {/* Finial point */}
      <line x1="200" y1="5" x2="200" y2="2" stroke="#071B3B" strokeWidth="1.2" />

      {/* Callout leaders */}
      {/* 1 — Dome Shell */}
      <LeaderLine x1="152" y1="90" x2="32" y2="90" />
      <CalloutBadge n={1} cx={23} cy={90} />
      {/* 2 — Rib & Profile Expression */}
      <LeaderLine x1="268" y1="110" x2="368" y2="95" />
      <CalloutBadge n={2} cx={377} cy={88} />
      {/* 3 — Lantern */}
      <LeaderLine x1="207" y1="12" x2="368" y2="12" />
      <CalloutBadge n={3} cx={377} cy={12} />
      {/* 4 — Drum Element */}
      <LeaderLine x1="310" y1="230" x2="368" y2="230" />
      <CalloutBadge n={4} cx={377} cy={230} />
      {/* 5 — Finish Direction */}
      <LeaderLine x1="130" y1="170" x2="32" y2="200" />
      <CalloutBadge n={5} cx={23} cy={208} />
      {/* 6 — Project Coordination Review */}
      <LeaderLine x1="200" y1="38" x2="200" y2="28" />
      <LeaderLine x1="200" y1="28" x2="32" y2="28" />
      <CalloutBadge n={6} cx={23} cy={28} />
    </svg>
  )
}

export default function DomesPage() {
  return (
    <SystemPageLayout data={{
      title: 'Domes & Vaults',
      breadcrumb: 'Domes & Vaults',
      subtitle: 'Timeless form. Lightweight precision.',
      heroDescription: 'Architectural GFRC / GRC dome and vault systems — produced to custom profiles for building crowns, heritage-inspired projects, and feature rooftop elements.',
      heroImage: '/images/projects/dome-vault-gfrc.png',
      heroImageAlt: 'Architectural GFRC dome element',
      heroObjectPosition: 'center top',
      whatTitle: 'What are GFRC / GRC Domes & Vaults?',
      whatBody: 'GFRC / GRC domes and vaults are lightweight architectural elements used to crown buildings, define rooftop features, and create heritage-inspired architectural expressions. Produced in high-performance glass fibre reinforced concrete, they can be manufactured to complex curved profiles, custom sizes, and a range of surface finishes — combining visual impact with practical durability.',
      benefits: [
        { label: 'Complex Curved Geometry', desc: 'Domes and vaults in complex curved profiles are achievable in GFRC / GRC — enabling a wide range of architectural expressions.' },
        { label: 'Lightweight Performance', desc: 'GFRC / GRC achieves dome forms at a fraction of the weight of solid concrete, reducing structural loading.' },
        { label: 'Custom Profile Design', desc: 'Dome profiles, rib expressions, drum forms, and lantern elements can all be specified to project drawings.' },
        { label: 'Durable in Exposed Locations', desc: 'GFRC / GRC performs reliably in high-exposure rooftop and exterior environments across the Kingdom.' },
        { label: 'Heritage & Contemporary', desc: 'Suitable for heritage-inspired institutional buildings as well as modern architectural projects requiring a distinctive crown.' },
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
    }} />
  )
}
