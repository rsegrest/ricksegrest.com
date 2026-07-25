# Joust resurrected

I discovered video games in the early 1980s, standing in an arcade at maybe six years old, feeding quarters into a machine where a knight rode an ostrich through the air and tried to lance other knights into a lava pit. That game was Joust. It's one of the games that made me fall in love with programming. Forty-something years later, I rebuilt it.

The original was written in 1982 for arcade hardware that no longer exists. The source code is in 6809 assembly, about as close to raw machine instructions as you can get. Fast, nearly unreadable to modern programmers. I rewrote the entire game in Go, but here's the part I care about: every function in my code has a comment pointing back to the exact line in the original 1982 source. You can read my code and the original side by side and see exactly how the arcade machine worked.

Everything from the original is in there. The knights, the ostriches, the lava troll (the hardest enemy), the pterodactyl that shows up when you take too long, the eggs, the platforms, the transporter pads. The sprites are decoded from the original arcade ROM. The sound effects are synthesized to match the original hardware. The enemy AI, how Bounders chase you, how Hunters stalk you, how Shadow Lords dodge, is ported directly from the 1982 assembly tables.

The hardest part was the lava troll. Its behavior in the original game depends on subtle timing that doesn't translate cleanly to modern computers. Getting it to act identically, including weird edge cases like hesitating at platform edges, took weeks of recording arcade footage and comparing it frame by frame against the assembly code. I watched the same two seconds of footage more times than I want to admit.

Rebuilding this felt like archaeology. Digging through layers of 1980s engineering to understand how they pulled off magic with almost no hardware. They had 128 bytes of RAM and made a game that people are still playing 44 years later. I have more memory in my keyboard than that entire cabinet had, and I'm standing on their shoulders.

The repo is at rsegrest/joust-resurrected. Every function points back to the 1982 source. Read them side by side if you want to see how it actually worked.