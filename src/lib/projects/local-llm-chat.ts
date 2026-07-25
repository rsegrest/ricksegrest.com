import type { Project } from "../types";

export const local_llm_chat: Project = {
    id: "local-llm-chat",
    title: "Local LLM Chat",
    description:
      "A chat app for talking to AI that runs entirely on your own computer — no cloud, no subscriptions, no data leaving your network. Switch between different AI personalities like Code Reviewer or Writing Coach with a single click.",
    category: "AI Tools",
    tags: ["React", "TypeScript", "Ollama", "Tailwind", "SSE"],
    date: "2026-07-10",
    media: { type: "animation", animation: "chat", accent: "#22d3ee" },
    links: { live: "http://localhost:3000", repo: "https://github.com/rsegrest/local-llm-chat" },
    githubRepo: "rsegrest/local-llm-chat",
    featured: true,
    techStack: [
      { label: "Interface", items: "Clean, modern chat design — type a message, watch the AI respond in real time" },
      { label: "Privacy", items: "Everything runs on your hardware. No data ever leaves your network" },
      { label: "AI Backends", items: "Works with any AI engine you have running — on your laptop, your gaming PC, or a server in the closet" },
      { label: "Personalities", items: "5 built-in AI personas (Code Reviewer, Writing Coach, Devil's Advocate, and more) plus the ability to create your own" },
      { label: "Storage", items: "All your conversations stay on your computer — no account, no login, no cloud" },
    ],
    article: `## What It Does

It's a chat app for talking to AI — like ChatGPT, but it runs entirely on your own computer. No monthly subscription. No data sent to a company's servers. Everything stays private, on your hardware.

### Why I Built It

I have several computers in my home lab running different AI engines — one on my main PC, one on a gaming rig with a powerful graphics card, and cloud services for when I need extra horsepower. Every chat app I tried was locked to a single service. I wanted one interface that could talk to any of them.

### What Makes It Different

**It's private.** Your conversations never leave your network. If you're discussing sensitive work material, personal finances, or just don't want a corporation reading your chats — this is for you.

**It has personalities.** Instead of rewriting instructions every time you want the AI to act differently, you can switch personalities with a dropdown. Need a code review? Click "Code Reviewer." Want someone to challenge your ideas? Click "Devil's Advocate." You can create your own, too.

**It works with whatever AI you have.** Got an AI running on your gaming PC? Point it there. Using a cloud service? That works too. You can even switch mid-conversation.

### The Coolest Part

Watching the AI's response appear word by word — like someone typing to you in real time — never gets old. There's a stop button if it goes off the rails, and every code block gets a copy button so you can paste it straight into your project.`,
  };
