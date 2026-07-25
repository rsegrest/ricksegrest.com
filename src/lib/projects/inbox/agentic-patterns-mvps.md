# Agentic design patterns MVP

Most explanations of how AI agents work come in two flavors. Academic papers full of math that nobody outside a lab can read, or blog posts with diagrams and no code that explain nothing. I wanted something you could actually run. Clone it, one command, watch the AI reason through a problem in your browser.

Four demos, each self-contained, each showing a different pattern.

Reflection: the AI writes something, then critiques its own work and improves it. Watching an AI edit its own essay in real time is weird and instructive. It catches mistakes I didn't know it made.

Tool use: the AI decides it needs information it doesn't have, reaches out to an external tool (a calculator, a search engine), and uses the result. You can see it reasoning about which tool to call and why. That reasoning is the interesting part, not the tool call itself.

Planning: give it a complex goal and it breaks the goal into steps before taking any action. The difference between "just do it" and "let me think about how to do this first." Most agent failures I've seen come from skipping that step.

Multi-agent: two or more AIs working together, debating, dividing up a task. Sometimes they agree, sometimes they argue, and the result is usually better than what either would produce alone. Not always. Usually.

I built this over a weekend (June 27-29, 2026) because I kept getting asked "how do agents actually work?" and slides weren't cutting it. People need to see the thought process unfold, not read a bullet list of capabilities. Each demo is designed to be understood in an afternoon.

These four patterns, reflection, tool use, planning, and collaboration, are the building blocks of every AI assistant and autonomous system being built right now. Understanding them isn't just for researchers anymore. The repo is at rsegrest/agentic-patterns-mvps. Run one and see for yourself.