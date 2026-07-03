'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData, DesignDiagram } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { CommercialFacadeIllustration } from '@/components/packages/illustrations'
import type { Locale } from '@/lib/i18n'
import { commercialFacadeContent } from '@/content/en/packages/commercial-facade-package'
import { commercialFacadeContentAr } from '@/content/ar/packages/commercial-facade-package'

// ─── Facade elevation diagram (shared hotspot diagram) ────────────────────────

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

// ─── Non-text component meta (index-matched to content.components) ────────────

const COMPONENT_META = [
  { id: 'facade-cladding-panel', CardIllustration: FacadeCladdingPanelSVG, image: '/images/packages/hospitality-commercial.webp' },
  { id: 'cornice-profile-band', CardIllustration: CorniceBandSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'window-surround-reveal', CardIllustration: WindowSurroundSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'corner-expression', CardIllustration: CornerExpressionSVG, image: '/images/packages/hospitality-commercial.webp' },
  { id: 'decorative-vertical-fin', CardIllustration: VerticalFinSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'custom-bespoke-profile', CardIllustration: BespokeProfileSVG, image: '/images/packages/custom-architectural-components.webp' },
]

// Schematic design-intent elevation geometry (arrangement only; labels localized).
const DIAGRAM_SHAPES: DesignDiagram['shapes'] = [
  { kind: 'rect', x: 70, y: 46, w: 260, h: 226 },
  { kind: 'rect', x: 70, y: 46, w: 260, h: 9, fill: true },
  { kind: 'line', x1: 135, y1: 55, x2: 135, y2: 272 },
  { kind: 'line', x1: 200, y1: 55, x2: 200, y2: 272 },
  { kind: 'line', x1: 265, y1: 55, x2: 265, y2: 272 },
  { kind: 'line', x1: 70, y1: 110, x2: 330, y2: 110 },
  { kind: 'line', x1: 70, y1: 164, x2: 330, y2: 164 },
  { kind: 'line', x1: 70, y1: 218, x2: 330, y2: 218 },
  { kind: 'rect', x: 88, y: 72, w: 34, h: 28 },
  { kind: 'rect', x: 93, y: 77, w: 24, h: 18 },
  { kind: 'line', x1: 74, y1: 55, x2: 74, y2: 272, accent: true },
  { kind: 'rect', x: 261, y: 55, w: 7, h: 217, accent: true },
  { kind: 'polyline', points: '286 272 286 232 306 218 330 218', accent: true },
]

const DIAGRAM_CALLOUT_POS = [
  { n: 1, x: 167, y: 140 },
  { n: 2, x: 305, y: 50 },
  { n: 3, x: 105, y: 86 },
  { n: 4, x: 74, y: 245 },
  { n: 5, x: 265, y: 150 },
  { n: 6, x: 306, y: 245 },
]

const INFOGRAPHIC_IMAGES = ['/images/packages/villa-palace-architectural.webp']

function buildData(locale: Locale): PremiumPackageData {
  const t = locale === 'ar' ? commercialFacadeContentAr : commercialFacadeContent
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
      HotspotDiagram: CommercialFacadeElevation,
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
    slug: 'commercial-facade-package',
    designDiagram,
    title: t.title,
    eyebrow: t.eyebrow,
    subtitle: t.subtitle,
    heroDescription: t.heroDescription,
    illustrativeArea: t.illustrativeArea,
    visibleComponents: [...t.visibleComponents],
    HeroIllustration: CommercialFacadeIllustration,
    packageIntent: t.packageIntent,
    suitableApplications: [...t.suitableApplications],
    componentDetails,
    infographics: t.infographics.map((info, i) => ({ ...info, image: INFOGRAPHIC_IMAGES[i] })),
    reviewSteps: t.reviewSteps.map(r => ({ ...r })),
  }
}

export function CommercialFacadePackageClient({ locale = 'en' }: { locale?: Locale }) {
  return <PremiumPackageLayout data={buildData(locale)} locale={locale} />
}
