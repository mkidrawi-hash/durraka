import { METRICS } from '@/lib/constants'

export default function Metrics() {
  return (
    <section className="bg-navy-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 border border-white/10 rounded-sm hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="text-accent font-bold text-base sm:text-lg mb-0.5">{metric.unit}</span>
                )}
              </div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-1 leading-snug">{metric.label}</div>
              <div className="text-white/50 text-xs leading-relaxed hidden sm:block">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
