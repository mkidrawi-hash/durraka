import Link from 'next/link'

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Riyadh Mixed-Use Tower',
    category: 'GFRC Façade Cladding',
    location: 'Riyadh, KSA',
    area: '12,400 m²',
  },
  {
    id: 2,
    title: 'Heritage District Mashrabiya',
    category: 'Mashrabiya Systems',
    location: 'Jeddah, KSA',
    area: '3,800 m²',
  },
  {
    id: 3,
    title: 'Grand Mosque Extension',
    category: 'Domes & Cornices',
    location: 'Medina, KSA',
    area: '6,200 m²',
  },
]

export default function ProjectsPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase whitespace-nowrap">Our Work</span>
            <div className="w-8 h-px bg-accent flex-shrink-0" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Delivering landmark façade solutions across the Kingdom — from towers to heritage restorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Project visual — architectural grid pattern */}
              <div className="h-56 bg-navy relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-accent text-xs font-semibold tracking-wider uppercase bg-navy/70 px-2 py-1 rounded-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-navy font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{project.location}</span>
                  <span className="font-semibold text-navy">{project.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-semibold rounded-sm hover:bg-navy hover:text-white transition-all"
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
