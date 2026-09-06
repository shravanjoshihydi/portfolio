import { flagships, learningProjects, poc, profile } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <div className="flagships">
        {flagships.map((project, i) => (
          <Reveal as="article" className="flagship" key={project.title} delay={i * 70}>
            <header className="flagship-head">
              <h3>{project.title}</h3>
              <span className={`tag tag-${project.tag.tone}`}>{project.tag.label}</span>
            </header>

            <dl className="narrative">
              {project.narrative.map((step) => (
                <div key={step.term}>
                  <dt>{step.term}</dt>
                  <dd>{step.detail}</dd>
                </div>
              ))}
            </dl>

            <ul className="tags" aria-label="Technologies">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal as="article" className="poc">
        <div className="poc-head">
          <h3>{poc.title}</h3>
          <span className="tag tag-muted">{poc.tag}</span>
        </div>
        <p>{poc.body}</p>
        <ul className="tags" aria-label="Technologies">
          {poc.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="learning">
        <div className="learning-head">
          <h3>Learning Projects</h3>
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            All repositories on GitHub
            <span className="ext" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
        <p className="learning-note">Solo builds from the MERN fellowship period.</p>

        <ul className="learning-list">
          {learningProjects.map((project) => (
            <li key={project.name}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <span className="learning-name">{project.name}</span>
                <span className="learning-tech">{project.tech}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
