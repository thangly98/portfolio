import Container from '@components/Fragments/Container'
import PageTitle from '@components/Fragments/PageTitle'
import PersonalInfos from './Information'
import MySkills from './Skill'
import MyExperiences from './Experience'

type IResumeType = {
  information: { avatar: string; first_name: string; last_name: string; birthday: string; address: string; phone: string; email: string }
  links: { name: string; url: string }[]
  experience_start_date?: string
  total_companies: number
  total_projects: number
  skills: ISkillType[]
}
type ISkillType = { name: string; point: number }

function AboutPage({ data }: Readonly<{ data: IResumeType }>) {
  return (
    <Container>
      <PageTitle title='About me' titleBg='Resume' />
      <PersonalInfos data={data} />
      <MySkills data={data.skills} />
      <MyExperiences />
    </Container>
  )
}

export default AboutPage
export type { IResumeType, ISkillType }
