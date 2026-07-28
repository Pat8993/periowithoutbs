import { useState, useEffect } from "react";

const ACCESS_KEY = "nbdhe_access";
const ACCESS_VALUE = "granted";

/**
 * Check if the user has purchased access.
 * Returns false during SSR to avoid hydration mismatches.
 */
export function hasAccess(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ACCESS_KEY) === ACCESS_VALUE;
}

/**
 * Grant access (set localStorage).
 * Safe to call multiple times.
 */
export function grantAccess(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACCESS_KEY, ACCESS_VALUE);
}

/**
 * React hook that returns the current access state.
 * Handles SSR gracefully — starts false, hydrates on client.
 */
export function useAccess(): boolean {
  const [access, setAccess] = useState(false);

  useEffect(() => {
    setAccess(hasAccess());
  }, []);

  return access;
}
