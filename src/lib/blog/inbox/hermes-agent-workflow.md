# My Hermes Agent Workflow — Cron, Skills, and Delegation

## The Setup

Hermes Agent runs as a gateway service on my NUC, connected to Telegram, Discord, and Slack. She's backed by Ollama Cloud (DeepSeek V4 Flash for speed, Pro for complex tasks) with OpenRouter as a fallback. The whole thing sits in my office next to a stack of hard drives I should probably label one of these years.

## Daily Cron Jobs

### AI Tech Curation (X/Twitter + Reddit)

Every morning at 9 AM, two cron jobs scan X/Twitter and Reddit for AI/ML content. They collect posts, rank them by relevance, and email me a curated HTML briefing. The X monitor covers 7 categories: models, tools, research, industry, open source, policy, tutorials. The Reddit monitor covers the same. I read the briefing with coffee before I open anything else, which has mostly replaced my old habit of doomscrolling X for an hour and learning nothing.

### Blog Watchers

I have cron jobs that monitor specific blogs and RSS feeds. Greg Isenberg, The Grayzone, Breaking Points. Each one fetches new content, summarizes it, and archives it to `~/.hermes/reports/`. The summaries are short enough to scan in a minute, which is about all the attention I have for most blogs at 9 AM.

## Skills

Skills are Hermes's superpower. When I solve a complex problem, I save the approach as a skill. Next time I need to do something similar, the skill loads with exact commands, pitfalls, and verification steps. It's the difference between remembering how you fixed something and actually having the fix ready to run.

Some of my most-used skills:

- gmail-html-email. Sending styled HTML emails with monospace fonts and dark theme. I wrote this one because every email client I tried rendered my carefully formatted messages as plain text soup.
- computer-use. Driving the Linux desktop in the background. Hermes clicks, types, and scrolls without stealing my cursor, which still feels like witchcraft every time I watch it happen.
- github-pr-workflow. The full PR lifecycle from branch to merge. I use this one a few times a week and it has saved me from at least one bad merge.
- youtube-content. Extracting transcripts and generating summaries. I don't watch videos when I can read the transcript in a quarter of the time.

## Delegation

For complex multi-file tasks, I use `delegate_task` to spawn subagents. Each one gets an isolated context and terminal session. They can work in parallel: one builds the backend while another builds the frontend. The results come back as messages when they finish. The first time I watched two subagents build two halves of the same app at the same time, I understood why managers delegate. The second time, I started thinking about what I could delegate next.

## Why It Works

Hermes is a platform. The same agent that answers questions in Telegram also runs cron jobs, manages skills, and spawns subagents. Everything is connected through the same state database, which is what makes Mission Control possible. She learns. She remembers. She has a SOUL.md. I don't mean that metaphorically. There is literally a file called SOUL.md and it matters.

She makes you feel like you are a sorcerer, and she is your apprentice. Make her your personal assistant.