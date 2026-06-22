import type { Metadata } from 'next'
import { SystemBoardLayout } from '@/components/systems/SystemBoardLayout'
import type { SystemBoardData } from '@/components/systems/SystemBoardLayout'

export const metadata: Metadata = {
  title: 'GFRC / GRC Façade Cladding System — Durraka',
  description: 'High-performance GFRC / GRC façade cladding system designed for durable, expressive, and timeless architectural façades. Discover material benefits, finish directions, and design applications.',
}

function FacadeDiagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto">
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="40" y1="278" x2="360" y2="278" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="60" y="30" width="280" height="248" stroke="#071B3B" strokeWidth="1.5" fill="white" fillOpacity="0.6" />
      <line x1="60" y1="80" x2="340" y2="80" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="60" y1="130" x2="340" y2="130" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="60" y1="180" x2="340" y2="180" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="60" y1="230" x2="340" y2="230" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="150" y1="30" x2="150" y2="278" stroke="#071B3B" strokeWidth="0.7" strokeDasharray="4 3" />
      <line x1="250" y1="30" x2="250" y2="278" stroke="#071B3B" strokeWidth="0.7" strokeDasharray="4 3" />
      <rect x="58" y="30" width="6" height="248" fill="#D71920" fillOpacity="0.15" />
      <rect x="50" y="18" width="300" height="14" stroke="#071B3B" strokeWidth="1.3" fill="#071B3B" fillOpacity="0.08" />
      <line x1="58" y1="55" x2="30" y2="55" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="55" r="9" fill="#D71920" />
      <text x="21" y="59" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">1</text>
      <line x1="200" y1="30" x2="200" y2="12" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="200" cy="9" r="9" fill="#D71920" />
      <text x="200" y="13" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">2</text>
      <line x1="150" y1="155" x2="30" y2="155" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="155" r="9" fill="#D71920" />
      <text x="21" y="159" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">3</text>
      <line x1="340" y1="105" x2="370" y2="105" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="379" cy="105" r="9" fill="#D71920" />
      <text x="379" y="109" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">4</text>
      <line x1="250" y1="205" x2="370" y2="205" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="379" cy="205" r="9" fill="#D71920" />
      <text x="379" y="209" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">5</text>
      <line x1="340" y1="260" x2="370" y2="260" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="379" cy="260" r="9" fill="#D71920" />
      <text x="379" y="264" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">6</text>
    </svg>
  )
}

function PanelSectionDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="30" y="10" width="60" height="80" fill="white" fillOpacity="0.8" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="28" y="10" width="6" height="80" fill="#071B3B" fillOpacity="0.08" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="30" y1="35" x2="90" y2="35" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="30" y1="60" x2="90" y2="60" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="22" y1="30" x2="10" y2="30" stroke="#071B3B" strokeWidth="0.7" strokeDasharray="2 1.5" />
      <circle cx="6" cy="30" r="4" fill="#D71920" />
    </svg>
  )
}

function CorniceProfileDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="50" y="20" width="40" height="70" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="20" y="20" width="30" height="12" fill="white" fillOpacity="0.9" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="25" y="32" width="25" height="8" fill="#071B3B" fillOpacity="0.06" stroke="#071B3B" strokeWidth="0.6" />
      <line x1="20" y1="32" x2="90" y2="32" stroke="#071B3B" strokeWidth="0.7" strokeDasharray="3 2" strokeOpacity="0.3" />
    </svg>
  )
}

function WindowSurroundDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="10" width="100" height="80" fill="white" fillOpacity="0.5" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="20" y="20" width="80" height="60" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="30" y="30" width="60" height="40" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.7" />
    </svg>
  )
}

function PanelRhythmDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="10" width="50" height="40" fill="white" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="65" y="10" width="50" height="40" fill="white" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="10" y="55" width="50" height="40" fill="white" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="65" y="55" width="50" height="40" fill="white" stroke="#071B3B" strokeWidth="0.9" />
    </svg>
  )
}

