import classNames from '@functions/classNames'

function MyExperiences() {
  return (
    <section>
      <hr className={classNames('max-w-[40%] mx-auto mt-16 mb-12 border-[var(--border-color)]')} />
      <h3 className={classNames('mb-5 pb-12', 'text-2xl font-bold uppercase text-center')}>Experience & Education</h3>
    </section>
  )
}

export default MyExperiences
