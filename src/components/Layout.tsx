import { useState, useEffect, useCallback, type ReactNode } from "react";
import Sidebar from "./Sidebar";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface LayoutProps {
  children: ReactNode;
  breadcrumbs: BreadcrumbItem[];
  currentModuleId: string | null;
  currentSectionId: string | null;
  onNavigate: (moduleId: string, sectionId?: string) => void;
  moduleColor?: string;
}

export default function Layout({
  children,
  breadcrumbs,
  currentModuleId,
  currentSectionId,
  onNavigate,
  moduleColor,
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setReadingProgress(Math.min((scrollTop / docHeight) * 100, 100));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-dvh bg-slate-50">
      {/* Print header */}
      <div className="hidden print:block print:mb-4 print:border-b print:border-gray-300 print:pb-2">
        <h1 className="text-xl font-bold">PerioSight NBDHE Study Guide</h1>
        <p className="text-sm text-gray-600">
          {breadcrumbs.map((b) => b.label).join(" → ")}
        </p>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 z-60 h-1 w-full bg-slate-200 print:hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-sky-500 transition-all duration-150 shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="flex">
        <Sidebar
          currentModuleId={currentModuleId}
          currentSectionId={currentSectionId}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNavigate={onNavigate}
        />

        {/* Mobile header */}
        <div className="fixed top-0 left-0 z-30 flex w-full items-center gap-3 border-b border-slate-200 bg-white/95 backdrop-blur-sm px-4 py-3 lg:hidden print:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-md p-1.5 text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Open sidebar"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm font-semibold text-slate-800 truncate">
            {breadcrumbs[breadcrumbs.length - 1]?.label ?? "Study Guide"}
          </span>
          <button
            onClick={handlePrint}
            className="ml-auto rounded-md p-1.5 text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Print module"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </button>
        </div>

        {/* Main content */}
        <main className="min-h-dvh flex-1 px-6 pt-16 pb-16 lg:pt-8 lg:pb-8 print:pt-0 print:pb-0">
          {/* Breadcrumbs (desktop) */}
          <nav className="mb-6 hidden items-center gap-1 text-sm text-slate-500 lg:flex print:flex print:text-black">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span className="text-slate-300">/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (i === 0) onNavigate("home");
                    }}
                    className="hover:text-blue-600 transition-colors print:text-black"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className={i === breadcrumbs.length - 1 ? "font-semibold text-slate-800 print:text-black" : ""}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>

          {/* Print button (desktop) */}
          <div className="mb-6 flex items-center justify-end print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print this module
            </button>
          </div>

          {children}

          {/* Disclaimer */}
          <div className="mt-12 border-t border-slate-200 pt-6 print:hidden">
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-500">Disclaimer:</strong> All written content and video material in this study guide has been reviewed for accuracy. 
              AI-generated images are provided as supplemental visual aids only and may not be anatomically or clinically precise. 
              The primary study resources are the text and accompanying videos.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
