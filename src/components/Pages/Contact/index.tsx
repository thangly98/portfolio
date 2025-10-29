import { FormEvent, useState } from 'react';

import emailjs from '@emailjs/browser';
import classNames from '@functions/classNames';
import { ELinkName } from '@interfaces';

import MailIcon from '@assets/icons/envelope-open-filled.svg?react';
import FacebookIcon from '@assets/icons/facebook-filled.svg?react';
import GithubIcon from '@assets/icons/github-filled.svg?react';
import LinkedinIcon from '@assets/icons/linkedin-filled.svg?react';
import PhoneIcon from '@assets/icons/phone-square-filled.svg?react';
import PlaneIcon from '@assets/icons/plane-filled.svg?react';
import SkypeIcon from '@assets/icons/skype-filled.svg?react';
import Container from '@components/Fragments/Container';
import PageTitle from '@components/Fragments/PageTitle';
import PrimaryButton from '@components/Fragments/PrimaryButton';
import { IDataContactPage } from '@pages/Contact';

const { VITE_MAILJS_SERVICE_ID, VITE_MAILJS_TEMPLATE_ID, VITE_MAILJS_PUBLIC_KEY } = import.meta.env;

function ContactPage({ data }: Readonly<{ data: IDataContactPage }>) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(VITE_MAILJS_SERVICE_ID, VITE_MAILJS_TEMPLATE_ID, e.target as HTMLFormElement, { publicKey: VITE_MAILJS_PUBLIC_KEY })
      .then(() => (e.target as HTMLFormElement).reset())
      .finally(() => setLoading(false));
  };

  return (
    <Container className={classNames('max-md:py-28')}>
      <PageTitle title='Get in touch' titleBg='Contact' />
      <div className={classNames('-mx-4 flex flex-wrap gap-y-6 text-[.9375rem]')}>
        <div className={classNames('basis-full px-4 lg:basis-2/5')}>
          <h3 className={classNames('mb-4 text-2xl font-bold')}>DON'T BE SHY !</h3>
          <p className={classNames('mb-4')}>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of
            your visions.
          </p>
          <div className={classNames('mb-2 flex items-center gap-4')}>
            <MailIcon className={classNames('text-4xl text-primary')} />
            <div>
              <p className={classNames('uppercase opacity-80')}>Mail me</p>
              <p className={classNames('font-semibold')}>{data.information.email}</p>
            </div>
          </div>
          <div className={classNames('mb-4 flex items-center gap-4')}>
            <PhoneIcon className={classNames('text-4xl text-primary')} />
            <div>
              <p className={classNames('uppercase opacity-80')}>Call me</p>
              <p className={classNames('font-semibold')}>{data.information.phone}</p>
            </div>
          </div>
          <ul className={classNames('flex gap-4 pt-1')}>
            {data.links.map(({ name, label, url }) => (
              <li key={name} className={classNames('')}>
                <a
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  title={label}
                  className={classNames(
                    'inline-flex h-[40px] w-[40px] items-center justify-center',
                    'rounded-[50%] bg-[#2b2a2a] text-lg',
                    'transition-all hover:bg-primary'
                  )}
                >
                  {name === ELinkName.Facebook && <FacebookIcon />}
                  {name === ELinkName.Skype && <SkypeIcon />}
                  {name === ELinkName.LinkedIn && <LinkedinIcon />}
                  {name === ELinkName.GitHub && <GithubIcon />}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={classNames('basis-full px-4 lg:basis-3/5')}>
          <form
            className={classNames(
              '-mx-2 flex flex-wrap content-start [&>div]:mb-4 [&>div]:basis-full [&>div]:px-2',
              '[&_input:focus-visible]:outline [&_input:focus-visible]:outline-primary [&_input]:placeholder:uppercase',
              '[&_textarea:focus-visible]:outline [&_textarea:focus-visible]:outline-primary [&_textarea]:placeholder:uppercase'
            )}
            onSubmit={handleSubmit}
          >
            <div className={classNames('lg:basis-1/2!')}>
              <input
                className={classNames('w-full rounded-full bg-(--border-color) px-7 py-3')}
                type='text'
                placeholder='Your name'
                name='name'
                required
                disabled={loading}
              />
            </div>
            <div className={classNames('lg:basis-1/2!')}>
              <input
                className={classNames('w-full rounded-full bg-(--border-color) px-7 py-3')}
                type='email'
                placeholder='Your email'
                name='email'
                required
                disabled={loading}
              />
            </div>
            <div>
              <input
                className={classNames('w-full rounded-full bg-(--border-color) px-7 py-3')}
                type='text'
                placeholder='Your subject'
                name='subject'
                required
                disabled={loading}
              />
            </div>
            <div>
              <textarea
                className={classNames('min-h-32 w-full rounded-3xl bg-(--border-color) px-7 py-3')}
                placeholder='Your message'
                name='message'
                required
                disabled={loading}
              />
            </div>
            <div>
              <PrimaryButton icon={<PlaneIcon />} disabled={loading}>
                Send message
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ContactPage;
