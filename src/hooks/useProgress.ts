import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "nbdhe-completed-sections";

function loadFromStorage(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr: unknown = JSON.parse(raw);
    if (Array.isArray(arr)) {
      return new Set(arr.filter((v): v is string => typeof v === "string"));
    }
    return new Set();
  } catch {
    return new Set();
  }
}

function saveToStorage(ids: Set<string>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
  } catch {
    // storage full or unavailable — silently ignore
  }
}

export type ProgressReturn = {
  completedSections: Set<string>;
  toggleSection: (sectionId: string) => void;
  isSectionComplete: (sectionId: string) => boolean;
  markAllComplete: (sectionIds: string[]) => void;
  resetAll: (sectionIds: string[]) => void;
  completionCount: (sectionIds: string[]) => number;
};

export default function useProgress(): ProgressReturn {
  const [completedSections, setCompletedSections] = useState<Set<string>>(
    () => new Set()
  );

  // Hydrate from localStorage on mount (client-side only)
  useEffect(() => {
    setCompletedSections(loadFromStorage());
  }, []);

  // Persist on change
  useEffect(() => {
    saveToStorage(completedSections);
  }, [completedSections]);

  const toggleSection = useCallback((sectionId: string) => {
    setCompletedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  }, []);

  const isSectionComplete = useCallback(
    (sectionId: string) => completedSections.has(sectionId),
    [completedSections]
  );

  const markAllComplete = useCallback((sectionIds: string[]) => {
    setCompletedSections((prev) => {
      const next = new Set(prev);
      for (const id of sectionIds) {
        next.add(id);
      }
      return next;
    });
  }, []);

  const resetAll = useCallback((sectionIds: string[]) => {
    setCompletedSections((prev) => {
      const next = new Set(prev);
      for (const id of sectionIds) {
        next.delete(id);
      }
      return next;
    });
  }, []);

  const completionCount = useCallback(
    (sectionIds: string[]) =>
      sectionIds.filter((id) => completedSections.has(id)).length,
    [completedSections]
  );

  return {
    completedSections,
    toggleSection,
    isSectionComplete,
    markAllComplete,
    resetAll,
    completionCount,
  };
}
