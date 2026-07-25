import type { Project } from "../types";

export const es_vector_math: Project = {
    id: "es-vector-math",
    title: "ES Vector Math",
    description:
      "A math toolkit for making things move on screen. The foundational number-crunching that powers games, animations, and physics simulations — packaged up so other developers don't have to reinvent it.",
    category: "Libraries",
    tags: ["TypeScript", "Math", "NPM", "Graphics"],
    date: "2024-12-22",
    media: { type: "animation", animation: "grid", accent: "#22d3ee" },
    links: { repo: "https://github.com/rsegrest/es-vector-math" },
    githubRepo: "rsegrest/es-vector-math",
    techStack: [
      { label: "What It Does", items: "Handles all the math for moving, rotating, and measuring things in 2D and 3D space" },
      { label: "Who Uses It", items: "Game developers, animators, physics simulation builders, creative coders" },
      { label: "Distribution", items: "Published as a free, open-source package that anyone can add to their project" },
    ],
    article: `## What It Is

Every time something moves on a screen — a character walking, a ball bouncing, a spaceship turning — there's vector math happening under the hood. Position, velocity, direction, distance: these are all vectors.

This library is a clean, focused toolkit for doing that math. Instead of every game developer writing the same "calculate the distance between two points" function for the hundredth time, they can just use this.

### What's In It

The basics you'd expect: add two positions together, find the distance between things, figure out which direction something is facing. But also the stuff that makes movement feel natural: smooth interpolation between points, random scattering within a radius, projecting one vector onto another.

### Why I Built It

I was working on game projects and kept copying the same math functions from one project to the next. The existing options were either part of massive game engines (hundreds of megabytes for a few math functions) or written in plain JavaScript with no type safety. I wanted something small, reliable, and focused — just the math, nothing else.

### The Design Philosophy

The library is **immutable by default** — operations create new values instead of modifying existing ones. This prevents an entire category of bugs where you accidentally change a position that something else was still using. It's a small design choice that eliminates a lot of headaches.

It's also **zero dependencies** — the entire library is self-contained. No chain of third-party packages. No "left-pad" situations. Just clean math that works anywhere JavaScript runs.`,
  };
