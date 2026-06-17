import type { Metadata } from 'next'
import Link from 'next/link'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { DiagramEnlarger } from '@/components/systems/DiagramEnlarger'

export const metadata: Metadata = {
  title: 'Grand Entrance Package | GFRC / GRC Architectural Entrance Systems | Durraka',
  description:
    'Premium GFRC / GRC grand entrance package for villas, majlis, hospitality, palaces, and landmark façades. Custom columns, frames, cornices, arches, and decorative elements by Durraka Factory for Industry.',
}

const INCLUDED_ITEMS = [
  {
    title: 'Entrance Columns',
    desc: 'Architectural columns scaled to the entrance proportion and façade character.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="6" width="6" height="30" rx="1" stroke="#071B3B" strokeWidth="1.5" fill="#071B3B" fillOpacity="0.07" />
        <rect x="26" y="6" width="6" height="30" rx="1" stroke="#071B3B" strokeWidth="1.5" fill="#071B3B" fillOpacity="0.07" />
        <rect x="5" y="4" width="12" height="4" rx="0.5" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.1" />
        <rect x="23" y="4" width="12" height="4" rx="0.5" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.1" />
        <rect x="5" y="34" width="12" height="3" rx="0.5" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.1" />
        <rect x="23" y="34" width="12" height="3" rx="0.5" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    title: 'Feature Arch or Frame',
    desc: 'A strong entrance frame or arch element to define the main arrival point.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M 10 34 L 10 20 A 10 10 0 0 1 30 20 L 30 34" stroke="#071B3B" strokeWidth="1.5" fill="#071B3B" fillOpacity="0.07" />
        <rect x="7" y="34" width="26" height="3" rx="0.5" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.1" />
        <rect x="7" y="5" width="3" height="29" rx="0.5" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.1" />
        <rect x="30" y="5" width="3" height="29" rx="0.5" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    title: 'Cornice Line',
    desc: 'Horizontal architectural detailing to complete the upper composition.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="4" y="10" width="32" height="7" rx="0.5" stroke="#071B3B" strokeWidth="1.5" fill="#071B3B" fillOpacity="0.08" />
        <rect x="6" y="17" width="28" height="4" rx="0.5" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.05" />
        <rect x="6" y="21" width="28" height="3" rx="0.5" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.04" />
        <line x1="4" y1="26" x2="36" y2="26" stroke="#071B3B" strokeWidth="1" strokeOpacity="0.25" />
        <rect x="4" y="28" width="32" height="9" rx="0.5" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.05" />
      </svg>
    ),
  },
  {
    title: 'Decorative Panels',
    desc: 'Patterned or plain GFRC / GRC panels based on the design direction.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="4" y="4" width="14" height="14" rx="1" stroke="#071B3B" strokeWidth="1.4" fill="#071B3B" fillOpacity="0.07" />
        <rect x="22" y="4" width="14" height="14" rx="1" stroke="#071B3B" strokeWidth="1.4" fill="#071B3B" fillOpacity="0.07" />
        <rect x="4" y="22" width="14" height="14" rx="1" stroke="#071B3B" strokeWidth="1.4" fill="#071B3B" fillOpacity="0.07" />
        <rect x="22" y="22" width="14" height="14" rx="1" stroke="#071B3B" strokeWidth="1.4" fill="#071B3B" fillOpacity="0.07" />
        <line x1="9" y1="9" x2="13" y2="9" stroke="#071B3B" strokeWidth="0.7" strokeOpacity="0.3" />
        <line x1="27" y1="9" x2="31" y2="9" stroke="#071B3B" strokeWidth="0.7" strokeOpacity="0.3" />
        <line x1="9" y1="27" x2="13" y2="27" stroke="#071B3B" strokeWidth="0.7" strokeOpacity="0.3" />
        <line x1="27" y1="27" x2="31" y2="27" stroke="#071B3B" strokeWidth="0.7" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Custom Profiles',
    desc: 'Project-based profiles developed according to drawings and visual intent.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <polyline points="6,34 6,22 12,22 12,16 18,16 18,10 26,10 26,6 34,6 34,34" stroke="#071B3B" strokeWidth="1.5" fill="#071B3B" fillOpacity="0.06" />
        <line x1="4" y1="34" x2="36" y2="34" stroke="#071B3B" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Engineering Review',
    desc: 'Coordination review based on project drawings before production planning.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="7" y="4" width="22" height="28" rx="1.5" stroke="#071B3B" strokeWidth="1.4" fill="#071B3B" fillOpacity="0.05" />
        <line x1="12" y1="12" x2="24" y2="12" stroke="#071B3B" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="12" y1="17" x2="24" y2="17" stroke="#071B3B" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="12" y1="22" x2="20" y2="22" stroke="#071B3B" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="28" cy="31" r="7" fill="white" stroke="#D71920" strokeWidth="1.5" />
        <path d="M 24.5 31 L 27 33.5 L 32 28" stroke="#D71920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const BEST_FOR = [
  'Luxury villa entrances',
  'Palace and private residence façades',
  'Majlis and guest entrances',
  'Hospitality and resort entrances',
  'Wedding halls and event venues',
  'Government and semi-government landmark entrances',
  'Commercial landmark façades',
]

