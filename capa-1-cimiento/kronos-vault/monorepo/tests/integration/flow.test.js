/**
 * CRONOS · tests/integration/flow.test.js
 * Pruebas de integración entre motores.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Cronos } from '../../src/api/index.js';

test('API · está completa y expone los tres motores', () => {
  assert.ok(Cronos.symbolic);
  assert.ok(Cronos.pattern);
  assert.ok(Cronos.simulator);
  assert.ok(Cronos.meta);
  assert.equal(Cronos.meta.name, 'CRONOS');
  assert.equal(Cronos.meta.version, '1.0.0');
});

test('Flujo simbólico → lógico · interpretDate devuelve estructura', () => {
  const result = Cronos.symbolic.interpretDate('2026-09-15');
  assert.equal(result.date.iso, '2026-09-15');
  assert.equal(result.date.year, 2026);
  assert.equal(result.reduction.value, 7);
  assert.ok(result.disclaimer.includes('No predice'));
  assert.equal(result.tag, '#cultura');
});

test('Flujo simbólico → lógico · interpretText devuelve estructura', () => {
  const result = Cronos.symbolic.interpretText('cronos');
  assert.ok(result.reduction.value >= 1 && result.reduction.value <= 9);
  assert.ok(result.disclaimer.includes('No predice'));
  assert.equal(result.tag, '#cultura');
});

test('Flujo patrones · detecta repeticiones correctamente', () => {
  const data = [1, 2, 2, 3, 3, 3, 4];
  const result = Cronos.pattern.detectRepetitions(data);

  assert.equal(result.total, 7);
  assert.equal(result.unique, 4);
  assert.equal(result.hasRepetition, true);
  assert.equal(result.repeated[3], 3);
  assert.equal(result.repeated[2], 2);
});

test('Flujo patrones · mode devuelve valor más frecuente', () => {
  assert.deepEqual(Cronos.pattern.mode([1, 1, 2, 3, 3]), [1, 3]);
  assert.deepEqual(Cronos.pattern.mode([5, 5, 5, 5]), [5]);
});

test('Flujo simulación · simulateCoin devuelve probabilidades válidas', () => {
  const result = Cronos.simulator.simulateCoin(100);
  assert.equal(result.trials, 100);
  assert.equal(result.heads + result.tails, 100);
  assert.ok(result.probabilityHeads >= 0 && result.probabilityHeads <= 1);
  assert.ok(result.disclaimer.includes('No es hardware cuántico'));
});

test('Flujo simulación · simulateUniform distribuye valores', () => {
  const result = Cronos.simulator.simulateUniform(1, 6, 600);
  assert.equal(result.trials, 600);
  assert.equal(result.min, 1);
  assert.equal(result.max, 6);

  const total = Object.values(result.counts).reduce((a, b) => a + b, 0);
  assert.equal(total, 600);
});