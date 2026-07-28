import type { FC } from "react";

export type ToothType = "molar" | "incisor" | "premolar" | "generic" | "small-molar";

interface ToothIconProps {
  type?: ToothType;
  className?: string;
  size?: number;
}

interface ToothVariantProps {
  className?: string;
}

// Molar: wide crown with multi-cusp top, two roots
function MolarSVG({ className }: ToothVariantProps) {
  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Molar tooth icon"
    >
      <path
        d="M4 18C4 18 6 8 10 6C14 4 16 4 20 4C24 4 26 4 30 6C34 8 36 18 36 18C36 18 36 22 34 24C32 26 30 28 30 28L28 36C28 38 26 44 20 44C14 44 12 38 12 36L10 28C10 28 8 26 6 24C4 22 4 18 4 18Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10C10 10 12 7 20 7C28 7 30 10 30 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M12 13C12 13 14 10.5 20 10.5C26 10.5 28 13 28 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

// Incisor: narrow crown, chisel-shaped, single root
function IncisorSVG({ className }: ToothVariantProps) {
  return (
    <svg
      viewBox="0 0 28 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Incisor tooth icon"
    >
      <path
        d="M6 18C6 18 8 6 10 3C12 1 14 1 14 1C14 1 16 1 18 3C20 6 22 18 22 18C22 18 21 24 20 27C19 30 18 34 18 34L16 43C16 44 15 46 14 46C13 46 12 44 12 43L10 34C10 34 9 30 8 27C7 24 6 18 6 18Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L18 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

// Premolar: intermediate crown, double-cusp, single root
function PremolarSVG({ className }: ToothVariantProps) {
  return (
    <svg
      viewBox="0 0 32 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Premolar tooth icon"
    >
      <path
        d="M5 18C5 18 6 8 10 5C14 2 16 2 16 2C16 2 18 2 22 5C26 8 27 18 27 18C27 18 27 24 25 27C23 30 20 34 20 34L18 43C18 44 17 46 16 46C15 46 14 44 14 43L12 34C12 34 9 30 7 27C5 24 5 18 5 18Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9L16 7L22 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

// Generic simplified tooth
function GenericToothSVG({ className }: ToothVariantProps) {
  return (
    <svg
      viewBox="0 0 32 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tooth icon"
    >
      <path
        d="M4.5 18C4.5 18 5.5 8 9.5 5C13.5 2 15 2 16 2C17 2 18.5 2 22.5 5C26.5 8 27.5 18 27.5 18C27.5 18 27.5 26 25 30C23 33 20 37 20 37L18 45C18 47 16 47 16 47C16 47 14 47 14 45L12 37C12 37 9 33 7 30C4.5 26 4.5 18 4.5 18Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="20" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// Small molar (simpler, for tight spots)
function SmallMolarSVG({ className }: ToothVariantProps) {
  return (
    <svg
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Small molar tooth icon"
    >
      <path
        d="M2.5 13C2.5 13 4 6 7 4C10 2 12 2 14 2C16 2 18 2 21 4C24 6 25.5 13 25.5 13C25.5 13 25.5 17 24 20C22.5 23 20 26 20 26L19 33C19 34 17.5 34 14 34C10.5 34 9 34 9 33L8 26C8 26 5.5 23 4 20C2.5 17 2.5 13 2.5 13Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7L14 5L21 7"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

const variantMap: Record<ToothType, FC<ToothVariantProps>> = {
  molar: MolarSVG,
  incisor: IncisorSVG,
  premolar: PremolarSVG,
  generic: GenericToothSVG,
  "small-molar": SmallMolarSVG,
};

export default function ToothIcon({
  type = "generic",
  className = "",
  size = 24,
}: ToothIconProps) {
  const SvgComponent = variantMap[type] ?? variantMap.generic;
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size * 1.2 }}
      aria-hidden="true"
    >
      <SvgComponent />
    </span>
  );
}

// Hero tooth illustration — large artistic molar silhouette
export function HeroTooth({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-tooth-grad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="hero-tooth-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#93c5fd" stopOpacity="0.8" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M100 4C100 4 108 8 116 16C128 28 140 44 148 58C156 72 164 88 168 98C172 108 178 122 180 136C182 150 184 164 184 172C184 180 182 188 178 196C174 204 168 208 162 210C156 212 148 212 144 210C140 208 138 206 136 208C134 210 132 216 128 220C124 224 118 228 110 230C102 232 98 232 100 232C102 232 98 232 90 230C82 228 76 224 72 220C68 216 66 210 64 208C62 206 60 208 56 210C52 212 44 212 38 210C32 208 26 204 22 196C18 188 16 180 16 172C16 164 18 150 20 136C22 122 28 108 32 98C36 88 44 72 52 58C60 44 72 28 84 16C92 8 100 4 100 4Z"
        fill="url(#hero-tooth-grad)"
        stroke="url(#hero-tooth-stroke)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner contour lines for artistic detail */}
      <path
        d="M100 20C100 20 110 28 118 38C128 50 138 64 144 76C150 88 156 102 158 112C160 122 162 134 162 144C162 154 160 162 156 170C152 178 146 182 142 184"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="0.75"
        strokeOpacity="0.35"
      />
      <path
        d="M100 20C100 20 90 28 82 38C72 50 62 64 56 76C50 88 44 102 42 112C40 122 38 134 38 144C38 154 40 162 44 170C48 178 54 182 58 184"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="0.75"
        strokeOpacity="0.35"
      />
      {/* Crown details */}
      <ellipse cx="100" cy="110" rx="60" ry="45" fill="none" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.2" />
      <ellipse cx="100" cy="130" rx="52" ry="38" fill="none" stroke="#93c5fd" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  );
}

// Hero decorative molar pattern (small repeated teeth)
export function HeroToothPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
          <path
            key={`${row}-${col}`}
            d={`M${12 + col * 50} ${8 + row * 40} C${12 + col * 50} ${2 + row * 40} ${18 + col * 50} ${-2 + row * 40} ${24 + col * 50} ${-2 + row * 40} C${30 + col * 50} ${-2 + row * 40} ${36 + col * 50} ${2 + row * 40} ${36 + col * 50} ${8 + row * 40} C${36 + col * 50} ${16 + row * 40} ${28 + col * 50} ${32 + row * 40} ${24 + col * 50} ${32 + row * 40} C${20 + col * 50} ${32 + row * 40} ${12 + col * 50} ${16 + row * 40} ${12 + col * 50} ${8 + row * 40}Z`}
            fill="#93c5fd"
            fillOpacity="0.06"
          />
        ))
      )}
    </svg>
  );
}

