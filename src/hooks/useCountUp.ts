import { useEffect, useState, useCallback } from 'react'

interface CountUpOptions {
  target: number
  duration?: number
  startOnMount?: boolean
}

export function useCountUp({ target, duration = 2000, startOnMount = false }: CountUpOptions) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(startOnMount)

  const start = useCallback(() => {
    setHasStarted(true)
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, target, duration])

  return { count, start }
}
