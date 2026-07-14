# Dev Gallery — Project Showcase (static, self-editable)

A visually stunning, **static** portfolio/showcase gallery for your development projects.
Built with **Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion**.
Deploys as a static site — **visitors can't add projects** (no backend), so there's no auth to manage.
You edit by changing one data file and rebuilding.

## Features
- **Animated media previews** — image, video (with play overlay), or 1 of 6 bespoke CSS animations (aurora, orbit, wave, scan, mesh, shimmer).
- **Detail modal** — large media, full description, tech tags, and Live / Repo / Promo links.
- **Admin (local only)** — add/edit/delete projects with a live media-preview pane. Persists to `localStorage` for your own preview; not the published site.
- **Sorting** — Newest (date), Popular (GitHub stars), Category, A–Z. Featured float to top.
- **Filtering** — instant search + category chips + tech-tag toggles.
- **Live GitHub stars** — the "Stars" button fetches real star counts from the GitHub API (rate-limited when unauthenticated).
- **Import / Export JSON** — handy for moving data between the browser editor and the seed file.

## Edit & publish (the workflow)
The single source of truth for the published site is **`src/lib/seed.ts`**.
1. Change a project there (or use the in-browser **Add** editor, then **Export JSON** and paste it into `seed.ts`).
2. `npm run build` → outputs to `dist/`.
3. Deploy `dist/` to any static host (Netlify / Vercel / GitHub Pages / your own NUC via a tunnel).
4. The new gallery is live. Visitors see it; they can't edit it.

> Local browser edits (Add/Edit/Delete/Import) only affect *your* browser via `localStorage`.
> They are a convenience for previewing — they do **not** change the deployed site.
> To publish, the change must land in `seed.ts` and be rebuilt.

## Local preview
```bash
npm install
npm run dev        # http://localhost:3010  (live reload; Add/Edit works locally)
# or
npm run build && npm run preview
```

## Files
- `src/lib/seed.ts` — **canonical project data** (the 11 real projects are seeded here).
- `src/App.tsx` — layout, toolbar, filtering, sorting, modals.
- `src/components/MediaPreview.tsx` — image / video / 6 CSS animations.
- `src/components/ProjectCard.tsx` — gallery card.
- `src/components/ProjectModal.tsx` — detail view.
- `src/components/AdminModal.tsx` — add/edit form.
- `src/lib/` — types, storage hook, GitHub stars helper, utils.

## Public access from another device
The dev/preview server binds to all interfaces, but your `ufw` firewall blocks inbound by default.
Open the port for your LAN subnet (already done for 3010):
```bash
sudo ufw allow from 192.168.1.0/24 to any port 3010 proto tcp
```
Then visit `http://<NUC-LAN-IP>:3010/` on a device on the same WiFi.
For access from outside your home network, use a tunnel (e.g. Cloudflare Tunnel) or VPN — `localhost` never works remotely.
