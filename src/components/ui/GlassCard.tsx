'use client'

import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverGlow?: boolean
  onClick?: () => void
}

export default function GlassCard({
  children,
  className = '',
  hoverGlow = true,
  onClick,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl transition-all duration-300 ${
        hoverGlow ? 'hover:shadow-glow-purple cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
