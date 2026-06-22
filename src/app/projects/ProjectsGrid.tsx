'use client'

import { useState } from 'react'
import Link from 'next/link'

function FacadeIllustration({ uid }: { uid: string }) {
  const g = `pfg-${uid}`
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f2d58" />
          <stop offset="100%" stopColor="#071B3B" />
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill={`url(#${g})`} />
      <g opacity="0.24" stroke="white" fill="none">
        <rect x="50" y="20" width="100" height="110" strokeWidth="1.2" />
        <line x1="50" y1="38" x2="150" y2="38" strokeWidth="0.7" />
        <line x1="50" y1="56" x2="150" y2="56" strokeWidth="0.7" />
        <line x1="50" y1="74" x2="150" y2="74" strokeWidth="0.7" />
        <line x1="50" y1="92" x2="150" y2="92" strokeWidth="0.7" />
        <line x1="50" y1="110" x2="150" y2="110" strokeWidth="0.7" />
        <line x1="100" y1="20" x2="100" y2="130" strokeWidth="0.5" strokeDasharray="3 2" />
        <rect x="55" y="24" width="39" height="12" fill="white" fillOpacity="0.07" strokeWidth="0" />
        <rect x="55" y="42" width="39" height="12" fill="white" fillOpacity="0.07" strokeWidth="0" />
        <rect x="55" y="60" width="39" height="12" fill="white" fillOpacity="0.07" strokeWidth="0" />
        <rect x="106" y="24" width="39" height="12" fill="white" fillOpacity="0.07" strokeWidth="0" />
        <rect x="106" y="42" width="39" height="12" fill="white" fillOpacity="0.07" strokeWidth="0" />
        <rect x="106" y="60" width="39" height="12" fill="white" fillOpacity="0.07" strokeWidth="0" />
        <rect x="44" y="14" width="112" height="7" strokeWidth="0.9" />
        <rect x="44" y="129" width="112" height="5" strokeWidth="0.8" />
      </g>
      <rect x="0" y="0" width="3" height="150" fill="#D71920" fillOpacity="0.6" />
    </svg>
  )
}

function MashrabiyaIllustration({ uid }: { uid: string }) {
  const g = `pmg-${uid}`
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#071B3B" />
          <stop offset="100%" stopColor="#102847" />
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill={`url(#${g})`} />
      <g opacity="0.24" stroke="white" fill="none">
        <path d="M58 142 L58 74 Q58 8 100 8 Q142 8 142 74 L142 142" strokeWidth="1.4" />
        <path d="M72 142 L72 78 Q72 28 100 28 Q128 28 128 78 L128 142" strokeWidth="0.8" />
        <line x1="86" y1="52" x2="86" y2="142" strokeWidth="0.55" />
        <line x1="100" y1="28" x2="100" y2="142" strokeWidth="0.55" />
        <line x1="114" y1="52" x2="114" y2="142" strokeWidth="0.55" />
        <line x1="58" y1="88" x2="142" y2="88" strokeWidth="0.55" />
        <line x1="58" y1="108" x2="142" y2="108" strokeWidth="0.55" />
        <line x1="58" y1="128" x2="142" y2="128" strokeWidth="0.55" />
        <path d="M100 8 L107 22 L100 36 L93 22 Z" strokeWidth="0.9" />
        <rect x="44" y="42" width="12" height="100" strokeWidth="0.8" />
        <rect x="144" y="42" width="12" height="100" strokeWidth="0.8" />
      </g>
      <rect x="0" y="0" width="3" height="150" fill="#D71920" fillOpacity="0.6" />
    </svg>
  )
}

function DomesIllustration({ uid }: { uid: string }) {
  const g = `pdg-${uid}`
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2650" />
          <stop offset="100%" stopColor="#071B3B" />
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill={`url(#${g})`} />
      <g opacity="0.24" stroke="white" fill="none">
        <path d="M28 102 Q28 18 100 18 Q172 18 172 102" strokeWidth="1.4" />
        <path d="M50 102 Q50 38 100 38 Q150 38 150 102" strokeWidth="0.8" />
        <line x1="100" y1="18" x2="28" y2="102" strokeWidth="0.5" />
        <line x1="100" y1="18" x2="57" y2="102" strokeWidth="0.5" />
        <line x1="100" y1="18" x2="100" y2="102" strokeWidth="0.5" />
        <line x1="100" y1="18" x2="143" y2="102" strokeWidth="0.5" />
        <line x1="100" y1="18" x2="172" y2="102" strokeWidth="0.5" />
        <ellipse cx="100" cy="62" rx="36" ry="7" strokeWidth="0.65" />
        <rect x="36" y="102" width="128" height="16" strokeWidth="0.9" />
        <line x1="28" y1="118" x2="172" y2="118" strokeWidth="0.6" />
        <line x1="18" y1="122" x2="182" y2="122" strokeWidth="0.6" />
        <circle cx="100" cy="18" r="5" strokeWidth="0.9" />
        <line x1="100" y1="6" x2="100" y2="13" strokeWidth="0.9" />
      </g>
      <rect x="0" y="0" width="3" height="150" fill="#D71920" fillOpacity="0.6" />
    </svg>
  )
}

