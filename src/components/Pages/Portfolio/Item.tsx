import classNames from '@functions/classNames';

import Animate from '@components/Fragments/Animate';
import { IProject } from '@pages/Portfolio';

function ProjectItem({ data, onClick }: Readonly<{ data: IProject; onClick?: (data: IProject) => void }>) {
  return (
    <Animate animation='fade' appearHalf>
      <div
        role='none'
        className={classNames('group relative cursor-pointer overflow-hidden rounded-xl text-center')}
        onClick={() => onClick?.(data)}
      >
        <img
          src={data.thumbnail}
          alt={data.name}
          className={classNames('aspect-[5/4] h-auto w-full max-w-full bg-gray-50 object-cover object-top')}
        />
        <div
          className={classNames(
            'absolute bottom-4 left-4 right-4 translate-y-4',
            'rounded-xl bg-white bg-opacity-70 text-black backdrop-blur-sm backdrop-saturate-200 dark:bg-black dark:bg-opacity-40 dark:text-white',
            'px-3 py-4 text-center opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100'
          )}
        >
          <h5 className={classNames('mb-1 text-2xl font-semibold text-primary dark:text-white')}>{data.name}</h5>
          <p className={classNames('mb-0 line-clamp-3 text-sm')}>{data.introduction}</p>
        </div>
      </div>
    </Animate>
  );
}

export default ProjectItem;
