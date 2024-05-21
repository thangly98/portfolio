import { ReactNode } from 'react'
import ProgressLoader from '@components/Fragments/ProgressLoader'

interface LoadingPage {
  loading: boolean
  component: ReactNode
}

export default function LoadingPage({ loading, component }: Readonly<LoadingPage>) {
  return (
    <div
      className={[
        'relative min-h-screen',
        'after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-[#222222]',
        !loading ? 'after:animate-page-loading' : '',
      ].join(' ')}>
      {loading && (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
          <ProgressLoader />
        </div>
      )}
      {!loading && component}
    </div>
  )
}
