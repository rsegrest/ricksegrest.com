import type { Project } from "../types";

export const nasa_proposal_estimator: Project = {
    id: "nasa-proposal-estimator",
    title: "NASA Proposal Cost Estimator",
    description:
      "Desktop application that centralizes proposal and budget planning for NASA. Replaces spreadsheet chaos with a single source of truth — eliminating duplicate cost entries and streamlining scope-of-work generation. Projected six-figure cost savings.",
    category: "NASA / Enterprise",
    tags: ["Electron", "React", "TypeScript", "Dataverse", "PowerShell"],
    date: "2026-07-13",
    media: { type: "animation", animation: "chart", accent: "#fbbf24" },
    links: {},
    featured: true,
    techStack: [
      { label: "Desktop App", items: "Runs as a native application on Windows — not a website, not a spreadsheet" },
      { label: "User Interface", items: "Modern, responsive design that feels familiar to anyone who's used a web app" },
      { label: "Data Storage", items: "Centralized database — one source of truth instead of dozens of email attachments" },
      { label: "The Problem It Solves", items: "Engineers were accidentally double-counting costs because different versions of the same spreadsheet were circulating. This makes that impossible." },
      { label: "Constraints", items: "Built to work within NASA's restricted network — no cloud services, no external dependencies" },
      { label: "Impact", items: "Projected six-figure savings by eliminating costly errors in proposal budgets" },
    ],
    article: `## What It Does

NASA engineers need to submit cost estimates and scope-of-work documents for every project proposal. For years, this was done in spreadsheets — emailed back and forth, copied, edited by different people, and inevitably full of mistakes.

This tool replaces all of that with a single desktop application. Every cost, every work item, every scope detail lives in one place. No more wondering which spreadsheet is the "real" one.

### The Problem It Solved

Before this tool existed, engineers were accidentally submitting proposals with **duplicate costs** — the same work quoted twice because it appeared in two different spreadsheets. To the customer, it looked like the project would cost far more than it actually should. That's embarrassing, and it can cost NASA contracts.

The root cause was simple: spreadsheet versioning hell. When five people edit five copies of the same budget, mistakes are inevitable. This tool makes those mistakes impossible by keeping everything in a centralized database — one source of truth that everyone works from.

### Why It's Cool

This isn't just a form with some fields. It's a full desktop application — it launches from the Start menu like Word or Excel, but it's built with the same technology that powers modern websites. It had to work within NASA's restricted network (no cloud services, no external websites), which meant getting creative about how data is stored and shared.

The engineers can now focus on engineering instead of spreadsheet forensics. And the proposals that go out the door have accurate numbers that add up.

> *Note: This is a proprietary NASA internal application. No public repo or demo is available.*`,
  };
