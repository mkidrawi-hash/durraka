import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Commercial Façade Package',
    category: 'GFRC Façade Cladding',
    location: 'Riyadh, KSA',
    area: '12,400 m²',
  },
  {
    id: 2,
    title: 'Mashrabiya Screen Package',
    category: 'Mashrabiya Systems',
    location: 'Jeddah, KSA',
    area: '3,800 m²',
  },
  {
    id: 3,
    title: 'Domes & Cornices Package',
    category: 'Domes & Cornices',
    location: 'Medina, KSA',
    area: '6,200 m²',
  },
]

export default function ProjectsPreview() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent flex-shrink-0" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase whitespace-nowrap">Our Work</span>
            <div className="w-8 h-px bg-accent flex-shrink-0" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Delivering landmark façade solutions across the Kingdom — from towers to heritage restorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100/80"
            >
              <ImagePlaceholder
                category="project"
                alt={project.title}
                className="h-64 sm:h-60 lg:h-64"
                badge={project.category}
              />

              <div className="p-5 sm:p-6">
                <h3 className="text-navy font-bold text-base sm:text-lg mb-3 leading-snug group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between gap-2 mt-auto">
                  <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-navy/70 bg-navy/5 px-2 py-0.5 rounded-sm tabular-nums">
                    {project.area}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-14">
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
