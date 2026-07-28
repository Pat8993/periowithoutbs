import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { modules, stateSupplement } from "../data/modules";
import { ToothMicroscopeIcon, ToothInstrumentsIcon, ToothGlobeIcon, ToothLawIcon } from "../components/ToothIcon";
import { hasAccess } from "../hooks/useAccess";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    locked: typeof search.locked === "string" ? search.locked : undefined,
  }),
  component: HomePage,
});

const colorMap: Record<string, string> = {
  blue: "from-blue-500 to-blue-700",
  green: "from-emerald-500 to-emerald-700",
  purple: "from-violet-500 to-violet-700",
  amber: "from-sky-500 to-sky-700",
};

const moduleIcons: Record<string, React.ReactNode> = {
  "module-1": <ToothMicroscopeIcon />,
  "module-2": <ToothInstrumentsIcon />,
  "module-3": <ToothGlobeIcon />,
  "state-jurisprudence": <ToothLawIcon />,
};

const borderMap: Record<string, string> = {
  blue: "border-blue-200 hover:border-blue-400",
  green: "border-emerald-200 hover:border-emerald-400",
  purple: "border-violet-200 hover:border-violet-400",
  amber: "border-sky-200 hover:border-sky-400",
};

const bgLight: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
  purple: "bg-violet-50 text-violet-700",
  amber: "bg-sky-50 text-sky-700",
};

const hoverColorMap: Record<string, string> = {
  blue: "group-hover:text-blue-600",
  green: "group-hover:text-emerald-600",
  purple: "group-hover:text-violet-600",
  amber: "group-hover:text-sky-600",
};

const shadowColorMap: Record<string, string> = {
  blue: "hover:shadow-blue-200/60",
  green: "hover:shadow-emerald-200/60",
  purple: "hover:shadow-violet-200/60",
  amber: "hover:shadow-sky-200/60",
};

