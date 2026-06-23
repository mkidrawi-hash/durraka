import Image from 'next/image'
import Link from 'next/link'
import type { ProjectPackageData } from '@/lib/project-packages'
import type { ComponentCard } from '@/components/projects/PackageComponentsGallery'
import type { GuidanceItem } from '@/lib/package-content'
import { SOCIAL_LINKS } from '@/lib/social-links'

// ─── Helper components ─────────────────────────────────────────────────────────

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
    <svg
      className="w-3 h-3 text-accent flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Template ─────────────────────────────────────────────────────────────────

interface PackageDetailPageProps {
  data: ProjectPackageData
  components: ComponentCard[]
  guidance: GuidanceItem[]
}

export function PackageDetailPage({ data, components, guidance }: PackageDetailPageProps) {
  return (
    <div className="min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="bg-navy pt-14 sm:pt-20 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-xs text-white/40">
            <Link href="/projects" className="hover:text-white/70 transition-colors">
              GRC Architectural Packages
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/60">{data.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-16 items-start">
            <div>
              <Eyebrow label={data.tag} />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {data.title}
              </h1>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl">
                {data.shortDescription}
              </p>
            </div>

            {/* Meta card */}
            <div className="bg-white/[0.06] border border-white/[0.10] rounded-sm p-5">
              <div className="space-y-3">
                <div>
                  <p className="text-white/35 text-[10px] font-semibold tracking-widest uppercase mb-0.5">
                    Location
                  </p>
                  <p className="text-white/80 text-sm font-medium">{data.location}</p>
                </div>
                <div>
                  <p className="text-white/35 text-[10px] font-semibold tracking-widest uppercase mb-0.5">
                    Year
                  </p>
                  <p className="text-white/80 text-sm font-medium">{data.year}</p>
                </div>
                <div>
                  <p className="text-white/35 text-[10px] font-semibold tracking-widest uppercase mb-1.5">
                    Scope Includes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {data.systems.map((sys) => (
                      <span
                        key={sys}
                        className="text-[9px] font-semibold tracking-widest uppercase px-2 py-0.5 bg-white/10 border border-white/15 text-white/60 rounded-sm"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Architecture Reference Boards ── */}
      <section className="bg-[#F4F6F9] py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Eyebrow label="Architecture Reference Boards" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Component Architecture Boards</h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            Detailed architecture reference boards for the GFRC/GRC components in this package.
          </p>
          <div className="space-y-8">
            {components.map((comp) =>
              comp.image ? (
                <div key={comp.title} className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                  <div className="px-5 py-4 border-b border-gray-100">
                    <h3 className="text-navy font-bold text-base leading-snug">{comp.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{comp.description}</p>
                  </div>
                  <div className="overflow-x-auto bg-[#F4F6F9]">
                    <div style={{ minWidth: '700px' }}>
                      <Image
                        src={comp.image}
                        alt={comp.imageAlt ?? comp.title}
                        width={1600}
                        height={900}
                        className="w-full h-auto block"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <p className="text-gray-400 text-xs mt-8 leading-relaxed max-w-2xl">
            For design understanding and early scope coordination only. Detailed fixing, connection, and installation information is excluded.
          </p>
        </div>
      </section>

      {/* ── 3. Component Guidance ── */}
      <section className="bg-gray-50 py-12 sm:py-20 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Eyebrow label="Component Guidance" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">Component Guidance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {guidance.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-accent flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-navy font-bold text-base">{item.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon />
                      </div>
                      <span className="text-gray-600 text-sm leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Safety note */}
          <p className="text-gray-400 text-xs mt-8 leading-relaxed max-w-2xl">
            For design understanding and early scope coordination only. Detailed fixing, connection,
            and installation information is excluded.
          </p>
        </div>
      </section>

      {/* ── 3.5 Related Visual References ── */}
      <section className="bg-white py-10 sm:py-14 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <Eyebrow label="Gallery" />
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Related Visual References
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl">
              Selected visual references related to this package.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy/90 transition-colors flex-shrink-0 w-full sm:w-auto"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            View Project Gallery
          </Link>
        </div>
      </section>

      {/* ── 4. Package Overview ── */}
      <section className="bg-white py-10 sm:py-16 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Eyebrow label="Overview" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">Package Overview</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            {data.overview}
          </p>
        </div>
      </section>

      {/* ── 5. Typical Scope ── */}
      <section className="bg-gray-50 py-10 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Eyebrow label="Scope" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8">Typical Scope</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.typicalScope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-sm p-4"
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <span className="text-navy/80 text-sm leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. Required Project Inputs ── */}
      <section className="bg-white py-10 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Eyebrow label="Required Inputs" />
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
            Required Project Inputs
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
            To prepare a project-specific quotation, our engineering team typically requires the
            following information.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {data.requiredInputs.map((input, i) => (
              <div key={input.label} className="flex items-start gap-4">
                <span
                  className="text-[2.25rem] font-bold text-navy/10 leading-none flex-shrink-0 select-none tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-1.5">
                  <p className="text-navy font-semibold text-sm mb-1 leading-snug">{input.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{input.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section className="bg-navy py-14 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            Share your drawings and receive a project-specific quotation.
          </h2>
          <p className="text-white/55 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Our engineering team reviews your drawings, BOQ, and project scope to prepare a
            professional GRC/GFRC quotation matched to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-quotation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors w-full sm:w-auto"
            >
              Request a Quotation
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
