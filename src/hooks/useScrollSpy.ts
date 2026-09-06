import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently occupying the middle of the viewport.
 * `ids` must be a stable array (declare it at module scope).
 */
export function useScrollSpy(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Highest section still in the band wins, so the nav never flickers
        // between two adjacent sections.
        setActiveId(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
