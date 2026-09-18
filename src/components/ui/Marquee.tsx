'use client'

interface MarqueeProps {
  items: React.ReactNode[]
  speed?: number
  className?: string
  reverse?: boolean
}

import React from 'react'

export default function Marquee({
  items,
  speed = 35,
  className = '',
  reverse = false,
}: MarqueeProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={reverse ? 'marquee-track-reverse' : 'marquee-track'}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex-shrink-0 px-4 sm:px-6 flex items-center justify-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
