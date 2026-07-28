import { createFileRoute } from "@tanstack/react-router";
import { modules } from "../data/modules";
import SectionRenderer from "../components/SectionRenderer";

export const Route = createFileRoute("/sample")({
  component: SamplePage,
});

function SamplePage() {
  // Periodontal Assessment = modules[1] (Module 2), sections[1]
  const section = modules[1].sections[1];

  return (
    <div className="min-h-dvh bg-white print:bg-white">
      {/* Top CTA band — hidden in print */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 shadow-md print:hidden">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <p className="text-sm font-semibold text-white/90">
            📄 NBDHE Board Exam Review — Free Sample
          </p>
          <a
            href="https://buy.stripe.com/6oUeVd14ucFpbN87nt6AM01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm hover:bg-emerald-50 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4m12-5v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-2" />
            </svg>
            Unlock Full Access — $30
          </a>
        </div>
      </div>

      {/* Print-only header */}
      <div className="hidden print:block border-b-2 border-emerald-700 pb-3 mb-6">
        <h1 className="text-2xl font-bold text-black">NBDHE Board Exam Review — Free Sample</h1>
        <p className="text-sm text-gray-600 mt-1">Periodontal Assessment Section</p>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-6 py-8 print:px-4 print:py-2">
        {/* Screen header */}
        <div className="mb-8 print:hidden">
          <div className="flex items-center gap-3 mb-4">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ← Back to PerioSight
            </a>
          </div>
          <div className="rounded-xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-5 shadow-sm">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200 mb-2">
                  Free Sample
                </span>
                <h1 className="text-2xl font-bold text-slate-800">
                  NBDHE Board Exam Review — Free Sample
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Periodontal Assessment — Full section preview including image atlas &amp; QR video link
                </p>
              </div>
              <a
                href="https://buy.stripe.com/6oUeVd14ucFpbN87nt6AM01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex-shrink-0"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4m12-5v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-2" />
                </svg>
                Unlock Full Access — $30
              </a>
            </div>
          </div>
        </div>

        {/* Print header decoration */}
        <div className="hidden print:block print:mb-4">
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <div>
              <p className="text-xs text-gray-500">PerioSight NBDHE Study Guide</p>
              <p className="text-xs text-gray-400">periowithoutbs.vercel.app</p>
            </div>
            <p className="text-xs text-gray-500 font-medium">Free Sample — Periodontal Assessment</p>
          </div>
        </div>

        {/* Section content */}
        <SectionRenderer section={section} />

        {/* Bottom CTA — screen only */}
        <div className="mt-12 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 text-center shadow-lg print:hidden">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m9.364-7.364A9 9 0 1112 3a9 9 0 017.364 4.636z" />
            </svg>
            One-Time Purchase
          </div>
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl mb-2">
            Unlock the Full Study Guide
          </h2>
          <p className="text-slate-500 mb-3 max-w-lg mx-auto">
            This was just one of 19 sections. Get all 3 modules plus the state jurisprudence supplement.
          </p>
          <div className="text-4xl font-extrabold text-slate-800 mb-4">
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

        {/* Print footer */}
        <div className="mt-8 border-t-2 border-gray-300 pt-4 hidden print:block">
          <p className="text-sm text-gray-700 font-medium">
            This is a free preview. Unlock all 19 sections, 3 modules, and the state jurisprudence supplement for $30.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Visit periowithoutbs.vercel.app to purchase full access.
          </p>
          <p className="text-xs text-gray-400 mt-3">
            © {new Date().getFullYear()} PerioSight AI. All rights reserved.
          </p>
        </div>

        {/* Screen footer */}
        <div className="mt-12 border-t border-slate-200 pt-6 text-center print:hidden">
          <p className="text-sm text-slate-500 mb-2">
            This is a free preview. Unlock all 19 sections, 3 modules, and the state jurisprudence supplement for $30.
          </p>
          <a
            href="/"
            className="text-sm text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            ← Back to PerioSight
          </a>
        </div>
      </main>
    </div>
  );
}
