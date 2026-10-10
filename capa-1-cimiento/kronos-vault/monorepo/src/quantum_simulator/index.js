/**
 * CRONOS · src/quantum_simulator/index.js
 * ─────────────────────────────────────────
 * Simulador probabilístico. Matemática aplicada.
 *
 * ⚠️ NO es hardware cuántico real.
 * ⚠️ NO implica acceso a computación cuántica física.
 * Simula distribuciones probabilísticas con Monte Carlo.
 */

/**
 * Simula N experimentos de lanzamiento de moneda (Bernoulli con p=0.5).
 * @param {number} trials - Número de ensayos
 * @returns {object} Distribución observada
 */
export function simulateCoin(trials = 1000) {
  if (!Number.isInteger(trials) || trials <= 0) {
    throw new TypeError('trials debe ser un entero positivo');
  }

  let heads = 0;
  for (let i = 0; i < trials; i++) {
    if (Math.random() < 0.5) heads++;
  }

  const tails = trials - heads;
  return {
    trials,
    heads,
    tails,
    probabilityHeads: heads / trials,
    probabilityTails: tails / trials,
    disclaimer: 'Simulación matemática. No es hardware cuántico.',
    tag: '#simulacion'
  };
}

/**
 * Simula una distribución uniforme sobre un rango entero.
 * @param {number} min
 * @param {number} max
 * @param {number} trials
 * @returns {object}
 */
export function simulateUniform(min = 1, max = 9, trials = 1000) {
  if (min >= max) {
    throw new RangeError('min debe ser menor que max');
  }
  if (!Number.isInteger(trials) || trials <= 0) {
    throw new TypeError('trials debe ser un entero positivo');
  }

  const counts = {};
  for (let i = min; i <= max; i++) counts[i] = 0;

  for (let i = 0; i < trials; i++) {
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    counts[value]++;
  }

  return {
    min,
    max,
    trials,
    counts,
    expectedPerValue: trials / (max - min + 1),
    disclaimer: 'Simulación matemática. No predice nada real.',
    tag: '#simulacion'
  };
}