'use client'

import { motion } from 'framer-motion'
import Marquee from '@/components/ui/Marquee'
import GlassCard from '@/components/ui/GlassCard'
import { BRANDS, CASE_STUDIES } from '@/lib/constants'

// Brand logo as styled text (since SVGs are placeholders)
function BrandLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-6 py-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
      <span className="font-display text-2xl font-black uppercase tracking-widest text-offwhite whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function BrandCollabs() {
  const logoItems = BRANDS.map((b) => <BrandLogo key={b.name} name={b.name} />)

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
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="py-6 border-y border-offwhite/8">
            <Marquee items={logoItems} speed={25} />
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <GlassCard className="p-8 flex flex-col gap-6 h-full">
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
        </div>
      </div>

      <div className="divider mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" />
    </section>
  )
}
