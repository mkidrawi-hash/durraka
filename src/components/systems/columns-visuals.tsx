// Language-neutral concept diagrams for the GFRC/GRC columns & capitals system page.
// Shared by both the English and Arabic routes (passed into SystemEnhancedLayout).
// Concept-only — no fixing, anchoring, or installation details are shown.
// Note: the small SVG annotation labels remain English for now; translating them
// is deferred to the content-translation phase (see docs/i18n.md).

export function SampleDrawing() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Sample column proportion concept — concept reference only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground line */}
      <line x1="40" y1="188" x2="280" y2="188" stroke="#071B3B" strokeWidth="2" />
      {/* Three columns */}
      {[80, 160, 240].map((cx, i) => (
        <g key={i}>
          {/* Base */}
          <rect x={cx - 20} y="175" width="40" height="13" fill="white" stroke="#071B3B" strokeWidth="1.1" />
          <rect x={cx - 16} y="172" width="32" height="5" fill="white" stroke="#071B3B" strokeWidth="0.9" />
          {/* Shaft */}
          <rect x={cx - 12} y="55" width="24" height="117" fill="white" stroke="#071B3B" strokeWidth="1.2" />
          {/* Slight entasis suggestion */}
          <rect x={cx - 11} y="80" width="22" height="70" fill="#071B3B" fillOpacity="0.03" />
          {/* Capital */}
          <rect x={cx - 16} y="45" width="32" height="12" fill="white" stroke="#071B3B" strokeWidth="1.1" />
          <rect x={cx - 20} y="38" width="40" height="9" fill="white" stroke="#071B3B" strokeWidth="1.2" />
        </g>
      ))}
      {/* Entablature */}
      <rect x="52" y="30" width="216" height="10" fill="white" stroke="#071B3B" strokeWidth="1.3" />
      <rect x="48" y="24" width="224" height="8" fill="#071B3B" fillOpacity="0.06" stroke="#071B3B" strokeWidth="1" />
      {/* Dimension markers */}
      <line x1="58" y1="12" x2="58" y2="36" stroke="#D71920" strokeWidth="0.7" strokeDasharray="3 2" />
      <line x1="18" y1="55" x2="58" y2="55" stroke="#D71920" strokeWidth="0.7" strokeDasharray="3 2" />
      <line x1="18" y1="172" x2="58" y2="172" stroke="#D71920" strokeWidth="0.7" strokeDasharray="3 2" />
      <line x1="22" y1="55" x2="22" y2="172" stroke="#D71920" strokeWidth="0.6" />
      <line x1="18" y1="55" x2="26" y2="55" stroke="#D71920" strokeWidth="0.6" />
      <line x1="18" y1="172" x2="26" y2="172" stroke="#D71920" strokeWidth="0.6" />
      {/* Labels */}
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#D71920" fillOpacity="0.7" fontFamily="sans-serif" fontWeight="700">CONCEPT ONLY — NO FIXING DETAILS</text>
      <text x="160" y="20" textAnchor="middle" fontSize="7" fill="#071B3B" fillOpacity="0.5" fontFamily="sans-serif" fontWeight="600">ENTABLATURE</text>
      <text x="160" y="43" textAnchor="middle" fontSize="6.5" fill="#071B3B" fillOpacity="0.45" fontFamily="sans-serif">CAPITAL</text>
      <text x="160" y="115" textAnchor="middle" fontSize="6.5" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif">SHAFT</text>
      <text x="160" y="180" textAnchor="middle" fontSize="6" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif">BASE</text>
    </svg>
  )
}

export function SystemContext() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Columns system architectural context — concept only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground */}
      <line x1="10" y1="188" x2="310" y2="188" stroke="#071B3B" strokeWidth="2" />
      {/* Entrance / portico background */}
      <rect x="60" y="80" width="200" height="108" fill="white" stroke="#071B3B" strokeWidth="1" fillOpacity="0.3" />
      {/* Columns highlighted */}
      {[90, 150, 210, 270].map((cx, i) => (
        <g key={i}>
          <rect x={cx - 10} y="55" width="20" height="133" fill="#D71920" fillOpacity="0.12" stroke="#D71920" strokeWidth="0.7" strokeOpacity="0.5" />
          <rect x={cx - 14} y="48" width="28" height="10" fill="#D71920" fillOpacity="0.15" />
          <rect x={cx - 14} y="183" width="28" height="7" fill="#D71920" fillOpacity="0.12" />
        </g>
      ))}
      {/* Entablature zone */}
      <rect x="72" y="38" width="200" height="18" fill="#D71920" fillOpacity="0.10" stroke="#D71920" strokeWidth="0.7" strokeOpacity="0.4" />
      {/* Pediment triangle */}
      <path d="M 72 38 L 172 12 L 272 38" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.4" />
      {/* Labels */}
      <text x="172" y="32" textAnchor="middle" fontSize="6.5" fill="#071B3B" fillOpacity="0.45" fontFamily="sans-serif">ENTABLATURE ZONE</text>
      <text x="172" y="120" textAnchor="middle" fontSize="6.5" fill="#D71920" fillOpacity="0.75" fontFamily="sans-serif" fontWeight="700">COLUMN ZONE</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif" fontWeight="600">SYSTEM CONTEXT — DESIGN COORDINATION AREA</text>
    </svg>
  )
}
