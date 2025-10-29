export default function ProgressLoader() {
  return (
    <div
      className={[
        'h-6 w-[134px]',
        'rounded-[22px] border-2 border-solid',
        'text-primary relative',
        'before:bg-primary before:animate-progress-loading before:absolute before:inset-[0_100%_0_0] before:m-0.5 before:rounded-[inherit]',
      ].join(' ')}
    />
  );
}
