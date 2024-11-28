import Section from './section';
import { Icons } from '@/components/icons';
import LabelWithGraphic from '@/components/label-with-graphic';

const education: EducationProps[] = [
  {
    title: 'BSc in Computer Science and Engineering',
    gpa: '1st class',
    org: {
      name: 'Chittagong University of Engineering & Technology',
      logo: '/images/cuet.png',
    },
    time: '2009 - 2014',
  },
  {
    title: 'Data Visualization using D3, JavaScript, React.js, Web Development',
    gpa: "",
    org: {
      name: 'freeCodeCamp',
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGLKj3JHcof0w/company-logo_100_100/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1740614400&v=beta&t=kgkmXH769Z-42_MMm_NUEwtHnNLnC_ECNomvLIKowgk',
    },
    time: 'Apr 2021 - Jun 2021',
  },
];

function Education({ title, gpa, org, time }: EducationProps) {
  return (
    <section className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
      <div className="hidden md:block">
        <div className="text-sm font-semibold flex flex-wrap justify-between text-zinc-700 dark:text-zinc-300">
          <div className="flex gap-x-4 flex-wrap">
            <span className="font-bold text-black dark:text-white">
              {title}
            </span>
            <LabelWithGraphic icon={Icons.FileBadge} content={gpa} />
          </div>
          <span>{time}</span>
        </div>
        <LabelWithGraphic image={org.logo} content={org.name} />
      </div>
      <div className="text-sm font-semibold md:hidden text-zinc-700 dark:text-zinc-300 mb-1">
        <div className="flex gap-x-4 flex-wrap justify-between">
          <div className="font-bold text-black dark:text-white">{title}</div>
          <LabelWithGraphic icon={Icons.FileBadge} content={gpa} />
        </div>
        <div className="flex gap-x-4 flex-wrap justify-between">
          <LabelWithGraphic image={org.logo} content={org.name} />
          <span className="text-right flex-1">{time}</span>
        </div>
      </div>
    </section>
  );
}

export default function EducationSection() {
  return (
    <Section title="EDUCATION">
      <div className="flex flex-col gap-y-1">
        {education.map((e, index) => (
          <Education key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
