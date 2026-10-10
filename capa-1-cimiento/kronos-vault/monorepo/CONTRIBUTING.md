<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Guía de contribución · v1.0                                   -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓    ██████╗ ██████╗ ███╗   ██╗████████╗██████╗ ██╗██████╗                ▓ ║
║ ▓   ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██║██╔══██╗               ▓ ║
║ ▓   ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║██████╔╝               ▓ ║
║ ▓   ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║██╔══██╗               ▓ ║
║ ▓   ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║██║██║  ██║               ▓ ║
║ ▓    ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝               ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   G U Í A   D E   C O L A B O R A C I Ó N   ·   v 1 . 0                  ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-00ff41?style=for-the-badge&labelColor=0a0d10)](https://github.com/marcorojas17/PROYECTO-KRONOS/pulls)
[![Conducta](https://img.shields.io/badge/conducta-respetuosa-c9a44c?style=for-the-badge&labelColor=0a0d10)](#código-de-conducta)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](LICENSE)

</div>

---

## 🌱 Antes de contribuir

CRONOS es un proyecto con **dos capas separadas** que conviven:

| Capa | Acepta PRs | Ejemplos |
|------|------------|----------|
| 🎨 Sitio estático | ✅ Sí | Accesibilidad, responsive, nuevas secciones |
| 📚 Documentación | ✅ Sí | Correcciones, ampliaciones, traducciones |
| ⚙️ Código nuevo (`src/`) | ⚠️ Con discusión previa | Motores simbólicos, APIs, tests |
| 🎭 Narrativa simbólica | ✅ Sí, con rigor | Contenido cultural claramente etiquetado |

> **Regla de oro:** lo simbólico se presenta como narrativa, nunca como ciencia. Lo técnico se presenta como estructura verificable.

---

## 🔀 Flujo de trabajo

### 1 · Fork y rama

```bash
git clone https://github.com/TU_USUARIO/PROYECTO-KRONOS.git
cd PROYECTO-KRONOS
git checkout -b feat/nombre-descriptivo
```

### 2 · Convención de nombres de rama

| Prefijo | Uso |
|---------|-----|
| `feat/` | Nueva funcionalidad o sección |
| `fix/` | Corrección de errores |
| `docs/` | Solo documentación |
| `style/` | Cambios visuales sin lógica |
| `refactor/` | Reorganización sin cambio de comportamiento |

### 3 · Convención de commits

```text
feat(glosario): añade definición de "capa computacional"
fix(nav): corrige solapamiento en pantallas < 480px
docs(ethics): amplía principio sobre simulación cuántica
style(hero): ajusta halo pulsante en móvil
```

---

## 📐 Estilo de código

### HTML
- Indentación de 2 espacios.
- Etiquetas semánticas (`<section>`, `<article>`, `<nav>`).
- Comentarios en mayúsculas para bloques grandes.

### CSS
- Variables en `:root`.
- Metodología BEM ligera (`.bloque__elemento--modificador`).
- Sin frameworks externos.

### JavaScript
- Vanilla puro.
- IIFE o módulos, sin contaminar `window`.
- Comentarios en español.

### Markdown
- Jerarquía estricta de títulos.
- Tablas para información comparativa.
- Bloques de código con lenguaje declarado.

---

## 🚫 Qué NO se acepta

```text
╔══════════════════════════════════════════════════════════════════════════╗
║  ✗  Predicciones del futuro presentadas como hechos                      ║
║  ✗  Consejos médicos, legales o financieros                              ║
║  ✗  Mezclar simulación cuántica con tecnología cuántica real             ║
║  ✗  Enlaces a la dark web o instrucciones de acceso                      ║
║  ✗  Código ofuscado o sin documentación                                  ║
║  ✗  Contenido que contradiga el aviso de transparencia                   ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 📜 Código de conducta

- Respeto absoluto entre colaboradores.
- Crítica técnica, nunca personal.
- No se tolera discriminación, acoso ni descalificación.
- Los desacuerdos se resuelven con argumentos y fuentes.

---

## ✅ Checklist antes de enviar PR

- [ ] Leí `README.md` y `docs/ethics.md`.
- [ ] Mi cambio respeta la separación narrativa / framework real.
- [ ] Probé el sitio en móvil y escritorio (si toqué HTML/CSS/JS).
- [ ] Actualicé `CHANGELOG.md` si es relevante.
- [ ] El mensaje de commit sigue la convención.
- [ ] Describí claramente el cambio en el PR.

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   CONTRIBUTING · CRONOS · v1.0                                               ║
║   Rigor · Claridad · Ética                                                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>