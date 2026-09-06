import { useState } from "react";
import type { FormEvent } from "react";
import { profile } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Status = "idle" | "sending" | "sent" | "error";

const FORM_NAME = "contact";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");

    // Netlify Forms accepts a URL-encoded POST to any path on the site; the
    // hidden twin of this form in index.html is what registers it at build time.
    const body = new URLSearchParams(
      new FormData(form) as unknown as Record<string, string>,
    ).toString();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" index="07" title="Contact">
      <div className="contact-grid">
        <Reveal className="contact-side">
          <p className="lead">
            Open to conversations about frontend and platform engineering roles.
          </p>
          <ul className="contact-links">
            <li>
              <span className="contact-label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="contact-label">LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                {profile.linkedinLabel}
                <span className="ext" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
            <li>
              <span className="contact-label">GitHub</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                {profile.githubLabel}
                <span className="ext" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal
          as="form"
          className="contact-form"
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          delay={80}
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p className="hp-field">
            <label>
              Leave this field empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" autoComplete="name" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" autoComplete="email" required />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>

          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p
            className={`form-status${status === "sent" ? " is-ok" : ""}${
              status === "error" ? " is-error" : ""
            }`}
            role="status"
            aria-live="polite"
          >
            {status === "sent" && "Message sent. I'll get back to you."}
            {status === "error" && (
              <>
                Could not send right now — email me directly at{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </>
            )}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
