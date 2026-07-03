import type { Metadata } from 'next'
import { SystemEnhancedLayout, type SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const metadata: Metadata = {
  title: 'Mashrabiya Screens System — GFRC/GRC Patterned Screens',
  description:
    'GFRC/GRC patterned mashrabiya screens designed for privacy, shading, identity, and architectural façade expression. Modern and heritage-inspired pattern design. Manufactured in Saudi Arabia.',
}

function SampleDrawing() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Sample mashrabiya pattern module — concept reference only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Screen frame */}
      <rect x="40" y="20" width="240" height="165" stroke="#071B3B" strokeWidth="2" fill="white" fillOpacity="0.5" />
      {/* Pattern grid - 6x4 modules */}
      {[0,1,2,3,4,5].map(col =>
        [0,1,2,3].map(row => {
          const x = 48 + col * 37
          const y = 28 + row * 38
          return (
            <g key={col+'-'+row}>
              <rect x={x} y={y} width="30" height="30" stroke="#071B3B" strokeWidth="0.6" fill="none" />
              {/* Inner diamond pattern */}
              <path d={`M ${x+15} ${y+3} L ${x+27} ${y+15} L ${x+15} ${y+27} L ${x+3} ${y+15} Z`} stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.08" />
              {/* Inner detail */}
              <path d={`M ${x+15} ${y+8} L ${x+22} ${y+15} L ${x+15} ${y+22} L ${x+8} ${y+15} Z`} stroke="#071B3B" strokeWidth="0.4" fill="#071B3B" fillOpacity="0.06" />
            </g>
          )
        })
      )}
      {/* Frame border emphasis */}
      <rect x="40" y="20" width="240" height="165" stroke="#071B3B" strokeWidth="2" fill="none" />
      {/* Labels */}
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#D71920" fillOpacity="0.7" fontFamily="sans-serif" fontWeight="700">CONCEPT ONLY — NO FIXING DETAILS</text>
      <text x="160" y="198" textAnchor="middle" fontSize="6.5" fill="#071B3B" fillOpacity="0.45" fontFamily="sans-serif" fontWeight="600">PATTERN MODULE REPETITION — SAMPLE ONLY</text>
    </svg>
  )
}

function SystemContext() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Mashrabiya screen system architectural context — concept only">
      <rect width="320" height="200" fill="#F8F9FA" />
      {/* Ground */}
      <line x1="10" y1="188" x2="310" y2="188" stroke="#071B3B" strokeWidth="2" />
      {/* Building facade */}
      <rect x="30" y="35" width="260" height="153" fill="white" stroke="#071B3B" strokeWidth="1.5" fillOpacity="0.4" />
      {/* Windows behind screens */}
      <rect x="60" y="60" width="55" height="80" fill="#071B3B" fillOpacity="0.08" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="133" y="60" width="55" height="80" fill="#071B3B" fillOpacity="0.08" stroke="#071B3B" strokeWidth="0.8" />
      <rect x="206" y="60" width="55" height="80" fill="#071B3B" fillOpacity="0.08" stroke="#071B3B" strokeWidth="0.8" />
      {/* Screen zones - highlighted */}
      <rect x="56" y="55" width="63" height="90" fill="#D71920" fillOpacity="0.12" stroke="#D71920" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="129" y="55" width="63" height="90" fill="#D71920" fillOpacity="0.12" stroke="#D71920" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="202" y="55" width="63" height="90" fill="#D71920" fillOpacity="0.12" stroke="#D71920" strokeWidth="1" strokeOpacity="0.5" />
      {/* Screen pattern dots inside zones */}
      {[68,141,214].map(sx =>
        [64,72,80,88,96,104,112,120,128].map(sy => (
          <circle key={sx+sy} cx={sx + 25} cy={sy} r="2.5" fill="#D71920" fillOpacity="0.2" />
        ))
      )}
      {/* Labels */}
      <text x="87" y="155" textAnchor="middle" fontSize="6.5" fill="#D71920" fillOpacity="0.75" fontFamily="sans-serif" fontWeight="700">SCREEN ZONE</text>
      <text x="160" y="155" textAnchor="middle" fontSize="6.5" fill="#D71920" fillOpacity="0.75" fontFamily="sans-serif" fontWeight="700">SCREEN ZONE</text>
      <text x="233" y="155" textAnchor="middle" fontSize="6.5" fill="#D71920" fillOpacity="0.75" fontFamily="sans-serif" fontWeight="700">SCREEN ZONE</text>
      <text x="7" y="14" textAnchor="start" fontSize="5.5" fill="#071B3B" fillOpacity="0.4" fontFamily="sans-serif" fontWeight="600">SYSTEM CONTEXT — DESIGN COORDINATION AREA</text>
    </svg>
  )
}

