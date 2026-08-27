# Carlos Miguel Torres — Portfolio

A name-first professional portfolio for Carlos Miguel Torres, a Technical Support Engineer at Growsari with experience across software quality, IT support, automation, and web development.

## Experience design

- Responsive, accessible navigation and content hierarchy
- Scroll-driven career journey on desktop
- Simplified career cards on mobile and for reduced-motion users
- Support, quality engineering, and automation-focused capability sections
- Project and technical-initiative case studies
- Dynamic metadata, Open Graph image, sitemap, and robots configuration

The motion system uses native browser APIs and CSS, keeping the experience lightweight while delivering a distinctive scroll narrative.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Native Intersection Observer and scroll progress

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Content maintenance

Career details live in `components/Experience.tsx`, capability data lives in `components/data/skills.ts`, and project data lives in `components/data/projects.ts`.
