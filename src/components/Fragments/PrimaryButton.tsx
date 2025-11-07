import { PropsWithChildren, ReactNode } from 'react';

import classNames from '@functions/classNames';

function PrimaryButton({ children, icon, disabled }: Readonly<PropsWithChildren & { icon?: ReactNode; disabled?: boolean }>) {
  return (
    <button
      className={classNames(
        'flex items-center gap-2',
        `h-14 pl-4 ${icon ? 'pr-16' : 'pr-4'} overflow-hidden`,
        'border-primary relative rounded-full border bg-transparent text-white',
        'hover:before:translate-x-0',
        'before:bg-primary before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:translate-x-full before:transition-all before:duration-300'
      )}
      disabled={disabled}
    >
      <span className={classNames('font-semibold uppercase')}>{children}</span>
      {icon && (
        <span
          className={classNames(
            'absolute top-0 -right-px',
            'flex items-center justify-center',
            'aspect-square h-full',
            'bg-primary rounded-full text-2xl'
          )}
        >
          {icon}
        </span>
      )}
    </button>
  );
}

export default PrimaryButton;
