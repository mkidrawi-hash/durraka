import type { Metadata } from 'next'
import { SystemBoardLayout } from '@/components/systems/SystemBoardLayout'
import type { SystemBoardData } from '@/components/systems/SystemBoardLayout'

export const metadata: Metadata = {
  title: 'Columns & Pillars — Durraka',
  description:
    'Architectural GFRC / GRC column and pillar systems — classical and contemporary column forms, capitals, shafts, and bases for building entrances and portico structures.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified column system diagram">
      <rect width="400" height="300" fill="#F8F9FA" />
      <line x1="30" y1="278" x2="370" y2="278" stroke="#071B3B" strokeWidth="2.5" />
      <rect x="48" y="32" width="304" height="18" stroke="#071B3B" strokeWidth="1.3" fill="white" fillOpacity="0.8" />
      <rect x="52" y="50" width="296" height="14" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.05" />
      <rect x="55" y="64" width="290" height="10" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.04" />
      {[90, 200, 310].map((cx: number, i: number) => {
        const hw = 18
        const capW = 32
        const baseW = 28
        return (
          <g key={i}>
            <path d={`M ${cx - capW} 74 L ${cx - hw} 92 L ${cx + hw} 92 L ${cx + capW} 74 Z`} stroke="#071B3B" strokeWidth="1.1" fill="white" fillOpacity="0.85" />
            <rect x={cx - capW} y={74} width={capW * 2} height={5} stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.06" />
            <rect x={cx - hw} y={92} width={hw * 2} height={146} stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.75" />
            {[-10, -5, 0, 5, 10].map((dx: number, j: number) => (
              <line key={j} x1={cx + dx} y1={94} x2={cx + dx} y2={236} stroke="#071B3B" strokeWidth="0.35" strokeOpacity="0.3" />
            ))}
            <path d={`M ${cx - hw} 238 L ${cx - baseW} 250 L ${cx + baseW} 250 L ${cx + hw} 238 Z`} stroke="#071B3B" strokeWidth="1" fill="white" fillOpacity="0.85" />
            <rect x={cx - baseW - 2} y={250} width={(baseW + 2) * 2} height={12} stroke="#071B3B" strokeWidth="1.1" fill="#071B3B" fillOpacity="0.07" />
          </g>
        )
      })}
      <rect x="44" y="262" width="312" height="8" stroke="#071B3B" strokeWidth="0.9" fill="#071B3B" fillOpacity="0.06" />
      <rect x="38" y="270" width="324" height="8" stroke="#071B3B" strokeWidth="1" fill="#071B3B" fillOpacity="0.07" />
      <line x1="58" y1="82" x2="30" y2="68" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="60" r="9" fill="#D71920" />
      <text x="21" y="64" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">1</text>
      <line x1="72" y1="160" x2="30" y2="160" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="21" cy="160" r="9" fill="#D71920" />
      <text x="21" y="164" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">2</text>
      <line x1="200" y1="40" x2="200" y2="22" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="200" cy="13" r="9" fill="#D71920" />
      <text x="200" y="17" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">3</text>
      <line x1="328" y1="244" x2="368" y2="232" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="224" r="9" fill="#D71920" />
      <text x="377" y="228" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">4</text>
      <line x1="218" y1="160" x2="368" y2="160" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="160" r="9" fill="#D71920" />
      <text x="377" y="164" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">5</text>
      <line x1="352" y1="40" x2="368" y2="40" stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2" />
      <circle cx="377" cy="40" r="9" fill="#D71920" />
      <text x="377" y="44" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="sans-serif">6</text>
    </svg>
  )
}

function CapitalDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="20" y="15" width="80" height="8" fill="white" fillOpacity="0.9" stroke="#071B3B" strokeWidth="0.9" />
      <polygon points="20,23 30,45 90,45 100,23" fill="white" fillOpacity="0.85" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="33" y="45" width="54" height="5" fill="#071B3B" fillOpacity="0.06" stroke="#071B3B" strokeWidth="0.6" />
    </svg>
  )
}

function ShaftSectionDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="40" y="10" width="40" height="80" fill="white" fillOpacity="0.8" stroke="#071B3B" strokeWidth="0.9" />
      <line x1="50" y1="12" x2="50" y2="88" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="60" y1="12" x2="60" y2="88" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="70" y1="12" x2="70" y2="88" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.3" />
    </svg>
  )
}

function BaseProfileDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="40" y="10" width="40" height="30" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.9" />
      <polygon points="40,40 30,55 90,55 80,40" fill="white" fillOpacity="0.85" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="22" y="55" width="76" height="15" fill="white" fillOpacity="0.9" stroke="#071B3B" strokeWidth="0.9" />
    </svg>
  )
}

function EntablatureDrawing() {
  return (
    <svg viewBox="0 0 120 100" className="w-full" fill="none" stroke="#071B3B" strokeWidth="0.9">
      <rect width="120" height="100" fill="#F8F9FA" />
      <rect x="10" y="10" width="100" height="16" fill="white" fillOpacity="0.9" stroke="#071B3B" strokeWidth="0.9" />
      <rect x="15" y="26" width="90" height="20" fill="#071B3B" fillOpacity="0.04" stroke="#071B3B" strokeWidth="0.7" />
      <rect x="12" y="46" width="96" height="14" fill="white" fillOpacity="0.7" stroke="#071B3B" strokeWidth="0.8" />
    </svg>
  )
}

const boardData: SystemBoardData = {
  title: 'Columns & Pillars',
  boardTitle: 'Columns & Capitals',
  boardTagline: 'Classical presence. Engineered lightweight.',
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
  boardComponents: ['Column capitals', 'Shaft segments', 'Base profiles', 'Plinths', 'Entablature elements', 'Pilaster panels'],
  detailCards: [
    { title: 'CAPITAL', Drawing: CapitalDrawing, callouts: ['Abacus', 'Capital Form', 'Neck'] },
    { title: 'SHAFT SECTION', Drawing: ShaftSectionDrawing, callouts: ['Shaft Diameter', 'Fluting', 'Column Height'] },
    { title: 'BASE PROFILE', Drawing: BaseProfileDrawing, callouts: ['Torus', 'Plinth', 'Base Width'] },
    { title: 'ENTABLATURE', Drawing: EntablatureDrawing, callouts: ['Cornice', 'Frieze', 'Architrave'] },
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
}

export default function ColumnsPage() {
  return <SystemBoardLayout data={boardData} />
}
