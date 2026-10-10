<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Esquemas lógicos · v1.0                                       -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ███████╗ ██████╗██╗  ██╗███████╗███╗   ███╗ █████╗ ███████╗           ▓ ║
║ ▓   ██╔════╝██╔════╝██║  ██║██╔════╝████╗ ████║██╔══██╗██╔════╝           ▓ ║
║ ▓   ███████╗██║     ███████║█████╗  ██╔████╔██║███████║███████╗           ▓ ║
║ ▓   ╚════██║██║     ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══██║╚════██║           ▓ ║
║ ▓   ███████║╚██████╗██║  ██║███████╗██║ ╚═╝ ██║██║  ██║███████║           ▓ ║
║ ▓   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝           ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   E S Q U E M A S   L Ó G I C O S   ·   v 1 . 0                          ║
║ ▓   S Í M B O L O   →   D A T O   E S T R U C T U R A D O                  ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Tipo](https://img.shields.io/badge/tipo-capa%20l%C3%B3gica-00ff41?style=for-the-badge&labelColor=0a0d10)](#)
[![Formato](https://img.shields.io/badge/formato-JSON%20%2F%20YAML-c9a44c?style=for-the-badge&labelColor=0a0d10)](#esquemas-previstos)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../../../LICENSE)

</div>

---

## 🎯 Propósito

Definir cómo los símbolos del corpus (`data/symbolic/`) se transforman en **datos estructurados, validables y verificables**.

Esta carpeta es el **puente** entre la capa simbólica y la capa computacional.

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   SIMBÓLICO  →  LÓGICO  →  COMPUTACIONAL                                 ║
║   (cultura)     (datos)     (análisis)                                   ║
║                                                                          ║
║   Esta carpeta contiene el "LÓGICO"                                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 📂 Esquemas previstos

| Archivo | Define | Estado |
|---------|--------|--------|
| `date.schema.json` | Fecha, hora, zona horaria, formato ISO 8601 | ⏸️ Pendiente |
| `number.schema.json` | Número, reducción, ciclo, base | ⏸️ Pendiente |
| `category.schema.json` | Categoría simbólica (elemento, signo, línea) | ⏸️ Pendiente |
| `pattern.schema.json` | Patrón detectado en el corpus | ⏸️ Pendiente |
| `source.schema.json` | Fuente cultural y contexto | ⏸️ Pendiente |

---

## 📐 Ejemplo de esquema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Date",
  "type": "object",
  "required": ["iso", "calendar"],
  "properties": {
    "iso": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    "calendar": {
      "type": "string",
      "enum": ["gregoriano", "juliano", "hebreo", "islámico"]
    },
    "timezone": {
      "type": "string",
      "default": "UTC"
    },
    "cultural_notes": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```

---

## 🧭 Reglas de diseño

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   01  Todo dato debe ser trazable a una fuente cultural                  ║
║   02  Ningún esquema infiere significado; solo estructura                ║
║   03  Nada de "predicciones" en las propiedades                          ║
║   04  Campos "cultural_notes" siempre opcionales y abiertos              ║
║   05  Validación estricta (additionalProperties: false)                  ║
║   06  Versionado semántico en cada esquema                               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🚫 Lo que NO va aquí

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ✗  Esquemas con campos "prediction" o "future"                         ║
║   ✗  Estructuras que asuman causalidad simbólica                         ║
║   ✗  Campos sin documentación                                            ║
║   ✗  Formatos propietarios o cerrados                                    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## ✅ Requisitos para contribuir

1. **JSON Schema** draft-07 o superior.
2. **Comentario** explicando qué transforma el esquema.
3. **Ejemplo** de uso dentro del mismo PR.
4. **Test** en `tests/unit/schemas/` cuando aplique.

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   SCHEMAS · CRONOS · v1.0 · 2026-09-15                                       ║
║   Símbolo → dato · Cultura → estructura                                      ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>