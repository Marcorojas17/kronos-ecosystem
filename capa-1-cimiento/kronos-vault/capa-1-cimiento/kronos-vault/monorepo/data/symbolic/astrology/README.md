<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Corpus astrológico · v1.0                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓    █████╗ ███████╗████████╗██████╗  ██████╗ ██╗      ██████╗  ██████╗  ▓ ║
║ ▓   ██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗██║     ██╔═══██╗██╔════╝  ▓ ║
║ ▓   ███████║███████╗   ██║   ██████╔╝██║   ██║██║     ██║   ██║██║  ███╗ ▓ ║
║ ▓   ██╔══██║╚════██║   ██║   ██╔══██╗██║   ██║██║     ██║   ██║██║   ██║ ▓ ║
║ ▓   ██║  ██║███████║   ██║   ██║  ██║╚██████╔╝███████╗╚██████╔╝╚██████╔╝ ▓ ║
║ ▓   ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝  ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   C O R P U S   A S T R O L Ó G I C O   ·   v 1 . 0                      ║
║ ▓   C U L T U R A ,   N O   C I E N C I A                                  ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Tipo](https://img.shields.io/badge/tipo-corpus%20cultural-c9a44c?style=for-the-badge&labelColor=0a0d10)](#-advertencia)
[![Predice](https://img.shields.io/badge/predice-NO-ff4444?style=for-the-badge&labelColor=0a0d10)](#-advertencia)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../../../LICENSE)

</div>

---

## ⚠️ Advertencia

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   Este corpus es CULTURA, no ciencia.                                    ║
║   No predice. No diagnostica. No revela destinos.                        ║
║   Se estudia como lenguaje simbólico y patrimonio cultural.              ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🎯 Propósito

Recopilar material astrológico de referencia como **patrimonio cultural** para:

1. Documentar cómo distintas tradiciones organizan el cielo en símbolos.
2. Servir de materia prima para la **capa lógica** (`data/schemas/`).
3. Estudiar cómo los seres humanos convierten símbolos en decisiones.

---

## 📂 Contenido previsto

```text
astrology/
├── README.md                    ← este archivo
├── zodiac_signs.json            ← 12 signos con metadatos culturales
├── houses.json                  ← 12 casas con descripciones
├── planets.json                 ← planetas y significados tradicionales
├── aspects.json                 ← aspectos entre planetas
└── sources.md                   ← referencias culturales y bibliográficas
```

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `zodiac_signs.json` | 12 signos: nombre, elemento, modalidad, fuente | ⏸️ Pendiente |
| `houses.json` | 12 casas: número, área, descripción cultural | ⏸️ Pendiente |
| `planets.json` | Planetas: símbolo, significado tradicional, cultura origen | ⏸️ Pendiente |
| `aspects.json` | Ángulos entre planetas: nombre, grados, descripción | ⏸️ Pendiente |
| `sources.md` | Bibliografía y referencias culturales | ⏸️ Pendiente |

---

## 📐 Esquema de ejemplo

```json
{
  "id": "aries",
  "name_es": "Aries",
  "symbol": "♈",
  "element": "fuego",
  "modality": "cardinal",
  "dates_traditional": ["03-21", "04-19"],
  "cultural_meaning": "Inicio, impulso, energía",
  "origin": "Tradición helenística",
  "tag": "#cultura"
}
```

---

## 🚫 Lo que NO va aquí

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ✗  Predicciones para personas reales                                   ║
║   ✗  Horóscopos con fechas futuras                                       ║
║   ✗  Afirmaciones sin fuente cultural                                    ║
║   ✗  Material que se presente como ciencia                               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## ✅ Requisitos para contribuir

Toda entrada nueva debe incluir:

1. **Fuente cultural** (tradición, región, época).
2. **Contexto histórico** cuando aplique.
3. **Etiqueta** `#cultura` o `#narrativa` en el encabezado del archivo.
4. **Separación** entre "significado tradicional" y "uso en CRONOS".

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   ASTROLOGY · CRONOS · v1.0 · 2026-09-15                                     ║
║   Cultura, no ciencia · Interpretación, no predicción                        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>