import type { BlogPost } from "../types";

export const travel_map_d3_geo: BlogPost = {
    id: "travel-map-d3-geo",
    title: "Building an Interactive Travel Map with D3 and SVG",
    slug: "travel-map-d3-geo",
    description:
      "A deep dive into rendering world and US maps with D3 geo projections, handling zoom/pan, collision-free labels, and city markers — all in React.",
    date: "2026-07-10",
    tags: ["D3.js", "SVG", "React", "Next.js", "Data Visualization"],
    category: "Development",
    published: true,
    readingTime: 10,
    article: `## Why Build a Travel Map?

I wanted a visual way to track where I've been — countries visited, states explored, cities lived in. Off-the-shelf solutions either cost money, lock your data in a proprietary format, or don't let you customize the look.

So I built my own.

## The Stack

- **Next.js 16** with App Router
- **D3 geo** for map projections (geoEqualEarth for world, geoAlbersUsa for US)
- **TopoJSON** for country and state boundary data (world-atlas, us-atlas)
- **SVG** for rendering — every country and state is a clickable SVG path

## The Hard Parts

### Projections
The world map uses an equal Earth projection (good balance of shape and area accuracy). The US map switches to Albers USA (the classic US map projection that includes Alaska and Hawaii as insets). Switching between them means re-computing all the path data and label positions.

### Label Collision Detection
Small countries like Luxembourg or Rhode Island can't fit their labels inside the region boundary. I implemented a leader-line system: try to place the label at the centroid first, then try 20 offset positions around it, pick the first one that doesn't overlap any already-placed label. It's a greedy algorithm but works well in practice.

### Zoom and Pan
Custom zoom/pan with pointer events (not D3 zoom, which fights with React). Drag threshold of 5px prevents accidental pans when clicking. Zoom centers on the pointer position, not the viewport center.

### City Markers
Cities are rendered as flag markers (visited/lived) or target markers (want to go). They only show when zoomed in or when their parent region is hovered — keeps the map clean at default zoom.

## The Dark Theme

Originally the map had a warm beige palette. I swapped it to a dark aurora theme matching my personal site — deep navy background, cyan accents, glass-morphism panels. The status colors are now vibrant: cyan for visited, purple for seen, green for planned, amber for want, pink for lived.

## What's Next

The map now has a typeahead search bar that zooms to any country or state. Next up: linking blog posts to places so clicking a country shows related articles.`,
  };
