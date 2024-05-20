import { ReactNode } from 'react'
import classNames from '@functions/classNames'
import ButtonPrimary from '@components/Fragments/ButtonPrimary'
import DownloadIcon from '@assets/icons/download-filled.svg?react'
import { IResumeType } from '.'

function PersonalInfos({ data }: Readonly<{ data: IResumeType }>) {
  const { information } = data

  const counterInfos: { count: number; title: ReactNode }[] = [
    {
      title: (
        <>
          YEARS OF <br />
          EXPERIENCE
        </>
      ),
      count: new Date().getFullYear() - new Date(data.experience_start_date ?? '').getFullYear(),
    },
    {
      title: (
        <>
          COMPLETED <br />
          PROJECTS
        </>
      ),
      count: data.total_projects,
    },
    {
      title: (
        <>
          HAPPY <br />
          CUSTOMERS
        </>
      ),
      count: data.total_companies,
    },
    {
      title: (
        <>
          AWARDS <br />
          WON
        </>
      ),
      count: 0,
    },
  ]

  return (
    <div className={classNames('flex flex-wrap gap-y-12 -mx-4', 'max-md:pt-24')}>
      <div className={classNames('basis-1/2 px-4', 'max-md:basis-full')}>
        <h3 className={classNames('mb-5', 'text-2xl font-bold uppercase')}>Personal infos</h3>
        <img
          src={information.avatar}
          alt=''
          className={classNames(
            'sm:hidden w-48 aspect-square mx-auto mb-8 object-cover rounded-[50%] object-bottom border-4 border-[--border-color]'
          )}
        />
        <ul className={classNames('[&_li]:mb-5', 'text-[.9375rem] font-semibold [&_li_span]:font-normal', 'max-sm:text-sm')}>
          <li>
            <span className={classNames('opacity-80')}>Full Name : </span>
            {information.last_name + ' ' + information.first_name}
          </li>
          <li>
            <span className={classNames('opacity-80')}>Date of birth : </span>
            {information.birthday}
          </li>
          <li>
            <span className={classNames('opacity-80')}>Address : </span>
            {information.address}
          </li>
          <li>
            <span className={classNames('opacity-80')}>Phone : </span>
            <a href={'tel:' + information.phone}>{information.phone}</a>
          </li>
          <li>
            <span className={classNames('opacity-80')}>Email : </span>
            <a href={'mailto:' + information.email}>{information.email}</a>
          </li>
        </ul>
        <a className='inline-flex' href='/static/QuocThangLy_FrontendDeveloper.pdf' target='_blank'>
          <ButtonPrimary icon={<DownloadIcon />}>Download CV</ButtonPrimary>
        </a>
      </div>
      <div className={classNames('basis-1/2 px-4', 'max-md:basis-full')}>
        <div className={classNames('grid grid-cols-2 gap-8')}>
          {counterInfos.map(({ title, count }) => (
            <div className={classNames('p-6', 'border border-[--border-color] rounded')}>
              <h4 className={classNames('text-5xl text-primary font-bold')}>
                {count}
                {count > 0 && <sup className='font-normal'>+</sup>}
              </h4>
              <p
                className={classNames(
                  'relative sm:pl-11 font-medium',
                  'sm:before:absolute before:left-0 before:top-3 before:w-7 before:h-[1px] before:bg-[#777]'
                )}>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersonalInfos
