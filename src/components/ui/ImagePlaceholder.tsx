import Image from 'next/image'

export type ImageCategory =
  | 'hero'
  | 'project'
  | 'system'
  | 'factory'
  | 'detail'
  | 'catalog'

interface ImagePlaceholderProps {
  /** If supplied, renders a real Next.js Image (fill + object-cover). */
  src?: string
  alt: string
  /** Drives the faint label text shown when src is absent. */
  category?: ImageCategory
  /** Tailwind class controlling block height, e.g. "h-56" */
  className?: string
  /** Category badge pinned to the bottom-left corner. */
  badge?: string
  /** Pass true for above-the-fold images to disable lazy loading. */
  priority?: boolean
}

const CATEGORY_LABELS: Record<ImageCategory, string> = {
  hero: 'Hero Image',
  project: 'Project Reference',
  system: 'System Visual',
  factory: 'Factory / Process',
  detail: 'Façade Detail',
  catalog: 'Catalog Visual',
}

// Architectural diagonal-line texture as inline SVG data URL
const TEXTURE = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='40' x2='40' y2='0' stroke='%23ffffff' stroke-width='0.4' stroke-opacity='1'/%3E%3C/svg%3E")`

export default function ImagePlaceholder({
  src,
  alt,
  category = 'project',
  className = 'h-56',
  badge,
  priority = false,
}: ImagePlaceholderProps) {
  // ── Real image ───────────────────────────────────────────────────────
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
        {badge && (
          <div className="absolute bottom-3 left-4 z-10">
            <span className="text-accent text-xs font-semibold tracking-wider uppercase bg-navy/80 px-2 py-1 rounded-sm">
              {badge}
            </span>
          </div>
        )}
      </div>
    )
  }

  // ── Branded placeholder ──────────────────────────────────────────────
  return (
    <div
      className={`relative overflow-hidden bg-navy ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Diagonal line texture */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: TEXTURE }} />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

      {/* Muted centre label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-center opacity-[0.18]">
          <div className="w-8 h-px bg-white mx-auto mb-2.5" />
          <p className="text-white text-[9px] font-semibold tracking-[0.22em] uppercase">
            {CATEGORY_LABELS[category]}
          </p>
        </div>
      </div>

      {/* Category badge */}
      {badge && (
        <div className="absolute bottom-3 left-4">
          <span className="text-accent text-xs font-semibold tracking-wider uppercase bg-navy/70 px-2 py-1 rounded-sm">
            {badge}
          </span>
        </div>
      )}
    </div>
  )
}
