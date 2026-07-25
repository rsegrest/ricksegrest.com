import type { Project } from "../types";

export const asteroids_p5_ts: Project = {
    id: "asteroids-p5-ts",
    title: "Asteroids (p5.js + TS)",
    description:
      "A browser-based recreation of the 1979 arcade classic Asteroids — complete with the signature vector-graphics look, simulated CRT flicker, and that electron-beam glow.",
    category: "Retro Games",
    tags: ["TypeScript", "p5.js", "Canvas", "Retro"],
    date: "2022-12-03 — 2026-02-15",
    media: { type: "animation", animation: "vector", accent: "#a3e635" },
    links: { repo: "https://github.com/rsegrest/asteroids-p5-ts" },
    githubRepo: "rsegrest/asteroids-p5-ts",
    techStack: [
      { label: "The Look", items: "White outlines on black — exactly like the original arcade machine's vector display" },
      { label: "The Feel", items: "Simulated CRT flicker — the slight shimmer that made arcade screens feel alive" },
      { label: "The Tech", items: "Runs in any browser using the HTML5 Canvas — no plugins, no downloads" },
    ],
    article: `## The Game

This is ***Asteroids*** — the 1979 arcade classic where you pilot a tiny spaceship through a field of tumbling rocks, blasting them into smaller and smaller pieces while avoiding flying saucers. If you're too young to remember, this game helped create the entire arcade industry that followed.

### What Made the Original Special

Unlike every game that came after it, Asteroids didn't use pixels. It used a **vector display** — an electron beam gun that drew white lines directly onto the screen, one shape at a time. The beam moved so fast that the lines seemed to glow continuously, but there was always a tiny flicker between frames. That flicker gave the game its distinctive look — sharp, bright, almost holographic.

### How I Recreated It

Modern computer screens don't have electron beam guns. So I simulated one. The game draws each shape as crisp white outlines on a black background, and I intentionally skip every third frame to recreate that subtle CRT flicker. The result looks and feels like standing in front of an Asteroids cabinet in 1979.

### The Bonus Feature

As an experiment, I added the ability to load SVG files — the kind you create in Adobe Illustrator or Inkscape — and render them in the same vector-graphics style. This means you could draw your own spaceship, your own asteroids, even your own fonts, and the game would render them as if they were coming out of a 1979 arcade machine. It's a bridge between modern design tools and vintage display technology.

### Why It Matters

There's something pure about Asteroids. No textures, no particle effects, no 3D models — just lines and math. Recreating it teaches you more about graphics programming than any modern tutorial, because you have to understand exactly how each frame gets drawn.`,
  };
