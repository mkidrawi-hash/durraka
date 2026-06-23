import type { Metadata } from 'next'
import { SystemBoardLayout } from '@/components/systems/SystemBoardLayout'
import type { SystemBoardData } from '@/components/systems/SystemBoardLayout'

export const metadata: Metadata = {
  title: 'Custom Decorative Elements — Durraka',
  description:
    'Bespoke GFRC / GRC decorative elements — ornamental panels, medallions, friezes, and custom architectural details produced to project drawings for any building type.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified custom decorative elements diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      <rect x="50" y="22" width="300" height="256" stroke="#071B3B" strokeWidth="1.5" fill="white" fillOpacity="0.7" rx="1" />
      <rect x="62" y="34" width="276" height="232" stroke="#071B3B" strokeWidth="0.9" fill="none" />
      <rect x="72" y="44" width="256" height="212" stroke="#071B3B" strokeWidth="0.6" fill="none" strokeDasharray="4 3" />
      {([[84,56],[316,56],[84,244],[316,244]] as [number,number][]).map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="9" stroke="#071B3B" strokeWidth="0.8" fill="white" fillOpacity="0.9" />
          <circle cx={cx} cy={cy} r="4" stroke="#071B3B" strokeWidth="0.6" fill="#071B3B" fillOpacity="0.08" />
        </g>
      ))}
      <circle cx="200" cy="150" r="62" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.85" />
      <circle cx="200" cy="150" r="52" stroke="#071B3B" strokeWidth="0.7" fill="none" />
      <circle cx="200" cy="150" r="36" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.04" />
      <circle cx="200" cy="150" r="12" stroke="#071B3B" strokeWidth="0.9" fill="white" fillOpacity="0.9" />
      <circle cx="200" cy="150" r="5" stroke="#071B3B" strokeWidth="0.6" fill="#071B3B" fillOpacity="0.12" />
      <rect x="72" y="100" width="256" height="8" stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.03" />
      <rect x="72" y="192" width="256" height="8" stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.03" />
      <line x1="50" y1="150" x2="30" y2="150" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="150" r="9" fill="#D71920" />
      <text x="21" y="154" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">1</text>
      <line x1="200" y1="88" x2="200" y2="22" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="200" cy="13" r="9" fill="#D71920" />
      <text x="200" y="17" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">2</text>
      <line x1="252" y1="150" x2="368" y2="130" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="122" r="9" fill="#D71920" />
      <text x="377" y="126" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">3</text>
      <line x1="326" y1="150" x2="368" y2="175" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="183" r="9" fill="#D71920" />
      <text x="377" y="187" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">4</text>
      <line x1="130" y1="236" x2="30" y2="260" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="268" r="9" fill="#D71920" />
      <text x="21" y="272" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">5</text>
      <line x1="350" y1="30" x2="368" y2="30" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="30" r="9" fill="#D71920" />
      <text x="377" y="34" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">6</text>
    </svg>
  )
}

function ReliefPanelDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="10" width="100" height="80" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="20" y="20" width="80" height="60" fill="none" stroke="#071B3B" strokeWidth="0.7" strokeDasharray="3 2" />
      <circle cx="60" cy="50" r="20" fill="white" fillOpacity="0.85" stroke="#071B3B" strokeWidth="0.9" />
      <circle cx="60" cy="50" r="6" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.6" />
    </svg>
  )
}

function FriezeBandDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="30" width="100" height="40" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <polygon points="25,50 32,38 39,50 32,62" fill="#071B3B" fillOpacity="0.07" stroke="#071B3B" strokeWidth="0.6" />
      <polygon points="50,50 57,38 64,50 57,62" fill="#071B3B" fillOpacity="0.07" stroke="#071B3B" strokeWidth="0.6" />
      <polygon points="75,50 82,38 89,50 82,62" fill="#071B3B" fillOpacity="0.07" stroke="#071B3B" strokeWidth="0.6" />
    </svg>
  )
}

function KeystoneDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <polygon points="20,20 100,20 85,80 35,80" fill="white" fillOpacity="0.85" stroke="#071B3B" strokeWidth="0.9" />
      <line x1="60" y1="22" x2="60" y2="78" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="3 2" strokeOpacity="0.3" />
    </svg>
  )
}

function OrnamentFieldDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="10" width="100" height="80" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <circle cx="60" cy="50" r="22" fill="none" stroke="#071B3B" strokeWidth="0.7" />
      <circle cx="60" cy="28" r="10" fill="#071B3B" fillOpacity="0.05" stroke="#071B3B" strokeWidth="0.6" />
      <circle cx="60" cy="72" r="10" fill="#071B3B" fillOpacity="0.05" stroke="#071B3B" strokeWidth="0.6" />
      <circle cx="38" cy="50" r="10" fill="#071B3B" fillOpacity="0.05" stroke="#071B3B" strokeWidth="0.6" />
      <circle cx="82" cy="50" r="10" fill="#071B3B" fillOpacity="0.05" stroke="#071B3B" strokeWidth="0.6" />
    </svg>
  )
}

