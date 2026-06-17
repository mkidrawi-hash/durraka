import type { Metadata } from 'next'
import Link from 'next/link'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { DiagramEnlarger } from '@/components/systems/DiagramEnlarger'
import { StickyMobileCTA } from './StickyMobileCTA'
import { SOCIAL_LINKS } from '@/lib/social-links'

export const metadata: Metadata = {
  title: 'Grand Entrance Package | GFRC / GRC Architectural Entrance Systems | Durraka',
  description:
    'Premium GFRC / GRC grand entrance package for villas, majlis, hospitality, palaces, and landmark façades. Custom columns, frames, cornices, arches, and decorative elements by Durraka Factory for Industry.',
}

// ─── Data ──────────────────────────────────────────────────────────────────

const INCLUDED_ITEMS = [
  {
    title: 'Entrance Columns',
    desc: 'Architectural columns scaled to the entrance proportion and façade character.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="12" width="7" height="20" stroke="#071B3B" strokeWidth="1.3" />
        <rect x="5" y="9" width="13" height="4" stroke="#071B3B" strokeWidth="1.1" />
        <rect x="5" y="32" width="13" height="4" stroke="#071B3B" strokeWidth="1.1" />
        <rect x="29" y="12" width="7" height="20" stroke="#071B3B" strokeWidth="1.3" />
        <rect x="26" y="9" width="13" height="4" stroke="#071B3B" strokeWidth="1.1" />
        <rect x="26" y="32" width="13" height="4" stroke="#071B3B" strokeWidth="1.1" />
        <line x1="3" y1="9" x2="41" y2="9" stroke="#071B3B" strokeOpacity="0.3" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    title: 'Feature Arch or Frame',
    desc: 'A strong entrance frame or arch element to define the main arrival point.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M 9 37 L 9 20 A 13 13 0 0 1 35 20 L 35 37" stroke="#071B3B" strokeWidth="1.4" />
        <rect x="5" y="20" width="4" height="17" stroke="#071B3B" strokeWidth="1" />
        <rect x="35" y="20" width="4" height="17" stroke="#071B3B" strokeWidth="1" />
        <line x1="3" y1="37" x2="41" y2="37" stroke="#071B3B" strokeWidth="1.2" />
        <line x1="22" y1="7" x2="22" y2="11" stroke="#071B3B" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Cornice Line',
    desc: 'Horizontal architectural detailing to complete the upper composition.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10" aria-hidden="true">
        <line x1="24" y1="36" x2="24" y2="14" stroke="#071B3B" strokeWidth="1.2" />
        <polyline points="24,14 17,14 17,18 11,18 11,22 24,22" stroke="#071B3B" strokeWidth="1.3" />
        <line x1="24" y1="22" x2="24" y2="36" stroke="#071B3B" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="9" y1="22" x2="26" y2="22" stroke="#071B3B" strokeOpacity="0.2" strokeWidth="0.7" strokeDasharray="3 2" />
        <line x1="9" y1="28" x2="13" y2="28" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" />
        <line x1="11" y1="18" x2="11" y2="30" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" />
      </svg>
    ),
  },
  {
    title: 'Decorative Panels',
    desc: 'Patterned or plain GFRC / GRC panels based on the design direction.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="5" y="5" width="34" height="34" stroke="#071B3B" strokeWidth="1.3" />
        <rect x="9" y="9" width="26" height="10" stroke="#071B3B" strokeWidth="0.9" />
        <line x1="9" y1="23" x2="35" y2="23" stroke="#071B3B" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="9" y1="27" x2="35" y2="27" stroke="#071B3B" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="9" y1="31" x2="35" y2="31" stroke="#071B3B" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="15" y1="9" x2="15" y2="19" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" />
        <line x1="22" y1="9" x2="22" y2="19" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" />
        <line x1="29" y1="9" x2="29" y2="19" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" />
      </svg>
    ),
  },
  {
    title: 'Custom Profiles',
    desc: 'Project-based profiles developed according to drawings and visual intent.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10" aria-hidden="true">
        <polyline points="5,37 5,29 11,29 11,23 17,23 17,17 23,17 23,11 35,11 35,37" stroke="#071B3B" strokeWidth="1.4" />
        <line x1="3" y1="37" x2="41" y2="37" stroke="#071B3B" strokeWidth="1.2" />
        <line x1="37" y1="11" x2="41" y2="11" stroke="#071B3B" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="37" y1="37" x2="41" y2="37" stroke="#071B3B" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="39" y1="11" x2="39" y2="37" stroke="#071B3B" strokeOpacity="0.35" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    title: 'Engineering Review',
    desc: 'Coordination review based on project drawings before production planning.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="4" width="22" height="28" rx="1" stroke="#071B3B" strokeWidth="1.3" />
        <line x1="10" y1="10" x2="24" y2="10" stroke="#071B3B" strokeOpacity="0.4" strokeWidth="0.9" />
        <line x1="10" y1="14" x2="22" y2="14" stroke="#071B3B" strokeOpacity="0.4" strokeWidth="0.9" />
        <line x1="10" y1="18" x2="24" y2="18" stroke="#071B3B" strokeOpacity="0.4" strokeWidth="0.9" />
        <line x1="10" y1="22" x2="20" y2="22" stroke="#071B3B" strokeOpacity="0.3" strokeWidth="0.7" strokeDasharray="3 2" />
        <line x1="6" y1="26" x2="28" y2="26" stroke="#071B3B" strokeOpacity="0.4" strokeWidth="0.8" />
        <circle cx="33" cy="35" r="8" stroke="#D71920" strokeWidth="1.4" fill="white" />
        <path d="M 29.5 35 L 32 37.5 L 37 31.5" stroke="#D71920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const BEST_FOR = [
  'Luxury villa entrances',
  'Palace and private residence façades',
  'Majlis and guest entrances',
  'Hospitality and resort entrances',
  'Wedding halls and event venues',
  'Government and semi-government landmark entrances',
  'Commercial landmark façades',
]

