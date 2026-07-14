import type { Project } from "./types";

export const ABOUT = {
  name: "Rick Segrest",
  role: "Senior Software Engineer — NASA Engineering Materials (EM04)",
  bio: "Senior Software Engineer with 20+ years of experience at the intersection of UI/UX Design and Complex Systems Visualization. I'm a Full Stack Application Developer for NASA's Engineering Materials (EM04), building model-based systems-engineering tools that help scientists and engineers visualize the future of space exploration. I'm passionate about making complex technical tools accessible — bridging heavy technical data and human-readable interfaces. Background in Computer Science (BS), Modeling & Simulation (MS), and Visual Communication (BFA). NASA Team Innovation Award (2025).",
  expertise: [
    "Frontend: React, TypeScript, Semantic-UI, IBM Carbon, Material-UI, D3",
    "Backend: Python (Flask), Node.js, PostgreSQL, MongoDB",
    "DevOps: Docker, Git, Atlassian API automation",
  ],
  links: {
    github: "https://github.com/rsegrest",
    email: "rsegrest77+ghpg@gmail.com",
  },
};

export const SEED_PROJECTS: Project[] = [
  {
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
  },
  {
    id: "local-llm-chat",
    title: "Local LLM Chat",
    description:
      "A chat app for talking to AI that runs entirely on your own computer — no cloud, no subscriptions, no data leaving your network. Switch between different AI personalities like Code Reviewer or Writing Coach with a single click.",
    category: "AI Tools",
    tags: ["React", "TypeScript", "Ollama", "Tailwind", "SSE"],
    date: "2025-07-10",
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
  },
  {
    id: "agentic-patterns-mvps",
    title: "Agentic Design Patterns MVP",
    description:
      "A collection of small, runnable demos showing how AI agents think, plan, and work together. Each demo is self-contained — clone it, run it, and watch the AI reason through problems in real time.",
    category: "Experiments",
    tags: ["Python", "Streamlit", "Educational", "AI Agents"],
    date: "2025-07-01",
    media: { type: "animation", animation: "network", accent: "#22d3ee" },
    links: { repo: "https://github.com/rsegrest/agentic-patterns-mvps" },
    githubRepo: "rsegrest/agentic-patterns-mvps",
    techStack: [
      { label: "Language", items: "Python — chosen because it's the most accessible language for AI experimentation" },
      { label: "Interface", items: "Each demo opens in your browser with a clean, visual dashboard showing what the AI is doing" },
      { label: "Demos Included", items: "AI that reviews its own work, AI that uses tools, AI that makes plans, and multiple AIs collaborating" },
    ],
    article: `## What It Is

A set of interactive demos that show how AI agents work under the hood. Each demo is a self-contained project — download it, run one command, and you can watch an AI reason through a problem step by step in your browser.

### The Four Demos

**Reflection** — Watch an AI write something, then critique its own work and improve it. It's like watching someone edit their own essay in real time.

**Tool Use** — The AI decides it needs information it doesn't have, so it reaches out to external tools (like a calculator or a search engine) to get it. You can see it "thinking" about which tool to use and why.

**Planning** — Give the AI a complex goal and watch it break it down into steps before taking any action. It's the difference between "just do it" and "let me think about how to do this first."

**Multi-Agent** — Two or more AIs working together, debating each other, or dividing up a task. Sometimes they agree, sometimes they argue — and the result is usually better than what either would produce alone.

### Why I Built This

Most explanations of how AI agents work are either academic papers full of math or blog posts with no code. I wanted something you could actually run — click a button and see the AI's thought process unfold visually. Each demo is designed to be understood in a weekend afternoon.

### Why It Matters

These patterns — reflection, tool use, planning, collaboration — are the building blocks of every AI assistant, coding agent, and autonomous system being built right now. Understanding them isn't just for researchers anymore.`,
  },
  {
    id: "game-clawtroller",
    title: "Game Clawtroller",
    description:
      "A framework for building two-player browser games. Share a link with a friend and you're playing — no downloads, no accounts, no servers. Works for everything from chess to real-time action games.",
    category: "Web Apps",
    tags: ["TypeScript", "Next.js", "WebRTC", "Supabase", "Turborepo"],
    date: "2025-04-06",
    media: { type: "animation", animation: "gamepad", accent: "#a3e635" },
    links: { repo: "https://github.com/rsegrest/game-clawtroller" },
    githubRepo: "rsegrest/game-clawtroller",
    techStack: [
      { label: "Platform", items: "Runs in any web browser — no app store, no download, no install" },
      { label: "Connection", items: "Players connect directly to each other — no server in the middle slowing things down" },
      { label: "Matchmaking", items: "See who's online and challenge them to a game" },
      { label: "Hosting", items: "Deployed on free hosting — costs nothing to run" },
    ],
    article: `## What It Is

A toolkit for making two-player games that run in a web browser. The big idea: you should be able to build a game, share a link with a friend, and start playing — no downloads, no accounts, no servers to manage.

### How It Works

When two people connect, their browsers talk directly to each other. There's no server in the middle relaying every move — it's a direct line between players. This makes games feel instant, even for fast-paced action where every millisecond counts.

The framework handles all the hard stuff — connecting players, keeping game state in sync, handling disconnections — so the game developer just writes the fun part: the game itself.

### What Makes It Interesting

Most game frameworks are massive engines like Unity or Unreal, designed for AAA studios. This is the opposite: lightweight, web-native, and designed for indie developers who want to make something playable in a weekend.

The hardest technical challenge was making two browsers stay perfectly in sync when they're talking directly to each other over the internet. Home routers, firewalls, and spotty Wi-Fi all conspire against this. Getting it to work reliably — so a chess move arrives instantly and an action game doesn't desync — was a genuine puzzle.

### Why It Matters

The web is the most universal platform there is. Every device has a browser. Building games that work there — with no friction between "I want to play" and "I'm playing" — opens up game development to people who'd never install Unity.`,
  },
  {
    id: "ux-critique-tool",
    title: "UX Critique Tool",
    description:
      "Upload a screenshot of any app or website and get an instant design review. The AI spots problems, explains why they're issues, and gives you a score — like having a senior designer review your work in seconds.",
    category: "AI Tools",
    tags: ["AI", "Python", "Computer Vision", "Next.js"],
    date: "2025-06-22",
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
  },
  {
    id: "hyperfocus-planner",
    title: "Hyperfocus Planner",
    description:
      "A to-do app that actually plans your day for you. Tell it your big goals and it breaks them down into today's tasks — then schedules them on your calendar. Designed for deep, focused work.",
    category: "Web Apps",
    tags: ["React", "TypeScript", "Productivity"],
    date: "2025-04-06",
    media: { type: "animation", animation: "calendar", accent: "#22d3ee" },
    links: {},
    techStack: [
      { label: "The Idea", items: "Most to-do apps just give you a blank list. This one figures out what you should work on today" },
      { label: "AI Planning", items: "Tell it your long-term goals and it breaks them into milestones, weekly tasks, and daily actions" },
      { label: "Calendar", items: "Connects to Google Calendar so your planned work blocks actually show up in your schedule" },
      { label: "Privacy", items: "All your task data stays on your device — no cloud storage for your personal goals" },
    ],
    article: `## The Problem

"Launch a side project" is not a to-do item. Neither is "get in shape" or "learn Spanish." But most to-do apps treat everything as a flat list of checkboxes. Big goals need to be broken down — into milestones, into weekly tasks, into "what should I actually do today?"

This app does that breakdown for you.

### How It Works

1. **Tell it your goals** — type them in, paste them from a document, whatever
2. **The AI breaks them down** — "launch a side project" becomes: design the landing page, set up the database, write the first feature, test with friends, deploy
3. **It plans your week** — each of those steps gets scheduled into actual days
4. **It adapts** — when you finish something early (or fall behind), the whole plan recalibrates
5. **It shows up on your calendar** — your planned work blocks appear in Google Calendar so you actually do them

### The Design Philosophy

The interface is intentionally calm. No notifications. No gamification. No social features. No streaks or points or pressure. Just your goals, broken down into today's work, with a clear sense of progress.

It's designed for deep work — the kind of focused, uninterrupted sessions where real progress happens. The app gets out of your way so you can stay in flow.

### Why It's Different

Most productivity apps are either too simple (a blank list) or too complex (a project management tool designed for teams). This sits in the sweet spot: smart enough to do the planning for you, simple enough that you actually use it.`,
  },
  {
    id: "joust-resurrected",
    title: "Joust Resurrected",
    description:
      "A faithful recreation of the 1982 arcade classic Joust — knights riding ostriches, jousting in the air over a lava pit. Every line of code is cross-referenced to the original 1982 assembly source.",
    category: "Retro Games",
    tags: ["Go", "SDL2", "Retro", "Assembly"],
    date: "2026-02-15",
    media: { type: "animation", animation: "knight", accent: "#fbbf24" },
    links: { repo: "https://github.com/rsegrest/joust-resurrected" },
    githubRepo: "rsegrest/joust-resurrected",
    techStack: [
      { label: "The Game", items: "Knights on ostriches, aerial jousting, lava pits, pterodactyls, and eggs to collect" },
      { label: "The Challenge", items: "Recreating arcade-perfect behavior from 44-year-old assembly code" },
      { label: "The Detail", items: "Every sprite, every sound, every enemy behavior pattern matches the original arcade machine" },
      { label: "The Reference", items: "Each function in the new code points back to the exact line in the original 1982 source" },
    ],
    article: `## The Project

A pixel-perfect recreation of the 1982 arcade game ***Joust*** — the one where you're a knight riding an ostrich, flapping through the air, trying to lance enemy knights over a lava pit while avoiding pterodactyls.

### What Makes This Special

The original Joust was written in 1982 for arcade hardware that no longer exists. The source code is in 6809 assembly language — about as close to raw machine instructions as you can get. It's incredibly fast but nearly unreadable to modern programmers.

I rewrote the entire game in a modern language (Go), but here's the twist: **every single function in my code has a comment pointing back to the exact line in the original 1982 source.** You can read my code and the original side by side and see exactly how the arcade machine worked.

### What's In It

Everything from the original: the knights and their ostriches, the lava troll (the hardest enemy), the pterodactyl that shows up when you take too long, the eggs you collect, the platforms you land on, the transporter pads. All the sprites are decoded from the original arcade ROM. The sound effects are synthesized to match the original hardware. The enemy AI — how Bounders chase you, how Hunters stalk you, how Shadow Lords dodge — is ported directly from the 1982 assembly tables.

### The Hardest Part

The lava troll. Its behavior in the original game depends on subtle timing that doesn't translate cleanly to modern computers. Getting it to act identically — including weird edge cases like hesitating at platform edges — took weeks of recording arcade footage and comparing it frame by frame against the assembly code.

### Why I Built This

Joust was one of the games that made me fall in love with programming as a kid. Rebuilding it decades later, with the original source code as a guide, felt like archaeology — digging through layers of 1980s engineering to understand how they pulled off magic with almost no hardware.`,
  },
  {
    id: "inflation-calculator",
    title: "Inflation Calculator",
    description:
      "Find out what your money is actually worth. Enter any amount from any year since 1913 and see what it's worth today — plus a chart showing how its value has collapsed over time.",
    category: "Web Apps",
    tags: ["Python", "Flask", "React", "TypeScript", "Bootstrap", "Chart.js", "Docker"],
    date: "2026-02-15",
    media: { type: "animation", animation: "chart", accent: "#22d3ee" },
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
  },
  {
    id: "asteroids-p5-ts",
    title: "Asteroids (p5.js + TS)",
    description:
      "A browser-based recreation of the 1979 arcade classic Asteroids — complete with the signature vector-graphics look, simulated CRT flicker, and that electron-beam glow.",
    category: "Retro Games",
    tags: ["TypeScript", "p5.js", "Canvas", "Retro"],
    date: "2026-02-12",
    media: { type: "animation", animation: "vector", accent: "#a3e635" },
    links: { repo: "https://github.com/rsegrest/asteroids-p5-ts" },
    githubRepo: "rsegrest/asteroids-p5-ts",
    techStack: [
      { label: "The Look", items: "White outlines on black — exactly like the original arcade machine's vector display" },
      { label: "The Feel", items: "Simulated CRT flicker — the slight shimmer that made arcade screens feel alive" },
      { label: "The Tech", items: "Runs in any browser using the HTML5 Canvas — no plugins, no downloads" },
    ],
    article: `## The Game

This is ***Asteroids*** — the 1979 arcade classic where you pilot a tiny spaceship through a field of tumbling rocks, blasting them into smaller and smaller pieces while avoiding flying saucers. If you're too young to remember, this game helped create the entire arcade industry that followed.

### What Made the Original Special

Unlike every game that came after it, Asteroids didn't use pixels. It used a **vector display** — an electron beam gun that drew white lines directly onto the screen, one shape at a time. The beam moved so fast that the lines seemed to glow continuously, but there was always a tiny flicker between frames. That flicker gave the game its distinctive look — sharp, bright, almost holographic.

### How I Recreated It

Modern computer screens don't have electron beam guns. So I simulated one. The game draws each shape as crisp white outlines on a black background, and I intentionally skip every third frame to recreate that subtle CRT flicker. The result looks and feels like standing in front of an Asteroids cabinet in 1979.

### The Bonus Feature

As an experiment, I added the ability to load SVG files — the kind you create in Adobe Illustrator or Inkscape — and render them in the same vector-graphics style. This means you could draw your own spaceship, your own asteroids, even your own fonts, and the game would render them as if they were coming out of a 1979 arcade machine. It's a bridge between modern design tools and vintage display technology.

### Why It Matters

There's something pure about Asteroids. No textures, no particle effects, no 3D models — just lines and math. Recreating it teaches you more about graphics programming than any modern tutorial, because you have to understand exactly how each frame gets drawn.`,
  },
  {
    id: "es-vector-math",
    title: "ES Vector Math",
    description:
      "A math toolkit for making things move on screen. The foundational number-crunching that powers games, animations, and physics simulations — packaged up so other developers don't have to reinvent it.",
    category: "Libraries",
    tags: ["TypeScript", "Math", "NPM", "Graphics"],
    date: "2026-02-12",
    media: { type: "animation", animation: "grid", accent: "#22d3ee" },
    links: { repo: "https://github.com/rsegrest/es-vector-math" },
    githubRepo: "rsegrest/es-vector-math",
    techStack: [
      { label: "What It Does", items: "Handles all the math for moving, rotating, and measuring things in 2D and 3D space" },
      { label: "Who Uses It", items: "Game developers, animators, physics simulation builders, creative coders" },
      { label: "Distribution", items: "Published as a free, open-source package that anyone can add to their project" },
    ],
    article: `## What It Is

Every time something moves on a screen — a character walking, a ball bouncing, a spaceship turning — there's vector math happening under the hood. Position, velocity, direction, distance: these are all vectors.

This library is a clean, focused toolkit for doing that math. Instead of every game developer writing the same "calculate the distance between two points" function for the hundredth time, they can just use this.

### What's In It

The basics you'd expect: add two positions together, find the distance between things, figure out which direction something is facing. But also the stuff that makes movement feel natural: smooth interpolation between points, random scattering within a radius, projecting one vector onto another.

### Why I Built It

I was working on game projects and kept copying the same math functions from one project to the next. The existing options were either part of massive game engines (hundreds of megabytes for a few math functions) or written in plain JavaScript with no type safety. I wanted something small, reliable, and focused — just the math, nothing else.

### The Design Philosophy

The library is **immutable by default** — operations create new values instead of modifying existing ones. This prevents an entire category of bugs where you accidentally change a position that something else was still using. It's a small design choice that eliminates a lot of headaches.

It's also **zero dependencies** — the entire library is self-contained. No chain of third-party packages. No "left-pad" situations. Just clean math that works anywhere JavaScript runs.`,
  },
  {
    id: "motion-and-tween",
    title: "Motion & Tween",
    description:
      "A library that makes things move beautifully. The same motion math that powered classic Flash animations and games — easing, bouncing, smooth acceleration — modernized for today's web.",
    category: "Libraries",
    tags: ["TypeScript", "Animation", "NPM", "Tweening"],
    date: "2026-02-12",
    media: { type: "animation", animation: "curves", accent: "#a855f7" },
    links: { repo: "https://github.com/rsegrest/motion-and-tween" },
    githubRepo: "rsegrest/motion-and-tween",
    techStack: [
      { label: "What It Does", items: "Makes animations feel natural — objects accelerate, decelerate, bounce, and glide instead of moving robotically" },
      { label: "Downloads", items: "2,094 total downloads — used by developers around the world" },
      { label: "Inspiration", items: "Based on Robert Penner's classic 2002 book on animation math — the same techniques used in early Flash games" },
    ],
    article: `## What It Does

Have you ever noticed that things in the real world don't start and stop instantly? A car accelerates from a stoplight. A ball bounces and each bounce is smaller. A door eases closed.

This library brings that natural motion to things on a screen. Instead of an object jumping from point A to point B, it glides. Instead of stopping abruptly, it decelerates. The difference is subtle but transformative — it's what separates "that looks like a computer made it" from "that feels alive."

### The Backstory

My first career was as a graphic designer in the early 2000s, when **Macromedia Flash** was the only way to make websites move. I loved creating animated cartoons and games, and I learned the math behind smooth motion from Robert Penner's book ***Programming Macromedia Flash MX*** (2002).

That book showed me how different mathematical curves — quadratic, cubic, exponential, sinusoidal — create different "personalities" of movement. A quadratic ease-out feels playful. An exponential ease-in feels urgent. A sinusoidal motion feels organic, like breathing.

That book is part of why I went back to school for Computer Science and eventually a Master's in Modeling & Simulation.

### What's In the Library

Eight different motion curves, each with three variations (ease in, ease out, ease in-out):

- **Linear** — steady, mechanical, no acceleration
- **Quadratic** — gentle acceleration, good for UI elements
- **Cubic** — snappier, good for attention-grabbing transitions
- **Quartic & Quintic** — progressively more dramatic
- **Exponential** — starts slow, finishes fast (or vice versa)
- **Circular** — smooth arcs, good for radial menus
- **Sinusoidal** — organic, breathing-like motion

### Why It Matters

I still have my copy of Penner's book. The ActionScript code is hopelessly obsolete, but the math is timeless. This library preserves those concepts in modern form — the same motion principles that made Flash games feel alive, now available to anyone building for the web.`,
  },
  {
    id: "system77-typescript",
    title: "System77",
    description:
      "A love letter to the Atari 2600 — simulating the legendary constraints of the 1977 console (128 bytes of RAM, 4KB cartridges) to understand how developers pulled off magic with almost nothing.",
    category: "Retro Games",
    tags: ["TypeScript", "Atari", "Retro", "Simulation"],
    date: "2026-02-12",
    media: { type: "animation", animation: "pixels", accent: "#f472b6" },
    links: { repo: "https://github.com/rsegrest/system77-typescript" },
    githubRepo: "rsegrest/system77-typescript",
    techStack: [
      { label: "The Hardware", items: "Simulates the Atari 2600's extreme limitations — 128 bytes of RAM, a 1.19 MHz processor, and a graphics chip that could only draw two moving objects at a time" },
      { label: "The Challenge", items: "Developers had to 'race the beam' — updating graphics in real time as the TV drew each line" },
      { label: "The Result", items: "A playable simulation that shows how games like Pitfall! and Adventure achieved the impossible" },
    ],
    article: `## The Concept

The Atari 2600, released in 1977, is legendary for its constraints: **128 bytes of RAM** (not megabytes — bytes), **4KB cartridges**, a processor running at roughly 1 MHz, and a graphics chip that could draw exactly two sprites, two missiles, and a ball at a time.

By modern standards, that's not a computer — it's a calculator. And yet developers made *Pitfall!*, *Yars' Revenge*, and *Adventure* on this thing. Games with scrolling worlds, complex enemies, and hidden secrets — all in less memory than a single email.

### How They Did It

The secret was a technique called **"racing the beam."** The Atari didn't have a frame buffer — it couldn't draw a whole screen at once. Instead, the TV drew one line at a time, top to bottom, and the game had to update the graphics registers *while the line was being drawn.* If you were one microsecond late, the sprite wouldn't appear on that line.

This meant developers had to count exactly how many CPU cycles each instruction took and arrange their code so the right things happened at the exact right moment. It was part programming, part choreography.

### What I Built

System77 simulates these constraints in a modern browser. It emulates the Atari's graphics chip (the TIA), enforces the same memory limits, and requires the same "racing the beam" timing. You can write game logic for this simulated console and see if it would have worked on real 1977 hardware.

### Why It Matters

Studying extreme constraints teaches you more about efficient code than any modern framework. When you only have 128 bytes of RAM, you learn what's truly essential. The name "System77" is a nod to the Atari's original codename (Stella) and its release year — a tribute to the engineers who built an industry out of almost nothing.`,
  },
  {
    id: "jira-python-book",
    title: "Jira Python Book",
    description:
      "A 100-page guide that teaches non-programmers how to automate their work using Python. Born from real tools I built at NASA that eliminated hours of manual reporting for 50+ engineers.",
    category: "Educational",
    tags: ["Python", "Jira", "Atlassian API", "DevOps", "Book"],
    date: "2026-02-12",
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
  },
  {
    id: "react-with-clean-architecture",
    title: "React + Clean Architecture",
    description:
      "A blueprint for keeping large software projects organized as they grow. Demonstrates how to separate business logic from user interface code so your project doesn't become a tangled mess.",
    category: "Web Apps",
    tags: ["React", "TypeScript", "Clean Architecture", "Recoil", "Styled-Components"],
    date: "2026-02-12",
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
  },
  {
    id: "pomodoro-vscode",
    title: "Pomodoro VS Code",
    description:
      "A focus timer that lives inside your code editor. Work for 25 minutes, break for 5 — without ever leaving your flow. Built because switching to a separate timer app breaks concentration.",
    category: "Tools",
    tags: ["TypeScript", "VS Code", "Extension", "Productivity"],
    date: "2026-02-12",
    media: { type: "animation", animation: "timer", accent: "#a3e635" },
    links: { repo: "https://github.com/rsegrest/pomodoro-vscode" },
    githubRepo: "rsegrest/pomodoro-vscode",
    techStack: [
      { label: "The Technique", items: "Pomodoro: 25 minutes of focused work, 5-minute break, repeat. After 4 cycles, take a longer break" },
      { label: "The Integration", items: "Lives in the VS Code status bar — always visible, never in the way" },
      { label: "The Philosophy", items: "The best productivity tool is the one you don't have to switch apps to use" },
    ],
    article: `## What It Does

The **Pomodoro Technique** is simple: work for 25 minutes, take a 5-minute break, repeat. After four cycles, take a longer break. It's one of the most effective focus methods ever studied.

This extension puts that timer directly in your code editor's status bar — the thin strip at the bottom of the window. You never have to switch to a separate app, which means you never break flow.

### Why I Built It

I live in VS Code. It's where I write code, review changes, read documentation, and plan my day. Switching to a separate Pomodoro app — even for two seconds to check the timer — breaks concentration. An extension that lives in the status bar keeps you in the zone.

### Features

- **Always visible countdown** in the status bar — glance at it, don't context-switch for it
- **Gentle notifications** when a session ends — not disruptive popups
- **Configurable durations** — maybe you prefer 45-minute sessions, or 10-minute breaks
- **Session tracking** — see how many focused sessions you completed today

### The Hidden Challenge

Computer timers drift. JavaScript's built-in timer function loses about 1-2 milliseconds per second, which adds up over a 25-minute session. I had to implement a self-correcting timer that constantly checks against the actual clock to stay accurate. It's the kind of detail nobody notices until it's wrong.

### The Meta Angle

This is a tool I actually use every day. Building tools for your own workflow is the best kind of side project — you're the user, so you know exactly what's annoying and exactly what would fix it. No user research required.`,
  },
  {
    id: "hermes-mission-control",
    title: "Hermes Mission Control",
    description:
      "A visual dashboard for my AI assistant that runs 24/7 on my home server. See every conversation, every memory, every scheduled task, and every tool the AI has used — all in one dark glass cockpit.",
    category: "Agent Infrastructure",
    tags: ["Next.js", "React", "TypeScript", "@base-ui"],
    date: "2025-07-11",
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
  },
];
