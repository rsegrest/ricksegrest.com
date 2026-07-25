import { useCallback, useEffect, useState } from "react";
import type { Project } from "./types";
import { SEED_PROJECTS } from "./projects";
import { fetchStarsMany } from "./github";

const STORAGE_KEY = "dev-gallery:v1";

function load(): Project[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Project[];
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    /* fall through to seed */
  }
  return JSON.parse(JSON.stringify(SEED_PROJECTS));
}

function persist(projects: Project[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch {
    /* quota / private mode — ignore */
  }
}

export function useGallery() {
  const [projects, setProjects] = useState<Project[]>(() => load());
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    persist(projects);
  }, [projects]);

  const upsert = useCallback((p: Project) => {
    setProjects((prev) => {
      const i = prev.findIndex((x) => x.id === p.id);
      if (i === -1) return [p, ...prev];
      const next = [...prev];
      next[i] = p;
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setProjects((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const reset = useCallback(() => {
    setProjects(JSON.parse(JSON.stringify(SEED_PROJECTS)));
  }, []);

  const importProjects = useCallback((next: Project[]) => {
    if (Array.isArray(next) && next.length) setProjects(next);
  }, []);

  const refreshStars = useCallback(async () => {
    const repos = projects
      .map((p) => p.githubRepo)
      .filter((r): r is string => !!r);
    if (!repos.length) return;
    setRefreshing(true);
    const map = await fetchStarsMany([...new Set(repos)]);
    setProjects((prev) =>
      prev.map((p) =>
        p.githubRepo && map[p.githubRepo] !== undefined
          ? { ...p, stars: map[p.githubRepo], starsUpdatedAt: Date.now() }
          : p
      )
    );
    setRefreshing(false);
  }, [projects]);

  return {
    projects,
    upsert,
    remove,
    reset,
    importProjects,
    refreshStars,
    refreshing,
  };
}
