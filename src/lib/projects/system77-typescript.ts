import type { Project } from "../types";

export const system77_typescript: Project = {
    id: "system77-typescript",
    title: "System77",
    description:
      "A love letter to the Atari 2600 — simulating the legendary constraints of the 1977 console (128 bytes of RAM, 4KB cartridges) to understand how developers pulled off magic with almost nothing.",
    category: "Retro Games",
    tags: ["TypeScript", "Atari", "Retro", "Simulation"],
    date: "2026-02-12",
    media: { type: "animation", animation: "pixels", accent: "#f472b6" },
    links: { repo: "https://github.com/rsegrest/system77-typescript" },
    githubRepo: "rsegrest/system77-typescript",
    techStack: [
      { label: "The Hardware", items: "Simulates the Atari 2600's extreme limitations — 128 bytes of RAM, a 1.19 MHz processor, and a graphics chip that could only draw two moving objects at a time" },
      { label: "The Challenge", items: "Developers had to 'race the beam' — updating graphics in real time as the TV drew each line" },
      { label: "The Result", items: "A playable simulation that shows how games like Pitfall! and Adventure achieved the impossible" },
    ],
    article: `## The Concept

The Atari 2600, released in 1977, is legendary for its constraints: **128 bytes of RAM** (not megabytes — bytes), **4KB cartridges**, a processor running at roughly 1 MHz, and a graphics chip that could draw exactly two sprites, two missiles, and a ball at a time.

By modern standards, that's not a computer — it's a calculator. And yet developers made *Pitfall!*, *Yars' Revenge*, and *Adventure* on this thing. Games with scrolling worlds, complex enemies, and hidden secrets — all in less memory than a single email.

### How They Did It

The secret was a technique called **"racing the beam."** The Atari didn't have a frame buffer — it couldn't draw a whole screen at once. Instead, the TV drew one line at a time, top to bottom, and the game had to update the graphics registers *while the line was being drawn.* If you were one microsecond late, the sprite wouldn't appear on that line.

This meant developers had to count exactly how many CPU cycles each instruction took and arrange their code so the right things happened at the exact right moment. It was part programming, part choreography.

### What I Built

System77 simulates these constraints in a modern browser. It emulates the Atari's graphics chip (the TIA), enforces the same memory limits, and requires the same "racing the beam" timing. You can write game logic for this simulated console and see if it would have worked on real 1977 hardware.

### Why It Matters

Studying extreme constraints teaches you more about efficient code than any modern framework. When you only have 128 bytes of RAM, you learn what's truly essential. The name "System77" is a nod to the Atari's original codename (Stella) and its release year — a tribute to the engineers who built an industry out of almost nothing.`,
  };
