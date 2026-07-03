'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData, DesignDiagram } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { ColumnsCapitalsIllustration } from '@/components/packages/illustrations'
import type { Locale } from '@/lib/i18n'
import { columnsCapitalsContent } from '@/content/en/packages/columns-capitals-package'
import { columnsCapitalsContentAr } from '@/content/ar/packages/columns-capitals-package'

// ─── Facade elevation diagram (shared hotspot diagram) ────────────────────────

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

// ─── Non-text component meta (index-matched to content.components) ────────────

const COMPONENT_META = [
  { id: 'column-shaft', CardIllustration: ColumnShaftSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'column-capital', CardIllustration: CapitalSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'column-base', CardIllustration: ColumnBaseSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'pilaster', CardIllustration: PilasterSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'arched-colonnade-bay', CardIllustration: ArchColonnadeSVG, image: '/images/packages/grand-entrance-gate.webp' },
  { id: 'entablature', CardIllustration: EntablatureSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'decorative-spandrel-panel', CardIllustration: SpandrelPanelSVG, image: '/images/packages/custom-architectural-components.webp' },
]

// Schematic design-intent elevation — a colonnade rhythm: shafts, capitals,
// bases, an engaged pilaster, one arched bay, and the entablature above.
const DIAGRAM_SHAPES: DesignDiagram['shapes'] = [
  { kind: 'rect', x: 50, y: 60, w: 300, h: 20, fill: true }, // entablature (6)
  { kind: 'rect', x: 90, y: 96, w: 22, h: 176 }, // shaft (1)
  { kind: 'rect', x: 190, y: 96, w: 22, h: 176 },
  { kind: 'rect', x: 290, y: 96, w: 22, h: 176 },
  { kind: 'rect', x: 84, y: 80, w: 34, h: 16 }, // capital (2)
  { kind: 'rect', x: 184, y: 80, w: 34, h: 16 },
  { kind: 'rect', x: 284, y: 80, w: 34, h: 16 },
  { kind: 'rect', x: 84, y: 264, w: 34, h: 8 }, // base / plinth (3)
  { kind: 'rect', x: 184, y: 264, w: 34, h: 8 },
  { kind: 'rect', x: 284, y: 264, w: 34, h: 8 },
  { kind: 'rect', x: 40, y: 96, w: 14, h: 176 }, // pilaster (4)
  { kind: 'rect', x: 36, y: 80, w: 22, h: 16 }, // pilaster capital
  { kind: 'path', d: 'M112 96 A45 45 0 0 1 190 96', accent: true }, // arched bay (5)
  { kind: 'circle', cx: 178, cy: 74, r: 7, accent: true }, // spandrel rosette (7)
  { kind: 'line', x1: 40, y1: 272, x2: 330, y2: 272 }, // ground
]

const DIAGRAM_CALLOUT_POS = [
  { n: 1, x: 201, y: 180 },
  { n: 2, x: 245, y: 88 },
  { n: 3, x: 201, y: 268 },
  { n: 4, x: 47, y: 180 },
  { n: 5, x: 140, y: 66 },
  { n: 6, x: 300, y: 70 },
  { n: 7, x: 178, y: 74 },
]

const INFOGRAPHIC_IMAGES = ['/images/packages/landmark-government-facade.webp']

function buildData(locale: Locale): PremiumPackageData {
  const t = locale === 'ar' ? columnsCapitalsContentAr : columnsCapitalsContent
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
      HotspotDiagram: ColumnsColonnadeFacadeElevation,
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
    slug: 'columns-capitals-package',
    designDiagram,
    title: t.title,
    eyebrow: t.eyebrow,
    subtitle: t.subtitle,
    heroDescription: t.heroDescription,
    illustrativeArea: t.illustrativeArea,
    visibleComponents: [...t.visibleComponents],
    HeroIllustration: ColumnsCapitalsIllustration,
    packageIntent: t.packageIntent,
    suitableApplications: [...t.suitableApplications],
    componentDetails,
    infographics: t.infographics.map((info, i) => ({ ...info, image: INFOGRAPHIC_IMAGES[i] })),
    reviewSteps: t.reviewSteps.map(r => ({ ...r })),
  }
}

export function ColumnsCapitalsPackageClient({ locale = 'en' }: { locale?: Locale }) {
  return <PremiumPackageLayout data={buildData(locale)} locale={locale} />
}
