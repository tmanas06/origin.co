'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setVisible(false)
      else setVisible(true)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Mouse outline */}
      <div className="relative w-6 h-10 rounded-full border border-offwhite/30 flex items-start justify-center pt-2">
        <motion.div
          className="w-1 h-2 rounded-full bg-purple-400"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <motion.p
        className="text-xs tracking-[0.25em] uppercase text-offwhite/40 font-body"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.p>
    </motion.div>
  )
}
