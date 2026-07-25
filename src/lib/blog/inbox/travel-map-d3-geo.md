# Building an Interactive Travel Map with D3 and SVG

## Why Build a Travel Map?

I wanted a visual way to track where I've been. Countries visited, states explored, cities lived in. The off-the-shelf options either cost money, lock your data in a proprietary format, or don't let you change the look. As someone with a BFA in Visual Communication who spent his first career in graphic design before switching to software, "you can't customize the look" is a dealbreaker.

So I built my own.

## The Stack

- Next.js 16 with App Router
- D3 geo for map projections (geoEqualEarth for world, geoAlbersUsa for US)
- TopoJSON for country and state boundary data (world-atlas, us-atlas)
- SVG for rendering. Every country and state is a clickable SVG path.

## The Hard Parts

### Projections

The world map uses an equal Earth projection, which balances shape and area accuracy reasonably well. The US map switches to Albers USA, the classic US map projection that includes Alaska and Hawaii as insets. Switching between them means re-computing all the path data and label positions, which took me longer to get right than I want to admit.

### Label Collision Detection

Small countries like Luxembourg or Rhode Island can't fit their labels inside the region boundary. I implemented a leader-line system: try to place the label at the centroid first, then try 20 offset positions around it, pick the first one that doesn't overlap any already-placed label. It's a greedy algorithm, and greedy algorithms are usually wrong in theory and fine in practice, which is where I spend most of my time.

### Zoom and Pan

Custom zoom/pan with pointer events, not D3 zoom, because D3 zoom fights with React for control of the DOM in a way that made me say words I won't repeat here. Drag threshold of 5px prevents accidental pans when clicking. Zoom centers on the pointer position, not the viewport center, which is the behavior every map app uses because it's the one that doesn't make you seasick.

### City Markers

Cities are rendered as flag markers (visited/lived) or target markers (want to go). They only show when zoomed in or when their parent region is hovered, which keeps the map clean at default zoom. Showing everything at once turned the map into confetti, and I spent a week learning that lesson.

## The Dark Theme

Originally the map had a warm beige palette. I swapped it to a dark aurora theme matching my personal site: deep navy background, cyan accents, glass-morphism panels. The status colors are cyan for visited, purple for seen, green for planned, amber for want, pink for lived. Five colors, each one earns its slot, none of them are there because they looked nice in a screenshot.

## What's Next

The map now has a typeahead search bar that zooms to any country or state. Next up: linking blog posts to places, so clicking a country shows related articles. I want the map to be an index into my own writing, not just a pinboard.