function HomePage() {
  const navigate = useNavigate();
  const { locked } = Route.useSearch();
  const [access, setAccess] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setAccess(hasAccess());
    setChecked(true);
  }, []);

  const showLockedBanner = locked === "true" && checked && !access;

  const allModules = [
    ...modules.map((m) => ({ ...m, isSupplement: false })),
    { ...stateSupplement, isSupplement: true },
  ];

  // What's inside data
  const whatsInsideItems = [
    "Comprehensive anatomy & physiology review",
    "Head, neck & oral cavity anatomy with detailed diagrams",
    "Biochemistry, nutrition & pharmacology for dental hygiene",
    "Microbiology, immunology & infection control protocols",
    "Oral pathology recognition & risk assessment",
    "Clinical dental hygiene procedures & instrumentation",
    "Radiography principles & interpretation",
    "Community health & research principles",
    "Professional ethics, jurisprudence & legal frameworks",
    "QR-code linked demonstration videos for every section",
    "Quick Facts summaries for rapid review",
    "Print-optimized layouts for offline study",
  ];

  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-50 to-blue-50/30">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-2xl" />
        </div>
        {/* Cartoon Tooth Mascot */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block" style={{ width: "425px", height: "500px" }}>
          <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center p-4">
            <img
              src="/images/cartoon-tooth.png"
              alt="Friendly cartoon tooth mascot"
              className="w-3/4 h-3/4 object-contain rounded-full drop-shadow-lg"
            />
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-16 lg:py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-sky-500 text-white font-bold text-lg shadow-lg shadow-blue-500/30">
              PS
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                PerioSight{" "}
                <span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">
                  NBDHE Study Guide
                </span>
              </h1>
              <p className="mt-1 text-lg text-blue-200/80">
                Dental Hygiene Board Exam Review
              </p>
            </div>
          </div>
          <p className="max-w-2xl text-blue-100/80 leading-relaxed">
            A comprehensive review guide for the National Board Dental Hygiene Examination (NBDHE).
            Covering scientific foundations, clinical procedures, community health, and state jurisprudence
            — with quick facts, demonstration QR codes, and printable study modules.
          </p>
        </div>
      </div>

      {/* Free Sample */}
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-6 sm:p-10 shadow-lg">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-teal-200/30 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block pointer-events-none opacity-10">
            <svg className="h-32 w-32 text-emerald-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 border border-emerald-200 mb-4">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Free Sample
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                Try Before You Buy
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-lg mb-4">
                Download a free sample of the <strong>Periodontal Assessment</strong> section — 
                complete with probing protocols, CAL calculations, furcation classification, 
                image atlas, and QR video link. No payment required.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Probing Protocol", "CAL Calculations", "Furcation Classes", "Image Atlas", "QR Video"].map((tag) => (
                  <span key={tag} className="inline-block rounded-full bg-white/70 border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="/sample"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Free Sample
              </a>
              <p className="mt-3 text-xs text-slate-400">
                Opens as a printable page — no sign-up, no payment.
              </p>
            </div>
            <div className="hidden lg:block flex-shrink-0 w-48 h-64 rounded-xl bg-white border border-emerald-200 shadow-md overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white via-white to-emerald-50/60">
                <div className="text-center px-4">
                  <svg className="h-10 w-10 text-emerald-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-xs font-medium text-slate-600">Periodontal Assessment</p>
                  <p className="text-[10px] text-slate-400 mt-1">Printable PDF-style preview</p>
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1 w-full bg-emerald-100 rounded" />
                    <div className="h-1 w-3/4 bg-emerald-100 rounded" />
                    <div className="h-1 w-5/6 bg-emerald-100 rounded" />
                    <div className="h-1 w-2/3 bg-emerald-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Owner Message */}
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="relative rounded-2xl border border-blue-100 bg-white p-6 sm:p-8 shadow-md overflow-hidden">
          <div className="flex items-start gap-4 relative z-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2">
                A Message from the Owner
              </p>
              <p className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                This is Perio without BS.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Sure, you'll find many different study guides on the internet and different types of learning strategies, but what makes us different? This is an AI powered study guide! All information on the website is current and up-to-date. No long chapters to read. No countless hours of studying. All info is short and sweet and to the point.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed font-medium">
                You've already spent thousands of dollars in hygiene school. Why add hundreds more to your study guide? You have nothing to lose but a license to gain.
              </p>
              <p className="mt-3 text-sm font-semibold text-blue-600">
                — Patrick, RDH since 2021
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Locked Banner */}
      {showLockedBanner && (
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="mx-auto max-w-5xl px-6 py-3 flex items-center gap-2">
            <svg className="h-5 w-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m9.364-7.364A9 9 0 1112 3a9 9 0 017.364 4.636z" />
            </svg>
            <p className="text-sm text-amber-800">
              Purchase access to unlock the full study guide
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      {!access && (
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 text-center shadow-lg">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m9.364-7.364A9 9 0 1112 3a9 9 0 017.364 4.636z" />
              </svg>
              One-Time Purchase
            </div>
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl mb-2">
              Unlock Full Access
            </h2>
            <p className="text-slate-500 mb-6 max-w-lg mx-auto">
              Get lifetime access to all four modules, demonstration videos, quick facts,
              and printable study guides — everything you need to ace the NBDHE.
            </p>
            <div className="text-4xl font-extrabold text-slate-800 mb-6">
              $30{" "}
              <span className="text-lg font-normal text-slate-500">one-time</span>
            </div>
            <a
              href="https://buy.stripe.com/6oUeVd14ucFpbN87nt6AM01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4m12-5v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-2" />
              </svg>
              Unlock Full Access — $30
            </a>
            <p className="mt-3 text-xs text-slate-400">
              Secure payment via Stripe. Instant access after purchase.
            </p>
          </div>
        </div>
      )}

      {/* Table of Contents */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-800">Table of Contents</h2>
        <p className="mb-8 text-slate-500">
          {access ? "Select a module to begin studying" : "Preview the modules below — unlock for full access"}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {allModules.map((mod) => {
            const color = mod.isSupplement ? "amber" : mod.color;
            const targetPath = mod.isSupplement ? "/state-jurisprudence" : `/${mod.id}`;

            const cardContent = (
              <div
                className={`group relative overflow-hidden rounded-xl border-2 ${borderMap[color]} bg-white p-6 transition-all duration-300 ${access ? `hover:shadow-xl ${shadowColorMap[color]} hover:-translate-y-1 cursor-pointer` : "cursor-default"}`}
              >
                {/* Lock overlay for non-access users */}
                {!access && (
                  <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-[2px] flex items-center justify-center rounded-xl">
                    <div className="flex flex-col items-center gap-1">
                      <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Locked</span>
                    </div>
                  </div>
                )}

                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${colorMap[color]} text-white shadow-md`}
                >
                  {mod.id === "module-1" ? (
                    <img src="/images/law-icon.jpg" alt="" className="h-full w-full object-contain rounded mix-blend-multiply scale-125" />
                  ) : mod.id === "module-2" ? (
                    <img src="/images/clinical-icon.png" alt="" className="h-full w-full object-contain rounded p-0.5 mix-blend-multiply" />
                  ) : mod.id === "module-3" ? (
                    <img src="/images/community-icon.jpg" alt="" className="h-full w-full object-contain rounded p-0.5 mix-blend-multiply" />
                  ) : mod.id === "state-jurisprudence" ? (
                    <img src="/images/scales-icon.jpg" alt="" className="h-full w-full object-contain rounded p-0.5 mix-blend-multiply" />
                  ) : (
                    moduleIcons[mod.id] ?? (
                      <span className="font-bold text-sm">{mod.id.split("-")[1]}</span>
                    )
                  )}
                </div>
                <h3 className={`mt-4 text-lg font-bold text-slate-800 transition-colors duration-200 ${access ? hoverColorMap[color] : ""}`}>
                  {mod.subtitle}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {mod.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {mod.sections.map((s) => (
                    <span
                      key={s.id}
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${bgLight[color]} border border-slate-200`}
                    >
                      {s.title}
                    </span>
                  ))}
                </div>
              </div>
            );

            return access ? (
              <Link key={mod.id} to={targetPath as any} className="contents">
                {cardContent}
              </Link>
            ) : (
              <div key={mod.id}>{cardContent}</div>
            );
          })}
        </div>

        {/* What's Inside */}
        {!access && (
          <div className="mt-16 rounded-xl border border-blue-100 bg-white p-8 shadow-md">
            <h2 className="text-xl font-bold text-slate-800 mb-6">What's Inside</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {whatsInsideItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How to Use — show for everyone */}
        <div className="mt-16 rounded-xl border border-blue-100 bg-white p-8 shadow-md">
          <h2 className="text-xl font-bold text-slate-800">How to Use This Guide</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm shadow-sm">1</div>
              <h3 className="mt-2 font-semibold text-slate-800">Study by Module</h3>
              <p className="mt-1 text-sm text-slate-500">Navigate through each module using the sidebar. Sections follow the NBDHE exam blueprint.</p>
            </div>
            <div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shadow-sm">2</div>
              <h3 className="mt-2 font-semibold text-slate-800">Scan QR Codes</h3>
              <p className="mt-1 text-sm text-slate-500">Each section includes a QR code linking to a demonstration video — scan to watch on your phone.</p>
            </div>
            <div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold text-sm shadow-sm">3</div>
              <h3 className="mt-2 font-semibold text-slate-800">Print & Review</h3>
              <p className="mt-1 text-sm text-slate-500">Use the "Print this module" button for a print-optimized layout to study offline.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-4">
          <p className="text-xs text-slate-400 max-w-2xl text-center leading-relaxed">
            <strong className="text-slate-500">Disclaimer:</strong> All written content and video material in this study guide has been reviewed for accuracy. 
            AI-generated images are provided as supplemental visual aids only and may not be anatomically or clinically precise. 
            The primary study resources are the text and accompanying videos.
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} PerioSight AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
