'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function FounderSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Parallax: image moves slightly slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} id="founder" className="section-padding bg-black relative overflow-hidden">
      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-600/6 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-8 bg-purple-400" />
          <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-body">The Founder</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Parallax Image */}
          <div className="relative h-[520px] md:h-[620px] rounded-3xl overflow-hidden order-2 lg:order-1 border border-white/10 shadow-2xl shadow-purple-950/30">
            {/* Subtle violet ambient glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-transparent to-violet-500/10 blur-xl pointer-events-none" />

            <motion.div className="absolute inset-[-4%] scale-105" style={{ y: imageY }}>
              <Image
                src="/images/founder-hd.jpg"
                alt="Piyush Mahadik — Founder of Origin"
                fill
                unoptimized
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

            {/* Name badge */}
            <div className="absolute bottom-6 left-6 z-20">
              <div className="glass rounded-2xl px-5 py-3.5 border border-white/10 backdrop-blur-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <p className="font-display text-lg font-black uppercase text-offwhite tracking-wide">Piyush Mahadik</p>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/25 text-purple-300 border border-purple-500/40">
                    Founder
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-purple-400/90 font-body font-medium">Building the foundation</span>
                  <span className="text-white/30 text-xs">•</span>
                  <a
                    href="https://instagram.com/piyuush_16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple-300 font-body hover:text-white transition-colors underline-offset-2 hover:underline"
                  >
                    @piyuush_16 ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="flex flex-col gap-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase font-mono mb-2 block">
                Visionary &amp; Builder
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-offwhite leading-tight">
                Built with vision.{' '}
                <span className="gradient-text">Driven by purpose.</span>
              </h2>
            </motion.div>

            {/* Pull quote from official brand slide */}
            <motion.blockquote
              className="border-l-2 border-purple-500 pl-6 py-1 bg-purple-950/10 rounded-r-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-offwhite/90 font-body text-lg italic leading-relaxed">
                &ldquo;Different roles. Same passion. One journey. This is just the beginning. This is Origin.&rdquo;
              </p>
              <footer className="mt-2 text-xs text-purple-400 font-body font-semibold uppercase tracking-wider not-italic">
                — Piyush Mahadik, Founder
              </footer>
            </motion.blockquote>

            <motion.div
              className="flex flex-col gap-4 text-offwhite/70 font-body text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p>
                Piyush Mahadik founded Origin with a core conviction: authentic creator ecosystems produce
                transformative storytelling, higher engagement, and sustainable brand impact.
              </p>
              <p>
                Turning ideas into impact, one step at a time — Origin bridges top-tier digital talent with
                forward-thinking brands through strategy, community trust, and end-to-end execution.
              </p>
            </motion.div>

            {/* Core Pillars from official graphic */}
            <motion.div
              className="grid grid-cols-2 gap-3 pt-2"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-xs font-bold uppercase tracking-wider text-purple-300 font-body">Vision &amp; Strategy</p>
                <p className="text-xs text-white/50 font-body mt-1 leading-normal">Turning bold vision into actionable, scalable strategy.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-xs font-bold uppercase tracking-wider text-purple-300 font-body">Ideas into Impact</p>
                <p className="text-xs text-white/50 font-body mt-1 leading-normal">Ideas are just the start — measurable impact is the goal.</p>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="https://instagram.com/piyuush_16"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full glass text-sm font-body font-medium text-offwhite hover:text-purple-300 hover:border-purple-500/50 transition-all duration-200 flex items-center gap-2"
              >
                <span>@piyuush_16</span>
                <span className="text-purple-400">↗</span>
              </a>
              <a
                href="https://instagram.com/origincommune"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full glass text-sm font-body font-medium text-offwhite/70 hover:text-purple-300 hover:border-purple-500/50 transition-all duration-200 flex items-center gap-2"
              >
                <span>@origincommune</span>
                <span className="text-purple-400">↗</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="divider mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" />
    </section>
  )
}
