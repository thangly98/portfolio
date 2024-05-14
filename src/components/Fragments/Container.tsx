import { PropsWithChildren } from 'react'

function Container({ className, children }: Readonly<PropsWithChildren & { className?: string }>) {
  return <div className={'container lg:max-xl:max-w-[calc(100%-200px)] xl:max-w-[1140px] px-6 mx-auto ' + className}>{children}</div>
}

export default Container
