# Building Mission Control — A Dashboard for AI Agents

## Why Mission Control?

I was staring at four terminal windows, three log files, and a SQLite database I'd opened in DB Browser for SQLite, trying to figure out why a cron job had been silently failing for two days. Hermes was running 40-something scheduled jobs, hundreds of sessions, and thousands of tool calls every day, and I had no way to see any of it in one place. The CLI is great when you're working inside a session. It's useless when you're trying to see the shape of the whole thing.

Mission Control is what I built to fix that. A Next.js dashboard that reads directly from Hermes's SQLite state database and filesystem, so I can see what she's actually doing instead of guessing.

## What It Shows

### Overview

Four KPI cards on the landing page: active sessions, cron jobs running, skills loaded, total tool calls. Plus a recent activity feed and a timeline of upcoming cron jobs. I look at this page before anything else in the morning, the way I used to look at email.

### Sessions

Every Hermes session gets logged with its messages, token usage (input/output/reasoning), tool calls, and cost. Search across all sessions with FTS5 full-text search, filter by source (CLI, Telegram, cron, etc.), export any session as markdown. I use the export a lot when I want to show someone what a session actually looked like.

### Tools

A live feed of every tool call the agent makes, with success/error filtering, search, and a replay mode that steps through a session's tool calls chronologically. Replay mode was one of those features I didn't know I needed until I built it. Now I use it to debug failed runs instead of reading log files.

### Skills

The full skill catalog with category filtering, search, version tracking, and a detail panel that renders the skill's markdown documentation. This is where I notice skills I haven't touched in weeks and ask myself whether they're still earning their keep.

### Cron

A visual timeline of scheduled jobs with enable/disable, delete, run history, and output inspection. The timeline view replaced my old habit of running `hermes cron list` every time I wanted to know what was about to fire.

## Tech Stack

- Next.js 16 with App Router and Turbopack
- Tailwind CSS v4 with shadcn/ui components
- better-sqlite3 for direct Hermes state.db access
- FTS5 for full-text search across sessions
- Lucide React for icons

## What I Learned

The adapter pattern was the most interesting part. Mission Control originally hardcoded all data access to Hermes paths. I extracted an `AgentAdapter` interface so it can support other agent systems (OpenClaw, etc.) in the future without changing any view code. I haven't needed the second adapter yet, but the extraction forced me to figure out what was actually Hermes-specific and what was just dashboard logic. Most of it was just dashboard logic.

The stats bar component was a nice UX win. A reusable horizontal bar that shows labeled stat items with skeleton loading, icons, and status dots. It now appears on Sessions, Tools, and Skills views, giving each one an immediate sense of scale before you scroll into the data. I stole the pattern from the way trading terminals show market depth at a glance, which is the only good thing about trading terminals.