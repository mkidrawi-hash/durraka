import type { Metadata } from 'next'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { SystemPageLayout } from '@/components/systems/SystemPageLayout'

export const metadata: Metadata = {
  title: 'GFRC / GRC Façade Cladding System — Durraka',
  description:
    'High-performance GFRC / GRC façade cladding system designed for durable, expressive, and timeless architectural façades. Discover material benefits, finish directions, and design applications.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified façade cladding system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="40" y1="268" x2="340" y2="268" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="65" y="30" width="250" height="238" stroke="#071B3B" strokeWidth="1.6" fill="white" fillOpacity="0.8" />
      <rect x="56" y="20" width="268" height="12" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.07" />
      <line x1="65" y1="90" x2="315" y2="90" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="65" y1="150" x2="315" y2="150" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="65" y1="210" x2="315" y2="210" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="127" y1="32" x2="127" y2="267" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="189" y1="32" x2="189" y2="267" stroke="#071B3B" strokeWidth="0.7" />
      <line x1="251" y1="32" x2="251" y2="267" stroke="#071B3B" strokeWidth="0.7" />
      {[42, 102, 162, 222].map(y =>
        [73, 135, 197, 259].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="46" height="40" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
        ))
      )}
      <LeaderLine x1="94" y1="120" x2="40" y2="120" />
      <LeaderLine x1="40" y1="120" x2="31" y2="108" />
      <CalloutBadge n={1} cx={31} cy={99} />
      <LeaderLine x1="189" y1="55" x2="189" y2="11" />
      <CalloutBadge n={2} cx={189} cy={8} />
      <LeaderLine x1="218" y1="122" x2="358" y2="122" />
      <CalloutBadge n={3} cx={368} cy={122} />
      <LeaderLine x1="315" y1="170" x2="358" y2="155" />
      <CalloutBadge n={4} cx={368} cy={148} />
      <LeaderLine x1="94" y1="240" x2="40" y2="278" />
      <CalloutBadge n={5} cx={31} cy={285} />
      <LeaderLine x1="189" y1="30" x2="189" y2="20" />
      <LeaderLine x1="189" y1="20" x2="358" y2="20" />
      <CalloutBadge n={6} cx={368} cy={20} />
    </svg>
  )
}

export default function FacadeCladdingPage() {
  return (
    <SystemPageLayout data={{
      title: 'GFRC / GRC Façade Cladding System',
      breadcrumb: 'Façade Cladding',
      subtitle: 'Architectural freedom. Engineered confidence.',
      heroDescription: 'High-performance architectural cladding system designed for durable, expressive, and timeless façades.',
      heroImage: '/images/projects/grand-entrance-gfrc.png',
      heroImageAlt: 'GFRC façade cladding architectural panel detail',
      heroObjectPosition: 'center',
      whatTitle: 'What is GFRC / GRC?',
      whatBody: 'GFRC / GRC is a high-performance cement-based composite reinforced with alkali-resistant glass fibres. It enables lightweight architectural elements, custom profiles, textured surfaces, and durable façade expressions for modern, heritage, and project-specific developments.',
      benefits: [
        { label: 'Lightweight Architectural Elements', desc: 'GFRC / GRC achieves structural expression at a fraction of the weight of solid concrete, reducing loading on the primary structure.' },
        { label: 'Design Flexibility', desc: 'Custom profiles, compound curves, and complex geometries are achievable — enabling unique architectural language.' },
        { label: 'Durable Exterior Performance', desc: 'Alkali-resistant glass fibre reinforcement ensures long-term durability in demanding exterior environments.' },
        { label: 'Custom Profiles & Shapes', desc: 'Cornices, column casings, arched surrounds, and bespoke ornamental shapes can be cast to project drawings.' },
        { label: 'Texture & Colour Possibilities', desc: 'A wide range of surface finishes, textures, and colour directions can be realised within a single material system.' },
        { label: 'Modern & Heritage Applications', desc: 'Equally suited to contemporary façades and heritage-inspired architectural styles across different building typologies.' },
      ],
      Diagram,
      callouts: [
        { n: 1, label: 'Architectural Cladding Zone', desc: 'The primary surface area clad in GFRC / GRC panels.' },
        { n: 2, label: 'Panel Rhythm', desc: 'Horizontal and vertical joint pattern across the façade.' },
        { n: 3, label: 'Opening Expression', desc: 'Design treatment around windows and apertures.' },
        { n: 4, label: 'Edge & Corner Expression', desc: 'Architectural detail at building perimeters and returns.' },
        { n: 5, label: 'Finish & Texture Surface', desc: 'Surface finish direction applied across the cladding zone.' },
        { n: 6, label: 'Project Coordination Review', desc: 'Scope and design confirmed through project review.' },
      ],
      applications: [
        'Commercial Façades', 'Hospitality Developments', 'Residential Buildings',
        'Government & Institutional Projects', 'Heritage-Inspired Architecture',
        'Mixed-Use Developments', 'Entrances & Feature Walls', 'Decorative Façade Enhancements',
      ],
      designGuidance: [
        { label: 'Panel Layout Direction', desc: 'Panel sizing, joint alignment, and façade rhythm are established through design review in coordination with the project team.' },
        { label: 'Opening Surround Expression', desc: 'Window surrounds, arched openings, and aperture treatments are developed to complement the overall façade design intent.' },
        { label: 'Edge & Corner Expression', desc: 'Building perimeters, vertical returns, and corner details are resolved as part of the overall cladding design scope.' },
        { label: 'Profile & Cornice Integration', desc: 'Cornices, bands, and decorative profiles are produced as part of the GFRC / GRC package and coordinated with the façade layout.' },
        { label: 'Finish Selection Direction', desc: 'Finish direction is confirmed through design review, approved samples, and — where required — project-specific mockups.' },
        { label: 'Project Coordination Requirements', desc: 'Scope, design intent, and phasing requirements are confirmed through structured project coordination prior to production.' },
      ],
      ctaTitle: 'Ready to Discuss Your Façade Cladding Package?',
    }} />
  )
}
