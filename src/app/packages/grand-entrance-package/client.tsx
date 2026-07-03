'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData, DesignDiagram } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { GrandEntranceIllustration } from '@/components/packages/illustrations'

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

function GrandEntranceFacadeElevation() {
  return (
    <svg viewBox="0 0 760 395" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="760" height="395" fill="#F4F6F9" />
      {/* Ground line */}
      <line x1="55" y1="372" x2="705" y2="372" stroke="#071B3B" strokeWidth="2" />
      {/* Left column base + shaft + capital */}
      <rect x="108" y="352" width="60" height="20" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="112" y="344" width="52" height="10" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="120" y="182" width="36" height="164" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="128" y1="182" x2="128" y2="344" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <line x1="138" y1="182" x2="138" y2="344" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <rect x="106" y="160" width="64" height="24" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="106" y1="170" x2="170" y2="170" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 120 182 Q 106 176 106 170 L 170 170 Q 170 176 156 182" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      {/* Right column base + shaft + capital */}
      <rect x="592" y="352" width="60" height="20" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="596" y="344" width="52" height="10" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="604" y="182" width="36" height="164" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="612" y1="182" x2="612" y2="344" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <line x1="622" y1="182" x2="622" y2="344" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,4" />
      <rect x="590" y="160" width="64" height="24" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="590" y1="170" x2="654" y2="170" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 604 182 Q 590 176 590 170 L 654 170 Q 654 176 640 182" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      {/* Main arch between columns */}
      <path d="M 170 370 L 170 220 A 210 210 0 0 1 590 220 L 590 370" fill="#EEF0F5" stroke="#071B3B" strokeWidth="2" />
      <path d="M 170 220 A 212 212 0 0 1 590 220" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      {/* Arch keystone */}
      <path d="M 373 10 L 380 26 L 387 10 Z" fill="#D71920" stroke="white" strokeWidth="1.5" opacity="0.9" />
      {/* Decorative frame around arch */}
      <rect x="90" y="80" width="580" height="290" fill="none" stroke="#071B3B" strokeWidth="2" strokeDasharray="6,3" />
      <circle cx="90" cy="80" r="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="670" cy="80" r="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="90" cy="370" r="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="670" cy="370" r="6" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Entablature above columns */}
      <rect x="86" y="130" width="88" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="86" y="144" width="88" height="18" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="82" y="114" width="96" height="16" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="82" y1="120" x2="178" y2="120" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="586" y="130" width="88" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="586" y="144" width="88" height="18" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="582" y="114" width="96" height="16" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="582" y1="120" x2="678" y2="120" stroke="#071B3B" strokeWidth="0.75" />
      {/* Feature panel in upper gate zone */}
      <rect x="310" y="50" width="140" height="60" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="380" cy="80" r="18" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      {[0, 60, 120, 180, 240, 300].map(angle => {
        const rad = (angle * Math.PI) / 180
        const x1 = 380 + 18 * Math.cos(rad)
        const y1 = 80 + 18 * Math.sin(rad)
        const x2 = 380 + 8 * Math.cos(rad)
        const y2 = 80 + 8 * Math.sin(rad)
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#071B3B" strokeWidth="1" />
      })}
      <circle cx="380" cy="80" r="5" fill="#D71920" opacity="0.7" />
      {/* Screen accent panels (flanking lower) */}
      <rect x="178" y="250" width="68" height="100" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.2" />
      {[260, 280, 300, 320].map(y => (
        <line key={y} x1="178" y1={y} x2="246" y2={y} stroke="#071B3B" strokeWidth="0.5" />
      ))}
      {[192, 206, 220, 234].map(x => (
        <line key={x} x1={x} y1="250" x2={x} y2="350" stroke="#071B3B" strokeWidth="0.5" />
      ))}
      <rect x="514" y="250" width="68" height="100" fill="#EEF0F5" stroke="#071B3B" strokeWidth="1.2" />
      {[260, 280, 300, 320].map(y => (
        <line key={y + 500} x1="514" y1={y} x2="582" y2={y} stroke="#071B3B" strokeWidth="0.5" />
      ))}
      {[528, 542, 556, 570].map(x => (
        <line key={x} x1={x} y1="250" x2={x} y2="350" stroke="#071B3B" strokeWidth="0.5" />
      ))}
      {/* Hotspot A: arch crown */}
      <circle cx="380" cy="18" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="380" y="23" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">A</text>
      {/* Hotspot B: entablature */}
      <line x1="678" y1="122" x2="704" y2="122" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="717" cy="122" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="717" y="127" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">B</text>
      {/* Hotspot C: column capital */}
      <line x1="82" y1="168" x2="56" y2="168" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="168" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="173" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">C</text>
      {/* Hotspot D: feature panel */}
      <circle cx="380" cy="80" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="380" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">D</text>
      {/* Hotspot E: screen accent */}
      <circle cx="212" cy="300" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="212" y="305" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">E</text>
      {/* Hotspot F: gate opening */}
      <line x1="82" y1="340" x2="56" y2="340" stroke="#D71920" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="43" cy="340" r="13" fill="#D71920" stroke="white" strokeWidth="2.5" />
      <text x="43" y="345" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">F</text>
      <text x="380" y="390" textAnchor="middle" fill="#071B3B" fontSize="9" fontFamily="Arial, sans-serif" fillOpacity="0.35">ARCHITECTURAL REFERENCE DIAGRAM — NOT TO SCALE — DURRAKA FACTORY FOR INDUSTRY</text>
    </svg>
  )
}

