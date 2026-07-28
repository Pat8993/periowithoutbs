import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useEffect } from "react";
import { modules } from "../data/modules";

// Extract disease images from the modules data
function getDiseaseImages(): { src: string; name: string; disclaimer: string }[] {
  for (const mod of modules) {
    for (const section of mod.sections) {
      for (const block of section.content) {
        if (block.type === "image-atlas" && "images" in block) {
          return (block as { images: { src: string; name: string; disclaimer: string }[] }).images;
        }
      }
    }
  }
  return [];
}

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [diseaseImages, setDiseaseImages] = useState(getDiseaseImages());
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedPath, setUploadedPath] = useState<string | null>(null);

  // New disease image form state
  const [newDiseaseFile, setNewDiseaseFile] = useState<File | null>(null);
  const [newDiseaseName, setNewDiseaseName] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Refresh disease images from modules data
  const refreshDiseaseImages = useCallback(() => {
    setDiseaseImages(getDiseaseImages());
  }, []);

  // Upload a file to the server
  const uploadFile = useCallback(
    async (file: File, customFilename?: string): Promise<{ path: string; filename: string } | null> => {
      setUploadStatus("Uploading...");
      setUploadError(null);
      setUploadedPath(null);

      try {
        const formData = new FormData();
        formData.append("file", file);
        if (customFilename) {
          formData.append("filename", customFilename);
        }

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = (await res.json()) as { path?: string; filename?: string; error?: string };
        if (!res.ok || data.error) {
          setUploadError(data.error || "Upload failed");
          setUploadStatus(null);
          return null;
        }

        setUploadStatus("Upload successful!");
        setUploadedPath(data.path || null);
        return { path: data.path!, filename: data.filename! };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Upload failed";
        setUploadError(message);
        setUploadStatus(null);
        return null;
      }
    },
    []
  );

  // Upload hero image
  const handleHeroUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      // Always save as cartoon-tooth.png so the reference in index.tsx stays valid
      await uploadFile(file, "cartoon-tooth.png");
      e.target.value = "";
    },
    [uploadFile]
  );

  // Upload disease image replacement
  const handleDiseaseReplace = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>, existingFilename: string) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const ext = existingFilename.split(".").pop() || "png";
      const baseName = existingFilename.replace(/\.[^.]+$/, "");
      const newName = `${baseName}.${ext}`;
      await uploadFile(file, newName);
      e.target.value = "";
    },
    [uploadFile]
  );

  // Remove a disease image
  const handleRemoveDisease = useCallback(
    async (src: string) => {
      const filename = src.split("/").pop();
      if (!filename) return;

      if (!confirm(`Remove "${src}" from the atlas? This also deletes the file and updates the source code.`)) {
        return;
      }

      setUploadStatus("Removing...");
      setUploadError(null);

      try {
        const res = await fetch("/api/images/remove", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename, updateModules: true }),
        });

        const data = (await res.json()) as { removed?: string; error?: string };
        if (!res.ok || data.error) {
          setUploadError(data.error || "Remove failed");
          setUploadStatus(null);
          return;
        }

        setUploadStatus(`Removed ${data.removed}`);
        refreshDiseaseImages();
      } catch (err) {
        setUploadError(err instanceof Error ? err.message : "Remove failed");
        setUploadStatus(null);
      }
    },
    [refreshDiseaseImages]
  );

  // Add a new disease image
  const handleAddDisease = useCallback(async () => {
    if (!newDiseaseFile || !newDiseaseName.trim()) {
      setUploadError("Please select a file and enter a condition name.");
      return;
    }

    const ext = newDiseaseFile.name.split(".").pop() || "png";
    const baseFilename = newDiseaseName.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const filename = `${baseFilename}.${ext}`;

    // First upload the file
    const result = await uploadFile(newDiseaseFile, filename);
    if (!result) return;

    // Then add to the atlas
    try {
      const res = await fetch("/api/images/add-to-atlas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename,
          name: newDiseaseName.trim(),
        }),
      });

      const data = (await res.json()) as { added?: unknown; error?: string };
      if (!res.ok || data.error) {
        setUploadError(data.error || "Failed to add to atlas");
        return;
      }

      setUploadStatus(`Added "${newDiseaseName.trim()}" to the atlas!`);
      setNewDiseaseFile(null);
      setNewDiseaseName("");
      setShowAddForm(false);
      refreshDiseaseImages();
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Failed to add to atlas");
    }
  }, [newDiseaseFile, newDiseaseName, uploadFile, refreshDiseaseImages]);

  // Auto-clear status after 5 seconds
  useEffect(() => {
    if (uploadStatus || uploadError) {
      const timer = setTimeout(() => {
        setUploadStatus(null);
        setUploadError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [uploadStatus, uploadError]);

  // Force hero image refresh by appending a cache-buster
  const heroCacheBuster = Date.now();

  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-sky-500 text-white font-bold shadow-lg">
              PS
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
              <p className="text-sm text-blue-200/80">
                Manage images without touching code
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Status toast */}
      {(uploadStatus || uploadError) && (
        <div
          className={`mx-auto max-w-5xl px-6 mt-4 ${
            uploadError
              ? "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
              : "rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700"
          }`}
        >
          {uploadError || uploadStatus}
          {uploadedPath && (
            <span className="ml-2 font-mono text-xs">
              Path: {uploadedPath}
            </span>
          )}
        </div>
      )}

      <div className="mx-auto max-w-5xl px-6 py-8 space-y-10">
        {/* Hero Image Section */}
        <section className="rounded-xl border border-blue-100 bg-white p-6 shadow-md">
          <h2 className="text-lg font-bold text-slate-800 mb-1">Hero Image</h2>
          <p className="text-sm text-slate-500 mb-4">
            The cartoon tooth mascot on the landing page. Upload a replacement to overwrite it.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Preview */}
            <div className="flex-shrink-0 w-48 h-48 rounded-lg border-2 border-dashed border-blue-200 bg-blue-50/50 flex items-center justify-center overflow-hidden">
              <img
                src={`/images/cartoon-tooth.png?t=${heroCacheBuster}`}
                alt="Hero tooth mascot"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Current File
                </span>
                <p className="font-mono text-sm text-slate-600 mt-1">
                  /images/cartoon-tooth.png
                </p>
              </div>

              <label className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors cursor-pointer">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload Replacement
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleHeroUpload}
                  className="hidden"
                />
              </label>

              <p className="text-xs text-slate-400">
                The uploaded file will be saved as <code>cartoon-tooth.png</code>, so the landing page reference stays intact.
              </p>
            </div>
          </div>
        </section>

        {/* Disease Image Atlas Section */}
        <section className="rounded-xl border border-blue-100 bg-white p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800">Oral Disease Image Atlas</h2>
              <p className="text-sm text-slate-500">
                {diseaseImages.length} images in the atlas. Upload replacements, remove entries, or add new conditions.
              </p>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center gap-2 rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors shadow-sm"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Disease Image
            </button>
          </div>

          {/* Add new disease image form */}
          {showAddForm && (
            <div className="mb-6 rounded-lg border border-dashed border-blue-300 bg-blue-50/50 p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Add New Disease Image</h3>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Condition Name
                  </label>
                  <input
                    type="text"
                    value={newDiseaseName}
                    onChange={(e) => setNewDiseaseName(e.target.value)}
                    placeholder="e.g., Erythroplakia"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Image File
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewDiseaseFile(e.target.files?.[0] || null)}
                    className="text-sm text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                <button
                  onClick={handleAddDisease}
                  disabled={!newDiseaseFile || !newDiseaseName.trim()}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                >
                  Add to Atlas
                </button>
              </div>
            </div>
          )}

          {/* Image grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diseaseImages.map((img) => {
              const filename = img.src.split("/").pop() || "";
              return (
                <div
                  key={img.src}
                  className="group rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Info & Actions */}
                  <div className="p-3 space-y-2">
                    <div>
                      <h3 className="font-semibold text-sm text-slate-800 truncate">
                        {img.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono truncate">
                        {filename}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Replace */}
                      <label className="flex-1 inline-flex items-center justify-center gap-1 rounded-md border border-slate-300 px-2 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Replace
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleDiseaseReplace(e, filename);
                            }
                          }}
                          className="hidden"
                        />
                      </label>

                      {/* Remove */}
                      <button
                        onClick={() => handleRemoveDisease(img.src)}
                        className="inline-flex items-center gap-1 rounded-md border border-red-200 px-2 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {diseaseImages.length === 0 && (
            <p className="text-center text-slate-400 py-8">
              No disease images in the atlas yet. Add one using the button above.
            </p>
          )}
        </section>

        {/* Quick Upload Section */}
        <section className="rounded-xl border border-blue-100 bg-white p-6 shadow-md">
          <h2 className="text-lg font-bold text-slate-800 mb-1">Quick Upload</h2>
          <p className="text-sm text-slate-500 mb-4">
            Upload any image to <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">/public/images/</code> without adding it to the atlas.
            You'll get back the path to reference in code.
          </p>

          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 transition-colors cursor-pointer">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Choose File & Upload
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) await uploadFile(file);
                  e.target.value = "";
                }}
                className="hidden"
              />
            </label>
            {uploadedPath && (
              <span className="text-sm text-green-600 font-mono">
                {uploadedPath}
              </span>
            )}
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <a
            href="/"
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Study Guide
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} PerioSight AI. Admin Panel
          </p>
        </div>
      </footer>
    </div>
  );
}
