import classNames from '@functions/classNames';

import Animate from '@components/Fragments/Animate';
import { IProject } from '@pages/Portfolio';

function ProjectItem({ data, onClick }: Readonly<{ data: IProject; onClick?: (data: IProject) => void }>) {
  return (
    <Animate animation='fade' appearHalf>
      <div
        className={classNames(
          'cursor-target group',
          'relative flex aspect-5/4 items-center justify-center overflow-hidden rounded-lg shadow-[0_0_0_4px_var(--color-amber-11)] transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] perspective-[1000px]',
          'hover:scale-[1.05] hover:shadow-[0_8px_16px_--alpha(white/20%)]'
        )}
        onClick={() => onClick?.(data)}
      >
        <img
          src={data.thumbnail}
          alt={data.name}
          className={classNames('transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]')}
        />
        <div
          className={classNames(
            'absolute top-0 left-0 h-full w-full origin-bottom -rotate-x-90 bg-black/40 p-5 text-white backdrop-blur-sm backdrop-saturate-200 transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]',
            'group-hover:rotate-x-0'
          )}
        >
          <p className={classNames('mb-1 text-2xl font-semibold')}>{data.name}</p>
          <p className={classNames('mb-2 text-sm font-light')}>{data.introduction}</p>
          <button
            className={classNames('cursor-target', 'bg-primary cursor-pointer rounded-lg border-none px-[15px] py-1 text-white')}
            onClick={() => onClick?.(data)}
          >
            View
          </button>
        </div>
      </div>
    </Animate>
  );
}

export default ProjectItem;
