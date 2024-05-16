import { FormEvent, useState } from 'react'

import emailjs from '@emailjs/browser'

import classNames from '@functions/classNames'

import Container from '@components/Fragments/Container'
import PageTitle from '@components/Fragments/PageTitle'
import ButtonPrimary from '@components/Fragments/ButtonPrimary'
import MailIcon from '@assets/icons/envelope-open-filled.svg?react'
import PhoneIcon from '@assets/icons/phone-square-filled.svg?react'
import PlaneIcon from '@assets/icons/plane-filled.svg?react'

import { IDataContactPage } from '@pages/Contact'

const { VITE_MAILJS_SERVICE_ID, VITE_MAILJS_TEMPLATE_ID, VITE_MAILJS_PUBLIC_KEY } = import.meta.env

function ContactPage({ data }: Readonly<{ data: IDataContactPage }>) {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm(VITE_MAILJS_SERVICE_ID, VITE_MAILJS_TEMPLATE_ID, e.target as HTMLFormElement, { publicKey: VITE_MAILJS_PUBLIC_KEY })
      .then(() => (e.target as HTMLFormElement).reset())
      .finally(() => setLoading(false))
  }

  return (
    <Container className={classNames('max-md:py-28')}>
      <PageTitle title='Get in touch' titleBg='Contact' />
      <div className={classNames('flex flex-wrap gap-y-6 -mx-4 text-[.9375rem]')}>
        <div className={classNames('basis-full lg:basis-2/5 px-4')}>
          <h3 className={classNames('mb-4 text-2xl font-bold')}>DON'T BE SHY !</h3>
          <p className={classNames('mb-4')}>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className={classNames('flex items-center gap-4 mb-2')}>
            <MailIcon className={classNames('text-4xl text-primary')} />
            <div>
              <p className={classNames('uppercase opacity-80')}>Mail me</p>
              <p className={classNames('font-semibold')}>{data.information.email}</p>
            </div>
          </div>
          <div className={classNames('flex items-center gap-4 mb-4')}>
            <PhoneIcon className={classNames('text-4xl text-primary')} />
            <div>
              <p className={classNames('uppercase opacity-80')}>Call me</p>
              <p className={classNames('font-semibold')}>{data.information.phone}</p>
            </div>
          </div>
        </div>
        <div className={classNames('basis-full lg:basis-3/5 px-4')}>
          <form
            className={classNames(
              'flex flex-wrap content-start -mx-2 [&>div]:basis-full [&>div]:px-2 [&>div]:mb-4',
              '[&_input]:placeholder:uppercase [&_input:focus-visible]:outline [&_input:focus-visible]:outline-primary',
              '[&_textarea]:placeholder:uppercase [&_textarea:focus-visible]:outline [&_textarea:focus-visible]:outline-primary'
            )}
            onSubmit={handleSubmit}>
            <div className={classNames('lg:!basis-1/2')}>
              <input
                className={classNames('w-full py-3 px-7 rounded-full bg-[--border-color]')}
                type='text'
                placeholder='Your name'
                name='name'
                required
                disabled={loading}
              />
            </div>
            <div className={classNames('lg:!basis-1/2')}>
              <input
                className={classNames('w-full py-3 px-7 rounded-full bg-[--border-color]')}
                type='email'
                placeholder='Your email'
                name='email'
                required
                disabled={loading}
              />
            </div>
            <div>
              <input
                className={classNames('w-full py-3 px-7 rounded-full bg-[--border-color]')}
                type='text'
                placeholder='Your subject'
                name='subject'
                required
                disabled={loading}
              />
            </div>
            <div>
              <textarea
                className={classNames('w-full min-h-32 py-3 px-7 rounded-3xl bg-[--border-color]')}
                placeholder='Your message'
                name='message'
                required
                disabled={loading}
              />
            </div>
            <div>
              <ButtonPrimary icon={<PlaneIcon />} disabled={loading}>
                Send message
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default ContactPage
