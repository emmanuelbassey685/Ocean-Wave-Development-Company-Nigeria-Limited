import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const rootDir = fileURLToPath(
  new URL(".", import.meta.url)
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(
          rootDir,
          "index.html"
        ),

        about: resolve(
          rootDir,
          "pages/about.html"
        ),

        services: resolve(
          rootDir,
          "pages/services.html"
        ),

        marineOffshore: resolve(
          rootDir,
          "pages/marine-offshore.html"
        ),

        vesselCharter: resolve(
          rootDir,
          "pages/vessel-charter.html"
        ),

        marineTechnical: resolve(
          rootDir,
          "pages/marine-technical.html"
        ),

        vesselInspection: resolve(
          rootDir,
          "pages/vessel-inspection.html"
        ),

        crewing: resolve(
          rootDir,
          "pages/crewing.html"
        ),

        marineSupplies: resolve(
          rootDir,
          "pages/marine-supplies.html"
        ),

        chandelling: resolve(
          rootDir,
          "pages/chandelling.html"
        ),

        oilGas: resolve(
          rootDir,
          "pages/oil-gas.html"
        ),

        projectManagement: resolve(
          rootDir,
          "pages/project-management.html"
        ),

        procurementLogistics: resolve(
          rootDir,
          "pages/procurement-logistics.html"
        ),

        facilityMaintenance: resolve(
          rootDir,
          "pages/facility-maintenance.html"
        ),

        engineeringConsultancy: resolve(
          rootDir,
          "pages/engineering-consultancy.html"
        ),

        projects: resolve(
          rootDir,
          "pages/projects.html"
        ),

        contact: resolve(
          rootDir,
          "pages/contact.html"
        ),         
      }
    }
  }
});