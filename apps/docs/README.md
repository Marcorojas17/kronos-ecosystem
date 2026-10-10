<div align="center">

```
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   ██╗  ██╗██████╗  ██████╗ ███╗   ██╗ ██████╗ ███████╗║
║   ██║ ██╔╝██╔══██╗██╔═══██╗████╗  ██║██╔═══██╗██╔════╝║
║   █████╔╝ ██████╔╝██║   ██║██╔██╗ ██║██║   ██║███████╗║
║   ██╔═██╗ ██╔══██╗██║   ██║██║╚██╗██║██║   ██║╚════██║║
║   ██║  ██╗██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝███████║║
║   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝║
║                                                       ║
║              [ M O N O R E P O · v20.1 ]             ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
```

![status](https://img.shields.io/badge/●-PRE--ALPHA-orange?style=flat-square)
![crypto](https://img.shields.io/badge/●-Ed25519-brightgreen?style=flat-square)
![stack](https://img.shields.io/badge/●-Next.js_+_Ethers-blue?style=flat-square)
![license](https://img.shields.io/badge/●-MIT_+_CC-blue?style=flat-square)

<sub>`○_●` · 51% HUMANO · 49% IA · 100% REAL</sub>

<sub>_"El legado no se hereda. Se firma."_</sub>

</div>

---

```
[kronos@root ~]$ uname -a
KRONOS ECOSYSTEM v20.1 · Monorepo · pnpm + turbo · 127 archivos docs
```

```
[kronos@root ~]$ cat /proc/status
```

| key             | value          |
| :-------------- | :------------- |
| **estado**      | PRE-ALPHA      |
| **presupuesto** | $11,500 USD    |
| **déficit**     | -$38,500 USD   |
| **clientes**    | 0              |
| **S.A. de C.V.**| NO CONSTITUIDA |
| **fundador**    | #000           |
| **ubicación**   | Toluca, MX     |

---

```
[kronos@root ~]$ ./kronos --about
```

> **KRONOS es infraestructura de verificación criptográfica local-first.**
> No es app. No es SaaS. Es protocolo abierto, verificable por cualquiera.

**Prueba 4 cosas sin servidor:**

```
[1] ▸ QUIÉN originó qué — antes de que exista registro
[2] ▸ CUÁNDO — con hora exacta, no aproximada
[3] ▸ QUE NO FUE ALTERADO — después del registro
[4] ▸ SIN DEPENDER — de servidor o autoridad
```

---

```
[kronos@root ~]$ ./kronos --pipeline --status
```

**AGENTE** ──────────────── **EMPRESA**

```
┌─ capturar-origen ─┐    ┌─ verificador-empresa ─┐
│ firma Ed25519     │ ─► │ valida 5 criterios    │
│ boleto.json       │    │ resultado final       │
│ boleto.png        │    │                       │
└───────────────────┘    └───────────────────────┘
```

**4 RESULTADOS POSIBLES:**

| simbolo | resultado         |
| :-----: | :---------------- |
| `✓✓✓`   | **VERIFICADO**    |
| `✗✗✗`   | **ALTERADO**      |
| `⚠⚠⚠`   | **NO AUTORIZADO** |
| `⚠⚠⚠`   | **FUERA PERIODO** |

**PRUEBA REAL** · Sra. Ríos · 2026-10-01 · `✓✓✓ VERIFICADO`

---

```
[kronos@root ~]$ ./kronos --architecture
```

**5 CAPAS DEL PROTOCOLO**

```
┌─────────────────────────────────────────────────┐
│  CAPA 0 · FUNDACIÓN                             │
│  Acta · Merkle Roots · Clave Pública · ETH      │
├─────────────────────────────────────────────────┤
│  CAPA 1 · CRIPTOGRAFÍA                          │
│  Ed25519 · SHA-256 · AES-GCM-256                │
├─────────────────────────────────────────────────┤
│  CAPA 2 · ESQUEMA                               │
│  registro.schema.json v2.0.1                    │
├─────────────────────────────────────────────────┤
│  CAPA 3 · PIPELINE                              │
│  capturar · verificar · notariar                │
├─────────────────────────────────────────────────┤
│  CAPA 4 · AGENTES                               │
│  6 Python + 6 JS Kintsugi                       │
├─────────────────────────────────────────────────┤
│  CAPA 5 · CIUDAD                                │
│  100 plazas · token KRO                         │
└─────────────────────────────────────────────────┘
```

---

```
[kronos@root ~]$ tree -L 2 --dirsfirst
```

**ESTRUCTURA DEL MONOREPO**

```
/kronos-ecosystem/
│
├── apps/
│   ├── web/                    → Producto Next.js (folios + verify)
│   └── docs/                   → Hub estático (GitHub Pages)
│
├── packages/
│   ├── contracts/              → Smart contracts (Solidity)
│   ├── crypto/                 → SHA-256 + Ed25519 compartido
│   └── ui/                     → Componentes visuales
│
├── scripts/
│   └── deploy.ts               → Deploy de contratos
│
├── 00_LEGAL_Y_FINANZAS/        → Docs capítulo (127 archivos total)
├── 01_FINANZAS_Y_CAPITAL/
├── 02_MARCAS_Y_ECOSISTEMA/
├── 03_INGENIERIA_Y_PRODUCTO/
├── 04_SEGURIDAD_Y_OPERACIONES/
├── 05_GOBERNANZA_Y_COMUNIDAD/
├── 06_DOCUMENTACION_Y_LORE/
├── 07_ARCHIVO_FORENSE/
├── 08_MANUALES_Y_SOPS/
├── 09_FASES_EJECUCION/
│
├── docs/                       → Doc maestro portable
├── index.html                  → HUB central (GitHub Pages)
├── package.json                → Comandos del monorepo
├── pnpm-workspace.yaml         → Workspaces
├── turbo.json                  → Orquestador de builds
├── README.md                   → Este archivo
└── RISK_DISCLOSURE.md
```

---

```
[kronos@root ~]$ ps -ef | grep kronos
```

| PID    | PROCESO            | ESTADO    |
| :----- | :----------------- | :-------: |
| 001    | apps/web           | `⚠⚠⚠`     |
| 002    | apps/docs          | `✓✓✓`     |
| 003    | packages/contracts | `⚠⚠⚠`     |
| 004    | packages/crypto    | `✓✓✓`     |
| 005    | pipeline E2E       | `✓✓✓`     |
| 006    | clientes           | `✗✗✗`     |
| 007    | S.A. de C.V.       | `✗✗✗`     |

<sub>7 procesos · 3 OK · 2 parciales · 2 pendientes</sub>

---

```
[kronos@root ~]$ cat /sys/evidence
```

**SAFE CREATIVE** (8 registros)

```
├── 2607086319439 · Acta Fundacional
├── 2607146379465 · Arquitectura Legado
├── 2608056639878 · FDV Infalsificable
├── 2608096674952 · Autenticación Universal
├── 2608096678240 · Código Fuente API
├── 2608156740085 · KÓDICE V1.3
├── 2608166741669 · Ecosistema KÓDICE
└── 2608176749334 · KRONOS 360
```

**ETHEREUM** (2 anclajes)

```
├── 0x8ca8e84e1258abac9acb29d14d25114e4775d782ecfd...
└── 0xd2c2a7e128e6c81b689b3b0d9e1b31a4f6bf8df039...
```

---

```
[kronos@root ~]$ ./kronos --help
```

| comando     | acción                     |
| :---------- | :------------------------- |
| `./about`   | qué es KRONOS              |
| `./pipeline`| cómo verifica              |
| `./tree`    | estructura del monorepo    |
| `./ps`      | procesos activos           |
| `./evidence`| registros on-chain         |
| `./limits`  | qué NO es KRONOS           |
| `./test`    | prueba E2E en 2 minutos    |

---

```
[kronos@root ~]$ ./kronos --limits
```

**▸ KRONOS NO ES**

```
[❌] App con login
[❌] SaaS con servidor
[❌] Certificación ISO acreditada
[❌] NFT o criptomoneda
[❌] S.A. de C.V. constituida
[❌] Proyecto con clientes pagando
```

**▸ KRONOS SÍ ES**

```
[✓✓✓] Protocolo local-first
[✓✓✓] Pipeline E2E verificado
[✓✓✓] Monorepo con apps y packages
[✓✓✓] Doc maestro portable
[✓✓✓] Conformidad NOM-151 documentada
[✓✓✓] Diseño con fondo movimiento
```

---

```
[kronos@root ~]$ ./kronos --comandos
```

**Comandos del monorepo:**

```bash
pnpm install          # Instalar todo
pnpm dev              # Desarrollo (web + docs)
pnpm build            # Build producción
pnpm test             # Tests
pnpm lint             # Linter
```

---

```
[kronos@root ~]$ ./kronos --test
```

**PRUEBA EN 2 MINUTOS:**

```
[01] ▸ abrir  https://Marcorojas17.github.io/kronos-ecosystem/
[02] ▸ verificar que carga el HUB con fondo movimiento
[03] ▸ clic en cualquier capítulo (00 al 09)
[04] ▸ confirmar que la navegación funciona
```

---

```
[kronos@root ~]$ ./kronos --contact
```

```
[▸] Fundador  · Marco Antonio Rojas Valdovinos (#000)
[▸] Firma     · DMD-33 ●_○ S.A. DE C.V.
[▸] Email     · contacto@kronos3hash.online
[▸] Ubicación · Toluca / Lerma · Estado de México
[▸] Repo      · github.com/Marcorojas17/kronos-ecosystem
[▸] Pages     · marcorojas17.github.io/kronos-ecosystem
```

---

```
[kronos@root ~]$ echo $?
```

```
0
```

> `[OK]` El repo no es basura. Es prueba.

---

<div align="center">

```
○_● · ◢◤◥◣ · ◥◣◢◤
51% HUMANO · 49% IA · 100% REAL
```

<sub>_"El repo no es basura. Es prueba."_</sub>
<sub>_"El sistema no decide quién cobra. Solo prueba quién originó."_</sub>

```
┌─[ EOF ]─────────────────────────────────────────────┐
│ KRONOS ECOSYSTEM v20.1 · DMD-33 · Toluca 2099       │
└─────────────────────────────────────────────────────┘
```

</div>