import type { Metadata } from 'next'
import Link from 'next/link'
import ProjectsGrid from './ProjectsGrid'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Explore Durraka Factory's portfolio of GFRC/GRC façade projects delivered across Saudi Arabia.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            A selection of GFRC and GRC façade packages delivered across the Kingdom.
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <ProjectsGrid />
      </div>

      {/* CTA block */}
      <div className="bg-gray-50 border-t border-gray-100 py-14 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3">Have a similar project?</h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Share your project scope with our team and we will prepare a tailored package proposal.
          </p>
          <Link
            href="/request-quotation"
            className="inline-flex items-center justify-center gap-2 min-h-[52px] px-10 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm sm:text-base"
          >
            Request Similar Package
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
