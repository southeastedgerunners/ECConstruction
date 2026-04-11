import { useCallback, useState } from 'react'

export function useScrollFade() {
  const [isVisible, setIsVisible] = useState(false)

  const ref = useCallback((node: Element | null) => {
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
