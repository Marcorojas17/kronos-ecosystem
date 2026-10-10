#!/bin/bash
# ═══════════════════════════════════════════
#  🔍 DIAGNÓSTICO KRONOS · Pre-commit check
# ═══════════════════════════════════════════
echo "🔍 Iniciando diagnóstico Kronos..."
echo ""

ERRORES=0

# 1. Python sintaxis
echo "▶ Verificando sintaxis Python..."
for f in $(find . -name "*.py" -not -path "*/.git/*"); do
    if ! python3 -m py_compile "$f" 2>/dev/null; then
        echo "  ❌ $f"
        ERRORES=$((ERRORES+1))
    fi
done
[ $ERRORES -eq 0 ] && echo "  ✅ Todo OK"

# 2. JSON válidos
echo ""
echo "▶ Verificando JSON..."
JSON_ERR=0
for f in $(find . -name "*.json" -not -path "*/.git/*" -not -path "*/node_modules/*"); do
    if ! python3 -m json.tool "$f" >/dev/null 2>&1; then
        echo "  ❌ $f"
        JSON_ERR=$((JSON_ERR+1))
    fi
done
[ $JSON_ERR -eq 0 ] && echo "  ✅ Todo OK"

# 3. Secretos expuestos
echo ""
echo "▶ Buscando secretos expuestos..."
SECRETOS=$(grep -rlE "MP_ACCESS_TOKEN=|sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{20,}" . --exclude-dir=.git --exclude-dir=node_modules 2>/dev/null | grep -v ".example" | head -5)
if [ -n "$SECRETOS" ]; then
    echo "  🚨 ALERTA - Archivos con posibles secretos:"
    echo "$SECRETOS" | sed 's/^/    /'
    ERRORES=$((ERRORES+1))
else
    echo "  ✅ Sin secretos expuestos"
fi

# 4. Archivos basura
echo ""
echo "▶ Archivos basura (.bak, .tmp, .log)..."
BASURA=$(find . \( -name "*.bak" -o -name "*.tmp" -o -name "*.log" \) -not -path "*/.git/*" -not -path "*/node_modules/*" 2>/dev/null | wc -l)
echo "  Encontrados: $BASURA archivos"

# Resumen
echo ""
echo "═══════════════════════════════════════════"
if [ $ERRORES -eq 0 ]; then
    echo "  ✅ DIAGNÓSTICO LIMPIO · Listo para commit"
else
    echo "  ⚠️  $ERRORES problemas encontrados"
fi
echo "═══════════════════════════════════════════"
