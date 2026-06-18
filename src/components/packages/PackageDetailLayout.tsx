import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/social-links'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PackageHero {
  eyebrow?: string
  title: string
  subtitle: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  heroImage?: string
}

export interface PackageOverview {
  body: string
  suitedFor: string[]
}

export interface PackageComponent {
  label: string
  note?: string
}

export interface RequiredDoc {
  label: string
  description: string
}

export interface ExtractItem {
  source: string
  extracts: string
}

export interface PackageDetailData {
  hero: PackageHero
  overview: PackageOverview
  components: PackageComponent[]
  requiredDocs: RequiredDoc[]
  extractItems: ExtractItem[]
  processSteps: string[]
  ctaHeadline: string
  ctaSubline?: string
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
    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
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

// ─── Main component ───────────────────────────────────────────────────────────

export function PackageDetailLayout({ data }: { data: PackageDetailData }) {
  const {
    hero,
    overview,
    components,
    requiredDocs,
    extractItems,
    processSteps,
    ctaHeadline,
    ctaSubline,
  } = data

  return (
    <div className="min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative bg-navy overflow-hidden">
        {hero.heroImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hero.heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-luminosity"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/70 to-navy"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-16 sm:pb-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-xs text-white/40">
            <Link href="/projects" className="hover:text-white/70 transition-colors">
              Projects
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/60">{hero.title}</span>
          </nav>

          <div className="max-w-3xl">
            <Eyebrow label={hero.eyebrow ?? 'Package'} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {hero.title}
            </h1>
            <p className="text-white/80 text-lg sm:text-xl font-light mb-3 leading-relaxed">
              {hero.subtitle}
            </p>
            <p className="text-white/60 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
              {hero.description}
            </p>
            <Link
              href={hero.ctaHref ?? '/request-quotation'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
            >
              {hero.ctaLabel ?? 'Request Similar Package'}
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Overview ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow label="Overview" />
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">Package Overview</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{overview.body}</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-sm p-6">
              <p className="text-navy/40 text-[11px] font-semibold tracking-widest uppercase mb-4">
                Designed For
              </p>
              <ul className="space-y-3">
                {overview.suitedFor.map((venue) => (
                  <li key={venue} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-navy/80 text-sm leading-snug">{venue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Components ── */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Components" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">
            Typical Grand Entrance Components
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3.5 bg-white border border-gray-100 rounded-sm p-4"
              >
                <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm leading-snug">{item.label}</p>
                  {item.note && (
                    <p className="text-gray-400 text-xs mt-0.5">{item.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Required Documents ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Documents" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
            Required Documents for Accurate Pricing
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            To prepare a precise quotation, the following documents are required. Submit all available
            materials and our engineering team will review them promptly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {requiredDocs.map((doc, i) => (
              <div key={doc.label} className="flex items-start gap-4">
                <span
                  className="text-[2.25rem] font-bold text-navy/10 leading-none flex-shrink-0 select-none tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-1.5">
                  <p className="text-navy font-semibold text-sm mb-1">{doc.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. What We Extract ── */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="Our Expertise" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
            What Durraka Can Extract from the Documents
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            Our engineering team reads every drawing set to extract the information needed for an
            accurate, project-specific quotation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {extractItems.map((item) => (
              <div
                key={item.source}
                className="bg-white border border-gray-100 rounded-sm p-5 sm:p-6"
              >
                <p className="text-navy/40 text-[10px] font-semibold tracking-widest uppercase mb-1.5">
                  From
                </p>
                <p className="text-navy/70 text-sm leading-relaxed mb-5">{item.source}</p>
                <div className="h-px bg-gray-100 mb-5" />
                <p className="text-navy/40 text-[10px] font-semibold tracking-widest uppercase mb-1.5">
                  We Determine
                </p>
                <p className="text-navy font-semibold text-sm leading-relaxed">{item.extracts}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Process ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Eyebrow label="How It Works" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">Process Overview</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {processSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span
                  className="text-[2rem] font-bold text-accent/20 leading-none flex-shrink-0 select-none tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-navy font-semibold text-sm pt-1.5 leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            {ctaHeadline}
          </h2>
          {ctaSubline && (
            <p className="text-white/60 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {ctaSubline}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-quotation"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors w-full sm:w-auto"
            >
              Request a Quotation
            </Link>
            <Link
              href={SOCIAL_LINKS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-sm hover:bg-white/20 transition-colors w-full sm:w-auto"
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
