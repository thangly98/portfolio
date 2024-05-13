import { PropsWithChildren } from 'react'

function Container({ children }: Readonly<PropsWithChildren>) {
  return <div className='container lg:max-xl:max-w-[calc(100%-200px)] xl:max-w-[1140px] px-6 mx-auto'>{children}</div>
}

export default Container
