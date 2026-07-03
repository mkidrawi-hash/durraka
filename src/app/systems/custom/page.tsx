import type { Metadata } from 'next'
import { SystemEnhancedLayout, type SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const metadata: Metadata = {
  title: 'Custom Decorative Elements System — GFRC/GRC Ornamental Architecture',
  description:
    'Project-specific GFRC/GRC decorative elements for entrances, façades, frames, arches, panels, and architectural features. Custom motifs and heritage-inspired ornamental manufacturing.',
}

function SampleDrawing() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Sample decorative panel concept — concept reference only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Main panel frame */}
      <rect x="40" y="20" width="240" height="165" stroke="#071B3B" strokeWidth="2" fill="white" fillOpacity="0.5" />
      {/* Inner frame */}
      <rect x="52" y="32" width="216" height="141" stroke="#071B3B" strokeWidth="0.9" fill="none" strokeOpacity="0.4" />
      {/* Arch at top */}
      <path d="M 80 108 Q 80 52 160 44 Q 240 52 240 108" stroke="#071B3B" strokeWidth="1.2" fill="none" />
      <rect x="80" y="108" width="160" height="50" stroke="#071B3B" strokeWidth="0.9" fill="none" strokeOpacity="0.5" />
      {/* Decorative motif - central rosette */}
      <circle cx="160" cy="80" r="20" stroke="#071B3B" strokeWidth="0.8" fill="none" strokeOpacity="0.5" />
      <circle cx="160" cy="80" r="12" stroke="#071B3B" strokeWidth="0.6" fill="#071B3B" fillOpacity="0.05" strokeOpacity="0.4" />
      {[0,45,90,135,180,225,270,315].map(angle => {
        const rad = angle * Math.PI / 180
        const x1 = 160 + 12 * Math.cos(rad)
        const y1 = 80 + 12 * Math.sin(rad)
        const x2 = 160 + 20 * Math.cos(rad)
        const y2 = 80 + 20 * Math.sin(rad)
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.35" />
      })}
      {/* Corner ornaments */}
      {[[60,40],[260,40],[60,175],[260,175]].map(([cx,cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="8" stroke="#071B3B" strokeWidth="0.6" fill="none" strokeOpacity="0.35" />
          <circle cx={cx} cy={cy} r="3" fill="#071B3B" fillOpacity="0.15" />
        </g>
      ))}
      {/* Repeated border motif */}
      {[90,130,170,210].map(x => (
        <g key={x}>
          <rect x={x-6} y="128" width="12" height="22" stroke="#071B3B" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
          <path d={`M ${x} ${128} L ${x} ${122}`} stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.3" />
        </g>
      ))}
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#D71920" fillOpacity="0.7" fontFamily="sans-serif" fontWeight="700">CONCEPT ONLY — NO PRODUCTION DETAILS</text>
      <text x="160" y="198" textAnchor="middle" fontSize="6.5" fill="#071B3B" fillOpacity="0.45" fontFamily="sans-serif" fontWeight="600">DECORATIVE PANEL — SAMPLE CONCEPT</text>
    </svg>
  )
}

function SystemContext() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Custom decorative elements architectural context — concept only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground */}
      <line x1="10" y1="188" x2="310" y2="188" stroke="#071B3B" strokeWidth="2" />
      {/* Entrance / façade base */}
      <rect x="30" y="55" width="260" height="133" fill="white" stroke="#071B3B" strokeWidth="1.2" fillOpacity="0.4" />
      {/* Central arch - highlighted as decorative zone */}
      <path d="M 110 188 L 110 100 Q 110 55 160 48 Q 210 55 210 100 L 210 188" fill="#D71920" fillOpacity="0.08" stroke="#D71920" strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Corner decorative panels - highlighted */}
      <rect x="30" y="55" width="75" height="133" fill="#D71920" fillOpacity="0.06" stroke="#D71920" strokeWidth="0.7" strokeOpacity="0.35" />
      <rect x="215" y="55" width="75" height="133" fill="#D71920" fillOpacity="0.06" stroke="#D71920" strokeWidth="0.7" strokeOpacity="0.35" />
      {/* Top decorative band */}
      <rect x="30" y="40" width="260" height="18" fill="#D71920" fillOpacity="0.10" stroke="#D71920" strokeWidth="0.7" strokeOpacity="0.4" />
      {/* Labels */}
      <text x="160" y="110" textAnchor="middle" fontSize="6.5" fill="#D71920" fillOpacity="0.75" fontFamily="sans-serif" fontWeight="700">ENTRANCE ARCH</text>
      <text x="67" y="125" textAnchor="middle" fontSize="6" fill="#D71920" fillOpacity="0.65" fontFamily="sans-serif" fontWeight="600">DECO PANEL</text>
      <text x="253" y="125" textAnchor="middle" fontSize="6" fill="#D71920" fillOpacity="0.65" fontFamily="sans-serif" fontWeight="600">DECO PANEL</text>
      <text x="160" y="52" textAnchor="middle" fontSize="6" fill="#D71920" fillOpacity="0.65" fontFamily="sans-serif">DECORATIVE BAND</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif" fontWeight="600">SYSTEM CONTEXT — DESIGN COORDINATION AREA</text>
    </svg>
  )
}

