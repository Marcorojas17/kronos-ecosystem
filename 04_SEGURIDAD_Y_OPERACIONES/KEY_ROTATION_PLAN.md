```
╔═══════════════════════════════════════════════╗
║   🔄  KEY ROTATION PLAN                       ║
║   Creador: Marco Antonio Rojas Valdovinos     ║
║   Plan de rotación criptográfica $0           ║
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
[kronos@04 ~]$ ./kronos --objetivo
```

Rotar TODAS las llaves comprometidas y generar nuevas con **proceso air-gapped** sin pagar auditor externo.

---

```
[kronos@04 ~]$ ./kronos --pasos
```

```
[1] ▸ Apagar todos los dispositivos conectados
[2] ▸ Usar dispositivo OFFLINE (laptop sin red)
[3] ▸ Generar nuevo par Ed25519
[4] ▸ Exportar llave pública
[5] ▸ Guardar llave privada en dispositivo físico cifrado
[6] ▸ Migrar contratos inteligentes
[7] ▸ Revocar llave antigua on-chain
[8] ▸ Documentar TODO en KEY_ROTATION_LOG.json
```

---

```
[kronos@04 ~]$ ./kronos --herramientas-$0
```

| herramienta             | uso                         | costo |
| :---------------------- | :-------------------------- | :---: |
| **OpenSSL**             | Generar llaves Ed25519      | $0    |
| **GPG**                 | Cifrar archivos             | $0    |
| **iSH (Alpine)**        | Entorno air-gapped móvil    | $0    |
| **USB físico**          | Almacenamiento offline      | $0    |
| **GitHub Secrets**      | Vault de secretos CI/CD     | $0    |

---

```
[kronos@04 ~]$ ./kronos --formato-log
```

**Formato de log de rotación:**

```json
{
  "rotacion": "fundador_v3",
  "creador": "Marco Antonio Rojas Valdovinos",
  "fecha": "2026-XX-XX",
  "llave_antigua": "fundador-v2.key (COMPROMETIDA)",
  "llave_nueva": "fundador-v3.key (AIR-GAPPED)",
  "metodo": "OpenSSL Ed25519 en dispositivo offline",
  "contratos_migrados": [],
  "estado": "PENDIENTE"
}
```

---

```
[kronos@04 ~]$ echo $?
0   # plan documentado · Marco Antonio Rojas Valdovinos
```

---

<div align="center">

`○_● · ◢◤◥◣ · ◥◣◢◤`

<sub>© 2026 Marco Antonio Rojas Valdovinos · Fundador #000</sub>

<sub>_"El legado no se hereda. Se firma." · DMD-33_</sub>

</div>