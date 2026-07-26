import type { Project } from "../types";

export const inflation_calculator: Project = {
    id: "inflation-calculator",
    title: "Inflation Calculator",
    description:
      "Find out what your money is actually worth. Enter any amount from any year since 1913 and see what it's worth today — plus a chart showing how its value has collapsed over time.",
    category: "Web Apps",
    tags: ["Python", "Flask", "React", "TypeScript", "Bootstrap", "Chart.js", "Docker"],
    date: "2026-02-03 — 2026-02-10",
    media: { type: "animation", animation: "decay", accent: "#22d3ee" },
    links: { live: "https://inflation-calc-gui.vercel.app", repo: "https://github.com/rsegrest/inflation-calc-gui" },
    githubRepo: "rsegrest/inflation-calc-gui",
    subprojects: [
      { title: "Inflation Calculator API", repo: "https://github.com/rsegrest/inflation-calc-api" },
      { title: "Inflation Calculator GUI", repo: "https://github.com/rsegrest/inflation-calc-gui" },
    ],
    techStack: [
      { label: "The Calculator", items: "Enter an amount, pick a start date, pick an end date — see what happened to your money" },
      { label: "The Data", items: "Uses official Consumer Price Index data from the U.S. Bureau of Labor Statistics going back to 1913" },
      { label: "The Chart", items: "Watch your money's purchasing power collapse over time on an interactive graph" },
    ],
    article: `## What It Does

You've heard that "a dollar isn't worth what it used to be." This tool shows you exactly how much it's worth.

Enter any dollar amount from any month and year since 1913. Pick an end date (or use today). The calculator tells you:

- What that amount is worth in today's dollars
- The total inflation rate over that period
- How much value your money has lost
- A chart showing the collapse over time

### An Example

Say your grandfather told you he bought his first car for $2,000 in 1965. Plug that in and you'll see that's equivalent to about $19,500 today. Or look at it the other way: something that costs $100 today would have cost about $10 in 1965.

### Why I Built It

Like a lot of people, I've watched my purchasing power erode over the last few years. I wanted a tool that would show me — not just tell me — what was happening. The chart is the most striking part: watching a line steadily drop over decades makes the abstract concept of inflation viscerally real.

### How It's Built

The project has two parts: a backend that does the math (using official government CPI data) and a frontend that makes it visual and interactive. They're separate so the calculator engine could be reused by other apps, but together they make something that's both useful and surprisingly fun to play with.

Try it: pick your birth year, enter your current salary, and see what it was "worth" back then. Or pick the year you started your career and see how much your salary would need to be today just to keep up.`,
  };
