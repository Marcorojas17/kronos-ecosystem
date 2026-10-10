const fs=require('fs');
const path=process.argv[2]||'01-constitución/spec/rfc/rfc-001-contrato-atribucion/RFC-001.md';
try{
  const c=fs.readFileSync(path,'utf8');
  const ok=c.includes('Status:') && c.includes('Abstract');
  console.log(ok?`✅ RFC VÁLIDO: ${path}`:`❌ RFC INCOMPLETO: ${path}`);
}catch(e){console.log(`❌ NO EXISTE: ${path} - ${e.code}`);}
