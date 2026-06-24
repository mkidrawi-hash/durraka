'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { ColumnsCapitalsIllustration } from '@/components/packages/illustrations'

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

function ColumnsColonnadeFacadeElevation() {
  return (
    <svg viewBox="0 0 760 395" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="760" height="395" fill="#F4F6F9" />
      {/* Ground line */}
      <line x1="55" y1="372" x2="705" y2="372" stroke="#071B3B" strokeWidth="2" />
      {/* Column bases */}
      <rect x="108" y="350" width="54" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="108" y="342" width="54" height="10" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="353" y="350" width="54" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="353" y="342" width="54" height="10" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="598" y="350" width="54" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="598" y="342" width="54" height="10" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Column shafts */}
      <rect x="120" y="182" width="30" height="162" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="128" y1="182" x2="128" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <line x1="135" y1="182" x2="135" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <line x1="142" y1="182" x2="142" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <rect x="365" y="182" width="30" height="162" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="373" y1="182" x2="373" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <line x1="380" y1="182" x2="380" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <line x1="387" y1="182" x2="387" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <rect x="610" y="182" width="30" height="162" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="618" y1="182" x2="618" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <line x1="625" y1="182" x2="625" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <line x1="632" y1="182" x2="632" y2="342" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      {/* Column capitals */}
      <rect x="108" y="162" width="54" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="108" y1="172" x2="162" y2="172" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 120 184 Q 108 178 108 172 L 162 172 Q 162 178 150 184" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="353" y="162" width="54" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="353" y1="172" x2="407" y2="172" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 365 184 Q 353 178 353 172 L 407 172 Q 407 178 395 184" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="598" y="162" width="54" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="598" y1="172" x2="652" y2="172" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 610 184 Q 598 178 598 172 L 652 172 Q 652 178 640 184" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      {/* Entablature */}
      <rect x="90" y="130" width="580" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="90" y="144" width="580" height="18" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="86" y="114" width="588" height="16" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="86" y1="120" x2="674" y2="120" stroke="#071B3B" strokeWidth="0.75" />
      {/* Arch between first two columns */}
      <path d="M 162 344 L 162 252 A 91 91 0 0 1 353 252 L 353 344" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 162 252 A 93 93 0 0 1 353 252" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 251 161 L 258 174 L 265 161 Z" fill="#071B3B" fillOpacity="0.35" />
      {/* Spandrel panel between right two columns */}
      <rect x="410" y="162" width="186" height="180" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.2" />
      {[435, 465, 495, 525, 555].map(x => (
        <line key={x} x1={x} y1="162" x2={x} y2="342" stroke="#071B3B" strokeWidth="0.5" strokeDasharray="3,3" />
      ))}
      <path d="M 502 220 L 514 232 L 502 244 L 490 232 Z" fill="none" stroke="#071B3B" strokeWidth="1" />
      <circle cx="502" cy="232" r="4" fill="#D71920" opacity="0.7" />
      {/* Hotspot A: column crown */}
      <line x1="135" y1="162" x2="135" y2="100" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="135" cy="87" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="135" y="92" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">A</text>
      {/* Hotspot B: entablature */}
      <line x1="674" y1="122" x2="704" y2="122" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="717" cy="122" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="717" y="127" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">B</text>
      {/* Hotspot C: arch keystone */}
      <circle cx="258" cy="168" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="258" y="173" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">C</text>
      {/* Hotspot D: column base */}
      <line x1="108" y1="356" x2="56" y2="356" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="356" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="361" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">D</text>
      {/* Hotspot E: spandrel panel */}
      <circle cx="502" cy="232" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="502" y="237" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">E</text>
      {/* Hotspot F: column axis */}
      <circle cx="380" cy="384" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="380" y="389" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">F</text>
      <text x="380" y="408" textAnchor="middle" fill="#071B3B" fontSize="9" fontFamily="Arial, sans-serif" fillOpacity="0.35">ARCHITECTURAL REFERENCE DIAGRAM — NOT TO SCALE — DURRAKA FACTORY FOR INDUSTRY</text>
    </svg>
  )
}

// ─── Card SVGs ────────────────────────────────────────────────────────────────

function ColumnShaftSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="105" y="112" width="50" height="12" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="108" y="18" width="44" height="96" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="116" y1="18" x2="116" y2="112" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,3" />
      <line x1="123" y1="18" x2="123" y2="112" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,3" />
      <line x1="130" y1="18" x2="130" y2="112" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,3" />
      <line x1="137" y1="18" x2="137" y2="112" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,3" />
      <line x1="144" y1="18" x2="144" y2="112" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,3" />
      <rect x="102" y="14" width="56" height="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="102" y="8" width="56" height="4" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function CapitalSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="96" y="100" width="68" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 96 100 Q 80 90 70 74 L 190 74 Q 180 90 164 100" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="56" y="56" width="148" height="18" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="56" y1="64" x2="204" y2="64" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="56" y="56" width="148" height="4" fill="#D71920" opacity="0.8" />
      <path d="M 82 94 Q 76 88 80 82 Q 84 78 90 82" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 178 94 Q 184 88 180 82 Q 176 78 170 82" fill="none" stroke="#071B3B" strokeWidth="0.75" />
    </svg>
  )
}

function ColumnBaseSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="96" y="18" width="68" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="86" y="40" width="88" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="86" y1="47" x2="174" y2="47" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="96" y="54" width="68" height="12" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="86" y="66" width="88" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="86" y1="73" x2="174" y2="73" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="76" y="80" width="108" height="28" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="76" y="80" width="108" height="4" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function PilasterSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="30" y="18" width="200" height="100" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="112" y="18" width="36" height="100" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="108" y="10" width="44" height="10" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="108" y1="15" x2="152" y2="15" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="108" y="116" width="44" height="10" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="108" y="10" width="44" height="3" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function ArchColonnadeSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="28" y="40" width="36" height="84" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="196" y="40" width="36" height="84" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 64 124 L 64 76 A 66 66 0 0 1 196 76 L 196 124" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 64 76 A 68 68 0 0 1 196 76" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 122 26 L 130 40 L 138 26 Z" fill="#D71920" stroke="white" strokeWidth="1" opacity="0.9" />
      <line x1="28" y1="76" x2="64" y2="76" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="196" y1="76" x2="232" y2="76" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="28" y="28" width="204" height="14" fill="white" stroke="#071B3B" strokeWidth="1.2" />
      <line x1="28" y1="35" x2="232" y2="35" stroke="#071B3B" strokeWidth="0.6" />
    </svg>
  )
}

function EntablatureSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="20" y="100" width="220" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="16" y="78" width="228" height="22" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      {[40, 70, 100, 130, 160, 190, 220].map(x => (
        <line key={x} x1={x} y1="78" x2={x} y2="100" stroke="#071B3B" strokeWidth="0.6" />
      ))}
      <rect x="12" y="58" width="236" height="20" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="12" y1="66" x2="248" y2="66" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 12 58 Q 12 46 24 46 L 236 46 Q 248 46 248 58" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="12" y="46" width="236" height="4" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function SpandrelPanelSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <path d="M 20 120 L 20 68 A 110 110 0 0 1 240 68 L 240 120 Z" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 36 120 L 36 74 A 94 94 0 0 1 224 74 L 224 120 Z" fill="#EEF0F5" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="3,2" />
      <path d="M 110 60 L 122 72 L 130 60 L 138 72 L 150 60" fill="none" stroke="#071B3B" strokeWidth="1" />
      <circle cx="130" cy="88" r="14" fill="none" stroke="#071B3B" strokeWidth="1" />
      <circle cx="130" cy="88" r="6" fill="#D71920" opacity="0.7" />
      <rect x="20" y="14" width="220" height="10" fill="white" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="20" y="14" width="220" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

// ─── Component data ───────────────────────────────────────────────────────────

