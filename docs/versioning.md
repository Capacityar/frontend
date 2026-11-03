# Política de versionado — frontend

Esta política aplica la sección 9 de la guía de contribución de la organización ([`CONTRIBUTING.md`](https://github.com/Capacityar/.github/blob/main/CONTRIBUTING.md)) al frontend. Si las dos difieren, manda `CONTRIBUTING.md`.

## Formato

Las versiones siguen [SemVer 2.0.0](https://semver.org/lang/es/): `vMAJOR.MINOR.PATCH`.

| Número | Cuándo sube | Ejemplo en el frontend |
|--------|-------------|------------------------|
| **MAJOR** | Cambio incompatible: algo que funcionaba deja de funcionar para el usuario o para el deploy | Cambiar las rutas públicas (`/plan` → `/mi-plan`) sin redirección, exigir una variable de entorno nueva sin valor por defecto |
| **MINOR** | Funcionalidad nueva compatible | Una pantalla nueva, conectar una pantalla a la API real (Dashboard, Evaluación), el login real |
| **PATCH** | Corrección compatible | Arreglar un bug visual, mejorar accesibilidad o textos, actualizar documentación |

### Mientras estemos en `0.x.y`

El proyecto está en desarrollo y la interfaz puede cambiar sin aviso. Por eso, mientras `MAJOR` sea `0`:

- **Cada línea base de sprint sube MINOR** (`v0.5.0` → `v0.6.0`), siguiendo el plan de sprints.
- Un cambio incompatible **no** obliga a pasar a `v1.0.0`, pero se anota en el `CHANGELOG.md` como incompatible.
- `v1.0.0` se marca cuando haya una versión productiva con usuarios reales.

## Líneas base planificadas

Según el [plan de sprints v2](https://github.com/Capacityar/.github/blob/main/docs/plan-de-sprints-v2.md):

| Sprint | Línea base |
|--------|------------|
| Sprint 1 — Gestión de configuración | `v0.5.0` |
| Sprint 2 — Calidad del software | `v0.6.0` |
| Sprint 3 — Diseño centrado en el usuario | `v0.7.0` |
| Sprint 4 — Integración controlada | `v0.8.0` |
| Sprint 5 — Modelos de calidad y SQA | `v0.9.0` |
| Sprint 6 — Tiempo real e HMI | `v0.10.0` |

`v0.4.0-stable` (Sprint 0) quedó planificada pero no se creó: la numeración arranca en `v0.5.0`.

Los arreglos que se publiquen entre dos líneas base usan PATCH (`v0.5.1`, `v0.5.2`…).

### El tag `pre-vercel`

El repo ya tiene un tag `pre-vercel`, que marca el estado anterior a la consolidación para Vercel. Se conserva como referencia histórica, pero **no forma parte de la numeración SemVer**: las versiones arrancan en `v0.5.0`.

## Tags

- Se usan **tags anotados** (`git tag -a`), que guardan autor, fecha y mensaje.
- El tag se crea **sobre `main`, después del merge**. Nunca sobre una rama de trabajo.
- Lo crea el responsable de la tarea de línea base (E2), no cada autor de PR.
- **Un tag no se mueve ni se borra.** Si una versión salió mal, se publica otra con PATCH+1.
- Frontend y backend comparten el número de línea base de cada sprint (`v0.5.0` en los dos repos), aunque después cada uno puede publicar sus PATCH por separado.

### Cómo crear una línea base

```bash
git switch main
git pull
git tag -a v0.5.0 -m "Línea base Sprint 1 — Gestión de configuración"
git push origin v0.5.0
```

Antes de crearlo, verificar que `CHANGELOG.md` en `main` describe lo que incluye esa versión.

## Registro de cambios

Cada versión se documenta en [`CHANGELOG.md`](../CHANGELOG.md), en la raíz del repo: qué incluye, qué se agregó, qué se corrigió y qué queda pendiente.
