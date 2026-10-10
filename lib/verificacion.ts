import crypto from 'crypto';
export function verificar(folio: string){
  const parts = folio.split('-');
  const base = parts.slice(0,4).join('-');
  const expected = crypto.createHash('sha256').update(base).digest('hex').slice(0,4).toUpperCase();
  return expected === parts[4]? 'VERIFICADO' : 'ALTERADO';
}
