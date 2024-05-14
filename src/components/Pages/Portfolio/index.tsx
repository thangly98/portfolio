import { useState } from 'react'

import classNames from '@functions/classNames'

import Container from '@components/Fragments/Container'
import PageTitle from '@components/Fragments/PageTitle'
import ProjectItem from './Item'
import ProjectViewer from './View'

import type { IProject } from '@pages/Portfolio'

function PortfolioPage({ data }: Readonly<{ data: IProject[] }>) {
  const [projectView, setProjectView] = useState<IProject>()

  return (
    <Container>
      <PageTitle title='My Portfolio' titleBg='Works' />

      <div className={classNames('grid grid-cols-3 gap-8')}>
        {data.map((project) => (
          <ProjectItem key={project.name} data={project} onClick={setProjectView} />
        ))}
      </div>

      <ProjectViewer data={projectView} onClose={() => setProjectView(undefined)} />
    </Container>
  )
}

export default PortfolioPage
