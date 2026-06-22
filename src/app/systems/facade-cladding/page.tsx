import type { Metadata } from 'next'
import { FacadeCladdingRichLayout } from '@/components/systems/FacadeCladdingRichLayout'
import type { FacadeContent } from '@/components/systems/FacadeCladdingRichLayout'
import { PackageGallery } from '@/components/systems/PackageGallery'
import type { LightboxImage } from '@/components/systems/ImageLightbox'

export const metadata: Metadata = {
  title: 'GFRC / GRC Façade Cladding System — Durraka',
  description: 'High-performance GFRC / GRC façade cladding system designed for durable, expressive, and timeless architectural façades. Discover material benefits, finish directions, and design applications.',
}

const content: FacadeContent = {
  dir: 'ltr',
  hero: {
    breadcrumb: 'Our Systems',
    title: 'GFRC / GRC Façade Cladding System',
    subtitle: 'Architectural freedom. Engineered confidence.',
    description: 'High-performance architectural cladding system designed for durable, expressive, and timeless façades.',
    btnQuote: 'Request a Quotation',
    btnContact: 'Download System Overview',
  },
  featureIcons: [
    { key: 'lightweight', label: 'Lightweight', desc: 'A fraction of the weight of solid concrete — reducing loading on the primary structure.' },
    { key: 'profile', label: 'Custom Profiles', desc: 'Any architectural profile, curve, or ornamental shape — cast to project drawings.' },
    { key: 'durable', label: 'Durable', desc: 'Alkali-resistant glass fibre reinforcement ensures long-term exterior performance.' },
    { key: 'heritage', label: 'Heritage & Modern', desc: 'Suited to contemporary façades and heritage-inspired architectural styles alike.' },
  ],
  diagramLabel: 'GFRC / GRC Façade Cladding System — Overview',
  diagramNote: 'Note: Diagram is simplified for presentation purposes.',
  tabs: {
    labels: ['Quick Read', 'Key Benefits', 'Applications', 'Design Options'],
    quickRead: 'GFRC / GRC is a high-performance cement-based composite reinforced with alkali-resistant glass fibres. It enables lightweight architectural cladding panels, custom profiles, and a wide range of surface finishes — combining visual impact with structural confidence for modern and heritage façades across Saudi Arabia.',
    benefits: [
      'Lightweight architectural elements — reduced structural loading',
      'Design flexibility — custom profiles, compound curves, and complex geometries',
      'Durable exterior performance in demanding environments',
      'Custom shapes — cornices, column casings, arched surrounds, ornamental forms',
      'Wide range of textures, surface finishes, and colour directions',
      'Suited to both modern and heritage-inspired architectural styles',
    ],
    applications: [
      'Commercial Façades',
      'Hospitality Developments',
      'Residential Buildings',
      'Government & Institutional Projects',
      'Heritage-Inspired Architecture',
      'Mixed-Use Developments',
      'Entrances & Feature Walls',
      'Decorative Façade Enhancements',
    ],
    designOptions: [
      'Smooth Finish',
      'Sandblasted Finish',
      'Textured Finish',
      'Stone-Like Finish',
      'Concrete-Look Finish',
      'Custom Colour Finish',
      'Heritage-Inspired Finish',
      'Project-Specific Finish',
    ],
  },
  callouts: [
    { n: 1, label: 'Architectural Cladding Zone', desc: 'The primary surface area clad in GFRC / GRC panels.' },
    { n: 2, label: 'Panel Rhythm', desc: 'Horizontal and vertical joint pattern across the façade.' },
    { n: 3, label: 'Opening Expression', desc: 'Design treatment around windows and apertures.' },
    { n: 4, label: 'Edge & Corner Expression', desc: 'Architectural detail at building perimeters and returns.' },
    { n: 5, label: 'Finish & Texture Surface', desc: 'Surface finish direction applied across the cladding zone.' },
    { n: 6, label: 'Project Coordination Review', desc: 'Scope and design confirmed through project review.' },
  ],
  accordion: [
    {
      label: 'Overview — What is GFRC / GRC?',
      content: 'GFRC / GRC is a high-performance cement-based composite reinforced with alkali-resistant glass fibres. It enables lightweight architectural elements, custom profiles, textured surfaces, and durable façade expressions for modern, heritage, and project-specific developments across Saudi Arabia.',
    },
    {
      label: 'Typical Uses',
      content: [
        'Commercial office buildings and headquarters',
        'Hospitality and hotel developments',
        'Government and institutional buildings',
        'Residential towers and villa developments',
        'Heritage-inspired and culturally significant architecture',
        'Mixed-use retail and commercial developments',
        'Entrance feature walls and monumental façades',
        'Decorative façade enhancements and architectural upgrades',
      ],
    },
    {
      label: 'Finishes',
      content: [
        'Smooth — clean architectural surface for contemporary expressions',
        'Sandblasted — refined textured surface with a natural mineral appearance',
        'Textured — controlled surface texture for depth and visual character',
        'Stone-Like — architectural finish inspired by natural stone aesthetics',
        'Concrete-Look — minimal cementitious appearance for contemporary projects',
        'Custom Colour — project-based colour direction developed to match design intent',
        'Heritage-Inspired — finish direction for traditional and regional architectural language',
        'Project-Specific — custom surface direction reviewed according to project requirements',
      ],
    },
    {
      label: 'Frequently Asked Questions',
      content: [
        'Can GFRC / GRC match existing building materials? Yes — finish direction, colour, and texture can be developed to complement or match adjacent materials.',
        'What information is needed to start a quotation? Architectural drawings or elevations, façade area estimate, design intent references, preferred finish direction, and project timeline.',
        'Is GFRC / GRC suitable for refurbishment projects? Yes — the system is appropriate for new construction and architectural upgrade projects across all building types.',
        'How are finish directions confirmed? Finish direction is confirmed through design review and approved samples or mockups prior to production.',
      ],
    },
  ],
  technicalNote: 'This page is provided for material understanding, design guidance, and early project coordination only. Project-specific engineering details are issued through approved project submissions where required.',
  cta: {
    eyebrow: 'Start Your Project',
    title: 'Ready to Discuss Your Façade Cladding Package?',
    body: "Share your drawings, design intent, or project requirements and Durraka's team will help you define the right GFRC / GRC package for your project.",
    btnQuote: 'Request a Quotation',
    btnContact: 'Speak to a Sales Engineer',
  },
}

