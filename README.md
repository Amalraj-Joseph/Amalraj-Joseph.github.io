# amalraj.dev

Personal portfolio, built as a static [Astro](https://astro.build) site.

## Stack

- Astro + TypeScript, no UI framework
- Plain CSS (design tokens in `src/styles/global.css`), IBM Plex Sans/Mono
- Content collections for projects, publications, and certifications

## Running locally

Requires Node 22+.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  components/         page sections and small visuals
  content/
    projects/          one file per project (Astro content collection)
    publications/       papers and articles
    certifications/     certificate/award metadata (see below)
  layouts/, pages/, styles/, lib/
public/
  certificates/         certificate images referenced by src/content/certifications
```

Adding a project, publication, or certification is just dropping a new
Markdown file into the matching `src/content/*` folder with the frontmatter
shape defined in `src/content.config.ts` — the relevant section picks it up
automatically.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via
`.github/workflows/deploy.yml`, serving the custom domain configured in
`public/CNAME`.
