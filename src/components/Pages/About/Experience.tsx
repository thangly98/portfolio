import { useState } from 'react';

import parse, { attributesToProps, DOMNode, domToReact, Element } from 'html-react-parser';

import BackpackIcon from '@assets/icons/backpack-filled.svg?react';
import SquareAcademicIcon from '@assets/icons/squarea-cademic-filled.svg?react';
import classNames from '@functions/classNames';

import Animate from '@components/Fragments/Animate';

import { IEducationType, IExperienceType } from '.';

function MyExperiences({ data }: Readonly<{ data: { educations: IEducationType[]; experiences: IExperienceType[] } }>) {
  return (
    <section>
      <Animate animation='fade'>
        <div>
          <hr className={classNames('mx-auto mb-12 mt-16 max-w-[40%] border-[--border-color]')} />
          <h3 className={classNames('mb-5 pb-12', 'text-center text-2xl font-bold uppercase')}>Experience & Education</h3>
        </div>
      </Animate>

      <ul>
        {data.experiences.map((experience) => (
          <Item key={experience.name} data={experience} type='experience' />
        ))}
      </ul>
      <ul>
        {data.educations.map((education) => (
          <Item key={education.name} data={education} type='education' />
        ))}
      </ul>
    </section>
  );
}

function Item({ data, type, ...props }: Readonly<{ data: IEducationType | IExperienceType; type: 'education' | 'experience' }>) {
  const [isShow, setIsShow] = useState(false);
  return (
    <li
      {...props}
      className={classNames('[--timeline-icon-w:40px]', 'grid grid-cols-[var(--timeline-icon-w)_1fr] gap-5', 'mb-12 leading-none')}
    >
      <div
        className={classNames(
          'relative',
          'after:absolute after:bottom-0 after:left-[calc(var(--timeline-icon-w)/2)] after:top-0 after:-translate-x-1/2',
          'after:-z-10 after:w-[1px] after:bg-[#333]'
        )}
        style={{ height: isShow ? 'auto' : '0' }}
      >
        <Animate animation='zoom-in'>
          <div
            className={classNames(
              'flex items-center justify-center',
              'h-[--timeline-icon-w] w-[--timeline-icon-w] rounded-[50%]',
              'bg-primary'
            )}
          >
            {type === 'education' ? <SquareAcademicIcon /> : <BackpackIcon />}
          </div>
        </Animate>
      </div>
      <div>
        <Animate animation='fade'>
          <span
            className={classNames(
              'mb-3 inline-block px-2 py-[1px]',
              'rounded-3xl bg-[--border-color] text-xs font-semibold uppercase opacity-80'
            )}
          >
            {new Date(data.start_date).getFullYear()} - {data.end_date ? new Date(data.end_date).getFullYear() : 'Present'}
          </span>
        </Animate>
        <Animate animation='fade'>
          <h5 className={classNames('mb-3 mt-2', 'text-lg font-medium leading-6')}>
            {data.position}
            <span className={classNames('px-2 text-[.9375rem] opacity-80')}>-</span>
            <span className={classNames('text-[.9375rem] font-semibold opacity-80')}>{data.name}</span>
          </h5>
        </Animate>

        <div className={classNames('text-sm leading-[1.6] text-[#eee]', '[&_p]:mt-2 [&_ul]:list-inside [&_ul]:list-disc')}>
          {parse(data.content, {
            replace(domNode) {
              const domElement: Element = domNode as unknown as Element;
              const props = domElement.attribs ? attributesToProps(domElement.attribs) : {};

              if (domElement.tagName === 'li') {
                return (
                  <Animate animation='fade' onShow={setIsShow}>
                    <li {...props}>{domToReact(domElement.children as DOMNode[])}</li>
                  </Animate>
                );
              }

              if (domElement.tagName === 'p') {
                return (
                  <Animate animation='fade' onShow={setIsShow}>
                    <p {...props}>{domToReact(domElement.children as DOMNode[])}</p>
                  </Animate>
                );
              }
            },
          })}
        </div>
      </div>
    </li>
  );
}

export default MyExperiences;
