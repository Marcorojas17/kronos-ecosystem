import { NextResponse } from 'next/server';
<<<<<<< HEAD
import crypto from 'crypto';

function verifyFolio(folio: string){
  const parts = folio.split('-');
  if(parts.length!== 5) return {estado:'NO_VALIDO', motivo:'FORMATO'};
  const base = parts.slice(0,4).join('-');
  const expected = crypto.createHash('sha256').update(base).digest('hex').slice(0,4).toUpperCase();
  const actual = parts[4];
  if(expected!== actual) return {estado:'ALTERADO', motivo:'CHECKSUM', esperado:expected, recibido:actual};
  return {
    estado:'VERIFICADO',
    folio,
    hash: crypto.createHash('sha3-512').update(folio).digest('hex'),
    timestamp: new Date().toISOString(),
    rfc: 'RFC-001 v0.1.0',
    autores: ['Marco Antonio Rojas Valdovinos (51%)','Meta AI (49%)']
  };
}

export async function POST(req: Request){
  const {folio} = await req.json();
  if(!folio) return NextResponse.json({error:'folio requerido'}, {status:400});
  const result = verifyFolio(folio);
  return NextResponse.json(result);
}

export async function GET(){
  return NextResponse.json({status:'KRONOS API ONLINE', genesis:'K28-M05-MN01-YHDRYH-92CE - VERIFICADO'});
}
=======
import { hashSHA256, verifyEd25519, isValidHex } from '@/lib/crypto';
import { validarFolio } from '@/lib/folio';

/**
 * KRONOS 28 - API de verificación REAL
 * Creador: Marco Antonio Rojas Valdovinos (#000)
 * Firma: DMD-33
 * 
 * POST /api/verify
 * Body: { folio, hash, firma, publicKey }
 * 
 * Respuesta:
 *   { status: 'VERIFICADO' }     - todo OK
 *   { status: 'ALTERADO' }        - hash no coincide
 *   { status: 'NO_AUTORIZADO' }   - firma inválida
 *   { status: 'ERROR',: '' } - input inválido
 */

interface VerifyRequest {
  folio: string;
  hash: string;
  firma: string;
  publicKey: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as VerifyRequest;
    const { folio, hash, firma, publicKey } = body;

    // 1. Validar input
    if (!folio || !hash || !firma || !publicKey) {
      return NextResponse.json(
        { status: 'ERROR', error: 'Faltan campos: folio, hash, firma, publicKey' },
        { status: 400 }
      );
    }

    if (!isValidHex(firma, 64)) {
      return NextResponse.json(
        { status: 'ERROR', error: 'Firma debe ser 64 bytes en hex (128 chars)' },
        { status: 400 }
      );
    }

    if (!isValidHex(publicKey, 32)) {
      return NextResponse.json(
        { status: 'ERROR', error: 'PublicKey debe ser 32 bytes en hex (64 chars)' },
        { status: 400 }
      );
    }

    // 2. Validar formato del folio
    const folioCheck = validarFolio(folio);
    if (!folioCheck.valido) {
      return NextResponse.json(
        { status: 'ALTERADO', error: folioCheck.error },
        { status: 200 }
      );
    }

    // 3. Recalcular hash del folio
    const hashRecalculado = hashSHA256(folio);

    if (hashRecalculado !== hash) {
      return NextResponse.json({
        status: 'ALTERADO',
        hash_esperado: hashRecalculado,
        hash_recibido: hash
      });
    }

    // 4. Verificar firma Ed25519
    const firmaValida = verifyEd25519(hash, firma, publicKey);

    if (!firmaValida) {
      return NextResponse.json({
        status: 'NO_AUTORIZADO',
        razon: 'Firma Ed25519 inválida'
      });
    }

    // 5. Todo OK
    return NextResponse.json({
      status: 'VERIFICADO',
      folio,
      hash,
      publicKey,
      verificado_en: new Date().toISOString()
    });
  } catch (e) {
    return NextResponse.json(
      {
        status: 'ERROR',
        error: e instanceof Error ? e.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}

// ============================================================
// FIN DEL ARCHIVO
// © 2026 Marco Antonio Rojas Valdovinos · DMD-33
// ============================================================
>>>>>>> 9020ed136b504c4a9046fc29e65fe20a9758ca79
