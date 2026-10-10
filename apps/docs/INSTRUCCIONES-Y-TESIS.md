<div align="center">

```
╔═══════════════════════════════════════════════╗
║   📚  D O C  M A E S T R O  P O R T A B L E    ║
║                                               ║
║   INSTRUCCIONES + TESIS                       ║
║   KRONOS ECOSYSTEM · v20.1                    ║
╚═══════════════════════════════════════════════╝
```

![portable](https://img.shields.io/badge/●-portable-blue?style=flat-square)
![rules](https://img.shields.io/badge/●-30_reglas-green?style=flat-square)

</div>

---

```
[kronos@doc ~]$ ./doc --part 1
```

# PARTE 1 · INSTRUCCIONES DE TRABAJO

---

```
[kronos@doc ~]$ whoami
```

```
[▸] Marco Antonio Rojas Valdovinos · 27 años
[▸] Toluca, México
[▸] Email    · marco.a.rojas.v@hotmail.com
[▸] Tel      · +52 722 586 2335
[▸] Contacto · contacto@kronos3hash.online
[▸] Trabajo  · CELULAR con GitHub Web
[▸] Budget   · $0 USD/mes
[▸] Stack    · iSH (Alpine) + Brave Android
```

---

```
[kronos@doc ~]$ ./doc --how-to-talk
```

**CÓMO QUIERO QUE ME HABLES**

```
[▸] Directo, sin adulación
[▸] Verdad aunque duela
[▸] Sin "excelente" sin evidencia
[▸] Tono técnico cuando toca
[▸] Español neutro LATAM
[▸] Si no sabés algo, decilo textual
```

---

```
[kronos@doc ~]$ ./doc --how-i-want-files
```

**CÓMO QUIERO LOS ARCHIVOS**

```
[1] ▸ Cada archivo COMPLETO
[2] ▸ Con RUTA exacta
[3] ▸ Con COMMIT (emoji + tipo)
[4] ▸ Contenido en caja de texto
[5] ▸ Sin fragmentos
[6] ▸ Sin placeholders
```

---

```
[kronos@doc ~]$ ./doc --commit-format
```

**FORMATO DE COMMITS**

```
[✨] feat     · Nueva funcionalidad
[🐛] fix      · Bug arreglado
[🔐] crypto   · Criptografía / seguridad
[📝] docs     · Documentación
[🎨] design   · UI / visual
[⚙️] ci       · Workflows
[🗑️] chore    · Limpieza
[🧪] test     · Tests
[📦] schema   · Estructura datos
[🤖] agentes  · Agentes IA
```

---

```
[kronos@doc ~]$ ./doc --rules 1-10
```

**REGLAS BASE 1-10**

```
[01] Cero invención. No inventar hashes, URLs, versiones.
[02] Cero "100% seguro" / "inhackeable".
[03] Cada módulo se prueba antes del siguiente.
[04] Semáforo obligatorio en cada respuesta.
[05] Si es maqueta, decirlo.
[06] Paleta Obsidian & Gold (#0a0a0b, #c9a227, #e5c76b).
[07] Sello Kintsugi ○_● en archivos nuevos.
[08] Rutas con / crean carpetas en GitHub.
[09] .md usa estilo terminal: cajas ASCII + emojis + sello.
[10] Mermaid renderiza en GitHub (desktop).
```

---

```
[kronos@doc ~]$ ./doc --rules 11-20
```

**REGLAS ANTI-INVENCIÓN 11-20**

```
[11] Prohibido inventar porcentajes.
[12] Prohibido afirmar estados no verificados.
[13] Prohibido inflar listas con relleno.
[14] Prohibido consejo genérico como análisis.
[15] Prohibido presentar suposiciones como hechos.
[16] Obligatorio declarar límites al inicio.
[17] Obligatorio autocuestionamiento antes de entregar.
[18] Obligatorio cruzar prompt vs realidad.
[19] Respetar patrones existentes antes de crear nuevos.
[20] Si no sé algo: "no sé, necesito X para saber".
```

---

```
[kronos@doc ~]$ ./doc --rules 21-30
```

**REGLAS ANTI-REPETICIÓN 21-30**

```
[21] PUERTA DE SALIDA ÚNICA
     ¿Verifiqué línea por línea?
     ¿Sé bug más probable?
     ¿Sé qué haría si falla?
     Si no → NO ENTREGAR

[22] CONTADOR DE VERSIONES
     Si N > 3 → PARAR. Reformular.

[23] PREGUNTA DE RETORNO
     Cerrar con: "Cuando lo pruebes decime:
     ✅ funciona / 🔴 error exacto / 🟡 raro"

[24] URL VERIFICADA O NO DADA
[25] BUG REPETIDO = PARADA TOTAL
[26] RATIO VISIBLE (>5:1 → AVISO ROJO)
[27] DERECHO AL "NO SÉ"
[28] STOP POR FRUSTRACIÓN
[29] PRUEBA DE 30 SEGUNDOS
[30] MEMORIA DE FRACASOS
```

---

```
[kronos@doc ~]$ ./doc --part 2
```

# PARTE 2 · TESIS DEL PROYECTO

---

```
[kronos@doc ~]$ ./doc --what-is-kronos
```

> **KRONOS es infraestructura de verificación criptográfica local-first.**
> Acredita autoría, origen y existencia de cualquier dato digital.
> Sin servidor. Sin autoridad. Sin permiso de nadie.

**NO es app. NO es SaaS. Es INFRAESTRUCTURA verificable offline.**

---

```
[kronos@doc ~]$ ./doc --problem
```

**LOS SISTEMAS DIGITALES NO PUEDEN PROBAR:**

```
[1] ▸ Quién originó qué — antes de registro
[2] ▸ Cuándo — con hora exacta
[3] ▸ Que no fue alterado después
[4] ▸ Sin depender de servidor o autoridad
```

**Ejemplo real (Eduardo, inmobiliario):**

> "Un agente dice que originó al cliente primero. Otro cierra la venta. Sin prueba, gana el mejor abogado."

---

```
[kronos@doc ~]$ ./doc --pipeline
```

**PIPELINE E2E**

```
AGENTE                  EMPRESA
──────                  ───────
capturar-origen   →     verificador-empresa
firma Ed25519           valida 5 criterios
boleto.json             resultado
boleto.png
```

**4 RESULTADOS:**

| símbolo | resultado       |
| :-----: | :-------------- |
| `✓✓✓`   | VERIFICADO      |
| `✗✗✗`   | ALTERADO        |
| `⚠⚠⚠`   | NO AUTORIZADO   |
| `⚠⚠⚠`   | FUERA PERIODO   |

---

```
[kronos@doc ~]$ ./doc --architecture
```

**5 CAPAS**

```
[0] FUNDACIÓN    · Acta, Merkle, Clave Pública, ETH
[1] CRIPTOGRAFÍA · Ed25519, SHA-256, AES-GCM-256
[2] ESQUEMA      · registro.schema.json v2.0.1
[3] PIPELINE     · capturar, verificar, notariar
[4] AGENTES      · 6 Python + 6 JS Kintsugi
[5] CIUDAD       · 100 plazas, token KRO
```

---

```
[kronos@doc ~]$ ./doc --modules
```

**5 MÓDULOS**

```
[▸] MIS · Identidad Simbólica
[▸] MAS · Autoconocimiento Simbólico
[▸] MRA · Restricciones y Advertencias
[▸] MTI · Trazabilidad Inmutable
[▸] MAR · Responsabilidad
```

---

```
[kronos@doc ~]$ ./doc --evidence
```

**SAFE CREATIVE (8):** 2607086319439 · 2607146379465 · 2608056639878 · 2608096674952 · 2608096678240 · 2608156740085 · 2608166741669 · 2608176749334

**ETHEREUM (2):** 0x8ca8e84e1258... · 0xd2c2a7e128e6...

---

```
[kronos@doc ~]$ ./doc --status
```

| aspecto      | estado         |
| :----------- | :------------- |
| Clientes     | 0              |
| Certificados | 0              |
| Pesos        | $0             |
| Pipeline E2E | ✓ VERIFICADO   |
| Balance      | técnico 62%    |
|              | negocio 0%     |
|              | adopción 0%    |

---

```
[kronos@doc ~]$ ./doc --goals
```

**CORTO PLAZO (esta semana)**

```
[▸] Emitir primer certificado real
[▸] Mandarlo a Eduardo
[▸] Limpiar el repo
```

**MEDIANO PLAZO (este mes)**

```
[▸] 10 clientes pagando
[▸] 5,000 MXN cobrados
[▸] Registrar KRONOS en IMPI
```

**LARGO PLAZO (este año)**

```
[▸] 100 clientes
[▸] NMX propuesta
[▸] Estándar LATAM
```

**LEGADO (5 años)**

```
[▸] Infraestructura adoptada por reguladores
[▸] Sobrevive al fundador
[▸] Código vive sin mantenimiento
```

---

```
[kronos@doc ~]$ ./doc --is-not
```

**KRONOS NO ES**

```
[❌] kroscripto.com (otro proyecto, mismo nombre)
[❌] blockchain
[❌] token propio
[❌] wallet
[❌] promesa de eternidad
[❌] inmune a todo
[❌] reemplazo de leyes
```

---

```
[kronos@doc ~]$ echo $?
```

```
0   # doc maestro portable listo
```

---

<div align="center">

```
○_● · ◢◤◥◣ · ◥◣◢◤
51% HUMANO · 49% IA · 100% REAL
```

<sub>_"El legado no se hereda. Se firma." · DMD-33_</sub>

</div>