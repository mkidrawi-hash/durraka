import { packagesContent as C } from '@/content/en/packages'

// ── Design-intent diagram — shared SVG renderer, one typed config per package ──
// Draws arrangement/proportion ONLY. No dimensions, no section cuts, no fixing/
// anchor/subframe views. Navy #071B3B lines, red #D71920 accents, white ground,
// thin architectural weights. The same renderer draws all six packages; each
// package supplies a `DesignDiagram` data object.

const NAVY = '#071B3B'
const RED = '#D71920'

export type DiagramShape =
  | { kind: 'rect'; x: number; y: number; w: number; h: number; rx?: number; accent?: boolean; fill?: boolean }
  | { kind: 'line'; x1: number; y1: number; x2: number; y2: number; accent?: boolean; dashed?: boolean }
  | { kind: 'polyline'; points: string; accent?: boolean; closed?: boolean; fill?: boolean }
  | { kind: 'path'; d: string; accent?: boolean; fill?: boolean }
  | { kind: 'circle'; cx: number; cy: number; r: number; accent?: boolean; fill?: boolean }

export interface DiagramCallout {
  n: number
  label: string
  x: number
  y: number
}

export interface DesignDiagram {
  kind: 'elevation' | 'plan' | 'profile'
  viewBox: string
  shapes: DiagramShape[]
  callouts: DiagramCallout[]
}

function stroke(accent?: boolean): string {
  return accent ? RED : NAVY
}

function Shape({ s }: { s: DiagramShape }) {
  const common = {
    stroke: stroke(s.kind !== 'line' ? (s as { accent?: boolean }).accent : s.accent),
    strokeWidth: (s as { accent?: boolean }).accent ? 2 : 1.4,
    strokeLinejoin: 'round' as const,
    strokeLinecap: 'round' as const,
    vectorEffect: 'non-scaling-stroke' as const,
  }
  switch (s.kind) {
    case 'rect':
      return (
        <rect
          x={s.x}
          y={s.y}
          width={s.w}
          height={s.h}
          rx={s.rx ?? 0}
          fill={s.fill ? 'rgba(7,27,59,0.05)' : 'none'}
          {...common}
        />
      )
    case 'line':
      return (
        <line
          x1={s.x1}
          y1={s.y1}
          x2={s.x2}
          y2={s.y2}
          strokeDasharray={s.dashed ? '4 4' : undefined}
          {...common}
        />
      )
    case 'polyline':
      return (
        <polyline
          points={s.points}
          fill={s.fill ? 'rgba(7,27,59,0.05)' : 'none'}
          {...common}
          // a "closed" polyline is just a polygon
          {...(s.closed ? {} : {})}
        />
      )
    case 'path':
      return <path d={s.d} fill={s.fill ? 'rgba(7,27,59,0.05)' : 'none'} {...common} />
    case 'circle':
      return (
        <circle
          cx={s.cx}
          cy={s.cy}
          r={s.r}
          fill={s.fill ? 'rgba(215,25,32,0.06)' : 'none'}
          {...common}
        />
      )
  }
}

function CalloutMarker({ c }: { c: DiagramCallout }) {
  return (
    <g>
      <circle cx={c.x} cy={c.y} r={9} fill={RED} vectorEffect="non-scaling-stroke" />
      <text
        x={c.x}
        y={c.y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight={700}
        fill="#ffffff"
      >
        {c.n}
      </text>
    </g>
  )
}

export function DesignIntentDiagram({ diagram, title }: { diagram: DesignDiagram; title: string }) {
  const legendLabel = `${title} — schematic design-intent diagram`
  return (
    <figure className="m-0">
      {/* White architectural ground — readable in light and dark themes */}
      <div className="rounded-sm border border-navy/10 bg-white p-4 sm:p-6">
        <svg
          viewBox={diagram.viewBox}
          role="img"
          aria-label={legendLabel}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {diagram.shapes.map((s, i) => (
            <Shape key={`s${i}`} s={s} />
          ))}
          {diagram.callouts.map((c) => (
            <CalloutMarker key={`c${c.n}`} c={c} />
          ))}
        </svg>
      </div>

      {/* Numbered legend — stacks below the diagram; 1 col on mobile, 2 on sm+ */}
      <div className="mt-4">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-navy/50 dark:text-white/45 mb-2">
          {C.designIntent.legendTitle}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
          {diagram.callouts.map((c) => (
            <li key={`l${c.n}`} className="flex items-center gap-2.5 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold inline-flex items-center justify-center">
                {c.n}
              </span>
              <span className="text-gray-600 dark:text-white/70">{c.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="mt-4 text-xs text-gray-400 dark:text-white/40 italic leading-relaxed">
        {C.designIntent.diagramCaption}
      </figcaption>
    </figure>
  )
}
