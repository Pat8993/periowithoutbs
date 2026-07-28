import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { modules, stateSupplement } from "../data/modules";
import type { ModuleData } from "../data/types";
import ModulePage from "../components/ModulePage";
import AccessGate from "../components/AccessGate";

function useModuleRoute(module: ModuleData) {
  const navigate = useNavigate();
  const [sectionId, setSectionId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) setSectionId(hash);
  }, []);

  const handleNavigate = (targetModuleId: string, section?: string) => {
    if (targetModuleId === "home") {
      navigate({ to: "/" });
    } else if (targetModuleId === module.id && section) {
      setSectionId(section);
      window.location.hash = section;
    } else if (targetModuleId === module.id) {
      setSectionId(null);
      window.location.hash = "";
    } else {
      const path = `/${targetModuleId}`;
      const url = section ? `${path}#${section}` : path;
      window.location.href = url;
    }
  };

  return { sectionId, handleNavigate };
}

// Module 1
export const Route = createFileRoute("/module-1")({
  component: () => {
    const { sectionId, handleNavigate } = useModuleRoute(modules[0]);
    return (
      <AccessGate>
        <ModulePage module={modules[0]} currentSectionId={sectionId} onNavigate={handleNavigate} />
      </AccessGate>
    );
  },
});