const COLUMNS_COMPONENTS: ComponentDetail[] = [
  {
    id: 'column-shaft',
    title: 'Column Shaft',
    shortDescription: 'Round or square column shaft, plain or fluted. The primary vertical element of a colonnade — defines height, diameter, and facade rhythm.',
    tags: ['GFRC Column', 'Column Shaft', 'Round Section', 'Classical'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'GFRC/GRC classical column shafts on landmark government building facade',
    CardIllustration: ColumnShaftSVG,
    HotspotDiagram: ColumnsColonnadeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Shaft Crown', description: 'Top of shaft where capital begins — controls shaft height datum and capital alignment.' },
      { letter: 'B', label: 'Entasis', description: 'Subtle outward curve along shaft — classical proportioning device for visual correction.' },
      { letter: 'C', label: 'Module Rhythm', description: 'Column-to-column spacing across the colonnade bay — intercolumniation reference.' },
      { letter: 'D', label: 'Shaft Base', description: 'Where shaft meets base — section transition and plinth alignment.' },
      { letter: 'E', label: 'Fluting Reference', description: 'Direction and count of fluted channels if applicable to the design.' },
      { letter: 'F', label: 'Finish Reference', description: 'Color and surface texture of the shaft face — confirmed against approved sample.' },
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
    title: 'Column Capital',
    shortDescription: 'Corinthian, Ionic, or contemporary capital — the ornamental head connecting shaft to entablature. Defines the architectural order of the colonnade.',
    tags: ['Capital', 'Classical Order', 'Corinthian', 'GFRC Capital'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'GFRC/GRC Corinthian capitals and classical column elements on landmark building',
    CardIllustration: CapitalSVG,
    HotspotDiagram: ColumnsColonnadeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Abacus', description: 'Flat top slab transitioning to entablature — controlling horizontal datum of the colonnade.' },
      { letter: 'B', label: 'Capital Body', description: 'Main ornamental zone — acanthus, volutes, or geometric form defining the order.' },
      { letter: 'C', label: 'Echinus', description: 'Lower curved transition connecting capital body to shaft — classical proportioning.' },
      { letter: 'D', label: 'Shaft Junction', description: 'Capital base meets shaft top — no visible joint line desired.' },
      { letter: 'E', label: 'Capital Width', description: 'Abacus width relative to shaft diameter — proportion check.' },
      { letter: 'F', label: 'Finish Reference', description: 'Capital surface detail and pigment — confirmed from project specification.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'column-base',
    title: 'Column Base / Plinth',
    shortDescription: 'Base mouldings and plinth block — the transitional element between column shaft and floor. Establishes the classical base assembly profile.',
    tags: ['Column Base', 'Plinth', 'Base Moulding', 'GFRC'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'GFRC/GRC column base and plinth mouldings on government building facade',
    CardIllustration: ColumnBaseSVG,
    HotspotDiagram: ColumnsColonnadeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Base Crown', description: 'Upper torus moulding — top of base assembly transitioning to shaft.' },
      { letter: 'B', label: 'Scotia', description: 'Concave between-moulding — creates shadow line and visual separation.' },
      { letter: 'C', label: 'Lower Torus', description: 'Lower convex moulding — sits on plinth block.' },
      { letter: 'D', label: 'Plinth Block', description: 'Flat square base pad — sets the column on the floor or pedestal.' },
      { letter: 'E', label: 'Height Reference', description: 'Total base height relative to column shaft height — proportion reference.' },
      { letter: 'F', label: 'Finish Reference', description: 'Pigment and surface matching shaft above — confirmed from sample.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'pilaster',
    title: 'Pilaster',
    shortDescription: 'Flat column element applied to wall surface — provides classical rhythm and visual depth without a freestanding column.',
    tags: ['Pilaster', 'Flat Column', 'Wall Element', 'GFRC'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'GFRC/GRC pilasters on landmark government building facade wall',
    CardIllustration: PilasterSVG,
    HotspotDiagram: ColumnsColonnadeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Pilaster Capital', description: 'Decorative head detail — matches column capital or simplified version.' },
      { letter: 'B', label: 'Pilaster Face', description: 'The projecting flat face — projection depth from wall surface.' },
      { letter: 'C', label: 'Pilaster Width', description: 'Width in proportion to wall bay and intercolumniation.' },
      { letter: 'D', label: 'Plinth Base', description: 'Pilaster base detail matching floor line.' },
      { letter: 'E', label: 'Wall Interface', description: 'How pilaster edges meet surrounding cladding panels.' },
      { letter: 'F', label: 'Finish Reference', description: 'Surface and colour — confirmed from project specification.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'arched-colonnade-bay',
    title: 'Arched Colonnade Bay',
    shortDescription: 'Arched opening spanning between columns — creating the primary arcade bay of an entrance colonnade or portico.',
    tags: ['Colonnade', 'Arched Bay', 'Arcade', 'GFRC Arch'],
    image: '/images/packages/grand-entrance-gate.webp',
    imageAlt: 'GFRC/GRC arched colonnade bay and arcade on monumental entrance architecture',
    CardIllustration: ArchColonnadeSVG,
    HotspotDiagram: ColumnsColonnadeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Arch Crown', description: 'Keystone at arch apex — profile and projection.' },
      { letter: 'B', label: 'Arch Soffit', description: 'Inner curved face of arch — depth and profile detail.' },
      { letter: 'C', label: 'Column Spacing', description: 'Clear dimension between shaft faces — intercolumniation.' },
      { letter: 'D', label: 'Impost Block', description: 'Capital top or separate block receiving arch thrust.' },
      { letter: 'E', label: 'Arch Rise', description: 'Proportion of arch height to span width.' },
      { letter: 'F', label: 'Finish Reference', description: 'Arch and column matching or contrasting finishes.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'entablature',
    title: 'Entablature / Beam Element',
    shortDescription: 'The horizontal element above columns — comprising architrave, frieze, and cornice. Ties the colonnade and establishes the roofline datum.',
    tags: ['Entablature', 'Architrave', 'Frieze Beam', 'GFRC'],
    image: '/images/packages/villa-palace-architectural.webp',
    imageAlt: 'GFRC/GRC entablature and frieze beam elements on heritage palace architecture',
    CardIllustration: EntablatureSVG,
    HotspotDiagram: ColumnsColonnadeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Cornice Top', description: 'Upper cornice cap — projection and profile.' },
      { letter: 'B', label: 'Frieze Zone', description: 'Middle band — plain or decorated.' },
      { letter: 'C', label: 'Architrave', description: 'Lower flat beam resting on columns.' },
      { letter: 'D', label: 'Cornice Projection', description: 'How far entablature projects past column face.' },
      { letter: 'E', label: 'Module Alignment', description: 'How entablature aligns with column centres.' },
      { letter: 'F', label: 'Finish Reference', description: 'Surface and colour relative to columns.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'decorative-spandrel-panel',
    title: 'Decorative Spandrel Panel',
    shortDescription: 'Ornamental panel filling the arch spandrel zone — geometric, floral, or custom relief enriching the arcade or colonnade composition.',
    tags: ['Spandrel', 'Decorative Panel', 'Arch Fill', 'GFRC'],
    image: '/images/packages/custom-architectural-components.webp',
    imageAlt: 'Custom GFRC/GRC decorative spandrel panels and ornamental arch fill elements',
    CardIllustration: SpandrelPanelSVG,
    HotspotDiagram: ColumnsColonnadeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Spandrel Zone', description: 'The curved infill area between arch and surrounding frame.' },
      { letter: 'B', label: 'Panel Motif', description: 'The decorative pattern or relief — its scale and depth.' },
      { letter: 'C', label: 'Panel Edge', description: 'How panel edges meet arch profile and surrounding elements.' },
      { letter: 'D', label: 'Relief Depth', description: 'Projection of decorative elements from panel face.' },
      { letter: 'E', label: 'Panel Joint', description: 'Module lines within the spandrel if multiple panels.' },
      { letter: 'F', label: 'Finish Reference', description: 'Surface and pigment confirmed from project specification.' },
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
  { n: '1', title: 'Receive Drawings', description: 'Architectural elevations, sections, and plan drawings submitted for initial technical review.' },
  { n: '2', title: 'Review Elevation & Section', description: 'Durraka reviews column heights, capital styles, base profiles, and colonnade bay dimensions.' },
  { n: '3', title: 'Confirm Column & Capital Profile', description: 'Capital order, shaft diameter, fluting, and base moulding confirmed against the drawing set.' },
  { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each component — coordinated with structure, substrate, and interfaces.' },
  { n: '5', title: 'Confirm Finish & Sample', description: 'Finish direction, colour references, and sample requirements agreed before manufacturing.' },
  { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC components manufactured, QC inspected, and delivered to project programme.' },
]

// ─── Package data ─────────────────────────────────────────────────────────────

const COLUMNS_CAPITALS_DATA: PremiumPackageData = {
  title: 'Columns & Capitals Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Colonnades, pilasters, and capitals. Engineered in GFRC/GRC.',
  heroDescription:
    'GFRC/GRC columns, capitals, bases, and pilasters — manufactured to architectural drawings for classical, heritage, and contemporary building entrances, colonnades, and facades.',
  illustrativeArea: 'Approx. 800–2,500 m²',
  visibleComponents: ['Column shafts', 'Capitals', 'Bases', 'Pilasters', 'Arched colonnades', 'Decorative panels'],
  HeroIllustration: ColumnsCapitalsIllustration,
  packageIntent:
    'This package is designed for projects that feature columns, pilasters, or colonnades as a primary architectural element. The scope covers the full column assembly — base, shaft, and capital — along with associated pilasters, arched bays, and decorative panel elements. Each column is dimensioned and profiled from the submitted architectural drawings. Durraka works with the project team to confirm the capital style, shaft diameter, fluting or plain finish, and integration with surrounding entablature and base course elements.',
  suitableApplications: [
    'Entrance colonnades and porticos',
    'Luxury villas and private residences',
    'Hotels and hospitality developments',
    'Government and institutional buildings',
    'Heritage and classical architecture',
    'Cultural centres and mixed-use developments',
  ],
  componentDetails: COLUMNS_COMPONENTS,
  infographics: [
    {
      title: 'Column & Capital Component Overview',
      description: 'Vertical architectural elements used at entrances, arcades, porticos, and facade features to create rhythm, formality, and decorative character.',
      image: '/images/packages/landmark-government-facade.webp',
      imageAlt: 'GFRC/GRC columns and capitals — landmark government building facade reference',
    },
  ],
  reviewSteps: REVIEW_STEPS,
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function ColumnsCapitalsPackageClient() {
  return <PremiumPackageLayout data={COLUMNS_CAPITALS_DATA} />
}
