export type MediaType = "image" | "video" | "animation";

/** A built-in CSS-animation preview style for projects without image/video. */
export type AnimationKind =
  | "aurora"       // flowing gradient mesh
  | "orbit"        // orbiting nodes
  | "wave"         // equalizer bars
  | "scan"         // terminal scanline
  | "mesh"         // pulsing grid
  | "shimmer"      // prismatic shimmer
  | "vector"       // CRT vector graphics (Asteroids)
  | "chart"        // animated chart bars (Inflation)
  | "curves"       // easing curves (Motion & Tween)
  | "knight"       // flapping knight (Joust)
  | "chat"         // streaming chat bubbles (Local LLM Chat)
  | "magnify"      // magnifying glass scan (UX Critique)
  | "dashboard"    // radar/dashboard (Mission Control)
  | "calendar"     // calendar/clock (Hyperfocus Planner)
  | "gamepad"      // game controller (Game Clawtroller)
  | "network"      // agent nodes (Agentic Patterns)
  | "grid"         // coordinate grid (ES Vector Math)
  | "pixels"       // retro pixel art (System77)
  | "book"         // book pages (Jira Python Book)
  | "layers"       // architecture layers (Clean Architecture)
  | "timer";       // pomodoro timer (Pomodoro VS Code)

export interface ProjectMedia {
  type: MediaType;
  /** URL for image or video. Omit for animation. */
  url?: string;
  /** Poster image for video (optional). */
  poster?: string;
  /** Which CSS animation to render when type === "animation". */
  animation?: AnimationKind;
  /** Optional accent color (hex) to theme the animation. */
  accent?: string;
}

export type SortKey = "date" | "category" | "title";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string; // ISO yyyy-mm-dd
  media: ProjectMedia;
  links: {
    live?: string;
    repo?: string;
    promo?: string; // promo video URL
  };
  /** GitHub repo owner/name, e.g. "rsegrest/local-llm-chat" — used for live stars. */
  githubRepo?: string;
  /** Sub-projects shown inside this project's detail view (not separate cards). */
  subprojects?: { title: string; repo?: string; live?: string }[];
  stars?: number; // cached star count
  starsUpdatedAt?: number; // epoch ms
  featured?: boolean;
  /** Optional markdown article content for the project detail page. */
  article?: string;
  /** Tech stack cards shown in a styled grid on the detail page. */
  techStack?: { label: string; items: string }[];
}

export interface GalleryState {
  projects: Project[];
  lastExported?: number;
}
