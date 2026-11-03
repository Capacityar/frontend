# Changelog

Todos los cambios relevantes del frontend se registran acá. El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y las versiones siguen la [política de versionado](docs/versioning.md).

## [0.5.0] — Línea base Sprint 1 (Gestión de configuración)

Primera línea base del proyecto. Congela el estado de `main` al cierre del Sprint 1. El tag `v0.5.0` se crea sobre `main` después de mergear este registro.

### Incluye

**Stack:** React 19 + Vite 7 + TypeScript + Tailwind CSS + TanStack Query.

**Pantallas** (`src/pages/`), en su mayoría con datos de ejemplo (mock):

- Alumno: `Login`, `Dashboard`, `MisHabilidades`, `PlanCapacitacion`, `Evaluacion`, `ProgresoyLogros`, `ModuloIA`.
- Tutor: `PanelTutor`, `CanalTutor`, `TutorCompanias`, `TutorGapAnalysis`, `DetalleCandidato`.
- Empresa / puestos: `ListadoPuestos`, `ListadoPuestosEvaluacion`, `NuevoPuesto`.
- Utilidades: `DemoApi` (prueba de conexión con la API), `not-found`.

**Infraestructura y configuración:**

- La app vive en la raíz de este repo, separada del backend, lista para deploy en Vercel (`vercel.json`) (PR #17, S0.6).
- La URL de la API se configura con la variable `VITE_API_URL` (ver `.env.example`).
- El código anterior (Replit) queda archivado en `_archive/`.

### No incluido (pendiente para próximas versiones)

- Deploy en Vercel (#16, en curso).
- Login real y rutas protegidas por rol (#1).
- Conexión de las pantallas a la API real: Dashboard, Plan, Evaluación, Progreso (#2 a #5) y pantallas de tutor (#6, #7).
- Mejoras de usabilidad y accesibilidad del Sprint 3 (#9 a #13).
