import { CSSProperties, ReactElement, cloneElement, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactElement
  animation: 'fade' | 'fade-right' | 'fade-left' | 'zoom-in' | 'zoom-in-up'
  animationDuration?: number
  animationDelay?: number
  onShow?: (show: boolean) => void
}

/**
 * Renders a component with animations based on the provided props.
 *
 * @param {ReactElement} children - The component to be rendered with animations.
 * @param {Props} props - The props object containing the animation type, animation duration, animation delay, and onShow callback.
 * @param {string} props.animation - The type of animation to be applied. Can be 'fade', 'fade-right', 'fade-left', 'zoom-in', or 'zoom-in-up'.
 * @param {number} [props.animationDuration] - The duration of the animation in milliseconds. Defaults to 1000.
 * @param {number} [props.animationDelay] - The delay before the animation starts in milliseconds. Defaults to 300.
 * @param {Function} [props.onShow] - A callback function to be called when the component is shown.
 * @return {ReactElement} The rendered component with animations.
 */

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isElementInViewport = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        props.onShow?.(true)
        window.removeEventListener('scroll', isElementInViewport)
        setStyle((s) => ({ ...s, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }))
      }
    }
  }

  return cloneElement(children, { style, ref })
}

export default Animate
