import Link from 'next/link'
import { FinishSwatch } from './FinishSwatch'

export const DEFAULT_FINISHES = [
  { type: 'smooth',      label: 'Smooth Finish',            desc: 'Clean architectural surface for contemporary façade expressions.' },
  { type: 'sandblasted', label: 'Sandblasted Finish',       desc: 'Refined textured surface with a natural mineral appearance.' },
  { type: 'textured',    label: 'Textured Finish',          desc: 'Controlled surface texture for depth and visual character.' },
  { type: 'stone',       label: 'Stone-Like Finish',        desc: 'Architectural finish inspired by natural stone aesthetics.' },
  { type: 'concrete',    label: 'Concrete-Look Finish',     desc: 'Minimal cementitious appearance for contemporary projects.' },
  { type: 'colour',      label: 'Custom Colour Finish',     desc: 'Project-based colour direction developed to match design intent.' },
  { type: 'heritage',    label: 'Heritage-Inspired Finish', desc: 'Finish direction for traditional and regional architectural language.' },
  { type: 'project',     label: 'Project-Specific Finish',  desc: 'Custom surface direction reviewed according to project requirements.' },
]

export const DEFAULT_INFO_REQUIRED = [
  'Architectural drawings or elevations',
  'Approximate façade area',
  'Project location',
  'Required GFRC / GRC system',
  'Design intent images or references',
  'Preferred finish direction',
  'Project timeline',
  'Consultant or client requirements',
  'Installation scope requirement, if applicable',
  'Any special architectural features',
]

export type Callout = { n: number; label: string; desc: string }
export type BenefitItem = { label: string; desc: string }
export type GuidanceItem = { label: string; desc: string }
export type FinishItem = { type: string; label: string; desc: string }

export type SystemPageData = {
  title: string
  breadcrumb: string
  subtitle: string
  heroDescription: string
  heroImage: string
  heroImageAlt: string
  heroObjectPosition?: string
  whatEyebrow?: string
  whatTitle: string
  whatBody: string
  benefitsTitle?: string
  benefits: BenefitItem[]
  diagramLabel?: string
  diagramDescription?: string
  Diagram: React.ComponentType
  callouts: Callout[]
  applicationsEyebrow?: string
  applications: string[]
  finishes?: FinishItem[]
  designGuidanceTitle?: string
  designGuidance: GuidanceItem[]
  infoRequired?: string[]
  ctaTitle: string
  ctaBody?: string
}

export function SystemPageLayout({ data }: { data: SystemPageData }) {
  const finishes = data.finishes ?? DEFAULT_FINISHES
  const infoRequired = data.infoRequired ?? DEFAULT_INFO_REQUIRED
  const { Diagram } = data

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className="relative bg-navy pt-16 pb-16 sm:pb-24 px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.22]"
          style={{ objectPosition: data.heroObjectPosition ?? 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/55" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <Link
              href="/systems"
              className="text-accent text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors"
            >
              Our Systems
            </Link>
            <div className="w-4 h-px bg-white/20" />
            <span className="text-white/40 text-xs tracking-widest uppercase">{data.breadcrumb}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-2xl">
            {data.title}
          </h1>
          <p className="text-accent font-semibold tracking-wide text-sm sm:text-base mb-4">
            {data.subtitle}
          </p>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            {data.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/request-quotation"
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
            >
              Request a Quotation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 border border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm"
            >
              Download System Overview
            </Link>
          </div>
        </div>
      </div>

      {/* ── WHAT IS IT? ──────────────────────────────────────────────────── */}
      <div className="bg-white px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                {data.whatEyebrow ?? 'System Overview'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
              {data.whatTitle}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{data.whatBody}</p>
          </div>
        </div>
      </div>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Why Choose This System</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-8">
            {data.benefitsTitle ?? 'System Advantages'}
          </h2>
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

      {/* ── SYSTEM OVERVIEW DIAGRAM ───────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">System Diagram</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">System Overview</h2>
          <p className="text-gray-500 text-sm max-w-xl mb-10 leading-relaxed">
            {data.diagramDescription ?? 'A simplified visual overview of the system. This diagram represents design intent and system logic only.'}
          </p>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3 bg-[#F8F9FA] border border-navy/10 p-6 sm:p-8 rounded-sm">
              <p className="text-navy/35 text-[10px] font-mono tracking-widest uppercase mb-4">
                {data.diagramLabel ?? `${data.title} — Overview`}
              </p>
              <Diagram />
            </div>
            <div className="lg:col-span-2">
              <ol className="space-y-4">
                {data.callouts.map((c) => (
                  <li key={c.n} className="flex items-start gap-3 pb-4 border-b border-navy/8 last:border-0 last:pb-0">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {c.n}
                    </span>
                    <div>
                      <p className="text-navy font-semibold text-sm leading-snug">{c.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* ── TYPICAL APPLICATIONS ──────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              {data.applicationsEyebrow ?? 'Where It Is Used'}
            </span>
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

      {/* ── FINISH DIRECTIONS ─────────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Surface Options</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">Finish Directions</h2>
          <p className="text-gray-500 text-sm max-w-xl mb-10 leading-relaxed">
            A range of surface finish directions is available to suit different design intentions
            and architectural contexts.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {finishes.map((f) => (
              <div key={f.type} className="border border-navy/10 rounded-sm overflow-hidden hover:border-accent/40 hover:shadow-sm transition-all group">
                <div className="h-14 overflow-hidden">
                  <FinishSwatch type={f.type} />
                </div>
                <div className="p-4">
                  <h3 className="text-navy font-bold text-xs mb-1.5 group-hover:text-accent transition-colors leading-snug">
                    {f.label}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-navy/40 text-[11px] mt-6 leading-relaxed max-w-2xl">
            Surface swatches are schematic representations only. Final finish direction is confirmed
            during project review and approved sample / mockup process where required.
          </p>
        </div>
      </div>

      {/* ── DESIGN GUIDANCE ───────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Design Considerations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">
            {data.designGuidanceTitle ?? 'Design Guidance'}
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mb-10 leading-relaxed">
            High-level guidance on how this system is typically developed through the design
            and coordination process.
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

      {/* ── INFORMATION REQUIRED ──────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/8 px-4 py-14 sm:py-20">
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
                To prepare a tailored quotation or project review, the following information
                is typically required.
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
                <div key={item} className="flex items-start gap-2.5 bg-[#F8F9FA] border border-navy/8 p-4 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  <p className="text-navy/70 text-xs leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TECHNICAL NOTE ────────────────────────────────────────────────── */}
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

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
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
