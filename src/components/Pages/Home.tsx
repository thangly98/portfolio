import { Link } from 'react-router-dom';

import ArrowRightIcon from '@assets/icons/map-arrow-right-filled.svg?react';
import classNames from '@functions/classNames';

import Animate from '@components/Fragments/Animate';
import PrimaryButton from '@components/Fragments/PrimaryButton';
import ShinyText from '@components/Fragments/ShinyText';
import TiltedCard from '@components/Fragments/TiltedCard';
import { IDataHomePage } from '@pages/Home';

function HomePage({ data }: Readonly<{ data: IDataHomePage }>) {
  return (
    <div className='container mx-auto px-4'>
      <div className={classNames('bg-primary', 'fixed -left-[83%] -top-1/2 -z-10 h-[200%] w-full -rotate-[15deg]', 'max-lg:hidden')} />
      <div
        className={classNames(
          'grid grid-cols-[2fr_3fr] content-center gap-10',
          'min-h-screen',
          'max-lg:grid-cols-[100%] max-lg:py-10 md:max-lg:text-center',
          'max-md:text-sm'
        )}
      >
        <Animate animation='flip-left'>
          <div className='flex justify-center max-md:hidden'>
            <TiltedCard
              imageSrc={data.avatar}
              containerWidth={500}
              containerHeight={500}
              imageWidth={500}
              imageHeight={500}
              showTooltip={false}
              showMobileWarning={false}
            />
          </div>
        </Animate>

        <div className={classNames('mx-auto max-w-2xl', 'content-center')}>
          <Animate animation='fade'>
            <h1
              className={classNames(
                'relative pl-20',
                'text-5xl font-bold uppercase leading-tight text-primary',
                'before:absolute before:left-0 before:top-7 before:h-1 before:w-10 before:bg-primary',
                'max-lg:pl-0 max-lg:text-4xl max-lg:before:content-none',
                'max-md:text-2xl'
              )}
            >
              I'm {data.last_name} {data.first_name}.<span className={classNames('block', 'text-white')}>Front-end Engineer</span>
            </h1>
          </Animate>
          <Animate animation='fade' animationDelay={200}>
            <ShinyText
              text={data.introduction}
              className={classNames('mb-7 mt-5', 'font-medium leading-loose', '[&_li]:mt-2 [&_ul]:list-inside [&_ul]:list-disc')}
            />
            {/* <div
              className={classNames('mt-5 mb-7', 'font-medium leading-loose', '[&_ul]:list-disc [&_ul]:list-inside [&_li]:mt-2')}
              dangerouslySetInnerHTML={{ __html: data.introduction }}
            /> */}
          </Animate>
          <Animate animation='fade' animationDelay={400}>
            <Link to={'/about'} className='max-lg:justify-center md:max-lg:flex'>
              <PrimaryButton icon={<ArrowRightIcon />}>More about me</PrimaryButton>
            </Link>
          </Animate>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
