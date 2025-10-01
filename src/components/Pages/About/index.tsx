import classNames from '@functions/classNames';
import { IEducationType, IInformationType } from '@interfaces';

import Container from '@components/Fragments/Container';
import PageTitle from '@components/Fragments/PageTitle';

import MyExperiences from './Experience';
import PersonalInfos from './Information';
import MySkills from './Skill';

type IResumeType = {
  information: IInformationType;
  educations: IEducationType[];
  experiences: IExperienceType[];
  experience_start_date?: string;
  total_companies: number;
  total_projects: number;
  skills: ISkillType[];
};
type ISkillType = { name: string; point: number };

type IExperienceType = IEducationType & object;

function AboutPage({ data }: Readonly<{ data: IResumeType }>) {
  const { skills, educations, experiences } = data;

  return (
    <Container className={classNames('max-md:pb-20')}>
      <PageTitle title='About me' titleBg='Resume' />
      <PersonalInfos data={data} />
      <MySkills data={skills} />
      <MyExperiences data={{ educations, experiences }} />
    </Container>
  );
}

export default AboutPage;
export type { IResumeType, ISkillType, IEducationType, IExperienceType };
