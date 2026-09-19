'use client'

import { motion } from 'framer-motion'
import CursorGlow from '@/components/ui/CursorGlow'
import { INSTAGRAM_LINK } from '@/lib/constants'

export default function JoinCTA() {
  return (
    <section
      id="join"
      className="relative py-32 md:py-40 bg-black overflow-hidden"
    >
      {/* Cursor glow */}
      <CursorGlow size={700} color="rgba(124, 58, 237, 0.12)" />

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      {/* Concentric ring decorations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-violet-500/5" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-violet-500/3" />
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-violet-500/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-10">
        {/* Label */}
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-purple-400" />
          <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-body">Join Origin</span>
          <div className="h-px w-8 bg-purple-400" />
        </div>

        {/* Headline */}
        <motion.h2
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-offwhite leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to find
          <br />
          <span className="gradient-text">Your Origin?</span>
        </motion.h2>

        <motion.p
          className="text-offwhite/50 font-body text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Whether you&apos;re a creator looking for your tribe and your next big brand deal — or a brand
          that wants real connections with real audiences — Origin is where it starts.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="join-creator-cta"
            className="relative group px-10 py-5 rounded-full font-body font-bold text-base tracking-wide uppercase
              bg-gradient-to-r from-violet-600 to-purple-500 text-white
              hover:shadow-glow-lg transition-all duration-300 hover:scale-105 text-center overflow-hidden"
          >
            <span className="relative z-10">Join as a Creator</span>
            {/* Shine sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="join-brand-cta"
            className="group px-10 py-5 rounded-full font-body font-bold text-base tracking-wide uppercase
              border border-offwhite/20 text-offwhite/80 relative overflow-hidden
              hover:border-purple-400/60 hover:text-white hover:shadow-glow-violet
              transition-all duration-300 hover:scale-105 text-center"
          >
            <span className="relative z-10">Partner as a Brand</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 to-purple-500/0 group-hover:from-violet-600/10 group-hover:to-purple-500/10 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Micro tagline */}
        <motion.p
          className="text-offwhite/25 text-xs tracking-[0.25em] uppercase font-body mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Mumbai, India · Instagram community · No algorithm required
        </motion.p>
      </div>
    </section>
  )
}
