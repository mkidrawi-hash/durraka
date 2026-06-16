import type { Metadata } from 'next'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { SystemPageLayout } from '@/components/systems/SystemPageLayout'

export const metadata: Metadata = {
  title: 'Cornices & Profiles — Durraka',
  description:
    'Architectural GFRC / GRC cornice and profile systems — custom bands, fascia elements, and stepped moulding profiles for façade composition across Saudi Arabia.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified cornice and profile system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      {/* Ground line */}
      <line x1="30" y1="278" x2="370" y2="278" stroke="#071B3B" strokeWidth="2.5" />

      {/* Building wall body */}
      <rect x="60" y="58" width="280" height="220" stroke="#071B3B" strokeWidth="1.4" fill="white" fillOpacity="0.7" />

      {/* === TOP CORNICE BAND === */}
      {/* Main cornice projection overhang */}
      <rect x="50" y="42" width="300" height="16" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.08" />
      {/* Cyma recta upper moulding */}
      <rect x="56" y="58" width="288" height="8" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.05" />
      {/* Fascia band below upper moulding */}
      <rect x="60" y="66" width="280" height="22" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.04" />
      {/* Bed moulding below fascia */}
      <rect x="57" y="88" width="286" height="6" stroke="#071B3B" strokeWidth="0.7" fill="#071B3B" fillOpacity="0.06" />

      {/* === MID BAND (string course) === */}
      <rect x="58" y="158" width="284" height="14" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.06" />
      {/* Smaller moulding above string course */}
      <rect x="60" y="154" width="280" height="4" stroke="#071B3B" strokeWidth="0.6" fill="#071B3B" fillOpacity="0.04" />
      {/* Smaller moulding below string course */}
      <rect x="60" y="172" width="280" height="4" stroke="#071B3B" strokeWidth="0.6" fill="#071B3B" fillOpacity="0.04" />

      {/* === SOFFIT / BASE BAND === */}
      <rect x="56" y="250" width="288" height="10" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.07" />
      <rect x="50" y="260" width="300" height="18" stroke="#071B3B" strokeWidth="1.2" fill="#071B3B" fillOpacity="0.09" />

      {/* === RETURN LINES (side edges showing profile depth) === */}
      <line x1="60" y1="42" x2="50" y2="42" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="60" y1="58" x2="56" y2="58" stroke="#071B3B" strokeWidth="0.8" />
      <line x1="60" y1="66" x2="60" y2="66" stroke="#071B3B" strokeWidth="0.6" />

      {/* Callout leaders */}
      {/* 1 — Cornice Profile Zone */}
      <LeaderLine x1="50" y1="50" x2="30" y2="50" />
      <CalloutBadge n={1} cx={21} cy={50} />
      {/* 2 — Fascia Band */}
      <LeaderLine x1="340" y1="77" x2="368" y2="77" />
      <CalloutBadge n={2} cx={377} cy={77} />
      {/* 3 — String Course Band */}
      <LeaderLine x1="340" y1="165" x2="368" y2="165" />
      <CalloutBadge n={3} cx={377} cy={165} />
      {/* 4 — Base Band & Soffit */}
      <LeaderLine x1="340" y1="255" x2="368" y2="255" />
      <CalloutBadge n={4} cx={377} cy={255} />
      {/* 5 — Finish Direction */}
      <LeaderLine x1="90" y1="200" x2="30" y2="230" />
      <CalloutBadge n={5} cx={21} cy={238} />
      {/* 6 — Project Coordination Review */}
      <LeaderLine x1="200" y1="42" x2="200" y2="28" />
      <LeaderLine x1="200" y1="28" x2="368" y2="28" />
      <CalloutBadge n={6} cx={377} cy={28} />
    </svg>
  )
}

