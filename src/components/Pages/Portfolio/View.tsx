import classNames from '@functions/classNames'

import BillListIcon from '@assets/icons/bill-list-filled.svg?react'
import UserGroupIcon from '@assets/icons/user-group-filled.svg?react'
import CodeIcon from '@assets/icons/code-outline.svg?react'
import CloseIcon from '@assets/icons/close-outline.svg?react'

import type { IProject } from '@pages/Portfolio'

function ProjectViewer({ data, onClose }: Readonly<{ data?: IProject; onClose: () => void }>) {
  return (
    <div
      className={classNames(
        data ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-150',
        'fixed top-0 left-0 z-50 w-full min-h-full p-5 ',
        'flex items-center justify-center',
        'bg-[rgba(0,0,0,0.6)]',
        'transition-all duration-300'
      )}>
      <CloseIcon className={classNames('absolute top-3 right-3 text-4xl cursor-pointer')} onClick={onClose} />

      {data && (
        <div
          className={classNames(
            'w-full max-w-[660px] max-h-[calc(100vh-150px)] px-6 py-8 overflow-auto scrollbar-custom',
            'bg-[var(--border-color)] rounded-xl'
          )}>
          <h3 className={classNames('text-4xl text-primary font-bold uppercase text-center')}>{data.name}</h3>
          <ul className={classNames('my-3', 'text-sm font-medium', '[&_li_svg]:inline-block [&_li_svg]:mr-2 [&_li_span]:font-normal [&>li]:mb-2')}>
            <li>
              <span>
                <BillListIcon />
                Description :&nbsp;
              </span>
              {data.introduction}
            </li>
            <li>
              <span>
                <UserGroupIcon />
                Team size :&nbsp;
              </span>
              {data.members}
            </li>
            <li>
              <span>
                <UserGroupIcon />
                Position :&nbsp;
              </span>
              {data.position}
            </li>
            <li>
              <span>
                <UserGroupIcon />
                Role and Responsibilities :&nbsp;
              </span>
              <div
                className={classNames('[&_ul]:list-disc [&_ul]:list-inside [&_li]:mt-1 pl-1')}
                dangerouslySetInnerHTML={{ __html: data.description ?? '' }}
              />
            </li>
            <li>
              <span>
                <CodeIcon />
                Technologies :&nbsp;
              </span>
              {data.technology.join(', ')}
            </li>
            <li>
              <span>
                <UserGroupIcon />
                Preview :&nbsp;
              </span>
              <a className={classNames('text-primary font-semibold')} href={data.link} target='_blank'>
                {data.link}
              </a>
            </li>
          </ul>
          <img src={data.thumbnail} alt='' className={classNames('w-full h-auto rounded-md')} />
        </div>
      )}
    </div>
  )
}

export default ProjectViewer
