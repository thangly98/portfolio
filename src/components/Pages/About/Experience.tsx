import { CSSProperties } from 'react'
import classNames from '@functions/classNames'
import BackpackIcon from '@assets/icons/backpack-filled.svg?react'
import SquareAcademicIcon from '@assets/icons/squarea-cademic-filled.svg?react'
import { IEducationType, IExperienceType } from '.'

function MyExperiences({ data }: { data: { educations: IEducationType[]; experiences: IExperienceType[] } }) {
  return (
    <section>
      <hr className={classNames('max-w-[40%] mx-auto mt-16 mb-12 border-[var(--border-color)]')} />
      <h3 className={classNames('mb-5 pb-12', 'text-2xl font-bold uppercase text-center')}>Experience & Education</h3>

      <ul>
        {data.experiences.map((experience, index) => (
          <Item key={index} data={experience} type='experience' />
        ))}
      </ul>
      <ul>
        {data.educations.map((education, index) => (
          <Item key={index} data={education} type='education' />
        ))}
      </ul>
    </section>
  )
}

function Item({ data, type }: { data: IEducationType | IExperienceType; type: 'education' | 'experience' }) {
  return (
    <li
      className={classNames(
        'grid grid-cols-[var(--timeline-icon-w)_1fr] gap-5',
        'relative mb-12',
        'after:absolute after:top-0 after:bottom-0 after:left-[calc(var(--timeline-icon-w)/2)] after:-translate-x-1/2',
        'after:w-[1px] after:bg-[#333] after:-z-10'
      )}
      style={{ '--timeline-icon-w': '40px' } as CSSProperties}>
      <div
        className={classNames(
          'flex items-center justify-center',
          'w-[var(--timeline-icon-w)] h-[var(--timeline-icon-w)] rounded-[50%]',
          'bg-primary'
        )}>
        {type === 'education' ? <SquareAcademicIcon /> : <BackpackIcon />}
      </div>
      <div>
        <span
          className={classNames(
            'inline-block px-2 py-[1px] mb-3',
            'text-xs font-semibold uppercase bg-[var(--border-color)] rounded-3xl opacity-80'
          )}>
          {new Date(data.start_date).getFullYear()} - {data.end_date ? new Date(data.end_date).getFullYear() : 'Present'}
        </span>
        <h5 className={classNames('mt-2 mb-3', 'text-lg font-medium leading-6')}>
          {data.position}
          <span className={classNames('px-2 text-[.9375rem] opacity-80')}>-</span>
          <span className={classNames('text-[.9375rem] font-semibold opacity-80')}>{data.name}</span>
        </h5>
        <div
          className={classNames('text-sm text-[#eee] leading-[1.6]', '[&_ul]:list-disc [&_ul]:list-inside [&_p]:mt-2')}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </li>
  )
}

export default MyExperiences
