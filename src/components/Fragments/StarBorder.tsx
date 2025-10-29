import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as ?? 'button';

  return (
    <Component className={`relative inline-block overflow-hidden rounded-[20px] py-px ${className}`} {...rest}>
      <div
        className='absolute bottom-[-11px] right-[-250%] z-0 h-[50%] w-[300%] animate-star-movement-bottom rounded-full opacity-70'
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className='absolute left-[-250%] top-[-10px] z-0 h-[50%] w-[300%] animate-star-movement-top rounded-full opacity-70'
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className='z-1 relative rounded-[20px] border border-gray-800 bg-linear-to-b from-black to-gray-900 px-[26px] py-[16px] text-center text-[16px] text-white'>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