const STYLES = [
  {
    name: 'Contemporary Saudi',
    desc: 'Clean geometric lines with a modern Saudi architectural identity, refined for contemporary developments.',
  },
  {
    name: 'Hijazi Inspired',
    desc: 'Drawing on the Hijazi architectural vocabulary with ornamental layering and regional surface expression.',
  },
  {
    name: 'Najdi Inspired',
    desc: 'Rooted in the Najdi heritage language — bold geometric forms, deep reveals, and strong linear character.',
  },
  {
    name: 'Classical Entrance',
    desc: 'Columnar composition with cornice, frieze, and classical order elements adapted to the project scale.',
  },
  {
    name: 'Minimal Modern',
    desc: 'Restrained composition with precise lines, minimal surface relief, and refined material expression.',
  },
  {
    name: 'Custom Architectural Identity',
    desc: 'A direction developed specifically for the project based on provided references, drawings, and design intent.',
  },
]

const FINISHES = [
  {
    label: 'Smooth Architectural Finish',
    desc: 'Clean, refined surface suitable for contemporary compositions.',
  },
  {
    label: 'Stone-Like Texture',
    desc: 'A textured surface that evokes natural stone without the weight or maintenance burden.',
  },
  {
    label: 'Sandblast-Inspired Finish',
    desc: 'Open-grained surface treatment creating a warm, tactile quality for heritage-influenced designs.',
  },
  {
    label: 'Custom Colour Matching',
    desc: 'Colour-matched to the project palette, scheme, or specific material reference samples.',
  },
  {
    label: 'Heritage-Inspired Surface',
    desc: 'A surface expression referencing traditional material culture and regional architectural identity.',
  },
]

const CALLOUTS = [
  {
    n: 1,
    label: 'Main Entrance Frame',
    desc: 'The outer architectural frame defining the entrance composition. Scale, proportion, and form are developed according to project drawings.',
  },
  {
    n: 2,
    label: 'Side Columns',
    desc: 'GFRC / GRC columns flanking the entrance, scaled to the opening and façade character. Available in classical and contemporary profiles.',
  },
  {
    n: 3,
    label: 'Upper Cornice',
    desc: 'Horizontal cornice line completing the top of the composition. Provides visual definition and architectural expression at the crown.',
  },
  {
    n: 4,
    label: 'Decorative Panel Zone',
    desc: 'GFRC / GRC panel areas within the composition. Pattern, relief depth, and design direction are defined per project.',
  },
  {
    n: 5,
    label: 'Arch / Canopy Zone',
    desc: 'Optional arch or canopy element crowning the entrance opening. Style and form are guided by architectural language and project requirement.',
  },
  {
    n: 6,
    label: 'Project-Based Customisation',
    desc: 'Scale, style, finish, and element configuration are developed according to project drawings and design intent. No two packages are identical.',
  },
]

const RFQ_ITEMS = [
  'Elevation drawings or façade concept',
  'Approximate entrance width and height',
  'Project location',
  'Preferred architectural style',
  'Required finish or colour direction',
  'Quantity or number of entrances',
  'Target timeline',
  'Any available reference images',
]

