# capacityAr — Frontend

Plataforma IA de brecha de habilidades. MVP con React 19 + TypeScript + Tailwind CSS.

Frontend del proyecto capacityAr. El backend está en [etrigan16/capacitaya](https://github.com/etrigan16/capacitaya).

**Stack:** React 19 + Vite + TypeScript + Tailwind CSS

**Rol en el proyecto:** Scrum Master (equipo de 13 personas, nota 10).

**Características:**
- UI con componentes modulares y React Query para data fetching
- Integración con API REST tipada (clientes generados en TypeScript)
- Despliegue estático en Vercel (SPA con rewrite a `index.html`)
- Hot-reload en desarrollo (`npm run dev`)

## Desarrollo

```bash
npm install
npm run dev        # dev server (proxy /api -> API_TARGET, default http://localhost:8000)
npm run build      # genera dist/
npm run typecheck
```

El monorepo pnpm anterior quedó archivado en [`_archive/`](./_archive).

---
