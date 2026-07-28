export interface TableData {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ImageAtlasItem {
  src: string;
  name: string;
  disclaimer: string;
}

export interface ContentBlock {
  type: "heading" | "paragraph" | "list" | "callout" | "table" | "image-atlas";
  text?: string;
  items?: string[];
  level?: 2 | 3;
  table?: TableData;
  calloutType?: "info" | "warning" | "tip" | "exam";
  images?: ImageAtlasItem[];
}

export interface SectionData {
  id: string;
  title: string;
  content: ContentBlock[];
  videoUrl?: string;
  quickFacts?: string[];
}

export interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  colorLight: string;
  colorDark: string;
  description: string;
  sections: SectionData[];
}

export interface VideoConfig {
  [key: string]: string;
}
