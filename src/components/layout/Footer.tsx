'use client'

import { useState } from 'react'
import { NAV_LINKS, WHATSAPP_LINK, INSTAGRAM_LINK } from '@/lib/constants'
import OriginLogo from '@/components/ui/OriginLogo'

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a href="#hero" className="group w-fit">
              <OriginLogo size={32} showTagline={true} />
            </a>
            <p className="text-offwhite/40 text-sm font-body leading-relaxed max-w-xs">
              Mumbai&apos;s creator community and brand-creator collaboration agency.
              Build. Connect. Grow.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-offwhite/40 font-body">Mumbai, India</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-offwhite/30 font-body tracking-[0.2em] uppercase mb-2">Navigate</p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body text-offwhite/50 hover:text-purple-400 transition-colors duration-200 w-fit"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-offwhite/50 hover:text-purple-400 transition-colors duration-200 w-fit"
            >
              WhatsApp Community ↗
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-offwhite/30 font-body tracking-[0.2em] uppercase mb-2">Stay in the loop</p>
            <p className="text-sm text-offwhite/50 font-body leading-relaxed">
              Get updates on events, creator spots, and brand campaigns. No spam.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  id="footer-newsletter"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm font-body text-offwhite placeholder-offwhite/30
                    focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                id="footer-newsletter-submit"
                className="py-3 rounded-full text-sm font-body font-semibold uppercase tracking-wide
                  bg-gradient-to-r from-violet-600 to-purple-500 text-white
                  hover:shadow-glow-violet transition-all duration-300 hover:scale-[1.02]"
              >
                {submitted ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-offwhite/30 font-body">
            © 2026 Origin.Co · All rights reserved · Mumbai, India
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-instagram"
              aria-label="Origin on Instagram"
              className="group w-10 h-10 rounded-full glass flex items-center justify-center text-offwhite/50 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <InstagramIcon className="w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp"
              aria-label="Origin WhatsApp Community"
              className="group w-10 h-10 rounded-full glass flex items-center justify-center text-offwhite/50 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" />
            </a>
          </div>

          <p className="text-xs text-offwhite/20 font-body">
            Crafted with purpose in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  )
}
