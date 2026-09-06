# Shravan Joshi — Portfolio

Single-page portfolio built with **React 19 + TypeScript + Vite**. Dark, minimal,
mobile-first; no UI framework, no CSS framework — one hand-written stylesheet.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

## Editing content

All copy lives in [`src/data/content.ts`](src/data/content.ts) — profile, stats,
about, experience, projects, skills, education, contact links. Changing text or
adding a bullet does not require touching a component.

Two things worth knowing:

- **Learning project links** in `learningProjects` all point at the GitHub profile.
  Replace each `url` with the exact repo link when you have them.
- **The profile photo** is `public/profilepic.jpg`, referenced as `/profilepic.jpg`.
  Swap the file to change it; keep the filename or update `src/components/Hero.tsx`.

## Deploying to Netlify (free tier)

**Option A — connect the Git repo (recommended, gives auto-deploy on push):**

1. Push this folder to a GitHub repo.
2. Netlify → *Add new site* → *Import an existing project* → pick the repo.
3. Build settings are already read from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Rename the site under *Site configuration → Site details* to control
   the `*.netlify.app` subdomain.

**Option B — drag and drop:** run `npm run build` and drop the `dist` folder onto
the Netlify dashboard. No auto-deploy; you re-drop after each change.

## Contact form

The form uses **Netlify Forms** — no backend, no API key, 100 submissions/month on
the free tier.

Netlify registers forms by parsing the deployed HTML at build time, but this form
is rendered by React on the client. The hidden twin form in
[`index.html`](index.html) is what gets registered; the React form in
`src/components/Contact.tsx` posts to it via `fetch`. **If you add or rename a
field, change it in both places** or the submission will be rejected.

Submissions land in Netlify → *Forms* → *contact*. Turn on email notifications
under *Site configuration → Forms → Form notifications* to get them in your inbox.
Spam is filtered by the `bot-field` honeypot.

Note: the form only works on the deployed site. In `npm run dev` there is no
Netlify backend, so submitting shows the "email me directly" fallback message —
that is expected.

## Not deployed

`prompt.md` and the `.docx` resume stay in the project root and are **not** part of
the build output (`dist/`), so they are not published.

If you want a downloadable resume on the site, export a PDF **with the phone
number removed** (the site deliberately shows no phone number), put it in
`public/`, and add a link in `src/components/Hero.tsx` or `Contact.tsx`.

## Structure

```
index.html                 Vite entry + hidden Netlify form
netlify.toml               build, headers, 404 redirect
public/
  profilepic.jpg           hero photo
  404.html                 standalone not-found page
src/
  main.tsx                 React entry
  App.tsx                  section order
  index.css                design tokens + all styles
  data/content.ts          all site copy
  hooks/useScrollSpy.ts    nav highlighting
  components/              Header, Hero, About, WhatIDo, Experience,
                           Projects, Skills, Education, Contact, Footer,
                           Section, Reveal
```

## Accessibility & performance notes

- Skip link, labelled sections, `aria-current` on the active nav item, visible
  focus rings, form labels tied to inputs.
- Scroll reveals and smooth scrolling are disabled under
  `prefers-reduced-motion: reduce`.
- Long-cache headers on hashed assets; fonts preconnected and loaded with
  `display=swap`.
