import type { Metadata } from 'next'
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/social-links'
import { StickyMobileCTA } from './StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Commercial Façade Package — GFRC/GRC Cladding for Multi-Storey Buildings | Durraka',
  description:
    'GFRC/GRC facade cladding package for 6–10 storey commercial buildings. Panels, cornices, window surrounds, and vertical rhythm elements. Engineered and manufactured in Saudi Arabia.',
}

// ─── Shared icons/helpers ─────────────────────────────────────────────────────

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

// ─── Hero SVG illustration (commercial façade) ────────────────────────────────

function FacadeHeroIllustration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 420"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f2d58" />
          <stop offset="100%" stopColor="#071B3B" />
        </linearGradient>
      </defs>
      <rect width="800" height="420" fill="url(#hero-bg)" />
      <g opacity="0.18" stroke="white" fill="none">
        {/* Building outline */}
        <rect x="140" y="40" width="520" height="350" strokeWidth="2" />
        {/* Floor bands */}
        <line x1="140" y1="95" x2="660" y2="95" strokeWidth="1" />
        <line x1="140" y1="150" x2="660" y2="150" strokeWidth="1" />
        <line x1="140" y1="205" x2="660" y2="205" strokeWidth="1" />
        <line x1="140" y1="260" x2="660" y2="260" strokeWidth="1" />
        <line x1="140" y1="315" x2="660" y2="315" strokeWidth="1" />
        {/* Vertical divisions */}
        <line x1="230" y1="40" x2="230" y2="390" strokeWidth="0.7" />
        <line x1="320" y1="40" x2="320" y2="390" strokeWidth="0.7" />
        <line x1="400" y1="40" x2="400" y2="390" strokeWidth="1.2" strokeDasharray="5 3" />
        <line x1="480" y1="40" x2="480" y2="390" strokeWidth="0.7" />
        <line x1="570" y1="40" x2="570" y2="390" strokeWidth="0.7" />
        {/* Window grid - left half */}
        <rect x="150" y="52" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="150" y="107" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="150" y="162" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="150" y="217" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="150" y="272" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="240" y="52" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="240" y="107" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="240" y="162" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="240" y="217" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="240" y="272" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        {/* Window grid - right half */}
        <rect x="330" y="52" width="58" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="330" y="107" width="58" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="330" y="162" width="58" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="330" y="217" width="58" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="330" y="272" width="58" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="490" y="52" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="490" y="107" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="490" y="162" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="490" y="217" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="490" y="272" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="580" y="52" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="580" y="107" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="580" y="162" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="580" y="217" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        <rect x="580" y="272" width="68" height="35" fill="white" fillOpacity="0.05" strokeWidth="0" />
        {/* Cornice top band */}
        <rect x="130" y="28" width="540" height="14" strokeWidth="1.4" />
        {/* Podium base band */}
        <rect x="130" y="376" width="540" height="16" strokeWidth="1.2" />
      </g>
      <rect x="0" y="0" width="6" height="420" fill="#D71920" fillOpacity="0.5" />
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CommercialFacadePackagePage() {
  return (
    <>
      <div className="min-h-screen">

        {/* ── 1. Hero ── */}
        <section className="relative bg-navy overflow-hidden">
          <FacadeHeroIllustration />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/60 to-navy"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-16 sm:pb-24">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-xs text-white/40">
              <Link href="/projects" className="hover:text-white/70 transition-colors">
                Packages
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-white/60">Commercial Façade Package</span>
            </nav>

            <div className="max-w-3xl">
              <Eyebrow label="Project Scope Package" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Commercial Façade Package
              </h1>
              <p className="text-white/80 text-lg sm:text-xl font-light mb-3 leading-relaxed">
                Multi-storey exterior cladding. Engineered in GFRC/GRC.
              </p>
              <p className="text-white/60 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
                A complete GFRC/GRC scope for commercial building exteriors — combining façade cladding panels, cornice lines, window surrounds, vertical rhythm elements, and edge expression into a single precision-manufactured package.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/request-quotation"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
                >
                  Request a Quotation
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <span className="text-white/30 text-[11px] font-semibold tracking-widest uppercase">
                  AI Concept Reference — Illustrative Only
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Quick Read ── */}
        <section className="bg-navy/5 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
              {[
                { label: 'Illustrative Area', value: 'Approx. 8,000–14,000 m²' },
                { label: 'Typical Build Type', value: '6–10 Storey Commercial' },
                { label: 'Material', value: 'GFRC / GRC' },
                { label: 'Delivery', value: 'Kingdom-wide' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-navy/40 text-[10px] font-semibold tracking-widest uppercase mb-1.5">{label}</p>
                  <p className="text-navy font-bold text-sm sm:text-base leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Overview + Suitable Applications ── */}
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
              <div>
                <Eyebrow label="Overview" />
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">Package Overview</h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  The Commercial Façade Package is designed for developers and main contractors who require a reliable GFRC/GRC supply for multi-storey commercial exteriors. Durraka manufactures the full cladding scope — panels, cornices, window surrounds, decorative vertical elements, and corner treatments — from the submitted drawing set. Each package is scoped by our engineering team, confirmed with the client, and manufactured to external-grade standards for project-specific installation.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-sm p-6">
                <p className="text-navy/40 text-[11px] font-semibold tracking-widest uppercase mb-4">
                  Suitable Applications
                </p>
                <ul className="space-y-3">
                  {[
                    'Multi-storey commercial offices',
                    'Mixed-use developments',
                    'Retail and hospitality towers',
                    'Corporate headquarters',
                    'Government administrative buildings',
                    'Educational and institutional buildings',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon />
                      </div>
                      <span className="text-navy/80 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Visible Components ── */}
        <section className="bg-gray-50 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Eyebrow label="Components" />
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">
              Typical Façade Package Components
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Façade cladding panels' },
                { label: 'Cornices and profile bands' },
                { label: 'Window surrounds and reveals' },
                { label: 'Edge and corner expression elements' },
                { label: 'Decorative vertical elements' },
                { label: 'Custom profiles', note: 'Available on request, from architectural drawings' },
              ].map((item) => (
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

        {/* ── 5. Design Guidance Areas ── */}
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Eyebrow label="Design Guidance" />
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Design Guidance Areas
            </h2>
            <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
              Durraka&apos;s engineering team can advise on the following design decisions during the pre-manufacture stage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Panel Layout Rhythm',
                  body: 'Module sizing, joint spacing, and horizontal banding to achieve the intended architectural rhythm across the full façade elevation.',
                },
                {
                  title: 'Cornice Profiles',
                  body: 'Profile selection, depth, and positioning relative to floor lines — including parapet caps, intermediate bands, and base cornices.',
                },
                {
                  title: 'Window Surround Depth',
                  body: 'Reveal depth, surround width, and shadow line detailing to complement window openings and glazing system interfaces.',
                },
                {
                  title: 'Corner and Edge Treatment',
                  body: 'Quoin details, return panels, and corner column expressions to resolve the building edges cleanly and consistently.',
                },
                {
                  title: 'Surface Finish Selection',
                  body: 'Guidance on finish options appropriate for the commercial context, exposure conditions, and specified maintenance requirements.',
                },
                {
                  title: 'Joint Lines and Weather Management',
                  body: 'Panel joint sizing, sealant coursing, and weathering considerations relevant to the building envelope system.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 border border-gray-100 rounded-sm p-5 sm:p-6"
                >
                  <p className="text-navy font-semibold text-sm mb-2 leading-snug">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Finish Options ── */}
        <section className="bg-gray-50 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Eyebrow label="Finishes" />
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">
              Available Finish Options
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Smooth white / off-white', note: 'Standard commercial specification' },
                { label: 'Sand-textured', note: 'Fine or medium aggregate texture' },
                { label: 'Exposed aggregate', note: 'Washed finish, aggregate to specification' },
                { label: 'Colour match (RAL / NCS)', note: 'Factory-applied integral colour' },
                { label: 'Factory-primed', note: 'For field-applied paint system' },
                { label: 'Custom finish', note: 'On request — subject to engineering review' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3.5 bg-white border border-gray-100 rounded-sm p-4"
                >
                  <div className="w-7 h-7 rounded-full bg-navy/8 border border-navy/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-navy/30" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm leading-snug">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Information Required for Technical Review ── */}
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Eyebrow label="Documents" />
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Information Required for Technical Review
            </h2>
            <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
              Submit the following documents to receive an accurate GFRC/GRC scope and pricing proposal. Our engineering team will review the package and follow up promptly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                {
                  label: 'Architectural drawings',
                  description: 'Plans, elevations, and sections showing the full building exterior and facade layout.',
                },
                {
                  label: 'Facade area schedule or BOQ',
                  description: 'Quantity schedule per floor or elevation. Our team can estimate from drawings when not available.',
                },
                {
                  label: 'Window opening schedule',
                  description: 'Opening dimensions and positions to scope window surrounds and reveal elements accurately.',
                },
                {
                  label: 'Structural drawings',
                  description: 'Drawings showing the structural system relevant to facade panel attachment and support conditions.',
                },
                {
                  label: 'Finish specifications',
                  description: 'Specified finish standard, colour reference, or reference images showing the intended surface quality.',
                },
                {
                  label: 'Programme or timeline',
                  description: 'Target supply date or construction programme to allow for manufacturing planning and lead-time confirmation.',
                },
              ].map((doc, i) => (
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

        {/* ── 8. Important Note ── */}
        <section className="bg-gray-50 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-navy/4 border border-navy/12 rounded-sm p-6 sm:p-8 max-w-3xl">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-navy/10 border border-navy/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-navy/50" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm mb-2">Important Note</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    The facade imagery on this page is an AI-generated concept reference illustrating a typical commercial GFRC/GRC facade typology. It does not represent a completed Durraka project and is provided for illustrative purposes only. All actual designs are scoped and engineered from submitted architectural drawings. Areas, quantities, and component counts will be confirmed during the technical review process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CTA ── */}
        <section className="bg-navy py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
              Share your facade drawings and scope to receive a GFRC/GRC quotation.
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Our engineering team will review your package and return a detailed scope and pricing proposal.
            </p>
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
      <StickyMobileCTA />
    </>
  )
}
