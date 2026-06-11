import { METRICS } from '@/lib/constants'

export default function Metrics() {
  return (
    <section className="bg-navy-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 border border-white/10 rounded-sm hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-bold text-white group-hover:text-accent transition-colors">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="text-accent font-bold text-lg mb-1">{metric.unit}</span>
                )}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{metric.label}</div>
              <div className="text-white/50 text-xs leading-relaxed">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
