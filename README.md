# Blueprint180 Landing Page

Landing page for Blueprint180 — executive burnout coaching by Aidan Morrison.

## Source

Originally exported from [Lovable](https://lovable.dev/projects/a4de789b-c29f-47d8-9b01-5af04853b30e).

## Purpose

This is a **standalone landing page repo**, separate from the Blueprint180 system monorepo (`~/task-runner`). It contains only the public-facing landing page code.

## Workflow

1. **Design & initial build** — Lovable (visual editor)
2. **Code modifications** — Claude Code sessions working in this repo
3. **Deployment** — Netlify or Vercel (connected to this repo), publishing to blueprint180.co.uk

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Connected to Netlify/Vercel via GitHub integration. Push to `main` triggers a deploy.
