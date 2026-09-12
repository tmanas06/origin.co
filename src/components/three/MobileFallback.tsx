'use client'

export default function MobileFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 400 400"
        className="w-72 h-72 sm:w-80 sm:h-80 animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter:
            'drop-shadow(0 0 25px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 60px rgba(124, 58, 237, 0.2))',
        }}
      >
        <defs>
          {/* Amethyst / Purple Sapphire Gradient */}
          <linearGradient id="purpleGemGrad" x1="200" y1="60" x2="340" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#4C1D95" />
          </linearGradient>

          {/* Platinum Rim Gradient */}
          <linearGradient id="platinumRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Pavé Diamond Pattern */}
          <radialGradient id="diamondSparkle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </radialGradient>

          {/* Star Glint Filter */}
          <filter id="starGlint" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Polished Platinum Rim */}
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="url(#platinumRim)"
          strokeWidth="6"
        />

        {/* ─── 270° WHITE DIAMOND PAVÉ TRACK ─── */}
        <path
          d="M 335 200 A 135 135 0 1 1 200 65"
          fill="none"
          stroke="url(#diamondSparkle)"
          strokeWidth="44"
          strokeLinecap="butt"
          strokeDasharray="4 8"
        />
        <path
          d="M 335 200 A 135 135 0 1 1 200 65"
          fill="none"
          stroke="#F8FAFC"
          strokeWidth="44"
          strokeLinecap="butt"
          opacity="0.3"
        />

        {/* ─── 90° PURPLE AMETHYST GEMSTONE TRACK ─── */}
        <path
          d="M 200 65 A 135 135 0 0 1 335 200"
          fill="none"
          stroke="url(#purpleGemGrad)"
          strokeWidth="44"
          strokeLinecap="butt"
        />

        {/* Inner Polished Platinum Rim */}
        <circle
          cx="200"
          cy="200"
          r="110"
          fill="none"
          stroke="url(#platinumRim)"
          strokeWidth="6"
        />

        {/* Center Hole Cutout */}
        <circle cx="200" cy="200" r="107" fill="#0A0A0A" />

        {/* Radial Divider at 12 o'clock */}
        <line x1="200" y1="43" x2="200" y2="87" stroke="#FFFFFF" strokeWidth="4" />

        {/* Radial Divider at 3 o'clock */}
        <line x1="313" y1="200" x2="357" y2="200" stroke="#FFFFFF" strokeWidth="4" />

        {/* 4-Point Star Glints */}
        {/* Star 1 on Amethyst */}
        <g transform="translate(270, 115)" filter="url(#starGlint)">
          <path d="M 0 -18 Q 0 0 18 0 Q 0 0 0 18 Q 0 0 -18 0 Q 0 0 0 -18 Z" fill="#E9D5FF" />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        </g>

        {/* Star 2 on White Diamonds */}
        <g transform="translate(90, 150)" filter="url(#starGlint)">
          <path d="M 0 -14 Q 0 0 14 0 Q 0 0 0 14 Q 0 0 -14 0 Q 0 0 0 -14 Z" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
        </g>

        {/* Star 3 on Bottom Diamonds */}
        <g transform="translate(230, 335)" filter="url(#starGlint)">
          <path d="M 0 -12 Q 0 0 12 0 Q 0 0 0 12 Q 0 0 -12 0 Q 0 0 0 -12 Z" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  )
}
