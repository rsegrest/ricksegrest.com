# Local LLM chat

I have three computers in my home lab running AI engines. One on my main PC, one on a gaming rig with a GPU that eats models for breakfast, and a cloud service for when I need more horsepower than the closet can provide. Every chat app I tried was locked to a single backend. I wanted one interface that could talk to any of them, so I built one.

It runs entirely on your own computer. No monthly subscription. No data sent to a company's servers. Everything stays on your hardware, inside your network. If you're discussing sensitive work material, personal finances, or just don't want a corporation reading your chats, that's the whole point.

The feature I use most is personalities. Instead of rewriting the system prompt every time I want the AI to behave differently, I switch with a dropdown. Code Reviewer for reviewing a pull request. Devil's Advocate when I think I'm too sure of an architecture decision. Writing Coach when I'm drafting something that needs another set of eyes. You can create your own, and I have.

It works with whatever AI you have running. Point it at the Ollama instance on your laptop, the model server on your gaming PC, or a cloud endpoint. You can switch mid-conversation if one backend is better for what you're doing than another.

The thing that never gets old is watching the response stream in word by word. There's a stop button for when it goes off the rails (and it does), and every code block gets a copy button so you can paste it straight into your project. Small things, but they add up to an app I actually want to use instead of one I tolerate.

The repo is at rsegrest/local-llm-chat. Run it locally and point it at whatever you've got.