import classNames from '@functions/classNames'

function Keyboard({ text }: Readonly<{ text: string }>) {
  return (
    <kbd
      className={classNames(
        'px-1.5 py-1 mr-2 mb-2 inline-block',
        'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md',
        'dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500'
      )}>
      {text}
    </kbd>
  )
}

export default Keyboard
