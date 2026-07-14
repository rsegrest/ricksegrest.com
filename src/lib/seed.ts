import type { Project } from "./types";

/**
 * Seed gallery with Rick's real projects.
 * Remotes, dev ports, and descriptions gathered from the repos on this machine.
 * Media defaults to a themed CSS animation (no external assets required);
 * add image/video URLs via the UI or by editing a project's media field.
 */
export const SEED_PROJECTS: Project[] = [
  {
    id: "local-llm-chat",
    title: "Local LLM Chat",
    description:
      "Privacy-first chat UI for local LLM endpoints (Ollama, LM Studio, vLLM, llama.cpp) with swappable personalities, streaming SSE, voice I/O, and per-endpoint model auto-discovery. Everything stays on your hardware.",
    category: "AI Tools",
    tags: ["React", "TypeScript", "Ollama", "Tailwind", "SSE"],
    date: "2025-07-10",
    media: { type: "animation", animation: "aurora", accent: "#22d3ee" },
    links: { live: "http://localhost:3000", repo: "https://github.com/rsegrest/local-llm-chat" },
    githubRepo: "rsegrest/local-llm-chat",
    featured: true,
  },
  {
    id: "agent-memory-browser",
    title: "Agent Memory Browser",
    description:
      "Visual interface into Hermes agent memory — browse, search, edit, and visualize persistent memory layers read straight from the real SQLite databases. No mocks, no simulated data.",
    category: "Agent Infrastructure",
    tags: ["Next.js", "React", "SQLite", "better-sqlite3", "TypeScript"],
    date: "2025-07-10",
    media: { type: "animation", animation: "mesh", accent: "#a855f7" },
    links: { live: "http://localhost:3001", repo: "https://github.com/rsegrest/agent-memory" },
    githubRepo: "rsegrest/agent-memory",
  },
  {
    id: "agent-cron-monitor",
    title: "Agent Cron Monitor",
    description:
      "Web GUI that visualizes Hermes cron, system crontab, and systemd timers on a Gantt-style timeline with health status, run history, and output preview — all merged from real infrastructure.",
    category: "Agent Infrastructure",
    tags: ["Next.js", "React", "better-sqlite3", "TypeScript"],
    date: "2025-07-11",
    media: { type: "animation", animation: "wave", accent: "#a3e635" },
    links: { live: "http://localhost:3002", repo: "https://github.com/rsegrest/agent-cron-monitor" },
    githubRepo: "rsegrest/agent-cron-monitor",
  },
  {
    id: "agent-session-browser",
    title: "Agent Session Browser",
    description:
      "Full-text search across Hermes conversation history backed by FTS5. Jump to any past session, inspect the goal → match → resolution arc, and read surrounding turns.",
    category: "Agent Infrastructure",
    tags: ["Next.js", "React", "SQLite", "FTS5", "TypeScript"],
    date: "2025-07-11",
    media: { type: "animation", animation: "scan", accent: "#22d3ee" },
    links: { live: "http://localhost:3003", repo: "https://github.com/rsegrest/agent-session-browser" },
    githubRepo: "rsegrest/agent-session-browser",
  },
  {
    id: "agent-tool-visualizer",
    title: "Agent Tool Visualizer",
    description:
      "Real-time WebSocket feed of every tool call the Hermes agent makes, with historical replay mode, a Recharts timeline, and per-call detail dialogs. Newest calls stream in live.",
    category: "Agent Infrastructure",
    tags: ["Next.js", "React", "WebSocket", "Recharts", "TypeScript"],
    date: "2025-07-11",
    media: { type: "animation", animation: "orbit", accent: "#f472b6" },
    links: { live: "http://localhost:3004", repo: "https://github.com/rsegrest/agent-tool-visualizer" },
    githubRepo: "rsegrest/agent-tool-visualizer",
  },
  {
    id: "agent-skill-manager",
    title: "Agent Skill Manager",
    description:
      "Manage Hermes skills and plugins — browse the catalog, inspect trigger conditions, and edit or eject component source. Part of the Agent OS portfolio.",
    category: "Agent Infrastructure",
    tags: ["Next.js", "React", "TypeScript", "@base-ui"],
    date: "2025-07-11",
    media: { type: "animation", animation: "shimmer", accent: "#a855f7" },
    links: { live: "http://localhost:3005" },
  },
  {
    id: "hermes-mission-control",
    title: "Hermes Mission Control",
    description:
      "Unified command center that composes the Agent OS apps as tabs — sessions, memory, cron, skills, tools, and chat in one dark glass dashboard with an icon rail and live status.",
    category: "Agent Infrastructure",
    tags: ["Next.js", "React", "TypeScript", "@base-ui"],
    date: "2025-07-11",
    media: { type: "animation", animation: "aurora", accent: "#f472b6" },
    links: { live: "http://localhost:3006", repo: "https://github.com/rsegrest/hermes-agent-mission-control" },
    githubRepo: "rsegrest/hermes-agent-mission-control",
    featured: true,
  },
  {
    id: "agentic-patterns-mvps",
    title: "Agentic Design Patterns MVP",
    description:
      "Educational collection of small, runnable implementations of the agentic design patterns — reflection, tool use, planning, multi-agent, and more. Each MVP is a weekend-sized build with a polished HTML landing page.",
    category: "Experiments",
    tags: ["Python", "Streamlit", "Educational", "AI Agents"],
    date: "2025-07-01",
    media: { type: "animation", animation: "mesh", accent: "#22d3ee" },
    links: { repo: "https://github.com/rsegrest/agentic-patterns-mvps" },
    githubRepo: "rsegrest/agentic-patterns-mvps",
  },
  {
    id: "game-clawtroller",
    title: "Game Clawtroller",
    description:
      "Modular, extensible two-player game framework for the web — peer-to-peer state sync via WebRTC, serverless hosting on Vercel + Supabase, scaling from turn-based chess to real-time action games.",
    category: "Web Apps",
    tags: ["TypeScript", "Next.js", "WebRTC", "Supabase", "Turborepo"],
    date: "2025-04-06",
    media: { type: "animation", animation: "orbit", accent: "#a3e635" },
    links: { repo: "https://github.com/rsegrest/game-clawtroller" },
    githubRepo: "rsegrest/game-clawtroller",
  },
  {
    id: "ux-critique-tool",
    title: "UX Critique Tool",
    description:
      "Upload a UI screenshot, get an instant structured critique — annotated bounding boxes, severity/confidence, and a 0–100 score grounded in three established UX frameworks. Live demo on Vercel.",
    category: "AI Tools",
    tags: ["AI", "Python", "Computer Vision", "Next.js"],
    date: "2025-06-22",
    media: { type: "animation", animation: "scan", accent: "#fbbf24" },
    links: {
      live: "https://ux-critique-tool.vercel.app",
      repo: "https://github.com/rsegrest/ux-critique-tool",
    },
    githubRepo: "rsegrest/ux-critique-tool",
  },
  {
    id: "hyperfocus-planner",
    title: "Hyperfocus Planner",
    description:
      "Focus-oriented planning app designed around deep-work sprints — a calm, distraction-free interface for mapping tasks and protecting flow state.",
    category: "Web Apps",
    tags: ["React", "TypeScript", "Productivity"],
    date: "2025-04-06",
    media: { type: "animation", animation: "wave", accent: "#22d3ee" },
    links: {},
  },
];
