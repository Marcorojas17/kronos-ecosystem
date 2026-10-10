const crypto = require('crypto');
function gen(m=5,n=1){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code=''; for(let i=0;i<6;i++) code+=chars[Math.floor(Math.random()*chars.length)];
  const base=`K28-M${String(m).padStart(2,'0')}-MN${String(n).padStart(2,'0')}-${code}`;
  const checksum=crypto.createHash('sha256').update(base).digest('hex').slice(0,4).toUpperCase();
  const folio=`${base}-${checksum}`;
  const hash=crypto.createHash('sha3-512').update(folio).digest('hex');
  const data={folio, hash, timestamp: new Date().toISOString()};
  require('fs').writeFileSync('/tmp/folio.json', JSON.stringify(data, null, 2));
  console.log(JSON.stringify(data, null, 2));
}
gen(process.argv[2]||5, process.argv[3]||1);
