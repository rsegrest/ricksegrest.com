# UX critique tool

I have a BFA in Visual Communication. I spent my first career as a graphic designer before I switched to software engineering. So when I see a bad interface, I see it through two sets of eyes, and both of them are annoyed.

This tool lets you drag a screenshot of any app or website into it and get a design review in seconds. The AI points out what's wrong, explains why it's a problem, gives you a severity rating, and an overall 0-100 score. Like having a senior UX designer look at your work, except it takes seconds instead of days and doesn't cost a consulting fee.

It checks against three frameworks that professional designers actually use. Usability: is anything confusing, are buttons where people expect them, can a new user figure this out. Accessibility: is there enough contrast, would a screen reader make sense of it, can someone with poor vision use it. Visual design: do related things look related, is the layout balanced, does the eye flow naturally.

The output is your screenshot back with problem areas highlighted, each one rated Critical, Major, Minor, or Cosmetic, tagged with a confidence score. The 0-100 overall score breaks down by category so you can see where the worst damage is.

Getting design feedback is usually slow. You schedule a review, wait for someone's availability, get subjective opinions back. This gives you structured feedback grounded in established principles, and it catches things human reviewers miss because it doesn't get tired or skip sections.

The hard part was teaching an AI to "see" a user interface and reason about it the way a designer would. Not just describing what's in the image, but understanding that a button in the wrong place will confuse users, or that low-contrast text will be unreadable for someone with vision impairment. Getting it to consistently produce accurate, actionable feedback took a lot of experimentation. The first hundred iterations were humbling.

Try it yourself at ux-critique-tool.vercel.app. Upload a screenshot of something you built and see what it finds. The repo is at rsegrest/ux-critique-tool.