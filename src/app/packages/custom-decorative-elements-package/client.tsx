'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData, DesignDiagram } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { CustomDecorativeIllustration } from '@/components/packages/illustrations'

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

function CustomDecorativeFacadeElevation() {
  return (
    <svg viewBox="0 0 760 395" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="760" height="395" fill="#F4F6F9" />
      {/* Ground line */}
      <line x1="55" y1="372" x2="705" y2="372" stroke="#071B3B" strokeWidth="2" />
      {/* Base cladding field */}
      <rect x="90" y="60" width="580" height="310" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Horizontal joint lines */}
      <line x1="90" y1="163" x2="670" y2="163" stroke="#071B3B" strokeWidth="1.2" />
      <line x1="90" y1="266" x2="670" y2="266" stroke="#071B3B" strokeWidth="1.2" />
      {/* Vertical joint lines */}
      <line x1="234" y1="60" x2="234" y2="370" stroke="#071B3B" strokeWidth="1.2" />
      <line x1="380" y1="60" x2="380" y2="370" stroke="#071B3B" strokeWidth="1.2" />
      <line x1="526" y1="60" x2="526" y2="370" stroke="#071B3B" strokeWidth="1.2" />
      {/* Geometric panel zone (top-left) */}
      <rect x="98" y="68" width="128" height="88" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.2" />
      {[0, 1, 2].map(col =>
        [0, 1, 2].map(row => {
          const cx = 120 + col * 40
          const cy = 88 + row * 28
          return (
            <path key={`${col}-${row}`}
              d={`M ${cx} ${cy - 10} L ${cx + 10} ${cy} L ${cx} ${cy + 10} L ${cx - 10} ${cy} Z`}
              fill="none" stroke="#071B3B" strokeWidth="1" />
          )
        })
      )}
      {/* Calligraphic panel zone (top-centre) */}
      <rect x="242" y="68" width="128" height="88" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.2" />
      <path d="M 256 120 Q 280 90 306 100 Q 330 110 348 90 Q 356 82 362 90" fill="none" stroke="#071B3B" strokeWidth="2" />
      <path d="M 260 130 Q 284 105 308 115 Q 326 122 342 108" fill="none" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="268" cy="118" r="5" fill="none" stroke="#071B3B" strokeWidth="1" />
      {/* Identity panel zone (top-right) */}
      <rect x="388" y="68" width="128" height="88" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180
        return (
          <line key={angle}
            x1={452 + 14 * Math.cos(rad)} y1={112 + 14 * Math.sin(rad)}
            x2={452 + 24 * Math.cos(rad)} y2={112 + 24 * Math.sin(rad)}
            stroke="#071B3B" strokeWidth="1.2"
          />
        )
      })}
      <circle cx="452" cy="112" r="8" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="452" cy="112" r="3" fill="#D71920" opacity="0.8" />
      {/* Frame surround zone (centre-left) */}
      <rect x="98" y="171" width="128" height="88" fill="none" stroke="#071B3B" strokeWidth="3" />
      <rect x="108" y="181" width="108" height="68" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="98" cy="171" r="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="226" cy="171" r="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="98" cy="259" r="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="226" cy="259" r="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Ornamental detail zone (centre-centre) */}
      <rect x="242" y="171" width="128" height="88" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="306" cy="215" r="28" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
        const rad = (angle * Math.PI) / 180
        return (
          <line key={angle}
            x1={306 + 18 * Math.cos(rad)} y1={215 + 18 * Math.sin(rad)}
            x2={306 + 24 * Math.cos(rad)} y2={215 + 24 * Math.sin(rad)}
            stroke="#071B3B" strokeWidth="1"
          />
        )
      })}
      <circle cx="306" cy="215" r="6" fill="#D71920" opacity="0.7" />
      {/* Accent feature zone (centre-right) */}
      <rect x="388" y="171" width="128" height="88" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="428" y="183" width="48" height="64" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <polygon points="452,183 452,171 440,183" fill="white" stroke="#071B3B" strokeWidth="1" />
      <polygon points="452,183 452,171 464,183" fill="white" stroke="#071B3B" strokeWidth="1" />
      <rect x="428" y="183" width="48" height="4" fill="#D71920" opacity="0.7" />
      {/* Hotspot A: geometric panel */}
      <line x1="98" y1="112" x2="56" y2="112" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="112" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="117" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">A</text>
      {/* Hotspot B: calligraphic panel */}
      <circle cx="306" cy="112" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="306" y="117" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">B</text>
      {/* Hotspot C: identity panel */}
      <line x1="516" y1="112" x2="560" y2="112" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="573" cy="112" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="573" y="117" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">C</text>
      {/* Hotspot D: frame surround */}
      <line x1="98" y1="215" x2="56" y2="215" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="215" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="220" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">D</text>
      {/* Hotspot E: ornamental detail */}
      <circle cx="306" cy="215" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="306" y="220" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">E</text>
      {/* Hotspot F: accent feature */}
      <line x1="516" y1="215" x2="560" y2="215" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="573" cy="215" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="573" y="220" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">F</text>
      <text x="380" y="390" textAnchor="middle" fill="#071B3B" fontSize="9" fontFamily="Arial, sans-serif" fillOpacity="0.35">ARCHITECTURAL REFERENCE DIAGRAM — NOT TO SCALE — DURRAKA FACTORY FOR INDUSTRY</text>
    </svg>
  )
}

