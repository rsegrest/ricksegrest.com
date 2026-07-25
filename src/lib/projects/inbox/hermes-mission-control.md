# Hermes Mission Control

I started talking to Hermes through a terminal. Black screen, white text, the kind of interface that makes you feel like you're doing real work until you realize you can't see what she's actually doing.

She runs 24/7 on my home server. Has conversations, remembers things, runs scheduled tasks, uses tools, manages skills. But all of that was only visible as command-line output scrolling away into a buffer I'd never read again.

Mission Control is the dashboard I built to fix that. Seven views, one dark glass cockpit, and I can finally see what she's up to.

## The seven views

Chat is where you talk to her. You can switch personalities, and the responses stream in word by word instead of arriving as a finished block. Streaming isn't a feature I added for show. When she's thinking through a long problem, watching the words appear tells you she's still working, not frozen.

Memory shows everything she's remembered about you. Your projects, your preferences, the thing you mentioned once three months ago and forgot about. She doesn't.

Sessions is full-text search across every conversation you've ever had. It runs on FTS5, SQLite's full-text search engine. Type a few words, get back every session where those words appeared, even from months ago. I use this more than I expected.

Tools is the one people fixate on. You can watch her use tools live, as it happens. Without this, an AI agent is a black box: you ask something, you get a response, and you have no idea what happened in between. With it, you can see which tools she chose, what she passed to them, where things went sideways. Agent observability, if you want the industry term.

Cron is a visual timeline for scheduled tasks. A cron job is just a task that runs on a schedule. "Every morning at 9, check the news and send me a summary." This view shows you when each job runs, whether it succeeded, and what it produced.

Skills is where you browse and edit her capabilities and plugins. Overview is system health and recent activity.

## Why I built it

Companies are raising millions to build "AI observability" tools. Dashboards for monitoring what AI agents are doing. I built my own, for my own AI, running on my own hardware.

The dark glass aesthetic came from actual mission control rooms. Dark background reduces eye strain during long sessions, but the real reason is simpler. Managing an AI should feel a little like flying a spaceship. I've spent enough time staring at white-on-black terminals to know I prefer it.

Building this taught me more about what agent infrastructure actually needs than any whitepaper or conference talk. When you have to render every tool call, every memory entry, every scheduled task, you find out fast what the real requirements are.
