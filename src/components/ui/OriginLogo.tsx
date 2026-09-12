'use client'

interface OriginLogoProps {
  size?: number
  showTagline?: boolean
  className?: string
}

export default function OriginLogo({
  size = 36,
  showTagline = false,
  className = '',
}: OriginLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Origin Ring Icon: 75% solid white ring + 25% purple top-right quadrant */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="originPurpleGrad" x1="20" y1="7" x2="33" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* 270° White Body (from 3 o'clock around bottom and left to 12 o'clock) */}
        <path
          d="M 33 20 A 13 13 0 1 1 20 7"
          stroke="#FFFFFF"
          strokeWidth="6.5"
          strokeLinecap="butt"
        />

        {/* 90° Purple Quadrant (from 12 o'clock to 3 o'clock) */}
        <path
          d="M 20 7 A 13 13 0 0 1 33 20"
          stroke="url(#originPurpleGrad)"
          strokeWidth="6.5"
          strokeLinecap="butt"
        />
      </svg>

      {/* Brand Typography matching official poster */}
      <div className="flex flex-col justify-center">
        <span className="font-display text-2xl font-black lowercase tracking-tight text-white leading-none">
          origin<span className="text-purple-400">.</span>
        </span>
        {showTagline && (
          <span className="text-[9px] font-body tracking-[0.25em] uppercase text-offwhite/40 mt-1">
            Community • Creative • Connection
          </span>
        )}
      </div>
    </div>
  )
}
