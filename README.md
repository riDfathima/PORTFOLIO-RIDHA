# ridha — pixel portfolio

A single-page portfolio/resume for **Ridha Fathima** (B.E. Computer Science –
Data Science). Dark **Kuromi** pixel-art theme, Minecraft-style font, hand-drawn
pixel sprites (Kuromi, cats, creeper-plants), built with **React + Vite**.

## Run it

```bash
npm install
npm run dev      # local dev server (hot reload)
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Where to edit

- **All résumé copy** lives in [`src/data/content.js`](src/data/content.js) — text,
  links, projects, skills, certs, the footer line. Edit here, not the components.
- **Colors / fonts / spacing** → [`src/styles/theme.css`](src/styles/theme.css).
- **Components & animations** → [`src/styles/pixel.css`](src/styles/pixel.css).
- **Pixel sprites** (Kuromi, cat, creeper-plant, etc.) →
  [`src/sprites/Sprites.jsx`](src/sprites/Sprites.jsx).

## TODO before going live (placeholders)

In `src/data/content.js`, replace the `#` placeholders:

- `nav` → **RESUME** link (host the PDF, e.g. Google Drive) and **GITHUB** URL.
- `currently[1].link.href` → Novigo Solutions URL (optional).
- `projects[*].href` → repo / case-study links (optional).

LinkedIn is already wired to `linkedin.com/in/ridha-fathima-rafeeq`.

## Fonts

The real "Minecraft" font is proprietary, so the headings load a free
Minecraft-style web font via CDN (`fonts.cdnfonts.com`), with `Silkscreen` /
`VT323` / monospace fallbacks. To use an owned `Minecraft.ttf`, drop it in
`public/` and add an `@font-face` named `Minecraft` in `theme.css` — the rest of
the styles already reference that family.
