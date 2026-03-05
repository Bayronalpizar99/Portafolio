# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 18, TypeScript, and Vite. Uses Chakra UI v2 for the component library with a custom dark theme, Framer Motion for animations, and tsparticles for the animated background.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `tsc -b && vite build`)
- **Lint:** `npm run lint` (ESLint)
- **Preview production build:** `npm run preview`

## Architecture

Single-page app with no routing. All content is rendered in `src/App.tsx` as sequential sections wrapped in `ChakraProvider` with a custom theme.

**Section rendering order (in App.tsx):**
Navbar → SobreMi → Experiencia → Tecnologias → Proyectos → Certificaciones → Contacto → Footer

**Key files:**
- `src/theme.ts` — Custom Chakra UI theme (dark mode, brand colors: primary `#04a56b`, background `#010f18`, text `#e9eef1`)
- `src/components/ParticleBackground.tsx` — tsparticles animated background (z-index 0, behind all content)
- `src/components/Contacto.tsx` — Contact form using EmailJS (`@emailjs/browser`)
- `src/index.css` — Global styles

**Navigation:** Uses `react-scroll` for smooth scrolling between sections. The main content container (`#main-content`) is the scroll target, not the window.

**Animations:** Components use `react-intersection-observer` for scroll-triggered visibility and `framer-motion` for entrance animations.

## Conventions

- Component language: Spanish (component names, section titles, UI text)
- One component per file in `src/components/`
- Named exports for components (not default exports)
- All components are functional components with TypeScript
