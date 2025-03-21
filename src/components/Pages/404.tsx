import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import classNames from '@functions/classNames';

import Container from '@components/Fragments/Container';
import GlitchText from '@components/Fragments/GlitchText';
import StarBorder from '@components/Fragments/StarBorder';

function NotFoundPage() {
  const indexCharacterRef = useRef<number>(0);

  useEffect(() => {
    const characterActive = document.querySelectorAll('li.active');
    const interval = setInterval(() => {
      if (indexCharacterRef.current < characterActive.length) {
        characterActive?.[indexCharacterRef.current].classList.add('!bg-primary', '!text-white', '!font-medium');
        indexCharacterRef.current++;
      } else clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, [indexCharacterRef]);

  return (
    <Container>
      <div className={classNames('min-h-dvh', 'grid gap-x-20 gap-y-10 lg:grid-cols-2', 'max-md:content-center max-md:text-center')}>
        <div className={classNames('content-center')}>
          <ul
            className={classNames(
              'grid grid-cols-8',
              '[&_li]:flex [&_li]:aspect-square [&_li]:items-center [&_li]:justify-center',
              '[&_li]:text-xl [&_li]:uppercase [&_li]:text-slate-300',
              '[&_li]:border-2 [&_li]:border-[#111] [&_li]:bg-[--border-color]',
              '[&_li]:transition-all [&_li]:duration-300'
            )}
          >
            <li>k</li>
            <li>v</li>
            <li>n</li>
            <li>z</li>
            <li>i</li>
            <li>x</li>
            <li>m</li>
            <li>e</li>
            <li>t</li>
            <li>a</li>
            <li>x</li>
            <li>l</li>
            <li className='active'>4</li>
            <li className='active'>0</li>
            <li className='active'>4</li>
            <li>y</li>
            <li>y</li>
            <li>w</li>
            <li>v</li>
            <li>b</li>
            <li>o</li>
            <li>q</li>
            <li>d</li>
            <li>y</li>
            <li>p</li>
            <li>a</li>
            <li className='active'>p</li>
            <li className='active'>a</li>
            <li className='active'>g</li>
            <li className='active'>e</li>
            <li>v</li>
            <li>j</li>
            <li>a</li>
            <li className='active'>n</li>
            <li className='active'>o</li>
            <li className='active'>t</li>
            <li>s</li>
            <li>c</li>
            <li>e</li>
            <li>w</li>
            <li>v</li>
            <li>x</li>
            <li>e</li>
            <li>p</li>
            <li>c</li>
            <li>f</li>
            <li>h</li>
            <li>q</li>
            <li>e</li>
            <li className='active'>f</li>
            <li className='active'>o</li>
            <li className='active'>u</li>
            <li className='active'>n</li>
            <li className='active'>d</li>
            <li>s</li>
            <li>w</li>
            <li>q</li>
            <li>v</li>
            <li>o</li>
            <li>s</li>
            <li>m</li>
            <li>v</li>
            <li>f</li>
            <li>u</li>
          </ul>
        </div>
        <div className={classNames('content-center')}>
          <h1 className={classNames('text-3xl')}>
            <GlitchText speed={1} enableOnHover className='!text-4xl font-bold'>
              Oops! Something is wrong.
            </GlitchText>
          </h1>
          <Link to={'/'}>
            <StarBorder className='mt-10' color='#ffb400'>
              Go to Homepage
            </StarBorder>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default NotFoundPage;
