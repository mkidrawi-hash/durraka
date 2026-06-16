import Link from 'next/link'

// Architectural SVG patterns — each is distinct and recognisable per project type

function FacadePattern({ uid }: { uid: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`fp-${uid}`} x="0" y="0" width="60" height="24" patternUnits="userSpaceOnUse">
          <line x1="0" y1="12" x2="60" y2="12" stroke="white" strokeWidth="0.6" strokeOpacity="0.25"/>
          <line x1="0" y1="24" x2="60" y2="24" stroke="white" strokeWidth="1.2" strokeOpacity="0.14"/>
          <line x1="20" y1="0" x2="20" y2="24" stroke="white" strokeWidth="0.5" strokeOpacity="0.14"/>
          <line x1="40" y1="0" x2="40" y2="24" stroke="white" strokeWidth="0.5" strokeOpacity="0.14"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#fp-${uid})`}/>
      {/* Subtle accent bar */}
      <rect x="0" y="0" width="3" height="100%" fill="#D71920" fillOpacity="0.5"/>
    </svg>
  )
}

function MashrabiyaPattern({ uid }: { uid: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`mp-${uid}`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="16" cy="16" r="7" fill="none" stroke="white" strokeWidth="0.6" strokeOpacity="0.25"/>
          <line x1="0" y1="16" x2="32" y2="16" stroke="white" strokeWidth="0.4" strokeOpacity="0.2"/>
          <line x1="16" y1="0" x2="16" y2="32" stroke="white" strokeWidth="0.4" strokeOpacity="0.2"/>
          <line x1="0" y1="0" x2="32" y2="32" stroke="white" strokeWidth="0.3" strokeOpacity="0.12"/>
          <line x1="32" y1="0" x2="0" y2="32" stroke="white" strokeWidth="0.3" strokeOpacity="0.12"/>
          <circle cx="16" cy="16" r="2.5" fill="white" fillOpacity="0.12"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#mp-${uid})`}/>
      <rect x="0" y="0" width="3" height="100%" fill="#D71920" fillOpacity="0.5"/>
    </svg>
  )
}

function DomesPattern({ uid }: { uid: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`dp-${uid}`} x="0" y="0" width="80" height="60" patternUnits="userSpaceOnUse">
          <path d="M0 60 Q40 4 80 60" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.28"/>
          <path d="M0 60 Q40 20 80 60" fill="none" stroke="white" strokeWidth="0.6" strokeOpacity="0.16"/>
          <path d="M0 60 Q40 36 80 60" fill="none" stroke="white" strokeWidth="0.35" strokeOpacity="0.1"/>
          <line x1="40" y1="4" x2="40" y2="60" stroke="white" strokeWidth="0.4" strokeOpacity="0.12"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dp-${uid})`}/>
      <rect x="0" y="0" width="3" height="100%" fill="#D71920" fillOpacity="0.5"/>
    </svg>
  )
}

type PatternComponent = React.FC<{ uid: string }>

const PATTERN_MAP: Record<string, PatternComponent> = {
  'GFRC Façade Cladding': FacadePattern,
  'Mashrabiya Systems': MashrabiyaPattern,
  'Domes & Cornices': DomesPattern,
}

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Commercial Façade Package',
    description: 'Full GFRC panel cladding system for a large-scale commercial development.',
    category: 'GFRC Façade Cladding',
    location: 'Riyadh, KSA',
    area: '12,400 m²',
  },
  {
    id: 2,
    title: 'Mashrabiya Screen Package',
    description: 'Custom perforated GRC screens with traditional geometric detailing.',
    category: 'Mashrabiya Systems',
    location: 'Jeddah, KSA',
    area: '3,800 m²',
  },
  {
    id: 3,
    title: 'Domes & Cornices Package',
    description: 'Architectural dome structures and decorative cornice profiles in GFRC.',
    category: 'Domes & Cornices',
    location: 'Medina, KSA',
    area: '6,200 m²',
  },
]

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          {FEATURED_PROJECTS.map((project) => {
            const Pattern = PATTERN_MAP[project.category] ?? FacadePattern
            return (
              <div
                key={project.id}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/60"
              >
                {/* Placeholder image — 4:3 aspect ratio */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#0b1e38]">
                  <Pattern uid={String(project.id)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B]/90 via-[#071B3B]/20 to-transparent" />
                  {/* Category tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-accent text-[10px] font-semibold tracking-wider uppercase bg-[#071B3B]/85 px-2.5 py-1 rounded-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-navy font-bold text-base leading-snug mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-y-1.5 gap-x-2 pt-2 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </span>
                    <span className="text-[11px] font-semibold text-navy/60 bg-navy/5 px-2 py-0.5 rounded-sm tabular-nums">
                      {project.area}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
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
