import SectionTitle from './SectionTitle';
import { skills } from '../data';
import SkillsCard from './SkillsCard';

function Skills() {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 gap-8 grid md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard {...skill} key={skill.id} />;
        })}
      </div>
    </section>
  );
}
export default Skills;
