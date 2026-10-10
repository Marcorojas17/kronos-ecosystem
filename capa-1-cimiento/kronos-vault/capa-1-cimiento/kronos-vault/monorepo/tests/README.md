<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Pruebas · v1.2                                                -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ████████╗███████╗███████╗████████╗███████╗                           ▓ ║
║ ▓   ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔════╝                           ▓ ║
║ ▓      ██║   █████╗  ███████╗   ██║   ███████╗                           ▓ ║
║ ▓      ██║   ██╔══╝  ╚════██║   ██║   ╚════██║                           ▓ ║
║ ▓      ██║   ███████╗███████║   ██║   ███████║                           ▓ ║
║ ▓      ╚═╝   ╚══════╝╚══════╝   ╚═╝   ╚══════╝                           ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   U N I T A R I A S   ·   I N T E G R A C I Ó N   ·   S E G U R I D A D  ║
║ ▓   v 1 . 2   ·   A C T I V O   ·   4 0   T E S T S                         ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Estado](https://img.shields.io/badge/estado-activo-00ff41?style=for-the-badge&labelColor=0a0d10)](#estado)
[![Runner](https://img.shields.io/badge/runner-node%3Atest-c9a44c?style=for-the-badge&labelColor=0a0d10)](#cómo-ejecutar)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../LICENSE)

</div>

---

## 📂 Estructura

```text
tests/
├── README.md                    ← este archivo
├── unit/
│   ├── number.test.js           ← entidad Número + reduceToDigit
│   ├── reduction.test.js        ← reduceDate + reduceText
│   └── timeline.test.js         ← Event + Timeline
├── integration/
│   └── flow.test.js             ← API + flujo entre motores
└── security/
    └── input.test.js            ← validación de entradas
```

---

## 🧪 Cómo ejecutar

```bash
npm test                    # Todos los tests
npm run test:unit           # Solo unitarios
npm run test:integration    # Solo integración
npm run test:security       # Solo seguridad
```

Runner nativo `node:test` (Node 18+). **Sin dependencias externas.**

---

## 📊 Cobertura

| Carpeta | Archivos | Tests | Estado |
|---------|:--------:|:-----:|--------|
| `unit/` | 3 | 25 | ✅ |
| `integration/` | 1 | 7 | ✅ |
| `security/` | 1 | 8 | ✅ |
| **Total** | **5** | **40** | ✅ |

---

## 🎯 Qué se prueba

- **Corrección lógica** — transformaciones símbolo → dato
- **Determinismo** — misma entrada → misma salida
- **Límites** — entradas vacías, malformadas o fuera de rango
- **Integración** — motores funcionando en conjunto
- **Seguridad** — inyección, tipos incorrectos, strings extremos
- **Tiempo** — orden cronológico, filtros, serialización round-trip
- **Ética programática** — sin predicciones disfrazadas

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   TESTS · CRONOS · v1.2 · 2026-09-15                                         ║
║   Sin pruebas no hay confianza                                               ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>