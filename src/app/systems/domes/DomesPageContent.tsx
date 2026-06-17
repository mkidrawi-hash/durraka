'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { FinishSwatch } from '@/components/systems/FinishSwatch'
import { DEFAULT_FINISHES } from '@/components/systems/SystemPageLayout'

// ─── Dome diagram ─────────────────────────────────────────────────────────────

function DomeDiagram() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-label="Simplified dome system diagram"
    >
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="30" y1="268" x2="370" y2="268" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="90" y="210" width="220" height="58" stroke="#071B3B" strokeWidth="1.4" fill="white" fillOpacity="0.7" />
      <line x1="90" y1="230" x2="310" y2="230" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="90" y1="248" x2="310" y2="248" stroke="#071B3B" strokeWidth="0.6" />
      <path d="M 90 212 Q 90 48 200 38 Q 310 48 310 212" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.6" />
      <path d="M 118 212 Q 118 78 200 70 Q 282 78 282 212" stroke="#071B3B" strokeWidth="0.8" fill="none" />
      {[-80, -44, 0, 44, 80].map((dx, i) => (
        <line key={i} x1="200" y1="38" x2={200 + dx * 1.4} y2="212" stroke="#071B3B" strokeWidth="0.45" strokeDasharray="3 3" />
      ))}
      <ellipse cx="200" cy="110" rx="68" ry="10" stroke="#071B3B" strokeWidth="0.6" fill="none" />
      <ellipse cx="200" cy="160" rx="100" ry="10" stroke="#071B3B" strokeWidth="0.6" fill="none" />
      <line x1="200" y1="38" x2="200" y2="18" stroke="#071B3B" strokeWidth="1.2" />
      <circle cx="200" cy="12" r="7" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.8" />
      <line x1="200" y1="5" x2="200" y2="2" stroke="#071B3B" strokeWidth="1.2" />
      <LeaderLine x1="152" y1="90" x2="32" y2="90" />
      <CalloutBadge n={1} cx={23} cy={90} />
      <LeaderLine x1="268" y1="110" x2="368" y2="95" />
      <CalloutBadge n={2} cx={377} cy={88} />
      <LeaderLine x1="207" y1="12" x2="368" y2="12" />
      <CalloutBadge n={3} cx={377} cy={12} />
      <LeaderLine x1="310" y1="230" x2="368" y2="230" />
      <CalloutBadge n={4} cx={377} cy={230} />
      <LeaderLine x1="130" y1="170" x2="32" y2="200" />
      <CalloutBadge n={5} cx={23} cy={208} />
      <LeaderLine x1="200" y1="38" x2="200" y2="28" />
      <LeaderLine x1="200" y1="28" x2="32" y2="28" />
      <CalloutBadge n={6} cx={23} cy={28} />
    </svg>
  )
}

// ─── Page data ────────────────────────────────────────────────────────────────

const BENEFITS = [
  { label: 'Complex Curved Geometry', desc: 'Domes and vaults in complex curved profiles are achievable in GFRC / GRC — enabling a wide range of architectural expressions.' },
  { label: 'Lightweight Performance', desc: 'GFRC / GRC achieves dome forms at a fraction of the weight of solid concrete, reducing structural loading.' },
  { label: 'Custom Profile Design', desc: 'Dome profiles, rib expressions, drum forms, and lantern elements can all be specified to project drawings.' },
  { label: 'Durable in Exposed Locations', desc: 'GFRC / GRC performs reliably in high-exposure rooftop and exterior environments across the Kingdom.' },
  { label: 'Heritage & Contemporary', desc: 'Suitable for heritage-inspired institutional buildings and modern architectural projects requiring a distinctive crown.' },
  { label: 'Large-Scale Capability', desc: 'Large dome diameters can be achieved through a panelised system, enabling efficient production and delivery.' },
]

const CALLOUTS = [
  { n: 1, label: 'Dome Shell Surface', desc: 'The primary curved surface of the dome, expressed in GFRC / GRC.' },
  { n: 2, label: 'Rib & Profile Expression', desc: 'Decorative ribs, bands, and profile details on the dome surface.' },
  { n: 3, label: 'Lantern Element', desc: 'The crown element at the apex of the dome, produced as a coordinated component.' },
  { n: 4, label: 'Drum Element', desc: 'The cylindrical or polygonal base section beneath the dome.' },
  { n: 5, label: 'Finish Direction', desc: 'Surface finish applied to the dome shell and associated elements.' },
  { n: 6, label: 'Project Coordination Review', desc: 'Profile, sizing, and delivery scope confirmed through project review.' },
]

