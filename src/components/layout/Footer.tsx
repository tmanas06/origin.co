'use client'

import { useState } from 'react'
import { NAV_LINKS, WHATSAPP_LINK, INSTAGRAM_LINK, LINKEDIN_LINK } from '@/lib/constants'
import OriginLogo from '@/components/ui/OriginLogo'

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
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-offwhite/50 hover:text-purple-400 transition-colors duration-200 w-fit"
            >
              Instagram Community ↗
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
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-instagram"
              aria-label="Origin on Instagram"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-offwhite/50 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200 text-sm"
            >
              IG
            </a>
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              aria-label="Origin on LinkedIn"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-offwhite/50 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200 text-sm"
            >
              LI
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp"
              aria-label="Origin WhatsApp Community"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-offwhite/50 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 text-sm"
            >
              WA
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
