import { useState, useEffect, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";
import { videoUrls } from "../data/videos";
import type { SectionData, ContentBlock, TableData, ImageAtlasItem } from "../data/types";
import ToothIcon, { ToothDivider, ToothNumberDiagram } from "./ToothIcon";
import type { ToothType } from "./ToothIcon";

// Map section IDs to appropriate tooth types for heading icons
const sectionToothType: Record<string, ToothType> = {
  "anatomy-physiology": "molar",
  "biochem-nutrition": "premolar",
  "microbiology-immunology": "molar",
  "pathology": "incisor",
  "pharmacology": "premolar",
  "patient-assessment": "incisor",
  "periodontal-assessment": "molar",
  "dental-charting": "incisor",
  "treatment-planning": "premolar",
  "instrumentation": "molar",
  "periodontal-debridement": "premolar",
  "preventive-agents": "incisor",
  "pain-management": "molar",
  "evaluation-maintenance": "small-molar",
  "epidemiology-biostatistics": "incisor",
  "community-health": "premolar",
  "health-promotion": "molar",
  "research-principles": "incisor",
  "state-overview": "premolar",
};

function QRCode({ videoKey, topic }: { videoKey?: string; topic: string }) {
  if (!videoKey) return null;
  const url = videoUrls[videoKey];
  if (!url) return null;

  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border border-blue-200 bg-white p-3 shadow-sm print:border-gray-300">
      <QRCodeSVG value={url} size={96} level="M" />
      <span className="text-center text-xs text-slate-500 max-w-[120px] leading-tight">
        Scan to watch: {topic} demonstration
      </span>
    </div>
  );
}

function QuickFacts({ facts }: { facts: string[] }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50/30 p-4 shadow-sm print:border-gray-400 print:bg-white">
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-cyan-700 print:text-black">
        Quick Facts — High-Yield Exam Content
      </h3>
      <ul className="space-y-1.5">
        {facts.map((fact, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-cyan-800 print:text-black">
            <span className="mt-0.5 shrink-0 text-cyan-500">✦</span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableBlock({ table }: { table: TableData }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-blue-100 shadow-sm">
      {table.caption && (
        <p className="bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 border-b border-blue-100 print:text-black print:bg-white">
          {table.caption}
        </p>
      )}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-700 to-blue-600 text-white print:bg-white print:text-black">
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="px-3 py-2.5 text-left font-semibold text-white print:text-black"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="border-b border-blue-50 even:bg-blue-50/40 print:even:bg-white">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 text-slate-600 print:text-black">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CalloutBox({ text, calloutType }: { text?: string; calloutType?: string }) {
  if (!text) return null;
  const colors: Record<string, string> = {
    info: "border-blue-400 bg-blue-50 text-blue-800 print:border-gray-400 print:text-black",
    warning: "border-amber-400 bg-amber-50 text-amber-800 print:border-gray-400 print:text-black",
    tip: "border-emerald-400 bg-emerald-50 text-emerald-800 print:border-gray-400 print:text-black",
    exam: "border-violet-400 bg-violet-50 text-violet-800 print:border-gray-400 print:text-black",
  };
  const labels: Record<string, string> = {
    info: "Note",
    warning: "Important",
    tip: "Clinical Tip",
    exam: "Exam Alert",
  };
  const colorClass = colors[calloutType ?? "info"] ?? colors.info;
  const label = labels[calloutType ?? "info"] ?? "Note";

  return (
    <div className={`my-4 rounded-lg border-l-4 p-4 shadow-sm ${colorClass}`}>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide">{label}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}

function ImageAtlasBlock({ images }: { images: ImageAtlasItem[] }) {
  return (
    <div className="image-atlas-grid my-6">
      {images.map((img, i) => (
        <div key={i} className="image-atlas-card rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-center">
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <p className="font-bold text-slate-800 text-sm leading-tight">{img.name}</p>
            <p className="text-xs text-slate-500 italic mt-1">{img.disclaimer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function renderContent(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "heading":
      return block.level === 3 ? (
        <h3 key={idx} className="mt-6 mb-2 text-lg font-semibold text-blue-800 print:text-black">
          {block.text}
        </h3>
      ) : (
        <h2 key={idx} className="mt-8 mb-3 text-xl font-bold text-slate-800 print:text-black">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={idx} className="mb-4 leading-relaxed text-slate-600 print:text-black">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={idx} className="mb-4 ml-6 list-disc space-y-1 text-slate-600 print:text-black">
          {block.items?.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return <CalloutBox key={idx} text={block.text} calloutType={block.calloutType} />;
    case "table":
      return block.table ? <TableBlock key={idx} table={block.table} /> : null;
    case "image-atlas":
      return block.images ? <ImageAtlasBlock key={idx} images={block.images} /> : null;
    default:
      return null;
  }
}

export default function SectionRenderer({ section }: { section: SectionData }) {
  const toothType = sectionToothType[section.id] ?? "generic";
  return (
    <section id={section.id} className="scroll-mt-20">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <ToothIcon type={toothType} size={28} className="text-blue-600" />
          {section.title}
        </h2>
        <QRCode videoKey={section.videoUrl} topic={section.title} />
      </div>
      {section.quickFacts && section.quickFacts.length > 0 && (
        <QuickFacts facts={section.quickFacts} />
      )}
      <div className="prose-custom">
        {section.content.map((block, idx) => renderContent(block, idx))}
      </div>
      {/* Tooth Number Diagram for dental charting section */}
      {section.id === "dental-charting" && (
        <ToothNumberDiagram />
      )}
    </section>
  );
}
