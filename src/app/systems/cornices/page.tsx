import type { Metadata } from 'next'
import { SystemBoardLayout } from '@/components/systems/SystemBoardLayout'
import type { SystemBoardData } from '@/components/systems/SystemBoardLayout'

export const metadata: Metadata = {
  title: 'Cornices & Profiles — Durraka',
  description:
    'Architectural GFRC / GRC cornice and profile systems — roofline cornices, façade profile bands, opening surrounds, and shadow-line details for classical and contemporary architecture.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified cornice and profile system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="30" y1="278" x2="370" y2="278" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="60" y="58" width="276" height="220" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.7" />
      <rect x="50" y="38" width="300" height="20" stroke="#071B3B" strokeWidth="1.3" fill="#071B3B" fillOpacity="0.08" />
      <rect x="55" y="58" width="290" height="7" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.06" />
      <rect x="60" y="65" width="276" height="20" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.04" />
      <rect x="56" y="85" width="284" height="5" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.07" />
      <line x1="60" y1="58" x2="336" y2="58" stroke="#071B3B" strokeWidth="1.4" strokeOpacity="0.28" />
      <rect x="84" y="100" width="76" height="50" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.05" />
      <rect x="90" y="106" width="64" height="38" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.13" />
      <rect x="240" y="100" width="76" height="50" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.05" />
      <rect x="246" y="106" width="64" height="38" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.13" />
      <rect x="57" y="162" width="282" height="12" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.07" />
      <rect x="60" y="158" width="276" height="4" stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.04" />
      <rect x="60" y="174" width="276" height="4" stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.04" />
      <rect x="328" y="38" width="8" height="240" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.06" />
      <rect x="57" y="252" width="279" height="9" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.07" />
      <rect x="50" y="261" width="286" height="17" stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.09" />
      <line x1="50" y1="46" x2="30" y2="46" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="46" r="9" fill="#D71920" />
      <text x="21" y="50" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">1</text>
      <line x1="336" y1="168" x2="368" y2="168" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="168" r="9" fill="#D71920" />
      <text x="377" y="172" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">2</text>
      <line x1="84" y1="125" x2="30" y2="125" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="125" r="9" fill="#D71920" />
      <text x="21" y="129" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">3</text>
      <line x1="336" y1="210" x2="368" y2="210" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="210" r="9" fill="#D71920" />
      <text x="377" y="214" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">4</text>
      <line x1="270" y1="58" x2="368" y2="46" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="38" r="9" fill="#D71920" />
      <text x="377" y="42" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">5</text>
      <line x1="120" y1="215" x2="30" y2="230" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="238" r="9" fill="#D71920" />
      <text x="21" y="242" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">6</text>
    </svg>
  )
}

function CrownCorniceDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="50" y="20" width="40" height="70" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="20" y="20" width="30" height="10" fill="white" fillOpacity="0.9" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="25" y="30" width="25" height="7" fill="#071B3B" fillOpacity="0.06" stroke="#071B3B" strokeWidth="0.6" />
      <rect x="30" y="37" width="20" height="5" fill="#071B3B" fillOpacity="0.05" stroke="#071B3B" strokeWidth="0.6" />
    </svg>
  )
}

function StringCourseDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="20" y="10" width="80" height="80" fill="white" fillOpacity="0.5" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="18" y="40" width="84" height="14" fill="#071B3B" fillOpacity="0.08" stroke="#071B3B" strokeWidth="0.8" />
    </svg>
  )
}

function OpeningSurroundDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="10" width="100" height="80" fill="white" fillOpacity="0.5" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="20" y="20" width="80" height="60" fill="none" stroke="#071B3B" strokeWidth="1.2" />
      <rect x="30" y="30" width="60" height="40" fill="#071B3B" fillOpacity="0.1" stroke="#071B3B" strokeWidth="0.7" />
    </svg>
  )
}

function BaseMouldingDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="30" y="10" width="60" height="70" fill="white" fillOpacity="0.5" stroke="#071B3B" strokeWidth="0.9" />
      <polygon points="30,80 20,80 20,90 110,90 110,80 90,80 90,10 30,10" stroke="#071B3B" strokeWidth="1" fill="white" fillOpacity="0.85" />
    </svg>
  )
}

