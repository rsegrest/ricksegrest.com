---
title: "Hermes Agent — What I've Built (Writing Outline)"
created: 2026-07-25
updated: 2026-07-25
type: note
tags: [writing, outline, hermes, portfolio, blog]
status: spark
target_words: 0
register: technical
---

# Hermes Agent — What I've Built

> Outline for a writing project based on session history. Catalog of everything built and explored with Hermes Agent.
> Source: extracted from `concepts/nuc10i7fnh-stabilization.md` (2026-07-16 session history scan), updated 2026-07-25.
> Use as source material for blog posts, LinkedIn threads, or portfolio case studies.

---

## Possible Angles

| # | Angle | Best For | Tone |
|---|-------|----------|------|
| 1 | **"How I Built an Agent OS"** — 5 micro-apps for AI agent observability | Technical blog, LinkedIn | Build narrative |
| 2 | **"I Asked an AI to Build a Wiki — It Created 37 Pages in 8 Minutes"** | Dev.to, HN, Reddit | Hook-driven |
| 3 | **"Running 22 Automated Cron Jobs with AI Curation"** | Practical blog | How-to |
| 4 | **"Debugging 1M-Token Context Limits"** | Technical deep-dive | Problem/solution |
| 5 | **"From Breaking News to Social Media Video — AI Research Pipeline"** | LinkedIn, portfolio | Process story |
| 6 | **"Designing a Modern Write or Die"** | Writing community, Substack | Creative/design |
| 7 | **"The $20/Month AI Stack"** — what you can actually build on a budget | HN, cost-conscious devs | Practical/opinion |
| 8 | **"Building a 3-Tracker Wiki System"** — app projects, writing, and life goals | Productivity blog | Systems thinking |

---

## Shipped Portfolio Apps (3 on Vercel)

| # | App | What It Does | Stack |
|---|-----|-------------|-------|
| 1 | **AI UX Critique Tool** | Paste a screenshot, AI critiques using Nielsen's 10 heuristics + WCAG | React + OpenAI Vision API + shadcn/ui |
| 2 | **Nomad Cost-of-Living Dashboard** | Interactive city comparison from travel wiki data | Next.js + Recharts |
| 3 | **GitHub Profile README Generator** | Reads repos, generates polished README with stats/badges | React + Python FastAPI + GitHub API + LLM |

**Write-up notes:** All three deployed to Vercel, managed via Hermes kanban boards. Good for a "shipped in a weekend" narrative.

---

## Agent OS Portfolio (5 Micro-Apps)

A suite of self-hosted Next.js apps for AI agent observability, each on its own port on the NUC:

| # | App | Port | Built Via |
|---|-----|------|-----------|
| 50 | **Agent Memory Browser** | :3001 | Hermes direct |
| 51 | **Agent Tool Execution Visualizer** | :3004 | Claude Code delegation |
| 52 | **Agent Cron Timeline & Health Monitor** | :3002 | Claude Code delegation |
| 53 | **Agent Session History Browser** | :3003 | Claude Code delegation |
| 54 | **Agent Skill/Plugin Manager** | :3005 | Claude Code delegation |

**Key detail:** Development pattern — Hermes scaffolds the project (package.json, tsconfig, DB schema, layout, shadcn components), writes a detailed CLAUDE.md spec, then Claude Code builds the UI layer autonomously. Cost ~$0.15-0.30 per build on Claude subscription. The Skill Manager includes an adapter pattern supporting both Hermes and OpenClaw agent systems.

**Write-up notes:** This is the strongest portfolio piece. Shows real systems thinking, AI-assisted development, and agent observability. Best for a technical blog or LinkedIn series.

---

## Mission Control Dashboard (Port 3006)

The unified dashboard that composes all 5 Agent OS micro-apps into a single interface with tabs for Sessions, Tools, Skills, Cron, and Kanban. Tier 1 and Tier 2 UX improvements done. Tier 3 on hold — planned features include an improved Kanban/TODO board and a wiki viewer with edit capability.

**Write-up notes:** The "compose 5 apps into 1" story is compelling. Shows systems integration thinking.

---

## Personal Site — Portfolio Gallery (Port 3010)

Dark-only Vite+React portfolio gallery at `~/code/2026/portfolio-gallery/`. Blog scaffold done with 4 seed posts. Needs hero/CTA/resume/layout polish and real posts. Built primarily with DeepSeek V4 Pro/Flash, with early Tencent HY3 design work.

**Write-up notes:** The hire-me surface. Blog + case studies + clear CTA.

---

## Travel Map (Port 3007)

D3 geo SVG map of places visited. Multi-year UX done. Needs dark theme swap, blog integration, and state data.

---

## Hyperfocus Planner

AI-powered TO-DO at `~/projects/hyperfocus-planner/`. Turns long-term goals into daily plans using AI. Phase 1: connect OpenAI planning, complete Google Calendar OAuth. Stack: Next.js 16 + Tailwind v4 + shadcn/ui + better-sqlite3.

---

## Career Wiki — 61 Portfolio Project Ideas

