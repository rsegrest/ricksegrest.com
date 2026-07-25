import type { Project } from "../types";

export const jira_python_book: Project = {
    id: "jira-python-book",
    title: "Jira Python Book",
    description:
      "A 100-page guide that teaches non-programmers how to automate their work using Python. Born from real tools I built at NASA that eliminated hours of manual reporting for 50+ engineers.",
    category: "Educational",
    tags: ["Python", "Jira", "Atlassian API", "DevOps", "Book"],
    date: "2024-10-29 — 2024-11-04",
    media: { type: "animation", animation: "book", accent: "#22d3ee" },
    links: { repo: "https://github.com/rsegrest/jira-python-book" },
    githubRepo: "rsegrest/jira-python-book",
    techStack: [
      { label: "The Book", items: "100 pages, written for people who have never programmed before" },
      { label: "The Tools", items: "Teaches Python automation for Jira and Confluence — the tools NASA teams use every day" },
      { label: "The Impact", items: "Funded by a NASA TIPI Grant to spread automation knowledge across the agency" },
    ],
    article: `## The Backstory

At NASA, I built three automation tools that connected to Jira and Confluence — the project management software our teams use daily. These tools eliminated hours of manual reporting every week for over 50 engineers. Instead of copying data between spreadsheets and Jira by hand, a script did it in seconds.

The tools were so successful that NASA awarded me a **TIPI Grant** (Technology Infusion Partnership Initiative) to write a 100-page book teaching other teams how to do the same thing.

### What's In the Book

It starts from absolute zero — "here's how to install Python" — and builds up to real automation: querying project data, creating tickets automatically, generating reports, and managing workflows. Every concept has a runnable code example in the companion GitHub repository.

The book was written for **non-programmers** — engineers, managers, and administrators who use Jira every day but have never written code. The goal was to show them that a 20-line script could replace hours of manual work, and that they could write that script themselves.

### Why It Matters

Most enterprise software training focuses on clicking through the UI. But the real productivity multiplier is automation — teaching people to make the computer do the repetitive parts. The book has been used across multiple NASA teams, and the companion code repository is public so anyone can learn from it.

### The Meta Lesson

Writing a book for beginners forces you to understand your subject at a much deeper level. You can't hide behind jargon or skip steps. Every concept has to be explained from first principles. That discipline — breaking complex ideas into teachable pieces — has made me a better engineer and a better teacher.`,
  };
