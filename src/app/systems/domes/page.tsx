import type { Metadata } from 'next'
import { SystemEnhancedLayout, type SystemEnhancedData } from '@/components/systems/SystemEnhancedLayout'

export const metadata: Metadata = {
  title: 'Domes & Vaults System — GFRC/GRC Architectural Domes',
  description:
    'Lightweight GFRC/GRC dome and vault elements for heritage-inspired, institutional, hospitality, and landmark architectural projects. Custom geometry and curvature. Manufactured in Saudi Arabia.',
}

function SampleDrawing() {
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

function SystemContext() {
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

const data: SystemEnhancedData = {
  title: 'Domes & Vaults System',
  breadcrumb: 'Domes & Vaults',
  heroDescription:
    'GFRC/GRC dome and vault elements for heritage-inspired, institutional, hospitality, and landmark architectural projects — custom geometry and curvature with controlled surface finish.',
  heroImage: '/images/projects/dome-vault-gfrc.png',
  heroImageAlt: 'GFRC/GRC dome and vault architectural elements — heritage project dome expression',
  heroObjectPosition: 'center',

  photoTags: [
    { n: 1, label: 'Dome Geometry', xPct: 50, yPct: 18 },
    { n: 2, label: 'Base Transition Zone', xPct: 50, yPct: 62 },
    { n: 3, label: 'Curved GFRC/GRC Surface', xPct: 28, yPct: 38 },
    { n: 4, label: 'Decorative Band / Profile', xPct: 72, yPct: 48 },
    { n: 5, label: 'Finish Direction', xPct: 35, yPct: 25 },
    { n: 6, label: 'Project Coordination Review', xPct: 65, yPct: 75 },
  ],

  quickRead: [
    { text: 'Lightweight architectural dome expression' },
    { text: 'Custom geometry and curvature' },
    { text: 'Suitable for landmark and heritage projects' },
    { text: 'Project-specific geometry coordination' },
  ],

  systemIntent:
    'Designed to create curved architectural expressions with controlled geometry, surface finish, decorative bands, and project-specific proportions — from small decorative domes to large-scale architectural crowns.',

  commonApplications:
    'Mosques, villas, hospitality projects, cultural buildings, government buildings, and heritage developments.',

  keyDesignConsiderations: [
    'Dome diameter and proportion',
    'Base transition and surrounding profile',
    'Curved surface finish direction',
    'Decorative band coordination',
    'Visual alignment with the building mass',
    'Project-specific geometry review',
  ],

  importantNote:
    'This page provides concept and coordination guidance only. Final dome segmentation, support coordination, and engineering details are developed through approved project submissions.',

  infoRequiredCustom: [
    'Dome diameter or approximate size',
    'Architectural drawings and elevations',
    'Reference style or design intent',
    'Preferred finish and colour direction',
    'Project location',
    'Access and logistics considerations',
    'Consultant / client requirements',
    'Project timeline',
  ],

  designGuidance: [
    { label: 'Dome Diameter & Proportion', desc: 'Overall size, height-to-diameter ratio, and visual mass.' },
    { label: 'Base Transition Profile', desc: 'Transition detail between dome and drum or building body.' },
    { label: 'Rib & Band Expression', desc: 'Decorative rib lines and horizontal band coordination.' },
    { label: 'Curved Surface Finish', desc: 'Finish direction on curved surfaces for uniformity.' },
    { label: 'Lantern Coordination', desc: 'Lantern element relationship to dome crown.' },
    { label: 'Visual Alignment', desc: 'Alignment with minarets, towers, or architectural composition.' },
  ],

  ctaTitle: 'Ready to Discuss Your Dome or Vault Project?',
}

export default function DomesPage() {
  return <SystemEnhancedLayout data={data} sampleDrawing={<SampleDrawing />} systemContext={<SystemContext />} />
}
