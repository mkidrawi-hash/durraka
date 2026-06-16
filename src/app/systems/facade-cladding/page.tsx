import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GFRC / GRC Façade Cladding System — Durraka',
  description:
    'High-performance GFRC / GRC façade cladding system designed for durable, expressive, and timeless architectural façades. Discover material benefits, finish directions, and design applications.',
}

// ─── SVG Facade Elevation — System Overview Diagram ─────────────────────────

function CalloutBadge({ n, cx, cy }: { n: number; cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="9" fill="#D71920" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">
        {n}
      </text>
    </g>
  )
}

function FacadeSystemDiagram() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl mx-auto"
      aria-label="Simplified façade system diagram — design intent only, no installation details"
    >
      {/* Light architectural background */}
      <rect width="400" height="300" fill="#F8F9FA" />

      {/* ── Building elevation ── */}
      {/* Ground line */}
      <line x1="40" y1="268" x2="340" y2="268" stroke="#071B3B" strokeWidth="2.5" />
      {/* Building body */}
      <rect x="65" y="30" width="250" height="238" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.8" />
      {/* Parapet cap */}
      <rect x="56" y="20" width="268" height="12" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.07" />

      {/* Horizontal floor bands — 4 floors */}
      <line x1="65" y1="90"  x2="315" y2="90"  stroke="#071B3B" strokeWidth="0.8" />
      <line x1="65" y1="150" x2="315" y2="150" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="65" y1="210" x2="315" y2="210" stroke="#071B3B" strokeWidth="0.8" />

      {/* Vertical panel joints — 4 bays */}
      <line x1="127" y1="32" x2="127" y2="267" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="189" y1="32" x2="189" y2="267" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="251" y1="32" x2="251" y2="267" stroke="#071B3B" strokeWidth="0.7" />

      {/* Windows — floor 1 (y30–90) */}
      {[73, 135, 197, 259].map(x => (
        <rect key={x} x={x} y={42} width={46} height={40} stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      ))}
      {/* Windows — floor 2 (y90–150) */}
      {[73, 135, 197, 259].map(x => (
        <rect key={x} x={x} y={102} width={46} height={40} stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      ))}
      {/* Windows — floor 3 (y150–210) */}
      {[73, 135, 197, 259].map(x => (
        <rect key={x} x={x} y={162} width={46} height={40} stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      ))}
      {/* Windows — floor 4 (y210–268) */}
      {[73, 135, 197, 259].map(x => (
        <rect key={x} x={x} y={220} width={46} height={40} stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      ))}

      {/* Subtle texture hatch on solid panel zone between windows */}
      <line x1="66"  y1="92" x2="66"  y2="148" stroke="#071B3B" strokeWidth="0.35" strokeDasharray="2 5" />
      <line x1="125" y1="92" x2="125" y2="148" stroke="#071B3B" strokeWidth="0.35" strokeDasharray="2 5" />

      {/* ── Callout leaders ── */}
      {/* 1 — Architectural Cladding Zone (solid panel zone, left side floor 2) */}
      <line x1="94"  y1="120" x2="40" y2="120" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <CalloutBadge n={1} cx={31} cy={120} />

      {/* 2 — Panel Rhythm (top joint line) */}
      <line x1="189" y1="55"  x2="189" y2="11" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <CalloutBadge n={2} cx={189} cy={8} />

      {/* 3 — Opening Expression (window, floor 2 bay 3) */}
      <line x1="218" y1="122" x2="358" y2="122" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <CalloutBadge n={3} cx={368} cy={122} />

      {/* 4 — Edge & Corner Expression (right building edge) */}
      <line x1="315" y1="170" x2="358" y2="155" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <CalloutBadge n={4} cx={368} cy={148} />

      {/* 5 — Finish & Texture Surface (lower-left panel) */}
      <line x1="94"  y1="240" x2="40" y2="278" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <CalloutBadge n={5} cx={31} cy={285} />

      {/* 6 — Project Coordination Review (parapet) */}
      <line x1="189" y1="30"  x2="189" y2="20" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <line x1="189" y1="20"  x2="358" y2="20" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <CalloutBadge n={6} cx={368} cy={20} />

    </svg>
  )
}

