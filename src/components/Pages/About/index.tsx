import classNames from '@functions/classNames'

import Container from '@components/Fragments/Container'
import PageTitle from '@components/Fragments/PageTitle'
import PersonalInfos from './Information'
import MySkills from './Skill'
import MyExperiences from './Experience'

type IResumeType = {
  information: { avatar: string; first_name: string; last_name: string; birthday: string; address: string; phone: string; email: string }
  educations: IEducationType[]
  experiences: IExperienceType[]
  experience_start_date?: string
  total_companies: number
  total_projects: number
  skills: ISkillType[]
}
type ISkillType = { name: string; point: number }
type IEducationType = { name: string; position: string; content: string; start_date: string; end_date: string }
type IExperienceType = IEducationType

function AboutPage({ data }: Readonly<{ data: IResumeType }>) {
  const { skills, educations, experiences } = data

  return (
    <Container className={classNames('max-md:pb-20')}>
      <PageTitle title='About me' titleBg='Resume' />
      <PersonalInfos data={data} />
      <MySkills data={skills} />
      <MyExperiences data={{ educations, experiences }} />
    </Container>
  )
}

export default AboutPage
export type { IResumeType, ISkillType, IEducationType, IExperienceType }