// ─── Card SVGs ────────────────────────────────────────────────────────────────

function EntranceColumnSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="103" y="114" width="54" height="14" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="106" y="106" width="48" height="10" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="112" y="30" width="36" height="78" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="120" y1="30" x2="120" y2="106" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,3" />
      <line x1="130" y1="30" x2="130" y2="106" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,3" />
      <line x1="140" y1="30" x2="140" y2="106" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="4,3" />
      <rect x="100" y="14" width="60" height="18" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="100" y1="22" x2="160" y2="22" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="100" y="14" width="60" height="4" fill="#D71920" opacity="0.8" />
    </svg>
  )
}

function GateCapitalSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="96" y="100" width="68" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 96 100 Q 78 88 66 72 L 194 72 Q 182 88 164 100" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="52" y="54" width="156" height="18" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="52" y1="62" x2="208" y2="62" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="52" y="54" width="156" height="4" fill="#D71920" opacity="0.8" />
      <path d="M 80 94 Q 72 86 76 78 Q 80 72 88 76" fill="none" stroke="#071B3B" strokeWidth="0.9" />
      <path d="M 180 94 Q 188 86 184 78 Q 180 72 172 76" fill="none" stroke="#071B3B" strokeWidth="0.9" />
      <path d="M 94 90 Q 90 82 96 76" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 166 90 Q 170 82 164 76" fill="none" stroke="#071B3B" strokeWidth="0.75" />
    </svg>
  )
}

function GrandArchSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="36" width="44" height="88" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="198" y="36" width="44" height="88" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 62 122 L 62 68 A 68 68 0 0 1 198 68 L 198 122" fill="#EEF0F5" stroke="#071B3B" strokeWidth="2" />
      <path d="M 62 68 A 70 70 0 0 1 198 68" fill="none" stroke="#071B3B" strokeWidth="0.75" />
      <path d="M 62 68 A 58 58 0 0 1 198 68" fill="none" stroke="#071B3B" strokeWidth="0.75" strokeDasharray="3,2" />
      <path d="M 122 8 L 130 22 L 138 8 Z" fill="#D71920" stroke="white" strokeWidth="1.5" opacity="0.9" />
      <line x1="18" y1="68" x2="62" y2="68" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="198" y1="68" x2="242" y2="68" stroke="#071B3B" strokeWidth="0.75" />
    </svg>
  )
}

function GateCorniceSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="20" y="100" width="220" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="14" y="72" width="232" height="28" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <line x1="14" y1="84" x2="246" y2="84" stroke="#071B3B" strokeWidth="0.75" />
      <line x1="14" y1="93" x2="246" y2="93" stroke="#071B3B" strokeWidth="0.75" />
      <rect x="10" y="50" width="240" height="22" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 10 50 Q 10 36 26 36 L 234 36 Q 250 36 250 50" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="10" y="36" width="240" height="4" fill="#D71920" opacity="0.85" />
    </svg>
  )
}

function DecorativeFrameSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="none" stroke="#071B3B" strokeWidth="4" />
      <rect x="26" y="22" width="208" height="92" fill="none" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="18" cy="14" r="7" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="242" cy="14" r="7" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="18" cy="122" r="7" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="242" cy="122" r="7" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <rect x="18" y="14" width="224" height="4" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function FeaturePanelSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <circle cx="130" cy="68" r="32" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={angle}
            x1={130 + 22 * Math.cos(rad)} y1={68 + 22 * Math.sin(rad)}
            x2={130 + 32 * Math.cos(rad)} y2={68 + 32 * Math.sin(rad)}
            stroke="#071B3B" strokeWidth="1.2"
          />
        )
      })}
      <circle cx="130" cy="68" r="10" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="130" cy="68" r="4" fill="#D71920" opacity="0.8" />
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

function MashrabiyaAccentSVG() {
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
              <path d={`M ${cx} ${cy - 6} L ${cx + 6} ${cy} L ${cx} ${cy + 6} L ${cx - 6} ${cy} Z`}
                fill="#D4D8E2" stroke="#071B3B" strokeWidth="0.5" />
            </g>
          )
        })
      )}
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.6" />
    </svg>
  )
}

function CustomDetailSVG() {
  return (
    <svg viewBox="0 0 260 136" className="w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="260" height="136" fill="#EEF0F5" />
      <rect x="18" y="14" width="224" height="108" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      <path d="M 18 40 Q 60 30 100 40 Q 140 50 180 40 Q 220 30 242 40" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <path d="M 18 65 Q 60 55 100 65 Q 140 75 180 65 Q 220 55 242 65" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <path d="M 18 90 Q 60 80 100 90 Q 140 100 180 90 Q 220 80 242 90" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="18" y="14" width="224" height="3" fill="#D71920" opacity="0.7" />
    </svg>
  )
}

// ─── Component data ───────────────────────────────────────────────────────────

