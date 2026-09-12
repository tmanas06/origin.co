'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(hover: none)')
    setIsMobile(mql.matches)
    if (mql.matches) return

    setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      )
    }

    window.addEventListener('mouseover', handleMouseOver)
    return () => window.removeEventListener('mouseover', handleMouseOver)
  }, [])

  if (isMobile || !isVisible) return null

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="custom-cursor"
        style={{
          left: x,
          top: y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
        animate={{ left: x, top: y }}
        transition={{ type: 'spring', stiffness: 800, damping: 50 }}
      />
      {/* Trailing ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{ left: x, top: y }}
        animate={{
          left: x,
          top: y,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      />
    </>
  )
}
