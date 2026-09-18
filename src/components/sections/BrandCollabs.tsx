'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Marquee from '@/components/ui/Marquee'
import GlassCard from '@/components/ui/GlassCard'
import { BRANDS, CASE_STUDIES } from '@/lib/constants'

// Brand logo as styled text (since SVGs are placeholders)
function BrandLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 py-2 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default">
      <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-widest text-offwhite group-hover:text-purple-300 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

const INITIAL_CARD_COUNT = 4

export default function BrandCollabs() {
  const [showAll, setShowAll] = useState(false)

  const mid = Math.ceil(BRANDS.length / 2)
  const row1 = BRANDS.slice(0, mid).map((b) => <BrandLogo key={b.name} name={b.name} />)
  const row2 = BRANDS.slice(mid).map((b) => <BrandLogo key={b.name} name={b.name} />)

  const visibleCaseStudies = showAll ? CASE_STUDIES : CASE_STUDIES.slice(0, INITIAL_CARD_COUNT)

  const handleToggle = () => {
    if (showAll) {
      const el = document.getElementById('brand-case-studies')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setShowAll((prev) => !prev)
  }

  return (
    <section id="brands" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-purple-400" />
            <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-body">Brand Partners</span>
            <div className="h-px w-8 bg-purple-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-offwhite">
            Brands That <span className="gradient-text">Trust Origin</span>
          </h2>
          <p className="text-offwhite/50 font-body max-w-lg text-base">
            From fitness to lifestyle to wellness — we&apos;ve delivered creator campaigns that move the needle.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mb-20">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="py-6 border-y border-offwhite/8 flex flex-col gap-3 sm:gap-4">
            <Marquee items={row1} speed={32} />
            <Marquee items={row2} speed={36} reverse />
          </div>
        </div>

        {/* Case Studies */}
        <div id="brand-case-studies" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-purple-300 font-mono">
                Featured Campaigns ({visibleCaseStudies.length} of {CASE_STUDIES.length})
              </span>
            </div>
            <button
              onClick={handleToggle}
              className="text-xs uppercase tracking-widest text-offwhite/60 hover:text-purple-300 transition-colors font-mono underline underline-offset-4 hidden sm:block"
            >
              {showAll ? 'Collapse to Top 4' : `View All (${CASE_STUDIES.length})`}
            </button>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleCaseStudies.map((cs, i) => (
                <motion.div
                  key={cs.brand}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: i < INITIAL_CARD_COUNT ? i * 0.08 : (i - INITIAL_CARD_COUNT) * 0.03 }}
                >
                  <GlassCard className="p-8 flex flex-col gap-6 h-full hover:border-purple-500/40 hover:shadow-purple-950/20 transition-all duration-300">
                    {/* Brand name */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs text-purple-400 font-body tracking-[0.2em] uppercase">Case Study</span>
                        <h3 className="font-display text-3xl font-black uppercase text-offwhite mt-1">{cs.brand}</h3>
                      </div>
                      {/* Stat callout */}
                      <div className="text-right">
                        <div className="font-display text-4xl font-black gradient-text-purple">{cs.stat}</div>
                        <div className="text-xs text-offwhite/50 font-body tracking-wide uppercase">{cs.statLabel}</div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-violet-500/30 to-transparent" />

                    {/* Description */}
                    <p className="text-offwhite/60 font-body text-sm leading-relaxed flex-1">
                      {cs.description}
                    </p>

                    {/* Creators badge */}
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {Array.from({ length: Math.min(cs.creators, 5) }).map((_, j) => (
                          <div
                            key={j}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 border-2 border-black flex items-center justify-center text-xs text-white font-bold"
                          >
                            {String.fromCharCode(65 + j)}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-offwhite/50 font-body">{cs.creators} creators activated</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show More / Show Less Button */}
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleToggle}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-purple-500/30 hover:border-purple-400 text-offwhite hover:text-white font-display text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-purple-950/40 hover:shadow-purple-700/30"
            >
              <span>
                {showAll ? 'Show Less' : `Show More (${CASE_STUDIES.length - INITIAL_CARD_COUNT} More Brands)`}
              </span>
              <motion.svg
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="divider mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" />
    </section>
  )
}