const APPLICATIONS = [
  'Institutional Building Crowns', 'Heritage-Inspired Architecture', 'Hospitality Rooftops',
  'Government & Civic Buildings', 'Religious Architecture', 'Mixed-Use Feature Elements',
  'Residential Feature Domes', 'Ceremonial & Cultural Projects',
]

const DESIGN_GUIDANCE = [
  { label: 'Dome Profile Direction', desc: 'Dome profile, curvature, and geometry are established from architectural drawings and design intent references.' },
  { label: 'Rib & Ornament Expression', desc: 'Surface ribs, bands, and ornamental elements on the dome shell are coordinated as part of the design package.' },
  { label: 'Drum & Base Coordination', desc: 'The drum or base element beneath the dome is developed in coordination with the dome profile and architectural context.' },
  { label: 'Lantern & Finial Design', desc: 'Lantern, globe, and finial elements at the dome crown are designed and produced as coordinated components.' },
  { label: 'Finish Selection Direction', desc: 'Finish direction for dome shells and ribs is confirmed through design review and approved samples.' },
  { label: 'Project Coordination Requirements', desc: 'Profile confirmation, panel division strategy, and delivery requirements are agreed prior to production.' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function DomesPageContent() {
  const [showMore, setShowMore] = useState(false)
  const [openGuidance, setOpenGuidance] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div className="relative bg-[#071B3B] pt-16 pb-14 sm:pb-24 px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/projects/dome-vault-gfrc.png" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.22]"
          style={{ objectPosition: 'center top' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3B] via-[#071B3B]/92 to-[#071B3B]/55" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D71920]" />
            <Link href="/systems" className="text-[#D71920] text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors">
              Our Systems
            </Link>
            <div className="w-4 h-px bg-white/20" />
            <span className="text-white/40 text-xs tracking-widest uppercase">Domes & Vaults</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight max-w-2xl">
            Domes & Vaults
          </h1>
          <p className="text-[#D71920] font-semibold tracking-wide text-sm sm:text-base mb-3">
            Timeless form. Lightweight precision.
          </p>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            Architectural GFRC / GRC dome and vault systems — produced to custom profiles for building crowns,
            heritage-inspired projects, and feature rooftop elements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/request-quotation"
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 bg-[#D71920] text-white font-semibold rounded-sm hover:bg-red-700 transition-colors text-sm">
              Request a Quotation
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 border border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm">
              Speak to a Sales Engineer
            </Link>
          </div>
        </div>
      </div>

      {/* ── WHAT IS IT ────────────────────────────────────────────────────── */}
      <div className="bg-white px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">System Overview</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B3B] mb-4 leading-tight">
            What are GFRC / GRC Domes & Vaults?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            GFRC / GRC domes and vaults are lightweight architectural elements used to crown buildings, define
            rooftop features, and create heritage-inspired architectural expressions. Produced in high-performance
            glass fibre reinforced concrete, they can be manufactured to complex curved profiles, custom sizes,
            and a range of surface finishes — combining visual impact with practical durability.
          </p>
        </div>
      </div>

      {/* ── BENEFITS ──────────────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-[#071B3B]/[0.07] px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">Why Choose This System</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#071B3B] mb-7">System Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((b, i) => (
              <div
                key={b.label}
                className={`bg-white border border-[#071B3B]/10 p-5 rounded-sm hover:border-[#D71920]/30 transition-all${i >= 4 && !showMore ? ' hidden sm:block' : ''}`}
              >
                <div className="w-2 h-2 rounded-full bg-[#D71920] mb-3" />
                <h3 className="text-[#071B3B] font-bold text-sm mb-1.5 leading-snug">{b.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="sm:hidden mt-5 w-full flex items-center justify-center gap-2 py-3 border border-[#071B3B]/20 rounded-sm text-[#071B3B]/70 text-sm font-medium hover:border-[#D71920]/40 hover:text-[#071B3B] transition-colors"
            >
              View more advantages
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ── SYSTEM DIAGRAM ────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-[#071B3B]/[0.07] px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">System Diagram</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#071B3B] mb-7">System Overview</h2>
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
            {/* Diagram */}
            <div className="lg:col-span-3 bg-[#F8F9FA] border border-[#071B3B]/[0.08] p-3 sm:p-5 rounded-sm">
              <p className="text-[#071B3B]/35 text-[10px] font-mono tracking-widest uppercase mb-3">
                Domes & Vaults — Overview
              </p>
              <DomeDiagram />
              <p className="text-[#071B3B]/35 text-[10px] mt-3 leading-relaxed">
                Note: Diagram is simplified for presentation purposes.
              </p>
            </div>
            {/* Callout legend */}
            <div className="lg:col-span-2">
              <ol className="space-y-3">
                {CALLOUTS.map((c) => (
                  <li key={c.n} className="flex items-start gap-3 pb-3 border-b border-[#071B3B]/[0.07] last:border-0 last:pb-0">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D71920] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {c.n}
                    </span>
                    <div>
                      <p className="text-[#071B3B] font-semibold text-sm leading-snug">{c.label}</p>
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
      <div className="bg-[#F8F9FA] border-t border-[#071B3B]/[0.07] px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">Where It Is Used</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#071B3B] mb-7">Typical Applications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {APPLICATIONS.map((app) => (
              <div key={app} className="bg-white border border-[#071B3B]/10 p-3.5 rounded-sm flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D71920] flex-shrink-0 mt-1.5" />
                <p className="text-[#071B3B] font-semibold text-xs leading-snug">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FINISH DIRECTIONS ─────────────────────────────────────────────── */}
      <div className="bg-white border-t border-[#071B3B]/[0.07] px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">Surface Options</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#071B3B] mb-2">Finish Directions</h2>
          <p className="text-gray-500 text-sm max-w-xl mb-8 leading-relaxed">
            Dome shells and associated elements can be produced in a range of surface finish directions
            to complement the architectural language of the project.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {DEFAULT_FINISHES.map((f) => (
              <div key={f.type} className="border border-[#071B3B]/10 rounded-sm overflow-hidden hover:border-[#D71920]/30 transition-all group">
                <div className="h-12 overflow-hidden">
                  <FinishSwatch type={f.type} />
                </div>
                <div className="p-3.5">
                  <h3 className="text-[#071B3B] font-bold text-xs mb-1 group-hover:text-[#D71920] transition-colors leading-snug">
                    {f.label}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#071B3B]/35 text-[11px] mt-5 leading-relaxed max-w-2xl">
            Surface swatches are schematic representations only. Final finish direction is confirmed
            during project review and approved sample process where required.
          </p>
        </div>
      </div>

      {/* ── DESIGN GUIDANCE (accordion) ───────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-[#071B3B]/[0.07] px-4 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">Design Considerations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#071B3B] mb-7">Design Guidance</h2>
          <div className="max-w-3xl divide-y divide-[#071B3B]/[0.08]">
            {DESIGN_GUIDANCE.map((item, i) => (
              <div key={item.label} className="py-4">
                <button
                  onClick={() => setOpenGuidance(openGuidance === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#D71920] text-[10px] font-bold font-mono tracking-widest flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-semibold text-sm transition-colors ${openGuidance === i ? 'text-[#D71920]' : 'text-[#071B3B] group-hover:text-[#D71920]'}`}>
                      {item.label}
                    </span>
                  </div>
                  <span className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors ${openGuidance === i ? 'border-[#D71920] text-[#D71920]' : 'border-[#071B3B]/25 text-[#071B3B]/50 group-hover:border-[#D71920] group-hover:text-[#D71920]'}`}>
                    {openGuidance === i ? '−' : '+'}
                  </span>
                </button>
                {openGuidance === i && (
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed pl-8">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TECHNICAL NOTE ────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-[#071B3B]/[0.07] px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="border border-[#071B3B]/12 p-5 rounded-sm flex items-start gap-3 max-w-3xl">
            <svg className="w-4 h-4 text-[#071B3B]/35 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[#071B3B]/50 text-xs leading-relaxed">
              <span className="font-semibold text-[#071B3B]/65">Technical Note: </span>
              This page is provided for material understanding, design guidance, and early project coordination only.
              Project-specific engineering details are issued through approved project submissions where required.
            </p>
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <div className="bg-[#071B3B] px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
            <span className="text-[#D71920] text-xs font-semibold tracking-widest uppercase">Start Your Project</span>
            <div className="w-8 h-px bg-[#D71920] flex-shrink-0" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Discuss Your Dome & Vault Package?
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Share your drawings, span, location, and finish requirements and Durraka&apos;s team will help
            you define the right dome or vault package for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/request-quotation"
              className="inline-flex items-center justify-center min-h-[52px] px-10 py-3.5 bg-[#D71920] text-white font-semibold rounded-sm hover:bg-red-700 transition-colors text-sm">
              Request a Quotation
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center min-h-[52px] px-10 py-3.5 border border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm">
              Speak to a Sales Engineer
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
