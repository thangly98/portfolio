import LoadingPage from '@components/Fragments/LoadingPage'
import PortfolioPage from '@components/Pages/Portfolio'
import useFetchApi from 'src/hooks/useFetchApi'

type IProject = {
  name: string
  thumbnail?: string
  introduction: string
  position: string
  members: number
  technology: string[]
  description?: string
  link?: string
}

function Portfolio() {
  const { loading, data } = useFetchApi<{ projects: IProject[] }>('https://thangly.hasura.app/api/rest/portfolio-page')

  return <LoadingPage component={data ? <PortfolioPage data={data.projects} /> : null} loading={loading} />
}

export type { IProject }
export default Portfolio
