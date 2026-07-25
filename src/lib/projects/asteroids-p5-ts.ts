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
    article: `I was 12(?) when I first saw an Asteroids cabinet. The graphics didn't look like other games. Everything else in the arcade was blocky pixel art, but Asteroids was just white lines on black, glowing like someone was drawing with a flashlight.

I didn't know it then, but Asteroids used a vector display. An electron beam drew each shape directly onto the screen, one line at a time. No pixels. The beam moved so fast the lines seemed continuous, but there was always a tiny flicker between frames. That flicker gave the game its look: sharp, bright, almost holographic.

This is a browser recreation of that, built in p5.js and TypeScript. White outlines on black, the same tumbling rocks, the same flying saucers, the same tiny spaceship spinning in the void.

### The tricky part

Modern screens don't have electron beams. So I simulated one. The game draws each shape as crisp white outlines on a black background, and I intentionally skip every third frame to recreate that CRT flicker. It sounds simple. It isn't. Getting the flicker to feel right (not seizure-inducing, just subtly alive) took more tweaking than the actual game logic.

### The SVG experiment

I added the ability to load SVG files and render them in the same vector style. Draw a spaceship in Illustrator or Inkscape, drop it in, and the game renders it as if it's coming out of a 1979 arcade machine. I thought this would be a fun weekend feature. It was, and it also turned out to be genuinely useful for testing custom shapes.

### Why I keep coming back to it

There's something pure about Asteroids. No textures, no particle effects, no 3D models. Just lines and math. Recreating it teaches you more about graphics programming than any modern tutorial, because you have to understand exactly how each frame gets drawn.`,
  };
