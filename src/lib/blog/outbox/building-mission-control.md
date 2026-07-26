# Building Mission Control — A Dashboard for AI Agents

## Why Mission Control?

I've been experimenting and managing a lot of projects through Hermes Agent. The main interface is a "TUI" or Terminal User Interface, similar to Claude Code's original user interface. This is nice when you are typing out prompts and reading the responses, but sometimes you need to have some extra context presented to you visually that is not easy to dig out through typing out commands.

For example, staring at four terminal windows, three log files, and a SQLite database in a DB Browser is not a great way to figure out why your regularly scheduled cron job silently failed two days in a row. Hermes was running 40-something scheduled jobs, hundreds of sessions, and thousands of tool calls every day, and I had no way to see any of it in one place. The CLI is great when you're working inside a session. It's useless when you're trying to see the shape of the whole thing.

Mission Control is what I built to fix that: A Next.js dashboard that reads directly from Hermes's SQLite state database and filesystem, so I can see what is actually going on instead of guessing.

## What It Shows

### Overview

Four Key Perfomance Indicator cards on the landing page:

* Active sessions
* cron jobs running
* skills loaded
* total tool calls

Plus, a recent activity feed and a timeline of upcoming cron jobs. You can look at this page first thing in the morning to get the big picture about what your Agent is up to.

### Sessions

Because every Hermes session gets logged with its messages, token usage (input/output/reasoning), tool calls, and cost, you can search across all sessions with FTS5 full-text search, filter by source (CLI, Telegram, cron, etc.), export any session as markdown. Use the export when you want to see what happened during a specific session.

### Tools

Get a live feed of every tool call the agent makes, with success/error filtering, search, and a replay mode that steps through a session's tool calls chronologically. With replay mode, you can easily debug failed runs instead of reading log files.

### Skills

See your full skill catalog with category filtering, search, version tracking, and a detail panel that renders the skill's markdown documentation. This is where you can find skills haven't been touched in weeks and decide whether they're still earning their keep.

### Cron

See a visual timeline of scheduled jobs with enable/disable, delete, run history, and output inspection. The timeline view can replace running `hermes cron list` every time you want to know what is about to fire.

## Tech Stack

- Next.js 16 with App Router and Turbopack
- Tailwind CSS v4 with shadcn/ui components
- better-sqlite3 for direct Hermes state.db access
- FTS5 for full-text search across sessions
- Lucide React for icons

## What I Learned

The adapter pattern was the most interesting part. Mission Control originally hardcoded all data access to Hermes paths. In the future I want to support OpenClaw and other agent harnesses, so I extracted an `AgentAdapter` interface to easily enable these changes in the future without changing any view code. I haven't used the second adapter yet, but the extraction forced me to figure out what was actually Hermes-specific and what was just dashboard logic. Most of it was just dashboard logic.

The stats bar component add to the UX with a reusable horizontal bar that shows labeled statistics with skeleton loading placeholders, icons, and status dots. It now appears on Sessions, Tools, and Skills views, giving each one an immediate sense of scale before scrolling into the data. I borrowed the pattern from the way trading terminals show market depth at a glance.