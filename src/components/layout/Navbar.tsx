'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS, WHATSAPP_LINK } from '@/lib/constants'
import OriginLogo from '@/components/ui/OriginLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const win = window as any
        if (win.lenis && typeof win.lenis.scrollTo === 'function') {
          win.lenis.scrollTo(target, { duration: 1.2, offset: -20 })
        } else {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
      setMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-black/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" id="nav-logo" className="group">
          <OriginLogo size={32} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-sm font-body font-medium text-offwhite/60 hover:text-offwhite
                rounded-full hover:bg-white/5 transition-all duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta"
            className="px-5 py-2.5 rounded-full font-body font-semibold text-sm tracking-wide uppercase
              bg-gradient-to-r from-violet-600 to-purple-500 text-white
              hover:shadow-glow-violet transition-all duration-300 hover:scale-105"
          >
            Join Community
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          id="nav-mobile-toggle"
          aria-label="Toggle mobile menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            className="block w-6 h-0.5 bg-offwhite"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-offwhite"
            animate={{ opacity: menuOpen ? 0 : 1 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-offwhite"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <motion.div
        className="md:hidden overflow-hidden"
        animate={{ height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <div className="bg-black/90 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-3 text-base font-body font-medium text-offwhite/70 hover:text-purple-400 border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center py-3.5 rounded-full font-body font-semibold text-sm uppercase
              bg-gradient-to-r from-violet-600 to-purple-500 text-white"
          >
            Join Community
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}
