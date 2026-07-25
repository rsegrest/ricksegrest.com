# System77

The Atari 2600 came out in 1977, the year I was born. It had 128 bytes of RAM. Not megabytes. Bytes. Cartridges held 4KB. The processor ran at roughly 1 MHz. The graphics chip, the TIA, could draw exactly two sprites, two missiles, and a ball at a time. By modern standards that's not a computer, it's a calculator.

And yet developers made Pitfall!, Yars' Revenge, and Adventure on this thing. Games with scrolling worlds, complex enemies, and hidden secrets, all in less memory than a single email takes. How they pulled that off is the question System77 tries to answer.

The secret was a technique called "racing the beam." The Atari didn't have a frame buffer. It couldn't draw a whole screen at once. The TV drew one line at a time, top to bottom, and the game had to update the graphics registers while the line was being drawn. If you were one microsecond late, the sprite wouldn't appear on that line. Developers had to count exactly how many CPU cycles each instruction took and arrange their code so the right things happened at the exact right moment. Part programming, part choreography.

System77 simulates these constraints in a modern browser. It emulates the TIA, enforces the same memory limits, requires the same "racing the beam" timing. You can write game logic for this simulated console and see if it would have worked on real 1977 hardware. The name is a nod to the Atari's release year and the engineers who built an industry out of almost nothing.

Studying extreme constraints teaches you more about efficient code than any modern framework. When you only have 128 bytes of RAM, you learn what's truly essential and what's decoration. Most of what we write today is decoration. I'm not exempting myself from that.

The repo is at rsegrest/system77-typescript. Write a sprite routine that races the beam and see how they did it.