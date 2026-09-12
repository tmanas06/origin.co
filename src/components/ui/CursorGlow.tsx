'use client'

import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

interface CursorGlowProps {
  className?: string
  size?: number
  color?: string
}

export default function CursorGlow({
  className = '',
  size = 500,
  color = 'rgba(124, 58, 237, 0.12)',
}: CursorGlowProps) {
  const { x, y } = useMousePosition()

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      style={{ zIndex: 1 }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          top: y - size / 2,
          left: x - size / 2,
          mixBlendMode: 'screen',
        }}
        animate={{ top: y - size / 2, left: x - size / 2 }}
        transition={{ type: 'spring', stiffness: 100, damping: 30, mass: 0.5 }}
      />
    </motion.div>
  )
}
