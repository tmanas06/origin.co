'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CursorGlow from '@/components/ui/CursorGlow'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import MobileFallback from '@/components/three/MobileFallback'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

const TorusScene = dynamic(() => import('@/components/three/TorusScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-purple-500/40 border-t-purple-400 animate-spin" />
    </div>
  ),
})

const headline = ["Not Just", "A Community.", "It's Our Origin."]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
}

const wordVariants = {
  hidden: { y: 60, opacity: 0, filter: 'blur(12px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mql = window.matchMedia('(max-width: 767px)')
    setIsMobile(mql.matches)
    mql.addEventListener('change', (e) => setIsMobile(e.matches))
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Cursor glow — desktop only */}
      {!isMobile && <CursorGlow size={600} color="rgba(124, 58, 237, 0.1)" />}

      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/8 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-28 pb-16">
        {/* LEFT — Text */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-px w-8 bg-purple-400" />
            <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-body">
              Mumbai, India · Est. 2026
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-display font-black uppercase tracking-tight flex flex-col gap-1.5 select-none">
              <motion.span
                variants={wordVariants}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-offwhite leading-[0.92]"
              >
                Not Just A
              </motion.span>
              <motion.span
                variants={wordVariants}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-offwhite leading-[0.92]"
              >
                Community.
              </motion.span>
              <motion.span
                variants={wordVariants}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl gradient-text leading-[0.92] mt-1"
              >
                It&apos;s Our Origin.
              </motion.span>
            </h1>
          </motion.div>

          {/* Sub copy */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-offwhite/60 text-base sm:text-lg font-body max-w-lg leading-relaxed"
            style={{ transitionDelay: '0.8s' }}
          >
            Build. Connect. Grow. We bring creators and brands together to make
            content that actually moves people — on-screen and off.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-creator-cta"
              className="relative px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide uppercase
                bg-gradient-to-r from-violet-600 to-purple-500 text-white
                hover:shadow-glow-lg transition-all duration-300 hover:scale-105 text-center"
            >
              Join as a Creator
            </a>
            <a
              href="#brands"
              id="hero-brand-cta"
              className="px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide uppercase
                border border-offwhite/20 text-offwhite/80
                hover:border-purple-400 hover:text-purple-400 hover:shadow-glow-violet
                transition-all duration-300 text-center"
            >
              Partner as a Brand
            </a>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            className="grid grid-cols-3 gap-3 sm:gap-6 pt-2 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { value: '200+', label: 'Creators' },
              { value: '30+', label: 'Events' },
              { value: '15+', label: 'Brand Partners' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-display gradient-text-purple">{s.value}</span>
                <span className="text-[11px] sm:text-xs text-offwhite/40 font-body tracking-wider uppercase">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 3D Torus */}
        <motion.div
          className="lg:col-span-5 relative w-full flex items-center justify-center my-4 lg:my-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[480px] aspect-square flex items-center justify-center">
            {mounted && (
              <ErrorBoundary fallback={<MobileFallback />}>
                <TorusScene />
              </ErrorBoundary>
            )}
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
