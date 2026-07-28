import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { modules } from "../data/modules";
import ModulePage from "../components/ModulePage";
import AccessGate from "../components/AccessGate";

export const Route = createFileRoute("/module-2")({
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
      } else if (targetModuleId === "module-2" && section) {
        setSectionId(section);
        window.location.hash = section;
      } else if (targetModuleId === "module-2") {
        setSectionId(null);
        window.location.hash = "";
      } else {
        window.location.href = `/${targetModuleId}${section ? `#${section}` : ""}`;
      }
    };

    return (
      <AccessGate>
        <ModulePage module={modules[1]} currentSectionId={sectionId} onNavigate={handleNavigate} />
      </AccessGate>
    );
  },
});