function Diagram() {
  return (
    <svg
      viewBox="0 0 400 265"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl mx-auto"
      aria-label="Simplified grand entrance composition diagram"
    >
      <rect width="400" height="265" fill="#F8F9FA" />

      {/* Ground line */}
      <line x1="18" y1="254" x2="382" y2="254" stroke="#071B3B" strokeWidth="2.5" />

      {/* Main entrance frame (1) */}
      <rect x="52" y="40" width="296" height="214" stroke="#071B3B" strokeWidth="1.3" fill="white" fillOpacity="0.5" />

      {/* Left column (2) */}
      <rect x="52" y="40" width="38" height="214" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.09" />
      <line x1="58" y1="40" x2="58" y2="254" stroke="#071B3B" strokeOpacity="0.15" strokeWidth="0.6" />
      <line x1="84" y1="40" x2="84" y2="254" stroke="#071B3B" strokeOpacity="0.15" strokeWidth="0.6" />

      {/* Right column (2) */}
      <rect x="310" y="40" width="38" height="214" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.09" />
      <line x1="316" y1="40" x2="316" y2="254" stroke="#071B3B" strokeOpacity="0.15" strokeWidth="0.6" />
      <line x1="342" y1="40" x2="342" y2="254" stroke="#071B3B" strokeOpacity="0.15" strokeWidth="0.6" />

      {/* Upper cornice (3) */}
      <rect x="38" y="16" width="324" height="26" stroke="#071B3B" strokeWidth="1.3" fill="#071B3B" fillOpacity="0.08" />
      <rect x="44" y="32" width="312" height="8" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.05" />

      {/* Left decorative panel — spandrel (4) */}
      <rect x="90" y="40" width="58" height="72" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.05" />
      <line x1="90" y1="56" x2="148" y2="56" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />
      <line x1="90" y1="74" x2="148" y2="74" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />
      <line x1="90" y1="92" x2="148" y2="92" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />

      {/* Right decorative panel — spandrel (4) */}
      <rect x="252" y="40" width="58" height="72" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.05" />
      <line x1="252" y1="56" x2="310" y2="56" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />
      <line x1="252" y1="74" x2="310" y2="74" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />
      <line x1="252" y1="92" x2="310" y2="92" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />

      {/* Arch / canopy zone (5) — upward semicircle, center (200,112), r=52 */}
      <path d="M 148 112 A 52 52 0 0 1 252 112" stroke="#071B3B" strokeWidth="1.4" />
      <path d="M 148 112 A 52 52 0 0 1 252 112 Z" fill="#071B3B" fillOpacity="0.03" stroke="none" />
      {/* Keystone accent at arch apex */}
      <rect x="195" y="57" width="10" height="12" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.15" />

      {/* Door opening */}
      <rect x="155" y="112" width="90" height="142" stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.06" />
      <line x1="200" y1="112" x2="200" y2="254" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" strokeDasharray="3 2" />
      <rect x="161" y="122" width="32" height="58" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" fill="none" />
      <rect x="207" y="122" width="32" height="58" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" fill="none" />

      {/* Project-based customisation zone indicator (6) — dashed overlay */}
      <rect x="90" y="112" width="220" height="142" stroke="#D71920" strokeWidth="0.8" fill="none" strokeDasharray="5 3" strokeOpacity="0.35" />

      {/* Callout 1 — Main entrance frame, left mid */}
      <LeaderLine x1="52" y1="182" x2="22" y2="182" />
      <CalloutBadge n={1} cx={13} cy={182} />

      {/* Callout 2 — Side columns, right mid */}
      <LeaderLine x1="348" y1="147" x2="378" y2="147" />
      <CalloutBadge n={2} cx={387} cy={147} />

      {/* Callout 3 — Upper cornice, left top */}
      <LeaderLine x1="38" y1="28" x2="22" y2="28" />
      <CalloutBadge n={3} cx={13} cy={28} />

      {/* Callout 4 — Decorative panels, right upper */}
      <LeaderLine x1="310" y1="74" x2="378" y2="74" />
      <CalloutBadge n={4} cx={387} cy={74} />

      {/* Callout 5 — Arch zone, right upper (leader from arch curve) */}
      <LeaderLine x1="238" y1="80" x2="378" y2="40" />
      <CalloutBadge n={5} cx={387} cy={32} />

      {/* Callout 6 — Customisation zone, left lower */}
      <LeaderLine x1="90" y1="218" x2="22" y2="218" />
      <CalloutBadge n={6} cx={13} cy={218} />
    </svg>
  )
}

