import Section from './section';
import Experience from '@/components/experience';
import LabelWithGraphic from '@/components/label-with-graphic';
import { Icons } from '@/components/icons';

const exp: ExperienceProps[] = [
  {
    head1: 'Lead Software Engineer',
    head2: (
      <LabelWithGraphic
        icon={Icons.Briefcase}
        content="Goava"
      />
    ),
    head3: (
      <LabelWithGraphic
        icon={Icons.Stack}
        content="Next.js, React.js, TypeScript, Redux"
      />
    ),
    head4: 'Jul 2021 - Pres.',
    bulletPoints: [
      'Architected and developed complex user interfaces using React, Redux, and Next.js.',
      'Migrated legacy codebase to the latest React.js, reducing load time by 30%.',
      'Translated pixel-perfect Figma designs into responsive interfaces using CSS (e.g. Styled-Components, Tailwind, SCSS)',
      'Provided technical leadership and mentoring to a team of talented engineers.',
      'Collaborated effectively with cross-functional teams (product, design, backend) to define and implement innovative product features.',
      'Ensure the delivery of high-quality code through rigorous code reviews, comprehensive testing, and adherence to industry best practices.',
      'Optimized web applications for exceptional performance, accessibility, and SEO.',
      'Proactively troubleshoot and debug critical issues, providing efficient and effective solutions.',
    ],
    companyUrl: 'https://www.goava.com',
  },
  {
    head1: 'Senior Software Engineer',
    head2: (
      <LabelWithGraphic
        icon={Icons.Briefcase}
        content="Goava Sales Intelligence AB | Sweden | Remote"
      />
    ),
    head3: (
      <LabelWithGraphic
        icon={Icons.Stack}
        content="Team Lead | React.js | D3.js"
      />
    ),
    head4: 'Jul 2019 - Jun 2021',
    bulletPoints: [
      'Develop, refactor, and extend features in a modern web application using technologies like React, Redux, Redux-Saga, Next.js, GraphQL, ES6+, CSS and more.',
      'Implemented advanced charts and graphs with D3.js for enhanced data visualization.',
      'Lead and manage the frontend team in an Agile environment, fostering collaboration and maintaining productivity.',
      'Migrated web application APIs from REST to GraphQL using tools like Axios, AWS AppSync, and Normalizr, resulting in improved performance and flexibility.',
    ],
    companyUrl: 'https://www.goava.com',
  },
  {
    head1: 'Senior Software Engineer (Frontend Lead)',
    head2: (
      <LabelWithGraphic icon={Icons.Briefcase} content="AppsCode Inc. | USA" />
    ),

    head3: (
      <LabelWithGraphic
        icon={Icons.Stack}
        content="Vue 2 | CSS | Jenkins | Kubernetes"
      />
    ),
    head4: 'Nov 2014 - Jun 2018',
    bulletPoints: [
      'Developed Kubernetes Dashboard for AppsCode using Vue.js 2, Vuex, JavaScript, Axios. Designed & developed thousands of Vue Components from scratch, reuse the components, State reactive using Vuex, used Vue Plugins/Filtering/Mixins, etc.',
    ],
    companyUrl: 'https://appscode.com',
  },
];

export default function WorkSection() {
  return (
    <Section title="WORK EXPERIENCE">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} hideHead3 />
        ))}
      </div>
    </Section>
  );
}
