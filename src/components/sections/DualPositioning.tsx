'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'
import { CREATOR_FEATURES, BRAND_FEATURES } from '@/lib/constants'

type Tab = 'creators' | 'brands'

const panelVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
    filter: 'blur(8px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    filter: 'blur(8px)',
    transition: { duration: 0.3 },
  }),
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function DualPositioning() {
  const [activeTab, setActiveTab] = useState<Tab>('creators')
  const [direction, setDirection] = useState(1)

  const switchTab = (tab: Tab) => {
    setDirection(tab === 'brands' ? 1 : -1)
    setActiveTab(tab)
  }

  const features = activeTab === 'creators' ? CREATOR_FEATURES : BRAND_FEATURES

  const panelContent = {
    creators: {
      headline: 'Built for the creator.',
      sub: 'Join a community that puts your growth first — real opportunities, real people, real events.',
      cta: 'Join as a Creator',
      href: 'https://wa.me/919999999999',
    },
    brands: {
      headline: 'Results-driven creator marketing.',
      sub: 'From strategy to content to conversions — we manage every touchpoint so you can focus on growth.',
      cta: 'Start a Campaign',
      href: 'https://wa.me/919999999999?text=Brand+collab',
    },
  }

  return (
    <section id="positioning" className="section-padding relative bg-black">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-purple-400" />
            <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-body">Who We Serve</span>
            <div className="h-px w-8 bg-purple-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-offwhite">
            We Connect. We Create.<br />
            <span className="gradient-text">We Deliver.</span>
          </h2>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-1 flex gap-1">
            {(['creators', 'brands'] as Tab[]).map((tab) => (
              <button
                key={tab}
                id={`tab-${tab}`}
                onClick={() => switchTab(tab)}
                className="relative px-7 py-3 rounded-full text-sm font-body font-semibold tracking-wide uppercase transition-colors duration-200"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
                <span className={`relative z-10 ${activeTab === tab ? 'text-white' : 'text-offwhite/50'}`}>
                  For {tab === 'creators' ? 'Creators' : 'Brands'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={panelVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left: headline + CTA */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-offwhite leading-tight">
                  {panelContent[activeTab].headline}
                </h3>
                <p className="text-offwhite/60 font-body text-base leading-relaxed">
                  {panelContent[activeTab].sub}
                </p>
                <a
                  href={panelContent[activeTab].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cta-${activeTab}`}
                  className="self-start px-7 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide uppercase
                    bg-gradient-to-r from-violet-600 to-purple-500 text-white
                    hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
                >
                  {panelContent[activeTab].cta} →
                </a>
              </div>

              {/* Right: feature cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feat, i) => (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <GlassCard className="p-6 h-full flex flex-col gap-4">
                      <span className="text-3xl text-purple-400">{feat.icon}</span>
                      <h4 className="font-display text-lg font-bold uppercase text-offwhite">
                        {feat.title}
                      </h4>
                      <p className="text-offwhite/50 text-sm font-body leading-relaxed">
                        {feat.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="divider mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" />
    </section>
  )
}
