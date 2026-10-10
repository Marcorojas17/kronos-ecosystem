/**
 * CRONOS · tests/unit/number.test.js
 * Pruebas unitarias de la entidad Número.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createNumber, reduceToDigit } from '../../src/core/entities/number.js';

test('createNumber · construye entidad válida', () => {
  const n = createNumber(7);
  assert.equal(n.value, 7);
  assert.equal(n.tradition, 'pitagórica');
  assert.equal(n.isInteger, true);
  assert.equal(n.tag, '#cultura');
});

test('createNumber · rechaza valores no numéricos', () => {
  assert.throws(() => createNumber('7'), TypeError);
  assert.throws(() => createNumber(NaN), TypeError);
  assert.throws(() => createNumber(Infinity), TypeError);
});

test('reduceToDigit · reduce correctamente', () => {
  assert.equal(reduceToDigit(9), 9);
  assert.equal(reduceToDigit(10), 1);
  assert.equal(reduceToDigit(19), 1);
  assert.equal(reduceToDigit(28), 1);
  assert.equal(reduceToDigit(123), 6);
  assert.equal(reduceToDigit(999), 9);
});

test('reduceToDigit · convierte 0 en 9', () => {
  assert.equal(reduceToDigit(0), 9);
});

test('reduceToDigit · maneja negativos con valor absoluto', () => {
  assert.equal(reduceToDigit(-10), 1);
  assert.equal(reduceToDigit(-28), 1);
});

test('reduceToDigit · rechaza no numéricos', () => {
  assert.throws(() => reduceToDigit('9'), TypeError);
  assert.throws(() => reduceToDigit(NaN), TypeError);
});