# Building a Six-Figure Cost Estimator for NASA

## The Problem

NASA engineers and accountants need to submit cost estimates and scope-of-work documents for every project proposal. For years, this was done in spreadsheets, emailed back and forth, copied, edited by different people, and inevitably full of mistakes. If you've ever tried to maintain a single spreadsheet across five people, you understand. Now try doing it across an entire directorate.

The most painful bug wasn't a formula error or a broken reference. Engineers were accidentally submitting proposals with duplicate costs, the same work quoted twice because it appeared in two different spreadsheets that nobody realized were both in play. To the customer, it looked like the project would cost far more than it actually should. That's the kind of mistake that doesn't show up in review until it's already embarrassing.

## The Solution

A desktop application built with Electron + React + TypeScript that connects to Microsoft Dataverse via a PowerShell worker. Every cost, every work item, every scope detail lives in one place. No more wondering which spreadsheet is the "real" one, because there isn't a spreadsheet anymore.

### What It Does

- Centralized database. One source of truth instead of dozens of email attachments.
- Scope-of-work generation. Auto-generates SOW documents from the cost data.
- Duplicate detection. The app prevents double-counting by design, which is the feature that sold the whole thing.
- NASA-compliant. Works within NASA's restricted network, no cloud services, no external dependencies.

## The Impact

Projected six-figure cost savings by eliminating costly errors in proposal budgets. The tool went from concept to alpha in 8 weeks under an FY surge, led by a 5-person team. Eight weeks isn't a lot of time for an enterprise app, but FY surges have a way of focusing priorities that no amount of planning can match.

## Tech Stack

- Electron. Native desktop app for Windows.
- React + TypeScript. Modern, responsive UI.
- Microsoft Dataverse. Centralized data storage.
- PowerShell. Worker for Dataverse integration, because Dataverse's REST API doesn't play nicely with Node and PowerShell is already everywhere on NASA machines.
- shadcn/ui. Component library.

## What I Learned

Building for NASA's restricted network is a different world. No npm registries, no cloud services, no external API calls. Everything has to be self-contained. The Electron app bundles everything it needs, and the Dataverse connection goes through an on-premise PowerShell bridge. The first time I tried to `npm install` on a NASA machine and watched it hang for 45 seconds before timing out, I understood what "restricted network" actually meant.

The six-figure projected savings comes from speed as much as accuracy. What used to take a week of spreadsheet wrangling now takes an afternoon. I work at NASA Engineering Materials, EM04, and I've watched engineers spend more time reconciling spreadsheets than doing the engineering they were hired to do. That's the real cost, and it doesn't show up in any line item.