export default function GrandEntrancePackagePage() {
  return (
    <div className="bg-white">

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="bg-navy pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-white/40 text-[11px] font-mono tracking-wider uppercase" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span>Packages</span>
            <span>/</span>
            <span className="text-white/70">Grand Entrance Package</span>
          </nav>

          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                Architectural Package
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Grand Entrance Package
            </h1>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
              A premium GFRC / GRC entrance composition designed for villas, majlis, hospitality projects, palaces, and landmark façades.
            </p>

            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-2xl">
              Combine columns, frames, cornices, arches, and decorative elements into one coordinated façade entrance package, developed around your project drawings and architectural direction.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/request-quotation"
                className="min-h-[52px] flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
              >
                Request a Quotation
              </Link>
              <Link
                href="/contact"
                className="min-h-[52px] flex items-center justify-center px-8 py-3 border border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm"
              >
                Speak to a Sales Engineer
              </Link>
            </div>

            <p className="text-white/35 text-[11px] tracking-wide">
              Customisable by scale, style, finish, and project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Package Overview ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                Overview
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-5 leading-snug">
              A Complete Architectural Entrance Composition
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
              The Grand Entrance Package is designed to help developers, consultants, and private clients create a strong first impression using coordinated GFRC / GRC architectural elements. Each package can be adapted to the project scale, façade language, regional identity, and required finish.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Rather than specifying individual elements separately, the package provides a coordinated design approach — ensuring columns, frames, cornices, and panels work together as a unified architectural composition from the outset.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. What's Included ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                Package Contents
              </span>
              <div className="w-6 h-px bg-accent flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              What&apos;s Included
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {INCLUDED_ITEMS.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-sm p-6 hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-navy font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Best For ─────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                Applications
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8 sm:mb-10">
              Best Suited For
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BEST_FOR.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-accent" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M1 4l2 2 4-4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-navy text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Design Style Options ─────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                Design Directions
              </span>
              <div className="w-6 h-px bg-accent flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Style Options
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              The following represent available design directions, not pre-approved or finalised styles. Each direction is refined according to the project&apos;s architectural intent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {STYLES.map((style) => (
              <div key={style.name} className="bg-white border border-gray-100 rounded-sm p-6">
                <div className="w-8 h-[3px] bg-accent mb-4" />
                <h3 className="text-navy font-bold text-sm mb-2">{style.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Composition Diagram ──────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                System Overview
              </span>
              <div className="w-6 h-px bg-accent flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Composition Diagram
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              A simplified front-elevation overview of the Grand Entrance Package composition and its key architectural zones.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-navy/10 p-2 sm:p-5 rounded-sm">
              <p className="text-[#071B3B]/35 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase mb-3">
                Grand Entrance Package — Composition Overview
              </p>
              <DiagramEnlarger title="Grand Entrance Package">
                <Diagram />
              </DiagramEnlarger>
            </div>

            {/* Callout reference grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CALLOUTS.map((c) => (
                <div key={c.n} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold leading-none">{c.n}</span>
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-xs">{c.label}</p>
                    <p className="text-gray-400 text-[11px] leading-relaxed mt-0.5">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Finish Options ───────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                Surface Quality
              </span>
              <div className="w-6 h-px bg-accent flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Finish Options
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FINISHES.map((f) => (
                <div key={f.label} className="bg-white border border-gray-100 rounded-sm p-5">
                  <div className="w-full h-1 bg-navy/08 rounded mb-4" style={{ background: 'rgba(7,27,59,0.08)' }} />
                  <h3 className="text-navy font-semibold text-xs mb-1.5">{f.label}</h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-gray-400 text-[11px] leading-relaxed max-w-lg mx-auto">
              Finish selection is reviewed based on project requirements, approved samples, and intended architectural expression.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. RFQ Requirements ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                Quotation
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Information Required for Quotation
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              To prepare an accurate quotation for the Grand Entrance Package, the following information is requested where available.
            </p>

            <ul className="space-y-3 mb-10">
              {RFQ_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                  <div className="mt-0.5 w-5 h-5 rounded-sm bg-navy/05 border border-navy/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <span className="text-navy text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/request-quotation"
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center px-10 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
            >
              Submit Your Entrance Package RFQ
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ────────────────────────────────────────── */}
      <section
        className="bg-navy pt-20 sm:py-24"
        style={{ paddingBottom: 'calc(96px + env(safe-area-inset-bottom))' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
              Get Started
            </span>
            <div className="w-8 h-px bg-accent flex-shrink-0" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-5 max-w-2xl mx-auto leading-snug">
            Ready to Create a Landmark Entrance?
          </h2>

          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Share your drawings, dimensions, and design direction. Durraka&apos;s team will review your requirements and help define a suitable GFRC / GRC entrance package for your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/request-quotation"
              className="min-h-[56px] flex items-center justify-center px-10 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm sm:text-base"
            >
              Request a Quotation
            </Link>
            <Link
              href="/contact"
              className="min-h-[56px] flex items-center justify-center px-10 py-3.5 border border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              Speak to a Sales Engineer
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
