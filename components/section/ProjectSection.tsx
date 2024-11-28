import Section from './section';
import Experience from '@/components/experience';
import LabelWithGraphic from '@/components/label-with-graphic';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import { type ImageProps } from 'next/image';
import { headers } from 'next/headers';

type ProjectTitleProps = {
  image: ImageProps['src'];
  title: string;
  link: string;
};

async function getStarNumber(owner: string, repo: string) {
  const host = (await headers()).get('host');
  const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  const queryParams = new URLSearchParams({ owner, repo }).toString();
  const res = await fetch(
    `${protocol}://${host}/api/github/star?${queryParams}`,
    {
      cache: 'no-cache',
    }
  );
  const { starNumber } = await res.json();
  return starNumber;
}

function ProjectTitle({ image, title, link }: ProjectTitleProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-x-1 group"
    >
      <LabelWithGraphic image={image} content={title} />
      <Icons.Link
        size={12}
        className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
      />
    </Link>
  );
}

export default async function ProjectSection() {
  const exp: ExperienceProps[] = [
    {
      head1: (
        <ProjectTitle
          image="/images/logos/nextjs.png"
          title="MyDailyLearn"
          link="https://github.com/sajibcse68/MyDailyLearn"
        />
      ),
      head2: (
        <LabelWithGraphic
          icon={Icons.Stack}
          content="JavaScript, React, Git, etc."
        />
      ),
      head3: (
        <LabelWithGraphic
          icon={Icons.Star}
          content={`# Github Stars: ${await getStarNumber(
            'sajibcse68',
            'MyDailyLearn'
          )}`}
        />
      ),
      head4: '2015 - Pres.',
      bulletPoints: [
        'The repository is a curated collection of interview questions for frontend development, categorized by topic and technology.',
        'It covers a wide range of frontend concepts, including JavaScript fundamentals, popular frameworks (React, Vue, Angular), build tools, and more',
      ],
    },
    {
      head1: (
        <ProjectTitle
          image="/images/logos/tailwind.webp"
          title="CSS Advanced Animations"
          link="https://github.com/sajibcse68/css-advanced-animations"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="HTML, CSS" />,
      head3: (
        <LabelWithGraphic
          icon={Icons.Star}
          content={`# Github Stars: ${await getStarNumber(
            'sajibcse68',
            'css-advanced-animations'
          )}`}
        />
      ),
      head4: '2022',
      bulletPoints: [
        'It represents a collection of interactive buttons, each demonstrating a distinct CSS animation or transition effect triggered on hover',
        'The code exemplifies frontend development techniques for creating visually engaging and interactive user interfaces with CSS animations and transitions, with a focus on enhancing user experience through hover effects and visual feedback',
      ],
    },
    {
      head1: (
        <ProjectTitle
          image="/images/logos/tailwind.webp"
          title="My Certificates"
          link="https://github.com/sajibcse68/certificates"
        />
      ),
      head2: (
        <LabelWithGraphic
          icon={Icons.Stack}
          content="JavaScript, React, Git, Blockchain, Personal Development"
        />
      ),
      head3: (
        <LabelWithGraphic
          icon={Icons.Star}
          content={`# Github Stars: ${await getStarNumber(
            'sajibcse68',
            'certificates'
          )}`}
        />
      ),
      head4: 'Jul 2018 - Pres.',
      bulletPoints: [
        'The repository primarily showcases completed courses related to frontend development, including JavaScript, React, TypeScript, and Vue.js.',
        'Beyond core web development, the repository demonstrates an interest in data visualization, blockchain, personal productivity, and even Google Analytics, suggesting a diverse skillset and continuous learning mindset.',
      ],
    },
  ];

  return (
    <Section title="PROJECT">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
