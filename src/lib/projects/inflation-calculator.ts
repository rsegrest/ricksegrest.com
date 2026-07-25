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
    links: { repo: "https://github.com/rsegrest/inflation-calc-gui" },
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
    article: `My grandfather bought his first car for $2,000 in 1965. I always heard that number growing up and thought, man, cars were cheap back then. Then I ran it through this calculator. $2,000 in 1965 is about $19,500 in today's money. That car wasn't cheap. He just had different money.

That's the whole point of this tool. You enter any dollar amount from any month and year since 1913, pick an end date, and it tells you what that money was actually worth. The math uses official Consumer Price Index data from the U.S. Bureau of Labor Statistics. Not estimates, not a model. The actual numbers the government uses.

### What you see

The calculator gives you four things: the adjusted value in today's dollars, the total inflation rate over the period, how much purchasing power your money lost, and a chart showing the collapse over time.

The chart is the part that gets people. Watching a line drop steadily over decades makes inflation viscerally real in a way that "a dollar isn't worth what it used to be" never does. I've watched people stare at it longer than they expected to.

### How it's built

Two parts. A Python Flask backend does the math with the CPI data. A React frontend makes it visual and interactive. They're separate so the calculator engine can be reused by other apps. Together they make something useful and, I'll admit, surprisingly fun to play with.

Try this: pick your birth year, enter your current salary, see what it was "worth" back then. Or pick the year you started your career and see how much your salary would need to be today just to keep up.`,
  };
