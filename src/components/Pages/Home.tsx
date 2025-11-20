import { Link } from 'react-router-dom';

import classNames from '@functions/classNames';

import ArrowRightIcon from '@assets/icons/map-arrow-right-filled.svg?react';
import Animate from '@components/Fragments/Animate';
import Magnet from '@components/Fragments/Magnet';
import PrimaryButton from '@components/Fragments/PrimaryButton';
import ShinyText from '@components/Fragments/ShinyText';
import TiltedCard from '@components/Fragments/TiltedCard';
import useWindowSize from '@hooks/useWindowSize';
import { IDataHomePage } from '@pages/Home';

function HomePage({ data }: Readonly<{ data: IDataHomePage }>) {
  const windowSize = useWindowSize();
  return (
    <div className='container mx-auto px-4'>
      <div className={classNames('bg-primary', 'fixed -top-1/2 -left-[83%] -z-10 h-[200%] w-full -rotate-15', 'max-lg:hidden')} />
      <div
        className={classNames(
          'grid grid-cols-[2fr_3fr] content-center gap-10',
          'min-h-screen',
          'max-lg:grid-cols-[100%] max-lg:py-10 md:max-lg:text-center',
          'max-md:text-sm'
        )}
      >
        {windowSize.width > 768 && (
          <Animate animation='flip-left'>
            <div className='flex justify-center max-md:hidden'>
              <TiltedCard
                imageSrc={data.avatar.url}
                fetchPriority='high'
                containerWidth={500}
                containerHeight={500}
                imageWidth={500}
                imageHeight={500}
                showTooltip={false}
                showMobileWarning={false}
              />
            </div>
          </Animate>
        )}

        <div className={classNames('mx-auto max-w-2xl', 'content-center')}>
          <Animate animation='fade'>
            <div
              className={classNames(
                'relative pl-20',
                'text-5xl leading-tight font-bold uppercase',
                'before:bg-primary before:absolute before:top-7 before:left-0 before:h-1 before:w-10',
                'max-lg:pl-0 max-lg:text-4xl max-lg:before:content-none',
                'max-md:text-2xl'
              )}
            >
              <h1 className={classNames('text-primary mix-blend-normal')}>
                I'm {data.last_name} {data.first_name}.
              </h1>
              <h2 className={classNames('text-white')}>Front-end Engineer</h2>
            </div>
          </Animate>
          <Animate animation='fade' animationDelay={200}>
            <ShinyText
              text={data.introduction}
              className={classNames('mt-5 mb-7', 'leading-loose font-medium', '[&_li]:mt-2 [&_ul]:list-inside [&_ul]:list-disc')}
            />
            {/* <div
              className={classNames('mt-5 mb-7', 'font-medium leading-loose', '[&_ul]:list-disc [&_ul]:list-inside [&_li]:mt-2')}
              dangerouslySetInnerHTML={{ __html: data.introduction }}
            /> */}
          </Animate>
          <Magnet>
            <Animate animation='fade' animationDelay={400}>
              <Link to={'/about'} className='max-lg:justify-center md:max-lg:flex'>
                <PrimaryButton icon={<ArrowRightIcon />}>More about me</PrimaryButton>
              </Link>
            </Animate>
          </Magnet>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
