/**
 * CRONOS · src/core/rules/reduction.js
 * ─────────────────────────────────────
 * Reglas de transformación entre capa simbólica y capa lógica.
 * Determinista. Puro. Sin side effects.
 */

import { reduceToDigit } from '../entities/number.js';

/**
 * Aplica la reducción teosófica a una fecha completa (YYYY-MM-DD).
 * Suma año + mes + día y reduce a dígito.
 * @param {string} isoDate
 * @returns {number} Dígito 1-9
 */
export function reduceDate(isoDate) {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!pattern.test(isoDate)) {
    throw new TypeError('Formato esperado: YYYY-MM-DD');
  }

  const [year, month, day] = isoDate.split('-').map(Number);
  const total = year + month + day;
  return reduceToDigit(total);
}

/**
 * Aplica reducción a una cadena de texto usando valor posicional (A=1, B=2...).
 * Solo contempla alfabeto latino básico. Devuelve dígito 1-9.
 * @param {string} text
 * @returns {number} Dígito 1-9
 */
export function reduceText(text) {
  if (typeof text !== 'string' || text.trim().length === 0) {
    throw new TypeError('El texto no puede estar vacío');
  }

  const normalized = text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z]/g, '');

  if (normalized.length === 0) {
    throw new TypeError('El texto no contiene letras latinas válidas');
  }

  const total = normalized
    .split('')
    .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64), 0);

  return reduceToDigit(total);
}