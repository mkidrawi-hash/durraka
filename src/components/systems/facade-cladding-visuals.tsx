// Language-neutral concept diagrams for the GFRC/GRC façade cladding system page.
// Shared by both the English and Arabic routes (passed into SystemEnhancedLayout).
// Concept-only — no fixing, anchoring, or installation details are shown.
// Note: the small SVG annotation labels remain English for now; translating them
// is deferred to the content-translation phase (see docs/i18n.md).

export function SampleDrawing() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Sample facade elevation concept — concept reference only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground line */}
      <line x1="20" y1="185" x2="300" y2="185" stroke="#071B3B" strokeWidth="2" />
      {/* Building outline */}
      <rect x="40" y="30" width="240" height="155" stroke="#071B3B" strokeWidth="1.5" fill="white" fillOpacity="0.6" />
      {/* Panel rhythm - horizontal bands */}
      <line x1="40" y1="70" x2="280" y2="70" stroke="#071B3B" strokeWidth="0.7" strokeOpacity="0.4" />
      <line x1="40" y1="110" x2="280" y2="110" stroke="#071B3B" strokeWidth="0.7" strokeOpacity="0.4" />
      <line x1="40" y1="150" x2="280" y2="150" stroke="#071B3B" strokeWidth="0.7" strokeOpacity="0.4" />
      {/* Panel rhythm - vertical joints */}
      <line x1="120" y1="30" x2="120" y2="185" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="3 2" strokeOpacity="0.35" />
      <line x1="200" y1="30" x2="200" y2="185" stroke="#071B3B" strokeWidth="0.6" strokeDasharray="3 2" strokeOpacity="0.35" />
      {/* Opening surrounds */}
      <rect x="60" y="80" width="45" height="35" stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.1" />
      <rect x="138" y="80" width="45" height="35" stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.1" />
      <rect x="216" y="80" width="45" height="35" stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.1" />
      {/* Cornice top */}
      <rect x="36" y="22" width="248" height="10" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.08" />
      {/* Edge expression */}
      <rect x="36" y="30" width="8" height="155" fill="#D71920" fillOpacity="0.12" />
      <rect x="276" y="30" width="8" height="155" fill="#D71920" fillOpacity="0.12" />
      {/* Labels */}
      <text x="160" y="18" textAnchor="middle" fontSize="7" fill="#071B3B" fillOpacity="0.5" fontFamily="sans-serif" fontWeight="600">CORNICE LINE</text>
      <text x="160" y="65" textAnchor="middle" fontSize="6" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif">PANEL RHYTHM</text>
      <text x="82" y="76" textAnchor="middle" fontSize="6" fill="#071B3B" fillOpacity="0.45" fontFamily="sans-serif">OPENING</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#D71920" fillOpacity="0.7" fontFamily="sans-serif" fontWeight="700">CONCEPT ONLY — NO FIXING DETAILS</text>
    </svg>
  )
}

export function SystemContext() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Facade cladding system architectural context — concept only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground */}
      <line x1="10" y1="185" x2="310" y2="185" stroke="#071B3B" strokeWidth="2" />
      {/* Building silhouette */}
      <rect x="40" y="30" width="240" height="155" fill="white" stroke="#071B3B" strokeWidth="1.5" fillOpacity="0.5" />
      {/* GFRC cladding zones - highlighted */}
      <rect x="40" y="30" width="240" height="155" fill="#D71920" fillOpacity="0.06" />
      <rect x="40" y="30" width="12" height="155" fill="#D71920" fillOpacity="0.18" />
      <rect x="268" y="30" width="12" height="155" fill="#D71920" fillOpacity="0.18" />
      <rect x="40" y="30" width="240" height="14" fill="#D71920" fillOpacity="0.18" />
      {/* Windows */}
      <rect x="70" y="65" width="40" height="30" fill="#071B3B" fillOpacity="0.12" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="140" y="65" width="40" height="30" fill="#071B3B" fillOpacity="0.12" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="210" y="65" width="40" height="30" fill="#071B3B" fillOpacity="0.12" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="70" y="115" width="40" height="30" fill="#071B3B" fillOpacity="0.12" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="140" y="115" width="40" height="30" fill="#071B3B" fillOpacity="0.12" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="210" y="115" width="40" height="30" fill="#071B3B" fillOpacity="0.12" stroke="#071B3B" strokeWidth="0.8" />
      {/* Zone label */}
      <rect x="88" y="155" width="144" height="16" fill="#D71920" fillOpacity="0.08" rx="2" />
      <text x="160" y="166" textAnchor="middle" fontSize="6.5" fill="#D71920" fillOpacity="0.8" fontFamily="sans-serif" fontWeight="700">GFRC CLADDING ZONE</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif" fontWeight="600">SYSTEM CONTEXT — DESIGN COORDINATION AREA</text>
    </svg>
  )
}
