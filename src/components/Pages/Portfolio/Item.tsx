import classNames from '@functions/classNames'
import { IProject } from '@pages/Portfolio'

function ProjectItem({ data, onClick }: Readonly<{ data: IProject; onClick?: (data: IProject) => void }>) {
  return (
    <div
      className={classNames(
        'relative cursor-pointer group',
        'bg-slate-200 rounded-md overflow-hidden',
        'after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:-translate-y-full',
        'after:bg-[linear-gradient(transparent_5%,rgba(13,13,13,0.9))] after:opacity-0 after:transition after:duration-300 after:z-10',
        'hover:after:translate-y-0 hover:after:opacity-70'
      )}
      onClick={() => onClick?.(data)}>
      <img src={data.thumbnail} alt='' className={classNames('aspect-[34/21]', 'group-hover:scale-110', 'transition-all duration-300')} />
      <div
        className={classNames(
          'p-7',
          'absolute top-0 left-0 bottom-0 right-0 translate-y-1/2 z-20',
          'flex items-end justify-end',
          'text-2xl font-semibold text-primary opacity-0',
          'group-hover:translate-y-0 group-hover:opacity-100',
          'transition-all duration-300'
        )}>
        {data.name}
      </div>
    </div>
  )
}

export default ProjectItem