const STYLES = [
  {
    name: 'Contemporary Façade',
    desc: 'Clean geometric lines with a modern Saudi architectural identity, refined for contemporary developments.',
    pattern: (
      <svg viewBox="0 0 160 72" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="160" height="72" fill="#EDF3FA" />
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={i} x={12 + i * 16} y="16" width="8" height="40" stroke="#B8CCE0" strokeWidth="0.9" fill="none" />
        ))}
        <line x1="0" y1="12" x2="160" y2="12" stroke="#CBD5E1" strokeWidth="0.8" />
        <line x1="0" y1="60" x2="160" y2="60" stroke="#CBD5E1" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    name: 'Hijazi Inspired',
    desc: 'Drawing on the Hijazi architectural vocabulary with ornamental layering and regional surface expression.',
    pattern: (
      <svg viewBox="0 0 160 72" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="160" height="72" fill="#F3EFF9" />
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d={`M ${16 + i * 26} 56 L ${16 + i * 26} 36 A 13 13 0 0 1 ${42 + i * 26} 36 L ${42 + i * 26} 56`}
            stroke="#CBD5E1" strokeWidth="0.9" fill="none" />
        ))}
        <line x1="0" y1="56" x2="160" y2="56" stroke="#CBD5E1" strokeWidth="0.8" />
        <line x1="0" y1="20" x2="160" y2="20" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="4 3" />
      </svg>
    ),
  },
  {
    name: 'Najdi Inspired',
    desc: 'Rooted in the Najdi heritage language — bold geometric forms, deep reveals, and strong linear character.',
    pattern: (
      <svg viewBox="0 0 160 72" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="160" height="72" fill="#EDF5EC" />
        <polyline points="0,56 20,20 40,56 60,20 80,56 100,20 120,56 140,20 160,56" stroke="#9FBFA0" strokeWidth="1.1" fill="none" />
        <line x1="0" y1="16" x2="160" y2="16" stroke="#CBD5E1" strokeWidth="0.8" />
        <line x1="0" y1="60" x2="160" y2="60" stroke="#CBD5E1" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    name: 'Classical / Heritage',
    desc: 'Columnar composition with cornice, frieze, and classical order elements adapted to the project scale.',
    pattern: (
      <svg viewBox="0 0 160 72" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="160" height="72" fill="#FAF7ED" />
        {[28, 68, 92, 132].map((x) => (
          <g key={x}>
            <rect x={x} y="18" width="10" height="38" stroke="#CBD5E1" strokeWidth="0.9" />
            <rect x={x - 3} y="14" width="16" height="5" stroke="#CBD5E1" strokeWidth="0.8" />
            <rect x={x - 3} y="56" width="16" height="5" stroke="#CBD5E1" strokeWidth="0.8" />
          </g>
        ))}
        <line x1="0" y1="12" x2="160" y2="12" stroke="#CBD5E1" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'Modern Minimal',
    desc: 'Restrained composition with precise lines, minimal surface relief, and refined material expression.',
    pattern: (
      <svg viewBox="0 0 160 72" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="160" height="72" fill="#F5F9FA" />
        <line x1="0" y1="36" x2="160" y2="36" stroke="#A8C0CC" strokeWidth="1.4" />
        <line x1="0" y1="28" x2="160" y2="28" stroke="#CBD5E1" strokeWidth="0.5" />
        <line x1="0" y1="44" x2="160" y2="44" stroke="#CBD5E1" strokeWidth="0.5" />
        <rect x="60" y="16" width="40" height="40" stroke="#CBD5E1" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Custom Architectural Identity',
    desc: 'A direction developed specifically for the project based on provided references, drawings, and design intent.',
    pattern: (
      <svg viewBox="0 0 160 72" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="160" height="72" fill="#FAF0EE" />
        <path d="M 50 56 L 50 36 A 30 30 0 0 1 110 36 L 110 56" stroke="#D4A89E" strokeWidth="1.0" fill="none" />
        <line x1="0" y1="56" x2="160" y2="56" stroke="#CBD5E1" strokeWidth="0.8" />
        <rect x="20" y="14" width="12" height="42" stroke="#CBD5E1" strokeWidth="0.8" />
        <rect x="128" y="14" width="12" height="42" stroke="#CBD5E1" strokeWidth="0.8" />
        <line x1="0" y1="12" x2="160" y2="12" stroke="#CBD5E1" strokeWidth="0.6" />
        <line x1="80" y1="6" x2="80" y2="12" stroke="#D71920" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
  },
]

const FINISHES = [
  {
    label: 'Smooth Architectural Finish',
    desc: 'Clean, refined surface suitable for contemporary compositions.',
    swatch: (
      <svg viewBox="0 0 160 72" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="sw1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ECF0F5" />
            <stop offset="100%" stopColor="#CDD6DF" />
          </linearGradient>
        </defs>
        <rect width="160" height="72" fill="url(#sw1)" />
        {/* Subtle diagonal sheen */}
        <line x1="0" y1="72" x2="90" y2="0" stroke="white" strokeWidth="28" strokeOpacity="0.14" />
      </svg>
    ),
  },
  {
    label: 'Stone-Like Texture',
    desc: 'A textured surface that evokes natural stone without the weight or maintenance burden.',
    swatch: (
      <svg viewBox="0 0 160 72" className="w-full" aria-hidden="true">
        <rect width="160" height="72" fill="#D5DDE5" />
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={i} x1={0} y1={4 + i * 4} x2={160} y2={5 + i * 4}
            stroke="#A8B6C2" strokeWidth="0.8" strokeOpacity={0.65 - i * 0.015} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={i * 24} y1={0} x2={i * 24 + 12} y2={72}
            stroke="#BCC8D2" strokeWidth="0.5" strokeOpacity="0.35" />
        ))}
      </svg>
    ),
  },
  {
    label: 'Sandblast-Inspired Finish',
    desc: 'Open-grained surface treatment creating a warm, tactile quality for heritage-influenced designs.',
    swatch: (
      <svg viewBox="0 0 160 72" className="w-full" aria-hidden="true">
        <rect width="160" height="72" fill="#E6DDD0" />
        {Array.from({ length: 160 }).map((_, i) => {
          const x = (i * 37) % 160
          const y = (i * 23 + Math.floor(i / 7) * 13) % 72
          return <circle key={i} cx={x} cy={y} r="0.8" fill="#B89870" fillOpacity="0.65" />
        })}
      </svg>
    ),
  },
  {
    label: 'Custom Colour Matching',
    desc: 'Colour-matched to the project palette, scheme, or specific material reference samples.',
    swatch: (
      <svg viewBox="0 0 160 72" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="sw4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B8C8D6" />
            <stop offset="30%" stopColor="#D2E2EE" />
            <stop offset="60%" stopColor="#E4D4C8" />
            <stop offset="100%" stopColor="#CEC0B0" />
          </linearGradient>
        </defs>
        <rect width="160" height="72" fill="url(#sw4)" />
        <line x1="53" y1="0" x2="53" y2="72" stroke="white" strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="107" y1="0" x2="107" y2="72" stroke="white" strokeWidth="0.8" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    label: 'Heritage-Inspired Surface',
    desc: 'A surface expression referencing traditional material culture and regional architectural identity.',
    swatch: (
      <svg viewBox="0 0 160 72" className="w-full" aria-hidden="true">
        <rect width="160" height="72" fill="#D4C4A8" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={7 + i * 7} x2={160} y2={7 + i * 7}
            stroke="#A8855A" strokeWidth="0.7" strokeOpacity="0.55" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={14 + i * 14} y1={0} x2={14 + i * 14} y2={72}
            stroke="#A8855A" strokeWidth="0.6" strokeOpacity="0.45" />
        ))}
      </svg>
    ),
  },
]

