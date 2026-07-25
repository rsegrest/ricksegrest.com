import type { Project } from "../types";

export const joust_resurrected: Project = {
    id: "joust-resurrected",
    title: "Joust Resurrected",
    description:
      "A faithful recreation of the 1982 arcade classic Joust — knights riding ostriches, jousting in the air over a lava pit. Every line of code is cross-referenced to the original 1982 assembly source.",
    category: "Retro Games",
    tags: ["Go", "SDL2", "Retro", "Assembly"],
    date: "2026-03-28 — 2026-04-18",
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
  };
