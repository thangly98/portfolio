import { useEffect, useState } from 'react'
import { GET } from '@functions/fetch'
import LoadingPage from '@components/Fragments/LoadingPage'
import AboutPage, { IResumeType } from '@components/Pages/About'

function About() {
  const [data, setData] = useState<IResumeType>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      await GET('https://thangly.hasura.app/api/rest/about-page').then((data) => {
        const { information, education, experience, projects_aggregate, skills } = data
        setData({
          information: information[0],
          educations: education,
          experiences: experience,
          experience_start_date: experience.at(-1)?.start_date,
          total_companies: experience.length,
          total_projects: projects_aggregate.aggregate.count,
          skills,
        })
        setLoading(false)
      })
    }

    fetchData()
  }, [])

  return <LoadingPage component={data ? <AboutPage data={data} /> : null} loading={loading} />
}

export default About
