# NASA proposal cost estimator

The email came back with the budget attached, and somebody had already sent a different version of the same spreadsheet to the customer. That was the problem. Not a one-off. A pattern.

For years at NASA, cost estimates and scope-of-work documents moved around as spreadsheets. Emailed, copied, edited by different people, renamed, re-emailed. Five people would have five copies, and nobody could tell you which one was real. Engineers were accidentally submitting proposals with the same work quoted twice because it appeared in two different versions of the same budget. To the customer, the project looked like it cost far more than it should. Embarrassing is one word for it. "Cost us a contract" is another.

I built a desktop application that replaces all of that. Every cost, every work item, every scope detail lives in one place. The engineers work from a single database, not a pile of email attachments. No more wondering which spreadsheet is the real one because there is only one.

The hard part wasn't the UI or the database. The hard part was the constraint: NASA's restricted network. No cloud services, no external dependencies, no phoning home. The app had to run entirely inside the fence, store data locally, and share it through channels that already existed inside the network. Getting creative about that was most of the work.

It launches from the Start menu like Word or Excel, but it's built with the same technology that powers modern websites (Electron, React, TypeScript). The engineers don't care about that. They care that the proposals going out the door have numbers that add up, and that nobody's double-counting a cost line because they had the wrong spreadsheet open.

Projected savings are six figures. I'll believe the exact number when I see it at the end of the fiscal year, but even a fraction of that pays for the time I spent building it.

Note: This is a proprietary NASA internal application. No public repo or demo is available.