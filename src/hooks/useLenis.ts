'use client'

import { useEffect, useRef } from 'react'

export function useLenis() {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    let lenis: any
    let rafId: number

    const initLenis = async () => {
      try {
        const LenisModule = await import('lenis')
        // Support both default export and named export patterns
        const Lenis = LenisModule.default ?? (LenisModule as any).Lenis ?? LenisModule
        if (!Lenis) return

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          touchMultiplier: 2,
        })

        lenisRef.current = lenis
        if (typeof window !== 'undefined') {
          ;(window as any).lenis = lenis
        }

        const raf = (time: number) => {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      } catch (err) {
        // Lenis failed to init — native scroll is the fallback, page still works
        if (process.env.NODE_ENV === 'development') {
          console.warn('[Lenis] Failed to initialize smooth scroll:', err)
        }
      }
    }

    initLenis()

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (typeof window !== 'undefined' && (window as any).lenis === lenis) {
        ;(window as any).lenis = null
      }
      lenis?.destroy()
    }
  }, [])

  return lenisRef
}
