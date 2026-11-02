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

## Deploy (Vercel)

La app se publica en Vercel como SPA estática, desacoplada del backend (Render).
La config vive en [`vercel.json`](./vercel.json): framework Vite, build `npm run build`,
output `dist/` y rewrite SPA (las rutas profundas no dan 404 al recargar).

Importar el repo en Vercel (preset Vite — ya tomado de `vercel.json`) y setear
la env var del proyecto:

```
VITE_API_URL=https://capacity-ar-ap.onrender.com
```

> `VITE_API_URL` se inyecta en **build time** (Vite), así que debe estar en las
> env vars del proyecto en Vercel antes de desplegar; `.env.example` solo la documenta.

**Dependencia:** el backend debe habilitar CORS para el origen de Vercel
(issue S1.2); si no, el browser bloquea las llamadas a la API aunque el deploy
esté arriba.

---
