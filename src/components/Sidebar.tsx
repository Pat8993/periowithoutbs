import { useEffect, useState, useCallback } from "react";
import { modules, stateSupplement } from "../data/modules";
import useProgress from "../hooks/useProgress";

interface SidebarProps {
  currentModuleId: string | null;
  currentSectionId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (moduleId: string, sectionId?: string) => void;
}

const moduleColors: Record<string, string> = {
  "module-1": "bg-blue-600",
  "module-2": "bg-emerald-600",
  "module-3": "bg-violet-600",
  "state-jurisprudence": "bg-sky-600",
};

const moduleColorsLight: Record<string, string> = {
  "module-1": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "module-2": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "module-3": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "state-jurisprudence": "bg-sky-500/20 text-sky-300 border-sky-500/30",
};

export default function Sidebar({
  currentModuleId,
  currentSectionId,
  isOpen,
  onClose,
  onNavigate,
}: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const { isSectionComplete, completionCount } = useProgress();

  useEffect(() => {
    if (currentModuleId) {
      setExpandedModules((prev) => new Set([...prev, currentModuleId]));
    }
  }, [currentModuleId]);

  const toggleModule = useCallback((id: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const allModules = [
    ...modules,
    {
      ...stateSupplement,
      sections: stateSupplement.sections,
    } as (typeof modules)[0],
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-dvh w-72 overflow-y-auto border-r border-slate-700/50 bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl transition-transform duration-300 lg:sticky lg:z-30 lg:block lg:translate-x-0 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-slate-700/60 px-5 py-4">
          <h1 className="text-lg font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">PerioSight</span>{" "}
            <span className="text-slate-300">Study Guide</span>
          </h1>
          <p className="mt-0.5 text-xs text-slate-400">NBDHE Board Exam Review</p>
        </div>

        <nav className="px-3 py-3">
          {/* Home */}
          <button
            onClick={() => {
              onNavigate("home");
              onClose();
            }}
            className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-all duration-200 ${
              !currentModuleId
                ? "bg-blue-600/30 text-blue-300 shadow-sm"
                : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
            }`}
          >
            ← Home / Table of Contents
          </button>

          <div className="my-3 border-t border-slate-700/50" />

          {allModules.map((mod) => {
            const isExpanded = expandedModules.has(mod.id);
            const isActive = currentModuleId === mod.id;
            const sectionIds = mod.sections.map((s) => s.id);
            const doneCount = completionCount(sectionIds);
            const totalCount = sectionIds.length;

            return (
              <div key={mod.id} className="mb-1">
                <button
                  onClick={() => {
                    if (isActive) {
                      toggleModule(mod.id);
                    } else {
                      onNavigate(mod.id);
                    }
                  }}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? `${moduleColors[mod.id] ?? "bg-blue-600"} text-white shadow-md`
                      : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : `${moduleColors[mod.id] ?? "bg-blue-600"} text-white`
                    }`}
                  >
                    {mod.id === "state-jurisprudence" ? "S" : mod.id.split("-")[1]}
                  </span>
                  <span className="flex-1 truncate">{mod.subtitle}</span>
                  {/* Module-level progress */}
                  {doneCount > 0 && (
                    <span
                      className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                        doneCount === totalCount
                          ? "bg-emerald-500/30 text-emerald-300"
                          : "bg-slate-600/50 text-slate-300"
                      }`}
                    >
                      {doneCount}/{totalCount}
                    </span>
                  )}
                  <svg
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isExpanded ? "rotate-90" : ""
                    } ${isActive ? "text-white/80" : "text-slate-500"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="ml-6 mt-0.5 border-l border-slate-600/50 pl-2">
                    {mod.sections.map((section) => {
                      const isSectionActive =
                        isActive && currentSectionId === section.id;
                      const complete = isSectionComplete(section.id);
                      return (
                        <button
                          key={section.id}
                          onClick={() => {
                            onNavigate(mod.id, section.id);
                            onClose();
                          }}
                          className={`block w-full rounded-md px-2 py-1.5 text-left text-xs transition-all duration-150 ${
                            isSectionActive
                              ? "font-semibold text-blue-300 bg-blue-600/20"
                              : "text-slate-400 hover:text-white hover:bg-slate-700/40"
                          }`}
                        >
                          <span className="flex items-center gap-1.5">
                            {/* Completion checkmark */}
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] transition-colors duration-200 ${
                                complete
                                  ? "bg-emerald-500/30 text-emerald-300"
                                  : "bg-slate-700/50 text-transparent"
                              }`}
                            >
                              ✓
                            </span>
                            <span className={complete ? "text-slate-300" : ""}>
                              {section.title}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
