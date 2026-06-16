import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GFRC / GRC Façade Cladding System — Durraka',
  description:
    'Design guidance and public overview for the Durraka GFRC / GRC Façade Cladding System. Architectural freedom. Engineered confidence.',
}

// ─── Shared primitives ───────────────────────────────────────────────────────

function CalloutDot({ n, cx, cy }: { n: number; cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="8" fill="#D71920" />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="white"
        fontFamily="sans-serif"
      >
        {n}
      </text>
    </g>
  )
}

function LeaderLine({ x1, y1, x2, y2 }: { x1: number | string; y1: number | string; x2: number | string; y2: number | string }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D71920" strokeWidth="0.7" strokeDasharray="3 2" />
}

// ─── Public-level facade elevation SVG (5 callouts) ─────────────────────────

function FacadeElevationPublic() {
  return (
    <svg
      viewBox="0 0 380 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl mx-auto"
      aria-label="Simplified architectural facade elevation — design intent only"
    >
      {/* Drafting paper dot grid */}
      <defs>
        <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="#071B3B" fillOpacity="0.12" />
        </pattern>
      </defs>
      <rect width="380" height="290" fill="url(#dot-grid)" />

      {/* ── Building elevation ── */}
      {/* Ground line */}
      <line x1="30" y1="260" x2="320" y2="260" stroke="#071B3B" strokeWidth="2" />
      {/* Building outline */}
      <rect x="55" y="35" width="240" height="225" stroke="#071B3B" strokeWidth="1.4" fill="white" fillOpacity="0.6" />
      {/* Parapet cap */}
      <rect x="48" y="28" width="254" height="9" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      {/* Finial line at very top */}
      <line x1="48" y1="28" x2="302" y2="28" stroke="#071B3B" strokeWidth="0.6" />

      {/* Horizontal floor bands — 4 floors */}
      <line x1="55" y1="91"  x2="295" y2="91"  stroke="#071B3B" strokeWidth="0.7" />
      <line x1="55" y1="147" x2="295" y2="147" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="55" y1="203" x2="295" y2="203" stroke="#071B3B" strokeWidth="0.7" />

      {/* Vertical panel joints — 4 bays (each 60px) */}
      <line x1="115" y1="37" x2="115" y2="259" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="175" y1="37" x2="175" y2="259" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="235" y1="37" x2="235" y2="259" stroke="#071B3B" strokeWidth="0.6" />

      {/* Windows — floor 1 (y 37–91) */}
      <rect x="63"  y="47" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="123" y="47" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="183" y="47" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="243" y="47" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />

      {/* Windows — floor 2 (y 91–147) */}
      <rect x="63"  y="103" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="123" y="103" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="183" y="103" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="243" y="103" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />

      {/* Windows — floor 3 (y 147–203) */}
      <rect x="63"  y="159" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="123" y="159" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="183" y="159" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="243" y="159" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />

      {/* Windows — floor 4 (y 203–259) */}
      <rect x="63"  y="213" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="123" y="213" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="183" y="213" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="243" y="213" width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />

      {/* Texture hatch on solid panel zones (between windows) */}
      <line x1="56"  y1="91"  x2="56"  y2="147" stroke="#071B3B" strokeWidth="0.4" strokeDasharray="2 4" />
      <line x1="111" y1="91"  x2="111" y2="147" stroke="#071B3B" strokeWidth="0.4" strokeDasharray="2 4" />

      {/* ── Callout leaders + dots ── */}
      {/* 1. Architectural Cladding Zone → solid panel zone left of centre floor 2 */}
      <LeaderLine x1="88" y1="118" x2="30" y2="118" />
      <LeaderLine x1="30" y1="118" x2="22" y2="105" />
      <CalloutDot n={1} cx={22} cy={96} />

      {/* 2. Panel Rhythm → top panel joint line */}
      <LeaderLine x1="175" y1="60" x2="175" y2="18" />
      <CalloutDot n={2} cx={175} cy={9} />

      {/* 3. Opening Expression → window floor 2 bay 3 */}
      <LeaderLine x1="205" y1="121" x2="340" y2="121" />
      <CalloutDot n={3} cx={349} cy={121} />

      {/* 4. Edge & Corner Expression → right edge */}
      <LeaderLine x1="295" y1="170" x2="340" y2="155" />
      <CalloutDot n={4} cx={349} cy={147} />

      {/* 5. Finish & Texture Surface → lower-left solid panel */}
      <LeaderLine x1="88" y1="225" x2="30" y2="268" />
      <CalloutDot n={5} cx={22} cy={276} />

      {/* Title stamp */}
      <text x="55" y="276" fontSize="7.5" fill="#071B3B" fillOpacity="0.35" fontFamily="monospace" letterSpacing="1">
        FAÇADE ELEVATION — DESIGN INTENT ONLY
      </text>
    </svg>
  )
}

