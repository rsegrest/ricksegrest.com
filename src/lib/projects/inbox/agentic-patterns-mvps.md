# Agentic Design Patterns MVP

Most explanations of how AI agents work come in two flavors: academic papers full of math, or blog posts with no code. I wanted something you could actually run. Click a button, watch the AI reason through a problem in your browser, and see what's happening inside the box instead of just trusting the output.

So I built 21 demos. Each one is a self-contained Streamlit app that demonstrates a specific design pattern. Clone the repo, run one command, and you're watching an AI think.

## The 21 patterns

**01 — Prompt chaining.** An article research brief generator. The AI writes an outline, then feeds that outline into the next step, which writes section summaries, which feeds into a final brief. Each step's output is the next step's input. Simple, but it's the backbone of most agent workflows.

**02 — Routing.** A smart message triage assistant. The AI reads an incoming message and decides which handler to send it to: tech support, billing, general inquiry, or urgent. It's a switch statement, but the switch is an LLM making judgment calls.

**03 — Parallelization.** A competitive research agent that fires off multiple research queries simultaneously instead of one at a time. Three searches run in parallel, results merge at the end. Faster, and sometimes the AI finds connections between the parallel results it wouldn't have found sequentially.

**04 — Reflection.** A self-editing writing assistant. The AI writes something, critiques its own work, then rewrites based on its own feedback. It's like watching someone edit their own essay in real time. Sometimes the second draft is worse. That's part of the lesson.

**05 — Tool use.** A research assistant with live data access. The AI decides it needs information it doesn't have, reaches out to external tools (a calculator, a search engine, a database), and uses the results. You can see it choose which tool to call and why. This is the pattern that makes agents feel like agents instead of chatbots.

**06 — Planning.** A multi-source research planner. Give the AI a complex goal and it breaks it down into steps before taking any action. The difference between "just do it" and "let me think about how to do this first." The plan isn't always right, but watching it reason through the steps is the interesting part.

**07 — Multi-agent collaboration.** A research crew that builds a wiki page together. Multiple AIs with different roles (researcher, writer, editor) working on the same task. Sometimes they agree, sometimes they argue, and the result is usually better than what either would produce alone.

**08 — Memory management.** A personal session memory assistant. The AI remembers context from previous interactions and uses it in new ones. This is the pattern that separates a one-shot chatbot from something that feels like it knows you. (Currently uses in-memory storage only, which doesn't survive page refreshes. A known limitation I'm working on.)

**09 — Learning and adaptation.** An adaptive research style learner. The AI adjusts its approach based on feedback. You tell it the output was too verbose, next time it's more concise. It's not fine-tuning, it's prompt-level adaptation, and it's surprisingly effective for simple cases.

**10 — Model Context Protocol (MCP).** A wiki vault MCP server. The AI connects to an external knowledge source through a standardized protocol. MCP is becoming the universal plug for agent-tool integration. If you've used Hermes Agent's MCP support, this is the same pattern, stripped down to the essentials.

**11 — Goal setting and monitoring.** A research goal tracker. The AI sets a goal, works toward it, and monitors its own progress. It can tell you when it's stuck, when it's done, or when the goal has shifted. Useful for long-running tasks where you need to check in periodically.

**12 — Exception handling and recovery.** A robust research agent that handles failures gracefully. API timeout? Retry with a different approach. Bad data? Flag it and continue. Most agent demos assume everything works. This one assumes it won't.

**13 — Human-in-the-loop.** An approval-gated agent. The AI does its work, then pauses and waits for a human to approve before taking action. Critical for anything that touches production systems, sends emails, or makes changes you can't undo.

**14 — Knowledge retrieval (RAG).** An agent-optimized RAG pipeline. The AI searches a document collection, retrieves relevant chunks, and uses them to answer questions. RAG is everywhere now, but watching the retrieval step happen in real time makes it click in a way that architecture diagrams don't.

**15 — Inter-agent communication (A2A).** A research and writing agent team that communicates through structured messages. Different from multi-agent collaboration (pattern 07) because here the agents pass typed messages to each other rather than working on a shared document. Think of it as agents talking vs agents editing the same Google Doc.

**16 — Resource-aware optimization.** A smart resource router that picks the right model for each task. Simple question? Use the cheap model. Complex reasoning? Route to the expensive one. Token costs add up fast, and this pattern is how you keep them under control without sacrificing quality.

**17 — Reasoning techniques.** An advanced reasoning agent that uses chain-of-thought, tree-of-thought, and self-consistency. Different reasoning strategies for different problem types. Watching the AI explore multiple branches and pick the best one is a different experience from watching it go straight to an answer.

**18 — Guardrails and safety.** A safe research agent with output validation. The AI's output is checked against safety rules before it reaches the user. If it tries to do something it shouldn't, the guardrail catches it. Not exciting, but necessary if you're putting agents in front of real users.

**19 — Evaluation and monitoring.** An agent evaluation framework. How do you know if your agent is actually good? This demo shows metrics, scoring, and monitoring approaches for evaluating agent quality over time. The kind of thing you wish you had before deploying, not after.

**20 — Prioritization.** A priority-aware agent that manages its own task queue. Not all tasks are equal. The AI decides what to work on first based on urgency, dependencies, and estimated effort. It's a to-do list, but the AI is both the worker and the project manager.

**21 — Exploration and discovery.** A discovery-oriented agent that explores unfamiliar information spaces. Instead of answering a specific question, it wanders, finds interesting things, and reports back. The pattern for research agents that don't know what they're looking for until they find it.

## Why I built this

These patterns (reflection, tool use, planning, collaboration, and the other 17) are the building blocks of every AI assistant, coding agent, and autonomous system being built right now. Understanding them isn't just for researchers anymore.

Each demo is designed to be understood in a weekend afternoon. Not because the pattern is simple, but because watching it run is more instructive than reading about it.