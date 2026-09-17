'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/constants'

export default function StatsBar() {
  return (
    <section id="stats" className="py-12 sm:py-20 bg-black relative overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] rounded-full bg-violet-600/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`flex flex-col items-center py-6 sm:py-10 text-center relative ${
                i < STATS.length - 1
                  ? 'lg:after:content-[""] lg:after:absolute lg:after:right-0 lg:after:top-1/4 lg:after:bottom-1/4 lg:after:w-px lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-purple-500/30 lg:after:to-transparent'
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black gradient-text-purple leading-none mb-2 sm:mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              <p className="text-xs sm:text-sm text-offwhite/50 font-body tracking-[0.1em] sm:tracking-[0.15em] uppercase px-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
