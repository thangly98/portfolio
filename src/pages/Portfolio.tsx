import useFetchApi from 'src/hooks/useFetchApi';

import LoadingPage from '@components/Fragments/LoadingPage';
import PortfolioPage from '@components/Pages/Portfolio';

type IProject = {
  name: string;
  thumbnail: {
    url: string;
  };
  galleries?: {
    media: {
      url: string;
    };
    caption?: string;
  }[];
  introduction: string;
  position: string;
  members: number;
  technology: string[];
  description?: string;
  achievement?: string;
  link?: string;
};

function Portfolio() {
  const { loading, data } = useFetchApi<{ projects: IProject[] }>('https://thangly.hasura.app/api/rest/portfolio-page');

  return <LoadingPage component={data ? <PortfolioPage data={data.projects} /> : null} loading={loading} />;
}

export type { IProject };
export default Portfolio;