const data: SystemEnhancedData = {
  title: 'Mashrabiya Screens System',
  breadcrumb: 'Mashrabiya Screens',
  heroDescription:
    'GFRC/GRC patterned screens designed for privacy, shading, identity, and architectural façade expression — project-specific module coordination for modern and heritage-inspired designs.',
  heroImage: '/images/projects/mashrabiya-screen-gfrc.png',
  heroImageAlt: 'GFRC/GRC mashrabiya screen system — patterned façade screen expression',
  heroObjectPosition: 'center',

  photoTags: [
    { n: 1, label: 'Pattern Module', xPct: 30, yPct: 38 },
    { n: 2, label: 'Screen Rhythm', xPct: 60, yPct: 28 },
    { n: 3, label: 'Privacy & Shading Expression', xPct: 45, yPct: 55 },
    { n: 4, label: 'Opening Relationship', xPct: 72, yPct: 50 },
    { n: 5, label: 'Façade Integration Zone', xPct: 25, yPct: 68 },
    { n: 6, label: 'Finish Direction', xPct: 65, yPct: 72 },
  ],

  quickRead: [
    { text: 'Custom pattern language and identity' },
    { text: 'Privacy and shading expression' },
    { text: 'Modern and heritage-inspired designs' },
    { text: 'Project-specific module coordination' },
  ],

  systemIntent:
    'Designed to create patterned façade screens that balance visual identity, privacy, shading, and architectural rhythm — translating design intent into precision-manufactured GFRC/GRC screen panels.',

  commonApplications:
    'Residential projects, hospitality buildings, cultural projects, commercial façades, government buildings, and heritage-inspired developments.',

  keyDesignConsiderations: [
    'Pattern module and repetition',
    'Screen openness and visual privacy',
    'Relationship with windows and openings',
    'Façade rhythm and alignment',
    'Finish and colour direction',
    'Coordination with project design intent',
  ],

  importantNote:
    'This guide is for design and coordination purposes only. Final pattern geometry, panelisation, and project-specific engineering details are developed through approved submissions.',

  infoRequiredCustom: [
    'Pattern reference or design intent',
    'Screen dimensions and approximate area',
    'Architectural elevations',
    'Opening locations',
    'Preferred privacy / openness direction',
    'Project location',
    'Finish and colour direction',
    'Consultant / client requirements',
  ],

  designGuidance: [
    { label: 'Pattern Module Design', desc: 'Module size, geometry, and repetition strategy.' },
    { label: 'Screen Openness Ratio', desc: 'Balance between privacy, light, and visual transparency.' },
    { label: 'Façade Rhythm', desc: 'Screen module alignment with building grid and openings.' },
    { label: 'Frame & Border', desc: 'Perimeter frame, border return, and edge treatment.' },
    { label: 'Finish Direction', desc: 'Surface finish for screen panels and frame elements.' },
    { label: 'Coordination with Openings', desc: 'Screen placement relative to window and door openings.' },
  ],

  ctaTitle: 'Ready to Develop Your Mashrabiya Screen Design?',
}

export default function MashrabiyaPage() {
  return <SystemEnhancedLayout data={data} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} />
}
