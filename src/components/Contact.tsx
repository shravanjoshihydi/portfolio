import { useState } from "react";
import type { FormEvent } from "react";
import { profile } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Status = "idle" | "sending" | "sent" | "error";

// Web3Forms access key. It's safe to expose in client code — it can only send
// mail to the inbox it was registered with.
const ACCESS_KEY = "7f014615-3181-4232-843f-cbd36bf4dc9b";
const ENDPOINT = "https://api.web3forms.com/submit";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (data.get("botcheck")) return;

    if (!ACCESS_KEY) {
      console.error("Missing VITE_WEB3FORMS_KEY — add it to your .env file.");
      setErrorDetail("");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorDetail("");

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio contact from ${name}`,
          from_name: "Portfolio contact form",
          replyto: email, // hitting "Reply" in your inbox goes to the sender
          name,
          email,
          message,
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.message ?? `Request failed: ${response.status}`);
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("Contact form error:", err);
      setErrorDetail(err instanceof Error ? err.message : "");
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
          onSubmit={handleSubmit}
          noValidate={false}
          delay={80}
        >
          <p className="hp-field">
            <label>
              Leave this field empty
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
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
                Could not send right now{errorDetail ? ` (${errorDetail})` : ""} — email
                me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </>
            )}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
