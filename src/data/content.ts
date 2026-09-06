/**
 * Single source of truth for site copy.
 * Editing this file is enough to update the whole page — no component changes needed.
 */

export const profile = {
  name: "Shravan Joshi",
  role: "Frontend Software Engineer",
  title: "Frontend Software Engineer, moving towards full-stack.",
  location: "Bengaluru, India",
  statement:
    "Sole maintainer of an internal CMS platform used to migrate 300+ production websites to a modern React architecture. Now building a Next.js-based CMS and renderer engine.",
  email: "shravanjoshihydi@gmail.com",
  linkedin: "https://linkedin.com/in/shravanjoshihydi",
  linkedinLabel: "in/shravanjoshihydi",
  github: "https://github.com/shravanjoshihydi",
  githubLabel: "shravanjoshihydi",
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact", cta: true },
] as const;

export const stats = [
  { value: "300+", label: "Production sites migrated" },
  { value: "3", label: "CMS builder versions shipped" },
  { value: "30+", label: "Figma-to-code templates" },
  { value: "90+", label: "Lighthouse performance" },
] as const;

export const about = {
  lead: "Frontend Software Engineer with 4 years of experience building and maintaining CMS-driven web platforms for the automotive dealership industry.",
  paragraphs: [
    "Sole maintainer of an internal CMS template builder across three major versions, used to migrate 300+ dealership websites to a modern React architecture and cutting per-template delivery from a three-week sprint to one week.",
    "Currently building a Next.js-based CMS and frontend renderer engine, including a shared component library and a proof-of-concept AI-assisted site builder — while keeping the legacy JSP/Java platform running alongside it.",
    "Works closely with backend teams on Java and Node.js services, with hands-on experience writing the API layers that connect Next.js frontends to existing Java systems.",
  ],
  glance: [
    { label: "Based in", value: "Bengaluru, India" },
    { label: "Building now", value: "Next.js CMS & renderer engine" },
    { label: "Works with", value: "Java and Node.js backend teams" },
    {
      label: "Background",
      value: "MSc Maintenance Engineering → software via a MERN fellowship",
    },
  ],
} as const;

export const whatIDo = [
  {
    title: "CMS & Platform Engineering",
    body: "Designing and maintaining schema-driven template systems with Craft.js that let non-engineers configure and launch websites at scale.",
  },
  {
    title: "Frontend Engineering",
    body: "React.js, Next.js and TypeScript — performant, accessible, pixel-accurate interfaces built from Figma designs.",
  },
  {
    title: "Performance Optimization",
    body: "Lighthouse-driven tuning, lazy loading and Intersection Observer patterns — consistently shipping 90+ performance scores.",
  },
  {
    title: "Frontend–Backend Integration",
    body: "Building API layers that connect modern frontends to existing backend services in Java and Node.js/Express.",
  },
] as const;

export const experience = [
  {
    role: "Software Engineer — Frontend",
    company: "Izmo Ltd",
    place: "Bengaluru, India",
    period: "Apr 2026 — Present",
    current: true,
    bullets: [
      "Build and maintain a shared component library (~15 components, most with 2–5 versions) for a new Next.js CMS builder and frontend renderer engine, extended with 10+ components that had no prior React equivalent to close a gap with the legacy JSP platform.",
      "Wrote a Next.js API layer that fetches and formats content from the existing Java backend, letting the renderer engine consume backend data independently of the legacy JSP rendering path.",
      "Worked with the backend team to introduce PM2 process management for the renderer engine, running it as a parallel service alongside the legacy system.",
      "Built a proof-of-concept AI chatbot on the OpenRouter API that interprets natural-language commands to configure and generate website structures.",
      "Scope and propose frontend initiatives in technical planning, working in Scrum sprints alongside ongoing maintenance of the legacy JSP/Java and React codebases.",
    ],
  },
  {
    role: "Associate Software Engineer — Frontend",
    company: "Izmo Ltd",
    place: "Bengaluru, India",
    period: "Dec 2022 — Mar 2026",
    current: false,
    bullets: [
      "Sole contributor and maintainer of the CMS template builder across three major versions, cutting per-template delivery from a three-week sprint to one week by moving most configuration work to the support team.",
      "Migrated 300+ dealership websites to an updated React architecture within a month using the builder's configuration system, handling per-template-group settings and component-level tweaks.",
      "Delivered 30+ responsive templates from Figma designs across 20+ distinct template requirements, each needing purpose-built component and template versions.",
      "Integrated GuestSuite, Google Tag Manager and cookie consent management across the template estate.",
      "Held Lighthouse performance at 90+ using lazy loading and the Intersection Observer API.",
      "Managed dynamic site content — inventory, banners, templates, settings — through the CMS back office across single- and multi-dealer site groups.",
    ],
  },
] as const;

