# Game clawtroller

The idea was simple. Build a two-player game, share a link with a friend, and start playing. No downloads, no accounts, no servers to manage. The web is the most universal platform there is. Every device has a browser. I wanted to remove every piece of friction between "I want to play" and "I'm playing."

When two people connect, their browsers talk directly to each other over WebRTC. No server in the middle relaying every move. It's a direct line between the players, which makes games feel instant. That matters for fast-paced action where every millisecond counts.

The framework handles the hard parts. Connecting players, keeping game state in sync, handling disconnections (and reconnections, because home Wi-Fi is never as stable as you think). The game developer writes the game. I wrote the plumbing.

Most game frameworks are massive engines designed for AAA studios. Unity, Unreal. This is the opposite. Lightweight, web-native, built for indie developers who want to make something playable in a weekend.

The hardest technical challenge was making two browsers stay perfectly in sync when they're talking directly to each other over the internet. Home routers, firewalls, NAT traversal, spotty Wi-Fi. All of it conspires against you. Getting it to work reliably, so a chess move arrives instantly and an action game doesn't desync, was a genuine puzzle. I spent more time on STUN and TURN servers than on any game logic.

The repo is at rsegrest/game-clawtroller. Deployed on free hosting, costs nothing to run. If you've ever wanted to build a game but didn't want to learn Unity, try it.