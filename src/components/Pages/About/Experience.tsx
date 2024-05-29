import classNames from '@functions/classNames'
import BackpackIcon from '@assets/icons/backpack-filled.svg?react'
import SquareAcademicIcon from '@assets/icons/squarea-cademic-filled.svg?react'
import Animate from '@components/Fragments/Animate'
import { IEducationType, IExperienceType } from '.'
import { useState } from 'react'

function MyExperiences({ data }: Readonly<{ data: { educations: IEducationType[]; experiences: IExperienceType[] } }>) {
  return (
    <section>
      <Animate animation='fade'>
        <div>
          <hr className={classNames('max-w-[40%] mx-auto mt-16 mb-12 border-[--border-color]')} />
          <h3 className={classNames('mb-5 pb-12', 'text-2xl font-bold uppercase text-center')}>Experience & Education</h3>
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
  )
}

function Item({ data, type, ...props }: Readonly<{ data: IEducationType | IExperienceType; type: 'education' | 'experience' }>) {
  const [isShow, setIsShow] = useState(false)
  return (
    // <Animate animation='fade-right'>
    <li {...props} className={classNames('[--timeline-icon-w:40px]', 'grid grid-cols-[var(--timeline-icon-w)_1fr] gap-5', ' mb-12 leading-none')}>
      <div
        className={classNames(
          'relative',
          'after:absolute after:top-0 after:bottom-0 after:left-[calc(var(--timeline-icon-w)/2)] after:-translate-x-1/2',
          'after:w-[1px] after:bg-[#333] after:-z-10'
        )}
        style={{ height: isShow ? 'auto' : '0' }}>
        <Animate animation='zoom-in'>
          <div className={classNames('flex items-center justify-center', 'w-[--timeline-icon-w] h-[--timeline-icon-w] rounded-[50%]', 'bg-primary')}>
            {type === 'education' ? <SquareAcademicIcon /> : <BackpackIcon />}
          </div>
        </Animate>
      </div>
      <div>
        <Animate animation='fade'>
          <span
            className={classNames('inline-block px-2 py-[1px] mb-3', 'text-xs font-semibold uppercase bg-[--border-color] rounded-3xl opacity-80')}>
            {new Date(data.start_date).getFullYear()} - {data.end_date ? new Date(data.end_date).getFullYear() : 'Present'}
          </span>
        </Animate>
        <Animate animation='fade'>
          <h5 className={classNames('mt-2 mb-3', 'text-lg font-medium leading-6')}>
            {data.position}
            <span className={classNames('px-2 text-[.9375rem] opacity-80')}>-</span>
            <span className={classNames('text-[.9375rem] font-semibold opacity-80')}>{data.name}</span>
          </h5>
        </Animate>
        <Animate animation='fade' onShow={setIsShow}>
          <div
            className={classNames('text-sm text-[#eee] leading-[1.6]', '[&_ul]:list-disc [&_ul]:list-inside [&_p]:mt-2')}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </Animate>
      </div>
    </li>
    // </Animate>
  )
}

export default MyExperiences