export const flagships = [
  {
    title: "CMS Template Builder — v1 to v3",
    tag: { label: "Proprietary — Izmo Ltd", tone: "muted" },
    narrative: [
      {
        term: "Problem",
        detail:
          "Dealership sites were built template by template on an ageing JSP stack. Each new template cost a three-week sprint of engineering time, and every content change routed back through a developer.",
      },
      {
        term: "What I built",
        detail:
          "A schema-driven template builder on Craft.js: a drag-and-drop editor over a constrained component schema, so support and delivery teams could compose and configure pages without touching code. I owned it end to end across three major versions — component model, editor UX, serialization format, and the migration path between versions.",
      },
      {
        term: "Outcome",
        detail:
          "300+ production dealership websites migrated to the React architecture inside a month. Per-template delivery dropped from a three-week sprint to one week, and routine content changes left the engineering queue entirely.",
      },
    ],
    tech: ["React", "Craft.js", "JavaScript", "Schema design", "SCSS"],
  },
  {
    title: "Next.js CMS & Renderer Engine",
    tag: { label: "In progress", tone: "accent" },
    narrative: [
      {
        term: "Problem",
        detail:
          "The existing builder was tied to a client-rendered stack sitting next to legacy JSP rendering, which capped what could be done for performance, SEO and reuse across brands.",
      },
      {
        term: "What I'm building",
        detail:
          "A Next.js CMS paired with a renderer engine that resolves a page schema into server-rendered React, backed by a shared component library used by both the editor and the renderer. Includes the API layer connecting the Next.js frontend to existing Java services, and PM2-based process integration so the engine runs in parallel with the legacy platform.",
      },
      {
        term: "Outcome so far",
        detail:
          "A library of ~15 components (most with 2–5 versions) now backs both editing and rendering, removing the drift between what an editor previews and what a visitor is served — including 10+ components the legacy platform had but React did not.",
      },
    ],
    tech: ["Next.js", "TypeScript", "React", "Node.js", "Java APIs", "PM2"],
  },
] as const;

export const poc = {
  title: "AI-Assisted Site Builder",
  tag: "Proof of concept",
  body: "A chatbot layer over the CMS that turns natural-language requests into site configuration — built on the OpenRouter API, mapping instructions onto the same component schema the visual builder writes. It tests whether the fastest path to a configured page is a conversation rather than a canvas.",
  tech: ["OpenRouter API", "Next.js", "Schema mapping"],
} as const;

/** Replace `url` with the exact repo link when you have it. */
export const learningProjects = [
  { name: "Bookstore Management System", tech: "MERN", url: profile.github },
  { name: "Admin Dashboard", tech: "React", url: profile.github },
  { name: "XBoard", tech: "React", url: profile.github },
  { name: "QTrip", tech: "JavaScript", url: profile.github },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3 — Flexbox & Grid",
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
      "Mobile-first responsive",
    ],
  },
  {
    title: "CMS & Platform Engineering",
    skills: [
      "Custom CMS architecture (v1–v3)",
      "Craft.js schema-driven templates",
      "Shared component libraries",
      "Renderer engines",
      "Figma-to-code",
    ],
  },
  {
    title: "Backend & Integration",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB & Mongoose",
      "Next.js API layers",
      "Java service integration",
      "Legacy JSP/Java maintenance",
    ],
  },
  {
    title: "Performance & Tools",
    skills: [
      "Lighthouse (90+)",
      "Lazy loading",
      "Intersection Observer API",
      "Google Tag Manager",
      "Git & GitHub",
      "Vite",
      "PM2",
      "Postman",
      "Netlify & Vercel",
      "Scrum / Agile",
      "Cross-browser QA",
    ],
  },
] as const;

export const courses = [
  {
    title: "Full Stack Software Development — Next.js, TypeScript, Tailwind, MongoDB",
    provider: "JsMasteryPro",
    period: "Jan — May 2025",
  },
  {
    title: "Fellowship in Software Engineering — MERN Stack",
    provider: "Crio.do",
    period: "Jan — Nov 2022",
  },
] as const;

export const education = [
  {
    degree: "MSc, Maintenance Engineering",
    institution: "University of Central Lancashire, United Kingdom",
    period: "Nov 2021",
  },
  {
    degree: "BTech, Mechanical Engineering",
    institution: "Jawaharlal Nehru Technological University, Hyderabad",
    period: "Jun 2019",
  },
] as const;
