'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData, DesignDiagram } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { MashrabiyaScreenIllustration } from '@/components/packages/illustrations'
import type { Locale } from '@/lib/i18n'
import { mashrabiyaScreenContent } from '@/content/en/packages/mashrabiya-screen-package'
import { mashrabiyaScreenContentAr } from '@/content/ar/packages/mashrabiya-screen-package'

// ─── Facade elevation diagram (shared hotspot diagram) ────────────────────────

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

// ─── Non-text component meta (index-matched to content.components) ────────────

const COMPONENT_META = [
  { id: 'mashrabiya-screen-panel', CardIllustration: MashrabiyaScreenPanelSVG, image: '/images/packages/heritage-regional.webp' },
  { id: 'window-screen-insert', CardIllustration: WindowScreenSVG, image: '/images/packages/heritage-regional.webp' },
  { id: 'decorative-entrance-screen', CardIllustration: EntranceScreenSVG, image: '/images/packages/grand-entrance-gate.webp' },
  { id: 'facade-cladding-panel', CardIllustration: BackgroundCladdingSVG, image: '/images/packages/hospitality-commercial.webp' },
  { id: 'decorative-frame', CardIllustration: ScreenFrameSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'custom-pattern-panel', CardIllustration: CustomPatternSVG, image: '/images/packages/custom-architectural-components.webp' },
]

// Schematic design-intent elevation — a framed mashrabiya screen field of
// repeating lattice modules, with a window insert, an entrance screen, a solid
// cladding panel, and one accent custom-pattern module. (arrangement only; labels localized)
const DIAGRAM_SHAPES: DesignDiagram['shapes'] = [
  { kind: 'rect', x: 60, y: 40, w: 280, h: 232 }, // frame / surround (5)
  { kind: 'rect', x: 74, y: 54, w: 150, h: 150 }, // screen field (1)
  { kind: 'line', x1: 124, y1: 54, x2: 124, y2: 204 },
  { kind: 'line', x1: 174, y1: 54, x2: 174, y2: 204 },
  { kind: 'line', x1: 74, y1: 104, x2: 224, y2: 104 },
  { kind: 'line', x1: 74, y1: 154, x2: 224, y2: 154 },
  { kind: 'polyline', points: '99 67 111 79 99 91 87 79 99 67' }, // module
  { kind: 'polyline', points: '149 67 161 79 149 91 137 79 149 67' },
  { kind: 'polyline', points: '199 67 211 79 199 91 187 79 199 67', accent: true }, // custom pattern (6)
  { kind: 'polyline', points: '99 117 111 129 99 141 87 129 99 117' },
  { kind: 'polyline', points: '149 117 161 129 149 141 137 129 149 117' },
  { kind: 'polyline', points: '199 117 211 129 199 141 187 129 199 117' },
  { kind: 'polyline', points: '99 167 111 179 99 191 87 179 99 167' },
  { kind: 'polyline', points: '149 167 161 179 149 191 137 179 149 167' },
  { kind: 'polyline', points: '199 167 211 179 199 191 187 179 199 167' },
  { kind: 'rect', x: 244, y: 60, w: 80, h: 70 }, // window screen insert (2)
  { kind: 'line', x1: 244, y1: 60, x2: 324, y2: 130 },
  { kind: 'line', x1: 324, y1: 60, x2: 244, y2: 130 },
  { kind: 'rect', x: 244, y: 146, w: 80, h: 60, fill: true }, // cladding panel (4)
  { kind: 'path', d: 'M120 268 L120 236 A45 20 0 0 1 210 236 L210 268' }, // entrance screen (3)
  { kind: 'line', x1: 143, y1: 240, x2: 187, y2: 268 },
  { kind: 'line', x1: 187, y1: 240, x2: 143, y2: 268 },
]

const DIAGRAM_CALLOUT_POS = [
  { n: 1, x: 149, y: 129 },
  { n: 2, x: 284, y: 95 },
  { n: 3, x: 165, y: 252 },
  { n: 4, x: 284, y: 176 },
  { n: 5, x: 320, y: 255 },
  { n: 6, x: 199, y: 79 },
]

const INFOGRAPHIC_IMAGES = ['/images/packages/heritage-regional.webp']

function buildData(locale: Locale): PremiumPackageData {
  const t = locale === 'ar' ? mashrabiyaScreenContentAr : mashrabiyaScreenContent
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
      HotspotDiagram: MashrabiyaFacadeElevation,
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
    viewBox: '0 0 400 300',
    shapes: DIAGRAM_SHAPES,
    callouts: DIAGRAM_CALLOUT_POS.map((p, i) => ({ ...p, label: t.diagramCallouts[i] })),
  }

  return {
    slug: 'mashrabiya-screen-package',
    designDiagram,
    title: t.title,
    eyebrow: t.eyebrow,
    subtitle: t.subtitle,
    heroDescription: t.heroDescription,
    illustrativeArea: t.illustrativeArea,
    visibleComponents: [...t.visibleComponents],
    HeroIllustration: MashrabiyaScreenIllustration,
    packageIntent: t.packageIntent,
    suitableApplications: [...t.suitableApplications],
    componentDetails,
    infographics: t.infographics.map((info, i) => ({ ...info, image: INFOGRAPHIC_IMAGES[i] })),
    reviewSteps: t.reviewSteps.map(r => ({ ...r })),
  }
}

export function MashrabiyaScreenPackageClient({ locale = 'en' }: { locale?: Locale }) {
  return <PremiumPackageLayout data={buildData(locale)} locale={locale} />
}
