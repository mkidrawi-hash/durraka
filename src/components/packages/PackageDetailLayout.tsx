import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/social-links'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PackagePageData {
  title: string
  eyebrow: string
  subtitle: string
  heroDescription: string
  illustrativeArea: string
  visibleComponents: string[]
  HeroIllustration: () => React.ReactElement
  packageIntent: string
  suitableApplications: string[]
  components: { label: string; note?: string }[]
  designGuidanceAreas: { title: string; body: string }[]
  coordinationNotes: string[]
  informationRequired: string[]
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-accent flex-shrink-0" aria-hidden="true" />
      <span className="text-accent text-xs font-semibold tracking-widest uppercase">{label}</span>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Shared section data ──────────────────────────────────────────────────────

const QUICK_READ = [
  { icon: '◈', text: 'Custom architectural expression, matched to design intent' },
  { icon: '◈', text: 'Precision-engineered GFRC/GRC — manufactured in Saudi Arabia' },
  { icon: '◈', text: 'Suitable for modern, heritage, and contemporary projects' },
  { icon: '◈', text: 'Project-specific scope — every package is engineered to drawings' },
  { icon: '◈', text: 'Technical review required before final quotation' },
]

const FINISH_DIRECTIONS = [
  { label: 'Smooth Finish', description: 'Fine-textured, paint-ready surface for clean contemporary facades.' },
  { label: 'Sandblasted Finish', description: 'Lightly abraded surface revealing the aggregate character.' },
  { label: 'Textured Finish', description: 'Cast texture from mould — ribbed, board-formed, or bespoke.' },
  { label: 'Stone-Like Finish', description: 'Aggregate and pigment combination to replicate natural stone.' },
  { label: 'Custom Colour Finish', description: 'Integral pigment to match RAL, NCS, or project colour specification.' },
  { label: 'Heritage Finish', description: 'Warm-toned, hand-textured surface for heritage and classical projects.' },
]

// ─── Main layout ──────────────────────────────────────────────────────────────

