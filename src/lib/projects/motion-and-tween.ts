import type { Project } from "../types";

export const motion_and_tween: Project = {
    id: "motion-and-tween",
    title: "Motion & Tween",
    description:
      "A library that makes things move beautifully. The same motion math that powered classic Flash animations and games — easing, bouncing, smooth acceleration — modernized for today's web.",
    category: "Libraries",
    tags: ["TypeScript", "Animation", "NPM", "Tweening"],
    date: "2024-12-22",
    media: { type: "animation", animation: "curves", accent: "#a855f7" },
    links: { repo: "https://github.com/rsegrest/motion-and-tween" },
    githubRepo: "rsegrest/motion-and-tween",
    techStack: [
      { label: "What It Does", items: "Makes animations feel natural — objects accelerate, decelerate, bounce, and glide instead of moving robotically" },
      { label: "Downloads", items: "2,094 total downloads — used by developers around the world" },
      { label: "Inspiration", items: "Based on Robert Penner's classic 2002 book on animation math — the same techniques used in early Flash games" },
    ],
    article: `## What It Does

Have you ever noticed that things in the real world don't start and stop instantly? A car accelerates from a stoplight. A ball bounces and each bounce is smaller. A door eases closed.

This library brings that natural motion to things on a screen. Instead of an object jumping from point A to point B, it glides. Instead of stopping abruptly, it decelerates. The difference is subtle but transformative — it's what separates "that looks like a computer made it" from "that feels alive."

### The Backstory

My first career was as a graphic designer in the early 2000s, when **Macromedia Flash** was the only way to make websites move. I loved creating animated cartoons and games, and I learned the math behind smooth motion from Robert Penner's book ***Programming Macromedia Flash MX*** (2002).

That book showed me how different mathematical curves — quadratic, cubic, exponential, sinusoidal — create different "personalities" of movement. A quadratic ease-out feels playful. An exponential ease-in feels urgent. A sinusoidal motion feels organic, like breathing.

That book is part of why I went back to school for Computer Science and eventually a Master's in Modeling & Simulation.

### What's In the Library

Eight different motion curves, each with three variations (ease in, ease out, ease in-out):

- **Linear** — steady, mechanical, no acceleration
- **Quadratic** — gentle acceleration, good for UI elements
- **Cubic** — snappier, good for attention-grabbing transitions
- **Quartic & Quintic** — progressively more dramatic
- **Exponential** — starts slow, finishes fast (or vice versa)
- **Circular** — smooth arcs, good for radial menus
- **Sinusoidal** — organic, breathing-like motion

### Why It Matters

I still have my copy of Penner's book. The ActionScript code is hopelessly obsolete, but the math is timeless. This library preserves those concepts in modern form — the same motion principles that made Flash games feel alive, now available to anyone building for the web.`,
  };
