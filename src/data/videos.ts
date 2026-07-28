import type { VideoConfig } from "./types";

// All demonstration video URLs in one place for easy editing.
// The owner replaces PLACEHOLDER_IDs with real YouTube video IDs.
const BASE = "https://www.youtube.com/watch?v=";

export const videoUrls: VideoConfig = {
  // Module 1
  "head-neck-anatomy": `${BASE}4n2H2eQOmc8`,
  "oral-cavity": `${BASE}PLACEHOLDER_ORAL_CAVITY`,
  "biochem-nutrition": `${BASE}wmzcFQeP6t8`,
  "microbiology": `${BASE}B35jRf4EKPA`,
  "oral-pathology": `${BASE}t1CCF3tRLmE`,
  "pharmacology": `${BASE}sigQ6IMCx5s`,

  // Module 2
  "patient-assessment": `${BASE}EeoEFus-EYI`,
  "periodontal-assessment": `${BASE}oUFVcO60ZEc`,
  "dental-charting": `${BASE}obAoSjZbid4`,
  "treatment-planning": `${BASE}Yeq6LO3q4Vo`,
  "instrumentation": `${BASE}YJl_PRPC-Ew`,
  "periodontal-debridement": `${BASE}cXWDg01Nyjk`,
  "preventive-agents": `${BASE}sThZiSb7cGI`,
  "pain-management": `${BASE}MTASyfXccTA`,
  "evaluation-maintenance": `${BASE}EJmRJGFEtvE`,

  // Module 3
  "epidemiology": `${BASE}RQhBK1w139s`,
  "community-health": `${BASE}X0MSbI-Kzc4`,
  "health-promotion": `${BASE}hCvAYm3M23Q`,
  "research-principles": `${BASE}hCvAYm3M23Q`,

  // State
  "state-jurisprudence": `${BASE}KBX5-uLu_aA`,
};
