import classNames from '@functions/classNames'
import useTypewriter, { TypewriterProps } from './hook'

function Typewriter(props: Readonly<TypewriterProps>) {
  const { text } = useTypewriter(props)

  return (
    <div className={classNames('text-running')}>
      {text}
      <span className={classNames('border-r-2 animate-typewriter-blink-text-cursor')}>&nbsp;</span>
    </div>
  )
}

export default Typewriter
