/**
 * CRONOS · tests/security/input.test.js
 * Pruebas de validación de entrada y límites.
 * Verifica que el sistema rechaza entradas malformadas o peligrosas.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDate } from '../../src/core/entities/date.js';
import { reduceDate, reduceText } from '../../src/core/rules/reduction.js';
import { simulateCoin, simulateUniform } from '../../src/quantum_simulator/index.js';

test('Seguridad · createDate rechaza fechas imposibles', () => {
  assert.throws(() => createDate('2026-13-01'), RangeError);
  assert.throws(() => createDate('2026-02-30'), RangeError);
  assert.throws(() => createDate('2026-00-10'), RangeError);
});

test('Seguridad · createDate rechaza formatos raros', () => {
  assert.throws(() => createDate('2026/09/15'), TypeError);
  assert.throws(() => createDate('15-09-2026'), TypeError);
  assert.throws(() => createDate('<script>alert(1)</script>'), TypeError);
  assert.throws(() => createDate(null), TypeError);
  assert.throws(() => createDate(undefined), TypeError);
});

test('Seguridad · reduceDate rechaza inyección de formato', () => {
  assert.throws(() => reduceDate('2026-09-15; DROP TABLE'), TypeError);
  assert.throws(() => reduceDate('2026-09-15\nmalicioso'), TypeError);
  assert.throws(() => reduceDate({}), TypeError);
});

test('Seguridad · reduceText rechaza entradas vacías o solo símbolos', () => {
  assert.throws(() => reduceText(''), TypeError);
  assert.throws(() => reduceText('  \n\t  '), TypeError);
  assert.throws(() => reduceText('!@#$%^&*()'), TypeError);
  assert.throws(() => reduceText(null), TypeError);
});

test('Seguridad · simulateCoin rechaza trials no válidos', () => {
  assert.throws(() => simulateCoin(0), TypeError);
  assert.throws(() => simulateCoin(-10), TypeError);
  assert.throws(() => simulateCoin(1.5), TypeError);
  assert.throws(() => simulateCoin('100'), TypeError);
  assert.throws(() => simulateCoin(Infinity), TypeError);
});

test('Seguridad · simulateUniform rechaza rangos inválidos', () => {
  assert.throws(() => simulateUniform(10, 5), RangeError);
  assert.throws(() => simulateUniform(5, 5), RangeError);
  assert.throws(() => simulateUniform(1, 6, 0), TypeError);
  assert.throws(() => simulateUniform(1, 6, -5), TypeError);
});

test('Seguridad · el sistema no acepta objetos como entrada', () => {
  assert.throws(() => reduceText({ toString: () => 'cronos' }), TypeError);
  assert.throws(() => createDate({ iso: '2026-09-15' }), TypeError);
});

test('Seguridad · strings extremadamente largos no rompen el sistema', () => {
  const largo = 'a'.repeat(100000);
  const resultado = reduceText(largo);
  assert.ok(resultado >= 1 && resultado <= 9);
});