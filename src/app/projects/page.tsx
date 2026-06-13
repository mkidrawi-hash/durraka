import type { Metadata } from 'next'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Durraka Factory\'s portfolio of completed GFRC/GRC façade projects across Saudi Arabia.',
}

const PROJECTS = [
  {
    id: 1,
    title: 'Riyadh Mixed-Use Tower',
    category: 'GFRC Façade Cladding',
    location: 'Riyadh, KSA',
    area: '12,400 m²',
    year: '2023',
    description:
      'Full façade cladding system for a 35-storey mixed-use development in the heart of Riyadh.',
  },
  {
    id: 2,
    title: 'Heritage District Mashrabiya',
    category: 'Mashrabiya Systems',
    location: 'Jeddah, KSA',
    area: '3,800 m²',
    year: '2023',
    description:
      'Custom geometric mashrabiya screens for a heritage-inspired retail and hospitality complex.',
  },
  {
    id: 3,
    title: 'Grand Mosque Extension',
    category: 'Domes & Cornices',
    location: 'Medina, KSA',
    area: '6,200 m²',
    year: '2022',
    description:
      'Decorative domes, cornices, and architectural ornamentation for a mosque expansion project.',
  },
  {
    id: 4,
    title: 'Luxury Villa Development',
    category: 'Custom Decorative Elements',
    location: 'Al Khobar, KSA',
    area: '2,100 m²',
    year: '2022',
    description:
      'Bespoke columns, cornices, and exterior decorative features for a high-end residential community.',
  },
  {
    id: 5,
    title: 'Government Complex Cladding',
    category: 'GFRC Façade Cladding',
    location: 'Dammam, KSA',
    area: '18,600 m²',
    year: '2023',
    description: 'Large-scale façade cladding system for a government administrative complex.',
  },
  {
    id: 6,
    title: 'Hotel Colonnade',
    category: 'Columns & Pillars',
    location: 'Riyadh, KSA',
    area: '900 m²',
    year: '2022',
    description:
      'Custom GRC columns and pilasters for the entrance colonnade of a 5-star hotel.',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            From landmark towers to heritage restorations — our GFRC and GRC solutions are delivered
            across the Kingdom.
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <ImagePlaceholder
                category="project"
                alt={project.title}
                className="h-48"
                badge={project.category}
              />

              <div className="p-6">
                <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-4">
                  <span>{project.location}</span>
                  <span>
                    {project.area} &middot; {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
