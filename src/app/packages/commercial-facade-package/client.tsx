'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { CommercialFacadeIllustration } from '@/components/packages/illustrations'

// ─── Shared data ──────────────────────────────────────────────────────────────

const SHARED_MATERIALS = [
  'GFRC/GRC architectural component — glass fibre reinforced concrete',
  'Cement-based composite matrix with integral aggregate',
  'Alkali-resistant glass fibre reinforcement throughout',
  'Project-specific thickness and section profile, confirmed via shop drawings',
  'Factory-cast component — manufactured under controlled conditions',
  'Pigmented or natural cement finish, project-specific',
]

const SHARED_ARCH_DRAWINGS = [
  'Elevation reference — profile position, height, and building integration',
  'Section reference — component cross-section, projection, and depth',
  'Profile outline drawing — detailed molding or surface geometry',
  'Module rhythm — repeat spacing and panel joint positions',
  'Interface detail — adjacent facade materials and build-up',
  'Approved dimensions based on submitted project drawings',
]

const SHARED_SHOP_DRAWINGS = [
  'Shop drawings required before production commences',
  'Substrate and structural coordination by project team',
  'Panelisation strategy and lifting method — confirmed at technical review',
  'Installation sequence is project-specific and not disclosed publicly',
  'Final shop drawing set remains project-confidential',
]

const SHARED_FINISHES = [
  'Smooth architectural finish — fine-textured, paint-ready',
  'Sandblasted finish — lightly abraded, aggregate-visible surface',
  'Stone-like texture — aggregate and pigment to match natural stone',
  'Textured / cast finish — ribbed, board-formed, or bespoke pattern',
  'Heritage warm tone — warm aggregate, hand-finished appearance',
  'Custom colour match — integral pigment to project RAL, NCS, or swatch',
]

const SHARED_INPUTS = [
  'Architectural elevations and plan drawings',
  'Sections through relevant facade areas',
  'BOQ / quantity schedule if available',
  'Structural drawings and substrate information',
  'Finish and color references or samples',
  'Available reference or inspiration images',
  'Project location and construction timeline',
  'Site constraints or logistics considerations',
]

const SHARED_SCOPE = [
  'Component scope review — confirm elements, dimensions, and quantities',
  'Shop drawing coordination — based on approved architectural drawings',
  'Mold development — project-specific geometry and profile',
  'GFRC/GRC manufacturing — factory production to confirmed drawings',
  'Sample approval — finish sample submitted for project sign-off',
  'Delivery coordination — scheduled to project programme',
  'Installation coordination when required by contract scope',
]

// ─── Facade elevation diagram ─────────────────────────────────────────────────

