'use client'

import { useState } from 'react'
import Link from 'next/link'

// Architectural illustrations — shown as fallback until real image loads

function FacadeIllustration({ uid }: { uid: string }) {
  const g = `fg-${uid}`
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
  const g = `mg-${uid}`
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
  const g = `dg-${uid}`
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
  tag: string
  description: string
  image: string
  objectPosition: string
  Illustration: IllustrationComponent
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Grand Entrance Package',
    tag: 'Signature GFRC Entrance',
    description: 'Monumental entrances crafted in GFRC with timeless architectural impact.',
    image: '/images/projects/grand-entrance-gfrc.png',
    objectPosition: 'center',
    Illustration: FacadeIllustration,
  },
  {
    id: 'p2',
    title: 'Column & Portico Package',
    tag: 'Classical Architectural Elements',
    description: 'Elegant columns and porticos engineered for strength and refined detail.',
    image: '/images/projects/column-portico-gfrc.png',
    objectPosition: 'center',
    Illustration: DomesIllustration,
  },
  {
    id: 'p3',
    title: 'Dome & Vault Package',
    tag: 'Custom Dome System',
    description: 'Lightweight GFRC domes and vaults with exceptional precision and durability.',
    image: '/images/projects/dome-vault-gfrc.png',
    objectPosition: 'center top',
    Illustration: DomesIllustration,
  },
  {
    id: 'p4',
    title: 'Ornamental Façade Package',
    tag: 'Decorative GFRC Façade',
    description: 'Intricate façades that elevate buildings with ornamental excellence.',
    image: '/images/projects/architectural-cladding-gfrc.png',
    objectPosition: 'center',
    Illustration: FacadeIllustration,
  },
  {
    id: 'p5',
    title: 'Mashrabiya Screen Package',
    tag: 'Patterned Screen System',
    description: 'Bespoke screens that balance privacy, light, and architectural identity.',
    image: '/images/projects/mashrabiya-screen-gfrc.png',
    objectPosition: 'center',
    Illustration: MashrabiyaIllustration,
  },
  {
    id: 'p6',
    title: 'Architectural Cladding Package',
    tag: 'Exterior Cladding & Profiles',
    description: 'Premium GFRC cladding systems for high-performance exterior finishes.',
    image: '/images/projects/ornamental-facade-gfrc.png',
    objectPosition: 'center',
    Illustration: FacadeIllustration,
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)
  const { Illustration } = project

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/60">
      {/* Image area — taller on mobile, 4:3 on sm+ */}
      <div className="relative overflow-hidden rounded-t-2xl aspect-[5/4] sm:aspect-[4/3] bg-[#071B3B]">
        {/* Architectural illustration — always rendered as background / fallback */}
        <Illustration uid={project.id} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B]/45 via-transparent to-transparent" />
        {/* Real project image — covers illustration when present */}
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: project.objectPosition }}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        {/* Tag badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-accent text-[10px] font-semibold tracking-wider uppercase leading-none bg-[#071B3B]/85 px-2.5 py-1 rounded-sm backdrop-blur-sm">
            {project.tag}
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
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-accent/50 group-hover:text-accent text-[11px] font-semibold tracking-wider uppercase transition-colors">
            View Project
          </span>
          <svg
            className="w-4 h-4 text-accent/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPreview() {
  return (
    <section className="bg-gray-50 pt-14 pb-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase whitespace-nowrap">Our Work</span>
            <div className="w-8 h-px bg-accent flex-shrink-0" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Delivering landmark façade solutions across the Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent-dark transition-colors text-sm sm:text-base shadow-md"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
