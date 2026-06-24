'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { DomesCornicesIllustration } from '@/components/packages/illustrations'

// ─── Shared data (same across all GFRC/GRC components in this package) ────────

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

// ─── Shared heritage facade elevation diagram (used in all modal Overview tabs) ─

function DomesHeritageFacadeElevation() {
  return (
    <svg viewBox="0 0 760 395" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="760" height="395" fill="#F4F6F9" />
      {/* Ground */}
      <line x1="55" y1="372" x2="705" y2="372" stroke="#071B3B" strokeWidth="2" />
      {/* Ground floor + arches */}
      <rect x="90" y="298" width="580" height="72" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 135 370 L 135 318 A 32 32 0 0 1 199 318 L 199 370" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 298 370 L 298 305 A 82 82 0 0 1 462 305 L 462 370" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 561 370 L 561 318 A 32 32 0 0 1 625 318 L 625 370" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 372 305 L 380 297 L 388 305" fill="#071B3B" fillOpacity="0.4" />
      {/* Main cornice */}
      <rect x="80" y="268" width="600" height="30" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="80" y1="278" x2="680" y2="278" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="80" y1="287" x2="680" y2="287" stroke="#071B3B" strokeWidth="0.75" />
      {/* Decorative band */}
      <rect x="90" y="240" width="580" height="28" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      {[115, 150, 185, 220, 255, 415, 450, 485, 520, 555].map(x => (
        <rect key={x} x={x} y={244} width={9} height={20} fill="none" stroke="#071B3B" strokeWidth="0.75" />
      ))}
      {/* Upper wall (flanking drum) */}
      <rect x="90" y="134" width="222" height="106" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="448" y="134" width="222" height="106" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="90" y1="134" x2="90" y2="240" stroke="#071B3B" strokeWidth="2" />
      <line x1="312" y1="134" x2="312" y2="240" stroke="#071B3B" strokeWidth="2" />
      <line x1="448" y1="134" x2="448" y2="240" stroke="#071B3B" strokeWidth="2" />
      <line x1="670" y1="134" x2="670" y2="240" stroke="#071B3B" strokeWidth="2" />
      {/* Column capitals */}
      <rect x="82" y="232" width="20" height="12" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="82" y1="239" x2="102" y2="239" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="658" y="232" width="20" height="12" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="658" y1="239" x2="678" y2="239" stroke="#071B3B" strokeWidth="0.75" />
      {/* Side parapets */}
      <rect x="90" y="90" width="218" height="44" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="452" y="90" width="218" height="44" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="88" y="80" width="222" height="12" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="450" y="80" width="222" height="12" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Drum */}
      <rect x="316" y="80" width="128" height="54" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="316" y1="96" x2="444" y2="96" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="316" y1="112" x2="444" y2="112" stroke="#071B3B" strokeWidth="0.75" />
      {/* Dome arc */}
      <path d="M 290 80 A 90 90 0 0 1 470 80" fill="white" stroke="#071B3B" strokeWidth="2" />
      <path d="M 306 80 A 75 75 0 0 1 454 80" fill="none" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="3,3" />
      <path d="M 326 80 A 56 56 0 0 1 434 80" fill="none" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="3,3" />
      <path d="M 350 80 A 33 33 0 0 1 410 80" fill="none" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="3,3" />
      <line x1="290" y1="80" x2="316" y2="80" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="444" y1="80" x2="470" y2="80" stroke="#071B3B" strokeWidth="1.5" />
      {/* Finial */}
      <line x1="380" y1="14" x2="380" y2="26" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="380" cy="11" r="5" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* ── Hotspot circles ── */}
      {/* A: Dome crown */}
      <circle cx="380" cy="11" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="380" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">A</text>
      {/* B: Main cornice — right leader */}
      <line x1="680" y1="283" x2="704" y2="283" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="717" cy="283" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="717" y="288" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">B</text>
      {/* C: Decorative band — right leader */}
      <line x1="670" y1="254" x2="704" y2="254" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="717" cy="254" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="717" y="259" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">C</text>
      {/* D: Parapet coping — left leader */}
      <line x1="88" y1="86" x2="56" y2="86" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="86" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="91" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">D</text>
      {/* E: Arch keystone (on diagram) */}
      <circle cx="380" cy="306" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="380" y="311" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">E</text>
      {/* F: Column capital — left leader */}
      <line x1="82" y1="238" x2="56" y2="238" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="238" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="243" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">F</text>
      {/* Disclaimer */}
      <text x="380" y="390" textAnchor="middle" fill="#071B3B" fontSize="9" fontFamily="Arial, sans-serif" fillOpacity="0.35">ARCHITECTURAL REFERENCE DIAGRAM — NOT TO SCALE — DURRAKA FACTORY FOR INDUSTRY</text>
    </svg>
  )
}