const data: SystemEnhancedData = {
  title: 'Custom Decorative Elements System',
  breadcrumb: 'Custom Decorative Elements',
  heroDescription:
    'Project-specific GFRC/GRC decorative elements for entrances, façades, frames, arches, panels, and architectural features — translating design intent into custom manufactured architectural identity.',
  heroImage: '/images/projects/ornamental-facade-gfrc.png',
  heroImageAlt: 'GFRC/GRC custom decorative elements — ornamental façade and entrance expression',
  heroObjectPosition: 'center',

  photoTags: [
    { n: 1, label: 'Custom Decorative Panel', xPct: 30, yPct: 42 },
    { n: 2, label: 'Entrance Frame Element', xPct: 55, yPct: 25 },
    { n: 3, label: 'Arch / Opening Ornament', xPct: 50, yPct: 50 },
    { n: 4, label: 'Repeated Motif Zone', xPct: 72, yPct: 38 },
    { n: 5, label: 'Surface Finish Direction', xPct: 25, yPct: 68 },
    { n: 6, label: 'Project-Specific Design Review', xPct: 68, yPct: 70 },
  ],

  quickRead: [
    { text: 'Custom architectural expression and identity' },
    { text: 'Heritage and modern design capability' },
    { text: 'Suitable for landmark and identity-driven projects' },
    { text: 'Project-specific design coordination' },
  ],

  systemIntent:
    'Designed to translate architectural concepts into custom GFRC/GRC decorative components with controlled geometry, finish, and visual identity — from entrance frames to ornamental panels and feature walls.',

  commonApplications:
    'Grand entrances, feature walls, façade ornaments, arches and frames, cultural projects, hospitality projects, and luxury villas.',

  keyDesignConsiderations: [
    'Decorative motif direction',
    'Repetition and alignment',
    'Relationship with openings and façade frames',
    'Surface relief depth at a visual level',
    'Finish and colour direction',
    'Project-specific design review',
  ],

  importantNote:
    'This guide is for early design understanding and coordination. Final component geometry, panelisation, and engineering details are completed through approved project submissions.',

  infoRequiredCustom: [
    'Reference images or design intent',
    'Architectural drawings and elevations',
    'Approximate size and quantity',
    'Preferred motif or style direction',
    'Finish and colour direction',
    'Project location',
    'Project timeline',
    'Consultant / client requirements',
  ],

  designGuidance: [
    { label: 'Decorative Motif Direction', desc: 'Style, scale, and visual character of the ornamental element.' },
    { label: 'Repetition & Alignment', desc: 'Module repetition strategy across façade or entrance zone.' },
    { label: 'Relationship with Openings', desc: 'Frame and ornament coordination with door and window openings.' },
    { label: 'Relief Depth', desc: 'Visual depth direction for surface relief elements.' },
    { label: 'Finish & Colour', desc: 'Surface finish direction for all decorative components.' },
    { label: 'Project-Specific Review', desc: 'Design intent and scope confirmed through approved drawings.' },
  ],

  ctaTitle: 'Ready to Develop Your Custom Decorative Elements?',
}

export default function CustomPage() {
  return <SystemEnhancedLayout data={data} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} />
}