// ─── Card SVGs ────────────────────────────────────────────────────────────────

function GeometricPanelSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map(col =>
        [0, 1, 2].map(row => {
          const cx = 40 + col * 44
          const cy = 34 + row * 34
          return (
            <g key={`${col}-${row}`}>
              <path d={`M ${cx} ${cy - 12} L ${cx + 12} ${cy} L ${cx} ${cy + 12} L ${cx - 12} ${cy} Z`}
                fill="none" stroke="#071B3B" strokeWidth="1.2" />
              <path d={`M ${cx} ${cy - 6} L ${cx + 6} ${cy} L ${cx} ${cy + 6} L ${cx - 6} ${cy} Z`}
                fill="#D4D8E2" stroke="#071B3B" strokeWidth="0.5" />
              <circle cx={cx} cy={cy} r="2" fill="#D71920" opacity="0.6" />
            </g>
          )
        })
      )}
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function CalligraphicPanelSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 34 90 Q 60 50 100 65 Q 140 80 170 45 Q 195 28 220 40" fill="none" stroke="#071B3B" strokeWidth="3" />
      <path d="M 38 100 Q 64 68 102 80 Q 138 92 168 62 Q 192 42 218 52" fill="none" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="52" cy="74" r="5" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="142" cy="80" r="4" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="180" cy="52" r="3" fill="#D71920" opacity="0.7" />
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function IdentityPanelSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="130" cy="68" r="36" fill="none" stroke="#071B3B" strokeWidth="1.5" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
        const rad = (angle * Math.PI) / 180
        return (
          <line key={angle}
            x1={130 + 24 * Math.cos(rad)} y1={68 + 24 * Math.sin(rad)}
            x2={130 + 36 * Math.cos(rad)} y2={68 + 36 * Math.sin(rad)}
            stroke="#071B3B" strokeWidth="1.2"
          />
        )
      })}
      <circle cx="130" cy="68" r="14" fill="none" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="130" cy="68" r="5" fill="#D71920" opacity="0.8" />
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function CustomFrameSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="none" stroke="#071B3B" strokeWidth="5" />
      <rect x="28" y="24" width="204" height="88" fill="none" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 18 14 L 36 24" stroke="#071B3B" strokeWidth="1" />
      <path d="M 242 14 L 224 24" stroke="#071B3B" strokeWidth="1" />
      <path d="M 18 122 L 36 112" stroke="#071B3B" strokeWidth="1" />
      <path d="M 242 122 L 224 112" stroke="#071B3B" strokeWidth="1" />
      <circle cx="18" cy="14" r="8" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="242" cy="14" r="8" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="18" cy="122" r="8" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="242" cy="122" r="8" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="18" y="14" width="224" height="4" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function OrnamentalDetailSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="130" cy="68" r="36" fill="white" stroke="#071B3B" strokeWidth="2" />
      <circle cx="130" cy="68" r="28" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <circle cx="130" cy="68" r="18" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180
        const x1 = 130 + 18 * Math.cos(rad)
        const y1 = 68 + 18 * Math.sin(rad)
        const x2 = 130 + 28 * Math.cos(rad)
        const y2 = 68 + 28 * Math.sin(rad)
        return (
          <path key={angle}
            d={`M ${x1} ${y1} Q ${(x1 + x2) / 2 + 4 * Math.sin(rad)} ${(y1 + y2) / 2 - 4 * Math.cos(rad)} ${x2} ${y2}`}
            fill="none" stroke="#071B3B" strokeWidth="1" />
        )
      })}
      <circle cx="130" cy="68" r="6" fill="#D71920" opacity="0.8" />
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function AccentFeatureSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="100" y="30" width="60" height="76" fill="white" stroke="#071B3B" strokeWidth="2" />
      <polygon points="130,30 130,14 116,30" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <polygon points="130,30 130,14 144,30" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <polygon points="100,106 88,118 100,106" fill="white" stroke="#071B3B" strokeWidth="1" />
      <polygon points="160,106 172,118 160,106" fill="white" stroke="#071B3B" strokeWidth="1" />
      <rect x="100" y="30" width="60" height="4" fill="#D71920" opacity="0.8" />
      <line x1="100" y1="58" x2="160" y2="58" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="100" y1="80" x2="160" y2="80" stroke="#071B3B" strokeWidth="0.75" />
    </svg>
  )
}

function CivicIdentitySVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 80 110 L 80 50 Q 130 28 180 50 L 180 110 Z" fill="none" stroke="#071B3B" strokeWidth="2" />
      <path d="M 90 110 L 90 56 Q 130 38 170 56 L 170 110 Z" fill="none" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="3,2" />
      <line x1="80" y1="80" x2="180" y2="80" stroke="#071B3B" strokeWidth="1" />
      <line x1="105" y1="50" x2="105" y2="110" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="130" y1="40" x2="130" y2="110" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="155" y1="50" x2="155" y2="110" stroke="#071B3B" strokeWidth="0.75" />
      <circle cx="130" cy="66" r="8" fill="none" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="130" cy="66" r="3" fill="#D71920" opacity="0.8" />
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

// ─── Component data ───────────────────────────────────────────────────────────

const DECORATIVE_COMPONENTS: ComponentDetail[] = [
  {
    id: 'decorative-geometric-panel',
    title: 'Decorative Geometric Panel',
    shortDescription: 'Panel with geometric pattern in relief — diamond lattice, interlocking geometry, or custom repeat motif adding visual depth to the facade.',
    tags: ['Geometric Panel', 'Decorative', 'Relief Pattern', 'GFRC'],
    image: '/images/packages/custom-architectural-components.webp',
    imageAlt: 'Custom GFRC/GRC geometric decorative panels with relief pattern on facade',
    CardIllustration: GeometricPanelSVG,
    HotspotDiagram: CustomDecorativeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Panel Face', description: 'The flat background of panel from which pattern projects.' },
      { letter: 'B', label: 'Pattern Repeat', description: 'Base geometric unit — size and orientation.' },
      { letter: 'C', label: 'Relief Depth', description: 'How far pattern projects from panel face — determines shadow.' },
      { letter: 'D', label: 'Panel Border', description: 'Edge frame or border terminating the pattern field.' },
      { letter: 'E', label: 'Panel Module', description: 'Individual panel size — how many fit in the facade zone.' },
      { letter: 'F', label: 'Finish Reference', description: 'Panel face and relief surface color — confirmed from approved sample.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'calligraphy-panel',
    title: 'Calligraphy-Inspired Panel',
    shortDescription: 'Panel with flowing calligraphic surface element — cultural identity through architectural relief without disclosing specific project content.',
    tags: ['Calligraphic', 'Cultural Element', 'Bespoke', 'GFRC'],
    image: '/images/packages/heritage-regional.webp',
    imageAlt: 'Custom GFRC/GRC calligraphy-inspired bespoke panels on architectural facade',
    CardIllustration: CalligraphicPanelSVG,
    HotspotDiagram: CustomDecorativeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Calligraphic Stroke', description: 'The main flowing line — its width, depth, and visual weight.' },
      { letter: 'B', label: 'Background Field', description: 'The plain or textured panel surface behind the element.' },
      { letter: 'C', label: 'Stroke Relief', description: 'How far the stroke element projects — bold or subtle.' },
      { letter: 'D', label: 'Compositional Balance', description: 'How the element sits centered or dynamically within panel.' },
      { letter: 'E', label: 'Panel Scale', description: 'Panel size relative to calligraphic element — viewed at what distance.' },
      { letter: 'F', label: 'Finish Reference', description: 'Stroke color/texture vs panel background.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'identity-panel',
    title: 'Project Identity / Signage Panel',
    shortDescription: 'Panel carrying identity or civic feature — a single prominent motif at a scale appropriate to the building and viewing distance.',
    tags: ['Identity Panel', 'Feature Element', 'Civic', 'GFRC'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'Custom GFRC/GRC identity and signage panels on architectural facade',
    CardIllustration: IdentityPanelSVG,
    HotspotDiagram: CustomDecorativeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Motif Centre', description: 'The primary identity mark — its geometric composition.' },
      { letter: 'B', label: 'Background Field', description: 'The plain field framing the identity element.' },
      { letter: 'C', label: 'Relief Depth', description: 'Depth of identity element projection for legibility.' },
      { letter: 'D', label: 'Panel Position', description: 'Where identity panel sits in the overall composition.' },
      { letter: 'E', label: 'Lighting Consideration', description: 'How the element reads under raking or ambient light.' },
      { letter: 'F', label: 'Finish Reference', description: 'Identity element and field color.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'custom-frame',
    title: 'Custom Architectural Frame / Surround',
    shortDescription: 'Ornamental frame element — profiled jambs, head, and decorative corners creating a formal surround for openings, panels, or feature zones.',
    tags: ['Custom Frame', 'Surround', 'Ornamental Border', 'GFRC'],
    image: '/images/packages/villa-palace-architectural.webp',
    imageAlt: 'Custom GFRC/GRC architectural frame and ornamental surround elements',
    CardIllustration: CustomFrameSVG,
    HotspotDiagram: CustomDecorativeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Frame Crown', description: 'Top member — may have special ornamental feature.' },
      { letter: 'B', label: 'Jamb Profile', description: 'Side members — their cross-section and decorative detail.' },
      { letter: 'C', label: 'Corner Treatment', description: 'Corner rosette, block, or special detail element.' },
      { letter: 'D', label: 'Frame Projection', description: 'How much frame projects from surrounding wall surface.' },
      { letter: 'E', label: 'Opening Size', description: 'The framed opening or panel area within the surround.' },
      { letter: 'F', label: 'Finish Reference', description: 'Frame color/texture vs surrounding facade.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'ornamental-detail',
    title: 'Special Ornamental Detail',
    shortDescription: 'Standalone decorative object or relief — rosette, boss, acanthus, or geometric form applied at accent positions on the facade or frame.',
    tags: ['Ornamental', 'Relief Detail', 'Applied Element', 'GFRC'],
    image: '/images/packages/grand-entrance-gate.webp',
    imageAlt: 'GFRC/GRC special ornamental relief details on heritage villa and palace architecture',
    CardIllustration: OrnamentalDetailSVG,
    HotspotDiagram: CustomDecorativeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Ornament Body', description: 'Main form — rosette, boss, acanthus, or geometric.' },
      { letter: 'B', label: 'Relief Character', description: 'Depth and modelling of the ornamental form.' },
      { letter: 'C', label: 'Ornament Scale', description: 'Size relative to surrounding facade — focal or background.' },
      { letter: 'D', label: 'Background Integration', description: 'How the element is applied to or integrated with surrounding panel.' },
      { letter: 'E', label: 'Element Repeat', description: 'Whether single accent or repeating pattern.' },
      { letter: 'F', label: 'Finish Reference', description: 'Ornament color vs field.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'facade-accent-feature',
    title: 'Facade Accent Feature',
    shortDescription: 'Prominent standalone accent element — keyblock, console, or projecting form creating shadow depth and visual emphasis at key facade positions.',
    tags: ['Accent Element', 'Feature', 'Facade Detail', 'GFRC'],
    image: '/images/packages/hospitality-commercial.webp',
    imageAlt: 'Custom GFRC/GRC facade accent features and decorative architectural elements',
    CardIllustration: AccentFeatureSVG,
    HotspotDiagram: CustomDecorativeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Feature Position', description: 'Where the accent element sits on the facade.' },
      { letter: 'B', label: 'Feature Profile', description: 'Cross-section or elevation form of the accent.' },
      { letter: 'C', label: 'Feature Scale', description: 'Visual weight relative to surrounding facade elements.' },
      { letter: 'D', label: 'Shadow Play', description: 'The shadow pattern the element creates — at what time of day.' },
      { letter: 'E', label: 'Structure Interface', description: 'How accent element attaches to facade substrate.' },
      { letter: 'F', label: 'Finish Reference', description: 'Accent element vs field contrast.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'civic-identity-element',
    title: 'Civic / Institutional Identity Element',
    shortDescription: 'Formal architectural element carrying civic or institutional identity — shield form, formal panel, or structured geometric composition for public buildings.',
    tags: ['Civic Element', 'Institutional', 'Identity Feature', 'GFRC'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'GFRC/GRC civic and institutional identity elements on landmark government building',
    CardIllustration: CivicIdentitySVG,
    HotspotDiagram: CustomDecorativeFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Identity Zone', description: 'The primary area carrying the identity element.' },
      { letter: 'B', label: 'Geometric Composition', description: 'The formal structure of the civic element.' },
      { letter: 'C', label: 'Scale Reference', description: 'Size relative to building — readable at what distance.' },
      { letter: 'D', label: 'Symmetry Axis', description: 'Central axis of composition — alignment precision.' },
      { letter: 'E', label: 'Surround Treatment', description: 'Framing or border of the civic element.' },
      { letter: 'F', label: 'Finish Reference', description: 'Approved color palette for civic usage.' },
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
  { n: '1', title: 'Receive Design Intent', description: 'Architectural drawings, design intent images, and bespoke element descriptions submitted for initial review.' },
  { n: '2', title: 'Review Custom Elements', description: 'Durraka reviews each decorative element — geometry, scale, relief depth, and facade position.' },
  { n: '3', title: 'Confirm Relief, Scale & Geometry', description: 'Motif form, projection depth, panel size, and interface conditions confirmed against design intent.' },
  { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each bespoke component — coordinated with facade substrate and structure.' },
  { n: '5', title: 'Sample Approval', description: 'Physical sample or prototype submitted for approval — finish, relief depth, and motif confirmed.' },
  { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC decorative components manufactured, QC inspected, and delivered to programme.' },
]

// ─── Package data ─────────────────────────────────────────────────────────────

// Schematic design-intent composition — an ornament board: geometric,
// calligraphic, and identity panels within a decorative surround, a horizontal
// accent band, a relief medallion, and a civic identity element.
const CUSTOM_DECORATIVE_DIAGRAM: DesignDiagram = {
  kind: 'elevation',
  viewBox: '0 0 400 300',
  shapes: [
    { kind: 'rect', x: 56, y: 40, w: 288, h: 232 }, // wall zone
    { kind: 'rect', x: 66, y: 50, w: 268, h: 212 }, // decorative surround (4)
    { kind: 'rect', x: 56, y: 150, w: 288, h: 20, fill: true }, // accent band (6)
    { kind: 'rect', x: 74, y: 58, w: 80, h: 72 }, // geometric panel (1)
    { kind: 'line', x1: 74, y1: 58, x2: 154, y2: 130 },
    { kind: 'line', x1: 154, y1: 58, x2: 74, y2: 130 },
    { kind: 'rect', x: 166, y: 58, w: 80, h: 72 }, // calligraphy panel (2)
    { kind: 'path', d: 'M176 100 C190 82 200 108 214 92 C226 80 234 104 240 96' },
    { kind: 'rect', x: 258, y: 58, w: 72, h: 72 }, // identity / signage panel (3)
    { kind: 'circle', cx: 294, cy: 94, r: 16 },
    { kind: 'circle', cx: 200, cy: 205, r: 26 }, // medallion (5)
    { kind: 'circle', cx: 200, cy: 205, r: 13, accent: true },
    { kind: 'polyline', points: '90 190 130 190 130 208 110 224 90 208 90 190' }, // civic element (7)
  ],
  callouts: [
    { n: 1, label: 'Decorative Geometric Panel', x: 114, y: 94 },
    { n: 2, label: 'Calligraphy-Inspired Panel', x: 206, y: 76 },
    { n: 3, label: 'Project Identity / Signage Panel', x: 294, y: 94 },
    { n: 4, label: 'Custom Architectural Frame / Surround', x: 320, y: 250 },
    { n: 5, label: 'Special Ornamental Detail', x: 200, y: 205 },
    { n: 6, label: 'Facade Accent Feature', x: 300, y: 160 },
    { n: 7, label: 'Civic / Institutional Identity Element', x: 110, y: 205 },
  ],
}

const CUSTOM_DECORATIVE_DATA: PremiumPackageData = {
  slug: 'custom-decorative-elements-package',
  designDiagram: CUSTOM_DECORATIVE_DIAGRAM,
  title: 'Custom Decorative Elements Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Bespoke ornamental elements. Engineered in GFRC/GRC.',
  heroDescription:
    'Project-specific GFRC/GRC decorative panels, calligraphy-inspired features, identity elements, custom frames, and bespoke architectural details — manufactured to unique design drawings.',
  illustrativeArea: 'Bespoke ornament & identity',
  visibleComponents: ['Decorative panels', 'Custom ornaments', 'Identity features', 'Calligraphy-inspired panels', 'Special frames', 'Bespoke facade details'],
  HeroIllustration: CustomDecorativeIllustration,
  packageIntent:
    'This package is designed for projects that require bespoke decorative GFRC/GRC elements beyond standard facade cladding — custom ornamental panels, identity features, calligraphy-inspired surfaces, civic signage elements, and architecturally significant detail work. Each element is scoped from project-specific design drawings and confirmed during the technical review process.',
  suitableApplications: [
    'Civic landmarks and cultural institutions',
    'Hospitality and destination developments',
    'Religious and heritage facilities',
    'Government and institutional buildings',
    'Luxury residential and villa projects',
    'Mixed-use developments with identity features',
  ],
  componentDetails: DECORATIVE_COMPONENTS,
  infographics: [
    {
      title: 'Custom Decorative Elements Component Overview',
      description: 'Bespoke GFRC/GRC decorative panels, ornamental relief elements, repeating motifs, and project-specific geometry — produced to custom design drawings for any architectural context.',
      image: '/images/packages/custom-architectural-components.webp',
      imageAlt: 'Custom GFRC/GRC decorative elements — bespoke architectural components facade reference',
    },
  ],
  reviewSteps: REVIEW_STEPS,
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function CustomDecorativePackageClient() {
  return <PremiumPackageLayout data={CUSTOM_DECORATIVE_DATA} />
}
