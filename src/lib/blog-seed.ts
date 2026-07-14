import type { BlogPost } from "./types";

export const SEED_BLOG: BlogPost[] = [
  {
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
  },
  {
    id: "travel-map-d3-geo",
    title: "Building an Interactive Travel Map with D3 and SVG",
    slug: "travel-map-d3-geo",
    description:
      "A deep dive into rendering world and US maps with D3 geo projections, handling zoom/pan, collision-free labels, and city markers — all in React.",
    date: "2026-07-10",
    tags: ["D3.js", "SVG", "React", "Next.js", "Data Visualization"],
    category: "Development",
    published: true,
    readingTime: 10,
    article: `## Why Build a Travel Map?

I wanted a visual way to track where I've been — countries visited, states explored, cities lived in. Off-the-shelf solutions either cost money, lock your data in a proprietary format, or don't let you customize the look.

So I built my own.

## The Stack

- **Next.js 16** with App Router
- **D3 geo** for map projections (geoEqualEarth for world, geoAlbersUsa for US)
- **TopoJSON** for country and state boundary data (world-atlas, us-atlas)
- **SVG** for rendering — every country and state is a clickable SVG path

## The Hard Parts

### Projections
The world map uses an equal Earth projection (good balance of shape and area accuracy). The US map switches to Albers USA (the classic US map projection that includes Alaska and Hawaii as insets). Switching between them means re-computing all the path data and label positions.

### Label Collision Detection
Small countries like Luxembourg or Rhode Island can't fit their labels inside the region boundary. I implemented a leader-line system: try to place the label at the centroid first, then try 20 offset positions around it, pick the first one that doesn't overlap any already-placed label. It's a greedy algorithm but works well in practice.

### Zoom and Pan
Custom zoom/pan with pointer events (not D3 zoom, which fights with React). Drag threshold of 5px prevents accidental pans when clicking. Zoom centers on the pointer position, not the viewport center.

### City Markers
Cities are rendered as flag markers (visited/lived) or target markers (want to go). They only show when zoomed in or when their parent region is hovered — keeps the map clean at default zoom.

## The Dark Theme

Originally the map had a warm beige palette. I swapped it to a dark aurora theme matching my personal site — deep navy background, cyan accents, glass-morphism panels. The status colors are now vibrant: cyan for visited, purple for seen, green for planned, amber for want, pink for lived.

## What's Next

The map now has a typeahead search bar that zooms to any country or state. Next up: linking blog posts to places so clicking a country shows related articles.`,
  },
  {
    id: "hermes-agent-workflow",
    title: "My Hermes Agent Workflow — Cron, Skills, and Delegation",
    slug: "hermes-agent-workflow",
    description:
      "How I use Hermes Agent for daily AI-powered monitoring, research curation, and automated task execution across multiple platforms.",
    date: "2026-07-08",
    tags: ["Hermes Agent", "Automation", "Cron", "AI", "Workflow"],
    category: "Productivity",
    published: true,
    readingTime: 6,
    article: `## The Setup

Hermes Agent runs as a gateway service on my NUC, connected to Telegram, Discord, and Slack. It's backed by Ollama Cloud (DeepSeek V4 Flash for speed, Pro for complex tasks) with OpenRouter as a fallback.

## Daily Cron Jobs

### AI Tech Curation (X/Twitter + Reddit)
Every morning at 9 AM, two cron jobs scan X/Twitter and Reddit for AI/ML content. They collect posts, rank them by relevance, and email me a curated HTML briefing. The X monitor covers 7 categories (models, tools, research, industry, open source, policy, tutorials). The Reddit monitor covers the same.

### Blog Watchers
I have cron jobs that monitor specific blogs and RSS feeds — Greg Isenberg, The Grayzone, Breaking Points. Each one fetches new content, summarizes it, and archives it to \`~/.hermes/reports/\`.

## Skills

Skills are Hermes's superpower. When I solve a complex problem, I save the approach as a skill. Next time I need to do something similar, the skill loads with exact commands, pitfalls, and verification steps.

Some of my most-used skills:
- **gmail-html-email** — sending styled HTML emails with monospace fonts and dark theme
- **computer-use** — driving the Linux desktop in the background
- **github-pr-workflow** — the full PR lifecycle from branch to merge
- **youtube-content** — extracting transcripts and generating summaries

## Delegation

For complex multi-file tasks, I use \`delegate_task\` to spawn subagents. Each one gets an isolated context and terminal session. They can work in parallel — one builds the backend while another builds the frontend. The results come back as messages when they finish.

## Why It Works

The key insight is that Hermes isn't just a chat bot — it's a platform. The same agent that answers questions in Telegram also runs cron jobs, manages skills, and spawns subagents. Everything is connected through the same state database, which is what makes Mission Control possible.`,
  },
  {
    id: "nasa-cost-estimator",
    title: "Building a Six-Figure Cost Estimator for NASA",
    slug: "nasa-cost-estimator",
    description:
      "How an Electron + React + Dataverse desktop app replaced spreadsheet chaos and eliminated duplicate cost entries for NASA Engineering Materials.",
    date: "2026-07-05",
    tags: ["Electron", "React", "TypeScript", "Dataverse", "NASA", "Enterprise"],
    category: "Development",
    published: true,
    featured: true,
    readingTime: 7,
    article: `## The Problem

NASA engineers need to submit cost estimates and scope-of-work documents for every project proposal. For years, this was done in spreadsheets — emailed back and forth, copied, edited by different people, and inevitably full of mistakes.

The most painful bug: engineers were accidentally submitting proposals with **duplicate costs** — the same work quoted twice because it appeared in two different spreadsheets. To the customer, it looked like the project would cost far more than it actually should.

## The Solution

A desktop application built with Electron + React + TypeScript that connects to Microsoft Dataverse via a PowerShell worker. Every cost, every work item, every scope detail lives in one place. No more wondering which spreadsheet is the "real" one.

### Key Features

- **Centralized database** — one source of truth instead of dozens of email attachments
- **Scope-of-work generation** — auto-generates SOW documents from the cost data
- **Duplicate detection** — the app prevents double-counting by design
- **NASA-compliant** — works within NASA's restricted network (no cloud services, no external dependencies)

## The Impact

Projected six-figure cost savings by eliminating costly errors in proposal budgets. The tool went from concept to alpha in 8 weeks under an FY surge, led by a 5-person team.

## Tech Stack

- **Electron** — native desktop app for Windows
- **React + TypeScript** — modern, responsive UI
- **Microsoft Dataverse** — centralized data storage
- **PowerShell** — worker for Dataverse integration
- **shadcn/ui** — component library

## What I Learned

Building for NASA's restricted network is a different world. No npm registries, no cloud services, no external API calls. Everything has to be self-contained. The Electron app bundles everything it needs, and the Dataverse connection goes through an on-premise PowerShell bridge.

The six-figure projected savings isn't just about catching errors — it's about speed. What used to take a week of spreadsheet wrangling now takes an afternoon.`,
  },
];
