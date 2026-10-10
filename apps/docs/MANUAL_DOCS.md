<div align="center">

```
╔═══════════════════════════════════════════════╗
║   📋  M A N U A L  ·  D O C S                  ║
║                                               ║
║   KRONOS ECOSYSTEM · v20.1                    ║
║   Guía de construcción de la carpeta docs/    ║
╚═══════════════════════════════════════════════╝
```

</div>

---

```
[kronos@manual ~]$ cat /docs/README
```

La carpeta `docs/` contiene toda la documentación navegable
del ecosistema KRONOS. Su función es servir como **doc maestro
portable** que puedes pegar en cualquier IA para retomar contexto.

---

```
[kronos@manual ~]$ ls -la docs/
```

| archivo                          | función                    |
| :------------------------------- | :------------------------- |
| `index.md`                       | portal de docs             |
| `INSTRUCCIONES-Y-TESIS.md`       | doc maestro portable       |
| `ARBOL-NAVEGACION.md`            | mapa del repo              |
| `MANUAL_EJECUCION_PRINCIPAL.md`  | este archivo               |
| `_layouts/default.html`          | layout MD (fondo movimiento) |
| `assets/css/style.css`           | estilos compartidos        |

---

```
[kronos@manual ~]$ ./kronos --how-to-edit
```

**CÓMO EDITAR UN ARCHIVO**

```
[1] ▸ abrir el archivo en GitHub Web
[2] ▸ clic en el lápiz ✏️
[3] ▸ seleccionar TODO el contenido
[4] ▸ pegar contenido nuevo
[5] ▸ commit con mensaje
```

---

```
[kronos@manual ~]$ ./kronos --how-to-add
```

**CÓMO AÑADIR UN ARCHIVO NUEVO**

```
[1] ▸ clic en "Add file"
[2] ▸ clic en "Create new file"
[3] ▸ escribir ruta (ej: docs/nuevo.md)
[4] ▸ pegar contenido
[5] ▸ commit
```

---

```
[kronos@manual ~]$ ./kronos --rules
```

**REGLAS DE ORO (docs/)**

```
[1] ▸ Cada MD empieza con caja ASCII
[2] ▸ Cada sección es un comando ejecutado
[3] ▸ Sin mermaid pesado (móvil no renderiza)
[4] ▸ Tablas de 2 columnas máximo
[5] ▸ Cierre con `echo $?` + sello ○_●
```

---

```
[kronos@manual ~]$ echo $?
```

```
0   # manual listo
```

---

<div align="center">

```
○_● · ◢◤◥◣ · ◥◣◢◤
51% HUMANO · 49% IA · 100% REAL
```

<sub>_"El legado no se hereda. Se firma." · DMD-33_</sub>

</div>