type IllustrationComponent = React.FC<{ uid: string }>

type Project = {
  id: string
  title: string
  category: string
  location: string
  area: string
  year: string
  description: string
  image: string
  objectPosition: string
  Illustration: IllustrationComponent
  href?: string
}

const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Commercial Façade Package',
    category: 'GFRC Façade Cladding',
    location: 'Riyadh, KSA',
    area: '12,400 m²',
    year: '2023',
    description:
      'Full exterior cladding system across a multi-storey mixed-use development, combining panel fabrication with precision engineering and site delivery.',
    image: '/images/projects/ornamental-facade-gfrc.png',
    objectPosition: 'center',
    Illustration: FacadeIllustration,
    href: '/packages/commercial-facade-package',
  },
  {
    id: 'proj-2',
    title: 'Mashrabiya Screen Package',
    category: 'Mashrabiya Systems',
    location: 'Jeddah, KSA',
    area: '3,800 m²',
    year: '2023',
    description:
      'Geometric GFRC screens for a heritage-inspired hospitality project, designed to project-specific lattice patterns for privacy, shade, and visual identity.',
    image: '/images/projects/mashrabiya-screen-gfrc.png',
    objectPosition: 'center',
    Illustration: MashrabiyaIllustration,
  },
  {
    id: 'proj-3',
    title: 'Domes & Cornices Package',
    category: 'Domes & Cornices',
    location: 'Western Region, KSA',
    area: '6,200 m²',
    year: '2022',
    description:
      'Architectural domes, cornices, and ornamental elements manufactured in GFRC to exacting design specifications for a large institutional complex.',
    image: '/images/projects/dome-vault-gfrc.png',
    objectPosition: 'center top',
    Illustration: DomesIllustration,
  },
  {
    id: 'proj-4',
    title: 'Residential Decorative Package',
    category: 'Custom Decorative Elements',
    location: 'Eastern Region, KSA',
    area: '2,100 m²',
    year: '2022',
    description:
      'Bespoke exterior columns, cornices, and ornamental profiles for a high-end residential development, cast to custom architectural drawings.',
    image: '/images/projects/architectural-cladding-gfrc.png',
    objectPosition: 'center',
    Illustration: FacadeIllustration,
  },
  {
    id: 'proj-5',
    title: 'Grand Entrance Package',
    category: 'Signature GFRC Entrance',
    location: 'Riyadh, KSA',
    area: '18,600 m²',
    year: '2023',
    description:
      'Large-scale monumental entrance package for an institutional complex, combining structural GFRC panels with decorative cornices and column cladding.',
    image: '/images/projects/grand-entrance-gfrc.png',
    objectPosition: 'center',
    Illustration: FacadeIllustration,
  },
  {
    id: 'proj-6',
    title: 'Hospitality Column Package',
    category: 'Columns & Pillars',
    location: 'Riyadh, KSA',
    area: '900 m²',
    year: '2022',
    description:
      'Custom GRC columns and pilasters for the entrance colonnade of a hospitality development, cast to bespoke classical profiles and finished on-site.',
    image: '/images/projects/column-portico-gfrc.png',
    objectPosition: 'center',
    Illustration: DomesIllustration,
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)
  const { Illustration } = project
  const cardClassName = "group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/60"

  const inner = (
    <>
      <div className="relative overflow-hidden aspect-[5/4] sm:aspect-[4/3] bg-[#071B3B]">
        <Illustration uid={project.id} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B]/70 via-transparent to-transparent" />
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: project.objectPosition }}
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-accent text-[10px] font-semibold tracking-wider uppercase leading-none bg-[#071B3B]/85 px-2.5 py-1 rounded-sm backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-navy font-bold text-[17px] sm:text-[15px] leading-snug mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-[13px] sm:text-xs leading-relaxed">
          {project.description}
        </p>
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-300">
          <span>{project.location}</span>
          <span>{project.area} · {project.year}</span>
        </div>
      </div>
    </>
  )

  if (project.href) {
    return (
      <Link href={project.href} className={cardClassName}>
        {inner}
      </Link>
    )
  }

  return (
    <div className={cardClassName}>
      {inner}
    </div>
  )
}

export default function ProjectsGrid() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="text-center text-gray-400 text-xs mt-12 max-w-xl mx-auto leading-relaxed">
        Project references are presented in abstract form due to confidentiality and client approval
        requirements. Additional project details may be shared with qualified clients during the
        consultation process.
      </p>
    </>
  )
}