function CommercialFacadeElevation() {
  return (
    <svg viewBox="0 0 760 395" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="760" height="395" fill="#F4F6F9" />
      {/* Ground line */}
      <line x1="55" y1="372" x2="705" y2="372" stroke="#071B3B" strokeWidth="2" />
      {/* Main facade grid — 3 bays wide, 3 floors */}
      {/* Floor 1 panels */}
      <rect x="90" y="280" width="176" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="270" y="280" width="180" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="454" y="280" width="176" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Floor 2 panels */}
      <rect x="90" y="186" width="176" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="270" y="186" width="180" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="454" y="186" width="176" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Floor 3 panels */}
      <rect x="90" y="92" width="176" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="270" y="92" width="180" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="454" y="92" width="176" height="90" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Window openings floor 1 */}
      <rect x="116" y="298" width="124" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      <rect x="296" y="298" width="128" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      <rect x="480" y="298" width="124" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      {/* Window surrounds floor 1 */}
      <rect x="108" y="292" width="140" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="288" y="292" width="144" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="472" y="292" width="140" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      {/* Window openings floor 2 */}
      <rect x="116" y="204" width="124" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      <rect x="296" y="204" width="128" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      <rect x="480" y="204" width="124" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      <rect x="108" y="198" width="140" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="288" y="198" width="144" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="472" y="198" width="140" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      {/* Window openings floor 3 */}
      <rect x="116" y="110" width="124" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      <rect x="296" y="110" width="128" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      <rect x="480" y="110" width="124" height="56" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      <rect x="108" y="104" width="140" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="288" y="104" width="144" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="472" y="104" width="140" height="68" fill="none" stroke="#071B3B" strokeWidth="2" />
      {/* Horizontal cornice bands */}
      <rect x="86" y="276" width="460" height="6" fill="white" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="84" y="273" width="464" height="3" fill="#D71920" opacity="0.6" />
      <rect x="86" y="182" width="460" height="6" fill="white" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="84" y="179" width="464" height="3" fill="#D71920" opacity="0.6" />
      <rect x="86" y="88" width="460" height="6" fill="white" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="84" y="85" width="464" height="3" fill="#D71920" opacity="0.6" />
      {/* Roofline cornice */}
      <rect x="78" y="60" width="476" height="28" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="78" y1="70" x2="554" y2="70" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="78" y1="78" x2="554" y2="78" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="78" y="60" width="476" height="4" fill="#D71920" opacity="0.8" />
      {/* Corner quoin elements */}
      <rect x="630" y="60" width="40" height="312" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {[80, 116, 152, 188, 224, 260, 296, 332].map(y => (
        <rect key={y} x="630" y={y} width="40" height="16" fill="#EEF0F5" stroke="#071B3B" strokeWidth="0.75" />
      ))}
      {/* Vertical fin */}
      <rect x="356" y="60" width="8" height="310" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1" />
      {/* Hotspot A: roofline cornice */}
      <line x1="554" y1="74" x2="600" y2="74" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="613" cy="74" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="613" y="79" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">A</text>
      {/* Hotspot B: panel field */}
      <circle cx="178" cy="240" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="178" y="245" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">B</text>
      {/* Hotspot C: window surround */}
      <line x1="108" y1="326" x2="56" y2="326" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="326" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="331" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">C</text>
      {/* Hotspot D: corner quoin */}
      <line x1="670" y1="190" x2="704" y2="190" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="717" cy="190" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="717" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">D</text>
      {/* Hotspot E: horizontal band */}
      <line x1="554" y1="277" x2="600" y2="277" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="613" cy="277" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="613" y="282" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">E</text>
      {/* Hotspot F: vertical fin */}
      <circle cx="360" cy="150" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="360" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">F</text>
      <text x="380" y="390" textAnchor="middle" fill="#071B3B" fontSize="9" fontFamily="Arial, sans-serif" fillOpacity="0.35">ARCHITECTURAL REFERENCE DIAGRAM — NOT TO SCALE — DURRAKA FACTORY FOR INDUSTRY</text>
    </svg>
  )
}

// ─── Card SVGs ────────────────────────────────────────────────────────────────

function FacadeCladdingPanelSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="18" width="104" height="46" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="128" y="18" width="114" height="46" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="18" y="70" width="104" height="48" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="128" y="70" width="114" height="48" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="18" y1="64" x2="242" y2="64" stroke="#071B3B" strokeWidth="2" />
      <line x1="122" y1="18" x2="122" y2="118" stroke="#071B3B" strokeWidth="2" />
    </svg>
  )
}

function CorniceBandSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="20" y="100" width="220" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="28" y="86" width="204" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="16" y="66" width="228" height="20" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="20" y="52" width="220" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 20 52 Q 20 42 32 42 L 228 42 Q 240 42 240 52" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="16" y="66" width="228" height="3" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function WindowSurroundSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="60" y="22" width="140" height="92" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="46" y="14" width="168" height="108" fill="none" stroke="#071B3B" strokeWidth="3" />
      <line x1="46" y1="14" x2="60" y2="22" stroke="#071B3B" strokeWidth="1" />
      <line x1="214" y1="14" x2="200" y2="22" stroke="#071B3B" strokeWidth="1" />
      <line x1="46" y1="122" x2="60" y2="114" stroke="#071B3B" strokeWidth="1" />
      <line x1="214" y1="122" x2="200" y2="114" stroke="#071B3B" strokeWidth="1" />
      <rect x="46" y="14" width="168" height="5" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function CornerExpressionSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="20" y="18" width="110" height="100" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="130" y="40" width="110" height="78" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="116" y="18" width="28" height="100" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.5" />
      {[28, 50, 72, 94].map(y => (
        <rect key={y} x="116" y={y} width="28" height="16" fill="white" stroke="#071B3B" strokeWidth="0.75" />
      ))}
      <rect x="116" y="18" width="28" height="4" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function VerticalFinSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="30" y="18" width="180" height="100" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="116" y="18" width="18" height="100" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.5" />
      <polygon points="134,18 150,28 150,108 134,118" fill="#C8CCDA" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="116" y="18" width="18" height="4" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function BespokeProfileSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="20" y="18" width="220" height="100" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 20 48 Q 60 38 100 48 Q 140 58 180 48 Q 220 38 240 48" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <path d="M 20 68 Q 60 58 100 68 Q 140 78 180 68 Q 220 58 240 68" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <path d="M 20 88 Q 60 78 100 88 Q 140 98 180 88 Q 220 78 240 88" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="20" y="18" width="220" height="4" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

// ─── Component data ───────────────────────────────────────────────────────────

const FACADE_COMPONENTS: ComponentDetail[] = [
  {
    id: 'facade-cladding-panel',
    title: 'Facade Cladding Panel',
    shortDescription: 'Main flat cladding panel in grid module — the primary field element of the commercial facade. Sets the surface rhythm, joint pattern, and base texture.',
    tags: ['Facade Panel', 'Cladding', 'GFRC Panel', 'Commercial'],
    CardIllustration: FacadeCladdingPanelSVG,
    HotspotDiagram: CommercialFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Panel Face', description: 'The primary visible surface — finish, texture, and module dimension.' },
      { letter: 'B', label: 'Horizontal Joint', description: 'Panel-to-panel joint lines creating visual banding across the facade.' },
      { letter: 'C', label: 'Vertical Joint', description: 'Panel module spacing and column rhythm.' },
      { letter: 'D', label: 'Corner Return', description: 'How panels wrap building corners.' },
      { letter: 'E', label: 'Panel Module', description: 'Repeat unit size relative to floor-to-floor height.' },
      { letter: 'F', label: 'Finish Reference', description: 'Surface and color specification — confirmed from approved sample.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'cornice-profile-band',
    title: 'Cornice / Profile Band',
    shortDescription: 'Horizontal banding element at floor levels, parapets, or key facade transitions — establishes the primary shadow line and proportion rhythm.',
    tags: ['Cornice Band', 'Profile', 'Horizontal Rhythm', 'GFRC'],
    CardIllustration: CorniceBandSVG,
    HotspotDiagram: CommercialFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Crown Cap', description: 'Top of cornice — sits at floor level, parapet, or roofline.' },
      { letter: 'B', label: 'Cornice Body', description: 'Main projecting mass — projection depth creates shadow line.' },
      { letter: 'C', label: 'Profile Lines', description: 'Internal molding lines enriching the cornice face.' },
      { letter: 'D', label: 'Band Positions', description: 'Cornice placed at every floor, alternate floors, or key transitions.' },
      { letter: 'E', label: 'Cornice Width', description: 'Band height relative to facade panel height.' },
      { letter: 'F', label: 'Finish Reference', description: 'Color and texture — confirmed from project specification.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'window-surround-reveal',
    title: 'Window Surround / Reveal',
    shortDescription: 'GFRC/GRC frame around window openings — head, jambs, and sill define the reveal depth, shadow profile, and glazing interface.',
    tags: ['Window Surround', 'Reveal', 'Jamb Detail', 'GFRC'],
    CardIllustration: WindowSurroundSVG,
    HotspotDiagram: CommercialFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Head Detail', description: 'Lintel-like top member of surround.' },
      { letter: 'B', label: 'Jamb Reveal', description: 'Side members — depth creates shadow and frames the glazing.' },
      { letter: 'C', label: 'Sill Detail', description: 'Bottom of surround — profile and weathering edge.' },
      { letter: 'D', label: 'Surround Width', description: 'Frame width relative to opening size.' },
      { letter: 'E', label: 'Corner Mitre', description: 'How head and jamb meet at corners — clean mitre or overlap.' },
      { letter: 'F', label: 'Finish Reference', description: 'Surface and color relative to panel field — confirmed from sample.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'corner-expression',
    title: 'Edge / Corner Expression',
    shortDescription: 'Quoin or corner column element — resolves building edges and creates visual weight at facade corners.',
    tags: ['Corner Element', 'Quoin', 'Edge Detail', 'GFRC'],
    CardIllustration: CornerExpressionSVG,
    HotspotDiagram: CommercialFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Corner Cap', description: 'Top of corner element — ties to cornice or parapet.' },
      { letter: 'B', label: 'Quoin Face', description: 'Projecting face of corner block — alternates with the main panel field.' },
      { letter: 'C', label: 'Corner Rhythm', description: 'Vertical spacing of quoin blocks or corner column modules.' },
      { letter: 'D', label: 'Return Face', description: 'Short return face of corner elements visible from 45°.' },
      { letter: 'E', label: 'Corner Base', description: 'Bottom of corner treatment — transition to plinth or ground.' },
      { letter: 'F', label: 'Finish Reference', description: 'Quoin or corner element vs panel field contrast.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'decorative-vertical-fin',
    title: 'Decorative Vertical Fin',
    shortDescription: 'Vertical rhythm element projecting from the facade — creates depth, shadow, and modular expression on commercial building elevations.',
    tags: ['Vertical Fin', 'Rhythm Element', 'Facade Depth', 'GFRC'],
    CardIllustration: VerticalFinSVG,
    HotspotDiagram: CommercialFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Fin Crown', description: 'Top termination detail — cap or angle cut.' },
      { letter: 'B', label: 'Fin Body', description: 'Primary projection — depth and face width create shadow.' },
      { letter: 'C', label: 'Fin Spacing', description: 'Centre-to-centre repeat along facade.' },
      { letter: 'D', label: 'Fin Base', description: 'Bottom termination — lands on sill, plinth, or floor level.' },
      { letter: 'E', label: 'Fin Profile', description: 'Cross-section of fin — rectangular, tapered, or profiled.' },
      { letter: 'F', label: 'Finish Reference', description: 'Surface and color — confirmed from project specification.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'custom-bespoke-profile',
    title: 'Custom Bespoke Profile',
    shortDescription: 'Project-specific custom element — unique geometry or pattern confirmed from design intent drawings. Fabricated to the approved design.',
    tags: ['Custom Profile', 'Bespoke', 'Project-Specific', 'GFRC'],
    CardIllustration: BespokeProfileSVG,
    HotspotDiagram: CommercialFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Profile Crown', description: 'Top of custom element — its cap or crown detail.' },
      { letter: 'B', label: 'Profile Face', description: 'The main visible face — custom geometry or pattern.' },
      { letter: 'C', label: 'Profile Return', description: 'Side and return faces confirming the full 3D form.' },
      { letter: 'D', label: 'Interface Zone', description: 'Where custom element meets standard panels or cladding.' },
      { letter: 'E', label: 'Custom Module', description: 'Repeat unit or single element, dimensions from drawings.' },
      { letter: 'F', label: 'Finish Reference', description: 'Custom color and texture specification — confirmed from project.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
]

// ─── Review steps ─────────────────────────────────────────────────────────────

const REVIEW_STEPS = [
  { n: '1', title: 'Receive Drawings', description: 'Architectural elevations, facade sections, and panel layout drawings submitted for initial technical review.' },
  { n: '2', title: 'Review Panel Layout & Banding', description: 'Durraka reviews module sizing, horizontal banding positions, and overall facade composition.' },
  { n: '3', title: 'Confirm Window Surround & Edge Details', description: 'Surround profiles, reveal depths, corner treatments, and fin dimensions confirmed against drawings.' },
  { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each component — coordinated with structure, substrate, and interfaces.' },
  { n: '5', title: 'Confirm Finish & Sample', description: 'Finish direction, colour references, and sample requirements agreed before manufacturing.' },
  { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC components manufactured, QC inspected, and delivered to project programme.' },
]

// ─── Package data ─────────────────────────────────────────────────────────────

const COMMERCIAL_FACADE_DATA: PremiumPackageData = {
  title: 'Commercial Facade Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Multi-storey exterior cladding. Engineered in GFRC/GRC.',
  heroDescription:
    'A complete GFRC/GRC scope for commercial building exteriors — combining facade cladding panels, cornice lines, window surrounds, vertical rhythm elements, and edge expression into a single precision-manufactured package.',
  illustrativeArea: 'Approx. 8,000–14,000 m²',
  visibleComponents: ['Facade cladding panels', 'Cornices / profiles', 'Window surrounds', 'Edge / corner expression', 'Decorative vertical elements'],
  HeroIllustration: CommercialFacadeIllustration,
  packageIntent:
    'This package is designed to help architects, consultants, developers, and project teams understand how GFRC/GRC components can be coordinated into a complete commercial facade cladding scope. The focus is on panel module rhythm, horizontal banding, window surround detailing, and controlled architectural expression. The final scope, dimensions, finishes, and engineering requirements are confirmed from submitted architectural drawings and project specifications during technical review.',
  suitableApplications: [
    'Multi-storey commercial offices',
    'Mixed-use developments',
    'Retail and hospitality towers',
    'Corporate headquarters',
    'Government administrative buildings',
    'Educational and institutional buildings',
  ],
  componentDetails: FACADE_COMPONENTS,
  infographics: [
    {
      title: 'Cornice Component Overview',
      description: 'Horizontal architectural profiles used at rooflines, parapets, edges, and facade transitions to define shadow lines and proportion.',
      image: '/images/infographics/cornice-component-overview.svg',
      imageAlt: 'Cornice component overview — GRC/GFRC cornice diagram',
    },
  ],
  reviewSteps: REVIEW_STEPS,
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function CommercialFacadePackageClient() {
  return <PremiumPackageLayout data={COMMERCIAL_FACADE_DATA} />
}
