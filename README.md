<div align="center">

# 🌐 Portfolio v3 3D

3D animated portfolio — React, Three.js, GSAP. Hosted on Vercel.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js) ![Three.js](https://img.shields.io/badge/Three.js-black?logo=three.js) ![Vercel](https://img.shields.io/badge/Vercel-deployed-black?logo=vercel) ![Last Commit](https://img.shields.io/github/last-commit/ehansih/portfolio-v3-3d)

</div>

---

# Portfolio V3 — moncy.dev Style (3D Character)

Personal portfolio of **Harsh Vardhan Singh Chauhan** built on the MoncyDev Portfolio codebase, customised with Harsh's details and 3D character.

## Live Site
🌐 [saharsh3-projects.vercel.app](https://saharsh3-projects.vercel.app)

## Tech Stack
- React 18 + TypeScript
- Three.js + React Three Fiber + Rapier Physics
- GSAP — ScrollSmoother, ScrollTrigger, animations
- Vite — build tool
- Vercel — deployment

## Features
- Live 3D animated character in hero (GLB model)
- GSAP smooth scroll
- Horizontal scroll work section
- Interactive WHAT I DO expandable cards (Security + Strategy)
- Career timeline — 16+ years across Nokia, Mavenir, Jio, Ericsson
- Tech stack 3D physics balls
- Custom animated cursor + loading screen

## Local Development
```bash
npm install
npm run dev
```

## Build & Deploy
```bash
npm install
node_modules/.bin/vite build
vercel --prod
```

## Author
Harsh Vardhan Singh Chauhan — vardhan.chauhan@icloud.com

## Security

This site is hardened with the following HTTP security headers, configured via `vercel.json`:

| Header | Value |
|--------|-------|
| `X-Frame-Options` | `SAMEORIGIN` — prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` — prevents MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Camera, mic, geolocation, payment blocked |
| `X-XSS-Protection` | `1; mode=block` |
| `Content-Security-Policy` | Restricts script/style/font sources |

HTTPS and HSTS are enforced automatically by Vercel.
