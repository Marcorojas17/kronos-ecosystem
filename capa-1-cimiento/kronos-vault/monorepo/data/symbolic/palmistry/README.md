<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Corpus quiromántico · v1.0                                    -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ██████╗  █████╗ ██╗     ███╗   ███╗██╗███████╗████████╗██████╗        ▓ ║
║ ▓   ██╔══██╗██╔══██╗██║     ████╗ ████║██║██╔════╝╚══██╔══╝██╔══██╗       ▓ ║
║ ▓   ██████╔╝███████║██║     ██╔████╔██║██║███████╗   ██║   ██████╔╝       ▓ ║
║ ▓   ██╔═══╝ ██╔══██║██║     ██║╚██╔╝██║██║╚════██║   ██║   ██╔══██╗       ▓ ║
║ ▓   ██║     ██║  ██║███████╗██║ ╚═╝ ██║██║███████║   ██║   ██║  ██║       ▓ ║
║ ▓   ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝       ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   C O R P U S   Q U I R O M Á N T I C O   ·   v 1 . 0                    ║
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
║   La quiromancia es un sistema simbólico de interpretación tradicional.  ║
║   NO tiene base médica. NO diagnostica enfermedades.                     ║
║   NO sustituye a un profesional de la salud.                             ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🎯 Propósito

Recopilar material quiromántico de referencia como **patrimonio cultural** para:

1. Documentar cómo distintas culturas leen la mano como texto simbólico.
2. Servir de materia prima para la **capa lógica** (líneas → categorías).
3. Estudiar el vínculo entre observación corporal y construcción de significado.

---

## 📂 Contenido previsto

```text
palmistry/
├── README.md                    ← este archivo
├── major_lines.json             ← línea de vida, corazón, cabeza, destino
├── minor_lines.json             ← líneas secundarias y su contexto cultural
├── mounts.json                  ← montes de la palma (Venus, Júpiter, etc.)
├── hand_shapes.json             ← tipologías (tierra, aire, agua, fuego)
└── sources.md                   ← referencias culturales y bibliográficas
```

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `major_lines.json` | Líneas principales con nombres tradicionales | ⏸️ Pendiente |
| `minor_lines.json` | Líneas secundarias (suerte, salud, intuición) | ⏸️ Pendiente |
| `mounts.json` | Montes y su significado cultural | ⏸️ Pendiente |
| `hand_shapes.json` | Tipologías de mano según tradiciones | ⏸️ Pendiente |
| `sources.md` | Bibliografía y referencias culturales | ⏸️ Pendiente |

---

## 📐 Esquema de ejemplo

```json
{
  "id": "heart_line",
  "name_es": "Línea del corazón",
  "position_traditional": "superior transversa",
  "cultural_meaning": "Vida afectiva y emocional",
  "traditions": ["india", "romani", "europea"],
  "medical_claim": false,
  "tag": "#cultura"
}
```

---

## 🚫 Lo que NO va aquí

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ✗  Diagnósticos médicos basados en la mano                            ║
║   ✗  Predicciones de longevidad o enfermedad                             ║
║   ✗  Lecturas sobre personas reales sin consentimiento                   ║
║   ✗  Afirmaciones sin fuente cultural                                    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## ✅ Requisitos para contribuir

Toda entrada nueva debe incluir:

1. **Tradición de origen** (india, china, romani, europea, etc.).
2. **Contexto histórico** cuando aplique.
3. **Etiqueta** `#cultura` o `#narrativa`.
4. **Declaración explícita** `"medical_claim": false`.

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   PALMISTRY · CRONOS · v1.0 · 2026-09-15                                     ║
║   Cultura, no medicina · Símbolo, no diagnóstico                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>