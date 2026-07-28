import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { hasAccess } from "../hooks/useAccess";

interface AccessGateProps {
  children: ReactNode;
}

/**
 * Wraps module content. If access is not granted, redirects to landing.
 * Shows a brief loading state while checking localStorage on mount.
 */
export default function AccessGate({ children }: AccessGateProps) {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (hasAccess()) {
      setChecking(false);
    } else {
      navigate({ to: "/", search: { locked: "true" } as any });
    }
  }, [navigate]);

  if (checking) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <svg
            className="h-6 w-6 animate-spin text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="text-sm text-slate-500">Checking access...</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
