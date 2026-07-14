/**
 * Fetch live GitHub star counts. Uses the public GitHub REST API.
 * Unauthenticated: 60 req/hr. If a token is stored in localStorage
 * ("ghToken") it is attached to lift the limit to 5000 req/hr.
 */
const API = "https://api.github.com";

function getToken(): string | null {
  try {
    return localStorage.getItem("ghToken");
  } catch {
    return null;
  }
}

export async function fetchStars(ownerRepo: string): Promise<number | null> {
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
    const tok = getToken();
    if (tok) headers.Authorization = `Bearer ${tok}`;
    const res = await fetch(`${API}/repos/${ownerRepo}`, { headers });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

/** Batch fetch stars for many repos (called from the UI). */
export async function fetchStarsMany(
  repos: string[]
): Promise<Record<string, number>> {
  const out: Record<string, number> = {};
  await Promise.all(
    repos.map(async (r) => {
      const s = await fetchStars(r);
      if (s !== null) out[r] = s;
    })
  );
  return out;
}
