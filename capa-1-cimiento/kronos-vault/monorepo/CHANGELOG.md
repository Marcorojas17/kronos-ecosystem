# Changelog — CRONOS

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).
Versionado según [SemVer 2.0.0](https://semver.org/lang/es/).

---

## [Unreleased]

### Planeado
- Implementar `src/interface/` como módulos ES independientes.
- Editor visual de líneas temporales en el sitio.

---

## [1.2.0] — 2026-09-15

### Añadido
- **Capa IV de tiempo** en `src/core/timelines/index.js`:
  - Clase `Event` con validación estricta (id, iso, label, tags, meta).
  - Clase `Timeline` con métodos `add`, `remove`, `get`, `sorted`, `byTag`, `range`.
  - Serialización `toJSON` / `fromJSON` para ambas clases.
- **17 tests nuevos** en `tests/unit/timeline.test.js`.
- **Sección `#tiempo`** en el sitio: visualizador de línea temporal con filtro por etiqueta.
- **Exportación** `Cronos.timeline.{Event, Timeline}` en la API.

### Cambiado
- `src/README.md` — refleja los 40 tests y la capa de tiempo.
- `tests/README.md` — actualizado a 40 tests.
- `src/api/index.js` — versión `1.2.0`, exporta timelines.
- Sitio: nueva sección `#tiempo` entre `#laboratorio` y `#glosario`.

---

## [1.1.0] — 2026-09-15

### Añadido
- Núcleo implementado: `entities/number.js`, `entities/date.js`, `rules/reduction.js`.
- Tres motores: `symbolic_engine/`, `pattern_engine/`, `quantum_simulator/`.
- API unificada en `src/api/index.js`.
- 27 tests en `tests/unit/`, `tests/integration/`, `tests/security/`.
- `package.json` con scripts npm.
- Corpus simbólico poblado en `data/symbolic/` (12 signos, 9 números, 4 líneas, 6 salmos).
- Sección `#laboratorio` en el sitio: interpretación en tiempo real usando el motor real.

### Cambiado
- `.github/workflows/tests.yml` ahora valida todos los módulos `src/` y ejecuta `npm test`.
- `README.md` promueve v1.1 con sección de API.

---

## [1.0.0] — 2026-09-15

### Añadido
- Sitio principal con 8 secciones: Hero, Visión, Arquitectura, Tercera capa, Repertorio, Módulos, Ética, Glosario, Legal.
- Tema visual oscuro con acentos dorado `#c9a44c` y violeta `#6a5acd`.
- Interacciones vanilla: resaltado por scroll, aparición progresiva, año dinámico.
- Página de error 404 tematizada.
- `favicon.svg`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`.
- Documentación completa: `README.md`, `LICENSE`, `CONTRIBUTING.md`, `CHANGELOG.md`, `SECURITY.md`.
- Carpetas `docs/`, `data/`, `src/`, `tests/`, `.github/` con READMEs.
- Workflows `tests.yml` y `security.yml`.
- Plantillas de Issues (`bug_report`, `feature_request`) y de Pull Request.
- Seguridad GitHub: Private vulnerability reporting, Dependabot alerts, CodeQL, Push protection.

---

## Tipos de cambios

| Etiqueta | Significado |
|----------|-------------|
| `Añadido` | Nuevas funcionalidades |
| `Cambiado` | Modificaciones en comportamiento existente |
| `Eliminado` | Funciones retiradas |
| `Corregido` | Bugfixes |
| `Seguridad` | Correcciones de vulnerabilidades |