const boardData: SystemBoardData = {
  title: 'Cornices & Profiles',
  boardTitle: 'Cornices & Profiles',
  boardTagline: 'Shadow line. Profile depth. Façade character.',
  breadcrumb: 'Cornices & Profiles',
  subtitle: 'Shadow line. Profile depth. Façade character.',
  heroDescription: 'GFRC / GRC cornice and profile systems — roofline cornices, façade bands, opening surrounds, and edge expressions produced to custom profiles for classical and contemporary architecture.',
  heroImage: '/images/projects/grand-entrance-gfrc.png',
  heroImageAlt: 'Architectural GFRC cornice and profile façade elements',
  heroObjectPosition: 'center',
  whatTitle: 'What are GFRC / GRC Cornices & Profiles?',
  whatBody: 'GFRC / GRC cornices and architectural profiles are lightweight cement-based elements used to define façade lines, frame openings, enhance rooflines, and create classical or contemporary architectural expression. They allow architects to achieve custom shapes, shadow lines, textures, and heritage-inspired details — from roofline crowns and string courses to window surrounds, edge returns, and base mouldings.',
  benefits: [
    { label: 'Roofline Cornice Expression', desc: 'Primary crown cornices with projecting shelves, cyma mouldings, and shadow-line details are producible in any custom profile.' },
    { label: 'Opening Surround Framing', desc: 'Window and door surrounds, arched heads, and aperture frames are produced as coordinated profile elements to complement the façade composition.' },
    { label: 'Shadow Line & Profile Depth', desc: 'Deep-projecting profiles and stepped mouldings create strong shadow lines that define the visual character of the façade at every scale.' },
    { label: 'Classical & Contemporary Language', desc: 'From heritage-inspired classical orders to clean modern bands and chamfered profiles, GFRC / GRC is suited to both architectural languages.' },
    { label: 'Continuous Run Capability', desc: 'Long cornice runs, continuous fascia bands, and string courses are achievable through coordinated panel modules with aligned joints.' },
    { label: 'Durable in Exposed Locations', desc: 'GFRC / GRC cornice elements perform reliably at rooftop and high-level façade positions in demanding exterior conditions.' },
  ],
  Diagram,
  callouts: [
    { n: 1, label: 'Roofline Cornice', desc: 'The primary crown element at the top of the façade — typically a projecting shelf with stepped moulding profile.' },
    { n: 2, label: 'Profile Band', desc: 'Mid-level horizontal band or string course providing compositional definition across the façade face.' },
    { n: 3, label: 'Opening Surround', desc: 'Profile frame enclosing windows and apertures — produced as a coordinated element within the façade system.' },
    { n: 4, label: 'Edge Expression', desc: 'Cornice and profile return at the building edge, maintaining visual continuity at corners and perimeters.' },
    { n: 5, label: 'Shadow Line', desc: 'The horizontal shadow cast by the cornice projection — a key element of façade depth and architectural expression.' },
    { n: 6, label: 'Finish Direction', desc: 'Surface finish applied consistently across cornice, band, and surround elements to complement the building language.' },
  ],
  boardComponents: ['Roofline cornices', 'Profile bands', 'Opening surrounds', 'Edge returns', 'Base mouldings', 'Shadow-line elements'],
  detailCards: [
    { title: 'CROWN CORNICE', Drawing: CrownCorniceDrawing, callouts: ['Projection', 'Cyma', 'Shadow'] },
    { title: 'STRING COURSE', Drawing: StringCourseDrawing, callouts: ['Band Height', 'Relief Depth', 'Wall Face'] },
    { title: 'OPENING SURROUND', Drawing: OpeningSurroundDrawing, callouts: ['Head Profile', 'Jamb Width', 'Sill'] },
    { title: 'BASE MOULDING', Drawing: BaseMouldingDrawing, callouts: ['Plinth', 'Base Profile', 'Ground Line'] },
  ],
  applications: [
    'Roofline Crown Cornices', 'Heritage-Inspired Façades', 'Window & Opening Surrounds',
    'Hospitality Developments', 'Government & Institutional Buildings', 'String Course Bands',
    'Commercial Façade Composition', 'Residential Feature Elevations',
  ],
  designGuidance: [
    { label: 'Roofline Profile Direction', desc: 'Crown cornice profiles are established from architectural drawings or classical precedent references and agreed before production.' },
    { label: 'Opening Surround Expression', desc: 'Window and aperture surrounds are developed to complement the overall façade profile system and design intent.' },
    { label: 'Shadow Line & Projection Depth', desc: 'Cornice projection depth and profile stepping are design decisions that directly affect the shadow quality and visual character of the façade.' },
    { label: 'String Course & Band Integration', desc: 'Mid-level string courses and horizontal bands are developed in conjunction with the roofline cornice for a unified façade composition.' },
    { label: 'Edge & Corner Return', desc: 'Profile returns at building edges and corners are coordinated as part of the design package to maintain visual continuity.' },
    { label: 'Project Coordination Requirements', desc: 'Profile design confirmation, run layouts, and delivery phasing are agreed through project coordination before production commences.' },
  ],
  ctaTitle: 'Ready to Discuss Your Cornice & Profile Package?',
}

export default function CornicesPage() {
  return <SystemBoardLayout data={boardData} />
}
