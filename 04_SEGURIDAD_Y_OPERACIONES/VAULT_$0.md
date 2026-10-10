```
╔═══════════════════════════════════════════════╗
║   🔒  VAULT $0 · GITHUB SECRETS               ║
║   Creador: Marco Antonio Rojas Valdovinos     ║
║   Cómo guardar secretos sin pagar Vault       ║
╚═══════════════════════════════════════════════╝
```

---

```
[kronos@04 ~]$ whoami
```

```
[▸] Creador  · Marco Antonio Rojas Valdovinos (#000)
[▸] Firma    · DMD-33 ●_○ S.A. DE C.V.
```

---

```
[kronos@04 ~]$ ./kronos --por-que-no-plaintext
```

**Secretos en texto plano = suicidio de seguridad.**

```
[🔴] Cualquiera con acceso al repo los ve
[🔴] GitHub escanea y bloquea push si los detecta
[🔴] Bots automatizados escanean repos públicos
[🔴] Riesgo de robo inmediato
```

---

```
[kronos@04 ~]$ ./kronos --solucion-gratis
```

**GitHub Secrets (free tier):**

| feature                     | valor         |
| :-------------------------- | :------------ |
| **Cifrado**                 | AES-256-GCM   |
| **Almacenamiento**          | Cifrado at-rest |
| **Acceso**                  | Solo workflows |
| **Rotación**                | Manual        |
| **Costo**                   | $0.00 USD     |

---

```
[kronos@04 ~]$ ./kronos --como-usarlo
```

**Pasos para usar GitHub Secrets:**

```
[1] ▸ Ir a Settings → Secrets and variables → Actions
[2] ▸ Clic en "New repository secret"
[3] ▸ Nombre: KRONOS_VAULT_KEY
[4] ▸ Valor: (pegar llave privada)
[5] ▸ Guardar
[6] ▸ Usar en workflow: ${{ secrets.KRONOS_VAULT_KEY }}
```

---

```
[kronos@04 ~]$ ./kronos --reglas
```

```
[1] ▸ NUNCA commitear archivos .env
[2] ▸ NUNCA subir llaves privadas al repo
[3] ▸ NUNCA hardcodear tokens en código
[4] ▸ SIEMPRE usar GitHub Secrets
[5] ▸ SIEMPRE rotar si se compromete
```

---

```
[kronos@04 ~]$ echo $?
0   # vault $0 documentado · Marco Antonio Rojas Valdovinos
```

---

<div align="center">

`○_● · ◢◤◥◣ · ◥◣◢◤`

<sub>© 2026 Marco Antonio Rojas Valdovinos · Fundador #000</sub>

<sub>_"El legado no se hereda. Se firma." · DMD-33_</sub>

</div>