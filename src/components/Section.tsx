import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-index" aria-hidden="true">
            {index}
          </span>
          <h2 id={`${id}-title`}>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
