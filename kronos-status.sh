#!/data/data/com.termux/files/usr/bin/bash
# KRONOS · Status Reporter · Termux edition
set -uo pipefail

RED=$(tput setaf 1 2>/dev/null || echo "")
GREEN=$(tput setaf 2 2>/dev/null || echo "")
YELLOW=$(tput setaf 3 2>/dev/null || echo "")
CYAN=$(tput setaf 6 2>/dev/null || echo "")
BOLD=$(tput bold 2>/dev/null || echo "")
DIM=$(tput dim 2>/dev/null || echo "")
RESET=$(tput sgr0 2>/dev/null || echo "")

DOT_OK="${GREEN}*${RESET}"
DOT_WARN="${YELLOW}*${RESET}"
DOT_FAIL="${RED}*${RESET}"
DOT_INFO="${CYAN}*${RESET}"

PASS=0; WARN=0; FAIL=0

ok()   { printf "  %s %-38s %s\n" "$DOT_OK"   "$1" "${GREEN}OK${RESET}";   PASS=$((PASS+1)); }
warn() { printf "  %s %-38s %s\n" "$DOT_WARN" "$1" "${YELLOW}WARN${RESET}"; WARN=$((WARN+1)); }
fail() { printf "  %s %-38s %s\n" "$DOT_FAIL" "$1" "${RED}FAIL${RESET}";   FAIL=$((FAIL+1)); }
info() { printf "  %s %-38s %s\n" "$DOT_INFO" "$1" "${CYAN}INFO${RESET}"; }
section() { printf "\n${BOLD}${YELLOW}>> %s${RESET}\n" "$1"; }

section "Entorno"
for bin in bash git openssl node python3 curl; do
  if command -v "$bin" >/dev/null 2>&1; then ok "$bin"; else warn "$bin"; fi
done

section "Estructura del repositorio"
for dir in legado cimiento identidad modulos orquestacion operacion cierre certificacion gobernanza agentes docs/CIUDAD .kronos; do
  if [ -d "$dir" ]; then ok "$dir/"; else fail "$dir/"; fi
done

section "Documentos fundacionales"
for f in CONSTITUCION DERECHOS CONVIVENCIA CIUDADANOS MONEDA AUDITORIA-IA GUIA-AUDITOR; do
  if [ -f "docs/CIUDAD/$f.md" ]; then ok "$f.md"; else fail "$f.md"; fi
done

section "Auto-firma criptografica"
if [ -f ".kronos/author.pub" ]; then ok "Llave publica"; else fail "Llave publica"; fi
if [ -f ".kronos/README.sig" ]; then
  ok "Firma del README"
  if [ -f "README.md" ] && openssl pkeyutl -verify -pubin -inkey .kronos/author.pub -rawin -in README.md -sigfile .kronos/README.sig >/dev/null 2>&1; then
    ok "Verificacion OpenSSL"
  else
    fail "Verificacion OpenSSL"
  fi
else
  warn "Firma del README (pendiente)"
fi

section "Integridad del README"
if [ -f "README.md" ]; then
  hash=$(sha256sum README.md | cut -d' ' -f1)
  info "SHA-256: ${hash:0:16}..."
else
  fail "README.md"
fi

section "Componentes funcionales"
for f in \
  "cimiento/cripto-core/cripto-core.js:Cripto core" \
  "cimiento/storage-local/db.js:Storage local" \
  "cimiento/anclaje-ethereum/anchor.js:Anclaje Ethereum" \
  "agentes/tonal-notario/index.html:Notario (Tonal)" \
  "certificacion/verificador-publico/index.html:Verificador publico" \
  "agentes/agente-base.js:Motor base agentes"; do
  path="${f%%:*}"; name="${f##*:}"
  if [ -f "$path" ]; then ok "$name"; else warn "$name"; fi
done

section "Tests y auditoria"
if [ -d "tests" ] || [ -d "test" ]; then ok "Directorio de tests"; else fail "Tests automatizados"; fi
if [ -f ".github/workflows/ci.yml" ]; then ok "CI (GitHub Actions)"; else warn "CI no configurado"; fi
if [ -f "AUDIT.md" ]; then ok "Auditoria externa"; else fail "Auditoria externa"; fi

section "Resumen"
printf "  %s OK     %s%d\n"   "$DOT_OK"   "$GREEN"  "$PASS"
printf "  %s WARN   %s%d\n"   "$DOT_WARN" "$YELLOW" "$WARN"
printf "  %s FAIL   %s%d\n"   "$DOT_FAIL" "$RED"    "$FAIL"
printf "\n"
if [ "$FAIL" -eq 0 ] && [ "$WARN" -eq 0 ]; then
  printf "  ${GREEN}${BOLD}Estado: LISTO${RESET}\n\n"
elif [ "$FAIL" -eq 0 ]; then
  printf "  ${YELLOW}${BOLD}Estado: FUNCIONAL CON ADVERTENCIAS${RESET}\n\n"
elif [ "$FAIL" -le 5 ]; then
  printf "  ${YELLOW}${BOLD}Estado: PRE-ALPHA${RESET}\n\n"
else
  printf "  ${RED}${BOLD}Estado: NO APTO PARA PRODUCCION${RESET}\n\n"
fi
