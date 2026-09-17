'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FOUNDERS } from '@/lib/constants'

function FounderBlock({
  founder,
  isEven,
}: {
  founder: (typeof FOUNDERS)[number]
  isEven: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Parallax: image moves slightly slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      {/* Image Column */}
      <div
        className={`relative h-[380px] sm:h-[460px] md:h-[540px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-950/30 ${
          isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
        }`}
      >
        {/* Subtle violet ambient glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-transparent to-violet-500/10 blur-xl pointer-events-none" />

        <motion.div className="absolute inset-[-4%] scale-105" style={{ y: imageY }}>
          <Image
            src={founder.image}
            alt={founder.imageAlt}
            fill
            unoptimized
            className={`object-cover ${
              founder.id === 'sonakshi' ? 'object-[center_35%]' : 'object-top'
            }`}
            priority={founder.id === 'piyush'}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />

        {/* Name badge */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 z-20">
          <div className="glass rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-2">
              <p className="font-display text-base sm:text-lg font-black uppercase text-offwhite tracking-wide">
                {founder.name}
              </p>
              <span
                className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${founder.badgeClass}`}
              >
                {founder.roleBadge}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-purple-400/90 font-body font-medium">
                {founder.tagline}
              </span>
              <span className="text-white/30 text-xs">•</span>
              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-purple-300 font-body hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                {founder.handle} ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Column */}
      <div
        className={`flex flex-col gap-6 sm:gap-7 ${
          isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase font-mono mb-2 block">
            {founder.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-offwhite leading-tight">
            {founder.headlinePrefix}
            <span className="gradient-text">{founder.headlineGradient}</span>
          </h2>
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          className="border-l-2 border-purple-500 pl-4 sm:pl-6 py-1 bg-purple-950/10 rounded-r-2xl"
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-offwhite/90 font-body text-base sm:text-lg italic leading-relaxed">
            &ldquo;{founder.quote}&rdquo;
          </p>
          <footer className="mt-2 text-xs text-purple-400 font-body font-semibold uppercase tracking-wider not-italic">
            {founder.quoteAuthor}
          </footer>
        </motion.blockquote>

        {/* Bio paragraphs */}
        <motion.div
          className="flex flex-col gap-3.5 sm:gap-4 text-offwhite/70 font-body text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {founder.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {founder.pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-purple-300 font-body">
                {pillar.title}
              </p>
              <p className="text-xs text-white/50 font-body mt-1 leading-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-3 pt-2 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {founder.socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 rounded-full glass text-sm font-body font-medium transition-all duration-200 flex items-center gap-2 ${
                social.primary
                  ? 'text-offwhite hover:text-purple-300 hover:border-purple-500/50'
                  : 'text-offwhite/70 hover:text-purple-300 hover:border-purple-500/50'
              }`}
            >
              <span>{social.label}</span>
              <span className="text-purple-400">↗</span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-black relative overflow-hidden">
      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-600/6 blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-violet-500/5 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-8 bg-purple-400" />
          <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-body">
            The Founders
          </span>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {FOUNDERS.map((founder, idx) => (
            <div key={founder.id}>
              <FounderBlock founder={founder} isEven={idx % 2 === 0} />
              {idx < FOUNDERS.length - 1 && (
                <div className="mt-24 lg:mt-32 relative flex items-center justify-center">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
                  <div className="absolute px-4 bg-black text-[11px] font-mono tracking-widest uppercase text-purple-400/60 border border-white/5 rounded-full py-1">
                    Co-Founding Team
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="divider mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" />
    </section>
  )
}

