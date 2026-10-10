<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Capa computacional · v1.2                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓    ███████╗██████╗  ██████╗                                            ▓ ║
║ ▓    ██╔════╝██╔══██╗██╔════╝                                            ▓ ║
║ ▓    ███████╗██████╔╝██║                                                 ▓ ║
║ ▓    ╚════██║██╔══██╗██║                                                 ▓ ║
║ ▓    ███████║██║  ██║╚██████╗                                            ▓ ║
║ ▓    ╚══════╝╚═╝  ╚═╝ ╚═════╝                                            ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   N Ú C L E O   ·   M O T O R E S   ·   A P I   ·   T I E M P O           ║
║ ▓   v 1 . 2   ·   I M P L E M E N T A D O                                  ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Estado](https://img.shields.io/badge/estado-implementado-00ff41?style=for-the-badge&labelColor=0a0d10)](#estado-actual)
[![Tests](https://img.shields.io/badge/tests-node%3Atest-c9a44c?style=for-the-badge&labelColor=0a0d10)](#-pruebas)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../LICENSE)

</div>

---

## ✅ Estado actual

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ►  Núcleo implementado (entidades + reglas + timelines)                ║
║   ►  Cuatro motores funcionales                                          ║
║   ►  API unificada exportada desde src/api/index.js                      ║
║   ►  40 tests passing (unit + integration + security)                    ║
║   ►  Sin dependencias externas (solo Node 18+ nativo)                    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🧩 Módulos implementados

| Módulo | Archivo | Función | Estado |
|--------|---------|---------|--------|
| `core/entities/number` | `core/entities/number.js` | Entidad número + reducción teosófica | ✅ |
| `core/entities/date` | `core/entities/date.js` | Entidad fecha (ISO 8601, validada) | ✅ |
| `core/rules/reduction` | `core/rules/reduction.js` | Reducción de fechas y textos | ✅ |
| `core/timelines` | `core/timelines/index.js` | Clases `Event` y `Timeline` | ✅ |
| `symbolic_engine` | `symbolic_engine/index.js` | Interpretación cultural de fechas/textos | ✅ |
| `pattern_engine` | `pattern_engine/index.js` | Detección de frecuencias y repeticiones | ✅ |
| `quantum_simulator` | `quantum_simulator/index.js` | Simulación probabilística (Monte Carlo) | ✅ |
| `api` | `api/index.js` | Punto de entrada unificado | ✅ |

---

## 🚀 Uso

### Desde Node (ES Modules)

```javascript
import { Cronos } from './src/api/index.js';

// Interpretación simbólica
const fecha = Cronos.symbolic.interpretDate('2026-09-15');
console.log(fecha.reduction.value); // 7

// Patrones
const patrones = Cronos.pattern.detectRepetitions([1, 2, 2, 3, 3, 3]);
console.log(patrones.repeated); // { 2: 2, 3: 3 }

// Simulación
const sim = Cronos.simulator.simulateCoin(1000);
console.log(sim.probabilityHeads); // ~0.5

// Línea temporal
const tl = new Cronos.timeline.Timeline('Historia del proyecto');
tl.add({ id: 'a', iso: '2026-01-01', label: 'concepción', tags: ['origen'] });
tl.add({ id: 'b', iso: '2026-09-15', label: 'publicación', tags: ['release'] });
console.log(tl.sorted().map(e => e.label));
// ['concepción', 'publicación']

console.log(tl.byTag('release')); // [{ ...evento b }]
```

### Desde el navegador

```html
<script type="module">
  import { Cronos } from './src/api/index.js';

  const tl = new Cronos.timeline.Timeline('demo');
  tl.add({ id: 'x', iso: '2026-01-01', label: 'inicio' });
  console.log(tl.size); // 1
</script>
```

---

## 🧪 Pruebas

```bash
npm test                 # Todos los tests
npm run test:unit        # Solo unitarios
npm run test:integration # Solo integración
npm run test:security    # Solo seguridad
```

Runner nativo `node:test` (Node 18+). **Sin dependencias externas.**

---

## 🧭 Reglas de diseño

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   01  Vanilla primero. Sin librerías innecesarias.                       ║
║   02  Separación estricta entre capas.                                   ║
║   03  Funciones puras cuando sea posible.                                ║
║   04  Validación estricta de entrada.                                    ║
║   05  Ética programática: ningún módulo predice.                         ║
║   06  La capa de tiempo ordena cronología, no causalidad.                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   SRC · CRONOS · v1.2 · 2026-09-15                                           ║
║   Cinco capas implementadas · Sin dependencias · 40 tests                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>