import type { Project } from "../types";

export const pomodoro_vscode: Project = {
    id: "pomodoro-vscode",
    title: "Pomodoro VS Code",
    description:
      "A focus timer that lives inside your code editor. Work for 25 minutes, break for 5 — without ever leaving your flow. Built because switching to a separate timer app breaks concentration.",
    category: "Tools",
    tags: ["TypeScript", "VS Code", "Extension", "Productivity"],
    date: "2023-02-19 — 2023-02-23",
    media: { type: "animation", animation: "timer", accent: "#a3e635" },
    links: { repo: "https://github.com/rsegrest/pomodoro-vscode" },
    githubRepo: "rsegrest/pomodoro-vscode",
    techStack: [
      { label: "The Technique", items: "Pomodoro: 25 minutes of focused work, 5-minute break, repeat. After 4 cycles, take a longer break" },
      { label: "The Integration", items: "Lives in the VS Code status bar — always visible, never in the way" },
      { label: "The Philosophy", items: "The best productivity tool is the one you don't have to switch apps to use" },
    ],
    article: `## What It Does

The **Pomodoro Technique** is simple: work for 25 minutes, take a 5-minute break, repeat. After four cycles, take a longer break. It's one of the most effective focus methods ever studied.

This extension puts that timer directly in your code editor's status bar — the thin strip at the bottom of the window. You never have to switch to a separate app, which means you never break flow.

### Why I Built It

I live in VS Code. It's where I write code, review changes, read documentation, and plan my day. Switching to a separate Pomodoro app — even for two seconds to check the timer — breaks concentration. An extension that lives in the status bar keeps you in the zone.

### Features

- **Always visible countdown** in the status bar — glance at it, don't context-switch for it
- **Gentle notifications** when a session ends — not disruptive popups
- **Configurable durations** — maybe you prefer 45-minute sessions, or 10-minute breaks
- **Session tracking** — see how many focused sessions you completed today

### The Hidden Challenge

Computer timers drift. JavaScript's built-in timer function loses about 1-2 milliseconds per second, which adds up over a 25-minute session. I had to implement a self-correcting timer that constantly checks against the actual clock to stay accurate. It's the kind of detail nobody notices until it's wrong.

### The Meta Angle

This is a tool I actually use every day. Building tools for your own workflow is the best kind of side project — you're the user, so you know exactly what's annoying and exactly what would fix it. No user research required.`,
  };
