import type { Metadata } from 'next'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { SystemPageLayout } from '@/components/systems/SystemPageLayout'

export const metadata: Metadata = {
  title: 'Cornices & Profiles — Durraka',
  description:
    'Architectural GFRC / GRC cornice and profile systems — roofline cornices, façade profile bands, opening surrounds, and shadow-line details for classical and contemporary architecture.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified cornice and profile system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      {/* Ground line */}
      <line x1="30" y1="278" x2="370" y2="278" stroke="#071B3B" strokeWidth="2.5" />

      {/* Building wall body */}
      <rect x="60" y="58" width="276" height="220" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.7" />

      {/* === ROOFLINE CORNICE === */}
      {/* Main cornice projection shelf */}
      <rect x="50" y="38" width="300" height="20" stroke="#071B3B" strokeWidth="1.3" fill="#071B3B" fillOpacity="0.08" />
      {/* Cyma moulding below shelf */}
      <rect x="55" y="58" width="290" height="7" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.06" />
      {/* Fascia / profile band */}
      <rect x="60" y="65" width="276" height="20" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.04" />
      {/* Bed moulding */}
      <rect x="56" y="85" width="284" height="5" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.07" />

      {/* === SHADOW LINE (cast by cornice projection) === */}
      <line x1="60" y1="58" x2="336" y2="58" stroke="#071B3B" strokeWidth="1.4" strokeOpacity="0.28" />

      {/* === OPENING SURROUNDS (two windows) === */}
      {/* Left window — outer surround frame */}
      <rect x="84" y="100" width="76" height="50" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.05" />
      {/* Left window — opening */}
      <rect x="90" y="106" width="64" height="38" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.13" />
      {/* Right window — outer surround frame */}
      <rect x="240" y="100" width="76" height="50" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.05" />
      {/* Right window — opening */}
      <rect x="246" y="106" width="64" height="38" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.13" />

      {/* === PROFILE BAND (mid string course) === */}
      <rect x="57" y="162" width="282" height="12" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.07" />
      <rect x="60" y="158" width="276" height="4" stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.04" />
      <rect x="60" y="174" width="276" height="4" stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.04" />

      {/* === EDGE EXPRESSION (right return showing profile depth) === */}
      <rect x="328" y="38" width="8" height="240" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.06" />
      <line x1="336" y1="58" x2="336" y2="278" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.2" />

      {/* === BASE PLINTH === */}
      <rect x="57" y="252" width="279" height="9" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.07" />
      <rect x="50" y="261" width="286" height="17" stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.09" />

      {/* Callout leaders */}
      {/* 1 — Roofline Cornice (left, top) */}
      <LeaderLine x1="50" y1="46" x2="30" y2="46" />
      <CalloutBadge n={1} cx={21} cy={46} />
      {/* 2 — Profile Band (right, mid) */}
      <LeaderLine x1="336" y1="168" x2="368" y2="168" />
      <CalloutBadge n={2} cx={377} cy={168} />
      {/* 3 — Opening Surround (left, mid-upper) */}
      <LeaderLine x1="84" y1="125" x2="30" y2="125" />
      <CalloutBadge n={3} cx={21} cy={125} />
      {/* 4 — Edge Expression (right, lower) */}
      <LeaderLine x1="336" y1="210" x2="368" y2="210" />
      <CalloutBadge n={4} cx={377} cy={210} />
      {/* 5 — Shadow Line (right, near top) */}
      <LeaderLine x1="270" y1="58" x2="368" y2="46" />
      <CalloutBadge n={5} cx={377} cy={38} />
      {/* 6 — Finish Direction (left, lower) */}
      <LeaderLine x1="120" y1="215" x2="30" y2="230" />
      <CalloutBadge n={6} cx={21} cy={238} />
    </svg>
  )
}

export default function CornicesPage() {
  return (
    <SystemPageLayout data={{
      title: 'Cornices & Profiles',
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
      applications: [
        'Roofline Crown Cornices', 'Heritage-Inspired Façades', 'Window & Opening Surrounds',
        'Hospitality Developments', 'Government & Institutional Buildings', 'String Course Bands',
        'Commercial Façade Composition', 'Residential Feature Elevations',
      ],
      finishesIntro: 'Cornices and profiles can be finished to match the architectural language of the façade, from clean modern surfaces to heritage-inspired stone-like textures.',
      designGuidance: [
        { label: 'Roofline Profile Direction', desc: 'Crown cornice profiles are established from architectural drawings or classical precedent references and agreed before production.' },
        { label: 'Opening Surround Expression', desc: 'Window and aperture surrounds are developed to complement the overall façade profile system and design intent.' },
        { label: 'Shadow Line & Projection Depth', desc: 'Cornice projection depth and profile stepping are design decisions that directly affect the shadow quality and visual character of the façade.' },
        { label: 'String Course & Band Integration', desc: 'Mid-level string courses and horizontal bands are developed in conjunction with the roofline cornice for a unified façade composition.' },
        { label: 'Edge & Corner Return', desc: 'Profile returns at building edges and corners are coordinated as part of the design package to maintain visual continuity.' },
        { label: 'Project Coordination Requirements', desc: 'Profile design confirmation, run layouts, and delivery phasing are agreed through project coordination before production commences.' },
      ],
      ctaTitle: 'Ready to Discuss Your Cornice & Profile Package?',
    }} />
  )
}