export default function CornicesPage() {
  return (
    <SystemPageLayout data={{
      title: 'Cornices & Profiles',
      breadcrumb: 'Cornices & Profiles',
      subtitle: 'Refined horizontal expression.',
      heroDescription: 'Architectural GFRC / GRC cornice and profile systems — custom bands, fascia elements, string courses, and stepped moulding details for façade composition.',
      heroImage: '/images/projects/ornamental-facade-gfrc.png',
      heroImageAlt: 'Architectural GFRC cornice and profile elements',
      heroObjectPosition: 'center',
      whatTitle: 'What are GFRC / GRC Cornices & Profiles?',
      whatBody: 'GFRC / GRC cornices and profiles are the horizontal banding elements that give a façade its compositional structure — from the primary crown cornice to string courses, fascia bands, and base mouldings. Produced in glass fibre reinforced concrete, they can be manufactured to custom profiles, stepped sections, and continuous runs of any length, delivering precise architectural expression at any scale.',
      benefits: [
        { label: 'Custom Profile Sections', desc: 'Any cornice profile — from simple chamfers to complex stepped mouldings — can be produced to project drawings in GFRC / GRC.' },
        { label: 'Continuous Run Capability', desc: 'Long cornice runs and continuous fascia bands are achievable through a modular approach with coordinated joints.' },
        { label: 'Lightweight at Scale', desc: 'GFRC / GRC achieves large cornice projection and complex profiles at a fraction of the weight of solid concrete or stone.' },
        { label: 'Façade Composition', desc: 'Cornices, string courses, and base bands work together as a coordinated system to define the compositional language of a building.' },
        { label: 'Heritage & Contemporary', desc: 'Cornice systems are appropriate for both heritage-inspired architecture and contemporary façades requiring strong horizontal definition.' },
        { label: 'Durable Exterior Performance', desc: 'GFRC / GRC cornice elements perform reliably in exposed conditions including rooftop and high-level locations.' },
      ],
      Diagram,
      callouts: [
        { n: 1, label: 'Cornice Profile Zone', desc: 'The primary crown cornice element, defined by its stepped profile and projection.' },
        { n: 2, label: 'Fascia Band', desc: 'The main flat face of the cornice band, produced to project-specified dimensions.' },
        { n: 3, label: 'String Course Band', desc: 'Mid-level horizontal band elements providing compositional definition across the façade.' },
        { n: 4, label: 'Base Band & Soffit', desc: 'Base moulding and soffit elements completing the lower cornice composition.' },
        { n: 5, label: 'Finish Direction', desc: 'Surface finish applied to all cornice and profile elements within the system.' },
        { n: 6, label: 'Project Coordination Review', desc: 'Profile section, run lengths, and delivery scope confirmed through project review.' },
      ],
      applications: [
        'Commercial Façade Composition', 'Heritage-Inspired Architecture', 'Hospitality Developments',
        'Government & Institutional Buildings', 'Residential Buildings', 'Mixed-Use Developments',
        'Entrances & Feature Walls', 'Rooftop Crown Elements',
      ],
      designGuidance: [
        { label: 'Profile Section Direction', desc: 'Cornice profile geometry is established from architectural drawings or precedent references and agreed before production.' },
        { label: 'Run Length & Modularisation', desc: 'Long cornice runs are divided into panel modules with coordinated joint positions that align with the façade grid.' },
        { label: 'Projection & Return Expression', desc: 'Cornice projection, soffit depth, and end returns are resolved as part of the profile design and coordination.' },
        { label: 'String Course Integration', desc: 'Mid-level string courses and banding elements are designed in conjunction with the primary cornice to create a unified system.' },
        { label: 'Finish Selection Direction', desc: 'Finish direction is confirmed through design review and approved samples prior to production.' },
        { label: 'Project Coordination Requirements', desc: 'Profile confirmation, run schedules, and phasing requirements are agreed through project coordination before production commences.' },
      ],
      ctaTitle: 'Ready to Discuss Your Cornice & Profile Package?',
    }} />
  )
}
