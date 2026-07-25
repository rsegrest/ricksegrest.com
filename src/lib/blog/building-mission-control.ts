import type { BlogPost } from "../types";

export const building_mission_control: BlogPost = {
    id: "building-mission-control",
    title: "Building Mission Control — A Dashboard for AI Agents",
    slug: "building-mission-control",
    description:
      "How I built a unified dashboard to monitor, debug, and manage Hermes Agent sessions, tool calls, cron jobs, and skills — all in one place.",
    date: "2026-07-11",
    tags: ["React", "Next.js", "TypeScript", "Hermes Agent", "Dashboard"],
    category: "Development",
    published: true,
    featured: true,
    readingTime: 8,
    article: `## Why Mission Control?

Hermes Agent runs dozens of cron jobs, hundreds of sessions, and thousands of tool calls every day. The CLI is great for working *in* a session, but there was no way to see the big picture — what's running, what failed, how many tokens were spent, which skills are installed.

Mission Control fills that gap. It's a Next.js dashboard that reads directly from Hermes's SQLite state database and filesystem, giving me a real-time view of everything the agent is doing.

## What It Shows

### Overview
The landing page shows four KPI cards — active sessions, cron jobs running, skills loaded, and total tool calls — plus a recent activity feed and a timeline of upcoming cron jobs.

### Sessions
Every Hermes session is logged with its messages, token usage (input/output/reasoning), tool calls, and cost. You can search across all sessions with FTS5 full-text search, filter by source (CLI, Telegram, cron, etc.), and export any session as markdown.

### Tools
A live feed of every tool call the agent makes, with success/error filtering, search, and a replay mode that steps through a session's tool calls chronologically.

### Skills
The full skill catalog with category filtering, search, version tracking, and a detail panel that renders the skill's markdown documentation.

### Cron
A visual timeline of scheduled jobs with enable/disable, delete, run history, and output inspection.

## Tech Stack

- **Next.js 16** with App Router and Turbopack
- **Tailwind CSS v4** with shadcn/ui components
- **better-sqlite3** for direct Hermes state.db access
- **FTS5** for full-text search across sessions
- **Lucide React** for icons

## What I Learned

The adapter pattern was the most interesting part. Mission Control originally hardcoded all data access to Hermes paths. I extracted an \`AgentAdapter\` interface so it can support other agent systems (OpenClaw, etc.) in the future without changing any view code.

The stats bar component was a nice UX win — a reusable horizontal bar that shows labeled stat items with skeleton loading, icons, and status dots. It now appears on Sessions, Tools, and Skills views, giving each one an immediate sense of scale.`,
  };