const boardData: SystemBoardData = {
  title: 'Custom Decorative Elements',
  boardTitle: 'Bespoke Decorative',
  boardTagline: 'Any form. Any profile. Any ornament.',
  breadcrumb: 'Custom Elements',
  subtitle: 'Bespoke detail. Any form.',
  heroDescription: 'Bespoke GFRC / GRC decorative elements — ornamental panels, medallions, friezes, keystones, and any custom architectural detail produced to project drawings.',
  heroImage: '/images/projects/architectural-cladding-gfrc.png',
  heroImageAlt: 'Custom GFRC decorative architectural elements',
  heroObjectPosition: 'center',
  whatTitle: 'What are GFRC / GRC Custom Decorative Elements?',
  whatBody: 'GFRC / GRC custom decorative elements are bespoke architectural components produced to project-specific designs — from ornamental medallions and carved-effect relief panels to friezes, keystones, brackets, finials, and any other decorative detail. Where standard system products cannot achieve the design intent, custom elements are developed directly from project drawings or design references.',
  benefits: [
    { label: 'Any Form, Any Profile', desc: 'GFRC / GRC can be cast to virtually any decorative geometry — from deep relief carvings to delicate ornamental patterns — at project-specific scale.' },
    { label: 'One-Off & Series Production', desc: 'Custom elements can be produced as single unique pieces or in coordinated series across a façade or building.' },
    { label: 'Design Development Support', desc: 'Ornamental geometry is developed from design intent references, precedent images, or architectural drawings.' },
    { label: 'Integration with Standard Systems', desc: 'Custom decorative elements are coordinated with standard GFRC / GRC systems (cladding, cornices, domes) as part of a unified package.' },
    { label: 'Heritage Restoration', desc: 'Replacement ornamental elements for heritage restoration and repair projects can be produced from existing samples or survey drawings.' },
    { label: 'Lightweight at Scale', desc: 'Even large decorative elements maintain the lightweight advantage of GFRC / GRC, reducing structural and handling requirements.' },
  ],
  Diagram,
  callouts: [
    { n: 1, label: 'Decorative Panel Field', desc: 'The primary surface area carrying the ornamental design or relief pattern.' },
    { n: 2, label: 'Central Medallion', desc: 'A focal ornamental element — medallion, rosette, or panel centrepiece.' },
    { n: 3, label: 'Relief Expression', desc: 'Depth, texture, and three-dimensional quality of the decorative surface.' },
    { n: 4, label: 'Frame & Border', desc: 'Outer framing band and border detail surrounding the decorative field.' },
    { n: 5, label: 'Finish Direction', desc: 'Surface finish applied to the decorative element and its border.' },
    { n: 6, label: 'Project Coordination Review', desc: 'Design intent, mockup requirements, and delivery scope confirmed through project review.' },
  ],
  boardComponents: ['Ornamental panels', 'Relief elements', 'Friezes & bands', 'Medallions', 'Keystones', 'Custom geometry'],
  detailCards: [
    { title: 'RELIEF PANEL', Drawing: ReliefPanelDrawing, callouts: ['Relief Field', 'Border Frame', 'Centre Motif'] },
    { title: 'FRIEZE BAND', Drawing: FriezeBandDrawing, callouts: ['Band Height', 'Pattern Repeat', 'Relief Depth'] },
    { title: 'KEYSTONE', Drawing: KeystoneDrawing, callouts: ['Crown', 'Voussoir Form', 'Base'] },
    { title: 'ORNAMENT FIELD', Drawing: OrnamentFieldDrawing, callouts: ['Centre Motif', 'Pattern Field', 'Border'] },
  ],
  applications: [
    'Façade Ornamental Panels', 'Heritage Restoration Projects', 'Entrance Feature Elements',
    'Frieze & Spandrel Decoration', 'Keystones & Arched Surrounds', 'Brackets & Corbels',
    'Ceremonial & Cultural Projects', 'Interior Feature Elements',
  ],
  designGuidance: [
    { label: 'Design Intent Development', desc: 'Ornamental geometry is developed from project drawings, precedent images, or design intent references provided by the project team.' },
    { label: 'Relief Depth & Scale', desc: 'Relief depth, element scale, and overall panel sizing are agreed as part of the design development process.' },
    { label: 'Mockup & Review Process', desc: 'Physical mockups of custom decorative elements are produced for review and approval before full production commences.' },
    { label: 'Series & Repeat Coordination', desc: 'Where elements repeat across a façade, modular production and consistent pattern alignment are coordinated as part of the package.' },
    { label: 'Finish Selection Direction', desc: 'Finish direction for custom elements is confirmed through design review, aligned with the surrounding building materials.' },
    { label: 'Project Coordination Requirements', desc: 'Design confirmation, mockup approvals, and production scheduling are agreed through structured project coordination prior to manufacture.' },
  ],
  ctaTitle: 'Ready to Discuss Your Custom Element Package?',
}

export default function CustomPage() {
  return <SystemBoardLayout data={boardData} />
}
