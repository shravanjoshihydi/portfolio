import { experience } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <Reveal
            as="li"
            className={`timeline-item${job.current ? " is-current" : ""}`}
            key={job.period}
          >
            <div className="timeline-meta">
              <span className="timeline-date">{job.period}</span>
              {job.current && <span className="badge">Current</span>}
            </div>

            <div className="timeline-body">
              <h3 className="role">{job.role}</h3>
              <p className="company">
                {job.company}
                <span className="company-sep" aria-hidden="true">
                  ·
                </span>
                {job.place}
              </p>
              <ul className="bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