const CALLOUTS = [
  {
    n: 1,
    label: 'Main Entrance Frame',
    desc: 'The outer architectural frame defining the entrance composition. Scale, proportion, and form are developed according to project drawings.',
  },
  {
    n: 2,
    label: 'Side Columns',
    desc: 'GFRC / GRC columns flanking the entrance, scaled to the opening and façade character. Available in classical and contemporary profiles.',
  },
  {
    n: 3,
    label: 'Upper Cornice',
    desc: 'Horizontal cornice line completing the top of the composition. Provides visual definition and architectural expression at the crown.',
  },
  {
    n: 4,
    label: 'Decorative Panel Zone',
    desc: 'GFRC / GRC panel areas within the composition. Pattern, relief depth, and design direction are defined per project.',
  },
  {
    n: 5,
    label: 'Arch / Canopy Zone',
    desc: 'Optional arch or canopy element crowning the entrance opening. Style and form are guided by architectural language and project requirement.',
  },
  {
    n: 6,
    label: 'Project-Based Customisation',
    desc: 'Scale, style, finish, and element configuration are developed according to project drawings and design intent. No two packages are identical.',
  },
]

const RFQ_ITEMS = [
  {
    key: 'arch-drawings',
    label: 'Architectural drawings',
    desc: 'Plans, elevations, sections, entrance details, and any relevant façade drawings.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-accent flex-shrink-0" stroke="currentColor" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="1" strokeWidth="1.3" />
        <line x1="2" y1="15" x2="18" y2="15" strokeWidth="1" />
        <line x1="9" y1="15" x2="9" y2="18" strokeWidth="1" />
        <path d="M 5 5 L 5 12 L 13 12" strokeWidth="1.1" strokeOpacity="0.65" />
        <path d="M 9 9.5 A 3.5 3.5 0 0 1 12.5 6" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 1.5" />
      </svg>
    ),
  },
  {
    key: 'structural',
    label: 'Structural drawings',
    desc: 'Main structural drawings or available details related to the entrance opening and support conditions.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-accent flex-shrink-0" stroke="currentColor" aria-hidden="true">
        <line x1="3" y1="4" x2="17" y2="4" strokeWidth="1.5" />
        <line x1="3" y1="16" x2="17" y2="16" strokeWidth="1.5" />
        <line x1="10" y1="4" x2="10" y2="16" strokeWidth="1.5" />
        <line x1="3" y1="4" x2="3" y2="7" strokeWidth="1" strokeOpacity="0.45" />
        <line x1="17" y1="4" x2="17" y2="7" strokeWidth="1" strokeOpacity="0.45" />
        <line x1="3" y1="13" x2="3" y2="16" strokeWidth="1" strokeOpacity="0.45" />
        <line x1="17" y1="13" x2="17" y2="16" strokeWidth="1" strokeOpacity="0.45" />
      </svg>
    ),
  },
  {
    key: 'boq',
    label: 'BOQ / quantity schedule, if available',
    desc: 'If not available, our team can estimate approximate quantities from the provided drawings.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-accent flex-shrink-0" stroke="currentColor" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="1" strokeWidth="1.3" />
        <line x1="2" y1="6.5" x2="18" y2="6.5" strokeWidth="1.1" />
        <line x1="7" y1="2" x2="7" y2="18" strokeWidth="0.9" strokeOpacity="0.5" />
        <line x1="13" y1="2" x2="13" y2="18" strokeWidth="0.9" strokeOpacity="0.5" />
        <line x1="2" y1="10.5" x2="18" y2="10.5" strokeWidth="0.7" strokeOpacity="0.35" />
        <line x1="2" y1="14" x2="18" y2="14" strokeWidth="0.7" strokeOpacity="0.35" />
      </svg>
    ),
  },
  {
    key: 'dimensions',
    label: 'Entrance dimensions',
    desc: 'Approximate entrance width, height, and overall opening dimensions if drawings are not yet finalized.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-accent flex-shrink-0" stroke="currentColor" aria-hidden="true">
        <line x1="2" y1="4" x2="2" y2="16" strokeWidth="1.3" />
        <line x1="18" y1="4" x2="18" y2="16" strokeWidth="1.3" />
        <line x1="2" y1="10" x2="18" y2="10" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.6" />
        <line x1="2" y1="4" x2="6" y2="4" strokeWidth="1.2" />
        <line x1="14" y1="4" x2="18" y2="4" strokeWidth="1.2" />
        <line x1="2" y1="16" x2="6" y2="16" strokeWidth="1.2" />
        <line x1="14" y1="16" x2="18" y2="16" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    key: 'design-intent',
    label: 'Design intent or reference style',
    desc: 'Any reference images, sketches, mood boards, or preferred architectural style.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-accent flex-shrink-0" stroke="currentColor" aria-hidden="true">
        <rect x="2" y="3" width="16" height="14" rx="1" strokeWidth="1.3" />
        <path d="M 2 13 L 6 9 L 10 13 L 14 9 L 18 13" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="6.5" cy="7" r="1.5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    key: 'location-timeline',
    label: 'Project location and timeline',
    desc: 'City, site location, expected tender or construction timeline.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-accent flex-shrink-0" stroke="currentColor" aria-hidden="true">
        <rect x="2" y="4" width="16" height="14" rx="1" strokeWidth="1.3" />
        <line x1="6" y1="2" x2="6" y2="6" strokeWidth="1.2" />
        <line x1="14" y1="2" x2="14" y2="6" strokeWidth="1.2" />
        <line x1="2" y1="8" x2="18" y2="8" strokeWidth="1" />
        <line x1="6" y1="12" x2="10" y2="12" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="6" y1="15" x2="14" y2="15" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    key: 'scope',
    label: 'Scope required',
    desc: 'Manufacturing only, manufacturing and installation, or design development support.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-accent flex-shrink-0" stroke="currentColor" aria-hidden="true">
        <rect x="2" y="3.5" width="4" height="4" rx="0.8" strokeWidth="1.1" />
        <line x1="8" y1="5.5" x2="18" y2="5.5" strokeWidth="1" />
        <rect x="2" y="9" width="4" height="4" rx="0.8" strokeWidth="1.1" fill="currentColor" fillOpacity="0.18" />
        <line x1="8" y1="11" x2="18" y2="11" strokeWidth="1" />
        <rect x="2" y="14.5" width="4" height="4" rx="0.8" strokeWidth="1.1" />
        <line x1="8" y1="16.5" x2="18" y2="16.5" strokeWidth="1" strokeOpacity="0.45" />
      </svg>
    ),
  },
]

