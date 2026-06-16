import type { Metadata } from 'next'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { SystemPageLayout } from '@/components/systems/SystemPageLayout'

export const metadata: Metadata = {
  title: 'Columns & Pillars — Durraka',
  description:
    'Architectural GFRC / GRC column and pillar systems — classical and contemporary column forms, capitals, shafts, and bases for building entrances and portico structures.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified column system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      {/* Ground line */}
      <line x1="30" y1="278" x2="370" y2="278" stroke="#071B3B" strokeWidth="2.5" />

      {/* === ENTABLATURE (top beam) === */}
      <rect x="48" y="32" width="304" height="18" stroke="#071B3B" strokeWidth="1.3" fill="white" fillOpacity="0.8" />
      {/* Frieze */}
      <rect x="52" y="50" width="296" height="14" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      {/* Architrave */}
      <rect x="55" y="64" width="290" height="10" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.04" />

      {/* === THREE COLUMNS === */}
      {[90, 200, 310].map((cx, i) => {
        const hw = 18 // half shaft width
        const capW = 32 // half capital width
        const baseW = 28 // half base width
        return (
          <g key={i}>
            {/* Capital */}
            <path
              d={`M ${cx - capW} 74 L ${cx - hw} 92 L ${cx + hw} 92 L ${cx + capW} 74 Z`}
              stroke="#071B3B" strokeWidth="1.1" fill="white" fillOpacity="0.85"
            />
            {/* Capital abacus (top slab) */}
            <rect x={cx - capW} y={74} width={capW * 2} height={5} stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.06" />
            {/* Shaft */}
            <rect x={cx - hw} y={92} width={hw * 2} height={146} stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.75" />
            {/* Shaft fluting — 5 subtle vertical lines */}
            {[-10, -5, 0, 5, 10].map((dx, j) => (
              <line key={j} x1={cx + dx} y1={94} x2={cx + dx} y2={236} stroke="#071B3B" strokeWidth="0.35" strokeOpacity="0.3" />
            ))}
            {/* Base torus */}
            <path
              d={`M ${cx - hw} 238 L ${cx - baseW} 250 L ${cx + baseW} 250 L ${cx + hw} 238 Z`}
              stroke="#071B3B" strokeWidth="1" fill="white" fillOpacity="0.85"
            />
            {/* Plinth */}
            <rect x={cx - baseW - 2} y={250} width={(baseW + 2) * 2} height={12} stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.07" />
          </g>
        )
      })}

      {/* Stylobate (stepped platform) */}
      <rect x="44" y="262" width="312" height="8" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.06" />
      <rect x="38" y="270" width="324" height="8" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.07" />

      {/* Callout leaders */}
      {/* 1 — Capital Zone */}
      <LeaderLine x1="58" y1="82" x2="30" y2="68" />
      <CalloutBadge n={1} cx={21} cy={60} />
      {/* 2 — Shaft Expression */}
      <LeaderLine x1="72" y1="160" x2="30" y2="160" />
      <CalloutBadge n={2} cx={21} cy={160} />
      {/* 3 — Entablature */}
      <LeaderLine x1="200" y1="40" x2="200" y2="22" />
      <CalloutBadge n={3} cx={200} cy={13} />
      {/* 4 — Base Profile */}
      <LeaderLine x1="328" y1="244" x2="368" y2="232" />
      <CalloutBadge n={4} cx={377} cy={224} />
      {/* 5 — Finish Direction */}
      <LeaderLine x1="218" y1="160" x2="368" y2="160" />
      <CalloutBadge n={5} cx={377} cy={160} />
      {/* 6 — Project Coordination Review */}
      <LeaderLine x1="352" y1="40" x2="368" y2="40" />
      <CalloutBadge n={6} cx={377} cy={40} />
    </svg>
  )
}