// ─── Finish swatch ────────────────────────────────────────────────────────────

function FinishSwatch({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 80 40" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      {type === 'smooth' && <rect width="80" height="40" fill="#D6D9DF" />}

      {type === 'sandblasted' && (
        <>
          <rect width="80" height="40" fill="#C8CBCF" />
          {[5,12,20,28,36,44,52,60,68,75].map(x =>
            [6,14,22,30,36].map(y => (
              <circle key={`${x}-${y}`} cx={x + (y % 8)} cy={y} r="0.7" fill="#071B3B" fillOpacity="0.12" />
            ))
          )}
        </>
      )}

      {type === 'textured' && (
        <>
          <rect width="80" height="40" fill="#C5C8CC" />
          {[0,5,10,15,20,25,30,35,40].map(y => (
            <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.15" />
          ))}
        </>
      )}

      {type === 'stone' && (
        <>
          <rect width="80" height="40" fill="#C9C3B8" />
          <line x1="0" y1="18" x2="80" y2="18" stroke="#071B3B" strokeWidth="0.6" strokeOpacity="0.2" />
          <line x1="0" y1="30" x2="80" y2="30" stroke="#071B3B" strokeWidth="0.6" strokeOpacity="0.15" />
          <line x1="22" y1="0" x2="22" y2="18" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="55" y1="18" x2="55" y2="30" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="35" y1="30" x2="35" y2="40" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.12" />
          <line x1="65" y1="0" x2="65" y2="18" stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.1" />
        </>
      )}

      {type === 'concrete' && (
        <>
          <rect width="80" height="40" fill="#B8BBBC" />
          {[4,9,16,23,30,36].map(y => (
            <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="#071B3B" strokeWidth="0.3" strokeOpacity="0.12" />
          ))}
          <rect x="0" y="0" width="80" height="40" fill="#071B3B" fillOpacity="0.04" />
        </>
      )}

      {type === 'ribbed' && (
        <>
          <rect width="80" height="40" fill="#C2C5CA" />
          {[0,7,14,21,28,35,42,49,56,63,70,77].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="40" stroke="#071B3B" strokeWidth="1.8" strokeOpacity="0.14" />
          ))}
        </>
      )}

      {type === 'color' && (
        <>
          <rect width="80" height="40" fill="#E8E2D8" />
          <rect x="0" y="0" width="20" height="40" fill="#D71920" fillOpacity="0.12" />
          <rect x="20" y="0" width="20" height="40" fill="#071B3B" fillOpacity="0.08" />
          <rect x="40" y="0" width="20" height="40" fill="#8B7355" fillOpacity="0.12" />
          <rect x="60" y="0" width="20" height="40" fill="#D4C5A9" fillOpacity="0.5" />
        </>
      )}

      {type === 'heritage' && (
        <>
          <rect width="80" height="40" fill="#D4C9B8" />
          {[0,8,16,24,32,40].map(y => (
            <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.14" />
          ))}
          {[0,10,20,30,40,50,60,70,80].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="40" stroke="#071B3B" strokeWidth="0.3" strokeOpacity="0.08" />
          ))}
        </>
      )}

      {type === 'custom' && (
        <>
          <rect width="80" height="40" fill="#CBD0D8" />
          <line x1="0" y1="0" x2="80" y2="40" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.12" />
          <line x1="0" y1="20" x2="80" y2="60" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.08" />
          <text x="40" y="24" textAnchor="middle" fontSize="9" fill="#071B3B" fillOpacity="0.3" fontFamily="sans-serif" fontWeight="600">
            CUSTOM
          </text>
        </>
      )}
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FacadeCladdingPage() {
  const callouts = [
    { n: 1, label: 'Architectural Cladding Zone', desc: 'The primary surface area clad in GFRC / GRC panels.' },
    { n: 2, label: 'Panel Rhythm', desc: 'Horizontal and vertical joint pattern across the façade.' },
    { n: 3, label: 'Opening Expression', desc: 'Design treatment around windows and apertures.' },
    { n: 4, label: 'Edge & Corner Expression', desc: 'Architectural detail at building perimeters and returns.' },
    { n: 5, label: 'Finish & Texture Surface', desc: 'Surface finish direction applied across the cladding zone.' },
    { n: 6, label: 'Project Coordination Review', desc: 'Scope and design confirmed through project review.' },
  ]

  const benefits = [
    { label: 'Lightweight Architectural Elements', desc: 'GFRC / GRC achieves structural expression at a fraction of the weight of solid concrete, reducing loading on the primary structure.' },
    { label: 'Design Flexibility', desc: 'Custom profiles, compound curves, and complex geometries are achievable — enabling unique architectural language.' },
    { label: 'Durable Exterior Performance', desc: 'Alkali-resistant glass fibre reinforcement ensures long-term durability in demanding exterior environments.' },
    { label: 'Custom Profiles & Shapes', desc: 'Cornices, column casings, arched surrounds, and bespoke ornamental shapes can be cast to project drawings.' },
    { label: 'Texture & Colour Possibilities', desc: 'A wide range of surface finishes, textures, and colour directions can be realised within a single material system.' },
    { label: 'Modern & Heritage Applications', desc: 'Equally suited to contemporary façades and heritage-inspired architectural styles across different building typologies.' },
  ]

  const applications = [
    'Commercial Façades',
    'Hospitality Developments',
    'Residential Buildings',
    'Government & Institutional Projects',
    'Heritage-Inspired Architecture',
    'Mixed-Use Developments',
    'Entrances & Feature Walls',
    'Decorative Façade Enhancements',
  ]

  const finishes = [
    { type: 'smooth',      label: 'Smooth Finish',          desc: 'Clean architectural surface for modern façade expressions.' },
    { type: 'sandblasted', label: 'Sandblasted Finish',     desc: 'Refined textured surface with a natural mineral appearance.' },
    { type: 'textured',    label: 'Textured Finish',        desc: 'Controlled surface texture for depth and visual character.' },
    { type: 'stone',       label: 'Stone-Like Finish',      desc: 'Architectural finish inspired by natural stone aesthetics.' },
    { type: 'concrete',    label: 'Concrete-Look Finish',   desc: 'Minimal cementitious appearance for contemporary projects.' },
    { type: 'color',       label: 'Custom Colour Finish',   desc: 'Project-based colour direction developed to match design intent.' },
    { type: 'heritage',    label: 'Heritage-Inspired Finish', desc: 'Finish direction suitable for traditional and regional architectural language.' },
    { type: 'custom',      label: 'Project-Specific Finish', desc: 'Custom surface direction reviewed according to project requirements.' },
  ]

  const designGuidance = [
    { label: 'Panel Layout Direction',           desc: 'Panel sizing, joint alignment, and façade rhythm are established through design review in coordination with the project team.' },
    { label: 'Opening Surround Expression',      desc: 'Window surrounds, arched openings, and aperture treatments are developed to complement the overall façade design intent.' },
    { label: 'Edge & Corner Expression',         desc: 'Building perimeters, vertical returns, and corner details are resolved as part of the overall cladding design scope.' },
    { label: 'Profile & Cornice Integration',    desc: 'Cornices, bands, and decorative profiles are produced as part of the GFRC / GRC package and coordinated with the façade layout.' },
    { label: 'Finish Selection Direction',       desc: 'Finish direction is confirmed through design review, approved samples, and — where required — project-specific mockups.' },
    { label: 'Project Coordination Requirements', desc: 'Scope, design intent, and phasing requirements are confirmed through structured project coordination prior to production.' },
  ]

  const infoRequired = [
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

  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <div className="bg-navy pt-16 pb-16 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <Link
              href="/systems"
              className="text-accent text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors"
            >
              Our Systems
            </Link>
            <div className="w-4 h-px bg-white/20" />
            <span className="text-white/40 text-xs tracking-widest uppercase">Façade Cladding</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                GFRC / GRC Façade<br className="hidden sm:block" /> Cladding System
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                High-performance architectural cladding system designed for durable,
                expressive, and timeless façades.
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

            {/* Hero diagram thumbnail */}
            <div className="hidden lg:block">
              <div className="border border-white/10 rounded-sm overflow-hidden p-4 bg-white/[0.04]">
                <FacadeSystemDiagram />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. WHAT IS GFRC / GRC? ──────────────────────────────────────── */}
      <div className="bg-white px-4 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">Material Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
              What is GFRC / GRC?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              GFRC / GRC is a high-performance cement-based composite reinforced with alkali-resistant
              glass fibres. It enables lightweight architectural elements, custom profiles, textured
              surfaces, and durable façade expressions for modern, heritage, and project-specific
              developments.
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. MATERIAL BENEFITS ────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Why GFRC / GRC</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-8">Material Advantages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.label} className="bg-white border border-navy/10 p-6 rounded-sm hover:border-accent/40 hover:shadow-sm transition-all">
                <div className="w-2 h-2 rounded-full bg-accent mb-4" />
                <h3 className="text-navy font-bold text-sm mb-2 leading-snug">{b.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. SYSTEM OVERVIEW DIAGRAM ──────────────────────────────────── */}
      <div className="bg-white border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">System Diagram</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">System Overview</h2>
          <p className="text-gray-500 text-sm max-w-xl mb-10 leading-relaxed">
            A simplified visual overview of the GFRC / GRC façade cladding system. This diagram
            represents design intent and system logic only.
          </p>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Diagram */}
            <div className="lg:col-span-3 bg-[#F8F9FA] border border-navy/10 p-6 sm:p-8 rounded-sm">
              <p className="text-navy/35 text-[10px] font-mono tracking-widest uppercase mb-4">
                GFRC / GRC Façade Cladding System — Overview
              </p>
              <FacadeSystemDiagram />
            </div>

            {/* Callout legend */}
            <div className="lg:col-span-2">
              <ol className="space-y-4">
                {callouts.map((c) => (
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

      {/* ── 5. TYPICAL APPLICATIONS ─────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Where It Is Used</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-8">Typical Applications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {applications.map((app) => (
              <div key={app} className="bg-white border border-navy/10 p-4 rounded-sm hover:border-accent/40 hover:shadow-sm transition-all flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                <p className="text-navy font-semibold text-xs leading-snug">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. FINISH DIRECTIONS ────────────────────────────────────────── */}
      <div className="bg-white border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Surface Options</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">Finish Directions</h2>
          <p className="text-gray-500 text-sm max-w-xl mb-10 leading-relaxed">
            A range of surface finish directions is available to suit different design intentions and
            architectural contexts.
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

      {/* ── 7. DESIGN GUIDANCE ──────────────────────────────────────────── */}
      <div className="bg-[#F8F9FA] border-t border-navy/8 px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Design Considerations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">Design Guidance</h2>
          <p className="text-gray-500 text-sm max-w-xl mb-10 leading-relaxed">
            High-level guidance on how GFRC / GRC façade cladding is typically developed
            through the design and coordination process.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {designGuidance.map((g, i) => (
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

      {/* ── 8. INFORMATION REQUIRED ─────────────────────────────────────── */}
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
                To prepare a tailored quotation or project review for GFRC / GRC façade
                cladding, the following information is typically required.
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

      {/* ── 9. CONTROLLED TECHNICAL NOTE ────────────────────────────────── */}
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

      {/* ── 10. FINAL CTA ───────────────────────────────────────────────── */}
      <div className="bg-navy px-4 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Start Your Project</span>
            <div className="w-8 h-px bg-accent flex-shrink-0" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Discuss Your GFRC / GRC Package?
          </h2>
          <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Share your drawings, design intent, or façade requirements and Durraka&apos;s team
            will help you define the right GFRC / GRC package for your project.
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
