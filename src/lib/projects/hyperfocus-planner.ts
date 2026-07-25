import type { Project } from "../types";

export const hyperfocus_planner: Project = {
    id: "hyperfocus-planner",
    title: "Hyperfocus Planner",
    description:
      "A to-do app that actually plans your day for you. Tell it your big goals and it breaks them down into today's tasks — then schedules them on your calendar. Designed for deep, focused work.",
    category: "Web Apps",
    tags: ["React", "TypeScript", "Productivity"],
    date: "2026-04-06",
    media: { type: "animation", animation: "calendar", accent: "#22d3ee" },
    links: {},
    techStack: [
      { label: "The Idea", items: "Most to-do apps just give you a blank list. This one figures out what you should work on today" },
      { label: "AI Planning", items: "Tell it your long-term goals and it breaks them into milestones, weekly tasks, and daily actions" },
      { label: "Calendar", items: "Connects to Google Calendar so your planned work blocks actually show up in your schedule" },
      { label: "Privacy", items: "All your task data stays on your device — no cloud storage for your personal goals" },
    ],
    article: `## The Problem

"Launch a side project" is not a to-do item. Neither is "get in shape" or "learn Spanish." But most to-do apps treat everything as a flat list of checkboxes. Big goals need to be broken down — into milestones, into weekly tasks, into "what should I actually do today?"

This app does that breakdown for you.

### How It Works

1. **Tell it your goals** — type them in, paste them from a document, whatever
2. **The AI breaks them down** — "launch a side project" becomes: design the landing page, set up the database, write the first feature, test with friends, deploy
3. **It plans your week** — each of those steps gets scheduled into actual days
4. **It adapts** — when you finish something early (or fall behind), the whole plan recalibrates
5. **It shows up on your calendar** — your planned work blocks appear in Google Calendar so you actually do them

### The Design Philosophy

The interface is intentionally calm. No notifications. No gamification. No social features. No streaks or points or pressure. Just your goals, broken down into today's work, with a clear sense of progress.

It's designed for deep work — the kind of focused, uninterrupted sessions where real progress happens. The app gets out of your way so you can stay in flow.

### Why It's Different

Most productivity apps are either too simple (a blank list) or too complex (a project management tool designed for teams). This sits in the sweet spot: smart enough to do the planning for you, simple enough that you actually use it.`,
  };
