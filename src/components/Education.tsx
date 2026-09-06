import { courses, education } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" index="06" title="Education & Courses">
      <div className="edu-grid">
        <Reveal as="section" className="edu-column" aria-label="Courses">
          <h3 className="edu-heading">Courses</h3>
          <ul className="edu-list">
            {courses.map((course) => (
              <li key={course.title}>
                <span className="edu-primary">{course.title}</span>
                <span className="edu-secondary">
                  {course.provider}
                  <span className="edu-sep" aria-hidden="true">
                    ·
                  </span>
                  {course.period}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="edu-column" aria-label="Education" delay={70}>
          <h3 className="edu-heading">Education</h3>
          <ul className="edu-list">
            {education.map((item) => (
              <li key={item.degree}>
                <span className="edu-primary">{item.degree}</span>
                <span className="edu-secondary">
                  {item.institution}
                  <span className="edu-sep" aria-hidden="true">
                    ·
                  </span>
                  {item.period}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
