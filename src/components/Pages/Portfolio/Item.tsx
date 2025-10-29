import classNames from '@functions/classNames';

import Animate from '@components/Fragments/Animate';
import { IProject } from '@pages/Portfolio';

function ProjectItem({ data, onClick }: Readonly<{ data: IProject; onClick?: (data: IProject) => void }>) {
  return (
    <Animate animation='fade' appearHalf>
      {/* <div
        role='none'
        className={classNames('group relative cursor-pointer overflow-hidden rounded-xl text-center', 'cursor-target')}
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
      </div> */}

      <div>
        <div
          className={classNames(
            'cursor-target group',
            'card relative flex aspect-5/4 items-center justify-center overflow-hidden rounded-lg shadow-[0_0_0_5px_#ffffff80] transition-[all_0.6s_cubic-bezier(0.175,0.885,0.32,1.275)]',
            'hover:scale-[1.05] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]'
          )}
        >
          <img src={data.thumbnail} alt={data.name} className='transition-[all_0.6s_cubic-bezier(0.175,0.885,0.32,1.275)]' />
          <div
            className={classNames(
              'card__content',
              'absolute top-0 left-0 h-full w-full origin-bottom -rotate-x-90 bg-[#f2f2f2] p-5 transition-[all_0.6s_cubic-bezier(0.175,0.885,0.32,1.275)]',
              'group-hover:rotate-x-0'
            )}
          >
            <p className='card__title'>Project Name</p>
            <p className='card__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <button className='card__button'>Live Demo</button>
            <button className='card__button secondary'>Source Code</button>
          </div>
        </div>
      </div>
    </Animate>
  );
}

export default ProjectItem;
