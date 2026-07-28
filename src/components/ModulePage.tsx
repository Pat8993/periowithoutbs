import { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import SectionRenderer from "../components/SectionRenderer";
import { ToothDivider, FooterTeeth } from "../components/ToothIcon";
import useProgress from "../hooks/useProgress";
import type { ModuleData, SectionData } from "../data/types";

interface ModulePageProps {
  module: ModuleData;
  currentSectionId: string | null;
  onNavigate: (moduleId: string, sectionId?: string) => void;
}

function SectionCheckbox({
  sectionId,
  sectionTitle,
}: {
  sectionId: string;
  sectionTitle: string;
}) {
  const { isSectionComplete, toggleSection } = useProgress();
  const complete = isSectionComplete(sectionId);

  return (
    <button
      onClick={() => toggleSection(sectionId)}
      className={`group flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all duration-200 print:hidden ${
        complete
          ? "border-emerald-200 bg-gradient-to-r from-emerald-50 to-white shadow-sm"
          : "border-blue-100 bg-white hover:border-blue-300 hover:bg-blue-50/50"
      }`}
      aria-label={`${complete ? "Mark as incomplete" : "Mark as complete"}: ${sectionTitle}`}
    >
      {/* Checkbox circle */}
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
          complete
            ? "border-emerald-500 bg-emerald-500 scale-100"
            : "border-blue-300 bg-white group-hover:border-blue-400"
        }`}
      >
        {complete ? (
          <svg
            className="h-4 w-4 text-white transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg
            className="h-3 w-3 text-transparent group-hover:text-blue-400 transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>

      <div className="flex-1">
        <span
          className={`text-sm font-semibold transition-colors duration-200 ${
            complete ? "text-emerald-700" : "text-slate-700"
          }`}
        >
          {complete ? "✓ Marked as complete" : "Mark as complete"}
        </span>
        {!complete && (
          <span className="ml-2 text-xs text-slate-400">Click to check off</span>
        )}
      </div>
    </button>
  );
}

export default function ModulePage({
  module,
  currentSectionId,
  onNavigate,
}: ModulePageProps) {
  const { markAllComplete, resetAll, completionCount, isSectionComplete } =
    useProgress();
  const sectionIds = module.sections.map((s) => s.id);
  const totalSections = sectionIds.length;
  const completedCount = completionCount(sectionIds);
  const allComplete = completedCount === totalSections;

  // Scroll to section if specified
  useLayoutEffect(() => {
    if (currentSectionId) {
      const el = document.getElementById(currentSectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [currentSectionId]);

  // Mark All Complete animation state
  const [justToggledAll, setJustToggledAll] = useState(false);

  // Set document title
  useEffect(() => {
    document.title = `${module.subtitle} — PerioSight NBDHE Study Guide`;
    return () => {
      document.title = "PerioSight NBDHE Study Guide";
    };
  }, [module.subtitle]);

  const handleMarkAll = () => {
    setJustToggledAll(true);
    markAllComplete(sectionIds);
    setTimeout(() => setJustToggledAll(false), 600);
  };

  const handleResetAll = () => {
    setJustToggledAll(true);
    resetAll(sectionIds);
    setTimeout(() => setJustToggledAll(false), 600);
  };

  return (
    <Layout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: module.title },
      ]}
      currentModuleId={module.id}
      currentSectionId={currentSectionId}
      onNavigate={onNavigate}
      moduleColor={module.color}
    >
      {/* Module header */}
      <div className="mb-8 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-md">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-200">
          {module.title}
        </span>
        <h1 className="mt-3 text-3xl font-bold text-slate-800">{module.subtitle}</h1>
        <p className="mt-2 text-slate-600">{module.description}</p>
        <div className="mt-3 flex items-center gap-4">
          <p className="text-xs text-slate-400">
            {module.sections.length} sections · NBDHE Board Review Content
          </p>
          {/* Progress bar */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300"
                style={{
                  width: totalSections > 0 ? `${(completedCount / totalSections) * 100}%` : "0%",
                }}
              />
            </div>
            <span className="text-xs font-medium text-slate-500">
              {completedCount}/{totalSections}
            </span>
          </div>
        </div>
      </div>

      {/* Section navigation (quick jump) */}
      <div className="mb-8 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50/80 to-white p-4 shadow-sm print:hidden">
        <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-600">
          Jump to Section
        </h3>
        <div className="flex flex-wrap gap-2">
          {module.sections.map((section) => {
            const complete = isSectionComplete(section.id);
            return (
              <button
                key={section.id}
                onClick={() => onNavigate(module.id, section.id)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 ${
                  complete
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    : "border-blue-200 bg-white text-slate-600 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                {complete ? "✓ " : ""}
                {section.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* All sections */}
      <div className="space-y-12">
        {module.sections.map((section, idx) => (
          <div key={section.id}>
            {idx > 0 && <ToothDivider className="mb-12 print:hidden" />}
            <div className="mb-4">
              <SectionCheckbox
                sectionId={section.id}
                sectionTitle={section.title}
              />
            </div>
            <SectionRenderer section={section} />
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="mt-16 print:hidden">
        <FooterTeeth className="text-blue-300/50" />
      </div>

      {/* Bottom navigation with Mark All / Reset All */}
      <div className="mt-12 border-t border-slate-200 pt-6 text-center print:hidden">
        {/* Bulk actions */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <button
            onClick={handleMarkAll}
            className="inline-flex items-center gap-2 rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-50 hover:border-blue-400 transition-all duration-200"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Mark All Complete ({totalSections})
          </button>
          <button
            onClick={handleResetAll}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-200"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reset All
          </button>
        </div>

        <p className="text-sm text-slate-500">
          {allComplete ? (
            <span className="text-emerald-600 font-medium">
              🎉 All sections complete — great work!
            </span>
          ) : (
            <>
              End of {module.subtitle}. Select another module from the sidebar or{" "}
            </>
          )}
          <button
            onClick={() => onNavigate("home")}
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            return to the Table of Contents
          </button>
          .
        </p>
      </div>
    </Layout>
  );
}
