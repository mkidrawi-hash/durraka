// ─── Package AI Concept Illustrations ─────────────────────────────────────────
// Six distinct SVG illustrations — one per package scope.
// All use the Durraka brand palette: navy (#071B3B), white, accent (#D71920).
// Rendered inside any container with position:relative and overflow:hidden.

function AccentBar() {
  return <rect x="0" y="0" width="6" height="100%" fill="#D71920" fillOpacity="0.55" />
}

// ─── 1. Commercial Façade ─────────────────────────────────────────────────────
export function CommercialFacadeIllustration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f2d58" />
          <stop offset="100%" stopColor="#071B3B" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#cf-bg)" />
      <g opacity="0.30" stroke="white" fill="none" strokeLinecap="round">
        {/* Building silhouette */}
        <rect x="90" y="48" width="420" height="314" strokeWidth="1.8" />
        {/* Cornice top band */}
        <rect x="80" y="32" width="440" height="18" strokeWidth="1.4" />
        {/* Podium base */}
        <rect x="80" y="362" width="440" height="14" strokeWidth="1.2" />
        {/* Floor bands (8 floors) */}
        {[87, 125, 163, 201, 239, 277, 315, 353].map((y, i) => (
          <line key={i} x1="90" y1={y} x2="510" y2={y} strokeWidth="0.8" />
        ))}
        {/* 3-bay vertical divisions */}
        <line x1="230" y1="48" x2="230" y2="362" strokeWidth="1.1" />
        <line x1="370" y1="48" x2="370" y2="362" strokeWidth="1.1" />
        {/* Window grid — left bay */}
        {[52, 90, 128, 166, 204, 242, 280, 318].map((y, i) => (
          <rect key={i} x="105" y={y} width="110" height="29" fill="white" fillOpacity="0.055" strokeWidth="0" />
        ))}
        {/* Window grid — center bay */}
        {[52, 90, 128, 166, 204, 242, 280, 318].map((y, i) => (
          <rect key={i} x="245" y={y} width="110" height="29" fill="white" fillOpacity="0.055" strokeWidth="0" />
        ))}
        {/* Window grid — right bay */}
        {[52, 90, 128, 166, 204, 242, 280, 318].map((y, i) => (
          <rect key={i} x="385" y={y} width="110" height="29" fill="white" fillOpacity="0.055" strokeWidth="0" />
        ))}
        {/* Decorative vertical fins at bay edges */}
        <rect x="220" y="48" width="8" height="314" fill="white" fillOpacity="0.04" strokeWidth="0" />
        <rect x="360" y="48" width="8" height="314" fill="white" fillOpacity="0.04" strokeWidth="0" />
      </g>
      <AccentBar />
    </svg>
  )
}

// ─── 2. Mashrabiya Screens ────────────────────────────────────────────────────
export function MashrabiyaScreenIllustration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ms-bg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#071B3B" />
          <stop offset="100%" stopColor="#122e5a" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#ms-bg)" />
      <g opacity="0.28" stroke="white" fill="none">
        {/* Facade background bands */}
        <rect x="60" y="30" width="480" height="340" strokeWidth="1.4" />
        <line x1="60" y1="80" x2="540" y2="80" strokeWidth="0.7" />
        <line x1="60" y1="360" x2="540" y2="360" strokeWidth="0.9" />
        {/* 3 arched screen bays */}
        {[85, 245, 405].map((x, i) => (
          <g key={i}>
            {/* Arch */}
            <path d={`M${x} 340 L${x} 170 Q${x} 90 ${x + 70} 90 Q${x + 140} 90 ${x + 140} 170 L${x + 140} 340`} strokeWidth="1.4" />
            {/* Lattice grid inside arch — horizontal */}
            {[120, 150, 180, 210, 240, 270, 300, 330].map((y, j) => (
              <line key={j} x1={x + 5} y1={y} x2={x + 135} y2={y} strokeWidth="0.5" />
            ))}
            {/* Lattice grid inside arch — vertical */}
            {[0, 27, 54, 81, 108, 135].map((dx, j) => (
              <line key={j} x1={x + dx} y1={120} x2={x + dx} y2={340} strokeWidth="0.5" />
            ))}
            {/* Keystone diamond */}
            <path d={`M${x + 70} 82 L${x + 82} 97 L${x + 70} 112 L${x + 58} 97 Z`} strokeWidth="0.9" />
          </g>
        ))}
        {/* Side pilaster elements */}
        <rect x="60" y="80" width="22" height="280" strokeWidth="0.8" />
        <rect x="518" y="80" width="22" height="280" strokeWidth="0.8" />
      </g>
      <AccentBar />
    </svg>
  )
}

