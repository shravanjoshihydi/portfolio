import { about } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="about-grid">
        <Reveal className="about-body">
          <p className="lead">{about.lead}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal as="aside" className="about-side" aria-label="At a glance" delay={80}>
          <h3 className="side-title">At a glance</h3>
          <ul className="side-list">
            {about.glance.map((item) => (
              <li key={item.label}>
                <span className="side-label">{item.label}</span>
                <span className="side-value">{item.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
