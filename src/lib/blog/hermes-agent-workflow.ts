import type { BlogPost } from "../types";

export const hermes_agent_workflow: BlogPost = {
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
  };
