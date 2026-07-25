import type { Project } from "../types";

export const ux_critique_tool: Project = {
    id: "ux-critique-tool",
    title: "UX Critique Tool",
    description:
      "Upload a screenshot of any app or website and get an instant design review. The AI spots problems, explains why they're issues, and gives you a score — like having a senior designer review your work in seconds.",
    category: "AI Tools",
    tags: ["AI", "Python", "Computer Vision", "Next.js"],
    date: "2026-06-22",
    media: { type: "animation", animation: "magnify", accent: "#fbbf24" },
    links: {
      live: "https://ux-critique-tool.vercel.app",
      repo: "https://github.com/rsegrest/ux-critique-tool",
    },
    githubRepo: "rsegrest/ux-critique-tool",
    techStack: [
      { label: "How It Works", items: "Drag and drop a screenshot — the AI looks at it and writes up what's wrong and why" },
      { label: "What It Checks", items: "Usability (is it confusing?), accessibility (can everyone use it?), and visual design (does it look right?)" },
      { label: "The Output", items: "Problem areas are highlighted on your screenshot with severity ratings and a 0–100 overall score" },
      { label: "Live Demo", items: "Try it right now at the link above — upload any screenshot and see what it finds" },
    ],
    article: `## What It Does

Take a screenshot of any app or website. Upload it. In seconds, you get a detailed design review — the AI points out what's wrong, explains why it's a problem, and gives you an overall score.

It's like having a senior UX designer look at your work, except it takes seconds instead of days and costs nothing.

### What It Looks For

The AI checks your design against three established frameworks that professional designers use:

- **Usability** — Is anything confusing? Are buttons where people expect them to be? Can a new user figure this out?
- **Accessibility** — Can someone with poor vision use this? Is there enough contrast? Would a screen reader make sense of it?
- **Visual Design** — Do related things look related? Is the layout balanced? Does the eye flow naturally?

### The Output

You get your screenshot back with problem areas highlighted, each one rated by severity (Critical, Major, Minor, or Cosmetic) and tagged with a confidence score. There's also a 0–100 overall score broken down by category.

### Why It's Useful

Getting design feedback is usually slow and expensive — you schedule a review, wait for someone's availability, and get subjective opinions. This tool gives you instant, structured feedback grounded in established principles. It catches things human reviewers miss, and it's available 24/7.

### The Hardest Part

Teaching an AI to "see" a user interface and reason about it like a designer would. It's not just describing what's in the image — it's understanding that a button in the wrong place will confuse users, or that low-contrast text will be unreadable for someone with vision impairment. Getting the AI to consistently produce accurate, actionable feedback took a lot of experimentation.`,
  };
