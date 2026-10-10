/**
 * CRONOS · src/pattern_engine/index.js
 * ──────────────────────────────────────
 * Motor de patrones: encuentra relaciones y coincidencias en los datos.
 * NO interpreta. NO predice. Solo detecta repeticiones estructurales.
 */

/**
 * Cuenta la frecuencia de cada valor en una lista.
 * @param {Array<number|string>} values
 * @returns {Map<any, number>}
 */
export function frequency(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('Se espera un arreglo');
  }

  const map = new Map();
  for (const value of values) {
    map.set(value, (map.get(value) || 0) + 1);
  }
  return map;
}

/**
 * Encuentra el valor más repetido (o valores, si hay empate).
 * @param {Array<number|string>} values
 * @returns {Array<any>} Valor(es) más frecuente(s)
 */
export function mode(values) {
  if (!Array.isArray(values) || values.length === 0) {
    return [];
  }

  const freq = frequency(values);
  let max = 0;
  for (const count of freq.values()) {
    if (count > max) max = count;
  }

  const result = [];
  for (const [value, count] of freq.entries()) {
    if (count === max) result.push(value);
  }
  return result;
}

/**
 * Detecta repeticiones en una secuencia.
 * Devuelve los valores repetidos y cuántas veces.
 * @param {Array<number|string>} values
 * @returns {object}
 */
export function detectRepetitions(values) {
  const freq = frequency(values);
  const repeated = {};

  for (const [value, count] of freq.entries()) {
    if (count > 1) repeated[value] = count;
  }

  return {
    total: values.length,
    unique: freq.size,
    repeated,
    hasRepetition: Object.keys(repeated).length > 0,
    tag: '#estructura'
  };
}