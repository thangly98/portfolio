import classNames from '@functions/classNames';

import Animate from '@components/Fragments/Animate';
import CountUp from '@components/Fragments/CountUp';

import { ISkillType } from '.';

function MySkills({ data }: Readonly<{ data: ISkillType[] }>) {
  return (
    <section>
      <Animate animation='fade'>
        <div>
          <hr className={classNames('mx-auto mb-12 mt-16 max-w-[40%] border-(--border-color)')} />
          <h3 className={classNames('mb-5 pb-12', 'text-center text-2xl font-bold uppercase')}>My Skills</h3>
        </div>
      </Animate>
      <div className={classNames('grid grid-cols-2 gap-y-14 lg:grid-cols-4')}>
        {data.map(({ name, point }) => (
          <div key={name} className={classNames('flex flex-col items-center text-center')}>
            <Animate animation='zoom-in'>
              <div
                className={classNames(
                  'relative h-[1em] w-[1em] text-9xl text-[120px] font-semibold',
                  'rounded-[50%] bg-(--border-color)',
                  'after:absolute after:left-[.08em] after:top-[.08em] after:block after:h-[.84em] after:w-[.84em] after:rounded-[50%] after:bg-[#111]',
                  'max-sm:text-[96px]'
                )}
              >
                <span className={classNames('absolute left-0 top-0 z-1 w-[5em]', 'block text-[.2em] leading-[5em]')}>
                  <CountUp from={0} to={point} />%
                </span>
                <div
                  className={classNames('absolute h-[1em] w-[1em]')}
                  style={{ clipPath: point > 50 ? 'inset(auto auto auto auto)' : 'inset(0em calc(100% - 1em) calc(100% - 1em) 0.5em)' }}
                >
                  <div
                    className={classNames('absolute h-[.84em] w-[.84em]', 'box-content rounded-[50%] border-[.08em] border-primary')}
                    style={{ clipPath: 'inset(0 50% 0 0)', transform: `rotate(${point <= 50 ? (point / 100) * 360 : 180}deg)` }}
                  />
                  {point > 50 && (
                    <div
                      className={classNames('absolute h-[.84em] w-[.84em]', 'box-content rounded-[50%] border-[.08em] border-primary')}
                      style={{ clipPath: 'inset(0 50% 0 0)', transform: `rotate(${((point - 100) / 100) * 360}deg)` }}
                    />
                  )}
                </div>
              </div>
            </Animate>
            <Animate animation='zoom-in'>
              <h6 className={classNames('mt-5 font-medium uppercase')}>{name}</h6>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