// ─── 3. Domes & Cornices ──────────────────────────────────────────────────────
export function DomesCornicesIllustration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e2852" />
          <stop offset="100%" stopColor="#071B3B" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#dc-bg)" />
      <g opacity="0.30" stroke="white" fill="none">
        {/* Building body */}
        <rect x="100" y="220" width="400" height="150" strokeWidth="1.4" />
        {/* Cornice bands */}
        <rect x="90" y="210" width="420" height="14" strokeWidth="1.2" />
        <rect x="110" y="250" width="380" height="8" strokeWidth="0.8" />
        <rect x="100" y="360" width="400" height="12" strokeWidth="1.0" />
        {/* Arched windows in body — 4 arches */}
        {[120, 220, 320, 420].map((x, i) => (
          <g key={i}>
            <path d={`M${x} 356 L${x} 290 Q${x} 258 ${x + 50} 258 Q${x + 100} 258 ${x + 100} 290 L${x + 100} 356`} strokeWidth="1.1" />
            <rect x={x + 5} y={295} width={90} height={60} fill="white" fillOpacity="0.05" strokeWidth="0" />
          </g>
        ))}
        {/* Drum (base of dome) */}
        <rect x="200" y="150" width="200" height="72" strokeWidth="1.2" />
        <line x1="200" y1="178" x2="400" y2="178" strokeWidth="0.7" />
        {/* Drum windows */}
        {[215, 265, 315, 365].map((x, i) => (
          <path key={i} d={`M${x} 208 L${x} 182 Q${x} 165 ${x + 20} 165 Q${x + 40} 165 ${x + 40} 182 L${x + 40} 208`} strokeWidth="0.85" />
        ))}
        {/* Main dome */}
        <path d="M170 152 Q170 30 300 18 Q430 30 430 152" strokeWidth="1.8" />
        {/* Dome ribs */}
        {[195, 235, 300, 365, 405].map((x, i) => (
          <line key={i} x1="300" y1="18" x2={x} y2="152" strokeWidth="0.5" />
        ))}
        {/* Dome lantern / finial */}
        <circle cx="300" cy="18" r="10" strokeWidth="1.1" />
        <line x1="300" y1="2" x2="300" y2="8" strokeWidth="1.4" />
      </g>
      <AccentBar />
    </svg>
  )
}

// ─── 4. Grand Entrance ────────────────────────────────────────────────────────
export function GrandEntranceIllustration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ge-bg" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0c2650" />
          <stop offset="100%" stopColor="#071B3B" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#ge-bg)" />
      <g opacity="0.30" stroke="white" fill="none">
        {/* Wings */}
        <rect x="40" y="100" width="160" height="270" strokeWidth="1.2" />
        <rect x="400" y="100" width="160" height="270" strokeWidth="1.2" />
        {/* Wing cornice bands */}
        <rect x="38" y="88" width="164" height="14" strokeWidth="1.0" />
        <rect x="398" y="88" width="164" height="14" strokeWidth="1.0" />
        {/* Wing decorative panels */}
        {[115, 195, 275].map((y, i) => (
          <g key={i}>
            <rect x="60" y={y} width="120" height="68" strokeWidth="0.7" />
            <rect x="420" y={y} width="120" height="68" strokeWidth="0.7" />
          </g>
        ))}
        {/* Main entrance columns — left pair */}
        <rect x="196" y="68" width="28" height="302" strokeWidth="1.2" />
        <ellipse cx="210" cy="58" rx="22" ry="12" strokeWidth="1.0" />
        <rect x="200" y="362" width="20" height="10" strokeWidth="0.8" />
        <rect x="205" y="372" width="28" height="8" strokeWidth="0.7" />
        {/* Main entrance columns — right pair */}
        <rect x="376" y="68" width="28" height="302" strokeWidth="1.2" />
        <ellipse cx="390" cy="58" rx="22" ry="12" strokeWidth="1.0" />
        <rect x="380" y="362" width="20" height="10" strokeWidth="0.8" />
        <rect x="375" y="372" width="28" height="8" strokeWidth="0.7" />
        {/* Grand arch */}
        <path d="M224 370 L224 200 Q224 50 300 38 Q376 50 376 200 L376 370" strokeWidth="1.8" />
        {/* Arch decorative keystone */}
        <path d="M300 30 L316 55 L300 80 L284 55 Z" strokeWidth="1.0" />
        {/* Arch frame mouldings */}
        <path d="M234 370 L234 206 Q234 70 300 58 Q366 70 366 206 L366 370" strokeWidth="0.8" />
        {/* Gate opening panels */}
        <rect x="235" y="200" width="62" height="170" fill="white" fillOpacity="0.04" strokeWidth="0.6" />
        <rect x="303" y="200" width="62" height="170" fill="white" fillOpacity="0.04" strokeWidth="0.6" />
        {/* Entry steps */}
        <rect x="210" y="378" width="180" height="8" strokeWidth="0.8" />
        <rect x="195" y="386" width="210" height="6" strokeWidth="0.7" />
      </g>
      <AccentBar />
    </svg>
  )
}

// ─── 5. Columns & Capitals ────────────────────────────────────────────────────
export function ColumnsCapitalsIllustration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cc-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#112f5c" />
          <stop offset="100%" stopColor="#071B3B" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#cc-bg)" />
      <g opacity="0.30" stroke="white" fill="none">
        {/* Entablature (top beam) */}
        <rect x="30" y="60" width="540" height="22" strokeWidth="1.4" />
        <rect x="30" y="82" width="540" height="10" strokeWidth="0.8" />
        <rect x="30" y="92" width="540" height="6" strokeWidth="0.6" />
        {/* Stylobate base */}
        <rect x="30" y="350" width="540" height="12" strokeWidth="1.2" />
        <rect x="20" y="362" width="560" height="8" strokeWidth="0.9" />
        <rect x="10" y="370" width="580" height="6" strokeWidth="0.7" />
        {/* 5 Columns — positioned with slight perspective compression */}
        {[
          { x: 52, w: 48, cx: 76 },
          { x: 167, w: 44, cx: 189 },
          { x: 272, w: 42, cx: 293 },
          { x: 372, w: 40, cx: 392 },
          { x: 464, w: 38, cx: 483 },
        ].map(({ x, w, cx }, i) => (
          <g key={i}>
            {/* Shaft */}
            <rect x={x} y={98} width={w} height={252} strokeWidth={1.2 - i * 0.08} />
            {/* Capital */}
            <ellipse cx={cx} cy={90} rx={w / 2 + 8} ry={10} strokeWidth={1.0} />
            <rect x={x - 4} y={84} width={w + 8} height={8} strokeWidth={0.7} />
            {/* Base */}
            <rect x={x - 4} y={346} width={w + 8} height={6} strokeWidth={0.8} />
            <ellipse cx={cx} cy={346} rx={w / 2 + 8} ry={5} strokeWidth={0.7} />
          </g>
        ))}
        {/* Arched bays between columns */}
        {[
          { x1: 100, x2: 167, cy: 156 },
          { x1: 211, x2: 272, cy: 162 },
          { x1: 314, x2: 372, cy: 166 },
          { x1: 412, x2: 464, cy: 170 },
        ].map(({ x1, x2, cy }, i) => {
          const mx = (x1 + x2) / 2
          const r = (x2 - x1) / 2
          return <path key={i} d={`M${x1} 350 L${x1} ${cy} Q${x1} ${cy - r} ${mx} ${cy - r} Q${x2} ${cy - r} ${x2} ${cy} L${x2} 350`} strokeWidth={0.7 - i * 0.05} />
        })}
      </g>
      <AccentBar />
    </svg>
  )
}

