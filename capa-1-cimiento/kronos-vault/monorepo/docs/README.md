<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Documentación fundacional · v1.1                              -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ██████╗  ██████╗  ██████╗███████╗                                     ▓ ║
║ ▓   ██╔══██╗██╔═══██╗██╔════╝██╔════╝                                     ▓ ║
║ ▓   ██║  ██║██║   ██║██║     ███████╗                                     ▓ ║
║ ▓   ██║  ██║██║   ██║██║     ╚════██║                                     ▓ ║
║ ▓   ██████╔╝╚██████╔╝╚██████╗███████║                                     ▓ ║
║ ▓   ╚═════╝  ╚═════╝  ╚═════╝╚══════╝                                     ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   V I S I Ó N   ·   A R Q U I T E C T U R A   ·   É T I C A              ║
║ ▓   G L O S A R I O   ·   T E R C E R A   C A P A                        ║
║ ▓   v 1 . 1   ·   2 0 2 6 - 0 9 - 1 5                                      ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Docs](https://img.shields.io/badge/docs-5%20archivos-00ff41?style=for-the-badge&labelColor=0a0d10)](#contenido-de-esta-carpeta)
[![Estado](https://img.shields.io/badge/estado-fundacional-c9a44c?style=for-the-badge&labelColor=0a0d10)](#)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../LICENSE)

</div>

---

## 📚 Contenido de esta carpeta

| Archivo | Descripción |
|---------|-------------|
| [`vision.md`](vision.md) | Qué es CRONOS, para qué existe, qué problema narrativo resuelve |
| [`architecture.md`](architecture.md) | Las cinco capas conceptuales y su relación |
| [`glossary.md`](glossary.md) | Términos del sistema sin ambigüedad |
| [`ethics.md`](ethics.md) | Principios y límites que el proyecto no cruza |
| [`third-layer-internet.md`](third-layer-internet.md) | Las tres capas de internet como metáfora |

---

## 🎯 Cómo leer esta documentación

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   1.  Empieza por  vision.md          →  entender la intención           ║
║   2.  Sigue con     architecture.md   →  ver la estructura               ║
║   3.  Consulta      glossary.md       →  aclarar términos nuevos         ║
║   4.  Lee           ethics.md         →  respetar límites del proyecto   ║
║   5.  Cierra con    third-layer-*.md  →  entender la metáfora            ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🧭 Relación con `src/`

La documentación describe **qué** hace el proyecto. El código en [`../src/`](../src/) describe **cómo** lo hace. Los documentos clave para entender la implementación son:

| Documento | Se relaciona con |
|-----------|------------------|
| `architecture.md` | Capas II (lógica) y III (computacional) — implementadas en `src/core/` y `src/*_engine/` |
| `glossary.md` | Nombres de funciones, entidades y motores |
| `ethics.md` | Validaciones y límites del código (sin predicciones, sin claims cuánticos) |

---

## ⚠️ Regla de separación

Toda la documentación de esta carpeta distingue explícitamente entre:

| Símbolo | Significado | Ejemplos |
|---------|-------------|----------|
| ✅ | **Real** | Arquitectura del sitio, código funcional, tests, protocolo de publicación |
| 🎭 | **Conceptual** | Capas simbólicas, astrología, numerología, "tercera capa" |

Ninguna sección presenta lo simbólico como ciencia comprobada.

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   DOCS · CRONOS · v1.1 · 2026-09-15                                          ║
║   Documentación fundacional                                                  ║
║   Cultura, no ciencia · Narrativa, no predicción                             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>