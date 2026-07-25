import type { BlogPost } from "../types";

export const nasa_cost_estimator: BlogPost = {
    id: "nasa-cost-estimator",
    title: "Building a Six-Figure Cost Estimator for NASA",
    slug: "nasa-cost-estimator",
    description:
      "How an Electron + React + Dataverse desktop app replaced spreadsheet chaos and eliminated duplicate cost entries for NASA Engineering Materials.",
    date: "2026-07-05",
    tags: ["Electron", "React", "TypeScript", "Dataverse", "NASA", "Enterprise"],
    category: "Development",
    published: true,
    featured: true,
    readingTime: 7,
    article: `## The Problem

NASA engineers need to submit cost estimates and scope-of-work documents for every project proposal. For years, this was done in spreadsheets — emailed back and forth, copied, edited by different people, and inevitably full of mistakes.

The most painful bug: engineers were accidentally submitting proposals with **duplicate costs** — the same work quoted twice because it appeared in two different spreadsheets. To the customer, it looked like the project would cost far more than it actually should.

## The Solution

A desktop application built with Electron + React + TypeScript that connects to Microsoft Dataverse via a PowerShell worker. Every cost, every work item, every scope detail lives in one place. No more wondering which spreadsheet is the "real" one.

### Key Features

- **Centralized database** — one source of truth instead of dozens of email attachments
- **Scope-of-work generation** — auto-generates SOW documents from the cost data
- **Duplicate detection** — the app prevents double-counting by design
- **NASA-compliant** — works within NASA's restricted network (no cloud services, no external dependencies)

## The Impact

Projected six-figure cost savings by eliminating costly errors in proposal budgets. The tool went from concept to alpha in 8 weeks under an FY surge, led by a 5-person team.

## Tech Stack

- **Electron** — native desktop app for Windows
- **React + TypeScript** — modern, responsive UI
- **Microsoft Dataverse** — centralized data storage
- **PowerShell** — worker for Dataverse integration
- **shadcn/ui** — component library

## What I Learned

Building for NASA's restricted network is a different world. No npm registries, no cloud services, no external API calls. Everything has to be self-contained. The Electron app bundles everything it needs, and the Dataverse connection goes through an on-premise PowerShell bridge.

The six-figure projected savings isn't just about catching errors — it's about speed. What used to take a week of spreadsheet wrangling now takes an afternoon.`,
  };