// ─── 6. Custom Decorative Elements ────────────────────────────────────────────
export function CustomDecorativeIllustration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cd-bg" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e2d55" />
          <stop offset="100%" stopColor="#071B3B" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#cd-bg)" />
      <g opacity="0.28" stroke="white" fill="none">
        {/* Facade background */}
        <rect x="40" y="30" width="520" height="340" strokeWidth="1.2" />
        {/* Horizontal band elements */}
        <rect x="40" y="30" width="520" height="18" strokeWidth="1.0" />
        <rect x="40" y="352" width="520" height="18" strokeWidth="1.0" />
        <line x1="40" y1="180" x2="560" y2="180" strokeWidth="0.7" />
        {/* Left ornamental panel with geometric pattern */}
        <rect x="60" y="55" width="140" height="120" strokeWidth="1.1" />
        {/* Star/octagon pattern inside left panel */}
        <rect x="80" y="75" width="100" height="80" strokeWidth="0.6" />
        <path d="M130 75 L155 90 L155 115 L130 130 L105 115 L105 90 Z" strokeWidth="0.7" />
        <line x1="105" y1="90" x2="155" y2="130" strokeWidth="0.4" />
        <line x1="155" y1="90" x2="105" y2="130" strokeWidth="0.4" />
        <line x1="80" y1="115" x2="180" y2="115" strokeWidth="0.4" />
        <line x1="130" y1="75" x2="130" y2="155" strokeWidth="0.4" />
        {/* Center identity panel — larger, feature element */}
        <rect x="220" y="48" width="160" height="140" strokeWidth="1.4" />
        {/* Arabic-inspired geometric frame */}
        <rect x="232" y="60" width="136" height="116" strokeWidth="0.8" />
        {/* Inner diamond motif */}
        <path d="M300 68 L336 104 L300 140 L264 104 Z" strokeWidth="1.0" />
        <path d="M300 80 L322 104 L300 128 L278 104 Z" strokeWidth="0.6" />
        <circle cx="300" cy="104" r="12" strokeWidth="0.8" />
        {/* Corner ornaments */}
        {[[235, 63], [351, 63], [235, 167], [351, 167]].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y} L${x + 14} ${y} L${x} ${y + 14} Z`} strokeWidth="0.6" />
        ))}
        {/* Right ornamental panel */}
        <rect x="400" y="55" width="140" height="120" strokeWidth="1.1" />
        {/* Calligraphy-inspired horizontal strokes */}
        {[78, 98, 118, 138, 158].map((y, i) => (
          <line key={i} x1={420} y1={y} x2={420 + 100 - i * 10} y2={y} strokeWidth={0.8 - i * 0.1} />
        ))}
        {/* Lower panel row — 3 equal panels */}
        {[60, 230, 400].map((x, i) => (
          <g key={i}>
            <rect x={x} y={200} width={140} height={140} strokeWidth={1.0} />
            {/* Nested frame */}
            <rect x={x + 14} y={214} width={112} height={112} strokeWidth={0.6} />
            {/* Simple pattern element */}
            <circle cx={x + 70} cy={270} r={30} strokeWidth={0.7} />
            <line x1={x + 40} y1={240} x2={x + 100} y2={300} strokeWidth={0.4} />
            <line x1={x + 100} y1={240} x2={x + 40} y2={300} strokeWidth={0.4} />
          </g>
        ))}
      </g>
      <AccentBar />
    </svg>
  )
}