Three brainstorming rounds produced **61 project ideas** documented in the career wiki with full specs (What, Stack, Why, Skills Gap Filled). Categories: Quick Wins, M&S, AI Safety, Data+AI, Creative, Life Tools, Gov/Defense, Dev Infra, Accessibility, Content, Education. The full expanded list was emailed as an HTML report.

**Write-up notes:** Could be a "how I brainstorm portfolio projects" post.

---

## "Publish or Perish" Writing Sprint App (Planned)

A modern Write or Die-inspired writing sprint app with full 10-phase implementation plan. Features:
- 6-level graduated consequence slider (Gentle → Kamikaze word deletion)
- NaNoWriMo mode (50k word goal, daily targets, pace indicators, streak tracking)
- Speech-to-text dictation (3 tiers: browser API, Whisper.cpp via WASM, cloud API)
- Session history, stats dashboard, calendar heatmap, PWA support
- Web Audio API for consequence sounds (no asset files needed)

Domain `publishorperish.app` was checked and is available.

**Write-up notes:** Relatable to any writer. The NaNoWriMo angle gives it a seasonal hook. Good for writing communities or Substack.

---

## Local LLM Chat Interface

A polished ChatGPT-style UI connecting to local Ollama instances on a Windows 11 desktop on the LAN. Deployed to Vercel at `local-llm-chat-delta.vercel.app`. Features: model picker, streaming responses, conversation history, system prompt presets. Privacy-first — runs entirely on local hardware.

**Write-up notes:** The "runs entirely on your hardware" angle is increasingly relevant. Shows streaming, model selection UX, and local AI integration.

---

## Wiki System (4 Vaults, 377 Pages)

Four interconnected Obsidian-style markdown wikis, each with its own SCHEMA.md, index, and log:

| Vault | Pages | Focus |
|-------|-------|-------|
| **wiki** (travel) | 92 | Travel, culture, investing, nomad lifestyle |
| **wiki-personal** | 96 | Family, writing, projects, memories, riffs, reading, budget |
| **wiki-tech** | 165 | AI models, ComfyUI, tech monitoring, books |
| **wiki-career** | 26 | Portfolio, resume, job market, kanban boards |
| **Total** | **379** | |

**Wiki-tech breakdown:** 7 entities, 3 concepts, 15 raw sources, 44 x-monitor entries, 9 reddit-monitor entries, 18 ComfyUI pages, 32 AI model pages, 28 book pages.

**Wiki-personal breakdown:** 18 concepts, 17 writing files, 12 entities, 9 memories, 2 ideas, 1 story, 30 riffs.

**Write-up notes:** Great hook — "I asked an AI to build a wiki, it created 37 pages in 8 minutes." Very shareable. The 4-vault architecture is a systems story on its own.

---

## 3-Tracker System

Created a triad of master trackers that cross-reference each other:

| Tracker | What It Tracks | Entries |
|---------|---------------|---------|
| **Project Tracker** | App/software projects | 20 entries (6 active, 7 shipped, 4 side, 3 planned) |
| **Writing Tracker** | Blog posts, essays, series, book chapters | 13 entries + 1 book series (1 published, 3 WIP, 12 sparks) |
| **Long-Term Projects Tracker** | Travel, home, automotive, household, financial, health, hobbies, family | 24 entries (4 planning, 19 idea, 2 completed) |

**Write-up notes:** The "how I organize my life with 3 trackers" angle is relatable to productivity-minded readers.

---

## 22 Cron Jobs (15 YouTube Watchers + 7 Infrastructure)

**15 automated YouTube watcher cron jobs** running daily, detecting new videos and delivering summaries via Telegram and email. Channels include: The Duran, Aitrepreneur, All-In, Tucker Carlson, Alex Finn, Greg Isenberg, Jack Roberts, Sabrina Ramonov, Part of the Problem, Racket News, Liberty Lockdown, The Grayzone, Twickenham Church, Pixaroma.

**7 infrastructure cron jobs:**
- X/Twitter AI Tech Curation (daily at 4 AM)
- AI Tech Multi-Source Briefing (daily at 6 AM)
- AI Briefing Email Formatter (daily at 6:05 AM)
- Daily Token Usage Report (daily at 8 AM)
- PR Status Watcher (daily at 8 AM)
- Hermes Backup Auto-Committer (daily at 5 AM)
- Wiki Backup Auto-Committer (daily at 5 AM)
- June 2027 Family Trip Weekly Fare Scout (Mondays at 7 AM)

**Write-up notes:** Practical, shows real cron job infrastructure at scale. Good how-to angle.

---

## Current World Events Research + Remotion Video

Researched the US-Iran 14-point Memorandum of Understanding using parallel subagent research across 10+ news sources, then created a **76-second Remotion video** (1080×1920 vertical, 5.4 MB, 10 scenes) with BBC-style female voiceover and subtitles.

**Write-up notes:** Shows the full pipeline — research → synthesis → video production. Good for a "from news to social media" process story.

---

## ComfyUI + Image/Video Generation

