# richardfanpks.github.io

My personal site, built with [Astro](https://astro.build) for y/cs Catalyst.

## Run it locally

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things are

```text
src/data/site.ts               my name, bio and contact links (add LinkedIn here)
src/data/projects.ts           the project list, one object per project
src/layouts/BaseLayout.astro   fonts, nav and footer shared by every page
src/components/                one file per section: Hero, Orbit, About, Projects, ProjectCard, Contact
src/styles/global.css          colors, fonts and spacing
.github/workflows/deploy.yml   builds and publishes to GitHub Pages on every push to main
```
