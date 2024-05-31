import classNames from '@functions/classNames'
import Animate from '@components/Fragments/Animate'
import { IProject } from '@pages/Portfolio'

function ProjectItem({ data, onClick }: Readonly<{ data: IProject; onClick?: (data: IProject) => void }>) {
  return (
    <Animate animation='fade' appearHalf>
      <div role='none' className={classNames('group relative text-center rounded-xl overflow-hidden cursor-pointer')} onClick={() => onClick?.(data)}>
        <img
          src={data.thumbnail}
          alt={data.name}
          className={classNames('max-w-full w-full h-auto aspect-[5/4] object-cover object-top bg-gray-50')}
        />
        <div
          className={classNames(
            'absolute left-4 right-4 bottom-4 translate-y-4',
            'rounded-xl bg-white text-black bg-opacity-70 dark:text-white dark:bg-black dark:bg-opacity-40 backdrop-blur-sm backdrop-saturate-200',
            'opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-center px-3 py-4'
          )}>
          <h5 className={classNames('text-2xl text-primary dark:text-white font-semibold mb-1')}>{data.name}</h5>
          <p className={classNames('mb-0 text-sm')}>{data.introduction}</p>
        </div>
      </div>
    </Animate>
  )
}

export default ProjectItem
