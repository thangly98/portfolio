import useFetchApi from 'src/hooks/useFetchApi'
import LoadingPage from '@components/Fragments/LoadingPage'
import HomePage from '@components/Pages/Home'

type IDataHomePage = {
  avatar: string
  first_name: string
  last_name: string
  introduction: string
}

function Home() {
  const { loading, data } = useFetchApi<{ information: [IDataHomePage] }>('https://thangly.hasura.app/api/rest/homepage')

  return <LoadingPage component={data ? <HomePage data={data.information[0]} /> : null} loading={loading} />
}

export type { IDataHomePage }
export default Home
