import { skillGroups } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal as="section" className="skill-group" key={group.title} delay={(i % 2) * 70}>
            <h3>{group.title}</h3>
            <ul className="tags">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
