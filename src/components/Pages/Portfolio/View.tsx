import { useEffect, useRef, useState } from 'react'

import classNames from '@functions/classNames'

import Keyboard from '@components/Fragments/Keyboard'
import AchievementIcon from '@assets/icons/achievement-outline.svg?react'
import CloseIcon from '@assets/icons/close-outline.svg?react'
import CodeIcon from '@assets/icons/code-outline.svg?react'
import DocumentIcon from '@assets/icons/document-text-outline.svg?react'
import LinkIcon from '@assets/icons/link-outline.svg?react'
import UserGroupIcon from '@assets/icons/user-group-outline.svg?react'
import UserIcon from '@assets/icons/user-outline.svg?react'
import UserRoleIcon from '@assets/icons/user-role-outline.svg?react'

import type { IProject } from '@pages/Portfolio'

function ProjectViewer({ open, data, onClose }: Readonly<{ open?: boolean; data?: IProject; onClose: () => void }>) {
  const [isRender, setIsRender] = useState<boolean>(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [open])

  useEffect(() => {
    if (open) setIsRender(true)
    else timeoutRef.current = setTimeout(() => setIsRender(false), 300)

    return () => clearTimeout(timeoutRef.current ?? undefined)
  }, [open])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={classNames(
        open ? 'opacity-100 visible' : 'opacity-0 invisible',
        'fixed top-0 left-0 z-50 w-full h-dvh md:p-5',
        'flex items-center justify-center max-md:flex-col',
        'bg-[rgba(0,0,0,0.6)]',
        'transition-all duration-300'
      )}>
      <div
        className={classNames(
          'md:absolute top-0 right-0 text-4xl text-[#ababab]',
          'w-full flex justify-end px-6 py-3 md:p-5',
          'max-md:border-b border-[#333] max-md:bg-[--border-color]'
        )}>
        <CloseIcon className={classNames('cursor-pointer')} onClick={onClose} />
      </div>

      <div
        className={classNames(
          open ? 'scale-100' : 'scale-110',
          'transition-all duration-300',
          'w-full max-w-3xl md:max-h-[calc(100vh-150px)] max-md:flex-auto px-6 py-8 overflow-auto scrollbar-custom',
          'bg-[--border-color] md:rounded-xl'
        )}>
        {data && isRender && (
          <>
            <h3 className={classNames('text-4xl text-primary font-bold uppercase text-center')}>{data.name}</h3>
            <ul
              className={classNames(
                'my-3 text-sm',
                '[&_li_svg]:inline-block [&_li_svg]:mr-2 [&_li_svg]:text-base [&_li_svg]:text-primary [&_li_span]:font-normal [&_li_span]:text-[#ababab] [&>li]:mb-2'
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
              {data.achievement && (
                <li>
                  <span>
                    <AchievementIcon />
                    Achievements :&nbsp;
                  </span>
                  <div
                    className={classNames('[&_ul]:list-disc [&_ul]:list-inside [&_li]:mt-1 pl-1')}
                    dangerouslySetInnerHTML={{ __html: data.achievement }}
                  />
                </li>
              )}
              <li>
                <span>
                  <CodeIcon />
                  Technologies :&nbsp;
                </span>
                {data.technology.map((tech) => (
                  <Keyboard key={tech} text={tech} />
                ))}
              </li>
              <li className={classNames('-mt-2')}>
                <span>
                  <LinkIcon />
                  Preview :&nbsp;
                </span>
                <a className={classNames('font-semibold underline')} href={data.link} target='_blank'>
                  {data.link}
                </a>
              </li>
            </ul>
            <img key={data.thumbnail} src={data.thumbnail} alt='' className={classNames('w-full h-auto rounded-md')} />
            {data.galleries?.map(({ url, caption }) => (
              <div className={classNames('mt-4')}>
                <img key={url} src={url} alt='' className={classNames('w-full h-auto rounded-md')} />
                <p className={classNames('py-1 text-sm italic text-gray-300 text-center')}>{caption}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectViewer
