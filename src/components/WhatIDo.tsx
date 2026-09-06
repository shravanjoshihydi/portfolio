import { whatIDo } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function WhatIDo() {
  return (
    <Section id="what-i-do" index="02" title="What I Do">
      <div className="card-grid">
        {whatIDo.map((item, i) => (
          <Reveal as="article" className="card" key={item.title} delay={(i % 2) * 70}>
            <span className="card-index" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
