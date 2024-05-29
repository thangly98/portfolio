import classNames from '@functions/classNames'
import Animate from '@components/Fragments/Animate'
import { ISkillType } from '.'

function MySkills({ data }: Readonly<{ data: ISkillType[] }>) {
  return (
    <section>
      <Animate animation='fade'>
        <div>
          <hr className={classNames('max-w-[40%] mx-auto mt-16 mb-12 border-[--border-color]')} />
          <h3 className={classNames('mb-5 pb-12', 'text-2xl font-bold uppercase text-center')}>My Skills</h3>
        </div>
      </Animate>
      <div className={classNames('grid grid-cols-2 lg:grid-cols-4 gap-y-14')}>
        {data.map(({ name, point }) => (
          <div key={name} className={classNames('flex flex-col items-center text-center')}>
            <Animate animation='zoom-in'>
              <div
                className={classNames(
                  'relative text-9xl text-[120px] w-[1em] h-[1em] font-semibold',
                  'bg-[--border-color] rounded-[50%]',
                  'after:absolute after:block after:top-[.08em] after:left-[.08em] after:w-[.84em] after:h-[.84em] after:rounded-[50%] after:bg-[#111]',
                  'max-sm:text-[96px]'
                )}>
                <span className={classNames('absolute left-0 top-0 w-[5em] z-[1]', 'block text-[.2em] leading-[5em]')}>{point}%</span>
                <div
                  className={classNames('absolute w-[1em] h-[1em]')}
                  style={{ clipPath: point > 50 ? 'inset(auto auto auto auto)' : 'inset(0em calc(100% - 1em) calc(100% - 1em) 0.5em)' }}>
                  <div
                    className={classNames('absolute w-[.84em] h-[.84em]', 'border-[.08em] border-primary rounded-[50%] box-content')}
                    style={{ clipPath: 'inset(0 50% 0 0)', transform: `rotate(${point <= 50 ? (point / 100) * 360 : 180}deg)` }}
                  />
                  {point > 50 && (
                    <div
                      className={classNames('absolute w-[.84em] h-[.84em]', 'border-[.08em] border-primary rounded-[50%] box-content')}
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
  )
}

export default MySkills
