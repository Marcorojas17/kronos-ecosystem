```
╔═══════════════════════════════════════════════╗
║   🔑  LLAVE QUEMADA · EVIDENCIA FORENSE       ║
║   Creador: Marco Antonio Rojas Valdovinos     ║
║   Incidente: fundador-v2.key comprometida     ║
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
[kronos@04 ~]$ cat /incident/fundador-v2-key
```

```
╔═══════════════════════════════════════════════╗
║  INCIDENTE:  fundador-v2.key                  ║
║  FECHA:      2024-11-18                       ║
║  ESTADO:     COMPROMETIDA PERMANENTEMENTE     ║
║  ACCIÓN:     QUEMADA + MIGRACIÓN PENDIENTE    ║
╚═══════════════════════════════════════════════╝
```

---

```
[kronos@04 ~]$ ./kronos --historia
```

**Cronología del incidente:**

```
[2024-11-18 09:12:05] Commit a1b4c92: add fundador-v2.key
[2024-11-18 14:30:00] Detección por git-secrets
[2024-11-19 03:00:00] Migración con git filter-repo
[2024-11-19 03:15:00] Regla preservación activa
[2024-11-19 03:20:00] Push force a main
```

---

```
[kronos@04 ~]$ ./kronos --por-que-no-esta-muerta
```

```
[1] ▸ git filter-repo NO borra forks
[2] ▸ Cualquiera con clon previo tiene la llave
[3] ▸ Puede firmar transacciones en tu nombre
[4] ▸ Ataque de repetición posible
[5] ▸ Contratos antiguos aún la aceptan
```

---

```
[kronos@04 ~]$ ./kronos --acciones-requeridas
```

```
[🔴 CRÍTICO]
[1] ▸ Migrar TODOS los contratos a nuevas direcciones
[2] ▸ Revocar Genesis Passport #000
[3] ▸ Notificar a todos los forks
[4] ▸ Congelar contratos antiguos (pause/renounce)
[5] ▸ Rotar claves de firma
[6] ▸ Generar nuevo keypair con air-gapped process
```

---

```
[kronos@04 ~]$ echo $?
1   # 🔴 estado NO RESUELTO · Marco Antonio Rojas Valdovinos
```

---

<div align="center">

`○_● · ◢◤◥◣ · ◥◣◢◤`

<sub>© 2026 Marco Antonio Rojas Valdovinos · Fundador #000</sub>

<sub>_"El legado no se hereda. Se firma." · DMD-33_</sub>

</div>