import { useEffect, useRef, useState } from 'react';

import classNames from '@functions/classNames';

import AchievementIcon from '@assets/icons/achievement-outline.svg?react';
import CloseIcon from '@assets/icons/close-outline.svg?react';
import CodeIcon from '@assets/icons/code-outline.svg?react';
import DocumentIcon from '@assets/icons/document-text-outline.svg?react';
import LinkIcon from '@assets/icons/link-outline.svg?react';
import UserGroupIcon from '@assets/icons/user-group-outline.svg?react';
import UserIcon from '@assets/icons/user-outline.svg?react';
import UserRoleIcon from '@assets/icons/user-role-outline.svg?react';
import Keyboard from '@components/Fragments/Keyboard';
import useClickOutside from '@hooks/useClickOutside';
import useKeydown from '@hooks/useKeydown';
import type { IProject } from '@pages/Portfolio';

function ProjectViewer({ open, data, onClose }: Readonly<{ open?: boolean; data?: IProject; onClose: () => void }>) {
  const [isRender, setIsRender] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onClose);
  useKeydown('Escape', onClose);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [open]);

  useEffect(() => {
    if (open) setIsRender(true);
    else timeoutRef.current = setTimeout(() => setIsRender(false), 300);

    return () => clearTimeout(timeoutRef.current ?? undefined);
  }, [open]);

  return (
    <div
      className={classNames(
        open ? 'visible opacity-100' : 'invisible opacity-0',
        'fixed left-0 top-0 z-50 h-dvh w-full md:p-5',
        'flex items-center justify-center max-md:flex-col',
        'bg-[rgba(0,0,0,0.6)]',
        'transition-all duration-300'
      )}
    >
      <div
        className={classNames(
          'right-0 top-0 text-4xl text-[#ababab] md:absolute',
          'flex w-full justify-end px-6 py-3 md:p-5',
          'border-[#333] max-md:border-b max-md:bg-[--border-color]'
        )}
      >
        <CloseIcon className={classNames('cursor-pointer')} onClick={onClose} />
      </div>

      <div
        ref={ref}
        className={classNames(
          open ? 'scale-100' : 'scale-110',
          'transition-all duration-300',
          'scrollbar-custom w-full max-w-3xl overflow-auto px-6 py-8 max-md:flex-auto md:max-h-[calc(100vh-150px)]',
          'bg-[--border-color] md:rounded-xl'
        )}
      >
        {data && isRender && (
          <>
            <h3 className={classNames('text-center text-4xl font-bold uppercase text-primary')}>{data.name}</h3>
            <ul
              className={classNames(
                'my-3 text-sm',
                '[&>li]:mb-2 [&_li_span]:font-normal [&_li_span]:text-[#ababab] [&_li_svg]:mr-2 [&_li_svg]:inline-block [&_li_svg]:text-base [&_li_svg]:text-primary'
              )}
            >
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
                  className={classNames('pl-1 [&_li]:mt-1 [&_ul]:list-inside [&_ul]:list-disc')}
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
                    className={classNames('pl-1 [&_li]:mt-1 [&_ul]:list-inside [&_ul]:list-disc')}
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
            <img key={data.thumbnail} src={data.thumbnail} alt='' className={classNames('h-auto w-full rounded-md')} />
            {data.galleries?.map(({ url, caption }) => (
              <div key={url} className={classNames('mt-4')}>
                <img src={url} alt='' className={classNames('h-auto w-full rounded-md')} />
                <p className={classNames('py-1 text-center text-sm italic text-gray-300')}>{caption}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectViewer;
