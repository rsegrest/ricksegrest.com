import type { Project } from "../types";

export const hermes_mission_control: Project = {
    id: "hermes-mission-control",
    title: "Hermes Mission Control",
    description:
      "A visual dashboard for my AI assistant that runs 24/7 on my home server. See every conversation, every memory, every scheduled task, and every tool the AI has used — all in one dark glass cockpit.",
    category: "Agent Infrastructure",
    tags: ["Next.js", "React", "TypeScript", "@base-ui"],
    date: "2026-07-11 — 2026-07-14",
    media: { type: "animation", animation: "dashboard", accent: "#f472b6" },
    links: { live: "http://localhost:3006", repo: "https://github.com/rsegrest/hermes-agent-mission-control" },
    githubRepo: "rsegrest/hermes-agent-mission-control",
    featured: true,
    subprojects: [
      { title: "Agent Memory Browser", repo: "https://github.com/rsegrest/agent-memory" },
      { title: "Agent Cron Monitor", repo: "https://github.com/rsegrest/agent-cron-monitor" },
      { title: "Agent Session Browser", repo: "https://github.com/rsegrest/agent-session-browser" },
      { title: "Agent Tool Visualizer", repo: "https://github.com/rsegrest/agent-tool-visualizer" },
      { title: "Agent Skill Manager", live: "http://localhost:3005" },
    ],
    techStack: [
      { label: "The Dashboard", items: "Seven views in one app — chat, memory, sessions, tools, scheduled tasks, skills, and system overview" },
      { label: "The Design", items: "Dark glass aesthetic with an icon sidebar — inspired by mission control rooms and spaceship interfaces" },
      { label: "The Data", items: "Everything stored locally — no cloud dependency, your AI's entire history lives on your server" },
      { label: "Real-Time", items: "Watch the AI use tools live as it happens — see what it's doing, not just the final answer" },
    ],
    article: `## What It Is

I run an AI assistant (called Hermes) on my home server 24/7. It has conversations, remembers things, runs scheduled tasks, uses tools, and manages skills. But all of that was only accessible through a terminal — black screen, white text, no visuals.

Mission Control is the dashboard that makes all of that visible and browsable. Think of it as the cockpit for an AI — instead of typing commands into a terminal, you click through views that show you everything the AI is doing and has ever done.

### The Seven Views

- **Chat** — talk to the AI with different personalities, watch responses appear word-by-word in real time (that's called **streaming** — instead of waiting for the entire response to be written and then showing it all at once, each word appears as it's generated, like watching someone type)
- **Memory** — browse everything the AI has remembered about you, your projects, and your preferences
- **Sessions** — search through every conversation you've ever had with the AI. The search is powered by something called **FTS5** (Full-Text Search), which is like Google for your own data — type a few words and instantly find every conversation where those words appeared, even from months ago
- **Tools** — see every tool the AI has used, with a live feed and replay capability. This is part of **agent observability** — the ability to see what an AI is doing internally, not just the final answer it gives you. Without observability, an AI is a black box: you ask something, you get a response, and you have no idea what happened in between. With it, you can watch the AI think, see which tools it chose and why, and catch mistakes before they cause problems
- **Cron** — manage scheduled tasks on a visual timeline. A **cron job** is just a task that runs automatically on a schedule — like "every morning at 9 AM, check the news and send me a summary." Instead of remembering to do it yourself, the AI does it for you, and this view shows you when each job runs, whether it succeeded, and what it produced
- **Skills** — browse and edit the AI's capabilities and plugins
- **Overview** — system health, recent activity, quick stats

### Why I Built It

AI assistants are becoming a new kind of software — they're not just tools you use, they're agents that work on your behalf. But most AI interfaces are just chat boxes. You can't see what the AI remembers, what it's doing in the background, or what it did last week.

Mission Control makes the invisible visible. You can scroll through past conversations, see what the AI has learned about you over time, watch it use tools in real time, and manage its scheduled tasks — all from one interface.

### The Design

The dark glass aesthetic with the icon sidebar was inspired by actual mission control rooms and spaceship interfaces. It's functional — the dark background reduces eye strain during long sessions — but it's also fun. Managing an AI should feel a little bit like flying a spaceship.

### Why It Matters

Companies are raising millions of dollars to build "AI observability" tools — dashboards for monitoring what AI agents are doing. I built my own, for my own AI, running on my own hardware. It's taught me more about what agent infrastructure actually needs than any whitepaper or conference talk.`,
  };
