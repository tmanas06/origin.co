'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { EVENTS } from '@/lib/constants'

const tagColors: Record<string, string> = {
  Workshop: 'bg-violet-600/30 text-violet-300 border-violet-500/30',
  Cycling: 'bg-blue-600/30 text-blue-300 border-blue-500/30',
  Sports: 'bg-purple-600/30 text-purple-300 border-purple-500/30',
  Networking: 'bg-emerald-600/30 text-emerald-300 border-emerald-500/30',
}

export default function EventsSection() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section ref={ref} id="events" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-purple-400" />
              <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-body">IRL Events</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-offwhite">
              More Than Events.<br />
              <span className="gradient-text">We Build Connections.</span>
            </h2>
          </div>
          <p className="text-offwhite/50 font-body max-w-sm text-sm leading-relaxed">
            From art workshops to night cycling rides to padel showdowns — Origin events bring the Mumbai creator scene to life.
          </p>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="scroll-x-container -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16">
          <div className="flex gap-5 pb-4" style={{ width: 'max-content' }}>
            {EVENTS.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="divider mt-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16" />
    </section>
  )
}

function EventCard({ event, index }: { event: typeof EVENTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className="relative flex-shrink-0 w-72 md:w-80 h-96 rounded-2xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image */}
      <Image
        src={event.image}
        alt={event.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 288px, 320px"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Purple hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top: Tag */}
      <div className="absolute top-4 left-4">
        <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${tagColors[event.tag] || 'bg-white/10 text-white/60 border-white/20'}`}>
          {event.tag}
        </span>
      </div>

      {/* Bottom: Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-display text-xl font-black uppercase text-offwhite leading-tight mb-2">
          {event.title}
        </h3>
        <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <p className="text-sm text-purple-300 font-body">{event.date}</p>
          <p className="text-xs text-offwhite/60 font-body flex items-center gap-1">
            <span>📍</span> {event.venue}
          </p>
        </div>
      </div>

      {/* Corner glow on hover */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/0 group-hover:ring-purple-500/40 transition-all duration-300" />
    </motion.div>
  )
}