// ─── Diagram ────────────────────────────────────────────────────────────────

function Diagram() {
  return (
    <svg
      viewBox="0 0 400 265"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl mx-auto"
      aria-label="Simplified diagram of typical grand entrance components"
    >
      <rect width="400" height="265" fill="#F8F9FA" />

      {/* Ground line */}
      <line x1="18" y1="254" x2="382" y2="254" stroke="#071B3B" strokeWidth="2.5" />

      {/* Main entrance frame (1) */}
      <rect x="52" y="40" width="296" height="214" stroke="#071B3B" strokeWidth="1.3" fill="white" fillOpacity="0.5" />

      {/* Left column (2) */}
      <rect x="52" y="40" width="38" height="214" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.09" />
      <line x1="58" y1="40" x2="58" y2="254" stroke="#071B3B" strokeOpacity="0.15" strokeWidth="0.6" />
      <line x1="84" y1="40" x2="84" y2="254" stroke="#071B3B" strokeOpacity="0.15" strokeWidth="0.6" />

      {/* Right column (2) */}
      <rect x="310" y="40" width="38" height="214" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.09" />
      <line x1="316" y1="40" x2="316" y2="254" stroke="#071B3B" strokeOpacity="0.15" strokeWidth="0.6" />
      <line x1="342" y1="40" x2="342" y2="254" stroke="#071B3B" strokeOpacity="0.15" strokeWidth="0.6" />

      {/* Upper cornice (3) */}
      <rect x="38" y="16" width="324" height="26" stroke="#071B3B" strokeWidth="1.3" fill="#071B3B" fillOpacity="0.08" />
      <rect x="44" y="32" width="312" height="8" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.05" />

      {/* Left decorative panel — spandrel (4) */}
      <rect x="90" y="40" width="58" height="72" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.05" />
      <line x1="90" y1="56" x2="148" y2="56" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />
      <line x1="90" y1="74" x2="148" y2="74" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />
      <line x1="90" y1="92" x2="148" y2="92" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />

      {/* Right decorative panel — spandrel (4) */}
      <rect x="252" y="40" width="58" height="72" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.05" />
      <line x1="252" y1="56" x2="310" y2="56" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />
      <line x1="252" y1="74" x2="310" y2="74" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />
      <line x1="252" y1="92" x2="310" y2="92" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" />

      {/* Arch / canopy zone (5) — upward semicircle, center (200,112), r=52 */}
      <path d="M 148 112 A 52 52 0 0 1 252 112" stroke="#071B3B" strokeWidth="1.4" />
      <path d="M 148 112 A 52 52 0 0 1 252 112 Z" fill="#071B3B" fillOpacity="0.03" stroke="none" />
      {/* Keystone accent at arch apex */}
      <rect x="195" y="57" width="10" height="12" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.15" />

      {/* Door opening */}
      <rect x="155" y="112" width="90" height="142" stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.06" />
      <line x1="200" y1="112" x2="200" y2="254" stroke="#071B3B" strokeOpacity="0.18" strokeWidth="0.6" strokeDasharray="3 2" />
      <rect x="161" y="122" width="32" height="58" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" fill="none" />
      <rect x="207" y="122" width="32" height="58" stroke="#071B3B" strokeOpacity="0.25" strokeWidth="0.7" fill="none" />

      {/* Project-based customisation zone indicator (6) — dashed overlay */}
      <rect x="90" y="112" width="220" height="142" stroke="#D71920" strokeWidth="0.8" fill="none" strokeDasharray="5 3" strokeOpacity="0.35" />

      {/* Callout 1 — Main entrance frame, left mid */}
      <LeaderLine x1="52" y1="182" x2="22" y2="182" />
      <CalloutBadge n={1} cx={13} cy={182} r={11} size={10} />

      {/* Callout 2 — Side columns, right mid */}
      <LeaderLine x1="348" y1="147" x2="378" y2="147" />
      <CalloutBadge n={2} cx={387} cy={147} r={11} size={10} />

      {/* Callout 3 — Upper cornice, left top */}
      <LeaderLine x1="38" y1="28" x2="22" y2="28" />
      <CalloutBadge n={3} cx={13} cy={28} r={11} size={10} />

      {/* Callout 4 — Decorative panels, right upper */}
      <LeaderLine x1="310" y1="74" x2="378" y2="74" />
      <CalloutBadge n={4} cx={387} cy={74} r={11} size={10} />

      {/* Callout 5 — Arch zone, right upper */}
      <LeaderLine x1="238" y1="80" x2="378" y2="40" />
      <CalloutBadge n={5} cx={387} cy={32} r={11} size={10} />

      {/* Callout 6 — Customisation zone, left lower */}
      <LeaderLine x1="90" y1="218" x2="22" y2="218" />
      <CalloutBadge n={6} cx={13} cy={218} r={11} size={10} />
    </svg>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function GrandEntrancePackagePage() {
  return (
    <div className="bg-white">

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section
        className="relative bg-navy pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        {/* Architectural silhouette — decorative, right side, desktop only */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden pointer-events-none hidden lg:block" aria-hidden="true">
          <svg viewBox="0 0 400 500" fill="none" className="absolute right-[-40px] bottom-0 h-[110%] opacity-[0.055]">
            <rect x="60" y="30" width="280" height="470" stroke="white" strokeWidth="2.5" />
            <rect x="60" y="30" width="46" height="470" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.25" />
            <rect x="294" y="30" width="46" height="470" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.25" />
            <rect x="38" y="6" width="324" height="28" stroke="white" strokeWidth="1.8" />
            <rect x="44" y="24" width="312" height="10" stroke="white" strokeWidth="1" />
            <path d="M 150 130 A 50 50 0 0 1 250 130" stroke="white" strokeWidth="1.5" />
            <rect x="195" y="80" width="10" height="14" stroke="white" strokeWidth="1.2" />
            <rect x="160" y="130" width="80" height="370" stroke="white" strokeWidth="1.2" />
            <line x1="200" y1="130" x2="200" y2="500" stroke="white" strokeWidth="0.6" strokeDasharray="5 4" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-1.5 text-white/35 text-[11px] font-mono tracking-wider uppercase" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span>Packages</span>
            <span>/</span>
            <span className="text-white/60">Grand Entrance Package</span>
          </nav>

          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">
                Architectural Package
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Grand Entrance<br className="sm:hidden" /> Package
            </h1>

            <p className="text-white/75 text-[15px] sm:text-base leading-relaxed mb-3 max-w-xl">
              A premium GFRC / GRC entrance composition for villas, majlis, hospitality projects, palaces, and landmark façades.
            </p>

            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xl">
              Columns, frames, cornices, arches, and decorative elements — coordinated into a single package and developed around your project drawings and architectural direction.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/request-quotation"
                className="min-h-[54px] flex items-center justify-center px-9 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm tracking-wide"
              >
                Request Grand Entrance Quotation
              </Link>
              <Link
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[54px] flex items-center justify-center gap-2.5 px-9 py-3.5 border border-white/25 text-white font-semibold rounded-sm hover:bg-white/08 transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 text-[#25D366]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Share Drawings for Review
              </Link>
            </div>

            {/* Stat bar */}
            <div className="flex items-center gap-6 sm:gap-8 pt-8 border-t border-white/10">
              {[
                { value: '6', label: 'Package Elements' },
                { value: 'Custom', label: 'Every Project' },
                { value: 'KSA', label: 'Manufactured' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-white font-bold text-base sm:text-lg leading-none mb-1">{stat.value}</div>
                  <div className="text-white/35 text-[10px] tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Package Overview ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16 items-start">
            <div className="lg:col-span-3 mb-10 lg:mb-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-accent flex-shrink-0" />
                <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-5 leading-snug">
                A Complete Architectural Entrance Composition
              </h2>
              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-5">
                The Grand Entrance Package is designed to help developers, consultants, and private clients create a strong first impression using coordinated GFRC / GRC architectural elements. Each package can be adapted to the project scale, façade language, regional identity, and required finish.
              </p>
              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                Rather than specifying individual elements separately, the package provides a coordinated design approach — ensuring columns, frames, cornices, and panels work together as a unified architectural composition from the outset.
              </p>
            </div>

            {/* Quick facts panel */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 border border-gray-100 rounded-sm p-6 space-y-5">
                <p className="text-navy/40 text-[10px] font-mono tracking-widest uppercase">Package Summary</p>
                {[
                  { label: 'Package Type', value: 'Architectural Entrance' },
                  { label: 'Delivery Scope', value: 'GFRC / GRC Elements' },
                  { label: 'Design Approach', value: 'Project-Specific' },
                  { label: 'Customisation', value: 'Scale, Style & Finish' },
                  { label: 'Availability', value: 'Kingdom-wide Delivery' },
                ].map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-navy/50 text-xs">{fact.label}</span>
                    <span className="text-navy font-semibold text-xs text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What's Included ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Package Contents</span>
              <div className="w-6 h-px bg-accent flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">What&apos;s Included</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {INCLUDED_ITEMS.map((item, i) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-sm p-6 hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-5">
                  {item.icon}
                  <span className="text-navy/15 font-bold text-2xl leading-none">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-navy font-bold text-sm mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Best For ─────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16 items-start">
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-accent flex-shrink-0" />
                <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Applications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 leading-snug">
                Best Suited For
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                The Grand Entrance Package is appropriate for any project requiring a coordinated, high-quality GFRC / GRC entrance composition.
              </p>
            </div>

            <div className="lg:col-span-3">
              <ul className="space-y-1">
                {BEST_FOR.map((item) => (
                  <li key={item} className="flex items-center gap-4 py-3.5 border-b border-gray-100 last:border-0">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-navy text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Design Style Options ─────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Design Directions</span>
              <div className="w-6 h-px bg-accent flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Style Options</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              The following represent available design directions, not pre-approved or finalised styles. Each direction is refined according to the project&apos;s architectural intent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {STYLES.map((style) => (
              <div key={style.name} className="bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-md transition-shadow">
                {/* Pattern thumbnail placeholder */}
                <div className="w-full h-[72px] overflow-hidden">
                  {style.pattern}
                </div>
                <div className="p-5">
                  <div className="w-6 h-[2.5px] bg-accent mb-3" />
                  <h3 className="text-navy font-bold text-sm mb-2">{style.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{style.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Component Overview ───────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Package Components</span>
              <div className="w-6 h-px bg-accent flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Typical Grand Entrance Components</h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
              A simplified front-elevation overview of the key GFRC / GRC architectural elements included in the Grand Entrance Package.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-navy/10 p-2 sm:p-5 rounded-sm">
              <p className="text-[#071B3B]/30 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase mb-3">
                Grand Entrance Package — Component Overview
              </p>
              <DiagramEnlarger title="Grand Entrance Package">
                <Diagram />
              </DiagramEnlarger>
            </div>

            {/* Callout reference grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {CALLOUTS.map((c) => (
                <div key={c.n} className="flex items-start gap-3.5 py-3 border-b border-gray-100 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold leading-none">{c.n}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-navy font-semibold text-[13px] mb-1">{c.label}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Finish Options ───────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Surface Quality</span>
              <div className="w-6 h-px bg-accent flex-shrink-0" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Finish Options</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FINISHES.map((f) => (
                <div key={f.label} className="bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-md transition-shadow">
                  {/* Swatch area */}
                  <div className="w-full h-[72px] overflow-hidden">
                    {f.swatch}
                  </div>
                  <div className="p-5">
                    <h3 className="text-navy font-semibold text-[13px] mb-1.5">{f.label}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 text-center text-gray-400 text-xs leading-relaxed max-w-lg mx-auto">
              Finish selection is reviewed based on project requirements, approved samples, and intended architectural expression.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. RFQ Requirements ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-accent flex-shrink-0" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Quotation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              Information Required for Quotation
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              To prepare an accurate quotation, please share the following. Where drawings are not yet finalised, approximate information is sufficient.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {RFQ_ITEMS.map((item) => (
                <div key={item.key} className="flex items-start gap-3.5 p-4 bg-gray-50 border border-gray-100 rounded-sm">
                  <div className="mt-0.5 flex-shrink-0 text-accent">{item.icon}</div>
                  <div className="min-w-0">
                    <p className="text-navy text-sm font-semibold leading-snug mb-1">{item.label}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/request-quotation"
                className="min-h-[54px] inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm"
              >
                Request Grand Entrance Quotation
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[54px] inline-flex items-center justify-center gap-2.5 px-9 py-3.5 border border-navy/20 text-navy font-semibold rounded-sm hover:bg-navy/5 transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 text-[#25D366]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Share Drawings for Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ────────────────────────────────────────── */}
      <section
        className="bg-navy pt-20 sm:py-24"
        style={{ paddingBottom: 'calc(96px + env(safe-area-inset-bottom))' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Get Started</span>
            <div className="w-8 h-px bg-accent flex-shrink-0" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-5 max-w-2xl mx-auto leading-snug">
            Ready to Create a Landmark Entrance?
          </h2>

          <p className="text-white/65 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Share your drawings, dimensions, and design direction. Durraka&apos;s team will review your requirements and help define a suitable GFRC / GRC entrance package for your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/request-quotation"
              className="min-h-[56px] flex items-center justify-center px-10 py-3.5 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm sm:text-base"
            >
              Request Grand Entrance Quotation
            </Link>
            <Link
              href={SOCIAL_LINKS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[56px] flex items-center justify-center gap-2.5 px-10 py-3.5 border border-white/30 text-white font-semibold rounded-sm hover:bg-white/08 transition-colors text-sm sm:text-base"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Share Drawings for Review
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA — appears after 300px scroll, bottom sheet */}
      <StickyMobileCTA />

    </div>
  )
}
