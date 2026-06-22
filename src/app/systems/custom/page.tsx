import type { Metadata } from 'next'
import { CalloutBadge, LeaderLine } from '@/components/systems/diagram'
import { SystemPageLayout } from '@/components/systems/SystemPageLayout'

export const metadata: Metadata = {
  title: 'Custom Decorative Elements — Durraka',
  description:
    'Bespoke GFRC / GRC decorative elements — ornamental panels, medallions, friezes, and custom architectural details produced to project drawings for any building type.',
}

function Diagram() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto" aria-label="Simplified custom decorative elements diagram">
      <rect width="400" height="300" fill="#F8F9FA" />

      {/* Outer panel border */}
      <rect x="50" y="22" width="300" height="256" stroke="#071B3B" strokeWidth="1.5" fill="white" fillOpacity="0.7" rx="1" />

      {/* Outer decorative border band */}
      <rect x="62" y="34" width="276" height="232" stroke="#071B3B" strokeWidth="0.9" fill="none" />
      {/* Inner decorative border band */}
      <rect x="72" y="44" width="256" height="212" stroke="#071B3B" strokeWidth="0.6" fill="none" strokeDasharray="4 3" />

      {/* Corner rosettes */}
      {[[84,56],[316,56],[84,244],[316,244]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="9" stroke="#071B3B" strokeWidth="0.8" fill="white" fillOpacity="0.9" />
          <circle cx={cx} cy={cy} r="4" stroke="#071B3B" strokeWidth="0.6" fill="#071B3B" fillOpacity="0.08" />
          {[0,45,90,135].map(deg => {
            const r = Math.PI * deg / 180
            return <line key={deg} x1={cx} y1={cy} x2={cx + Math.cos(r)*8} y2={cy + Math.sin(r)*8} stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.4" />
          })}
        </g>
      ))}

      {/* Central medallion */}
      <circle cx="200" cy="150" r="62" stroke="#071B3B" strokeWidth="1.2" fill="white" fillOpacity="0.85" />
      <circle cx="200" cy="150" r="52" stroke="#071B3B" strokeWidth="0.7" fill="none" />
      <circle cx="200" cy="150" r="36" stroke="#071B3B" strokeWidth="0.8" fill="#071B3B" fillOpacity="0.04" />
      {/* Medallion petal pattern */}
      {Array.from({length: 8}, (_, i) => {
        const angle = (i * 45) * Math.PI / 180
        const r1 = 38, r2 = 50
        return (
          <ellipse
            key={i}
            cx={200 + Math.cos(angle) * 44}
            cy={150 + Math.sin(angle) * 44}
            rx="8" ry="5"
            transform={`rotate(${i * 45}, ${200 + Math.cos(angle) * 44}, ${150 + Math.sin(angle) * 44})`}
            stroke="#071B3B" strokeWidth="0.6" fill="#071B3B" fillOpacity="0.06"
          />
        )
      })}
      {/* Central hub */}
      <circle cx="200" cy="150" r="12" stroke="#071B3B" strokeWidth="0.9" fill="white" fillOpacity="0.9" />
      <circle cx="200" cy="150" r="5" stroke="#071B3B" strokeWidth="0.6" fill="#071B3B" fillOpacity="0.12" />

      {/* Horizontal frieze bands */}
      <rect x="72" y="100" width="256" height="8" stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.03" />
      <rect x="72" y="192" width="256" height="8" stroke="#071B3B" strokeWidth="0.5" fill="#071B3B" fillOpacity="0.03" />

      {/* Callout leaders */}
      {/* 1 — Decorative Panel Field */}
      <LeaderLine x1="50" y1="150" x2="30" y2="150" />
      <CalloutBadge n={1} cx={21} cy={150} />
      {/* 2 — Central Medallion */}
      <LeaderLine x1="200" y1="88" x2="200" y2="22" />
      <CalloutBadge n={2} cx={200} cy={13} />
      {/* 3 — Relief Expression */}
      <LeaderLine x1="252" y1="150" x2="368" y2="130" />
      <CalloutBadge n={3} cx={377} cy={122} />
      {/* 4 — Frame & Border */}
      <LeaderLine x1="326" y1="150" x2="368" y2="175" />
      <CalloutBadge n={4} cx={377} cy={183} />
      {/* 5 — Finish Direction */}
      <LeaderLine x1="130" y1="236" x2="30" y2="260" />
      <CalloutBadge n={5} cx={21} cy={268} />
      {/* 6 — Project Coordination Review */}
      <LeaderLine x1="350" y1="30" x2="368" y2="30" />
      <CalloutBadge n={6} cx={377} cy={30} />
    </svg>
  )
}

