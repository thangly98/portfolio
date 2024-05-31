import { CSSProperties, ReactElement, cloneElement, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactElement
  animation: 'fade' | 'fade-right' | 'fade-left' | 'zoom-in' | 'zoom-in-up' | 'flip-left'
  animationDuration?: number
  animationDelay?: number
  appearHalf?: boolean
  onShow?: (show: boolean) => void
}

/**
 * Renders an animated component with customizable animation effect.
 *
 * @param {Props} props - The props object containing the children and animation properties.
 * @param {ReactElement} props.children - The component to be animated.
 * @param {string} props.animation - The animation effect to be applied. Possible values are 'fade', 'fade-right', 'fade-left', 'zoom-in', 'zoom-in-up', and 'flip-left'.
 * @param {number} [props.animationDuration] - The duration of the animation in milliseconds. Defaults to 1000ms.
 * @param {number} [props.animationDelay] - The delay before the animation starts in milliseconds. Defaults to 0ms.
 * @param {boolean} [props.appearHalf] - Determines if the animation should start when the component is half visible. Defaults to false.
 * @param {Function} [props.onShow] - A callback function to be called when the component is shown.
 * @return {ReactElement} The animated component with the specified animation effect.
 */

function Animate({ children, ...props }: Props) {
  const ref = useRef<HTMLElement>()
  const [style, setStyle] = useState<CSSProperties>(() => {
    const innitStyle = {
      opacity: 0,
      transitionDelay: (props.animationDelay ?? 0) + 'ms',
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
      case 'flip-left':
        return { ...innitStyle, transform: 'perspective(2500px) rotateY(-100deg)' }
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
      if (rect.top >= 0 && rect.bottom <= window.innerHeight + rect.height * (props.appearHalf ? 0.5 : 0)) {
        props.onShow?.(true)
        window.removeEventListener('scroll', isElementInViewport)
        setStyle((s) => ({ ...s, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1) perspective(2500px) rotate(0)' }))
      }
    }
  }

  return cloneElement(children, { style, ref })
}

export default Animate