const ENTRANCE_COMPONENTS: ComponentDetail[] = [
  {
    id: 'entrance-column',
    title: 'Entrance Column',
    shortDescription: 'The flanking columns of a monumental gate — defines the vertical scale, shaft profile, and arrival character of the entrance.',
    tags: ['Entrance Column', 'Gate Column', 'GFRC Column', 'Monumental'],
    image: '/images/packages/grand-entrance-gate.webp',
    imageAlt: 'GFRC/GRC entrance columns on monumental grand gate architecture',
    CardIllustration: EntranceColumnSVG,
    HotspotDiagram: GrandEntranceFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Column Crown', description: 'Capital and abacus — where column meets entablature above.' },
      { letter: 'B', label: 'Column Shaft', description: 'Main vertical face — height, diameter, and entasis.' },
      { letter: 'C', label: 'Column Spacing', description: 'The intercolumniation — clear opening between shafts.' },
      { letter: 'D', label: 'Column Base', description: 'Base moulding and plinth landing on gate platform.' },
      { letter: 'E', label: 'Column Axis', description: 'Alignment axis of columns with gate centreline.' },
      { letter: 'F', label: 'Finish Reference', description: 'Shaft and capital color/texture — confirmed from project.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'gate-capital',
    title: 'Column Capital',
    shortDescription: 'Capital at the top of entrance columns — elaborately detailed to match the monumental scale and character of the gate composition.',
    tags: ['Capital', 'Gate Capital', 'Classical', 'GFRC Capital'],
    image: '/images/packages/landmark-government-facade.webp',
    imageAlt: 'GFRC/GRC classical column capitals on landmark government building facade',
    CardIllustration: GateCapitalSVG,
    HotspotDiagram: GrandEntranceFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Abacus', description: 'Flat top slab transitioning to entablature — controlling horizontal datum.' },
      { letter: 'B', label: 'Capital Body', description: 'Main ornamental zone — acanthus, volutes, or geometric form.' },
      { letter: 'C', label: 'Echinus', description: 'Lower curved transition connecting capital body to shaft.' },
      { letter: 'D', label: 'Shaft Junction', description: 'Capital base meets shaft top — no visible joint line desired.' },
      { letter: 'E', label: 'Capital Width', description: 'Abacus width relative to shaft diameter — proportion check.' },
      { letter: 'F', label: 'Finish Reference', description: 'Capital surface detail and pigment — confirmed from project.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'grand-entrance-arch',
    title: 'Grand Entrance Arch',
    shortDescription: 'Main arch spanning between entrance columns — the focal arrival element with decorated keystone, arch ring, and soffit profile.',
    tags: ['Grand Arch', 'Entrance Arch', 'Keystone Arch', 'GFRC'],
    image: '/images/packages/heritage-regional.webp',
    imageAlt: 'GFRC/GRC grand entrance arch with keystone on monumental gate',
    CardIllustration: GrandArchSVG,
    HotspotDiagram: GrandEntranceFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Arch Crown & Keystone', description: 'The apex keystone — focal point of arrival, profile and projection.' },
      { letter: 'B', label: 'Arch Extrados', description: 'Outer face of arch — thickness and decorative profile.' },
      { letter: 'C', label: 'Arch Intrados', description: 'Inner curved soffit — visible from approach.' },
      { letter: 'D', label: 'Voussoir Rhythm', description: 'Visible joint lines or decorative divisions on arch face.' },
      { letter: 'E', label: 'Impost Capital', description: 'Point where arch springs — impost block or capital.' },
      { letter: 'F', label: 'Gate Opening', description: 'Clear span and height of the entrance opening.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'gate-cornice',
    title: 'Gate Cornice / Entablature',
    shortDescription: 'Cornice and entablature above the entrance columns and arch — establishes the horizontal crown of the gate composition.',
    tags: ['Gate Cornice', 'Entablature', 'Horizontal Profile', 'GFRC'],
    image: '/images/packages/villa-palace-architectural.webp',
    imageAlt: 'GFRC/GRC gate cornice and entablature on heritage palace architecture',
    CardIllustration: GateCorniceSVG,
    HotspotDiagram: GrandEntranceFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Cornice Crown', description: 'Top cap — highest horizontal element on the gate composition.' },
      { letter: 'B', label: 'Cornice Projection', description: 'How far cornice projects past column face.' },
      { letter: 'C', label: 'Frieze Zone', description: 'Band between architrave and cornice — plain or with motif.' },
      { letter: 'D', label: 'Cornice Alignment', description: 'How entablature aligns across main arch and flanking wing walls.' },
      { letter: 'E', label: 'Cornice Profile', description: 'The specific molding profile cross-section.' },
      { letter: 'F', label: 'Finish Reference', description: 'Cornice color/texture vs column.' },
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
    shortDescription: 'Ornamental frame surrounding the gate opening — profiled jambs, head, and corner blocks enriching the entrance composition.',
    tags: ['Decorative Frame', 'Gate Surround', 'Ornamental', 'GFRC'],
    image: '/images/packages/custom-architectural-components.webp',
    imageAlt: 'Custom GFRC/GRC decorative frame and ornamental gate surround elements',
    CardIllustration: DecorativeFrameSVG,
    HotspotDiagram: GrandEntranceFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Frame Head', description: 'Top member of decorative surround.' },
      { letter: 'B', label: 'Frame Jamb', description: 'Vertical members with relief or profiled face.' },
      { letter: 'C', label: 'Corner Block', description: 'Decorative corner treatment where head and jamb meet.' },
      { letter: 'D', label: 'Frame Projection', description: 'How much frame projects past gate face.' },
      { letter: 'E', label: 'Frame Pattern', description: 'Repeating detail in jamb face.' },
      { letter: 'F', label: 'Finish Reference', description: 'Frame vs gate cladding contrast.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'feature-identity-panel',
    title: 'Feature / Identity Panel',
    shortDescription: 'Decorative panel within the gate composition — carries identity, heraldic, or ornamental content at the principal arrival zone.',
    tags: ['Feature Panel', 'Identity', 'Decorative', 'GFRC Panel'],
    image: '/images/packages/hospitality-commercial.webp',
    imageAlt: 'GFRC/GRC feature and identity panels on grand entrance gate composition',
    CardIllustration: FeaturePanelSVG,
    HotspotDiagram: GrandEntranceFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Panel Position', description: 'Where feature panel sits in the composition.' },
      { letter: 'B', label: 'Panel Motif', description: 'Central design — geometric, calligraphic, or custom.' },
      { letter: 'C', label: 'Relief Depth', description: 'How far motif projects from panel face.' },
      { letter: 'D', label: 'Panel Size', description: 'Dimensions relative to surrounding arch and columns.' },
      { letter: 'E', label: 'Panel Frame', description: 'Any border or frame around the central motif.' },
      { letter: 'F', label: 'Finish Reference', description: 'Panel color vs background.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'mashrabiya-screen-accent',
    title: 'Mashrabiya Screen Accent',
    shortDescription: 'Geometric screen element within the gate composition — flanking panels, upper zone, or side wings providing pattern depth and visual interest.',
    tags: ['Mashrabiya', 'Screen Accent', 'Gate Screen', 'GFRC'],
    image: '/images/packages/heritage-regional.webp',
    imageAlt: 'GFRC/GRC mashrabiya screen accent panels on heritage and regional architecture',
    CardIllustration: MashrabiyaAccentSVG,
    HotspotDiagram: GrandEntranceFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Screen Zone', description: 'Position of screen within gate — flanking panels, upper zone, or side wings.' },
      { letter: 'B', label: 'Pattern Scale', description: 'Geometry module size relative to screen area.' },
      { letter: 'C', label: 'Opening Ratio', description: 'Solid vs open in screen — light and privacy balance.' },
      { letter: 'D', label: 'Screen Frame', description: 'Border frame containing screen pattern.' },
      { letter: 'E', label: 'Screen Depth', description: 'Thickness of screen for shadow and structural integrity.' },
      { letter: 'F', label: 'Finish Reference', description: 'Screen and surrounding gate finish.' },
    ],
    materials: SHARED_MATERIALS,
    architecturalDrawings: SHARED_ARCH_DRAWINGS,
    shopDrawings: SHARED_SHOP_DRAWINGS,
    finishes: SHARED_FINISHES,
    projectInputs: SHARED_INPUTS,
    scopeDeliverables: SHARED_SCOPE,
  },
  {
    id: 'custom-architectural-detail',
    title: 'Custom Architectural Detail',
    shortDescription: 'Project-specific bespoke element within the gate composition — unique geometry confirmed from design intent drawings.',
    tags: ['Custom Detail', 'Bespoke', 'Project-Specific', 'GFRC'],
    image: '/images/packages/custom-architectural-components.webp',
    imageAlt: 'Custom GFRC/GRC bespoke architectural detail and project-specific components',
    CardIllustration: CustomDetailSVG,
    HotspotDiagram: GrandEntranceFacadeElevation,
    hotspots: [
      { letter: 'A', label: 'Detail Position', description: 'Location of bespoke element in gate composition.' },
      { letter: 'B', label: 'Custom Geometry', description: 'The project-specific form — confirmed from drawings.' },
      { letter: 'C', label: 'Detail Scale', description: 'Size relative to surrounding elements.' },
      { letter: 'D', label: 'Relief Character', description: 'Whether shallow, medium, or deep relief.' },
      { letter: 'E', label: 'Interface Edge', description: 'How custom detail meets standard elements cleanly.' },
      { letter: 'F', label: 'Finish Reference', description: 'Custom color/texture confirmed from project.' },
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
  { n: '1', title: 'Receive Drawings', description: 'Gate elevation, plan, section, and detail drawings submitted for initial technical review.' },
  { n: '2', title: 'Review Gate Composition', description: 'Durraka reviews arch geometry, column positions, cornice levels, and overall gate proportions.' },
  { n: '3', title: 'Confirm Columns, Arch & Cornice', description: 'Column heights, capital style, arch span, and cornice profiles confirmed against the drawing set.' },
  { n: '4', title: 'Shop Drawing Coordination', description: 'Shop drawings prepared for each component — coordinated with structure, substrate, and interfaces.' },
  { n: '5', title: 'Confirm Finish & Sample', description: 'Finish direction, colour references, and sample requirements agreed before manufacturing.' },
  { n: '6', title: 'Manufacture & Deliver', description: 'Approved GFRC/GRC components manufactured, QC inspected, and delivered to project programme.' },
]

// ─── Package data ─────────────────────────────────────────────────────────────

// Schematic design-intent elevation — a symmetrical portal: flanking columns,
// arch, entablature, framed opening with a mashrabiya screen accent.
const GRAND_ENTRANCE_DIAGRAM: DesignDiagram = {
  kind: 'elevation',
  viewBox: '0 0 400 320',
  shapes: [
    { kind: 'rect', x: 96, y: 150, w: 24, h: 142 }, // left shaft (1)
    { kind: 'rect', x: 280, y: 150, w: 24, h: 142 }, // right shaft
    { kind: 'rect', x: 90, y: 136, w: 36, h: 14 }, // left capital (2)
    { kind: 'rect', x: 274, y: 136, w: 36, h: 14 }, // right capital
    { kind: 'rect', x: 90, y: 286, w: 36, h: 8 }, // left base
    { kind: 'rect', x: 274, y: 286, w: 36, h: 8 }, // right base
    { kind: 'path', d: 'M126 136 A74 74 0 0 1 274 136', accent: true }, // arch (3)
    { kind: 'rect', x: 80, y: 36, w: 240, h: 16, fill: true }, // entablature (4)
    { kind: 'rect', x: 120, y: 136, w: 160, h: 156 }, // frame / surround (5)
    { kind: 'rect', x: 176, y: 74, w: 48, h: 30 }, // identity panel (6)
    { kind: 'rect', x: 150, y: 168, w: 100, h: 112 }, // mashrabiya screen field (7)
    { kind: 'line', x1: 150, y1: 205, x2: 250, y2: 205 },
    { kind: 'line', x1: 150, y1: 242, x2: 250, y2: 242 },
    { kind: 'line', x1: 183, y1: 168, x2: 183, y2: 280 },
    { kind: 'line', x1: 217, y1: 168, x2: 217, y2: 280 },
    { kind: 'polyline', points: '192 64 200 52 208 64', accent: true }, // keystone detail (8)
    { kind: 'line', x1: 86, y1: 292, x2: 314, y2: 292 }, // threshold
  ],
  callouts: [
    { n: 1, label: 'Entrance Column', x: 108, y: 225 },
    { n: 2, label: 'Column Capital', x: 108, y: 143 },
    { n: 3, label: 'Grand Entrance Arch', x: 250, y: 82 },
    { n: 4, label: 'Gate Cornice / Entablature', x: 300, y: 44 },
    { n: 5, label: 'Decorative Frame / Surround', x: 122, y: 258 },
    { n: 6, label: 'Feature / Identity Panel', x: 200, y: 89 },
    { n: 7, label: 'Mashrabiya Screen Accent', x: 200, y: 258 },
    { n: 8, label: 'Custom Architectural Detail', x: 200, y: 56 },
  ],
}

const GRAND_ENTRANCE_DATA: PremiumPackageData = {
  slug: 'grand-entrance-package',
  designDiagram: GRAND_ENTRANCE_DIAGRAM,
  title: 'Grand Entrance Package',
  eyebrow: 'AI Concept Reference',
  subtitle: 'Monumental entrances. Engineered in GFRC/GRC.',
  heroDescription:
    'An integrated GFRC/GRC scope for landmark entrance gates and arrival facades — combining columns, capitals, arches, cornices, decorative frames, and cladding into a single precision-manufactured architectural package.',
  illustrativeArea: 'Feature entrances & gateways',
  visibleComponents: ['Columns', 'Capitals', 'Arches', 'Cornices', 'Decorative panels', 'Entrance cladding', 'Mashrabiya / screen accents'],
  HeroIllustration: GrandEntranceIllustration,
  packageIntent:
    'This package is designed for projects that demand architectural impact at the point of arrival. The focus is on creating a coordinated entrance composition — columns, arches, cornices, and feature panels — that reflects the architectural character of the development. Durraka engineers each entrance package from the submitted drawing set, confirming scope, dimensions, and component count before manufacture.',
  suitableApplications: [
    'Luxury villas and private residences',
    'Royal palaces and government buildings',
    'Hotels and hospitality developments',
    'Gated compounds and master plans',
    'Commercial landmarks and mixed-use towers',
    'Heritage and culturally inspired projects',
    'Institutional and civic complexes',
  ],
  componentDetails: ENTRANCE_COMPONENTS,
  infographics: [
    {
      title: 'Column & Capital Component Overview',
      description: 'Vertical architectural elements used at entrances, arcades, porticos, and facade features to create rhythm, formality, and decorative character.',
      image: '/images/infographics/gfrc-classical-columns-hero.png',
      imageAlt: 'GFRC/GRC columns and capitals — landmark government building facade reference',
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

export function GrandEntrancePackageClient() {
  return <PremiumPackageLayout data={GRAND_ENTRANCE_DATA} />
}
