import Link from 'next/link'
import { FinishSwatch } from './FinishSwatch'
import { DEFAULT_FINISHES, DEFAULT_INFO_REQUIRED } from './SystemPageLayout'
import type { Callout, BenefitItem, GuidanceItem } from './SystemPageLayout'

export type DetailCard = {
  title: string
  Drawing: React.ComponentType
  callouts: string[]
}

export type SystemBoardData = {
  title: string
  boardTitle?: string
  boardTagline?: string
  breadcrumb: string
  subtitle: string
  heroDescription: string
  heroImage: string
  heroImageAlt: string
  heroObjectPosition?: string
  whatTitle: string
  whatBody: string
  benefits: BenefitItem[]
  Diagram: React.ComponentType
  callouts: Callout[]
  boardComponents?: string[]
  detailCards: DetailCard[]
  applications: string[]
  designGuidance: GuidanceItem[]
  ctaTitle: string
  ctaBody?: string
  finishesIntro?: string
}

const FEATURE_ATTRIBUTES = [
  {
    label: 'Lightweight\n& Durable',
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 3 L13 8 L18 8.5 L14 12 L15 17 L10 14.5 L5 17 L6 12 L2 8.5 L7 8 Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Precision\nEngineered',
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="10" cy="10" r="7" />
        <circle cx="10" cy="10" r="2" />
        <line x1="10" y1="3" x2="10" y2="1" />
        <line x1="10" y1="17" x2="10" y2="19" />
        <line x1="3" y1="10" x2="1" y2="10" />
        <line x1="17" y1="10" x2="19" y2="10" />
      </svg>
    ),
  },
  {
    label: 'Weather\nResistant',
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 2 Q14 6 14 10 Q14 15 10 18 Q6 15 6 10 Q6 6 10 2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Fire\nResistant',
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 17 Q5 14 5 9 Q7 11 8 9 Q8 6 10 3 Q11 6 13 7 Q14 5 15 7 Q17 10 15 13 Q14 15 10 17Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Sustainable\nSolution',
    icon: (
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 3 Q16 5 16 10 Q16 16 10 18 Q4 16 4 10 Q4 5 10 3Z" strokeLinejoin="round" />
        <path d="M7 10 Q10 7 13 10 Q10 13 7 10Z" />
      </svg>
    ),
  },
]

