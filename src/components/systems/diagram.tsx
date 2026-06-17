export function CalloutBadge({
  n, cx, cy, r = 9, size = 8.5,
}: {
  n: number; cx: number; cy: number; r?: number; size?: number
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#D71920" />
      <text
        x={cx} y={cy + 4}
        textAnchor="middle" fontSize={size} fontWeight="bold"
        fill="white" fontFamily="sans-serif"
      >
        {n}
      </text>
    </g>
  )
}

export function LeaderLine({
  x1, y1, x2, y2,
}: {
  x1: number | string; y1: number | string
  x2: number | string; y2: number | string
}) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="#D71920" strokeWidth="0.8" strokeDasharray="4 2"
    />
  )
}
