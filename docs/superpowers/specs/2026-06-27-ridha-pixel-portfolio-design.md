# Ridha's Pixel Portfolio — Design Spec

Date: 2026-06-27

## Goal
A single-page portfolio/resume site for **Ridha Fathima** (B.E. Computer Science –
Data Science). Structure follows the provided reference portfolio image; visual
theme is dark/black with **Kuromi** pixel-art cuteness, pixel cats, and
Creeper-style pixel plants. Minecraft-style font throughout.

## Tech
- **React + Vite** single page.
- Hand-drawn **original pixel-art SVG sprites** (Kuromi, cat, creeper-plant) — no
  copyrighted assets.
- Fonts: real Minecraft-style webfont via CDN for headings; `VT323` monospace
  pixel for body. Swappable for a self-hosted `.ttf` later.

## Theme
- Background near-black `#0d0a10`; surface `#15101b`.
- Accents: purple `#a855f7`, magenta-pink `#e879c5`, soft text `#d8cfe0`.
- `image-rendering: pixelated` on all sprites; subtle idle float/bob animation;
  optional faint scanline overlay.

## Layout / Sections (top to bottom)
1. **Nav bar** — floating rounded pill: pixel Kuromi avatar + links
   `RESUME · LINKEDIN · GITHUB`. No EN/JP toggle.
   - LINKEDIN → `https://linkedin.com/in/ridha-fathima-rafeeq`
   - GITHUB, RESUME → `#` placeholders (clearly marked TODO) to fill later.
2. **Hero** — `Hey, I'm Ridha!!` in big blocky Minecraft font.
3. **Sub-lines** — `i'm based in Dammam, KSA (willing to relocate).` and
   `i've been building things for N days.` (animated count-up).
4. **I'm currently…**
   - Recent **B.E. Computer Science (Data Science) & Engineering** grad,
     Sahyadri College of Engineering & Management, Mangalore.
   - **Software Developer Intern @ Novigo Solutions Pvt Ltd**.
5. **Previously I…** — Novigo internship highlights (PowerApps automation,
   tracking interfaces, cross-functional reporting).
6. **A few projects…**
   - **Facebook Page Insights Data Cleaning Pipeline** — pandas pipeline, 1,300+
     cols → 24 KPIs.
   - **Data Management System** — product tracking / data accuracy.
   - **Process Automation Solution** — PowerApps automation flows.
7. **Skills & Certifications** — pixel "chip" rows: Python, PowerApps, Excel,
   Office 365, Git/GitHub, HTML/CSS/JS + Data Analysis/Viz/Automation;
   certs: Web Dev Fundamentals (Udemy), Cloud Security on AWS (Coursera).
8. **Footer text box** — terminal-style cute box, e.g. `i just clean & automate data <3`.

## Decorative sprites
Kuromi heads, pixel cats, and creeper-style pixel plants scattered in the page
margins/section gaps, each with a gentle floating animation. Reused via a
`<PixelSprite>` component.

## Component structure
```
src/
  main.jsx
  App.jsx
  data/content.js          (all resume copy in one place)
  components/
    Nav.jsx
    Hero.jsx
    Section.jsx            (generic titled section)
    ProjectCard.jsx
    SkillChips.jsx
    FooterBox.jsx
    PixelSprite.jsx        (renders an SVG sprite by name)
  sprites/                  (kuromi.svg, cat.svg, creeper-plant.svg as JSX/SVG)
  styles/
    theme.css
    pixel.css
index.html                  (font CDN links)
```

## Out of scope (YAGNI)
- EN/JP language toggle.
- Twitter/X link.
- Backend, routing, CMS.

## Success criteria
- `npm install && npm run dev` serves the page; `npm run build` succeeds.
- All resume content present and accurate.
- Dark Kuromi pixel aesthetic with Minecraft-style font, pixelated sprites
  (Kuromi, cats, creeper-plants), responsive enough to read on mobile width.
