'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '@/lib/constants'

export interface CommunityDropdownProps {
  align?: 'left' | 'right'
  direction?: 'down' | 'up'
  buttonText?: string
  buttonClassName?: string
  id?: string
  mobile?: boolean
  variant?: 'nav' | 'toast' | 'hero'
  onSelect?: () => void
}

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 ${className}`}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function ArrowUpRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${className}`}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M10 7h7v7" />
    </svg>
  )
}

export default function CommunityDropdown({
  align = 'right',
  direction = 'down',
  buttonText = 'Join Community',
  buttonClassName,
  id = 'nav-community',
  mobile = false,
  variant = 'nav',
  onSelect,
}: CommunityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mobile) return

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, mobile])

  // Mobile Accordion View
  if (mobile) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          id={`${id}-mobile-toggle`}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className="w-full flex items-center justify-between py-3.5 px-5 rounded-2xl font-body font-semibold text-sm uppercase
            bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-glow-violet transition-all duration-200 active:scale-[0.98]"
        >
          <span>{buttonText}</span>
          <ChevronIcon className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden flex flex-col gap-2 pt-1 pb-2"
            >
              {/* WhatsApp Community */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsOpen(false)
                  onSelect?.()
                }}
                className="flex items-center justify-between gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 active:bg-emerald-500/20 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <WhatsAppIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-body font-semibold text-sm text-offwhite block truncate">WhatsApp Community</span>
                    <p className="text-xs text-offwhite/50 font-body truncate">Creator group chats & instant drops</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <ArrowUpRightIcon />
                </div>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsOpen(false)
                  onSelect?.()
                }}
                className="flex items-center justify-between gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 active:bg-purple-500/20 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 flex-shrink-0">
                    <InstagramIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-body font-semibold text-sm text-offwhite block truncate">Instagram</span>
                    <p className="text-xs text-offwhite/50 font-body truncate">@origincommune · Stories & reels</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <ArrowUpRightIcon />
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Determine button styles based on variant
  const getButtonClass = () => {
    if (buttonClassName) return buttonClassName

    if (variant === 'toast') {
      return 'px-4 py-1.5 rounded-full font-body font-semibold text-xs tracking-wide uppercase bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-glow-violet flex items-center gap-1.5 transition-all duration-200 hover:scale-105 active:scale-95 select-none'
    }

    // Default Nav Variant
    return 'px-5 py-2.5 rounded-full font-body font-semibold text-sm tracking-wide uppercase bg-gradient-to-r from-violet-600 to-purple-500 text-white hover:shadow-glow-violet transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 select-none cursor-pointer'
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        id={id}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={getButtonClass()}
      >
        <span>{buttonText}</span>
        <ChevronIcon
          className={`transition-transform duration-300 ${
            variant === 'toast' ? 'w-3 h-3' : 'w-3.5 h-3.5'
          } ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${id}-menu`}
            role="menu"
            aria-label="Community Links"
            initial={{ opacity: 0, y: direction === 'up' ? -8 : 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: direction === 'up' ? -8 : 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute z-50 ${
              direction === 'up' ? 'bottom-full mb-3' : 'top-full mt-3'
            } ${
              align === 'left' ? 'left-0' : 'right-0'
            } w-76 sm:w-80 p-2.5 rounded-2xl bg-[#0b0b14]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(124,58,237,0.2)] ring-1 ring-white/10`}
          >
            {/* Header */}
            <div className="px-3 py-2 border-b border-white/10 mb-2 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-offwhite/50">
                Join Community
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-medium tracking-wider uppercase">
                  Live
                </span>
              </div>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-1.5">
              {/* WhatsApp Option */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false)
                  onSelect?.()
                }}
                className="group relative flex items-center justify-between gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-emerald-500/10 hover:border-emerald-500/30 border border-transparent"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:scale-105 transition-all duration-200 flex-shrink-0">
                    <WhatsAppIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-body font-semibold text-sm text-offwhite group-hover:text-white transition-colors truncate">
                      WhatsApp Community
                    </span>
                    <p className="text-xs font-body text-offwhite/50 group-hover:text-offwhite/75 transition-colors mt-0.5 truncate">
                      Creator group chats & instant drops
                    </p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400/60 group-hover:text-emerald-400 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/30 transition-all duration-200 flex-shrink-0">
                  <ArrowUpRightIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Instagram Option */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false)
                  onSelect?.()
                }}
                className="group relative flex items-center justify-between gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-purple-500/10 hover:border-purple-500/30 border border-transparent"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:from-amber-500 group-hover:via-rose-500 group-hover:to-purple-500 group-hover:text-white group-hover:scale-105 transition-all duration-200 flex-shrink-0">
                    <InstagramIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-body font-semibold text-sm text-offwhite group-hover:text-white transition-colors truncate">
                      Instagram
                    </span>
                    <p className="text-xs font-body text-offwhite/50 group-hover:text-offwhite/75 transition-colors mt-0.5 truncate">
                      @origincommune · Stories, reels & updates
                    </p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-400/60 group-hover:text-purple-400 group-hover:bg-purple-500/15 group-hover:border-purple-500/30 transition-all duration-200 flex-shrink-0">
                  <ArrowUpRightIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>

            {/* Footer note */}
            <div className="mt-2 pt-2 border-t border-white/5 px-3 py-1 flex items-center justify-between text-[11px] text-offwhite/30 font-body">
              <span>50K+ Mumbai Creators</span>
              <span className="font-mono text-purple-400/60">Origin.Co</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
