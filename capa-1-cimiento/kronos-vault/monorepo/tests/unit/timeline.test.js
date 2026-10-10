/**
 * CRONOS · tests/unit/timeline.test.js
 * Pruebas unitarias de la capa de tiempo.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Event, Timeline } from '../../src/core/timelines/index.js';

// ───────────────────────── Event ─────────────────────────

test('Event · construye correctamente', () => {
  const e = new Event({
    id: 'ev-1',
    iso: '2026-09-15',
    label: 'Lanzamiento del sitio',
    tags: ['release']
  });
  assert.equal(e.id, 'ev-1');
  assert.equal(e.iso, '2026-09-15');
  assert.equal(e.label, 'Lanzamiento del sitio');
  assert.deepEqual(e.tags, ['release']);
  assert.equal(e.hasTag('release'), true);
  assert.equal(e.hasTag('otro'), false);
});

test('Event · valida campos obligatorios', () => {
  assert.throws(() => new Event({}), TypeError);
  assert.throws(() => new Event({ id: '', iso: '2026-09-15', label: 'x' }), TypeError);
  assert.throws(() => new Event({ id: 'a', iso: '2026-09-15', label: '' }), TypeError);
  assert.throws(() => new Event({ id: 'a', iso: '2026-09-15', label: 'x', tags: 'no-array' }), TypeError);
});

test('Event · rechaza fechas inválidas', () => {
  assert.throws(() => new Event({ id: 'a', iso: '15-09-2026', label: 'x' }), TypeError);
  assert.throws(() => new Event({ id: 'a', iso: '2026-13-01', label: 'x' }), RangeError);
});

test('Event · serializa y reconstruye', () => {
  const e1 = new Event({ id: 'a', iso: '2026-01-01', label: 'inicio', tags: ['x'] });
  const json = e1.toJSON();
  const e2 = Event.fromJSON(json);
  assert.deepEqual(e1.toJSON(), e2.toJSON());
});

// ───────────────────────── Timeline ─────────────────────────

test('Timeline · construye y añade eventos', () => {
  const tl = new Timeline('Historia del proyecto');
  tl.add({ id: 'a', iso: '2026-01-01', label: 'concepción' });
  tl.add({ id: 'b', iso: '2026-09-15', label: 'publicación' });
  assert.equal(tl.size, 2);
});

test('Timeline · rechaza IDs duplicados', () => {
  const tl = new Timeline('dup');
  tl.add({ id: 'a', iso: '2026-01-01', label: 'x' });
  assert.throws(
    () => tl.add({ id: 'a', iso: '2026-02-01', label: 'y' }),
    /Ya existe/
  );
});

test('Timeline · remove() devuelve booleano', () => {
  const tl = new Timeline('t');
  tl.add({ id: 'a', iso: '2026-01-01', label: 'x' });
  assert.equal(tl.remove('a'), true);
  assert.equal(tl.remove('a'), false);
  assert.equal(tl.size, 0);
});

test('Timeline · get() encuentra el evento', () => {
  const tl = new Timeline('t');
  tl.add({ id: 'a', iso: '2026-01-01', label: 'inicio' });
  assert.equal(tl.get('a').label, 'inicio');
  assert.equal(tl.get('z'), undefined);
});

test('Timeline · sorted() ordena por fecha', () => {
  const tl = new Timeline('t');
  tl.add({ id: 'c', iso: '2026-09-15', label: 'tercero' });
  tl.add({ id: 'a', iso: '2026-01-01', label: 'primero' });
  tl.add({ id: 'b', iso: '2026-05-10', label: 'segundo' });
  const orden = tl.sorted().map(e => e.id);
  assert.deepEqual(orden, ['a', 'b', 'c']);
});

test('Timeline · byTag() filtra por etiqueta', () => {
  const tl = new Timeline('t');
  tl.add({ id: 'a', iso: '2026-01-01', label: 'x', tags: ['release'] });
  tl.add({ id: 'b', iso: '2026-02-01', label: 'y', tags: ['docs'] });
  tl.add({ id: 'c', iso: '2026-03-01', label: 'z', tags: ['release', 'docs'] });
  assert.deepEqual(tl.byTag('release').map(e => e.id), ['a', 'c']);
  assert.deepEqual(tl.byTag('docs').map(e => e.id), ['b', 'c']);
  assert.deepEqual(tl.byTag('ninguna'), []);
});

test('Timeline · range() filtra por fechas inclusive', () => {
  const tl = new Timeline('t');
  tl.add({ id: 'a', iso: '2026-01-01', label: 'x' });
  tl.add({ id: 'b', iso: '2026-06-15', label: 'y' });
  tl.add({ id: 'c', iso: '2026-12-31', label: 'z' });
  const dentro = tl.range('2026-06-01', '2026-12-01').map(e => e.id);
  assert.deepEqual(dentro, ['b']);
});

test('Timeline · range() rechaza rangos invertidos', () => {
  const tl = new Timeline('t');
  assert.throws(() => tl.range('2026-12-01', '2026-01-01'), RangeError);
});

test('Timeline · serializa y reconstruye sin pérdida', () => {
  const tl = new Timeline('demo', 'una línea temporal');
  tl.add({ id: 'a', iso: '2026-01-01', label: 'x', tags: ['r'] });
  tl.add({ id: 'b', iso: '2026-02-01', label: 'y' });

  const json = tl.toJSON();
  const tl2 = Timeline.fromJSON(json);

  assert.equal(tl2.name, 'demo');
  assert.equal(tl2.description, 'una línea temporal');
  assert.equal(tl2.size, 2);
  assert.deepEqual(tl2.sorted().map(e => e.id), ['a', 'b']);
});

test('Timeline · fromJSON requiere un objeto', () => {
  assert.throws(() => Timeline.fromJSON(null), TypeError);
  assert.throws(() => Timeline.fromJSON('nada'), TypeError);
});