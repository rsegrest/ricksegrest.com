import type { Project } from "../types";

export const game_clawtroller: Project = {
    id: "game-clawtroller",
    title: "Game Clawtroller",
    description:
      "A framework for building two-player browser games. Share a link with a friend and you're playing — no downloads, no accounts, no servers. Works for everything from chess to real-time action games.",
    category: "Web Apps",
    tags: ["TypeScript", "Next.js", "WebRTC", "Supabase", "Turborepo"],
    date: "2026-04-01 — 2026-04-09",
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
  };
