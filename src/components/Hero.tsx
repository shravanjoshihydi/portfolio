import { profile, stats } from "../data/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal as="p" className="eyebrow">
              {profile.role}
              <span className="eyebrow-dot" aria-hidden="true" />
              {profile.location}
            </Reveal>

            <Reveal as="h1" className="hero-name" delay={40}>
              {profile.name}
            </Reveal>

            <Reveal as="p" className="hero-title" delay={80}>
              {profile.title}
            </Reveal>

            <Reveal as="p" className="hero-statement" delay={120}>
              Sole maintainer of an internal CMS platform used to migrate{" "}
              <strong>300+ production websites</strong> to a modern React architecture. Now
              building a Next.js-based CMS and renderer engine.
            </Reveal>

            <Reveal className="hero-actions" delay={160}>
              <a className="btn btn-primary" href="#projects">
                View Work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Contact
              </a>
              <span className="hero-links">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <span className="ext" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <span className="ext" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </span>
            </Reveal>
          </div>

          <Reveal className="hero-photo" delay={80}>
            <img
              src="/profilepic.jpg"
              alt={profile.name}
              width={360}
              height={360}
              fetchPriority="high"
              decoding="async"
            />
          </Reveal>
        </div>

        <Reveal as="ul" className="stats" aria-label="Key metrics">
          {stats.map((stat) => (
            <li className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
