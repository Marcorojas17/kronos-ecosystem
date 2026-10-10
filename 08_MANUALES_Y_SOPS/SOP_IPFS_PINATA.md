```
╔═══════════════════════════════════════════════╗
║   📋  SOP · IPFS + PINATA                     ║
║   Creador: Marco Antonio Rojas Valdovinos     ║
║   Cómo subir arte a IPFS gratis (1 GB free)   ║
╚═══════════════════════════════════════════════╝
```

---

```
[kronos@08 ~]$ whoami
```

```
[▸] Creador  · Marco Antonio Rojas Valdovinos (#000)
[▸] Firma    · DMD-33 ●_○ S.A. DE C.V.
```

---

```
[kronos@08 ~]$ ./kronos --proposito
```

Subir las **24 obras** de KRONOS CERTIFICATE a IPFS para obtener hashes permanentes y descentralizados.

---

```
[kronos@08 ~]$ ./kronos --pasos
```

**PASO 1 · Crear cuenta**

```
[1] ▸ Ir a pinata.cloud
[2] ▸ Sign up free
[3] ▸ Verificar email
```

**PASO 2 · Generar API Key**

```
[1] ▸ Ir a API Keys
[2] ▸ New Key
[3] ▸ Permisos: pinFileToIPFS
[4] ▸ Guardar en GitHub Secrets como PINATA_API_KEY
```

**PASO 3 · Subir cada obra**

```
[1] ▸ Pin Manager → Upload
[2] ▸ Seleccionar archivo (OBRA_XX.png)
[3] ▸ Nombre: OBRA_XX_Kronos_Certificate
[4] ▸ Upload
[5] ▸ Copiar el CID generado
```

**PASO 4 · Actualizar MANIFEST**

```
[1] ▸ Abrir MANIFEST.json
[2] ▸ Reemplazar "Pendiente" con el CID
[3] ▸ Commit
```

**PASO 5 · Verificar**

```
[1] ▸ Abrir: https://gateway.pinata.cloud/ipfs/CID
[2] ▸ Si carga la obra → ✅ Éxito
```

---

```
[kronos@08 ~]$ ./kronos --limites-free-tier
```

```
[▸] Almacenamiento: 1 GB
[▸] Peticiones: 100,000/mes
[▸] Pinning: ilimitado
[▸] Gateways: pinata.cloud
[▸] Costo: $0.00 USD
```

**Suficiente para las 24 obras** (si cada una pesa <40 MB).

---

```
[kronos@08 ~]$ echo $?
0   # SOP IPFS Pinata · Marco Antonio Rojas Valdovinos
```

---

<div align="center">

`○_● · ◢◤◥◣ · ◥◣◢◤`

<sub>© 2026 Marco Antonio Rojas Valdovinos · Fundador #000</sub>

<sub>_"El legado no se hereda. Se firma." · DMD-33_</sub>

</div>