// ─── Engineer-level SVG (6 callouts, same sketch) ───────────────────────────

function FacadeElevationEngineer() {
  return (
    <svg
      viewBox="0 0 380 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl mx-auto"
      aria-label="Simplified architectural facade diagram — non-confidential design guidance"
    >
      <defs>
        <pattern id="dot-grid-eng" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="#071B3B" fillOpacity="0.10" />
        </pattern>
      </defs>
      <rect width="380" height="290" fill="url(#dot-grid-eng)" />

      {/* Ground line */}
      <line x1="30" y1="260" x2="320" y2="260" stroke="#071B3B" strokeWidth="2" />
      {/* Building */}
      <rect x="55" y="35" width="240" height="225" stroke="#071B3B" strokeWidth="1.4" fill="white" fillOpacity="0.6" />
      <rect x="48" y="28" width="254" height="9" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      <line x1="48" y1="28" x2="302" y2="28" stroke="#071B3B" strokeWidth="0.6" />

      <line x1="55" y1="91"  x2="295" y2="91"  stroke="#071B3B" strokeWidth="0.7" />
      <line x1="55" y1="147" x2="295" y2="147" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="55" y1="203" x2="295" y2="203" stroke="#071B3B" strokeWidth="0.7" />

      <line x1="115" y1="37" x2="115" y2="259" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="175" y1="37" x2="175" y2="259" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="235" y1="37" x2="235" y2="259" stroke="#071B3B" strokeWidth="0.6" />

      {/* Windows — all 4 floors */}
      {[47,103,159,213].map(y => (
        [63,123,183,243].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="44" height="36" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
        ))
      ))}

      {/* ── 6 callout leaders ── */}
      {/* 1. Architectural Cladding Zone */}
      <LeaderLine x1="88" y1="118" x2="30" y2="118" />
      <LeaderLine x1="30" y1="118" x2="22" y2="105" />
      <CalloutDot n={1} cx={22} cy={96} />

      {/* 2. Panel Rhythm */}
      <LeaderLine x1="175" y1="60" x2="175" y2="18" />
      <CalloutDot n={2} cx={175} cy={9} />

      {/* 3. Opening Expression */}
      <LeaderLine x1="205" y1="121" x2="340" y2="121" />
      <CalloutDot n={3} cx={349} cy={121} />

      {/* 4. Edge / Corner Expression */}
      <LeaderLine x1="295" y1="170" x2="340" y2="155" />
      <CalloutDot n={4} cx={349} cy={147} />

      {/* 5. Finish Direction */}
      <LeaderLine x1="88" y1="225" x2="30" y2="268" />
      <CalloutDot n={5} cx={22} cy={276} />

      {/* 6. Project Coordination Review → parapet zone */}
      <LeaderLine x1="175" y1="37" x2="175" y2="27" />
      <LeaderLine x1="175" y1="27" x2="340" y2="27" />
      <CalloutDot n={6} cx={349} cy={27} />

      <text x="55" y="276" fontSize="7.5" fill="#071B3B" fillOpacity="0.35" fontFamily="monospace" letterSpacing="1">
        ENGINEER GUIDANCE — NON-CONFIDENTIAL / DESIGN INTENT ONLY
      </text>
    </svg>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FacadeCladdingPage() {
  const publicCallouts = [
    'Architectural Cladding Zone',
    'Panel Rhythm',
    'Opening Expression',
    'Edge & Corner Expression',
    'Finish & Texture Surface',
  ]

  const engineerCallouts = [
    'Architectural Cladding Zone',
    'Panel Rhythm',
    'Opening Expression',
    'Edge / Corner Expression',
    'Finish Direction',
    'Project Coordination Review',
  ]

  const benefits = [
    { label: 'Design Flexibility', desc: 'Complex geometries, bespoke profiles, and custom finishes produced to project drawings.' },
    { label: 'Durability', desc: 'GFRC panels engineered for long-term performance in demanding exterior environments.' },
    { label: 'Performance', desc: 'Lightweight yet structurally capable — suitable for large-scale façade applications.' },
    { label: 'Sustainable Choice', desc: 'Efficient material use, reduced on-site waste, and Kingdom-local manufacturing.' },
  ]

  const finishes = ['Smooth', 'Sandblasted', 'Textured', 'Ribbed', 'Stone Look', 'Concrete Look', 'Custom Colour', 'Heritage Finish']

  const guidanceAreas = [
    { label: 'Panel Layout Guidance', desc: 'Considerations for panel sizing, joint alignment, and façade rhythm.' },
    { label: 'Opening Surround Guidance', desc: 'How window and door surrounds integrate within the cladding zone.' },
    { label: 'Edge & Corner Guidance', desc: 'Architectural expression at building perimeters and vertical returns.' },
    { label: 'Finish Selection Guidance', desc: 'Coordinating finish direction with design intent and project context.' },
    { label: 'Project Coordination Guidance', desc: 'Information exchange required between Durraka and the project team.' },
  ]

  const infoRequired = [
    'Architectural drawings and elevations',
    'Approximate façade areas',
    'Design intent images or references',
    'Preferred finish direction',
    'Project location',
    'Project timeline',
    'Consultant / client requirements',
    'Any special design considerations',
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — WEBSITE LEVEL: PUBLIC / VISUAL
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Level badge */}
      <div className="border-b border-navy/10 bg-[#FAFAF8] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 border border-accent/40 text-accent text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Level 1 — Website / Public
          </span>
          <span className="text-navy/30 text-xs hidden sm:block">Visual overview · Safe for public website</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-navy pt-16 pb-14 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase">System Overview</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 leading-tight">
            GFRC / GRC Façade<br className="hidden sm:block" /> Cladding System
          </h1>
          <p className="text-accent font-semibold tracking-wide text-base sm:text-lg mb-5">
            Architectural freedom. Engineered confidence.
          </p>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl leading-relaxed">
            Durraka&apos;s GFRC / GRC façade cladding system combines design flexibility,
            performance, and durability to create timeless façades.
          </p>
        </div>
      </div>

      {/* Public visual section — draftman paper background */}
      <div
        className="px-4 py-14 sm:py-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.6' fill='%23071B3B' fill-opacity='0.07'/%3E%3C/svg%3E")`,
          backgroundColor: '#FAFAF8',
        }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="mb-8 pb-4 border-b border-navy/15">
            <p className="text-navy text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
              Fig. 1 — Façade Elevation · Design Intent Only
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* SVG illustration */}
            <div className="bg-white border border-navy/12 shadow-sm p-5 sm:p-8">
              <FacadeElevationPublic />
            </div>

            {/* Callout legend */}
            <div>
              <h2 className="text-navy font-bold text-xl sm:text-2xl mb-6 leading-snug">
                System Design Areas
              </h2>
              <ol className="space-y-4">
                {publicCallouts.map((label, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-navy font-semibold text-sm">{label}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 pt-6 border-t border-navy/10">
                <p className="text-navy/40 text-[10px] font-mono tracking-wider uppercase leading-relaxed">
                  Design intent reference only.<br />
                  No installation details, fixing methods,<br />
                  or construction information shown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefit cards */}
      <div className="bg-white px-4 py-12 sm:py-16 border-t border-navy/8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-navy font-bold text-lg sm:text-xl mb-8 tracking-wide">System Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.label} className="border border-navy/12 p-5 rounded-sm hover:border-accent/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-accent mb-3" />
                <h3 className="text-navy font-bold text-sm mb-2">{b.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Finish options */}
      <div
        className="px-4 py-12 sm:py-16 border-t border-navy/8"
        style={{ backgroundColor: '#FAFAF8' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-navy/40 text-[10px] font-mono tracking-[0.2em] uppercase mb-2">Finish Options</p>
            <h2 className="text-navy font-bold text-lg sm:text-xl">Available Surface Directions</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {finishes.map((f) => (
              <div
                key={f}
                className="border border-navy/12 bg-white p-4 text-center rounded-sm hover:border-accent/40 hover:shadow-sm transition-all"
              >
                {/* Texture preview swatch — abstract stripe pattern */}
                <div className="w-full h-10 mb-3 border border-navy/8 rounded-sm overflow-hidden">
                  <svg viewBox="0 0 60 20" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    {f === 'Smooth' && <rect width="60" height="20" fill="#E8EBF0" />}
                    {f === 'Sandblasted' && (
                      <>
                        <rect width="60" height="20" fill="#DDE0E6" />
                        {[...Array(30)].map((_, i) => (
                          <circle key={i} cx={Math.sin(i * 2.3) * 28 + 30} cy={Math.cos(i * 1.7) * 8 + 10} r="0.8" fill="#071B3B" fillOpacity="0.15" />
                        ))}
                      </>
                    )}
                    {f === 'Textured' && (
                      <>
                        <rect width="60" height="20" fill="#DDE0E6" />
                        {[0,4,8,12,16,20].map(y => <line key={y} x1="0" y1={y} x2="60" y2={y} stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.2" />)}
                      </>
                    )}
                    {f === 'Ribbed' && (
                      <>
                        <rect width="60" height="20" fill="#DDE0E6" />
                        {[0,6,12,18,24,30,36,42,48,54].map(x => <line key={x} x1={x} y1="0" x2={x} y2="20" stroke="#071B3B" strokeWidth="1.5" strokeOpacity="0.18" />)}
                      </>
                    )}
                    {(f === 'Stone Look') && (
                      <>
                        <rect width="60" height="20" fill="#D8D4CC" />
                        <line x1="0" y1="10" x2="60" y2="10" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.2" />
                        <line x1="20" y1="0" x2="20" y2="10" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.2" />
                        <line x1="45" y1="10" x2="45" y2="20" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.2" />
                      </>
                    )}
                    {f === 'Concrete Look' && (
                      <>
                        <rect width="60" height="20" fill="#C8CBCF" />
                        {[2,7,13,17].map(y => <line key={y} x1="0" y1={y} x2="60" y2={y} stroke="#071B3B" strokeWidth="0.3" strokeOpacity="0.15" />)}
                      </>
                    )}
                    {f === 'Custom Colour' && (
                      <rect width="60" height="20" fill="#D71920" fillOpacity="0.15" />
                    )}
                    {f === 'Heritage Finish' && (
                      <>
                        <rect width="60" height="20" fill="#E4DDD0" />
                        {[0,5,10,15,20].map(y => <line key={y} x1="0" y1={y} x2="60" y2={y} stroke="#071B3B" strokeWidth="0.3" strokeOpacity="0.12" />)}
                        {[0,8,16,24,32,40,48,56].map(x => <line key={x} x1={x} y1="0" x2={x} y2="20" stroke="#071B3B" strokeWidth="0.3" strokeOpacity="0.08" />)}
                      </>
                    )}
                  </svg>
                </div>
                <p className="text-navy text-[11px] font-semibold">{f}</p>
              </div>
            ))}
          </div>
          <p className="text-navy/30 text-[10px] font-mono mt-4 tracking-wide">
            Surface swatches are schematic representations only. Final finish confirmed during project review.
          </p>
        </div>
      </div>

      {/* Public CTAs */}
      <div className="bg-white px-4 py-10 sm:py-14 border-t border-navy/8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div>
            <p className="text-navy font-bold text-base sm:text-lg mb-1">Need help choosing the right finish?</p>
            <p className="text-gray-500 text-sm">Our team can advise on finish direction based on your project context.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 border border-navy text-navy font-semibold rounded-sm hover:bg-navy hover:text-white transition-colors text-sm"
            >
              Request More Information
            </Link>
            <Link
              href="/request-quotation"
              className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — ENGINEER GUIDANCE OVERVIEW: CONTROLLED
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Level badge */}
      <div className="border-t-4 border-navy bg-navy/5 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 border border-navy/40 text-navy text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-navy inline-block" />
            Level 2 — Engineer Guidance / Controlled
          </span>
          <span className="text-navy/40 text-xs hidden sm:block">Non-confidential · Design understanding only</span>
        </div>
      </div>

      <div
        className="px-4 py-14 sm:py-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.6' fill='%23071B3B' fill-opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundColor: '#F5F6F8',
        }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Engineer header */}
          <div className="mb-10 pb-6 border-b-2 border-navy">
            <p className="text-navy/40 text-[10px] font-mono tracking-[0.2em] uppercase mb-2">
              Engineer Guidance Overview · GFRC / GRC Façade Cladding System
            </p>
            <h2 className="text-navy font-bold text-2xl sm:text-3xl mb-2">
              GFRC / GRC Façade Cladding System
            </h2>
            <p className="text-accent font-semibold text-sm tracking-wide">
              Engineer Guidance Overview
            </p>
            <p className="text-navy/50 text-xs mt-2 max-w-2xl leading-relaxed">
              Non-confidential guidance for design understanding and early coordination.
              This document does not contain installation details, fixing methods, or construction information.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-14">
            {/* Engineer SVG */}
            <div className="bg-white border border-navy/15 shadow-sm p-5 sm:p-8">
              <div className="mb-3 pb-3 border-b border-navy/10">
                <p className="text-navy text-[10px] font-mono tracking-[0.15em] uppercase">
                  Fig. 2 — Façade Elevation · Engineer Guidance · Non-Confidential
                </p>
              </div>
              <FacadeElevationEngineer />
            </div>

            {/* Engineer callout legend */}
            <div>
              <h3 className="text-navy font-bold text-base sm:text-lg mb-5 uppercase tracking-wider text-sm">
                Design Guidance Areas
              </h3>
              <ol className="space-y-3 mb-8">
                {engineerCallouts.map((label, i) => (
                  <li key={i} className="flex items-start gap-3 border-b border-navy/8 pb-3 last:border-0">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-navy font-semibold text-sm pt-0.5">{label}</p>
                  </li>
                ))}
              </ol>

              {/* NOT shown box */}
              <div className="bg-white border border-navy/15 p-4 rounded-sm">
                <p className="text-navy font-bold text-[10px] tracking-widest uppercase mb-3 font-mono">
                  Not shown in this diagram:
                </p>
                <ul className="space-y-1">
                  {['Fixing system or bracket locations','Anchor or subframe details','Slab or structural connections','Sealant or backer rod positions','Dimensions or structural calculations'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-[11px] text-navy/50">
                      <svg className="w-3 h-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Engineer guidance section grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">

            {/* 1. System Intent */}
            <div className="bg-white border border-navy/12 p-6 rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent font-bold text-[10px] tracking-widest uppercase font-mono">01</span>
                <div className="flex-1 h-px bg-navy/10" />
              </div>
              <h3 className="text-navy font-bold text-sm mb-3">System Intent</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                GFRC / GRC façade cladding is designed to provide an architectural exterior skin to buildings.
                The system expresses the design intent through panel composition, surface finish, and
                profile — working with the building structure as a non-structural façade element.
              </p>
            </div>

            {/* 2. Suitable Applications */}
            <div className="bg-white border border-navy/12 p-6 rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent font-bold text-[10px] tracking-widest uppercase font-mono">02</span>
                <div className="flex-1 h-px bg-navy/10" />
              </div>
              <h3 className="text-navy font-bold text-sm mb-3">Suitable Applications</h3>
              <ul className="space-y-1.5">
                {['Commercial & mixed-use buildings','Hospitality & hotel façades','Institutional & civic buildings','Residential developments','Heritage-inspired architecture','Large-scale urban projects'].map(a => (
                  <li key={a} className="flex items-start gap-2 text-xs text-gray-500">
                    <div className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Finish Directions */}
            <div className="bg-white border border-navy/12 p-6 rounded-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent font-bold text-[10px] tracking-widest uppercase font-mono">03</span>
                <div className="flex-1 h-px bg-navy/10" />
              </div>
              <h3 className="text-navy font-bold text-sm mb-3">Finish Directions</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                Finish direction is established at design stage and confirmed during project coordination.
                Available directions include:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Smooth','Sandblasted','Textured','Ribbed','Stone Look','Concrete Look','Heritage'].map(f => (
                  <span key={f} className="text-[10px] border border-navy/20 text-navy/60 px-2 py-0.5 rounded-sm">{f}</span>
                ))}
              </div>
            </div>

          </div>

          {/* Design guidance area cards */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-accent font-bold text-[10px] tracking-widest uppercase font-mono">04</span>
              <h3 className="text-navy font-bold text-sm uppercase tracking-wider">Design Guidance Areas</h3>
              <div className="flex-1 h-px bg-navy/10" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guidanceAreas.map((g, i) => (
                <div key={g.label} className="bg-white border border-navy/12 p-5 rounded-sm flex gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent text-[10px] font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-navy font-semibold text-xs mb-1">{g.label}</p>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information required */}
          <div className="bg-white border border-navy/15 p-6 sm:p-8 rounded-sm mb-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-accent font-bold text-[10px] tracking-widest uppercase font-mono">05</span>
              <h3 className="text-navy font-bold text-sm uppercase tracking-wider">Information Required for Technical Review</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {infoRequired.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  <p className="text-navy/70 text-xs leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important note / disclaimer */}
          <div className="bg-navy border border-navy p-6 sm:p-8 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent font-bold text-[10px] tracking-widest uppercase font-mono">06</span>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">Important Note</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              This guidance is provided for design understanding and early coordination only. It does not
              represent construction details or installation instructions. Final fixing, structural
              calculations, and project-specific connections are issued only through approved shop drawings
              and project-specific engineering submissions.
            </p>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — TWO-LEVEL INFORMATION POLICY
      ══════════════════════════════════════════════════════════════════════ */}

      <div className="border-t-4 border-accent bg-white px-4 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">

          <div className="mb-8 pb-4 border-b border-navy/10">
            <p className="text-navy/40 text-[10px] font-mono tracking-[0.2em] uppercase mb-1">Information Policy</p>
            <h2 className="text-navy font-bold text-xl sm:text-2xl" dir="rtl">
              مستويين فقط من المعلومات
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10">

            {/* Level 1 */}
            <div className="border border-navy/15 rounded-sm overflow-hidden">
              <div className="bg-[#FAFAF8] border-b border-navy/10 px-5 py-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="text-navy font-bold text-xs">Website Level</p>
                  <p className="text-navy/50 text-[10px]" dir="rtl">عام / بصري</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-navy/60 text-xs leading-relaxed mb-4" dir="rtl">
                  شرح فكرة النظام للزائر بدون تفاصيل فنية.
                </p>
                <div className="mb-4">
                  <p className="text-navy font-semibold text-[10px] uppercase tracking-wider mb-2">Shows:</p>
                  <ul className="space-y-1">
                    {['مكان استخدام النظام','الفكرة المعمارية','المزايا العامة','خيارات التشطيب','دعوة للتواصل'].map(item => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-navy/60" dir="rtl">
                        <svg className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-navy font-semibold text-[10px] uppercase tracking-wider mb-2">Does not show:</p>
                  <ul className="space-y-1">
                    {['تفاصيل تثبيت','مقاطع تنفيذية','أبعاد','أسرار تركيب'].map(item => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-navy/40" dir="rtl">
                        <svg className="w-3 h-3 text-navy/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Level 2 */}
            <div className="border border-navy/15 rounded-sm overflow-hidden">
              <div className="bg-navy/5 border-b border-navy/10 px-5 py-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="text-navy font-bold text-xs">Engineer Guidance Level</p>
                  <p className="text-navy/50 text-[10px]" dir="rtl">استرشادي للمهندسين</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-navy/60 text-xs leading-relaxed mb-4" dir="rtl">
                  مساعدة المهندس على فهم النظام واحتياجات التنسيق بدون كشف أسرار التنفيذ.
                </p>
                <div className="mb-4">
                  <p className="text-navy font-semibold text-[10px] uppercase tracking-wider mb-2">Shows:</p>
                  <ul className="space-y-1">
                    {['فكرة النظام','استخدامات النظام','اعتبارات التصميم','اتجاهات التشطيب','المعلومات المطلوبة للمراجعة','ملاحظات تنسيقية عامة'].map(item => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-navy/60" dir="rtl">
                        <svg className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-navy font-semibold text-[10px] uppercase tracking-wider mb-2">Does not show:</p>
                  <ul className="space-y-1">
                    {['تفاصيل التثبيت','مقاطع تنفيذية','طرق التركيب','حسابات إنشائية','تفاصيل قابلة للتنفيذ'].map(item => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-navy/40" dir="rtl">
                        <svg className="w-3 h-3 text-navy/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#FAFAF8] border border-navy/10 px-6 py-4 rounded-sm text-center">
            <p className="text-navy font-semibold text-sm" dir="rtl">
              نقدم المعلومات الصحيحة في الوقت المناسب، بالمستوى المناسب، للجمهور المناسب.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — USER JOURNEY / SITE MAP
      ══════════════════════════════════════════════════════════════════════ */}

      <div
        className="px-4 py-14 sm:py-20 border-t border-navy/10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.6' fill='%23071B3B' fill-opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundColor: '#F5F6F8',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 pb-4 border-b border-navy/15">
            <p className="text-navy/40 text-[10px] font-mono tracking-[0.2em] uppercase mb-1">Navigation Concept</p>
            <h2 className="text-navy font-bold text-xl sm:text-2xl">User Journey / Site Map</h2>
          </div>

          {/* Journey flow */}
          <div className="flex flex-wrap items-center gap-0 mb-10">
            {[
              { step: 'Home', sub: '/' },
              { step: 'Our Systems', sub: '/systems' },
              { step: 'Systems List', sub: '/systems' },
              { step: 'System Page', sub: 'e.g. GFRC / GRC' },
              { step: 'Engineer Guidance', sub: 'Controlled PDF' },
              { step: 'Request Quotation', sub: '/request-quotation' },
            ].map((node, i, arr) => (
              <div key={node.step} className="flex items-center">
                <div className="bg-white border border-navy/15 px-4 py-2.5 rounded-sm shadow-sm">
                  <p className="text-navy font-semibold text-xs">{node.step}</p>
                  <p className="text-navy/35 text-[10px] font-mono">{node.sub}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex items-center px-1.5">
                    <div className="w-4 h-px bg-navy/25" />
                    <svg className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Journey notes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: '01', text: 'Each system eventually has its own page using this same two-level structure.' },
              { n: '02', text: 'The website page gives a public visual overview — safe for all visitors.' },
              { n: '03', text: 'The engineer guidance overview gives deeper controlled information for qualified audiences.' },
              { n: '04', text: 'Detailed technical information is only issued after qualification, project review, and approved shop drawings.' },
            ].map(note => (
              <div key={note.n} className="bg-white border border-navy/12 p-5 rounded-sm">
                <p className="text-accent font-bold text-[10px] tracking-widest uppercase font-mono mb-2">{note.n}</p>
                <p className="text-navy/65 text-xs leading-relaxed">{note.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-navy px-4 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Start Your Project</p>
          <h2 className="text-white font-bold text-xl sm:text-2xl mb-4">
            Ready to discuss your façade requirements?
          </h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Submit your project details and our team will prepare a tailored response.
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
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
