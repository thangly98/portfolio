export default function ProgressLoader() {
  return (
    <div
      className={[
        'w-[134px] h-[24px]',
        'border-[2px] border-solid rounded-[22px]',
        'text-[var(--primary)] relative',
        'before:absolute before:m-[2px] before:inset-[0_100%_0_0] before:rounded-[inherit] before:bg-current before:animate-progress-loading',
      ].join(' ')}
    />
  )
}