// ─── Card illustration SVGs ───────────────────────────────────────────────────

function DomeSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      {/* Drum */}
      <rect x="105" y="86" width="50" height="28" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="105" y1="98" x2="155" y2="98" stroke="#071B3B" strokeWidth="0.75" />
      {/* Dome arc */}
      <path d="M 88 86 A 42 42 0 0 1 172 86" fill="white" stroke="#071B3B" strokeWidth="2" />
      {/* Ribs */}
      <path d="M 98 86 A 33 33 0 0 1 162 86" fill="none" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="3,2" />
      <path d="M 114 86 A 19 19 0 0 1 146 86" fill="none" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="3,2" />
      {/* Finial */}
      <line x1="130" y1="44" x2="130" y2="56" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="130" cy="41" r="5" fill="#D71920" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}

function CorniceSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      {/* Wall surface */}
      <rect x="20" y="100" width="220" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Bed mold */}
      <rect x="28" y="86" width="204" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Cornice body (projects out) */}
      <rect x="16" y="66" width="228" height="20" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Corona / fascia top */}
      <rect x="20" y="52" width="220" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Cyma at very top */}
      <path d="M 20 52 Q 20 42 32 42 L 228 42 Q 240 42 240 52" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Red accent on cornice projection */}
      <rect x="16" y="66" width="228" height="3" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function CrownCorniceSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      {/* Wall */}
      <rect x="20" y="100" width="220" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Cornice body */}
      <rect x="14" y="74" width="232" height="26" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="14" y1="85" x2="246" y2="85" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="14" y1="93" x2="246" y2="93" stroke="#071B3B" strokeWidth="0.75" />
      {/* Crown cap (wider) */}
      <rect x="10" y="56" width="240" height="18" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Crown drip profile */}
      <path d="M 10 56 Q 10 44 26 44 L 234 44 Q 250 44 250 56" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Red top line */}
      <rect x="10" y="44" width="240" height="4" fill="#D71920" opacity="0.85" />
    </svg>
  )
}

function DecorativeBandSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      {/* Band border lines */}
      <rect x="16" y="46" width="228" height="44" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="16" y1="54" x2="244" y2="54" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="16" y1="82" x2="244" y2="82" stroke="#071B3B" strokeWidth="0.75" />
      {/* Repeating diamond motifs */}
      {[44, 96, 148, 200].map(cx => (
        <g key={cx}>
          <path d={`M ${cx} 58 L ${cx + 14} 68 L ${cx} 78 L ${cx - 14} 68 Z`}
            fill="none" stroke="#071B3B" strokeWidth="1.2" />
          <circle cx={cx} cy={68} r="3" fill="#D71920" opacity="0.8" />
        </g>
      ))}
      {/* Repeat marks */}
      <text x="240" y="71" fill="#071B3B" fontSize="10" fontFamily="Arial,sans-serif" fillOpacity="0.3">···</text>
    </svg>
  )
}

function ParapetCopingSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      {/* Parapet wall face */}
      <rect x="40" y="76" width="180" height="44" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Coping cap (overhangs both sides) */}
      <rect x="28" y="56" width="204" height="20" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="28" y1="64" x2="232" y2="64" stroke="#071B3B" strokeWidth="0.75" />
      {/* Drip groove (undercut indicator) */}
      <line x1="28" y1="72" x2="50" y2="72" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="2,2" />
      <line x1="210" y1="72" x2="232" y2="72" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="2,2" />
      {/* Red top accent */}
      <rect x="28" y="56" width="204" height="4" fill="#D71920" opacity="0.8" />
      {/* Joint line hint */}
      <line x1="130" y1="56" x2="130" y2="120" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="4,3" />
    </svg>
  )
}

function ColumnCapitalSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      {/* Shaft top (column) */}
      <rect x="96" y="100" width="68" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Echinus (curved transition) */}
      <path d="M 96 100 Q 80 90 70 74 L 190 74 Q 180 90 164 100" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Abacus (flat slab top) */}
      <rect x="56" y="56" width="148" height="18" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Abacus profile line */}
      <line x1="56" y1="64" x2="204" y2="64" stroke="#071B3B" strokeWidth="0.75" />
      {/* Red accent on abacus */}
      <rect x="56" y="56" width="148" height="4" fill="#D71920" opacity="0.8" />
      {/* Volute hints */}
      <path d="M 82 94 Q 76 88 80 82 Q 84 78 90 82" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 178 94 Q 184 88 180 82 Q 176 78 170 82" fill="none" stroke="#071B3B" strokeWidth="0.75" />
    </svg>
  )
}

function EntranceArchSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      {/* Left pier */}
      <rect x="38" y="44" width="42" height="80" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Right pier */}
      <rect x="180" y="44" width="42" height="80" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Arch arc (semicircle) */}
      <path d="M 80 104 L 80 68 A 50 50 0 0 1 180 68 L 180 104" fill="#EEF0F5" stroke="#071B3B" strokeWidth="2" />
      {/* Arch voussoirs hint */}
      <path d="M 80 70 A 52 52 0 0 1 180 70" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      {/* Keystone (red) */}
      <path d="M 122 44 L 130 56 L 138 44 Z" fill="#D71920" stroke="white" strokeWidth="1" opacity="0.9" />
      {/* Impost line */}
      <line x1="38" y1="70" x2="80" y2="70" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="180" y1="70" x2="222" y2="70" stroke="#071B3B" strokeWidth="0.75" />
    </svg>
  )
}

// ─── Component detail data ────────────────────────────────────────────────────

