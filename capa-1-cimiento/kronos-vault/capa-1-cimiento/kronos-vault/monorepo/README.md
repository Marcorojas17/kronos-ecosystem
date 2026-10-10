# CRONOS — Sistema de Interpretación Temporal y Simbólica

> **Cognitive Relational Ontology for Networked Observations and Systems**

<div align="center">

**Sitio publicado:** https://marcorojas17.github.io/PROYECTO-KRONOS/

![CRONOS](https://img.shields.io/badge/CRONOS-v1.1-c9a44c?style=for-the-badge&labelColor=0a0a0f)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-6a5acd?style=for-the-badge&labelColor=0a0a0f)
![HTML5](https://img.shields.io/badge/HTML-5-c9a44c?style=for-the-badge&labelColor=0a0a0f)
![CSS3](https://img.shields.io/badge/CSS-3-6a5acd?style=for-the-badge&labelColor=0a0a0f)
![JS](https://img.shields.io/badge/JS-Vanilla-c9a44c?style=for-the-badge&labelColor=0a0a0f)
![Tests](https://img.shields.io/badge/tests-27%20passing-00ff41?style=for-the-badge&labelColor=0a0a0f)
![MIT](https://img.shields.io/badge/license-MIT-6a5acd?style=for-the-badge&labelColor=0a0a0f)

</div>

---

## ⚠️ Aviso de transparencia

**CRONOS es una arquitectura conceptual, filosófica y tecnológica.** No es una red secreta, no predice el futuro, no sustituye decisiones médicas, legales ni financieras.

**Lo que SÍ es real y usable en este repositorio:**

- ✅ Sitio estático publicado en GitHub Pages
- ✅ Código funcional en `src/` (entidades, motores, API) — 27 tests passing
- ✅ Diseño responsive con tema oscuro y tipografía serif + mono
- ✅ Navegación con resaltado automático por scroll
- ✅ Automatización con GitHub Actions (tests + security)
- ✅ Principios éticos explícitos (`docs/ethics.md`)

**Lo que es narrativa conceptual, no ciencia comprobada:**

- 🎭 La "tercera capa" como capa de interpretación profunda
- 🎭 El uso de astrología, numerología y quiromancia como lenguajes simbólicos
- 🎭 La simulación cuántica como metáfora de incertidumbre (es matemática, no hardware)

---

## 📖 ¿Qué es este repositorio?

Tres capas separadas que conviven en el mismo proyecto:

| Capa | Descripción | Estado |
|------|-------------|--------|
| **Sitio público** | Landing estática en GitHub Pages | ✅ Publicado |
| **Código funcional** | Motores simbólico, patrones y simulación | ✅ Implementado |
| **Arquitectura conceptual** | Cinco capas documentadas | 📚 Documentado |

---

## 🚀 Inicio rápido

### Ver el sitio

https://marcorojas17.github.io/PROYECTO-KRONOS/

### Clonar y ejecutar tests

```bash
git clone https://github.com/marcorojas17/PROYECTO-KRONOS.git
cd PROYECTO-KRONOS
npm test
```

### Usar la API en tu código

```javascript
import { Cronos } from './src/api/index.js';

const result = Cronos.symbolic.interpretDate('2026-09-15');
console.log(result.reduction.value); // 7

const patterns = Cronos.pattern.detectRepetitions([1, 2, 2, 3, 3, 3]);
console.log(patterns.repeated); // { 2: 2, 3: 3 }

const sim = Cronos.simulator.simulateCoin(1000);
console.log(sim.probabilityHeads); // ~0.5
```

---

## 📂 Estructura

```text
PROYECTO-KRONOS/
├── index.html                    ← landing principal
├── styles.css                    ← tema oscuro
├── app.js                        ← interacciones vanilla
├── 404.html                      ← página de error
├── favicon.svg                   ← icono vectorial
├── manifest.webmanifest          ← app instalable
├── robots.txt                    ← SEO
├── sitemap.xml                   ← SEO
├── package.json                  ← scripts npm
├── .nojekyll                     ← evita procesado Jekyll
├── README.md, LICENSE, CHANGELOG.md
├── CONTRIBUTING.md, SECURITY.md
│
├── docs/                         ← 6 documentos fundacionales
├── data/                         ← esquemas + corpus simbólico
│
├── src/
│   ├── core/
│   │   ├── entities/
│   │   │   ├── number.js         ← entidad número
│   │   │   └── date.js           ← entidad fecha
│   │   └── rules/
│   │       └── reduction.js      ← reglas de reducción
│   ├── symbolic_engine/          ← interpretación cultural
│   ├── pattern_engine/           ← detección de patrones
│   ├── quantum_simulator/        ← simulación matemática
│   └── api/                      ← punto de entrada
│
├── tests/
│   ├── unit/                     ← 12 tests
│   ├── integration/              ← 7 tests
│   └── security/                 ← 8 tests
│
└── .github/                      ← workflows + templates
```

---

## 📊 Capas conceptuales

| Capa | Función | Estado |
|------|---------|--------|
| Simbólica | Interpretación cultural | 📖 Documentada |
| Lógica | Símbolos → datos estructurados | ✅ Implementada |
| Computacional | Algoritmos, patrones, simulación | ✅ Implementada |
| Tiempo | Eventos, ciclos, versiones | 🕰️ Por construir |
| Interfaz | Web o app | 🎨 Publicada |

---

## 🌐 Tres capas de internet (metáfora narrativa)

| Capa | Descripción | Realidad |
|------|-------------|----------|
| 1 · Internet visible | Información pública indexada | ✅ Real |
| 2 · Datos privados | Plataformas internas, correos | ✅ Real |
| 3 · Cronos | Interpretación de patrones y tiempo | 🎭 Metáfora |

> La dark web es un subconjunto de la deep web. Puede usarse para privacidad o para actividades ilegales. **No es una dimensión espiritual ni cuántica.**

---

## ⚖️ Principios éticos

1. **No predice el futuro.**
2. **No sustituye decisiones profesionales.**
3. **No confunde simulación con tecnología real.**
4. **No mezcla ficción con ciencia.**

---

## 🤝 Contribuir

Lee [`CONTRIBUTING.md`](CONTRIBUTING.md) antes de enviar un Pull Request.

---

## ⚖️ Licencia

**MIT.** Ver [`LICENSE`](LICENSE).

---

<div align="center">

**CRONOS · v1.1 · 2026-09-15**
Arquitectura filosófica. No predice el futuro.

</div>