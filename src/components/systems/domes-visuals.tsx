// Language-neutral concept diagrams for the GFRC/GRC domes & vaults system page.
// Shared by both the English and Arabic routes (passed into SystemEnhancedLayout).
// Concept-only — no fixing, anchoring, or installation details are shown.
// Note: the small SVG annotation labels remain English for now; translating them
// is deferred to the content-translation phase (see docs/i18n.md).

export function SampleDrawing() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Sample dome geometry concept — concept reference only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground line */}
      <line x1="20" y1="188" x2="300" y2="188" stroke="#071B3B" strokeWidth="2" />
      {/* Drum section */}
      <rect x="80" y="155" width="160" height="35" fill="white" stroke="#071B3B" strokeWidth="1.2" />
      {/* Base transition */}
      <rect x="68" y="148" width="184" height="10" fill="white" stroke="#071B3B" strokeWidth="1.3" />
      <rect x="72" y="151" width="176" height="4" fill="#071B3B" fillOpacity="0.08" />
      {/* Dome shell - semi-circle */}
      <path d="M 80 148 Q 80 50 160 40 Q 240 50 240 148" fill="white" stroke="#071B3B" strokeWidth="1.5" />
      {/* Dome rib lines */}
      <path d="M 160 40 Q 130 80 110 148" stroke="#071B3B" strokeWidth="0.7" strokeDasharray="4 2" strokeOpacity="0.4" />
      <path d="M 160 40 Q 190 80 210 148" stroke="#071B3B" strokeWidth="0.7" strokeDasharray="4 2" strokeOpacity="0.4" />
      <path d="M 160 40 Q 120 65 90 148" stroke="#071B3B" strokeWidth="0.5" strokeDasharray="3 2" strokeOpacity="0.25" />
      <path d="M 160 40 Q 200 65 230 148" stroke="#071B3B" strokeWidth="0.5" strokeDasharray="3 2" strokeOpacity="0.25" />
      {/* Decorative band */}
      <path d="M 96 120 Q 160 102 224 120" stroke="#071B3B" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M 96 128 Q 160 110 224 128" stroke="#071B3B" strokeWidth="0.7" strokeOpacity="0.3" />
      {/* Lantern */}
      <rect x="148" y="30" width="24" height="14" stroke="#071B3B" strokeWidth="1" fill="white" />
      <rect x="154" y="20" width="12" height="12" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.1" />
      {/* Dimension / axis line */}
      <line x1="160" y1="15" x2="160" y2="188" stroke="#071B3B" strokeWidth="0.5" strokeDasharray="4 3" strokeOpacity="0.2" />
      {/* Labels */}
      <text x="160" y="12" textAnchor="middle" fontSize="6.5" fill="#071B3B" fillOpacity="0.45" fontFamily="sans-serif" fontWeight="600">LANTERN</text>
      <text x="248" y="100" textAnchor="start" fontSize="6.5" fill="#071B3B" fillOpacity="0.45" fontFamily="sans-serif" fontWeight="600">DOME SURFACE</text>
      <text x="248" y="126" textAnchor="start" fontSize="6" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif">DECO BAND</text>
      <text x="248" y="153" textAnchor="start" fontSize="6" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif">BASE TRANSITION</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#D71920" fillOpacity="0.7" fontFamily="sans-serif" fontWeight="700">CONCEPT ONLY — NO FIXING DETAILS</text>
    </svg>
  )
}

export function SystemContext() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Dome system architectural context — concept only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground */}
      <line x1="10" y1="188" x2="310" y2="188" stroke="#071B3B" strokeWidth="2" />
      {/* Building body */}
      <rect x="40" y="110" width="240" height="78" fill="white" stroke="#071B3B" strokeWidth="1.5" fillOpacity="0.5" />
      {/* Windows in building */}
      <rect x="65" y="128" width="30" height="22" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="145" y="128" width="30" height="22" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="225" y="128" width="30" height="22" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      {/* Dome zone - highlighted */}
      <rect x="108" y="108" width="104" height="6" fill="#D71920" fillOpacity="0.15" stroke="#D71920" strokeWidth="0.6" strokeOpacity="0.4" />
      <path d="M 110 108 Q 110 40 160 30 Q 210 40 210 108" fill="#D71920" fillOpacity="0.10" stroke="#D71920" strokeWidth="1.2" />
      {/* Dome surface details */}
      <path d="M 160 30 Q 140 60 128 108" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="3 2" strokeOpacity="0.3" />
      <path d="M 160 30 Q 180 60 192 108" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="3 2" strokeOpacity="0.3" />
      {/* Label */}
      <text x="160" y="80" textAnchor="middle" fontSize="6.5" fill="#D71920" fillOpacity="0.75" fontFamily="sans-serif" fontWeight="700">DOME ZONE</text>
      <text x="160" y="115" textAnchor="middle" fontSize="6" fill="#D71920" fillOpacity="0.6" fontFamily="sans-serif">BASE TRANSITION</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif" fontWeight="600">SYSTEM CONTEXT — DESIGN COORDINATION AREA</text>
    </svg>
  )
}
