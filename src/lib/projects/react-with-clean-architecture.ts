import type { Project } from "../types";

export const react_with_clean_architecture: Project = {
    id: "react-with-clean-architecture",
    title: "React + Clean Architecture",
    description:
      "A blueprint for keeping large software projects organized as they grow. Demonstrates how to separate business logic from user interface code so your project doesn't become a tangled mess.",
    category: "Web Apps",
    tags: ["React", "TypeScript", "Clean Architecture", "Recoil", "Styled-Components"],
    date: "2019-12-08 — 2023-04-06",
    media: { type: "animation", animation: "layers", accent: "#a855f7" },
    links: { repo: "https://github.com/rsegrest/react-with-clean-architecture" },
    githubRepo: "rsegrest/react-with-clean-architecture",
    techStack: [
      { label: "The Problem", items: "Most projects start organized and end up as spaghetti — business rules mixed with button colors" },
      { label: "The Solution", items: "Three clean layers: what the app does, how it stores data, and how it looks — each kept separate" },
      { label: "The Benefit", items: "Change the database without touching the UI. Redesign the interface without breaking business logic. Test the important stuff without rendering a single screen." },
    ],
    article: `## The Problem

Most software projects start clean and end up as a tangled mess. Business logic gets mixed with button colors. Database queries live inside dropdown components. A simple change in one place breaks something completely unrelated three folders away.

This is especially common in web apps, where the line between "what the app does" and "how it looks" gets blurry fast.

### The Solution

This project is a working example of **Clean Architecture** — a way of organizing code into three distinct layers that don't get tangled:

- **Business Rules** — what the app actually does. The logic. The decisions. This layer knows nothing about buttons or databases.
- **Data** — how information is stored and retrieved. This layer knows about the business rules but nothing about the user interface.
- **Presentation** — what the user sees and interacts with. This layer knows about the business rules but nothing about how data is stored.

### Why This Matters

When these layers are separate, you can:
- **Swap databases** without touching a single line of UI code
- **Redesign the entire interface** without risking breaking any business logic
- **Test the important stuff** — the business rules — without rendering a single screen or connecting to a database
- **Onboard new developers** who can understand what the app does by reading one clean layer

### The Hardest Part

It's not the architecture — it's the discipline. It's *so easy* to take a shortcut and call the database directly from a button click "just this once." But every shortcut adds to the tangle. Maintaining clean boundaries is a skill that transfers to any language, any framework, any project size.

This repo is a reference implementation — a concrete example of what "clean" looks like in practice, with real code you can study and adapt.`,
  };
