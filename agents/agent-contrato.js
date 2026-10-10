#!/usr/bin/env node
// agent-contrato: crea contrato de atribución
const fs = require('fs');
const contrato = {
  id: "did:kronos:agent:001",
  emisor: "did:kronos:human:marco",
  sujeto: "did:kronos:agent:meta-ai",
  autonomia: 1,
  umbral_intervencion: 0.7,
  politica_hash: "sha3-512:pending",
  timestamp: new Date().toISOString(),
  firma_emisor: "ed25519:pending-51-49"
};
fs.writeFileSync('01-constitución/spec/rfc/rfc-001-contrato-atribucion/examples/01-agente-supervisado.json', JSON.stringify(contrato, null, 2));
console.log("✅ Contrato creado: examples/01-agente-supervisado.json");
