/**
 * CRONOS · src/core/entities/number.js
 * ─────────────────────────────────────
 * Entidad Número.
 * Estructura números como datos interpretables.
 * NO predice. NO asigna destino. Solo organiza significado cultural.
 */

/**
 * Construye una entidad número.
 * @param {number} value - Valor numérico bruto
 * @param {string} [tradition] - Tradición de origen (pitagórica, cabalística, etc.)
 * @returns {object} Entidad número estructurada
 */
export function createNumber(value, tradition = 'pitagórica') {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError('El valor debe ser un número finito');
  }

  return {
    value,
    tradition,
    absolute: Math.abs(value),
    isInteger: Number.isInteger(value),
    tag: '#cultura'
  };
}

/**
 * Reducción teosófica: suma dígitos hasta obtener un solo dígito.
 * No interpreta: solo transforma.
 * @param {number} value
 * @returns {number} Dígito entre 1 y 9
 */
export function reduceToDigit(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError('El valor debe ser un número finito');
  }

  let n = Math.abs(Math.trunc(value));

  while (n > 9) {
    n = String(n)
      .split('')
      .reduce((acc, d) => acc + Number(d), 0);
  }

  return n === 0 ? 9 : n;
}