# React with clean architecture

Most software projects start clean and end up as a tangled mess. Business logic mixed with button colors. Database queries living inside dropdown components. A simple change in one place breaks something completely unrelated three folders away. I've watched it happen enough times that I built a reference implementation to stop it.

This repo is a working example of Clean Architecture applied to a React app. Three distinct layers that don't get tangled.

Business rules: what the app actually does. The logic. The decisions. This layer knows nothing about buttons or databases. It doesn't care how the data got there or how it's displayed. It just cares about the rules.

Data: how information is stored and retrieved. This layer knows about the business rules but nothing about the user interface. It doesn't know if you're rendering to a browser, a mobile app, or a test runner.

Presentation: what the user sees and interacts with. This layer knows about the business rules but nothing about how data is stored. It asks the business layer for data and renders it. That's it.

When these layers are separate, you can swap databases without touching a single line of UI code. Redesign the entire interface without risking business logic. Test the important stuff, the business rules, without rendering a single screen or connecting to a database. Onboard new developers who can understand what the app does by reading one clean layer instead of spelunking through a component tree.

The hardest part isn't the architecture. It's the discipline. It's so easy to take a shortcut and call the database directly from a button click "just this once." Every shortcut adds to the tangle, and the tangle compounds. Maintaining clean boundaries is a skill that transfers to any language, any framework, any project size. I still catch myself reaching for the shortcut.

This repo is a reference implementation. Concrete code, not a diagram on a slide. Study it, adapt it, argue with it. The repo is at rsegrest/react-with-clean-architecture.