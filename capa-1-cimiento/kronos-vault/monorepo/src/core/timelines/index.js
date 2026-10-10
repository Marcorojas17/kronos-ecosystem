/**
 * CRONOS · src/core/timelines/index.js
 * ─────────────────────────────────────
 * Capa IV · Tiempo.
 * Organiza eventos, ciclos y versiones en líneas temporales.
 *
 * NO predice. NO ordena por relevancia mágica. Solo estructura cronología.
 */

import { createDate } from '../entities/date.js';

/**
 * Representa un evento dentro de una línea temporal.
 */
export class Event {
  /**
   * @param {object} opts
   * @param {string} opts.id       - Identificador único del evento
   * @param {string} opts.iso      - Fecha ISO (YYYY-MM-DD)
   * @param {string} opts.label    - Etiqueta legible del evento
   * @param {string[]} [opts.tags] - Etiquetas temáticas
   * @param {object}  [opts.meta]  - Metadatos adicionales
   */
  constructor({ id, iso, label, tags = [], meta = {} } = {}) {
    if (typeof id !== 'string' || id.trim() === '') {
      throw new TypeError('Event.id debe ser una cadena no vacía');
    }
    if (typeof label !== 'string' || label.trim() === '') {
      throw new TypeError('Event.label debe ser una cadena no vacía');
    }
    if (!Array.isArray(tags)) {
      throw new TypeError('Event.tags debe ser un arreglo');
    }

    // createDate valida el ISO y lanza TypeError/RangeError si algo falla
    const date = createDate(iso);

    this.id = id;
    this.iso = date.iso;
    this.label = label.trim();
    this.tags = [...tags];
    this.meta = { ...meta };
    this.date = date;
    Object.freeze(this.tags);
  }

  /**
   * Comprueba si el evento tiene una etiqueta.
   * @param {string} tag
   * @returns {boolean}
   */
  hasTag(tag) {
    return this.tags.includes(tag);
  }

  /**
   * Serializa el evento a un objeto plano.
   * @returns {object}
   */
  toJSON() {
    return {
      id: this.id,
      iso: this.iso,
      label: this.label,
      tags: [...this.tags],
      meta: { ...this.meta }
    };
  }

  /**
   * Reconstruye un evento desde JSON.
   * @param {object} obj
   * @returns {Event}
   */
  static fromJSON(obj) {
    return new Event(obj);
  }
}

/**
 * Línea temporal: colección ordenada de eventos.
 */
export class Timeline {
  /**
   * @param {string} name         - Nombre de la línea temporal
   * @param {string} [description]
   */
  constructor(name, description = '') {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new TypeError('Timeline.name debe ser una cadena no vacía');
    }
    this.name = name.trim();
    this.description = description;
    this.events = [];
  }

  /**
   * Añade un evento. Rechaza IDs duplicados.
   * @param {Event|object} event
   * @returns {Timeline} this (encadenable)
   */
  add(event) {
    const e = event instanceof Event ? event : new Event(event);

    if (this.events.some(x => x.id === e.id)) {
      throw new Error(`Ya existe un evento con id "${e.id}"`);
    }

    this.events.push(e);
    return this;
  }

  /**
   * Elimina un evento por id.
   * @param {string} id
   * @returns {boolean} true si se eliminó
   */
  remove(id) {
    const before = this.events.length;
    this.events = this.events.filter(e => e.id !== id);
    return this.events.length < before;
  }

  /**
   * Obtiene un evento por id.
   * @param {string} id
   * @returns {Event|undefined}
   */
  get(id) {
    return this.events.find(e => e.id === id);
  }

  /**
   * Número de eventos.
   * @returns {number}
   */
  get size() {
    return this.events.length;
  }

  /**
   * Devuelve una copia ordenada por fecha ascendente.
   * @returns {Event[]}
   */
  sorted() {
    return [...this.events].sort((a, b) => a.iso.localeCompare(b.iso));
  }

  /**
   * Filtra eventos por etiqueta.
   * @param {string} tag
   * @returns {Event[]}
   */
  byTag(tag) {
    return this.events.filter(e => e.hasTag(tag));
  }

  /**
   * Filtra eventos en un rango ISO (inclusive en ambos extremos).
   * @param {string} fromIso
   * @param {string} toIso
   * @returns {Event[]}
   */
  range(fromIso, toIso) {
    const from = createDate(fromIso).iso;
    const to = createDate(toIso).iso;
    if (from > to) {
      throw new RangeError('fromIso debe ser anterior o igual a toIso');
    }
    return this.sorted().filter(e => e.iso >= from && e.iso <= to);
  }

  /**
   * Serializa la línea temporal a un objeto plano.
   * @returns {object}
   */
  toJSON() {
    return {
      name: this.name,
      description: this.description,
      events: this.sorted().map(e => e.toJSON())
    };
  }

  /**
   * Reconstruye una línea temporal desde JSON.
   * @param {object} obj
   * @returns {Timeline}
   */
  static fromJSON(obj) {
    if (!obj || typeof obj !== 'object') {
      throw new TypeError('Timeline.fromJSON requiere un objeto');
    }
    const tl = new Timeline(obj.name, obj.description || '');
    const events = Array.isArray(obj.events) ? obj.events : [];
    for (const raw of events) {
      tl.add(raw);
    }
    return tl;
  }
}