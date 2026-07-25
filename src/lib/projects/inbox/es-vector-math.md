# ES vector math

I was working on a game project and caught myself copying the same vector math function from a previous repo for the third time. Same function, same bugs I'd already fixed once, same tests I'd already written. The existing options were either part of massive game engines (hundreds of megabytes for a few math functions) or written in plain JavaScript with no type safety. I wanted something small, reliable, and focused. Just the math, nothing else.

Every time something moves on a screen, a character walking, a ball bouncing, a spaceship turning, there's vector math happening. Position, velocity, direction, distance. These are all vectors. This library is a clean toolkit for doing that math so every game developer doesn't write the same "calculate the distance between two points" function for the hundredth time.

The basics you'd expect are in there. Add two positions, find the distance between things, figure out which direction something is facing. Also the stuff that makes movement feel natural: smooth interpolation between points, random scattering within a radius, projecting one vector onto another.

The library is immutable by default. Operations create new values instead of modifying existing ones. This prevents an entire category of bugs where you accidentally change a position that something else was still using. It's a small design choice that eliminates a lot of headaches. I learned that lesson the hard way, more than once, before I made it the default.

Zero dependencies. The whole library is self-contained. No chain of third-party packages. No left-pad situations. Just clean math that works anywhere JavaScript runs.

Published on NPM. The repo is at rsegrest/es-vector-math. Use it if you're tired of copying the same functions around too.