const facadeGallery: LightboxImage[] = [
  { src: '/images/projects/ornamental-facade-gfrc.png', alt: 'GFRC ornamental facade panels', scope: 'Facades & Cladding', status: 'Completed' },
  { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-arrival-plaza-001.jpg', alt: 'GFRC facade components at arrival plaza', caption: 'Façade cladding components at arrival plaza', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Facades & Cladding', status: 'Completed' },
  { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-courtyard-facade-001.jpg', alt: 'GFRC facade cladding at hospitality courtyard', caption: 'Courtyard elevation facade cladding', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Facades & Cladding', status: 'Completed' },
  { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-beachfront-overview-001.jpg', alt: 'Beachfront resort facade overview', caption: 'Resort beachfront facade overview', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Facades & Cladding', status: 'Completed' },
  { src: '/images/projects/kaec-2025-hospitality/kaec-2025-hospitality-facade-arches-screens-004.jpg', alt: 'GFRC facade arches and screens', caption: 'Facade arches and screen elements', location: 'KAEC, Saudi Arabia', year: '2025', scope: 'Facades & Cladding', status: 'Completed' },
]

export default function FacadeCladdingPage() {
  return (
    <>
      <FacadeCladdingRichLayout content={content} heroImage="/images/projects/architectural-cladding-gfrc.png" />
      <PackageGallery
        id="gallery"
        title="Project Gallery"
        eyebrow="Selected GFRC/GRC Works"
        entries={facadeGallery}
      />
    </>
  )
}
