import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CommercialFacadeIllustration,
  MashrabiyaScreenIllustration,
  DomesCornicesIllustration,
  GrandEntranceIllustration,
  ColumnsCapitalsIllustration,
  CustomDecorativeIllustration,
} from '@/components/packages/illustrations'

export const metadata: Metadata = {
  title: 'GFRC/GRC Architectural Packages | Durraka Factory',
  description:
    'Explore AI concept references for Durraka Factory\'s GFRC/GRC architectural packages, including façade cladding, mashrabiya screens, domes, cornices, grand entrances, columns, capitals, and bespoke decorative elements.',
}

// ─── Package data ──────────────────────────────────────────────────────────────

type PackageEntry = {
  title: string
  href: string
  shortDescription: string
  illustrativeArea: string
  visibleComponents: string[]
  Illustration: () => React.ReactElement
}

const PACKAGES: PackageEntry[] = [
  {
    title: 'Commercial Façade Package',
    href: '/packages/commercial-facade-package',
    shortDescription:
      'AI concept for a multi-storey commercial façade combining GFRC/GRC cladding panels, vertical rhythm, cornice lines, window surrounds, and controlled architectural expression.',
    illustrativeArea: 'Approx. 8,000–14,000 m²',
    visibleComponents: ['Façade cladding panels', 'Cornices / profiles', 'Window surrounds', 'Edge / corner expression', 'Decorative vertical elements'],
    Illustration: CommercialFacadeIllustration,
  },
  {
    title: 'Mashrabiya Screen Package',
    href: '/packages/mashrabiya-screen-package',
    shortDescription:
      'AI concept showing project-specific mashrabiya screens integrated with facade openings, privacy control, shading, and decorative architectural identity.',
    illustrativeArea: 'Approx. 1,500–4,500 m²',
    visibleComponents: ['Mashrabiya screens', 'Window screens', 'Façade cladding', 'Decorative frames', 'Entrance screen panels'],
    Illustration: MashrabiyaScreenIllustration,
  },
  {
    title: 'Domes & Cornices Package',
    href: '/packages/domes-cornices-package',
    shortDescription:
      'AI concept for architectural domes, cornices, mouldings, and ornamental profiles for religious, hospitality, and heritage-inspired projects.',
    illustrativeArea: 'Approx. 2,000–6,500 m²',
    visibleComponents: ['Dome elements', 'Cornices', 'Mouldings', 'Arched openings', 'Decorative facade bands', 'Heritage profiles'],
    Illustration: DomesCornicesIllustration,
  },
  {
    title: 'Grand Entrance Package',
    href: '/packages/grand-entrance-package',
    shortDescription:
      'AI concept for a large-scale entrance combining columns, capitals, arches, cornices, decorative panels, and façade cladding into one integrated architectural package.',
    illustrativeArea: 'Approx. 1,200–3,500 m²',
    visibleComponents: ['Columns', 'Capitals', 'Arches', 'Cornices', 'Decorative panels', 'Entrance cladding'],
    Illustration: GrandEntranceIllustration,
  },
  {
    title: 'Columns & Capitals Package',
    href: '/packages/columns-capitals-package',
    shortDescription:
      'AI concept showing GFRC/GRC columns, capitals, bases, pilasters, and entrance colonnades for classical, heritage, and contemporary architectural projects.',
    illustrativeArea: 'Approx. 800–2,500 m²',
    visibleComponents: ['Column shafts', 'Capitals', 'Bases', 'Pilasters', 'Arched colonnades', 'Decorative panels'],
    Illustration: ColumnsCapitalsIllustration,
  },
  {
    title: 'Custom Decorative Elements Package',
    href: '/packages/custom-decorative-elements-package',
    shortDescription:
      'AI concept for bespoke GFRC/GRC decorative elements including ornamental panels, calligraphy-inspired features, identity panels, special frames, and project-specific architectural details.',
    illustrativeArea: 'Approx. 500–2,000 m²',
    visibleComponents: ['Decorative panels', 'Custom ornaments', 'Identity features', 'Calligraphy-inspired panels', 'Special frames'],
    Illustration: CustomDecorativeIllustration,
  },
]

// ─── Card ──────────────────────────────────────────────────────────────────────

function PackageCard({ pkg }: { pkg: PackageEntry }) {
  const { Illustration } = pkg
  return (
    <Link
      href={pkg.href}
      className="group flex flex-col bg-white rounded-sm overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-lg hover:border-navy/20 transition-all duration-300"
    >
      {/* Illustration */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <Illustration />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" aria-hidden="true" />
        {/* AI Concept label */}
        <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase text-white/60 bg-navy/60 border border-white/15 px-2 py-1 rounded-sm backdrop-blur-sm">
          AI Concept Reference
        </span>
        {/* Area badge */}
        <span className="absolute bottom-3 right-3 text-[9px] font-semibold tracking-wider text-white/60">
          {pkg.illustrativeArea}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h2 className="text-navy font-bold text-[17px] leading-snug mb-2 group-hover:text-accent transition-colors">
          {pkg.title}
        </h2>
        <p className="text-gray-400 text-[13px] leading-relaxed mb-4 flex-1">
          {pkg.shortDescription}
        </p>

        {/* Component tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {pkg.visibleComponents.map((c) => (
            <span
              key={c}
              className="text-[10px] font-medium text-navy/50 bg-navy/5 border border-navy/10 px-2 py-0.5 rounded-sm"
            >
              {c}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-accent text-sm font-semibold">
          View Package
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  return (
    <div className="min-h-screen">

      {/* Page header */}
      <div className="bg-navy py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">GFRC/GRC Architectural Packages</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
            Packages
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Six scope packages representing the typical range of GFRC/GRC architectural systems Durraka manufactures. Each package includes AI concept visuals, design guidance, suitable applications, and information required for technical review.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-white/30 text-[11px] font-semibold tracking-widest uppercase">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Visuals are AI-generated concept references — not completed project claims
          </div>
        </div>
      </div>

      {/* Package grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.href} pkg={pkg} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
            All areas shown are illustrative and depend on the project scope, design intent, and submitted drawings. Final quantities, dimensions, and component counts are confirmed during the technical review process.
          </p>
          <Link
            href="/request-quotation"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-dark transition-colors"
          >
            Request a Quotation
          </Link>
        </div>
      </div>

    </div>
  )
}
