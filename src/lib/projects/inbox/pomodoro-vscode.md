# Pomodoro VS Code

I live in VS Code. I write code in it, review changes in it, read documentation in it, plan my day in it. Switching to a separate app to check a Pomodoro timer, even for two seconds, breaks concentration. Two seconds is enough to lose the thread of what you were thinking. So I built a timer that lives in the status bar at the bottom of the editor and never makes you leave.

The Pomodoro Technique is simple. Work for 25 minutes, take a 5-minute break, repeat. After four cycles, take a longer break. It's one of the most effective focus methods I've found, and I've tried most of them.

The extension puts the countdown in the status bar. Always visible, never in the way. Glance at it instead of context-switching for it. When a session ends you get a gentle notification, not a disruptive popup. Durations are configurable if 25 and 5 aren't your numbers. Maybe you want 45-minute sessions, or 10-minute breaks. Session tracking shows how many focused blocks you completed today, which is more useful than it sounds for honest self-assessment.

The hidden challenge was keeping the timer accurate. JavaScript's built-in timer function loses about 1-2 milliseconds per second, which adds up over a 25-minute session. By the end you'd be off by a couple of seconds, and over a workday that drift compounds. I had to implement a self-correcting timer that constantly checks against the actual system clock to stay accurate. Nobody notices when it works. Everybody notices when it doesn't.

This is a tool I use every day. Building tools for your own workflow is the best kind of side project. You're the user, so you know exactly what's annoying and exactly what would fix it. No user research required, no personas to invent, no stakeholder meetings. Just you and the thing that was bothering you.

The repo is at rsegrest/pomodoro-vscode. If you live in VS Code too, try it.