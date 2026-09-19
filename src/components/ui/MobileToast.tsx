'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { INSTAGRAM_LINK } from '@/lib/constants'
import OriginLogo from './OriginLogo'

export default function MobileToast() {
  const [showToast, setShowToast] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // 1. Dynamic viewport fix for iOS/Android dynamic address bars
  useEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    updateViewportHeight()
    window.addEventListener('resize', updateViewportHeight, { passive: true })
    window.addEventListener('orientationchange', updateViewportHeight, { passive: true })

    return () => {
      window.removeEventListener('resize', updateViewportHeight)
      window.removeEventListener('orientationchange', updateViewportHeight)
    }
  }, [])

  // 2. Show floating mobile dock after user scrolls past hero (approx 280px)
  useEffect(() => {
    if (dismissed) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Show when scrolled past hero, hide if at top
      if (currentScrollY > 280) {
        setShowToast(true)
      } else {
        setShowToast(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed, lastScrollY])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {showToast && (
        <motion.aside
          aria-label="Mobile quick actions"
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-3 right-3 z-40 md:hidden"
        >
          <div className="glass rounded-full px-4 py-2.5 border border-white/15 bg-black/80 backdrop-blur-2xl shadow-2xl flex items-center justify-between gap-3">
            {/* Brand + Status indicator */}
            <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
              <OriginLogo size={22} showTagline={false} />
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-offwhite/80 font-bold">
                  Origin
                </span>
              </div>
            </a>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <a
                href="#events"
                className="px-3 py-1.5 rounded-full text-xs font-body font-medium text-offwhite/70 hover:text-white bg-white/5 border border-white/10 transition-colors"
              >
                Events
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-toast-cta"
                className="px-4 py-1.5 rounded-full font-body font-semibold text-xs tracking-wide uppercase
                  bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-glow-violet flex items-center gap-1"
              >
                <span>Join</span>
                <span className="text-white/80">↗</span>
              </a>

              {/* Close / Dismiss */}
              <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss quick actions"
                className="w-6 h-6 rounded-full flex items-center justify-center text-white/40 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
