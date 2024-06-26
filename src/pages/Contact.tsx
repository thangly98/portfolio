import useFetchApi from '@hooks/useFetchApi'
import { ILink } from '@interfaces/data'
import LoadingPage from '@components/Fragments/LoadingPage'
import ContactPage from '@components/Pages/Contact'

type IInformation = { email: string; phone: string }
type IDataContactPage = { information: IInformation; links: ILink[] }

function Contact() {
  const { loading, data } = useFetchApi<Pick<IDataContactPage, 'links'> & { information: [IInformation] }>(
    'https://thangly.hasura.app/api/rest/contact-page'
  )
  return <LoadingPage component={data ? <ContactPage data={{ ...data, information: data.information[0] }} /> : null} loading={loading} />
}

export type { IDataContactPage }
export default Contact