export default function CustomPage() {
  return (
    <SystemPageLayout data={{
      title: 'Custom Decorative Elements',
      breadcrumb: 'Custom Elements',
      subtitle: 'Bespoke detail. Any form.',
      heroDescription: 'Bespoke GFRC / GRC decorative elements — ornamental panels, medallions, friezes, keystones, and any custom architectural detail produced to project drawings.',
      heroImage: '/images/projects/architectural-cladding-gfrc.png',
      heroImageAlt: 'Custom GFRC decorative architectural elements',
      heroObjectPosition: 'center',
      whatTitle: 'What are GFRC / GRC Custom Decorative Elements?',
      whatBody: 'GFRC / GRC custom decorative elements are bespoke architectural components produced to project-specific designs — from ornamental medallions and carved-effect relief panels to friezes, keystones, brackets, finials, and any other decorative detail. Where standard system products cannot achieve the design intent, custom elements are developed directly from project drawings or design references.',
      benefits: [
        { label: 'Any Form, Any Profile', desc: 'GFRC / GRC can be cast to virtually any decorative geometry — from deep relief carvings to delicate ornamental patterns — at project-specific scale.' },
        { label: 'One-Off & Series Production', desc: 'Custom elements can be produced as single unique pieces or in coordinated series across a façade or building.' },
        { label: 'Design Development Support', desc: 'Ornamental geometry is developed from design intent references, precedent images, or architectural drawings.' },
        { label: 'Integration with Standard Systems', desc: 'Custom decorative elements are coordinated with standard GFRC / GRC systems (cladding, cornices, domes) as part of a unified package.' },
        { label: 'Heritage Restoration', desc: 'Replacement ornamental elements for heritage restoration and repair projects can be produced from existing samples or survey drawings.' },
        { label: 'Lightweight at Scale', desc: 'Even large decorative elements maintain the lightweight advantage of GFRC / GRC, reducing structural and handling requirements.' },
      ],
      Diagram,
      callouts: [
        { n: 1, label: 'Decorative Panel Field', desc: 'The primary surface area carrying the ornamental design or relief pattern.' },
        { n: 2, label: 'Central Medallion', desc: 'A focal ornamental element — medallion, rosette, or panel centrepiece.' },
        { n: 3, label: 'Relief Expression', desc: 'Depth, texture, and three-dimensional quality of the decorative surface.' },
        { n: 4, label: 'Frame & Border', desc: 'Outer framing band and border detail surrounding the decorative field.' },
        { n: 5, label: 'Finish Direction', desc: 'Surface finish applied to the decorative element and its border.' },
        { n: 6, label: 'Project Coordination Review', desc: 'Design intent, mockup requirements, and delivery scope confirmed through project review.' },
      ],
      applications: [
        'Façade Ornamental Panels', 'Heritage Restoration Projects', 'Entrance Feature Elements',
        'Frieze & Spandrel Decoration', 'Keystones & Arched Surrounds', 'Brackets & Corbels',
        'Ceremonial & Cultural Projects', 'Interior Feature Elements',
      ],
      designGuidance: [
        { label: 'Design Intent Development', desc: 'Ornamental geometry is developed from project drawings, precedent images, or design intent references provided by the project team.' },
        { label: 'Relief Depth & Scale', desc: 'Relief depth, element scale, and overall panel sizing are agreed as part of the design development process.' },
        { label: 'Mockup & Review Process', desc: 'Physical mockups of custom decorative elements are produced for review and approval before full production commences.' },
        { label: 'Series & Repeat Coordination', desc: 'Where elements repeat across a façade, modular production and consistent pattern alignment are coordinated as part of the package.' },
        { label: 'Finish Selection Direction', desc: 'Finish direction for custom elements is confirmed through design review, aligned with the surrounding building materials.' },
        { label: 'Project Coordination Requirements', desc: 'Design confirmation, mockup approvals, and production scheduling are agreed through structured project coordination prior to manufacture.' },
      ],
      ctaTitle: 'Ready to Discuss Your Custom Element Package?',
      heroTags: ['GFRC/GRC', 'Custom Elements', 'Bespoke Design', 'Ornamental Systems'],
      gallery: [
        { src: '/images/projects/grand-entrance-gfrc.png', alt: 'GFRC grand entrance decorative elements', scope: 'Custom Decorative', status: 'Completed' },
        { src: '/images/projects/makkah-2023-mosque/makkah-2023-mosque-decorative-elements-002.jpg', alt: 'GFRC custom decorative architectural elements', caption: 'Custom decorative elements', location: 'Makkah, Saudi Arabia', year: '2023', scope: 'Custom Decorative', status: 'Completed' },
        { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-aerial-waterfront-001.jpg', alt: 'GFRC aerial view of waterfront resort development', caption: 'Aerial waterfront project overview', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Custom Decorative', status: 'Completed' },
      ],
    }} />
  )
}
