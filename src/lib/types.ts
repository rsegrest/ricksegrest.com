export type MediaType = "image" | "video" | "animation";

/** A built-in CSS-animation preview style for projects without image/video. */
export type AnimationKind =
  | "aurora"      // flowing gradient mesh
  | "orbit"       // orbiting nodes
  | "wave"        // equalizer bars
  | "scan"        // terminal scanline
  | "mesh"        // pulsing grid
  | "shimmer";    // prismatic shimmer

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

export type SortKey = "date" | "category" | "popularity" | "title";

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
  stars?: number; // cached star count
  starsUpdatedAt?: number; // epoch ms
  featured?: boolean;
}

export interface GalleryState {
  projects: Project[];
  lastExported?: number;
}
