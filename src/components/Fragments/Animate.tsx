import { CSSProperties, ReactElement, cloneElement, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactElement
  animation: 'fade' | 'fade-up' | 'fade-down' | 'fade-right' | 'fade-left' | 'zoom-in' | 'zoom-in-up' | 'zoom-out' | 'flip-left'
  animationDuration?: number
  animationDelay?: number
  appearHalf?: boolean
  once?: boolean
  onShow?: (show: boolean) => void
}

function Animate({ children, ...props }: Props) {
  const { animation, animationDelay = 0, animationDuration = 1000, once } = props
  const ref = useRef<HTMLElement>()
  const [style, setStyle] = useState<CSSProperties>({
    opacity: 0,
    transform: getTransformValue(animation),
    transitionDelay: animationDelay + 'ms',
    transitionDuration: animationDuration + 'ms',
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: 'cubic-bezier(.175,.885,.32,1.275)',
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
        setStyle((s) => ({ ...s, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1) perspective(2500px) rotate(0)' }))
      } else if (!once && rect.top > window.innerHeight) {
        props.onShow?.(false)
        setStyle((s) => ({ ...s, opacity: 0, transform: getTransformValue(animation) }))
      }
    }
  }

  return cloneElement(children, { style, ref })
}

const getTransformValue = (animation: Props['animation']) => {
  switch (animation) {
    case 'fade-up':
      return 'translate3d(0, 100px, 0)'
    case 'fade-down':
      return 'translate3d(0, -100px, 0)'
    case 'fade-right':
      return 'translate3d(-100px, 0, 0)'
    case 'fade-left':
      return 'translate3d(100px, 0, 0)'
    case 'zoom-in':
      return 'scale(0.6)'
    case 'zoom-in-up':
      return 'translate3d(0, 100px, 0) scale(0.6)'
    case 'zoom-out':
      return 'scale(1.2)'
    case 'flip-left':
      return 'perspective(2500px) rotateY(-100deg)'
    default:
      return 'unset'
  }
}

export default Animate
