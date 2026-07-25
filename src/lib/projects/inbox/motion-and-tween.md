# Motion and tween

Things in the real world don't start and stop instantly. A car accelerates from a stoplight. A ball bounces and each bounce is smaller. A door eases closed. When something on a screen jumps from point A to point B with no ramp, your brain knows it's fake before you can articulate why. It looks like a computer made it.

This library brings natural motion to things on a screen. Instead of an object jumping from point A to point B, it glides. Instead of stopping abruptly, it decelerates. The difference is subtle but it's everything. It's what separates "that looks generated" from "that feels alive."

My first career was as a graphic designer in the early 2000s, when Macromedia Flash was the only way to make websites move. I learned the math behind smooth motion from Robert Penner's book *Programming Macromedia Flash MX* (2002). That book showed me how different mathematical curves create different personalities of movement. A quadratic ease-out feels playful. An exponential ease-in feels urgent. A sinusoidal motion feels organic, like breathing. That book is part of why I went back to school for Computer Science and eventually a Master's in Modeling & Simulation.

The library has eight motion curves, each with three variations (ease in, ease out, ease in-out). Linear for steady mechanical motion. Quadratic for gentle acceleration. Cubic for snappier transitions. Quartic and quintic for progressively more dramatic movement. Exponential for starts-slow-finishes-fast or the reverse. Circular for smooth arcs. Sinusoidal for organic, breathing-like motion.

I still have my copy of Penner's book. The ActionScript code is hopelessly obsolete, but the math is timeless. This library preserves those concepts in modern TypeScript, the same motion principles that made Flash games feel alive, now available to anyone building for the web.

About 2,094 downloads so far. The repo is at rsegrest/motion-and-tween.