const crypto=require('crypto');
const folio=process.argv[2]||JSON.parse(require('fs').readFileSync('/tmp/folio.json','utf8')).folio;
const parts=folio.split('-');
if(parts.length!==5){console.log(JSON.stringify({estado:'NO_VALIDO'})); process.exit(0);}
const base=parts.slice(0,4).join('-');
const expected=crypto.createHash('sha256').update(base).digest('hex').slice(0,4).toUpperCase();
const actual=parts[4];
if(expected!==actual){console.log(JSON.stringify({estado:'ALTERADO', motivo:'CHECKSUM', esperado:expected, recibido:actual})); process.exit(0);}
console.log(JSON.stringify({estado:'VERIFICADO', folio, hash:crypto.createHash('sha3-512').update(folio).digest('hex')}, null, 2));
