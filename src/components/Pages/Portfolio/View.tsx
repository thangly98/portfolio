import classNames from '@functions/classNames'

import CloseIcon from '@assets/icons/close-outline.svg?react'
import CodeIcon from '@assets/icons/code-outline.svg?react'
import DocumentIcon from '@assets/icons/document-text-outline.svg?react'
import OutsideIcon from '@assets/icons/outside-outline.svg?react'
import UserGroupIcon from '@assets/icons/user-group-outline.svg?react'
import UserIcon from '@assets/icons/user-outline.svg?react'
import UserRoleIcon from '@assets/icons/user-role-outline.svg?react'

import type { IProject } from '@pages/Portfolio'

function ProjectViewer({ open, data, onClose }: Readonly<{ open?: boolean; data?: IProject; onClose: () => void }>) {
  return (
    <div
      className={classNames(
        open ? 'opacity-100 visible' : 'opacity-0 invisible',
        'fixed top-0 left-0 z-50 w-full h-screen md:p-5',
        'flex items-center justify-center max-md:flex-col',
        'bg-[rgba(0,0,0,0.6)]',
        'transition-all duration-300'
      )}>
      <div
        className={classNames(
          'md:absolute top-0 right-0 text-4xl text-[#ababab]',
          'w-full flex justify-end px-6 py-3 md:p-5',
          'max-md:border-b border-[#333] max-md:bg-[var(--border-color)]'
        )}>
        <CloseIcon className={classNames('cursor-pointer')} onClick={onClose} />
      </div>

      {data && (
        <div
          className={classNames(
            open ? 'scale-100' : 'scale-110',
            'transition-all duration-300',
            'w-full max-w-3xl h-screen md:max-h-[calc(100vh-150px)] max-md:flex-auto px-6 py-8 overflow-auto scrollbar-custom',
            'bg-[var(--border-color)] md:rounded-xl'
          )}>
          <h3 className={classNames('text-4xl text-primary font-bold uppercase text-center')}>{data.name}</h3>
          <ul
            className={classNames(
              'my-3 text-sm',
              '[&_li_svg]:inline-block [&_li_svg]:mr-2 [&_li_svg]:text-primary [&_li_span]:font-normal [&_li_span]:text-[#ababab] [&>li]:mb-2'
            )}>
            <li>
              <span>
                <DocumentIcon />
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
                <UserIcon />
                Position :&nbsp;
              </span>
              {data.position}
            </li>
            <li>
              <span>
                <UserRoleIcon />
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
                <OutsideIcon />
                Preview :&nbsp;
              </span>
              <a className={classNames('font-semibold italic underline')} href={data.link} target='_blank'>
                {data.link}
              </a>
            </li>
          </ul>
          <img key={data.thumbnail} src={data.thumbnail} alt='' className={classNames('w-full h-auto rounded-md')} />
        </div>
      )}
    </div>
  )
}

export default ProjectViewer
