'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData, DesignDiagram } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { GrandEntranceIllustration } from '@/components/packages/illustrations'
import type { Locale } from '@/lib/i18n'
import { grandEntranceContent } from '@/content/en/packages/grand-entrance-package'
import { grandEntranceContentAr } from '@/content/ar/packages/grand-entrance-package'

// ─── Facade elevation diagram (shared hotspot diagram) ────────────────────────

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

// ─── Non-text component meta (index-matched to content.components) ────────────

const COMPONENT_META = [
  { id: 'entrance-column', CardIllustration: EntranceColumnSVG, image: '/images/packages/grand-entrance-gate.webp' },
  { id: 'gate-capital', CardIllustration: GateCapitalSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'grand-entrance-arch', CardIllustration: GrandArchSVG, image: '/images/packages/grand-entrance-gate.webp' },
  { id: 'gate-cornice', CardIllustration: GateCorniceSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'decorative-frame', CardIllustration: DecorativeFrameSVG, image: '/images/packages/custom-architectural-components.webp' },
  { id: 'feature-identity-panel', CardIllustration: FeaturePanelSVG, image: '/images/packages/grand-entrance-gate.webp' },
  { id: 'mashrabiya-screen-accent', CardIllustration: MashrabiyaAccentSVG, image: '/images/packages/heritage-regional.webp' },
  { id: 'custom-architectural-detail', CardIllustration: CustomDetailSVG, image: '/images/packages/custom-architectural-components.webp' },
]

// Schematic design-intent elevation — a symmetrical portal: flanking columns,
// arch, entablature, framed opening with a mashrabiya screen accent.
const DIAGRAM_SHAPES: DesignDiagram['shapes'] = [
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
]

const DIAGRAM_CALLOUT_POS = [
  { n: 1, x: 108, y: 225 },
  { n: 2, x: 108, y: 143 },
  { n: 3, x: 250, y: 82 },
  { n: 4, x: 300, y: 44 },
  { n: 5, x: 122, y: 258 },
  { n: 6, x: 200, y: 89 },
  { n: 7, x: 200, y: 258 },
  { n: 8, x: 200, y: 56 },
]

const INFOGRAPHIC_IMAGES = ['/images/packages/landmark-government-facade.webp', '/images/packages/villa-palace-architectural.webp']

function buildData(locale: Locale): PremiumPackageData {
  const t = locale === 'ar' ? grandEntranceContentAr : grandEntranceContent
  const s = t.shared

  const componentDetails: ComponentDetail[] = COMPONENT_META.map((meta, i) => {
    const c = t.components[i]
    return {
      id: meta.id,
      title: c.title,
      shortDescription: c.shortDescription,
      tags: [...c.tags],
      image: meta.image,
      imageAlt: c.imageAlt,
      CardIllustration: meta.CardIllustration,
      HotspotDiagram: GrandEntranceFacadeElevation,
      hotspots: c.hotspots.map(h => ({ ...h })),
      materials: [...s.materials],
      architecturalDrawings: [...s.architecturalDrawings],
      shopDrawings: [...s.shopDrawings],
      finishes: [...s.finishes],
      projectInputs: [...s.projectInputs],
      scopeDeliverables: [...s.scopeDeliverables],
    }
  })

  const designDiagram: DesignDiagram = {
    kind: 'elevation',
    viewBox: '0 0 400 320',
    shapes: DIAGRAM_SHAPES,
    callouts: DIAGRAM_CALLOUT_POS.map((p, i) => ({ ...p, label: t.diagramCallouts[i] })),
  }

  return {
    slug: 'grand-entrance-package',
    designDiagram,
    title: t.title,
    eyebrow: t.eyebrow,
    subtitle: t.subtitle,
    heroDescription: t.heroDescription,
    illustrativeArea: t.illustrativeArea,
    visibleComponents: [...t.visibleComponents],
    HeroIllustration: GrandEntranceIllustration,
    packageIntent: t.packageIntent,
    suitableApplications: [...t.suitableApplications],
    componentDetails,
    infographics: t.infographics.map((info, i) => ({ ...info, image: INFOGRAPHIC_IMAGES[i] })),
    reviewSteps: t.reviewSteps.map(r => ({ ...r })),
  }
}

export function GrandEntrancePackageClient({ locale = 'en' }: { locale?: Locale }) {
  return <PremiumPackageLayout data={buildData(locale)} locale={locale} />
}
