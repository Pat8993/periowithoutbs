import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { stateSupplement } from "../data/modules";
import type { ModuleData } from "../data/types";
import ModulePage from "../components/ModulePage";
import AccessGate from "../components/AccessGate";

const stateModule: ModuleData = {
  ...stateSupplement,
  sections: stateSupplement.sections,
};

export const Route = createFileRoute("/state-jurisprudence")({
  component: () => {
    const navigate = useNavigate();
    const [sectionId, setSectionId] = useState<string | null>(null);

    useEffect(() => {
      const hash = window.location.hash?.replace("#", "");
      if (hash) setSectionId(hash);
    }, []);

    const handleNavigate = (targetModuleId: string, section?: string) => {
      if (targetModuleId === "home") {
        navigate({ to: "/" });
      } else if (targetModuleId === "state-jurisprudence" && section) {
        setSectionId(section);
        window.location.hash = section;
      } else if (targetModuleId === "state-jurisprudence") {
        setSectionId(null);
        window.location.hash = "";
      } else {
        window.location.href = `/${targetModuleId}${section ? `#${section}` : ""}`;
      }
    };

    return (
      <AccessGate>
        <ModulePage module={stateModule} currentSectionId={sectionId} onNavigate={handleNavigate} />
      </AccessGate>
    );
  },
});
