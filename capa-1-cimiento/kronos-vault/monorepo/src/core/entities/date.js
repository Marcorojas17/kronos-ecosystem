/**
 * CRONOS · src/core/entities/date.js
 * ───────────────────────────────────
 * Entidad Fecha.
 * Convierte fechas a estructuras comparables y analizables.
 * NO predice acontecimientos. Solo ordena y estructura.
 */

/**
 * Construye una entidad fecha.
 * @param {string} isoDate - Fecha en formato YYYY-MM-DD
 * @param {string} [calendar] - Calendario de referencia
 * @returns {object} Entidad fecha estructurada
 */
export function createDate(isoDate, calendar = 'gregoriano') {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;

  if (typeof isoDate !== 'string' || !pattern.test(isoDate)) {
    throw new TypeError('La fecha debe estar en formato YYYY-MM-DD');
  }

  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    throw new RangeError(`Fecha inválida: ${isoDate}`);
  }

  return {
    iso: isoDate,
    calendar,
    year,
    month,
    day,
    dayOfWeek: date.getUTCDay(),
    dayOfYear: computeDayOfYear(year, month, day),
    tag: '#cultura'
  };
}

/**
 * Calcula el día del año (1-366).
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @returns {number}
 */
function computeDayOfYear(year, month, day) {
  const start = Date.UTC(year, 0, 1);
  const current = Date.UTC(year, month - 1, day);
  return Math.floor((current - start) / 86400000) + 1;
}