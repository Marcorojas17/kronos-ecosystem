/**
 * CRONOS · tests/unit/reduction.test.js
 * Pruebas unitarias de reglas de reducción.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reduceDate, reduceText } from '../../src/core/rules/reduction.js';

test('reduceDate · formato inválido lanza error', () => {
  assert.throws(() => reduceDate('15-09-2026'), TypeError);
  assert.throws(() => reduceDate('2026/09/15'), TypeError);
  assert.throws(() => reduceDate(''), TypeError);
});

test('reduceDate · reduce fechas correctamente', () => {
  // 2026 + 9 + 15 = 2050 → 2+0+5+0 = 7
  assert.equal(reduceDate('2026-09-15'), 7);

  // 2000 + 1 + 1 = 2002 → 2+0+0+2 = 4
  assert.equal(reduceDate('2000-01-01'), 4);
});

test('reduceText · texto vacío lanza error', () => {
  assert.throws(() => reduceText(''), TypeError);
  assert.throws(() => reduceText('   '), TypeError);
});

test('reduceText · sin letras latinas lanza error', () => {
  assert.throws(() => reduceText('12345'), TypeError);
  assert.throws(() => reduceText('!@#$%'), TypeError);
});

test('reduceText · ignora acentos y mayúsculas', () => {
  const a = reduceText('cronos');
  const b = reduceText('CRÓNOS');
  const c = reduceText('Cronós');
  assert.equal(a, b);
  assert.equal(b, c);
});

test('reduceText · retorna dígito entre 1 y 9', () => {
  for (const word of ['cronos', 'alpha', 'beta', 'gamma', 'omega']) {
    const r = reduceText(word);
    assert.ok(r >= 1 && r <= 9, `${word} → ${r}`);
  }
});