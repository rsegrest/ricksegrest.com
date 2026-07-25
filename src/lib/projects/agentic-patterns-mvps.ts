import type { Project } from "../types";

export const agentic_patterns_mvps: Project = {
    id: "agentic-patterns-mvps",
    title: "Agentic Design Patterns MVP",
    description:
      "A collection of small, runnable demos showing how AI agents think, plan, and work together. Each demo is self-contained — clone it, run it, and watch the AI reason through problems in real time.",
    category: "Experiments",
    tags: ["Python", "Streamlit", "Educational", "AI Agents"],
    date: "2026-06-27 — 2026-06-29",
    media: { type: "animation", animation: "network", accent: "#22d3ee" },
    links: { repo: "https://github.com/rsegrest/agentic-patterns-mvps" },
    githubRepo: "rsegrest/agentic-patterns-mvps",
    techStack: [
      { label: "Language", items: "Python — chosen because it's the most accessible language for AI experimentation" },
      { label: "Interface", items: "Each demo opens in your browser with a clean, visual dashboard showing what the AI is doing" },
      { label: "Demos Included", items: "AI that reviews its own work, AI that uses tools, AI that makes plans, and multiple AIs collaborating" },
    ],
    article: `## What It Is

A set of interactive demos that show how AI agents work under the hood. Each demo is a self-contained project — download it, run one command, and you can watch an AI reason through a problem step by step in your browser.

### The Four Demos

**Reflection** — Watch an AI write something, then critique its own work and improve it. It's like watching someone edit their own essay in real time.

**Tool Use** — The AI decides it needs information it doesn't have, so it reaches out to external tools (like a calculator or a search engine) to get it. You can see it "thinking" about which tool to use and why.

**Planning** — Give the AI a complex goal and watch it break it down into steps before taking any action. It's the difference between "just do it" and "let me think about how to do this first."

**Multi-Agent** — Two or more AIs working together, debating each other, or dividing up a task. Sometimes they agree, sometimes they argue — and the result is usually better than what either would produce alone.

### Why I Built This

Most explanations of how AI agents work are either academic papers full of math or blog posts with no code. I wanted something you could actually run — click a button and see the AI's thought process unfold visually. Each demo is designed to be understood in a weekend afternoon.

### Why It Matters

These patterns — reflection, tool use, planning, collaboration — are the building blocks of every AI assistant, coding agent, and autonomous system being built right now. Understanding them isn't just for researchers anymore.`,
  };