export function PackageDetailLayout({ data }: { data: PackagePageData }) {
  const {
    title,
    eyebrow,
    subtitle,
    heroDescription,
    illustrativeArea,
    visibleComponents,
    HeroIllustration,
    packageIntent,
    suitableApplications,
    components,
    designGuidanceAreas,
    coordinationNotes,
    informationRequired,
  } = data

  return (
    <div className="min-h-screen">

      {/* ── 1. Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <HeroIllustration />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-14 sm:pb-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-xs text-white/40">
            <Link href="/packages" className="hover:text-white/70 transition-colors">Packages</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/60">{title}</span>
          </nav>
          <div className="max-w-3xl">
            <Eyebrow label={eyebrow} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{title}</h1>
            <p className="text-white/80 text-lg sm:text-xl font-light mb-3 leading-relaxed">{subtitle}</p>
            <p className="text-white/60 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl">{heroDescription}</p>

            {/* Illustrative area + components at a glance */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/8 border border-white/15 rounded-sm px-4 py-3">
                <p className="text-white/40 text-[9px] font-semibold tracking-widest uppercase mb-0.5">Illustrative Area</p>
                <p className="text-white font-semibold text-sm">{illustrativeArea}</p>
              </div>
              <div className="bg-white/8 border border-white/15 rounded-sm px-4 py-3">
                <p className="text-white/40 text-[9px] font-semibold tracking-widest uppercase mb-1">Visible Components</p>
                <div className="flex flex-wrap gap-1.5">
                  {visibleComponents.map((c) => (
                    <span key={c} className="text-white/70 text-[10px] font-medium bg-white/10 px-2 py-0.5 rounded-sm">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/request-quotation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="inline-flex items-center gap-1.5 px-4 py-3 text-white/35 text-[10px] font-semibold tracking-widest uppercase">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AI Concept Reference — Not a completed project
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Quick Read ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {QUICK_READ.map(({ icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <span className="text-accent text-base leading-none flex-shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                <p className="text-navy/70 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Package Intent ─────────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Package Intent" />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">What This Package Is Designed To Achieve</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{packageIntent}</p>
            </div>
            <div className="bg-navy/4 border border-navy/10 rounded-sm p-6">
              <p className="text-navy/40 text-[10px] font-semibold tracking-widest uppercase mb-4">Suitable Applications</p>
              <ul className="space-y-3">
                {suitableApplications.map((app) => (
                  <li key={app} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-navy/80 text-sm leading-snug">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Package Components ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Typical Components" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">Package Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((item) => (
              <div key={item.label} className="flex items-start gap-3.5 bg-white border border-gray-100 rounded-sm p-4">
                <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm leading-snug">{item.label}</p>
                  {item.note && <p className="text-gray-400 text-xs mt-0.5">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Design Guidance Areas ──────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Design Guidance" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Design Guidance Areas</h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            Our engineering team can advise on the following design decisions during the pre-manufacture stage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {designGuidanceAreas.map((area, i) => (
              <div key={area.title} className="bg-gray-50 border border-gray-100 rounded-sm p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent/50 text-xs font-bold tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-navy font-semibold text-sm mb-2 leading-snug">{area.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Coordination Notes ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="For Engineers & Consultants" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Coordination Notes</h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            Points to consider before initiating a technical review or pricing request.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coordinationNotes.map((note, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-sm p-5">
                <span className="text-[1.75rem] font-bold text-navy/10 leading-none flex-shrink-0 select-none tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed pt-1">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Finish Directions ──────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Finishes" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">Available Finish Directions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {FINISH_DIRECTIONS.map((finish) => (
              <div key={finish.label} className="bg-gray-50 border border-gray-100 rounded-sm p-4 sm:p-5">
                <div className="w-6 h-1 bg-accent/40 rounded-full mb-3" aria-hidden="true" />
                <p className="text-navy font-semibold text-sm mb-1.5">{finish.label}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{finish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Information Required ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Before We Can Quote" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Information Required for Technical Review</h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            Submit the following to receive an accurate GFRC/GRC scope and pricing proposal. Our engineering team will review and follow up promptly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
            {informationRequired.map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/12 border border-accent/25 flex items-center justify-center flex-shrink-0">
                  <CheckIcon />
                </div>
                <span className="text-navy/80 text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Request More Information ──────────────────────────────────── */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-navy/4 border border-navy/12 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-navy font-bold text-lg sm:text-xl mb-2">Request More Information</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                Tell us about your project and our team will assist you with the suitable GFRC/GRC package, finish direction, and technical review requirements.
              </p>
            </div>
            <Link
              href="/request-quotation"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
            >
              Request Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 11. Specialist Help ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-navy rounded-sm p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Expert Support</p>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Need help choosing the right package?</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg mb-6">
                Share your project details and our team will recommend the most suitable GFRC/GRC package based on drawings, project type, design intent, and required finish direction.
              </p>
              <ol className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                {['Share project details', 'Get expert recommendation', 'Move forward with confidence'].map((step, i) => (
                  <li key={step} className="flex items-start gap-2.5">
                    <span className="text-accent font-bold text-sm leading-none flex-shrink-0 mt-0.5">{i + 1}.</span>
                    <span className="text-white/70 text-sm leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <Link
              href={SOCIAL_LINKS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-sm hover:bg-white/20 transition-colors"
            >
              <WhatsAppIcon />
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. Important Note ────────────────────────────────────────────── */}
      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="border border-navy/10 rounded-sm p-5 sm:p-6 max-w-3xl">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-navy/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-navy/60 font-semibold">Important Note — </span>
                Visuals shown are AI-generated conceptual references for system presentation purposes. Final project solutions depend on approved drawings, specifications, site conditions, and technical review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. Final CTA ─────────────────────────────────────────────────── */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Have a project in mind?
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Our team is ready to help you with technical support, samples, quotations, and project-specific recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-quotation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors w-full sm:w-auto"
            >
              Request a Quote
            </Link>
            <Link
              href={SOCIAL_LINKS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-sm hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              <WhatsAppIcon />
              WhatsApp Durraka
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
