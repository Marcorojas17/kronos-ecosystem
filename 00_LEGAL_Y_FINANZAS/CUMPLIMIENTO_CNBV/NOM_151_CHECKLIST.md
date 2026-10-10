```
╔═══════════════════════════════════════════════╗
║   📋  NOM-151 · CHECKLIST                     ║
║   Conservación de mensajes de datos           ║
╚═══════════════════════════════════════════════╝
```

> **NOTA:** NOM-151 es una NORMA MEXICANA que requiere acreditación ante SEGOB. KRONOS NO está certificado actualmente. Esta es una lista de verificación técnica, NO un certificado.

---

```
[kronos@legal ~]$ cat /nom-151/requisitos
```

| requisito | descripción                                  | estado |
| :-------: | :------------------------------------------- | :----: |
| 5.1       | Conservación de mensajes de datos            | ✅     |
| 5.2       | Integridad y disponibilidad                  | ✅     |
| 5.3       | Acreditación PSC ante SEGOB                  | ❌     |
| 5.4       | Estampado de tiempo RFC 3161                 | ✅     |
| 5.5       | Verificación de firma electrónica            | ✅     |
| 5.6       | Custodia y auditoría externa por PSC         | ❌     |

---

```
[kronos@legal ~]$ ./kronos --conformidad
```

```
[✓✓✓] Requisitos técnicos   · 4/6 CONFORME
[✗✗✗] Requisitos acreditación · 0/2 (NO CERTIFICADO)
```

---

```
[kronos@legal ~]$ echo $?
0   # checklist NOM-151
```

---

<div align="center">

`○_● · ◢◤◥◣ · ◥◣◢◤`

<sub>_"El legado no se hereda. Se firma." · DMD-33_</sub>

</div>