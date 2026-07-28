import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { grantAccess } from "../hooks/useAccess";

export const Route = createFileRoute("/unlock")({
  component: UnlockPage,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      session_id: typeof search.session_id === "string" ? search.session_id : undefined,
    };
  },
});

function UnlockPage() {
  const navigate = useNavigate();
  const { session_id } = useSearch({ from: "/unlock" });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (session_id) {
      // Payment confirmed — grant access
      grantAccess();
      const timeout = setTimeout(() => {
        navigate({ to: "/module-1" });
      }, 2000);
      return () => clearTimeout(timeout);
    } else {
      // No payment — show error, redirect home
      setError(true);
      const timeout = setTimeout(() => {
        navigate({ to: "/" });
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [session_id, navigate]);

  if (error) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gradient-to-b from-slate-50 to-red-50/30 px-6">
        <div className="max-w-md w-full rounded-2xl border border-red-200 bg-white p-8 shadow-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
            <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-3">Access Denied</h1>
          <p className="text-slate-500 leading-relaxed">
            No purchase detected. Please complete payment to unlock the study guide.
          </p>
          <p className="mt-4 text-sm text-slate-400">Redirecting you back...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50/30 px-6">
      <div className="max-w-md w-full rounded-2xl border border-green-200 bg-white p-8 shadow-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
          <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-3">Purchase Confirmed!</h1>
        <p className="text-slate-500 leading-relaxed mb-6">
          Your access has been unlocked. Redirecting you to the study guide...
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Taking you to Module 1...</span>
        </div>
      </div>
    </div>
  );
}
