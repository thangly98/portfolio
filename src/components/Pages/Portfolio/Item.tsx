import classNames from '@functions/classNames'
import { IProject } from '@pages/Portfolio'

function ProjectItem({ data, onClick }: Readonly<{ data: IProject; onClick?: (data: IProject) => void }>) {
  return (
    <div className={classNames('group relative text-center rounded-xl overflow-hidden cursor-pointer')} onClick={() => onClick?.(data)}>
      <img src={data.thumbnail} alt={data.name} className={classNames('max-w-full w-full h-auto aspect-[5/4] object-cover object-top')} />
      <div
        className={classNames(
          'absolute left-4 right-4 bottom-4 translate-y-5',
          'rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-40 backdrop-blur-sm backdrop-saturate-200',
          'opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-center px-3 py-4'
        )}>
        <h5 className={classNames('text-2xl font-medium mb-1')}>{data.name}</h5>
        <p className={classNames('mb-0 text-sm')}>{data.introduction}</p>
      </div>
    </div>
  )
}

export default ProjectItem