ComfyUI running on a Windows 11 desktop (RTX 5070 Ti) with xAI SuperGrok for image generation. The Pixaroma 22-episode ComfyUI course (5 hours of content) was processed into structured wiki pages covering models, techniques, and custom nodes. Images generated via xAI Grok Imagine and ComfyUI workflows including Krea 2 Turbo. 80 Mad Men-era images rendered across 5 decades (50s-90s), 8 base + 8 variations per era.

**Write-up notes:** The course-to-wiki pipeline is the interesting angle here — 5 hours of video distilled into a cross-linked knowledge base.

---

## Voice Profile & Writing Pipeline

Created a **voice profile v2** with calibrated CORE VOICE (20 do / 20 don't rules) and three register adapters:
- **reflective** — calibrated from Misery & Company Substack essay
- **technical** — calibrated from Dark Secret Hermes essay
- **short** — provisional (no hero/CTA gold sample yet)

Pipeline: GLM-5.2 outline/draft → Grok 4.5 + humanizer edit → Flash wiring.

**Write-up notes:** The "teaching AI to write like me" angle is unique. Shows prompt engineering at a meta level.

---

## Astryx Design System Setup

Meta's Astryx (90+ React components) installed with AGENTS.md/CLAUDE.md context files so AI coding agents follow conventions: no raw `<div>`, AppShell for layout, design tokens for all values, StatusDot/Token for status indicators.

---

## Hermes Kanban Boards

Used `hermes kanban` to manage task boards for all portfolio projects — tracking tasks, marking them done, archiving completed items. Boards synced to career wiki kanban pages.

---

## Token Usage Tracking

Daily cron job at 8 AM saves 7-day token usage reports. Latest 7-day snapshot: **566 million tokens** (563.8M input, 2.3M output) across 4,697 API calls and 27 sessions, using 14 distinct models across 4 provider backends.

---

## Hermes Context Management Debugging

Diagnosed and fixed context length limits on a 1M-token model — discovered compression was enabled at 70%, which was truncating context prematurely. Created the `hermes-context-management` skill to document the fix.

**Write-up notes:** Technical deep-dive that would resonate with other Hermes/LLM power users.

---

## Flight Goat CLI — Turks & Caicos Trip

Used the Flight Goat CLI to find real flights from ATL to Providenciales (PLS) for a family of 5. Discovered the CLI has two backends — `schedules` (FlightAware AeroAPI, no prices) and `flights` (Google Flights, real prices) — and the skill only documented the wrong one. Fixed the skill, found actual fares, and emailed results in a dark-themed HTML email. Best find: Southwest via Orlando at $591/pp ($2,955 total).

---

## Project Plans Index

Created a structured project plans index in the personal wiki with ranked implementation plans for Mission Control UX, Personal Site (blog + travel integration), Travel Map (CSS theme), and the Writing Sprint App.

---

## NUC Stabilization

Diagnosed and fixed 3 independent root causes of NUC10i7FNH freezes: NVMe APST, SATA ALPM, and CPU C-state + i915 display C-state interactions. System has been rock-solid since June 24 fixes.

**Write-up notes:** The hardware debugging saga is a good "how I fixed my server" story for sysadmin/devops audiences.

---

## Household Budget (June 2026)

One of the first things done with Hermes — a full household budget built from scratch. Income $13,867-$14,733/mo (26 bi-weekly checks), mortgage PITI $2,962, two loans (personal ~$18.5K + HELOC $50K), no car payments, family of 5 in Huntsville. Built a **5-sheet Excel workbook** (Dashboard, Budget, Monthly Tracker, Debt Payoff Calculator, Notes) with pink input cells and auto-calculating formulas. Script and spreadsheet at `~/hermes-agent/budget/`.

**Key details:** Private school $30K+/yr from ESA. Vacations $15K/yr sinking fund. Deck repair needed (safety priority). 4 vehicles (Subaru, Titan, Sienna, Camry). Teen drivers coming Oct 2026 (permits) with ~$150-200/mo insurance increase expected.

**Debt payoff plan:** Kill Loan 1 in ~4 months with buffer, then attack HELOC, then build cash emergency fund.

**Write-up notes:** The "I asked an AI to build my budget" angle is relatable and practical. Shows real financial planning, not just tech demos.

---

## Cost Model

All of this runs on a **$20/month Ollama Cloud subscription** plus local models on a Windows 11 desktop (RTX 5070 Ti), with xAI SuperGrok for image generation. The 566 million tokens processed in the last 7 days would cost thousands of dollars on commercial API pricing — the self-hosted/open-source approach saves considerably while delivering the same capabilities.

**Write-up notes:** This is a compelling angle on its own — "what you can actually build on a $20/month AI budget."

---

## Pipeline Notes

| Step | Tool | Notes |
|------|------|-------|
| Outline | GLM-5.2 | Use voice profile v2, technical adapter |
| Draft | GLM-5.2 | Pick one angle, expand with concrete details |
| Edit | Grok + humanizer | De-AI the prose |
| Polish | Rick | 10-minute pass |
| Publish | Flash | Wire into blog-seed.ts and commit |
