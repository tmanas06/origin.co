'use client'

interface MarqueeProps {
  items: React.ReactNode[]
  speed?: number
  className?: string
}

import React from 'react'

export default function Marquee({ items, speed = 30, className = '' }: MarqueeProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex-shrink-0 px-8 flex items-center justify-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
