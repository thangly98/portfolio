import { CSSProperties, ReactElement, cloneElement, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactElement
  animation: 'fade' | 'fade-right' | 'fade-left' | 'zoom-in' | 'zoom-in-up'
  animationDuration?: number
  animationDelay?: number
}

function Animate({ children, ...props }: Props) {
  const ref = useRef<HTMLElement>()
  const [style, setStyle] = useState<CSSProperties>(() => {
    const innitStyle = {
      opacity: 0,
      transitionDelay: (props.animationDelay ?? 300) + 'ms',
      transitionDuration: (props.animationDuration ?? 1000) + 'ms',
      transitionProperty: 'opacity, transform',
      transitionTimingFunction: 'cubic-bezier(.175,.885,.32,1.275)',
    }
    switch (props.animation) {
      case 'fade':
        return innitStyle
      case 'fade-right':
        return { ...innitStyle, transform: 'translate3d(-100px, 0, 0)' }
      case 'fade-left':
        return { ...innitStyle, transform: 'translate3d(100px, 0, 0)' }
      case 'zoom-in':
        return { ...innitStyle, transform: 'scale(0.6)' }
      case 'zoom-in-up':
        return { ...innitStyle, transform: 'translate3d(0, 100px, 0) scale(0.6)' }
      default:
        return innitStyle
    }
  })

  useEffect(() => {
    isElementInViewport()
    window.addEventListener('scroll', isElementInViewport)
    return () => window.removeEventListener('scroll', isElementInViewport)
  }, [])

  const isElementInViewport = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) setStyle((s) => ({ ...s, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }))
    }
  }

  return cloneElement(children, { style, ref })
}

export default Animate
