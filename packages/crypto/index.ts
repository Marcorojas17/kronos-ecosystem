/**
 * KRONOS Crypto - Entry point
 * Creador: Marco Antonio Rojas Valdovinos (#000)
 * Firma: DMD-33
 * 
 * Re-exporta todas las funciones criptográficas compartidas.
 * Se importa desde apps/web y apps/docs como:
 *   import { hashSHA256, verifyEd25519 } from '@kronos/crypto';
 */

export {
  hashSHA256,
  hashObject,
  signEd25519,
  verifyEd25519,
  generateKeyPair,
  isValidHex
} from './crypto';

export {
  generarFolio,
  validarFolio
} from './folio';

export type { Folio } from './folio';

// ============================================================
// FIN DEL ARCHIVO
// © 2026 Marco Antonio Rojas Valdovinos · DMD-33
// ============================================================