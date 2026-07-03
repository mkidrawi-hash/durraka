'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData, DesignDiagram } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { CustomDecorativeIllustration } from '@/components/packages/illustrations'
import type { Locale } from '@/lib/i18n'
import { customDecorativeContent } from '@/content/en/packages/custom-decorative-elements-package'
import { customDecorativeContentAr } from '@/content/ar/packages/custom-decorative-elements-package'

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

// ─── Non-text component meta (index-matched to content.components) ────────────

const COMPONENT_META = [
  { id: 'decorative-geometric-panel', CardIllustration: GeometricPanelSVG, image: '/images/packages/custom-architectural-components.webp' },
  { id: 'calligraphy-panel', CardIllustration: CalligraphicPanelSVG, image: '/images/packages/custom-architectural-components.webp' },
  { id: 'identity-panel', CardIllustration: IdentityPanelSVG, image: '/images/packages/custom-architectural-components.webp' },
  { id: 'custom-frame', CardIllustration: CustomFrameSVG, image: '/images/packages/custom-architectural-components.webp' },
  { id: 'ornamental-detail', CardIllustration: OrnamentalDetailSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'facade-accent-feature', CardIllustration: AccentFeatureSVG, image: '/images/packages/custom-architectural-components.webp' },
  { id: 'civic-identity-element', CardIllustration: CivicIdentitySVG, image: '/images/packages/landmark-government-facade.webp' },
]

// Schematic design-intent composition geometry (arrangement only; labels localized).
// An ornament board: geometric, calligraphic, and identity panels within a decorative
// surround, a horizontal accent band, a relief medallion, and a civic identity element.
const DIAGRAM_SHAPES: DesignDiagram['shapes'] = [
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
]

const DIAGRAM_CALLOUT_POS = [
  { n: 1, x: 114, y: 94 },
  { n: 2, x: 206, y: 76 },
  { n: 3, x: 294, y: 94 },
  { n: 4, x: 320, y: 250 },
  { n: 5, x: 200, y: 205 },
  { n: 6, x: 300, y: 160 },
  { n: 7, x: 110, y: 205 },
]

const INFOGRAPHIC_IMAGES = ['/images/packages/custom-architectural-components.webp']

function buildData(locale: Locale): PremiumPackageData {
  const t = locale === 'ar' ? customDecorativeContentAr : customDecorativeContent
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
      HotspotDiagram: CustomDecorativeFacadeElevation,
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
    slug: 'custom-decorative-elements-package',
    designDiagram,
    title: t.title,
    eyebrow: t.eyebrow,
    subtitle: t.subtitle,
    heroDescription: t.heroDescription,
    illustrativeArea: t.illustrativeArea,
    visibleComponents: [...t.visibleComponents],
    HeroIllustration: CustomDecorativeIllustration,
    packageIntent: t.packageIntent,
    suitableApplications: [...t.suitableApplications],
    componentDetails,
    infographics: t.infographics.map((info, i) => ({ ...info, image: INFOGRAPHIC_IMAGES[i] })),
    reviewSteps: t.reviewSteps.map(r => ({ ...r })),
  }
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function CustomDecorativePackageClient({ locale = 'en' }: { locale?: Locale }) {
  return <PremiumPackageLayout data={buildData(locale)} locale={locale} />
}
