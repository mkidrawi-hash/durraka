'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { MashrabiyaScreenIllustration } from '@/components/packages/illustrations'

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

function MashrabiyaFacadeElevation() {
  return (
    <svg viewBox="0 0 760 395" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="760" height="395" fill="#F4F6F9" />
      {/* Ground line */}
      <line x1="55" y1="372" x2="705" y2="372" stroke="#071B3B" strokeWidth="2" />
      {/* Background cladding panels (solid) */}
      <rect x="90" y="60" width="180" height="310" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="90" y="185" width="180" height="2" fill="#071B3B" />
      <rect x="490" y="60" width="180" height="310" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="490" y="185" width="180" height="2" fill="#071B3B" />
      {/* Screen zone (centre) */}
      <rect x="274" y="60" width="212" height="310" fill="#F4F6F9" stroke="#071B3B" strokeWidth="2" />
      {/* Screen pattern — diamonds/stars grid */}
      {[0, 1, 2, 3, 4, 5].map(col =>
        [0, 1, 2, 3, 4, 5, 6, 7].map(row => {
          const cx = 300 + col * 32
          const cy = 80 + row * 36
          if (cx > 470 || cy > 355) return null
          return (
            <g key={`${col}-${row}`}>
              <path d={`M ${cx} ${cy - 13} L ${cx + 13} ${cy} L ${cx} ${cy + 13} L ${cx - 13} ${cy} Z`}
                fill="none" stroke="#071B3B" strokeWidth="1" />
              <path d={`M ${cx} ${cy - 7} L ${cx + 7} ${cy} L ${cx} ${cy + 7} L ${cx - 7} ${cy} Z`}
                fill="#D4D8E2" stroke="#071B3B" strokeWidth="0.5" />
            </g>
          )
        })
      )}
      {/* Window inserts in background panels */}
      <rect x="110" y="90" width="140" height="80" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="104" y="84" width="152" height="92" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="110" y="220" width="140" height="80" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="104" y="214" width="152" height="92" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="510" y="90" width="140" height="80" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="504" y="84" width="152" height="92" fill="none" stroke="#071B3B" strokeWidth="2" />
      <rect x="510" y="220" width="140" height="80" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="504" y="214" width="152" height="92" fill="none" stroke="#071B3B" strokeWidth="2" />
      {/* Entrance screen top zone */}
      <rect x="274" y="60" width="212" height="60" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="380" cy="90" r="20" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180
        return (
          <line key={angle}
            x1={380 + 14 * Math.cos(rad)} y1={90 + 14 * Math.sin(rad)}
            x2={380 + 20 * Math.cos(rad)} y2={90 + 20 * Math.sin(rad)}
            stroke="#071B3B" strokeWidth="1"
          />
        )
      })}
      {/* Screen frame around screen zone */}
      <rect x="270" y="56" width="220" height="318" fill="none" stroke="#071B3B" strokeWidth="3" />
      {/* Hotspot A: screen zone */}
      <circle cx="380" cy="200" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="380" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">A</text>
      {/* Hotspot B: pattern detail */}
      <line x1="486" y1="160" x2="520" y2="160" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="533" cy="160" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="533" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">B</text>
      {/* Hotspot C: screen frame */}
      <line x1="270" y1="200" x2="244" y2="200" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="231" cy="200" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="231" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">C</text>
      {/* Hotspot D: window insert */}
      <line x1="104" y1="130" x2="56" y2="130" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="130" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="135" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">D</text>
      {/* Hotspot E: entrance screen medallion */}
      <circle cx="380" cy="90" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="380" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">E</text>
      {/* Hotspot F: background cladding */}
      <line x1="670" y1="300" x2="704" y2="300" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="717" cy="300" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="717" y="305" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">F</text>
      <text x="380" y="390" textAnchor="middle" fill="#071B3B" fontSize="9" fontFamily="Arial, sans-serif" fillOpacity="0.35">ARCHITECTURAL REFERENCE DIAGRAM — NOT TO SCALE — DURRAKA FACTORY FOR INDUSTRY</text>
    </svg>
  )
}

// ─── Card SVGs ────────────────────────────────────────────────────────────────

function MashrabiyaScreenPanelSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4, 5].map(col =>
        [0, 1, 2, 3].map(row => {
          const cx = 30 + col * 36
          const cy = 26 + row * 26
          return (
            <g key={`${col}-${row}`}>
              <path d={`M ${cx} ${cy - 10} L ${cx + 10} ${cy} L ${cx} ${cy + 10} L ${cx - 10} ${cy} Z`}
                fill="none" stroke="#071B3B" strokeWidth="1" />
              <path d={`M ${cx} ${cy - 5} L ${cx + 5} ${cy} L ${cx} ${cy + 5} L ${cx - 5} ${cy} Z`}
                fill="#D4D8E2" stroke="#071B3B" strokeWidth="0.5" />
            </g>
          )
        })
      )}
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function WindowScreenSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="60" y="22" width="140" height="92" fill="#D4D8E2" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="46" y="14" width="168" height="108" fill="none" stroke="#071B3B" strokeWidth="3" />
      {[0, 1, 2].map(col =>
        [0, 1, 2].map(row => {
          const cx = 80 + col * 40
          const cy = 38 + row * 28
          return (
            <g key={`${col}-${row}`}>
              <path d={`M ${cx} ${cy - 10} L ${cx + 10} ${cy} L ${cx} ${cy + 10} L ${cx - 10} ${cy} Z`}
                fill="none" stroke="#071B3B" strokeWidth="1" />
            </g>
          )
        })
      )}
      <rect x="46" y="14" width="168" height="4" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function EntranceScreenSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="130" cy="68" r="28" fill="none" stroke="#071B3B" strokeWidth="1.5" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
        const rad = (angle * Math.PI) / 180
        return (
          <line key={angle}
            x1={130 + 18 * Math.cos(rad)} y1={68 + 18 * Math.sin(rad)}
            x2={130 + 28 * Math.cos(rad)} y2={68 + 28 * Math.sin(rad)}
            stroke="#071B3B" strokeWidth="1"
          />
        )
      })}
      {[0, 1, 2, 3, 4, 5].map(col =>
        [0, 1, 2, 3].map(row => {
          const cx = 30 + col * 36
          const cy = 26 + row * 26
          const dist = Math.sqrt((cx - 130) ** 2 + (cy - 68) ** 2)
          if (dist < 32) return null
          return (
            <path key={`${col}-${row}`}
              d={`M ${cx} ${cy - 8} L ${cx + 8} ${cy} L ${cx} ${cy + 8} L ${cx - 8} ${cy} Z`}
              fill="none" stroke="#071B3B" strokeWidth="0.75" />
          )
        })
      )}
      <circle cx="130" cy="68" r="6" fill="#D71920" opacity="0.8" />
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function BackgroundCladdingSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="104" height="50" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="128" y="14" width="114" height="50" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="18" y="70" width="104" height="52" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="128" y="70" width="114" height="52" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="18" y1="64" x2="242" y2="64" stroke="#071B3B" strokeWidth="2" />
      <line x1="122" y1="14" x2="122" y2="122" stroke="#071B3B" strokeWidth="2" />
    </svg>
  )
}

function ScreenFrameSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="none" stroke="#071B3B" strokeWidth="4" />
      <rect x="30" y="26" width="200" height="84" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="18" cy="14" r="7" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="242" cy="14" r="7" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="18" cy="122" r="7" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="242" cy="122" r="7" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="18" y="14" width="224" height="4" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function CustomPatternSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map(i => {
        const cx = 42 + i * 44
        return (
          <g key={i}>
            <polygon points={`${cx},26 ${cx + 14},38 ${cx + 14},54 ${cx},66 ${cx - 14},54 ${cx - 14},38`}
              fill="none" stroke="#071B3B" strokeWidth="1" />
            <polygon points={`${cx},34 ${cx + 8},42 ${cx + 8},52 ${cx},60 ${cx - 8},52 ${cx - 8},42`}
              fill="#D4D8E2" stroke="#071B3B" strokeWidth="0.5" />
          </g>
        )
      })}
      {[0, 1, 2, 3].map(i => {
        const cx = 64 + i * 44
        return (
          <g key={i}>
            <polygon points={`${cx},74 ${cx + 14},86 ${cx + 14},100 ${cx},112 ${cx - 14},100 ${cx - 14},86`}
              fill="none" stroke="#071B3B" strokeWidth="1" />
          </g>
        )
      })}
      <circle cx="130" cy="92" r="6" fill="#D71920" opacity="0.7" />
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

// ─── Component data ───────────────────────────────────────────────────────────