// Section divider: horizontal line with tooth in center
export function ToothDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-blue-300" />
      <svg
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-4 shrink-0 text-blue-400"
      >
        <path
          d="M2 9C2 9 3 4 5 2.5C7 1 9 1 10 1C11 1 13 1 15 2.5C17 4 18 9 18 9C18 9 17 14 15 17C13.5 19.5 12.5 21 12.5 21L11.5 23C11 24 10 24 10 24C10 24 9 24 8.5 23L7.5 21C7.5 21 6.5 19.5 5 17C3 14 2 9 2 9Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-200 to-blue-300" />
    </div>
  );
}

// Footer tooth row
export function FooterTeeth({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 600 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {Array.from({ length: 16 }, (_, i) => (
          <path
            key={i}
            d={`M${i * 37.5} 28 C${i * 37.5} 20 ${i * 37.5 + 18} 2 ${i * 37.5 + 18} 2 C${i * 37.5 + 18} 2 ${i * 37.5 + 36} 20 ${i * 37.5 + 36} 28`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.2"
          />
        ))}
      </svg>
    </div>
  );
}

// Module card icon with tooth + theme accent
function ModuleIconBase({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

// Tooth with microscope — Scientific Basis
export function ToothMicroscopeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-1.5">
      {/* Tooth */}
      <path
        d="M18 10C18 10 19 5 21 3C23 1 24 1 24 1C24 1 25 1 27 3C29 5 30 10 30 10C30 10 29 14 28 17C27 20 26 22 26 22L25 27C25 28 24 29 24 29C24 29 23 28 23 27L22 22C22 22 21 20 20 17C19 14 18 10 18 10Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Microscope outline behind tooth */}
      <path
        d="M12 42V38C12 34 14 28 14 28L14 16C14 14 16 12 18 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M30 12C32 12 34 14 34 16L34 28C34 28 36 34 36 38V42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <rect x="8" y="42" width="32" height="4" rx="1" fill="currentColor" opacity="0.4" />
      <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

// Tooth with instruments — Clinical
export function ToothInstrumentsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-1.5">
      {/* Tooth center */}
      <path
        d="M19 12C19 12 20 7 21.5 5.5C23 4 24 4 24 4C24 4 25 4 26.5 5.5C28 7 29 12 29 12C29 12 28 16 27 18.5C26 21 25 23 25 23L24.5 27C24 28 23.5 29 24 29C24.5 29 24 28 23.5 27L23 23C23 23 22 21 21 18.5C20 16 19 12 19 12Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Probe left */}
      <path
        d="M8 44L12 36C13 34 15 32 16 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="16" cy="26" r="1.5" fill="currentColor" opacity="0.5" />
      {/* Mirror right */}
      <path
        d="M40 44L36 32C36 30 34 26 32 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="31" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

// Tooth with globe — Community Health
export function ToothGlobeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-1.5">
      {/* Globe arcs */}
      <circle cx="20" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="20" cy="24" rx="5" ry="12" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M8 24H32" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M14 14C14 14 15 18 15 24C15 30 14 34 14 34" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path d="M26 14C26 14 25 18 25 24C25 30 26 34 26 34" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      {/* Tooth */}
      <path
        d="M30 18C30 18 31 14 32 12.5C33 11 34 11 34 11C34 11 35 11 36 12.5C37 14 38 18 38 18C38 18 37 21 36.5 23C36 25 35.5 27 35.5 27L35 31C35 32 34.5 32 34 32C33.5 32 33 32 33 31L32.5 27C32.5 27 32 25 31.5 23C31 21 30 18 30 18Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Tooth with scales/gavel — Jurisprudence
export function ToothLawIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-1.5">
      {/* Scales beam */}
      <path d="M12 12L36 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M18 20L18 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M30 20L30 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Scale pans */}
      <path d="M13 24L18 20L23 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M25 24L30 20L35 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      {/* Pillar */}
      <path d="M24 12L24 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Tooth at base */}
      <path
        d="M21 32C21 32 21.5 29 22.5 28C23.5 27 24 27 24 27C24 27 24.5 27 25.5 28C26.5 29 27 32 27 32C27 32 26.5 35 26 37C25.5 39 25 40 25 40L24.5 43C24 44 24 44 24 44C24 44 24 44 23.5 43L23 40C23 40 22.5 39 22 37C21.5 35 21 32 21 32Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Tooth Numbering System Diagram — Universal 1-32
export function ToothNumberDiagram({ className = "" }: { className?: string }) {
  // Tooth positions on the arch
  const maxillary = [
    { num: 1, x: 22, y: 14 }, { num: 2, x: 44, y: 19 }, { num: 3, x: 66, y: 24 },
    { num: 4, x: 88, y: 27 }, { num: 5, x: 110, y: 28 }, { num: 6, x: 132, y: 28 },
    { num: 7, x: 154, y: 28 }, { num: 8, x: 172, y: 28 },
    { num: 9, x: 195, y: 28 }, { num: 10, x: 213, y: 28 },
    { num: 11, x: 235, y: 28 }, { num: 12, x: 257, y: 28 },
    { num: 13, x: 279, y: 27 }, { num: 14, x: 301, y: 24 },
    { num: 15, x: 323, y: 19 }, { num: 16, x: 345, y: 14 },
  ];
  const mandibular = [
    { num: 17, x: 345, y: 58 }, { num: 18, x: 323, y: 53 }, { num: 19, x: 301, y: 48 },
    { num: 20, x: 279, y: 45 }, { num: 21, x: 257, y: 44 }, { num: 22, x: 235, y: 44 },
    { num: 23, x: 213, y: 44 }, { num: 24, x: 195, y: 44 },
    { num: 25, x: 172, y: 44 }, { num: 26, x: 154, y: 44 },
    { num: 27, x: 132, y: 44 }, { num: 28, x: 110, y: 44 },
    { num: 29, x: 88, y: 45 }, { num: 30, x: 66, y: 48 },
    { num: 31, x: 44, y: 53 }, { num: 32, x: 22, y: 58 },
  ];

  return (
    <div className={`my-6 ${className}`}>
      <svg
        viewBox="0 0 370 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-2xl"
        aria-label="Universal Tooth Numbering System diagram (1-32)"
        role="img"
      >
        {/* Maxillary arch */}
        <path
          d="M20 14 C60 6 120 2 183 2 C246 2 306 6 346 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-blue-500"
        />
        {/* Mandibular arch */}
        <path
          d="M20 58 C60 66 120 70 183 70 C246 70 306 66 346 58"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-blue-500"
        />
        {/* Midline */}
        <line x1="183" y1="-4" x2="183" y2="76" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-slate-300" />
        {/* Labels: Maxillary left/right */}
        <text x="20" y="8" className="fill-slate-400" fontSize="6" fontFamily="system-ui" textAnchor="start">Maxillary Right</text>
        <text x="346" y="8" className="fill-slate-400" fontSize="6" fontFamily="system-ui" textAnchor="end">Maxillary Left</text>
        {/* Labels: Mandibular */}
        <text x="20" y="68" className="fill-slate-400" fontSize="6" fontFamily="system-ui" textAnchor="start">Mandibular Right</text>
        <text x="346" y="68" className="fill-slate-400" fontSize="6" fontFamily="system-ui" textAnchor="end">Mandibular Left</text>
        {/* Tooth numbers */}
        {maxillary.map((t) => (
          <g key={t.num}>
            <circle cx={t.x} cy={t.y} r="5" fill="currentColor" className="text-blue-50" stroke="currentColor" strokeWidth="0.8" />
            <text x={t.x} y={t.y + 1.5} className="fill-blue-700" fontSize="5.5" fontFamily="system-ui" fontWeight="bold" textAnchor="middle">{t.num}</text>
          </g>
        ))}
        {mandibular.map((t) => (
          <g key={t.num}>
            <circle cx={t.x} cy={t.y} r="5" fill="currentColor" className="text-blue-50" stroke="currentColor" strokeWidth="0.8" />
            <text x={t.x} y={t.y + 1.5} className="fill-blue-700" fontSize="5.5" fontFamily="system-ui" fontWeight="bold" textAnchor="middle">{t.num}</text>
          </g>
        ))}
        {/* Wisdom tooth markers */}
        <g className="fill-amber-500">
          <text x="22" y="10" fontSize="6" fontFamily="system-ui">★</text>
          <text x="345" y="10" fontSize="6" fontFamily="system-ui">★</text>
          <text x="22" y="64" fontSize="6" fontFamily="system-ui">★</text>
          <text x="345" y="64" fontSize="6" fontFamily="system-ui">★</text>
        </g>
        {/* Legend */}
        <text x="183" y="88" className="fill-slate-500" fontSize="6" fontFamily="system-ui" textAnchor="middle">
          Universal/ADA Numbering System — Permanent Teeth 1–32
        </text>
        <text x="183" y="96" className="fill-slate-400" fontSize="5" fontFamily="system-ui" textAnchor="middle">
          ★ = Third molars (wisdom teeth) · Midline between 8–9 and 24–25
        </text>
      </svg>
    </div>
  );
}
