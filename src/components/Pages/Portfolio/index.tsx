import { useState } from 'react'

import classNames from '@functions/classNames'

import Container from '@components/Fragments/Container'
import PageTitle from '@components/Fragments/PageTitle'
import ProjectItem from './Item'
import ProjectViewer from './View'

import type { IProject } from '@pages/Portfolio'

function PortfolioPage({ data }: Readonly<{ data: IProject[] }>) {
  const [openView, setOpenView] = useState<boolean>(false)
  const [projectView, setProjectView] = useState<IProject>()

  const handleView = (data: IProject) => {
    setProjectView(data)
    setOpenView(true)
  }

  return (
    <Container className={classNames('max-md:py-24')}>
      <PageTitle title='My Portfolio' titleBg='Works' />

      <div className={classNames('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8')}>
        {data.map((project) => (
          <ProjectItem key={project.name} data={project} onClick={handleView} />
        ))}
      </div>

      <ProjectViewer open={openView} data={projectView} onClose={() => setOpenView(false)} />
    </Container>
  )
}

export default PortfolioPage
