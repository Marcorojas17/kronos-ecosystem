#!/data/data/com.termux/files/usr/bin/bash
g=$(tput setaf 2); r=$(tput setaf 1); y=$(tput setaf 3); z=$(tput sgr0)
p=0; f=0
for d in legado cimiento identidad modulos orquestacion operacion cierre certificacion gobernanza agentes docs/CIUDAD .kronos; do
  if [ -d "$d" ]; then printf "${g}*${z} %s\n" "$d"; p=$((p+1));
  else printf "${r}*${z} %s\n" "$d"; f=$((f+1)); fi
done
printf "\n${g}OK: %d${z}  ${r}FAIL: %d${z}\n" "$p" "$f"
