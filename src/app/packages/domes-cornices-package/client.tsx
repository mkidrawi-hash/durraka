'use client'

import React from 'react'
import { PremiumPackageLayout } from '@/components/packages/PremiumPackageLayout'
import type { PremiumPackageData, DesignDiagram } from '@/components/packages/PremiumPackageLayout'
import type { ComponentDetail } from '@/components/packages/ComponentDetailModal'
import { DomesCornicesIllustration } from '@/components/packages/illustrations'
import type { Locale } from '@/lib/i18n'
import { domesCornicesContent } from '@/content/en/packages/domes-cornices-package'
import { domesCornicesContentAr } from '@/content/ar/packages/domes-cornices-package'

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

// ─── Non-text component meta (index-matched to content.components) ────────────

const COMPONENT_META = [
  { id: 'main-dome', CardIllustration: DomeSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'cornice-profile', CardIllustration: CorniceSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'crown-cornice', CardIllustration: CrownCorniceSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'decorative-band', CardIllustration: DecorativeBandSVG, image: '/images/packages/villa-palace-architectural.webp' },
  { id: 'parapet-coping', CardIllustration: ParapetCopingSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'column-capital', CardIllustration: ColumnCapitalSVG, image: '/images/packages/landmark-government-facade.webp' },
  { id: 'entrance-arch', CardIllustration: EntranceArchSVG, image: '/images/packages/grand-entrance-gate.webp' },
]

// Schematic design-intent profile — a dome on a drum over a corniced structure.
// Silhouette/outline only: no section cut, no internal structure. Labels localized.
const DIAGRAM_SHAPES: DesignDiagram['shapes'] = [
  { kind: 'rect', x: 70, y: 214, w: 260, h: 66 }, // base structure
  { kind: 'rect', x: 66, y: 206, w: 268, h: 10, fill: true }, // cornice profile (2)
  { kind: 'rect', x: 66, y: 198, w: 268, h: 8 }, // parapet coping (5)
  { kind: 'rect', x: 80, y: 230, w: 240, h: 12, fill: true }, // frieze band (4)
  { kind: 'path', d: 'M175 280 L175 252 A25 25 0 0 1 225 252 L225 280' }, // entrance arch (7)
  { kind: 'rect', x: 150, y: 168, w: 100, h: 38 }, // drum
  { kind: 'rect', x: 146, y: 160, w: 108, h: 9, fill: true }, // crown cornice ring (3)
  { kind: 'path', d: 'M150 160 C150 108 172 72 200 72 C228 72 250 108 250 160' }, // main dome (1)
  { kind: 'line', x1: 200, y1: 72, x2: 200, y2: 160 }, // rib
  { kind: 'line', x1: 178, y1: 76, x2: 166, y2: 158 }, // rib
  { kind: 'line', x1: 222, y1: 76, x2: 234, y2: 158 }, // rib
  { kind: 'line', x1: 200, y1: 72, x2: 200, y2: 54 }, // finial stem
  { kind: 'circle', cx: 200, cy: 50, r: 5, accent: true }, // finial
  { kind: 'rect', x: 150, y: 204, w: 14, h: 12 }, // capital connection (6)
  { kind: 'rect', x: 236, y: 204, w: 14, h: 12 },
]

const DIAGRAM_CALLOUT_POS = [
  { n: 1, x: 200, y: 112 },
  { n: 2, x: 300, y: 211 },
  { n: 3, x: 254, y: 164 },
  { n: 4, x: 300, y: 236 },
  { n: 5, x: 92, y: 202 },
  { n: 6, x: 157, y: 210 },
  { n: 7, x: 200, y: 264 },
]

const INFOGRAPHIC_IMAGES = [
  '/images/packages/villa-palace-architectural.webp',
  '/images/packages/villa-palace-architectural.webp',
]

function buildData(locale: Locale): PremiumPackageData {
  const t = locale === 'ar' ? domesCornicesContentAr : domesCornicesContent
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
      HotspotDiagram: DomesHeritageFacadeElevation,
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
    kind: 'profile',
    viewBox: '0 0 400 300',
    shapes: DIAGRAM_SHAPES,
    callouts: DIAGRAM_CALLOUT_POS.map((p, i) => ({ ...p, label: t.diagramCallouts[i] })),
  }

  return {
    slug: 'domes-cornices-package',
    designDiagram,
    title: t.title,
    eyebrow: t.eyebrow,
    subtitle: t.subtitle,
    heroDescription: t.heroDescription,
    illustrativeArea: t.illustrativeArea,
    visibleComponents: [...t.visibleComponents],
    HeroIllustration: DomesCornicesIllustration,
    packageIntent: t.packageIntent,
    suitableApplications: [...t.suitableApplications],
    componentDetails,
    infographics: t.infographics.map((info, i) => ({ ...info, image: INFOGRAPHIC_IMAGES[i] })),
    reviewSteps: t.reviewSteps.map(r => ({ ...r })),
  }
}

export function DomesCornicesPackageClient({ locale = 'en' }: { locale?: Locale }) {
  return <PremiumPackageLayout data={buildData(locale)} locale={locale} />
}
