import { ReactNode } from 'react';

import classNames from '@functions/classNames';

import DownloadIcon from '@assets/icons/download-filled.svg?react';
import Animate from '@components/Fragments/Animate';
import CountUp from '@components/Fragments/CountUp';
import PrimaryButton from '@components/Fragments/PrimaryButton';

import { IResumeType } from '.';

function PersonalInfos({ data }: Readonly<{ data: IResumeType }>) {
  const { information } = data;

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
  ];

  return (
    <div className={classNames('-mx-4 flex flex-wrap gap-y-12', 'max-md:pt-24')}>
      <div
        className={classNames('basis-2/5 px-4', 'max-md:basis-full', 'max-md:flex max-md:flex-col max-md:items-center max-md:text-center')}
      >
        <h3 className={classNames('mb-5', 'text-2xl font-bold uppercase')}>Personal infos</h3>
        <Animate animation='flip-left'>
          <img
            src={information.avatar}
            alt={data.information.last_name + "'s avatar"}
            className={classNames(
              'mx-auto mb-8 aspect-square w-48 rounded-[50%] border-4 border-[--border-color] bg-gray-50 object-cover object-bottom sm:hidden'
            )}
            onError={(e) => e.currentTarget.classList.add('hidden')}
          />
        </Animate>
        <ul className={classNames('[&_li]:mb-5', 'text-[.9375rem] font-semibold [&_li_span]:font-normal', 'max-sm:text-sm')}>
          <Animate animation='fade-right'>
            <li>
              <span className={classNames('opacity-80')}>Full Name : </span>
              {information.last_name + ' ' + information.first_name}
            </li>
          </Animate>
          <Animate animation='fade-right' animationDelay={50}>
            <li>
              <span className={classNames('opacity-80')}>Date of birth : </span>
              {information.birthday}
            </li>
          </Animate>
          <Animate animation='fade-right' animationDelay={100}>
            <li>
              <span className={classNames('opacity-80')}>Address : </span>
              {information.address}
            </li>
          </Animate>
          <Animate animation='fade-right' animationDelay={150}>
            <li>
              <span className={classNames('opacity-80')}>Phone : </span>
              <a href={'tel:' + information.phone}>{information.phone}</a>
            </li>
          </Animate>
          <Animate animation='fade-right' animationDelay={200}>
            <li>
              <span className={classNames('opacity-80')}>Email : </span>
              <a href={'mailto:' + information.email}>{information.email}</a>
            </li>
          </Animate>
        </ul>
        <Animate animation='fade' animationDelay={400}>
          <a className='inline-flex' href={information.cv} target='_blank'>
            <PrimaryButton icon={<DownloadIcon />}>Download CV</PrimaryButton>
          </a>
        </Animate>
      </div>
      <div className={classNames('basis-3/5 px-4', 'max-md:basis-full')}>
        <div className={classNames('grid grid-cols-2 gap-8')}>
          {counterInfos.map(({ title, count }, index) => (
            <Animate key={new Date().getTime() + index} animation='zoom-in' animationDelay={index * 100}>
              <div className={classNames('p-6', 'rounded border border-[--border-color]')}>
                <h4 className={classNames('text-5xl font-bold text-primary')}>
                  <CountUp from={0} to={count} />
                  {count > 0 && <sup className='font-normal'>+</sup>}
                </h4>
                <p
                  className={classNames(
                    'relative font-medium sm:pl-11',
                    'before:left-0 before:top-3 before:h-[1px] before:w-7 before:bg-[#777] sm:before:absolute'
                  )}
                >
                  {title}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfos;