const DOME_COMPONENTS: ComponentDetail[] = [
  {
    id: 'main-dome',
    title: 'Main Dome',
    shortDescription: 'The primary GFRC/GRC dome element — hemisphere geometry, drum section, and finial crown. Defines the skyline presence of the building.',
    tags: ['GFRC Dome', 'Structural Element', 'Heritage', 'Landmark'],
    image: '/images/packages/villa-palace-architectural.webp',
    imageAlt: 'GFRC/GRC architectural domes on heritage villa and palace buildings',
    CardIllustration: DomeSVG,
    HotspotDiagram: DomesHeritageFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Dome Crown / Upper Curve', description: 'The topmost surface and finial point — defines the skyline apex and overall dome silhouette.' },
      { letter: 'B', label: 'Dome Base Cornice', description: 'The cornice profile at the base of the dome — transition from dome face to drum below.' },
      { letter: 'C', label: 'Drum Decorative Band', description: 'Horizontal feature wrapping the drum perimeter — often echoes the main frieze below.' },
      { letter: 'D', label: 'Parapet Relationship', description: 'How the dome visually relates to the flanking parapet elements at the same level.' },
      { letter: 'E', label: 'Entry Axis Alignment', description: 'The visual axis connecting the arch crown below to the dome crown above — proportion reference.' },
      { letter: 'F', label: 'Column-to-Dome Scale', description: 'The vertical proportion relationship between column capital height and dome base — classical proportion reference.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'cornice-profile',
    title: 'Cornice Profile',
    shortDescription: 'Horizontal GFRC/GRC cornice band — fascia, cyma, bed mold, and soffit. Establishes the primary shadow line and facade proportion.',
    tags: ['GFRC Cornice', 'Shadow Line', 'Horizontal Profile', 'Facade Band'],
    image: '/images/packages/villa-palace-architectural.webp',
    imageAlt: 'GFRC/GRC cornice profiles and horizontal facade bands on heritage architecture',
    CardIllustration: CorniceSVG,
    HotspotDiagram: DomesHeritageFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Upper Cornice at Dome', description: 'The cornice profile at dome drum level — the uppermost horizontal member on the facade.' },
      { letter: 'B', label: 'Main Cornice — Primary Shadow', description: 'The principal horizontal cornice: projection depth, fascia, and soffit establish the dominant shadow line.' },
      { letter: 'C', label: 'Cornice-Frieze Interface', description: 'Where the main cornice meets the decorative band below — the lower face of the cornice returns here.' },
      { letter: 'D', label: 'Parapet Coping Profile', description: 'The uppermost cornice element — coping cap on the parapet, sheds water and defines the roofline.' },
      { letter: 'E', label: 'Arch Cornice Return', description: 'The cornice profile returning around the arch opening — establishes visual continuity across the opening.' },
      { letter: 'F', label: 'Capital Line Reference', description: 'The cornice aligns with or responds to the capital abacus line — a key horizontal datum.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'crown-cornice',
    title: 'Crown Cornice',
    shortDescription: 'The uppermost cornice element at roofline or parapet — wider cap projection with complex profile. Defines the architectural crown of the building.',
    tags: ['Crown Element', 'Roofline', 'Top Profile', 'GFRC'],
    image: '/images/packages/villa-palace-architectural.webp',
    imageAlt: 'GFRC/GRC crown cornice at roofline on villa and palace architecture',
    CardIllustration: CrownCorniceSVG,
    HotspotDiagram: DomesHeritageFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Crown Finial Reference', description: 'The crown cornice sits at or near this level — the highest horizontal element on the facade.' },
      { letter: 'B', label: 'Main Crown Projection', description: 'The primary overhang of the crown cornice — projection depth relative to wall face below.' },
      { letter: 'C', label: 'Crown-to-Frieze Return', description: 'How the crown cornice transitions down into the decorative frieze zone below it.' },
      { letter: 'D', label: 'Parapet Cap Connection', description: 'The crown cornice terminates at parapet coping level — their interface and profile continuity.' },
      { letter: 'E', label: 'Crown Arch Surround', description: 'Crown cornice profiles that form arch surrounds or door casings at ground floor entries.' },
      { letter: 'F', label: 'Column Crown Alignment', description: 'The crown cornice aligns with the column abacus — the controlling horizontal datum.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'decorative-band',
    title: 'Decorative Band / Frieze',
    shortDescription: 'Horizontal GFRC/GRC ornamental band — repeating geometric, classical, or bespoke pattern. Adds visual richness and proportion rhythm to the facade.',
    tags: ['Ornamental Band', 'Frieze', 'Repeating Pattern', 'GFRC'],
    image: '/images/packages/villa-palace-architectural.webp',
    imageAlt: 'GFRC/GRC ornamental decorative bands and frieze on heritage facade',
    CardIllustration: DecorativeBandSVG,
    HotspotDiagram: DomesHeritageFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Drum Band — Upper Element', description: 'Decorative band wrapping the dome drum — the upper pattern application on the building.' },
      { letter: 'B', label: 'Cornice-Band Interface', description: 'Where the cornice projection meets the top edge of the decorative frieze — a key joint line.' },
      { letter: 'C', label: 'Primary Frieze Zone', description: 'The main decorative band — pattern repeat unit, relief depth, and height are confirmed here.' },
      { letter: 'D', label: 'Parapet Band Return', description: 'Decorative band continuation at parapet level — smaller repeat or simplified profile.' },
      { letter: 'E', label: 'Spandrel Infill Pattern', description: 'Decorative fill in the arch spandrel zone — pattern often related to the main frieze.' },
      { letter: 'F', label: 'Capital-Level Band', description: 'A subsidiary band at capital level — echoes the main frieze at a different scale.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'parapet-coping',
    title: 'Parapet Coping',
    shortDescription: 'GFRC/GRC coping cap for parapets — overhang, throat/drip detail, and panel joints. Provides weather protection and defines the parapet roofline.',
    tags: ['Parapet', 'Coping', 'Weather Detail', 'GFRC'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'GFRC/GRC parapet coping elements on landmark and government building exterior',
    CardIllustration: ParapetCopingSVG,
    HotspotDiagram: DomesHeritageFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Dome Level Coping', description: 'Coping cap at dome drum level — may feature a rolled or decorative profile to match the dome character.' },
      { letter: 'B', label: 'Cornice Returns to Coping', description: 'Where the main cornice line terminates or returns into the parapet coping at the ends.' },
      { letter: 'C', label: 'Band-Coping Transition', description: 'The decorative band below meets the parapet face — the joint between ornament and coping above.' },
      { letter: 'D', label: 'Primary Parapet Coping', description: 'The main coping cap — overhang dimension, drip groove, slope, and panel joint positions.' },
      { letter: 'E', label: 'Arch Apex Coping', description: 'Coping or keystone cap at the top of an arch opening — may match parapet coping profile.' },
      { letter: 'F', label: 'Column-to-Parapet Height', description: 'The vertical relationship between column capital and parapet coping — proportion reference.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'column-capital',
    title: 'Column Capital Connection',
    shortDescription: 'GFRC/GRC column capital element — abacus, echinus, and decorative body connecting shaft to entablature. Classical or contemporary profile.',
    tags: ['Column Capital', 'Classical Order', 'GFRC Column', 'Entrance Feature'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'GFRC/GRC column capitals and classical column elements on landmark building',
    CardIllustration: ColumnCapitalSVG,
    HotspotDiagram: DomesHeritageFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Capital-to-Dome Proportion', description: 'The vertical proportion from capital abacus to dome base — a key classical proportioning relationship.' },
      { letter: 'B', label: 'Capital Line & Cornice Datum', description: 'The abacus top aligns with or generates the entablature / cornice datum — controlling horizontal.' },
      { letter: 'C', label: 'Capital to Frieze Connection', description: 'The capital top connects to the frieze face — decorative band may align with capital plate.' },
      { letter: 'D', label: 'Capital-Parapet Height', description: 'The height from column capital to parapet coping — defines the apparent floor-to-floor proportion.' },
      { letter: 'E', label: 'Capital Rhythm at Entry', description: 'Column spacing and capital rhythm around the entrance arch — governs the intercolumniation.' },
      { letter: 'F', label: 'Primary Capital Position', description: 'The main column capital — abacus width, echinus curve, decorative body, and shaft junction.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'entrance-arch',
    title: 'Entrance Arch Transition',
    shortDescription: 'GFRC/GRC arch surround for entrance openings — arch ring, keystone, voussoir rhythm, and impost. Creates the primary arrival feature.',
    tags: ['Arch', 'Entrance Feature', 'Keystone', 'GFRC Arch'],
    image: '/images/packages/grand-entrance-gate.webp',
    imageAlt: 'GFRC/GRC entrance arch and keystone on grand monumental gate architecture',
    CardIllustration: EntranceArchSVG,
    HotspotDiagram: DomesHeritageFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Arch-to-Dome Axis', description: 'The visual axis from arch crown to dome crown — the central composition line of the facade.' },
      { letter: 'B', label: 'Arch & Cornice Alignment', description: 'The cornice line intersects with the arch surround — establishing the floor-level relationship.' },
      { letter: 'C', label: 'Arch Spandrel Decoration', description: 'The spandrel zone between arch and frieze — often filled with decorative elements.' },
      { letter: 'D', label: 'Arch-to-Parapet Height', description: 'Vertical proportion from arch crown to parapet top — governs the overall facade scale.' },
      { letter: 'E', label: 'Arch Crown & Keystone', description: 'The crown of the arch — keystone geometry, projection, and decorative detail at the apex.' },
      { letter: 'F', label: 'Arch Impost & Capital', description: 'Where the arch begins its curve — the impost block or capital transitioning to the arch ring.' },
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
  { n: '1', title: 'Receive Drawings', description: 'Architectural elevations, sections, and floor plans submitted for initial technical review.' },
  { n: '2', title: 'Review Elevations & Sections', description: 'Durraka reviews dome geometry, cornice positions, profile rhythm, and ornamental element locations.' },
  { n: '3', title: 'Identify Scope', description: 'Component types, quantities, module dimensions, and special elements are confirmed from the drawing set.' },
  { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each component — coordinated with structure, substrate, and interfaces.' },
  { n: '5', title: 'Confirm Finishes & Samples', description: 'Finish direction, colour references, and sample requirements agreed before manufacturing.' },
  { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC components manufactured, QC inspected, and delivered to project programme.' },
]

// ─── Full page data ───────────────────────────────────────────────────────────

const DOMES_CORNICES_DATA: PremiumPackageData = {
  title: 'Domes & Cornices Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Domes, cornices, and heritage profiles. Engineered in GFRC/GRC.',
  heroDescription:
    'GFRC/GRC domes, cornices, mouldings, and ornamental profiles — manufactured to project-specific design intent for religious, hospitality, and heritage-inspired architectural projects.',
  illustrativeArea: 'Approx. 2,000–6,500 m²',
  visibleComponents: ['Dome elements', 'Cornices', 'Decorative bands', 'Arched openings', 'Parapet coping', 'Column capitals'],
  HeroIllustration: DomesCornicesIllustration,
  packageIntent:
    'This package is designed for projects where the dome, cornice, and ornamental profile form a primary architectural element — mosques, hospitality developments, heritage-inspired institutions, and high-value residential projects. The focus is on geometric intent, proportion, cornice line positioning, and profile rhythm. Durraka works from architectural drawings and reference imagery to define the manufacturing scope, including drum geometry, dome segment details, profile cross-sections, and arched facade elements. Technical review confirms all dimensions and finish requirements before manufacture.',
  suitableApplications: [
    'Mosques and religious facilities',
    'Heritage-inspired hospitality projects',
    'Palaces and government buildings',
    'Luxury residential developments',
    'Cultural centres and museums',
    'Institutional and civic buildings',
  ],
  componentDetails: DOME_COMPONENTS,
  infographics: [
    {
      title: 'Dome Component Overview',
      description: 'Architectural dome features used to create skyline identity, landmark presence, and heritage-inspired roofline expression.',
      image: '/images/packages/villa-palace-architectural.webp',
      imageAlt: 'GFRC/GRC architectural domes — heritage villa and palace facade reference',
    },
    {
      title: 'Cornice Component Overview',
      description: 'Horizontal architectural profiles used at rooflines, parapets, edges, and facade transitions to define shadow lines and proportion.',
      image: '/images/packages/villa-palace-architectural.webp',
      imageAlt: 'GFRC/GRC ornamental cornices and architectural profiles — heritage facade reference',
    },
  ],
  reviewSteps: REVIEW_STEPS,
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function DomesCornicesPackageClient() {
  return <PremiumPackageLayout data={DOMES_CORNICES_DATA} />
}
