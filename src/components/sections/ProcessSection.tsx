'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'

// Complete metadata for each process stage
const STEP_DETAILS = [
  {
    ...PROCESS_STEPS[0],
    phase: 'Phase 01',
    deliverable: 'Creative Brief & Goals',
    highlight: 'Vision & Budget',
  },
  {
    ...PROCESS_STEPS[1],
    phase: 'Phase 02',
    deliverable: 'Strategy & Matching',
    highlight: 'Curated Selection',
  },
  {
    ...PROCESS_STEPS[2],
    phase: 'Phase 03',
    deliverable: 'Vetted Creator Roster',
    highlight: 'Authentic Voices',
  },
  {
    ...PROCESS_STEPS[3],
    phase: 'Phase 04',
    deliverable: 'Multi-Platform Rollout',
    highlight: 'Studio-Grade Content',
  },
  {
    ...PROCESS_STEPS[4],
    phase: 'Phase 05',
    deliverable: 'Full-Funnel Analytics',
    highlight: 'Proven ROI & Reach',
  },
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="section-padding bg-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-tr from-violet-600/10 via-purple-600/15 to-transparent blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase text-purple-300 font-body font-semibold">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-offwhite"
          >
            The <span className="gradient-text">Origin</span> Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-offwhite/60 font-body max-w-xl text-base md:text-lg leading-relaxed"
          >
            Five steps. Zero guesswork. From initial brief to measurable results — we own every single stage.
          </motion.p>
        </div>

        {/* 5-Step Process Display — All 5 visible simultaneously */}
        <div className="relative">
          {/* Connecting glowing beam on desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-white/10 rounded-full" aria-hidden="true" />
          <motion.div
            className="hidden lg:block absolute top-12 left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-violet-600 via-purple-400 to-white origin-left rounded-full shadow-[0_0_16px_rgba(168,85,247,0.9)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          {/* Grid of 5 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
            {STEP_DETAILS.map((step, i) => {
              const isSelected = activeStep === i

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveStep(i)}
                  className={`group relative rounded-2xl p-6 flex flex-col justify-between gap-6 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'glass border-purple-400/60 bg-purple-950/25 shadow-[0_0_30px_rgba(168,85,247,0.35)] -translate-y-1'
                      : 'glass border-white/10 hover:border-purple-500/40 hover:bg-white/[0.04] hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Row: Icon + Phase badge */}
                  <div className="flex items-center justify-between">
                    {/* Icon pod */}
                    <div className="relative">
                      {isSelected && (
                        <div className="absolute -inset-1.5 rounded-xl border border-purple-400/60 animate-pulse pointer-events-none" />
                      )}
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-br from-violet-600 to-purple-500 text-white shadow-glow-purple scale-105'
                            : 'bg-white/5 text-purple-300 border border-white/10 group-hover:bg-purple-600/30 group-hover:text-white'
                        }`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Number */}
                    <span className="font-mono text-sm font-bold tracking-wider text-purple-400">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Middle Content */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-purple-300/80 font-semibold">
                      {step.phase}
                    </span>
                    <h3 className="font-display text-2xl font-black uppercase tracking-tight text-offwhite group-hover:text-purple-300 transition-colors">
                      {step.label}
                    </h3>
                    <p className="text-sm font-body text-offwhite/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom: Deliverable Pill */}
                  <div className="pt-4 border-t border-white/5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-body font-medium rounded-full px-2.5 py-1 border transition-colors ${
                        isSelected
                          ? 'bg-purple-500/20 text-purple-200 border-purple-400/40'
                          : 'bg-white/5 text-offwhite/50 border-white/10 group-hover:text-purple-300 group-hover:border-purple-500/30'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {step.deliverable}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Process Flow Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 glass rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-display font-black uppercase text-offwhite tracking-wider text-center">
            <span>Brand</span>
            <span className="text-purple-400">&rarr;</span>
            <span>Origin</span>
            <span className="text-purple-400">&rarr;</span>
            <span>Creator</span>
            <span className="text-purple-400">&rarr;</span>
            <span>Content</span>
            <span className="text-purple-400">&rarr;</span>
            <span className="gradient-text">Results</span>
          </div>

          <a
            href="#join"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-xs font-body font-bold uppercase tracking-wider bg-white/5 hover:bg-purple-600/30 border border-purple-500/40 text-offwhite hover:text-purple-300 transition-all duration-300"
          >
            Start Your Campaign &rarr;
          </a>
        </motion.div>
      </div>

      <div className="divider mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" />
    </section>
  )
}