const METADATA_ITEMS = [
  { label: 'System Type', value: 'GFRC / GRC' },
  { label: 'Application', value: 'Exterior / Interior' },
  { label: 'Origin', value: 'Saudi Arabia' },
  { label: 'Production', value: 'Kingdom-wide' },
]

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" className="w-3 h-3 flex-shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="2,6 5,9 10,3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function SystemBoardLayout({ data }: { data: SystemBoardData }) {
  const { Diagram } = data
  const boardComponents = data.boardComponents ?? data.callouts.slice(0, 6).map(c => c.label)
  const infoRequired = DEFAULT_INFO_REQUIRED
  const finishes = DEFAULT_FINISHES

  return (
    <div className="min-h-screen bg-white">

      {/* ── BOARD PANEL ─────────────────────────────────────────────────────── */}
      <div className="bg-[#FAFAF9] border-b border-navy/10 px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* Top strip */}
          <div className="border-l-4 border-accent pl-4 mb-6">
            <div className="flex items-center gap-3 mb-1">
              <Link
                href="/systems"
                className="text-accent text-xs font-semibold tracking-widest uppercase hover:text-navy transition-colors"
              >
                Components
              </Link>
              <span className="text-navy/25 text-xs">/</span>
              <span className="text-navy/40 text-xs tracking-widest uppercase">{data.breadcrumb}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight uppercase">
              {data.boardTitle ?? data.title}
            </h1>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mt-1">
              GFRC / GRC {data.breadcrumb}
            </p>
            <p className="text-navy/50 text-xs mt-1">{data.boardTagline ?? data.subtitle}</p>
          </div>

          {/* Two-column grid */}
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-start">

            {/* Left column */}
            <div>
              {/* Hero image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.heroImage}
                alt={data.heroImageAlt}
                className="w-full aspect-[16/10] object-cover rounded-sm border border-navy/10"
                style={{ objectPosition: data.heroObjectPosition ?? 'center' }}
              />

              {/* Metadata grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {METADATA_ITEMS.map((item) => (
                  <div key={item.label}>
                    <p className="text-[9px] font-semibold tracking-widest uppercase text-navy/40">{item.label}</p>
                    <p className="text-navy text-xs font-semibold mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Component checklist */}
              <div className="mt-4">
                <p className="text-[9px] font-semibold tracking-widest uppercase text-navy/40 mb-2">
                  GFRC / GRC COMPONENTS
                </p>
                <ul className="space-y-0">
                  {boardComponents.slice(0, 6).map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs text-navy/70 py-0.5">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature attributes strip */}
              <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-navy/[0.08]">
                {FEATURE_ATTRIBUTES.map((attr) => (
                  <div key={attr.label} className="flex flex-col items-center gap-1">
                    <div className="text-navy/50">{attr.icon}</div>
                    <p className="text-[9px] font-semibold text-navy/60 text-center leading-tight whitespace-pre-line">
                      {attr.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div>
              <p className="text-[9px] font-semibold tracking-widest uppercase text-navy/40 mb-3">
                EXPLODED OVERVIEW / FACADE SYSTEM
              </p>

              {/* Diagram */}
              <div className="bg-white border border-navy/[0.08] p-3 rounded-sm">
                <Diagram />
              </div>

              {/* Callout legend */}
              <div className="mt-4 space-y-2">
                {data.callouts.map((c) => (
                  <div key={c.n} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-accent text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {c.n}
                    </span>
                    <div>
                      <p className="text-navy font-semibold text-xs">{c.label}</p>
                      <p className="text-navy/50 text-[10px] leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── TECHNICAL DETAILS ───────────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/[0.08] px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Technical Details</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-6">Component Details</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.detailCards.map((card) => {
              const { Drawing } = card
              return (
                <div
                  key={card.title}
                  className="border border-navy/10 rounded-sm overflow-hidden hover:border-accent/30 transition-colors"
                >
                  <div className="bg-[#F8F9FA] p-2">
                    <Drawing />
                  </div>
                  <div className="p-3">
                    <p className="text-[9px] font-semibold tracking-widest uppercase text-navy/50 mb-2">{card.title}</p>
                    <ul className="space-y-1">
                      {card.callouts.map((c) => (
                        <li key={c} className="text-[10px] text-navy/60 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── BENEFITS ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/[0.08] px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Why Choose This System</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-8">System Advantages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.benefits.map((b) => (
              <div key={b.label} className="bg-white border border-navy/10 p-6 rounded-sm hover:border-accent/40 hover:shadow-sm transition-all">
                <div className="w-2 h-2 rounded-full bg-accent mb-4" />
                <h3 className="text-navy font-bold text-sm mb-2 leading-snug">{b.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TYPICAL APPLICATIONS ─────────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/[0.08] px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Where It Is Used</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-8">Typical Applications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.applications.map((app) => (
              <div key={app} className="bg-white border border-navy/10 p-4 rounded-sm hover:border-accent/40 hover:shadow-sm transition-all flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                <p className="text-navy font-semibold text-xs leading-snug">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESIGN GUIDANCE ──────────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/[0.08] px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Design Considerations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">Design Guidance</h2>
          <p className="text-gray-500 text-sm max-w-xl mb-10 leading-relaxed">
            High-level guidance on how this system is typically developed through the design and coordination process.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.designGuidance.map((g, i) => (
              <div key={g.label} className="bg-white border border-navy/10 p-6 rounded-sm hover:border-accent/40 hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent text-[10px] font-bold font-mono tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-navy/10" />
                </div>
                <h3 className="text-navy font-bold text-sm mb-2 leading-snug">{g.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INFORMATION REQUIRED ─────────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/[0.08] px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-accent flex-shrink-0" />
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">Getting Started</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4">
                Information Required for Quotation
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                To prepare a tailored quotation or project review, the following information is typically required.
              </p>
              <Link
                href="/request-quotation"
                className="inline-flex items-center gap-2 min-h-[50px] px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
              >
                Request a Quotation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {infoRequired.map((item) => (
                <div key={item} className="flex items-start gap-2.5 bg-[#F8F9FA] border border-navy/[0.08] p-4 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  <p className="text-navy/70 text-xs leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TECHNICAL NOTE ───────────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/10 px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="border border-navy/15 bg-white p-6 rounded-sm">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-navy/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-navy/55 text-xs leading-relaxed">
                <span className="font-semibold text-navy/70">Technical Note: </span>
                This page is provided for material understanding, design guidance, and early project
                coordination only. Project-specific engineering details are issued through approved
                project submissions where required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <div className="bg-navy px-4 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Start Your Project</span>
            <div className="w-8 h-px bg-accent flex-shrink-0" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{data.ctaTitle}</h2>
          <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.ctaBody ?? "Share your drawings, design intent, or project requirements and Durraka's team will help you define the right GFRC / GRC package for your project."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/request-quotation"
              className="inline-flex items-center justify-center min-h-[52px] px-10 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
            >
              Request a Quotation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[52px] px-10 py-3.5 border border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm"
            >
              Speak to a Sales Engineer
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
