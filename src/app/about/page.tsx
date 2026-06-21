import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Durraka Factory for Industry — a specialist GFRC/GRC façade manufacturer with structured production operations and Kingdom-wide delivery, serving projects across Saudi Arabia.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Who We Are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Durraka</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Precision-Engineered GFRC Architectural Systems</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Durraka Factory for Industry is a Saudi-based specialist manufacturer of Glass Fibre Reinforced
                Concrete (GFRC/GRC) architectural elements. We supply façade cladding, mashrabiya screens,
                domes, cornices, columns, and bespoke decorative elements for construction projects across
                the Kingdom.
              </p>
              <p>
                With established GFRC/GRC manufacturing experience and structured production operations, we are
                equipped to serve large-scale developments while maintaining the precision required for heritage
                and luxury projects.
              </p>
              <p>
                Our engineering team works directly with architects, developers, and main contractors to translate
                design intent into manufacturable components — handling everything from shop drawings to
                Kingdom-wide site delivery.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-8 border-l-4 border-accent rounded-sm">
              <h3 className="text-navy font-bold text-lg mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To deliver precision-engineered GFRC/GRC architectural systems that meet the highest standards
                of quality, engineering, and on-site performance for projects across Saudi Arabia.
              </p>
            </div>

            <div className="bg-gray-50 p-8 border-l-4 border-navy rounded-sm">
              <h3 className="text-navy font-bold text-lg mb-4">Our Values</h3>
              <ul className="text-gray-600 text-sm space-y-3">
                {[
                  'Engineering excellence in every element',
                  'Transparent partnership with our clients',
                  'On-time delivery across the Kingdom',
                  'Sustainable manufacturing practices',
                ].map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 'Since 2008', label: 'GFRC/GRC Manufacturing' },
                { value: '24/7', label: 'Operations' },
                { value: 'Kingdom-wide', label: 'Project Delivery' },
                { value: 'Custom', label: 'Project Engineering' },
              ].map((stat) => (
                <div key={stat.label} className="bg-navy p-6 rounded-sm text-center">
                  <div className="text-accent font-bold text-xl mb-1">{stat.value}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
