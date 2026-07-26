# My Hermes Agent Workflow — Cron, Skills, and Delegation

## The Setup

Hermes Agent runs as a gateway service on my NUC (Intel minicomputer about the size of 5 CD cases stacked). It's connected to Telegram and Slack, and can email me anything I want whenever I ask.

It's backed by Ollama Cloud (DeepSeek-V4-Flash for most requests-- speedy and very cheap, and GLM-5.2 or DeepSeek-Pro for complex tasks) with OpenRouter as a fallback. The whole thing sits in my office behind my monitor.

## LLM-Wikis

Andrej Karpathy's recently released a concept for building knowledge wikis with LLMs, so you can keep track of any kind of knowledge, and add to it with web links and other research. I have four of them now-- a personal one to track goals and projects along with family information and schedules, a "world knowledge" wiki to organize facts about different places around the world that I might be interested in traveling to or investing in, and then technology and career wikis to navigate the changing landscape of software engineering and related tech.

## Daily Cron Jobs

### AI Tech Curation (X/Twitter + Reddit)

Every morning at 9:00 AM, two cron jobs are scheduled to scan X/Twitter and Reddit for AI/ML content. They collect posts, rank them by relevance, and email me a curated HTML briefing. The X/Twitter monitor searched through several categories: models, tools, research, industry, open source, tutorials. The Reddit monitor covers the same. I can read the briefing with coffee in the morning in five minutes instead of doomscrolling X for an hour and learning nothing.

### Blog Watchers

I have cron jobs that monitor specific podcasts and YouTube channels on technology and current events that I follow. Each one fetches new content, summarizes it, and archives it to a reports folder, and updates a wiki or two if relevant.

## Skills

Skills are Hermes's superpower. When I try something new or solve a complex problem, the approach is saved as a skill. Next time I need to do something similar, the skill loads with exact commands, pitfalls, and verification steps. It's the difference between remembering how you fixed something and actually having the fix ready to run. Hermes learns over time, so if I point out areas for improvement, it will augment the skill.

Some of my most-used skills:

- gmail-html-email. Sending styled HTML emails with monospace fonts and dark theme. I wrote this one because every email client I tried rendered my carefully formatted messages as plain text soup.
- computer-use. Driving the Linux desktop in the background. Hermes clicks, types, and scrolls without stealing my cursor, which still feels like sorcery every time I watch it happen.
- github-pr-workflow. The full PR lifecycle from branch to merge. I use this one a few times a week so I can keep my projects backed up across devices.
- youtube-content. Extracts transcripts and generates summaries. Reading a transcript can save me from watching a video, in a quarter of the time.

## Delegation

For complex multi-file tasks, I use `delegate_task` to spawn subagents. Each one gets an isolated context and terminal session. They can work in parallel: e.g. one builds the backend while another builds the frontend. They send their results back as messages. Delegating to agents is like managing a team that tirelessly works in record time and never gets their feelings hurt.

## Why It Works

Hermes is a platform that remembers from one session to the next, ties everything together, and learns from experience. Profiles can help you pick the right model for the task and avoid blowing your token budget: the same platform that answers questions in Telegram also runs cron jobs, manages skills, and spawns subagents. Everything is connected through the same database, saving and updating your state. It learns. It remembers.

She makes you feel like you are a sorcerer, and she is your apprentice. Make her your personal assistant.