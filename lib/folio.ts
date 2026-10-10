import crypto from 'crypto';
import { hashSHA256 } from './crypto';

/**
 * KRONOS 28 - Generador de folios
 * Creador: Marco Antonio Rojas Valdovinos (#000)
 * Firma: DMD-33
 * 
 * Formato: K28-M{XX}-MN{YY}-{16hex}-{12hex}
 * 
 * Ejemplo: K28-M05-MN01-A1B2C3D4E5F6A7B8-4F9A2C1B8E3D
 */

export interface Folio {
  folio_fisico: string;
  hash_sha256: string;
  metadata: {
    mansion: number;
    meridiano: number;
    entropia: string;
    creado: string;
  };
}

/**
 * Genera un folio K28 determinista.
 * @param mansionId 1-64
 * @param meridianoId 1-12
 * @returns Folio completo con hash SHA-256
 */
export function generarFolio(
  mansionId: number,
  meridianoId: number
): Folio {
  if (mansionId < 1 || mansionId > 64) {
    throw new Error('ID de Mansión inválido (1-64)');
  }
  if (meridianoId < 1 || meridianoId > 12) {
    throw new Error('ID de Meridiano inválido (1-12)');
  }

  // 1. Entropía criptográfica real (no simulada)
  const entropia = crypto.randomBytes(8).toString('hex').toUpperCase();

  // 2. Base del folio
  const mansionStr = mansionId.toString().padStart(2, '0');
  const meridianoStr = meridianoId.toString().padStart(2, '0');
  const base = `K28-M${meridianoStr}-MN${mansionStr}-${entropia}`;

  // 3. Checksum de 12 caracteres (para folio físico)
  const checksum = hashSHA256(base).substring(0, 12).toUpperCase();

  // 4. Folio final
  const folio_fisico = `${base}-${checksum}`;

  // 5. Hash SHA-256 del folio (para blockchain)
  const hash_sha256 = hashSHA256(folio_fisico);

  return {
    folio_fisico,
    hash_sha256,
    metadata: {
      mansion: mansionId,
      meridiano: meridianoId,
      entropia,
      creado: new Date().toISOString()
    }
  };
}

/**
 * Valida un folio existente.
 * Verifica formato y checksum interno.
 */
export function validarFolio(folio: string): {
  valido: boolean;
  error?: string;
} {
  // Formato: K28-M{XX}-MN{YY}-{16hex}-{12hex}
  const regex = /^K28-M(\d{2})-MN(\d{2})-([0-9A-F]{16})-([0-9A-F]{12})$/;
  const match = folio.match(regex);

  if (!match) {
    return { valido: false, error: 'Formato inválido' };
  }

  const meridiano = parseInt(match[1], 10);
  const mansion = parseInt(match[2], 10);

  if (m erroransion < 1 || mansion > 64) {
    return { valido: false, error: 'Mansión fuera de rango' };
  }
  if (meridiano < 1 || meridiano > 12) {
    return { valido: false, error: 'Meridiano fuera de rango' };
  }

  // Recalcular checksum
  const base = `K28-M${match[1]}-MN${match[2]}-${match[3]}`;
  const checksumEsperado = hashSHA256(base).substring(0, 12).toUpperCase();

  if (checksumEsperado !== match[4]) {
    return { valido: false, error: 'Checksum incorrecto' };
  }

  return { valido: true };
}

// ============================================================
// FIN DEL ARCHIVO
// © 2026 Marco Antonio Rojas Valdovinos · DMD-33
// ============================================================