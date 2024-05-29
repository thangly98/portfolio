import { useEffect, useMemo, useState } from 'react'

type TypewriterProps = { data: [string]; showTime?: number; hideTime?: number; delayShow?: number; delayHide?: number }

function useTypewriter({ data, showTime = 100, hideTime = 40, delayShow = 500, delayHide = 1000 }: TypewriterProps) {
  const [typewriter, setTypewriter] = useState({
    text: '',
    type: 'add',
    index: Math.floor(Math.random() * data.length),
  })

  const intervalMs = useMemo(() => {
    if (typewriter.type === 'add' && typewriter.text.length === data[typewriter.index].length) return delayHide
    else if (typewriter.type === 'remove' && typewriter.text.length === 0) return delayShow
    else if (typewriter.type === 'add') return showTime
    else return hideTime
  }, [data, delayHide, delayShow, hideTime, showTime, typewriter.index, typewriter.text.length, typewriter.type])

  useEffect(() => {
    if (data && data.length > 0) {
      const id = setInterval(() => {
        setTypewriter((prev) => {
          const text = data[prev.index]

          let type = prev.type
          if (prev.text.length === 0) type = 'add'
          else if (prev.text.length === text.length) type = 'remove'

          let textSlice = text.slice(0, prev.text.length + (type === 'add' ? 1 : -1))
          if (textSlice.endsWith(' ')) textSlice = text.slice(0, prev.text.length + (type === 'add' ? 2 : -2))

          let index = prev.index
          while (type === 'remove' && textSlice.length === 0 && index === prev.index) {
            index = Math.floor(Math.random() * data.length)
          }

          return { text: textSlice, type, index }
        })
      }, intervalMs)

      return () => clearInterval(id)
    }
  }, [data, intervalMs])

  return { text: typewriter.text }
}

export type { TypewriterProps }
export default useTypewriter
