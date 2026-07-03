import type { Metadata } from 'next'
import Link from 'next/link'
import EngineerGuidanceForm from '@/components/systems/EngineerGuidanceForm'
import { engineerGuidanceContent as C } from '@/content/en/systems/engineer-guidance'

export const metadata: Metadata = {
  title: 'Request Engineer Guidance — GFRC / GRC Façade Cladding | Durraka',
  description:
    'Request engineer guidance for the GFRC/GRC façade cladding system. Guidance is issued through project-based engineering review after our team verifies your request. No document is auto-downloaded.',
}

// Phase 2: controlled Engineer Guidance request flow. The site only collects a
// request and issues a reference number — no document is auto-downloaded or
// publicly hosted; Durraka sends guidance manually after verification.
export default function EngineerGuidancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs mb-5" aria-label="Breadcrumb">
            <Link href="/" className="text-white/45 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <Link href="/systems" className="text-white/45 hover:text-white transition-colors">Systems</Link>
            <span className="text-white/30">›</span>
            <Link href="/systems/gfrc-grc-facade-cladding" className="text-white/45 hover:text-white transition-colors">
              GFRC / GRC Façade Cladding
            </Link>
            <span className="text-white/30">›</span>
            <span className="text-accent font-semibold">{C.breadcrumbLast}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">{C.eyebrow}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{C.title}</h1>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl">{C.intro}</p>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-sm p-6 sm:p-8 shadow-sm">
            <h2 className="text-base font-bold text-navy mb-1">Request Details</h2>
            <p className="text-gray-400 text-xs mb-6">
              Fields marked <span className="text-accent">*</span> are required. No document is downloaded here —
              our team reviews your request and responds.
            </p>
            <EngineerGuidanceForm />
          </div>
        </div>
      </div>
    </div>
  )
}
