export function FinishSwatch({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 80 40" className="w-full h-full" preserveAspectRatio="xMidYMid slice">

      {type === 'smooth' && <rect width="80" height="40" fill="#D6D9DF" />}

      {type === 'sandblasted' && (
        <>
          <rect width="80" height="40" fill="#C8CBCF" />
          {[5,12,20,28,36,44,52,60,68,75].map(x =>
            [6,14,22,30,36].map(y => (
              <circle key={`${x}-${y}`} cx={x + (y % 8)} cy={y} r="0.7" fill="#071B3B" fillOpacity="0.12" />
            ))
          )}
        </>
      )}

      {type === 'textured' && (
        <>
          <rect width="80" height="40" fill="#C5C8CC" />
          {[0,5,10,15,20,25,30,35,40].map(y => (
            <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.15" />
          ))}
        </>
      )}

      {type === 'stone' && (
        <>
          <rect width="80" height="40" fill="#C9C3B8" />
          <line x1="0" y1="18" x2="80" y2="18" stroke="#071B3B" strokeWidth="0.6" strokeOpacity="0.2" />
          <line x1="0" y1="30" x2="80" y2="30" stroke="#071B3B" strokeWidth="0.6" strokeOpacity="0.15" />
          <line x1="22" y1="0" x2="22" y2="18" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="55" y1="18" x2="55" y2="30" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="35" y1="30" x2="35" y2="40" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.12" />
          <line x1="65" y1="0" x2="65" y2="18" stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.1" />
        </>
      )}

      {type === 'concrete' && (
        <>
          <rect width="80" height="40" fill="#B8BBBC" />
          {[4,9,16,23,30,36].map(y => (
            <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="#071B3B" strokeWidth="0.3" strokeOpacity="0.12" />
          ))}
          <rect x="0" y="0" width="80" height="40" fill="#071B3B" fillOpacity="0.04" />
        </>
      )}

      {type === 'colour' && (
        <>
          <rect width="80" height="40" fill="#E8E2D8" />
          <rect x="0" y="0" width="20" height="40" fill="#D71920" fillOpacity="0.12" />
          <rect x="20" y="0" width="20" height="40" fill="#071B3B" fillOpacity="0.08" />
          <rect x="40" y="0" width="20" height="40" fill="#8B7355" fillOpacity="0.12" />
          <rect x="60" y="0" width="20" height="40" fill="#D4C5A9" fillOpacity="0.5" />
        </>
      )}

      {type === 'heritage' && (
        <>
          <rect width="80" height="40" fill="#D4C9B8" />
          {[0,8,16,24,32,40].map(y => (
            <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="#071B3B" strokeWidth="0.4" strokeOpacity="0.14" />
          ))}
          {[0,10,20,30,40,50,60,70,80].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="40" stroke="#071B3B" strokeWidth="0.3" strokeOpacity="0.08" />
          ))}
        </>
      )}

      {type === 'project' && (
        <>
          <rect width="80" height="40" fill="#CBD0D8" />
          <line x1="0" y1="0" x2="80" y2="40" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.12" />
          <line x1="0" y1="20" x2="80" y2="60" stroke="#071B3B" strokeWidth="0.5" strokeOpacity="0.08" />
          <text x="40" y="24" textAnchor="middle" fontSize="8.5" fill="#071B3B" fillOpacity="0.28" fontFamily="sans-serif" fontWeight="600">
            CUSTOM
          </text>
        </>
      )}

    </svg>
  )
}
