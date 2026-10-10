<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Arquitectura conceptual · v1.0                                -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓    █████╗ ██████╗  ██████╗██╗  ██╗██╗████████╗███████╗                  ▓ ║
║ ▓   ██╔══██╗██╔══██╗██╔════╝██║  ██║██║╚══██╔══╝██╔════╝                  ▓ ║
║ ▓   ███████║██████╔╝██║     ███████║██║   ██║   █████╗                    ▓ ║
║ ▓   ██╔══██║██╔══██╗██║     ██╔══██║██║   ██║   ██╔══╝                    ▓ ║
║ ▓   ██║  ██║██║  ██║╚██████╗██║  ██║██║   ██║   ███████╗                  ▓ ║
║ ▓   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝                  ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   C I N C O   C A P A S   C O N C E P T U A L E S   ·   v 1 . 0          ║
║ ▓   S Í M B O L O → D A T O → A N Á L I S I S → T I E M P O → U I          ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Docs](https://img.shields.io/badge/docs-architecture-00ff41?style=for-the-badge&labelColor=0a0d10)](#)
[![Capas](https://img.shields.io/badge/capas-5-c9a44c?style=for-the-badge&labelColor=0a0d10)](#las-cinco-capas)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../LICENSE)

</div>

---

## 🏛️ Las cinco capas

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         ┌─────────────────────────────────────────────────┐              ║
║         │  I   ·   CAPA SIMBÓLICA                         │              ║
║         │  Astrología · Numerología · Quiromancia         │              ║
║         │  Salmos · Textos herméticos                     │              ║
║         └─────────────────────────┬───────────────────────┘              ║
║                                   ▼                                      ║
║         ┌─────────────────────────────────────────────────┐              ║
║         │  II  ·   CAPA LÓGICA                            │              ║
║         │  Fechas · Números · Categorías · Reglas         │              ║
║         └─────────────────────────┬───────────────────────┘              ║
║                                   ▼                                      ║
║         ┌─────────────────────────────────────────────────┐              ║
║         │  III ·   CAPA COMPUTACIONAL                     │              ║
║         │  Algoritmos · IA · Simulación matemática        │              ║
║         └─────────────────────────┬───────────────────────┘              ║
║                                   ▼                                      ║
║         ┌─────────────────────────────────────────────────┐              ║
║         │  IV  ·   CAPA DE TIEMPO                         │              ║
║         │  Eventos · Ciclos · Versiones · Decisiones      │              ║
║         └─────────────────────────┬───────────────────────┘              ║
║                                   ▼                                      ║
║         ┌─────────────────────────────────────────────────┐              ║
║         │  V   ·   CAPA DE INTERFAZ                       │              ║
║         │  Mapas · Gráficos · Explicaciones               │              ║
║         └─────────────────────────────────────────────────┘              ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## I · Capa simbólica

**Contiene:** Numerología, astrología, quiromancia, salmos, textos herméticos.

**Qué hace:** Interpreta el corpus cultural como lenguaje, no como poder.

**Qué NO hace:** No predice, no diagnostica, no revela destinos.

**Ubicación en repo:** `data/symbolic/`

---

## II · Capa lógica

**Contiene:** Esquemas JSON/YAML, reglas de transformación, validadores.

**Qué hace:** Convierte símbolos en datos estructurados: fechas, números, categorías, patrones.

**Qué NO hace:** No interpreta el significado cultural. Solo lo estructura.

**Ubicación en repo:** `data/schemas/` y `src/core/rules/`

---

## III · Capa computacional

**Contiene:** Algoritmos, análisis, simulaciones matemáticas.

**Qué hace:** Busca relaciones, coincidencias y patrones en los datos estructurados.

**Qué NO hace:** No usa hardware cuántico real. La simulación es matemática aplicada.

**Ubicación en repo:** `src/pattern_engine/`, `src/quantum_simulator/`, `src/symbolic_engine/`

---

## IV · Capa de tiempo

**Contiene:** Líneas temporales, ciclos, versiones, decisiones.

**Qué hace:** Organiza cuándo ocurrió qué, cómo se relaciona con qué, y qué cambió entre versiones.

**Qué NO hace:** No predice el futuro. Solo ordena el pasado y el presente.

**Ubicación en repo:** `src/core/timelines/`

---

## V · Capa de interfaz

**Contiene:** Web pública, componentes visuales, gráficos.

**Qué hace:** Muestra resultados: mapas, tablas, explicaciones.

**Qué NO hace:** No decide. Solo presenta.

**Ubicación en repo:** `index.html`, `styles.css`, `app.js`, `src/interface/`

---

## 🔗 Relación entre capas

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   REGLA 01  Cada capa transforma la anterior, nunca la salta             ║
║                                                                          ║
║   REGLA 02  El motor simbólico no decide; interpreta                     ║
║                                                                          ║
║   REGLA 03  El motor lógico no interpreta; estructura                    ║
║                                                                          ║
║   REGLA 04  El motor computacional no estructura; analiza                ║
║                                                                          ║
║   REGLA 05  La interfaz no analiza; presenta                              ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🗺️ Mapa técnico

| Capa | Carpeta | Estado |
|------|---------|--------|
| I · Simbólica | `data/symbolic/` | 📖 Documentada |
| II · Lógica | `data/schemas/` | 📐 Diseño |
| III · Computacional | `src/` | ⚙️ Por construir |
| IV · Tiempo | `src/core/timelines/` | 🕰️ Por construir |
| V · Interfaz | `index.html` + `app.js` | 🎨 Publicada |

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   ARCHITECTURE · CRONOS · v1.0 · 2026-09-15                                  ║
║   Cinco capas · Una sola dirección · Símbolo → Decisión                      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>