const boardData: SystemBoardData = {
  title: 'GFRC / GRC Façade Cladding System',
  boardTitle: 'Façade Cladding',
  boardTagline: 'A contemporary GFRC/GRC facade system',
  breadcrumb: 'Façade Cladding',
  subtitle: 'Architectural freedom. Engineered confidence.',
  heroDescription: 'High-performance architectural cladding system designed for durable, expressive, and timeless façades.',
  heroImage: '/images/projects/architectural-cladding-gfrc.png',
  heroImageAlt: 'GFRC architectural cladding facade',
  heroObjectPosition: 'center',
  whatTitle: 'What is a GFRC / GRC Façade Cladding System?',
  whatBody: 'GFRC / GRC is a high-performance cement-based composite reinforced with alkali-resistant glass fibres. It enables lightweight architectural cladding panels, custom profiles, and a wide range of surface finishes — combining visual impact with structural confidence for modern and heritage façades across Saudi Arabia.',
  benefits: [
    { label: 'Lightweight Architectural Elements', desc: 'Reduced structural loading compared to solid concrete.' },
    { label: 'Design Flexibility', desc: 'Custom profiles, compound curves, and complex geometries.' },
    { label: 'Durable Exterior Performance', desc: 'Alkali-resistant glass fibre ensures long-term durability.' },
    { label: 'Heritage & Modern Styles', desc: 'Suited to contemporary and heritage-inspired architectural contexts.' },
    { label: 'Wide Finish Range', desc: 'Custom textures, surface finishes, and colour directions available.' },
    { label: 'Large-Scale Capability', desc: 'Efficient modular production for large façade areas.' },
  ],
  Diagram: FacadeDiagram,
  callouts: [
    { n: 1, label: 'Architectural Cladding Zone', desc: 'Primary surface area clad in GFRC / GRC panels.' },
    { n: 2, label: 'Panel Rhythm', desc: 'Horizontal and vertical joint pattern across the façade.' },
    { n: 3, label: 'Opening Expression', desc: 'Design treatment around windows and apertures.' },
    { n: 4, label: 'Edge & Corner Expression', desc: 'Architectural detail at building perimeters and returns.' },
    { n: 5, label: 'Finish & Texture Surface', desc: 'Surface finish direction applied across the cladding zone.' },
    { n: 6, label: 'Project Coordination Review', desc: 'Scope and design confirmed through project review.' },
  ],
  boardComponents: ['Façade cladding panels', 'Cornice bands & profiles', 'Window surrounds', 'Edge & corner elements', 'Decorative vertical fins', 'Custom profiles'],
  detailCards: [
    { title: 'PANEL SECTION', Drawing: PanelSectionDrawing, callouts: ['GFRC Cladding Panel', 'Wall Substrate', 'Panel Joint'] },
    { title: 'CORNICE PROFILE', Drawing: CorniceProfileDrawing, callouts: ['Projection Shelf', 'Profile Depth', 'Shadow Line'] },
    { title: 'WINDOW SURROUND', Drawing: WindowSurroundDrawing, callouts: ['Surround Frame', 'Opening Reveal', 'Sill Profile'] },
    { title: 'PANEL RHYTHM', Drawing: PanelRhythmDrawing, callouts: ['Panel Module', 'Vertical Joint', 'Horizontal Band'] },
  ],
  applications: ['Commercial Façades', 'Hospitality Developments', 'Residential Buildings', 'Government & Institutional Projects', 'Heritage-Inspired Architecture', 'Mixed-Use Developments', 'Entrances & Feature Walls', 'Decorative Façade Enhancements'],
  designGuidance: [
    { label: 'Panel Layout Rhythm', desc: 'Module sizing, joint spacing, and horizontal banding.' },
    { label: 'Cornice Profile Direction', desc: 'Profile selection, depth, and positioning.' },
    { label: 'Window Surround Depth', desc: 'Reveal depth, surround width, and shadow line.' },
    { label: 'Corner & Edge Treatment', desc: 'Quoin details, return panels, and corner expressions.' },
    { label: 'Surface Finish Selection', desc: 'Guidance on finish options for context and conditions.' },
    { label: 'Coordination Requirements', desc: 'Panel joint sizing and weathering considerations.' },
  ],
  ctaTitle: 'Ready to Discuss Your Façade Cladding Package?',
}

export default function FacadeCladdingPage() {
  return <SystemBoardLayout data={boardData} />
}