export default function ColumnsPage() {
  return (
    <SystemPageLayout data={{
      title: 'Columns & Pillars',
      breadcrumb: 'Columns & Pillars',
      subtitle: 'Classical presence. Engineered lightweight.',
      heroDescription: 'Architectural GFRC / GRC column and pillar systems — capital, shaft, and base elements produced to custom profiles for building entrances, porticos, and colonnades.',
      heroImage: '/images/projects/column-portico-gfrc.png',
      heroImageAlt: 'Architectural GFRC column portico elements',
      heroObjectPosition: 'center',
      whatTitle: 'What are GFRC / GRC Columns & Pillars?',
      whatBody: 'GFRC / GRC column and pillar systems deliver the visual presence of classical or contemporary column forms at a fraction of the weight of solid stone or precast concrete. Capital, shaft, and base elements are produced as coordinated system components to project-specific profiles — from simple round pillars and square piers to full classical column orders — and installed as architectural casing elements.',
      benefits: [
        { label: 'Classical & Contemporary Forms', desc: 'Column profiles range from classical orders (Doric, Ionic, Corinthian) to contemporary round pillars and square piers, all producible in GFRC / GRC.' },
        { label: 'Lightweight Column Casing', desc: 'GFRC / GRC column casings achieve the visual mass of traditional columns at a fraction of the structural weight.' },
        { label: 'Custom Profile Design', desc: 'Capital, shaft, and base elements are produced to project-specific drawings and profile references.' },
        { label: 'Coordinated System', desc: 'Capital, shaft, and base elements are designed as a coordinated system to ensure consistent visual integration.' },
        { label: 'Large-Scale Capability', desc: 'Large diameter columns and tall shaft runs are achievable through a segmented production and delivery approach.' },
        { label: 'Durable in Exterior Conditions', desc: 'GFRC / GRC column systems perform reliably in exposed exterior and portico environments across the Kingdom.' },
      ],
      Diagram,
      callouts: [
        { n: 1, label: 'Capital Zone', desc: 'The capital element at the column head, produced to the specified order or profile.' },
        { n: 2, label: 'Shaft Expression', desc: 'The column shaft — plain, fluted, or banded — produced as a coordinated casing element.' },
        { n: 3, label: 'Entablature', desc: 'The beam and frieze element spanning across column heads, produced as a coordinated component.' },
        { n: 4, label: 'Base Profile', desc: 'Base and plinth elements completing the column assembly at the lower transition.' },
        { n: 5, label: 'Finish Direction', desc: 'Surface finish applied across all column system components.' },
        { n: 6, label: 'Project Coordination Review', desc: 'Profile, height, shaft diameter, and delivery scope confirmed through project review.' },
      ],
      applications: [
        'Building Entrances & Porticos', 'Colonnades & Arcades', 'Heritage-Inspired Architecture',
        'Hospitality Lobbies & Exterior', 'Government & Institutional Buildings', 'Residential Feature Entrances',
        'Commercial Development Frontages', 'Cultural & Civic Projects',
      ],
      designGuidance: [
        { label: 'Column Profile Direction', desc: 'Column order, profile geometry, and detailing are established from architectural drawings or precedent references.' },
        { label: 'Capital & Base Coordination', desc: 'Capital and base profiles are developed in coordination with the shaft diameter and overall column height.' },
        { label: 'Shaft Segmentation', desc: 'Tall column shafts are divided into coordinated segments with joint positions resolved as part of the design package.' },
        { label: 'Entablature Integration', desc: 'Entablature, frieze, and architrave elements are developed in conjunction with the column system for a unified composition.' },
        { label: 'Finish Selection Direction', desc: 'Finish direction for capital, shaft, and base elements is confirmed through design review and approved samples.' },
        { label: 'Project Coordination Requirements', desc: 'Profile confirmation, delivery scheduling, and phasing requirements are agreed through project coordination before production commences.' },
      ],
      ctaTitle: 'Ready to Discuss Your Column & Pillar Package?',
    }} />
  )
}