const MASHRABIYA_COMPONENTS: ComponentDetail[] = [
  {
    id: 'mashrabiya-screen-panel',
    title: 'Mashrabiya Screen Panel',
    shortDescription: 'Primary full-height facade screen panel — project-specific geometric pattern combining privacy, solar shading, and architectural identity.',
    tags: ['Mashrabiya', 'Screen Panel', 'Privacy Screen', 'GFRC'],
    image: '/images/packages/heritage-regional.webp',
    imageAlt: 'GFRC/GRC mashrabiya screen panels on heritage and regional architecture facade',
    CardIllustration: MashrabiyaScreenPanelSVG,
    HotspotDiagram: MashrabiyaFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Pattern Module', description: 'The base repeating geometric unit — size and geometry.' },
      { letter: 'B', label: 'Opening Ratio', description: 'Void vs solid area determining privacy and light transmission.' },
      { letter: 'C', label: 'Panel Edge', description: 'How panel edge terminates the pattern cleanly.' },
      { letter: 'D', label: 'Depth Profile', description: 'Front face to back face — determines shadow and structural integrity.' },
      { letter: 'E', label: 'Panel Module', description: 'Screen panel module size and joint positions.' },
      { letter: 'F', label: 'Finish Reference', description: 'Screen face color and texture — confirmed from approved sample.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'window-screen-insert',
    title: 'Window Screen Insert',
    shortDescription: 'Smaller screen sized to window opening — provides privacy and shade at aperture scale while maintaining visual pattern continuity.',
    tags: ['Window Screen', 'Aperture Screen', 'Privacy Insert', 'GFRC'],
    image: '/images/packages/heritage-regional.webp',
    imageAlt: 'GFRC/GRC window screen inserts on heritage building facade',
    CardIllustration: WindowScreenSVG,
    HotspotDiagram: MashrabiyaFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Screen Opening', description: 'The clear glazed area behind the screen.' },
      { letter: 'B', label: 'Pattern Density', description: 'How tightly woven at window scale — fine vs coarse.' },
      { letter: 'C', label: 'Frame Integration', description: 'How screen frame interfaces with window frame.' },
      { letter: 'D', label: 'Screen Stand-off', description: 'Gap between screen face and glazed opening.' },
      { letter: 'E', label: 'Pattern Alignment', description: 'How pattern aligns with window grid lines.' },
      { letter: 'F', label: 'Finish Reference', description: 'Screen color relative to surrounding facade.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'decorative-entrance-screen',
    title: 'Decorative Entrance Screen',
    shortDescription: 'Prominent screen element at the entrance portal — features a central medallion within the pattern field for a focal arrival moment.',
    tags: ['Entrance Screen', 'Feature Screen', 'Portal', 'GFRC'],
    image: '/images/packages/grand-entrance-gate.webp',
    imageAlt: 'GFRC/GRC decorative entrance screen on grand arched gate',
    CardIllustration: EntranceScreenSVG,
    HotspotDiagram: MashrabiyaFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Central Medallion', description: 'Feature focal element within entrance screen pattern.' },
      { letter: 'B', label: 'Pattern Field', description: 'The repeating pattern filling the screen around the medallion.' },
      { letter: 'C', label: 'Screen Width', description: 'Proportional width of entrance screen relative to opening.' },
      { letter: 'D', label: 'Screen Height', description: 'Total height and relationship to door or arch above.' },
      { letter: 'E', label: 'Frame & Border', description: 'Bounding frame and ornamental border of entrance screen.' },
      { letter: 'F', label: 'Finish Reference', description: 'Finish for high-visibility entrance element.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'facade-cladding-panel',
    title: 'Facade Cladding Panel',
    shortDescription: 'Opaque background panels in the mashrabiya composition — provide contrast field for screen panels and complete the facade module.',
    tags: ['Background Panel', 'Cladding', 'Solid Panel', 'GFRC'],
    image: '/images/packages/hospitality-commercial.webp',
    imageAlt: 'GFRC/GRC background cladding panels on commercial and hospitality facade',
    CardIllustration: BackgroundCladdingSVG,
    HotspotDiagram: MashrabiyaFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Panel Face', description: 'Plain cladding surface — provides background contrast for screen.' },
      { letter: 'B', label: 'Panel Module', description: 'Cladding repeat unit — aligns with or contrasts screen rhythm.' },
      { letter: 'C', label: 'Horizontal Joint', description: 'Panel stack joints at floor levels.' },
      { letter: 'D', label: 'Vertical Joint', description: 'Panel column joints — can align or offset with screen joints.' },
      { letter: 'E', label: 'Corner Return', description: 'How background cladding wraps corners.' },
      { letter: 'F', label: 'Finish Reference', description: 'Background panel finish — usually contrasts with screen.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'decorative-frame',
    title: 'Decorative Frame / Surround',
    shortDescription: 'Frame surrounding screen zones — creates visual boundary and ornamental transition between screen panels and background cladding.',
    tags: ['Screen Frame', 'Ornamental Surround', 'Border', 'GFRC'],
    image: '/images/packages/villa-palace-architectural.webp',
    imageAlt: 'GFRC/GRC ornamental screen frame and decorative surround on villa facade',
    CardIllustration: ScreenFrameSVG,
    HotspotDiagram: MashrabiyaFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Frame Head', description: 'Top horizontal member of screen frame.' },
      { letter: 'B', label: 'Frame Jambs', description: 'Vertical frame members framing screen edges.' },
      { letter: 'C', label: 'Corner Detail', description: 'Ornamental element at frame corners — rosette or geometric.' },
      { letter: 'D', label: 'Frame Projection', description: 'How much frame projects past screen panel face.' },
      { letter: 'E', label: 'Frame Profile', description: 'Cross-section of frame — flat or molded.' },
      { letter: 'F', label: 'Finish Reference', description: 'Frame finish vs screen panel finish.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'custom-pattern-panel',
    title: 'Custom Pattern Panel',
    shortDescription: 'Bespoke project-specific pattern design — unique motif geometry developed from the project design intent and confirmed from drawings.',
    tags: ['Custom Pattern', 'Bespoke Screen', 'Project Pattern', 'GFRC'],
    image: '/images/packages/custom-architectural-components.webp',
    imageAlt: 'Custom GFRC/GRC bespoke pattern panels and decorative architectural components',
    CardIllustration: CustomPatternSVG,
    HotspotDiagram: MashrabiyaFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Pattern Origin', description: 'The generating geometric unit of the custom design.' },
      { letter: 'B', label: 'Pattern Symmetry', description: 'Radial, linear, or grid symmetry of the custom design.' },
      { letter: 'C', label: 'Opening Control', description: 'How custom pattern meets required opening ratio.' },
      { letter: 'D', label: 'Panel Cut Edge', description: 'How the custom pattern terminates cleanly at panel edge.' },
      { letter: 'E', label: 'Detail Scale', description: 'Smallest feature in pattern — limits production resolution.' },
      { letter: 'F', label: 'Finish Reference', description: 'Custom color scheme for the pattern.' },
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
  { n: '1', title: 'Receive Drawings', description: 'Facade elevations, screen zone layouts, pattern drawings, and opening schedules submitted for initial review.' },
  { n: '2', title: 'Review Screen Zones', description: 'Durraka reviews screen panel positions, window insert locations, and entrance screen placement.' },
  { n: '3', title: 'Confirm Pattern Scale & Opening Ratio', description: 'Pattern module size, void ratio, and screen depth confirmed against design intent and drawings.' },
  { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each screen and cladding component — coordinated with facade substrate.' },
  { n: '5', title: 'Sample & Mock-up', description: 'Pattern sample or mock-up panel submitted for project review and approval before full manufacture.' },
  { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC screen and cladding components manufactured, QC inspected, and delivered.' },
]

// ─── Package data ─────────────────────────────────────────────────────────────

const MASHRABIYA_SCREEN_DATA: PremiumPackageData = {
  title: 'Mashrabiya Screen Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Project-specific screens. Privacy, shading, and identity.',
  heroDescription:
    'GFRC/GRC mashrabiya screens designed to project-specific patterns — integrating privacy control, solar shading, and decorative architectural identity into a single manufactured scope.',
  illustrativeArea: 'Approx. 1,500–4,500 m²',
  visibleComponents: ['Mashrabiya screens', 'Window screens', 'Facade cladding', 'Decorative frames', 'Entrance screen panels'],
  HeroIllustration: MashrabiyaScreenIllustration,
  packageIntent:
    'This package is designed to help architects, consultants, and project teams define a coordinated mashrabiya screen scope for hospitality, residential, institutional, and commercial projects. The emphasis is on pattern scale, opening ratio, privacy performance, and integration with the building facade. Each screen panel is cast to project-specific pattern drawings and confirmed against the facade layout before manufacture.',
  suitableApplications: [
    'Hospitality and hotel facades',
    'Residential and villa developments',
    'Heritage and traditional architecture',
    'Institutional and government buildings',
    'Commercial office buildings',
    'Religious and cultural facilities',
  ],
  componentDetails: MASHRABIYA_COMPONENTS,
  infographics: [
    {
      title: 'Mashrabiya Screen Component Overview',
      description: 'Patterned GRC/GFRC screens used for privacy, filtered light, shading, facade rhythm, and cultural identity.',
      image: '/images/packages/heritage-regional.webp',
      imageAlt: 'GFRC/GRC mashrabiya screens — heritage and regional architectural facade reference',
    },
  ],
  reviewSteps: REVIEW_STEPS,
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function MashrabiyaScreenPackageClient() {
  return <PremiumPackageLayout data={MASHRABIYA_SCREEN_DATA} />
}
