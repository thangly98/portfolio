import classNames from '@functions/classNames'

function PageTitle({ title, titleBg }: Readonly<{ title: string; titleBg?: string }>) {
  return (
    <div
      className={classNames(
        'relative py-20',
        'md:text-center font-extrabold uppercase',
        'max-md:fixed max-md:top-0 max-md:left-0 max-md:z-10 max-md:w-full max-md:px-6 max-md:py-4 max-md:bg-[--border-color]'
      )}>
      <h1 className={classNames('text-6xl', 'max-md:text-3xl')}>
        {title.split(' ').slice(0, -1).join(' ')}
        &nbsp;
        <span className={classNames('text-primary')}>{title.split(' ').slice(-1)}</span>
      </h1>
      {titleBg && (
        <span
          className={classNames('absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-[1]', ' text-9xl', 'opacity-[.07]', 'max-md:hidden')}>
          {titleBg}
        </span>
      )}
    </div>
  )
}

export default PageTitle
