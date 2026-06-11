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
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Featured Projects</h2>
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
              {/* Image placeholder */}
              <div className="h-56 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
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
