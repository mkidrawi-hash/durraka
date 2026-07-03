// Language-neutral concept diagrams for the GFRC/GRC cornices & profiles system page.
// Shared by both the English and Arabic routes (passed into SystemEnhancedLayout).
// Concept-only — no fixing, anchoring, or installation details are shown.
// Note: the small SVG annotation labels remain English for now; translating them
// is deferred to the content-translation phase (see docs/i18n.md).

export function SampleDrawing() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Sample cornice profile concept — concept reference only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Wall section */}
      <rect x="80" y="20" width="160" height="160" fill="white" stroke="#071B3B" strokeWidth="1.2" fillOpacity="0.6" />
      {/* Cornice at top */}
      <rect x="60" y="20" width="200" height="18" fill="white" stroke="#071B3B" strokeWidth="1.4" />
      <rect x="64" y="24" width="192" height="6" fill="#071B3B" fillOpacity="0.08" />
      {/* Shadow line under cornice */}
      <line x1="60" y1="38" x2="280" y2="38" stroke="#071B3B" strokeWidth="0.8" strokeOpacity="0.5" />
      {/* String course / profile band mid */}
      <rect x="72" y="108" width="176" height="8" fill="white" stroke="#071B3B" strokeWidth="1" />
      <rect x="74" y="110" width="172" height="4" fill="#071B3B" fillOpacity="0.07" />
      {/* Sill profile at bottom */}
      <rect x="72" y="160" width="176" height="7" fill="white" stroke="#071B3B" strokeWidth="0.9" />
      {/* Parapet top */}
      <rect x="64" y="12" width="192" height="10" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.05" />
      {/* Dimension lines */}
      <line x1="38" y1="20" x2="38" y2="38" stroke="#D71920" strokeWidth="0.7" strokeDasharray="3 2" />
      <line x1="34" y1="20" x2="42" y2="20" stroke="#D71920" strokeWidth="0.7" />
      <line x1="34" y1="38" x2="42" y2="38" stroke="#D71920" strokeWidth="0.7" />
      {/* Labels */}
      <text x="160" y="8" textAnchor="middle" fontSize="7" fill="#071B3B" fillOpacity="0.5" fontFamily="sans-serif" fontWeight="600">PARAPET PROFILE</text>
      <text x="160" y="32" textAnchor="middle" fontSize="6.5" fill="#071B3B" fillOpacity="0.45" fontFamily="sans-serif">MAIN CORNICE LINE</text>
      <text x="160" y="115" textAnchor="middle" fontSize="6" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif">BAND PROFILE</text>
      <text x="160" y="172" textAnchor="middle" fontSize="6" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif">SILL PROFILE</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#D71920" fillOpacity="0.7" fontFamily="sans-serif" fontWeight="700">CONCEPT ONLY — NO FIXING DETAILS</text>
    </svg>
  )
}

export function SystemContext() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Cornice system architectural context — concept only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground */}
      <line x1="10" y1="185" x2="310" y2="185" stroke="#071B3B" strokeWidth="2" />
      {/* Building body */}
      <rect x="50" y="45" width="220" height="140" fill="white" stroke="#071B3B" strokeWidth="1.5" fillOpacity="0.5" />
      {/* Main cornice zone - highlighted */}
      <rect x="40" y="30" width="240" height="18" fill="#D71920" fillOpacity="0.18" stroke="#D71920" strokeWidth="0.8" strokeOpacity="0.5" />
      {/* Band profiles - highlighted */}
      <rect x="44" y="100" width="232" height="8" fill="#D71920" fillOpacity="0.12" />
      <rect x="44" y="148" width="232" height="6" fill="#D71920" fillOpacity="0.10" />
      {/* Windows */}
      <rect x="75" y="65" width="35" height="28" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="143" y="65" width="35" height="28" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="211" y="65" width="35" height="28" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="75" y="118" width="35" height="25" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="143" y="118" width="35" height="25" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="211" y="118" width="35" height="25" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.8" />
      {/* Labels */}
      <text x="160" y="42" textAnchor="middle" fontSize="6.5" fill="#D71920" fillOpacity="0.8" fontFamily="sans-serif" fontWeight="700">CORNICE ZONE</text>
      <text x="160" y="107" textAnchor="middle" fontSize="6" fill="#D71920" fillOpacity="0.7" fontFamily="sans-serif" fontWeight="600">BAND PROFILE</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif" fontWeight="600">SYSTEM CONTEXT — DESIGN COORDINATION AREA</text>
    </svg>
  )
}
