# Inflation Calculator

My grandfather bought his first car for $2,000 in 1965. I always heard that number growing up and thought, man, cars were cheap back then. Then I ran it through this calculator. $2,000 in 1965 is about $19,500 in today's money. That car wasn't cheap. He just had different money.

That's the whole point of this tool. You enter any dollar amount from any month and year since 1913, pick an end date, and it tells you what that money was actually worth. The math uses official Consumer Price Index data from the U.S. Bureau of Labor Statistics. Not estimates, not a model. The actual numbers the government uses.

## What you see

The calculator gives you four things: the adjusted value in today's dollars, the total inflation rate over the period, how much purchasing power your money lost, and a chart showing the collapse over time.

The chart is the part that gets people. Watching a line drop steadily over decades makes inflation viscerally real in a way that "a dollar isn't worth what it used to be" never does. I've watched people stare at it longer than they expected to.

## How it's built

Two parts. A Python Flask backend does the math with the CPI data. A React frontend makes it visual and interactive. They're separate so the calculator engine can be reused by other apps. Together they make something useful and, I'll admit, surprisingly fun to play with.

Try this: pick your birth year, enter your current salary, see what it was "worth" back then. Or pick the year you started your career and see how much your salary would need to be today just to keep up.
