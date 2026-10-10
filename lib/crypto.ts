import crypto from 'crypto';

/**
 * KRONOS 28 - Funciones criptográficas reales
 * Creador: Marco Antonio Rojas Valdovinos (#000)
 * Firma: DMD-33
 * 
 * Hash: SHA-256
 * Firma: Ed25519 (RFC 8032)
 * Canonicalización: JSON simple (sin floats)
 */

// ============================================================
// 1. HASH
// ============================================================

/**
 * Genera SHA-256 hex de un string.
 * Usado para calcular el hash de un folio o un registro.
 */
export function hashSHA256(input: string): string {
  return crypto.createHash('sha256').update(input, 'utf8').digest('hex');
}

/**
 * Hashea un objeto JSON de forma determinista.
 * Ordena las claves alfabéticamente antes de hashear.
 */
export function hashObject(obj: Record<string, unknown>): string {
  const ordered = Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {} as Record<string, unknown>);

  return hashSHA256(JSON.stringify(ordered));
}

// ============================================================
// 2. FIRMA ED25519
// ============================================================

/**
 * Firma un mensaje con una llave privada Ed25519.
 * @param message Texto plano a firmar
 * @param privateKeyHex Llave privada en hex (32 bytes = 64 chars)
 * @returns Firma en hex (64 bytes = 128 chars)
 */
export function signEd25519(message: string, privateKeyHex: string): string {
  const messageBuffer = Buffer.from(message, 'utf8');
  const privateKeyBuffer = Buffer.from(privateKeyHex, 'hex');

  // Envolver la llave privada en formato PKCS8 para Node
  const pkcs8Prefix = Buffer.from('302e020100300506032b657004220420', 'hex');
  const pkcs8Key = Buffer.concat([pkcs8Prefix, privateKeyBuffer]);

  const privateKey = crypto.createPrivateKey({
    key: pkcs8Key,
    format: 'der',
    type: 'pkcs8'
  });

  const signature = crypto.sign(null, messageBuffer, privateKey);
  return signature.toString('hex');
}

/**
 * Verifica una firma Ed25519.
 * @param message Texto plano original
 * @param signatureHex Firma en hex (128 chars)
 * @param publicKeyHex Llave pública en hex (64 chars)
 * @returns true si la firma es válida
 */
export function verifyEd25519(
  message: string,
  signatureHex: string,
  publicKeyHex: string
): boolean {
  try {
    const messageBuffer = Buffer.from(message, 'utf8');
    const signatureBuffer = Buffer.from(signatureHex, 'hex');
    const publicKeyBuffer = Buffer.from(publicKeyHex, 'hex');

    // Envolver la llave pública en formato SPKI para Node
    const spkiPrefix = Buffer.from('302a300506032b6570032100', 'hex');
    const spkiKey = Buffer.concat([spkiPrefix, publicKeyBuffer]);

    const publicKey = crypto.createPublicKey({
      key: spkiKey,
      format: 'der',
      type: 'spki'
    });

    return crypto.verify(null, messageBuffer, publicKey, signatureBuffer);
  } catch {
    return false;
  }
}

// ============================================================
// 3. GENERACIÓN DE PAR DE LLAVES
// ============================================================

/**
 * Genera un par de llaves Ed25519.
 * Solo se usa una vez por agente. La privada se guarda offline.
 */
export function generateKeyPair(): {
  publicKey: string;
  privateKey: string;
} {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');

  // Extraer los bytes crudos de ambas llaves
  const publicKeyDer = publicKey.export({ type: 'spki', format: 'der' });
  const privateKeyDer = privateKey.export({ type: 'pkcs8', format: 'der' });

  // SPKI prefix = 12 bytes, PKCS8 prefix = 16 bytes
  const publicKeyHex = publicKeyDer.subarray(12).toString('hex');
  const privateKeyHex = privateKeyDer.subarray(16).toString('hex');

  return {
    publicKey: publicKeyHex,
    privateKey: privateKeyHex
  };
}

// ============================================================
// 4. UTILIDADES
// ============================================================

/**
 * Verifica que un string hex tenga el largo esperado.
 */
export function isValidHex(hex: string, expectedBytes: number): boolean {
  return /^[0-9a-fA-F]+$/.test(hex) && hex.length === expectedBytes * 2;
}

// ============================================================
// FIN DEL ARCHIVO
// © 2026 Marco Antonio Rojas Valdovinos · DMD-33
// ============================================================