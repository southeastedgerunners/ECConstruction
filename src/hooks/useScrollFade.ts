import { useCallback, useState } from 'react'

export function useScrollFade() {
  const [isVisible, setIsVisible] = useState(false)

  const ref = useCallback((node: Element | null) => {
    if (!node) return

    let observer: IntersectionObserver | undefined

    // Delay ensures browser paints the initial opacity:0 state
    // before the observer starts watching
    const timeout = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true)
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      )
      observer.observe(node)
    }, 100)

    return () => {
      clearTimeout(timeout)
      observer?.disconnect()
    }
  }, [])

  return { ref, isVisible }
}
