import { Link } from 'react-router-dom'

import classNames from '@functions/classNames'

import ArrowRightIcon from '@assets/icons/map-arrow-right-filled.svg?react'
import PrimaryButton from '@components/Fragments/PrimaryButton'
import Animate from '@components/Fragments/Animate'

import { IDataHomePage } from '@pages/Home'

function HomePage({ data }: Readonly<{ data: IDataHomePage }>) {
  return (
    <div className='container px-4 mx-auto'>
      <div className={classNames('bg-primary', 'fixed -top-1/2 -left-[83%] w-full h-[200%] -rotate-[15deg] -z-10', 'max-lg:hidden')} />
      <div
        className={classNames(
          'grid grid-cols-[2fr_3fr] content-center gap-10',
          'min-h-screen',
          'md:max-lg:text-center max-lg:grid-cols-[100%] max-lg:py-10',
          'max-md:text-sm'
        )}>
        <Animate animation='flip-left'>
          <img
            src={data.avatar}
            alt=''
            className={classNames(
              'w-full h-auto rounded-3xl bg-[--border-color] lg:shadow-[0_0_7px_rgba(0,0,0,.9)]',
              'max-md:hidden',
              'max-lg:w-60 max-lg:aspect-square max-lg:rounded-[50%] max-lg:object-cover max-lg:object-bottom max-lg:mx-auto max-lg:border-4 border-[--border-color]'
            )}
          />
        </Animate>
        <div className={classNames('max-w-2xl mx-auto', 'content-center')}>
          <Animate animation='fade'>
            <h1
              className={classNames(
                'relative pl-20',
                'text-5xl leading-tight font-bold text-primary uppercase',
                'before:absolute before:top-7 before:left-0 before:w-10 before:h-1 before:bg-primary',
                'max-lg:before:content-none max-lg:pl-0 max-lg:text-4xl',
                'max-md:text-2xl'
              )}>
              I'm {data.last_name} {data.first_name}.<span className={classNames('block', 'text-white')}>Front-end Developer</span>
            </h1>
          </Animate>
          <Animate animation='fade' animationDelay={200}>
            <div
              className={classNames('mt-5 mb-7', 'font-medium leading-loose', '[&_ul]:list-disc [&_ul]:list-inside [&_li]:mt-2')}
              dangerouslySetInnerHTML={{ __html: data.introduction }}
            />
          </Animate>
          <Animate animation='fade' animationDelay={400}>
            <Link to={'/about'} className='md:max-lg:flex max-lg:justify-center'>
              <PrimaryButton icon={<ArrowRightIcon />}>More about me</PrimaryButton>
            </Link>
          </Animate>
        </div>
      </div>
    </div>
  )
}

export default HomePage
