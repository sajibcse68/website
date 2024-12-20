import { Container } from '@/components/container';
import React from 'react';
import ActionButton from '@/components/action-button';
import Motion from '@/components/motion';
import HeaderSection from '@/components/sections/HeaderSection';
import SkillSection from '@/components/sections/SkillSection';
import WorkSection from '@/components/sections/WorkSection';
import ProjectSection from '@/components/sections/ProjectSection';
import EducationSection from '@/components/sections/education-section';
import { RESUME_TYPES } from '@/components/constants';

type Props = {
  usage: 'live' | 'pdf';
};

// You can add more type definitions here by using OR (|) operator
type ComponentProps = Props;

type AnimatedComponent = {
  component: React.FC<ComponentProps>; // React functional component
  props?: ComponentProps; // optional props
  delay: number; // delay for animation
};

const FullResume = React.forwardRef(({ usage }: Props, ref) => {
  const animatedComponents: AnimatedComponent[] = [
    { component: HeaderSection, props: { usage }, delay: 0.1 },
    { component: SkillSection, delay: 0.3 },
    { component: WorkSection, delay: 0.5 },
    { component: ProjectSection, delay: 0.7 },
    { component: EducationSection, delay: 0.9 },
  ];

  return (
    <Container
      className="my-9 max-w-6xl mx-auto"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {animatedComponents.map(
        ({ component: Component, props = { usage: 'live' }, delay }, index) =>
          usage === 'live' ? (
            <Motion key={index} delay={delay}>
              <Component {...props} />
            </Motion>
          ) : (
            // disable animation for pdf
            <Component key={index} {...props} />
          )
      )}
      {usage === RESUME_TYPES.LIVE && (
        <div className="flex sm:hidden justify-center mt-10">
          <ActionButton
            text="Download Resume"
            className="block sm:hidden"
            usage={RESUME_TYPES.LIVE}
          />
        </div>
      )}
    </Container>
  );
});

FullResume.displayName = 'FullResume';

export default FullResume;
