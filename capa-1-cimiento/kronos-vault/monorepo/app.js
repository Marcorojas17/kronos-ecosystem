/* ============================================
   CRONOS — interacciones del sitio
   ES Module. Sin dependencias. Sin build.
   Importa el motor real desde src/api/index.js
   ============================================ */

import { Cronos } from './src/api/index.js';

// ---------- Navegación: resaltado por scroll ----------
const navLinks = document.querySelectorAll('.nav__links a');
const sections = [...navLinks]
  .map(l => document.querySelector(l.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => (l.style.color = ''));
        const active = document.querySelector(
          `.nav__links a[href="#${entry.target.id}"]`
        );
        if (active) active.style.color = 'var(--accent)';
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => navObserver.observe(s));

// ---------- Aparición progresiva: capas ----------
const layers = document.querySelectorAll('.layer');
const layerObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  },
  { threshold: 0.15 }
);

layers.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateX(-20px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, background 0.3s`;
  layerObserver.observe(el);
});

// ---------- Aparición progresiva: tarjetas y glosario ----------
const cards = document.querySelectorAll(
  '.legal-card, .glossary dt, .glossary dd'
);
const cardObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
  cardObserver.observe(el);
});

// ---------- Año dinámico ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Laboratorio ----------
const labForm = document.getElementById('lab-form');
const labOutput = document.getElementById('lab-output');

/**
 * Escapa caracteres HTML para evitar inyección.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

/**
 * Devuelve el nombre en español del día de la semana.
 * @param {number} n - 0 (domingo) a 6 (sábado)
 * @returns {string}
 */
function dayName(n) {
  return ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'][n] || '—';
}

/**
 * Renderiza el bloque HTML de una interpretación de fecha.
 * @param {object} result
 * @returns {string}
 */
function renderDateResult(result) {
  return `
    <div class="lab__result">
      <div class="lab__result-head">▸ Interpretación de fecha</div>
      <dl>
        <dt>Fecha</dt><dd>${escapeHtml(result.date.iso)}</dd>
        <dt>Año</dt><dd>${result.date.year}</dd>
        <dt>Mes</dt><dd>${result.date.month}</dd>
        <dt>Día</dt><dd>${result.date.day}</dd>
        <dt>Día de la semana</dt><dd>${dayName(result.date.dayOfWeek)}</dd>
        <dt>Día del año</dt><dd>${result.date.dayOfYear}</dd>
        <dt>Calendario</dt><dd>${escapeHtml(result.date.calendar)}</dd>
        <dt>Reducción</dt><dd class="accent">${result.reduction.value}</dd>
      </dl>
      <div class="lab__result-foot">${escapeHtml(result.disclaimer)}</div>
    </div>
  `;
}

/**
 * Renderiza el bloque HTML de una interpretación de texto.
 * @param {object} result
 * @returns {string}
 */
function renderTextResult(result) {
  return `
    <div class="lab__result">
      <div class="lab__result-head">▸ Interpretación de texto</div>
      <dl>
        <dt>Texto</dt><dd>${escapeHtml(result.original)}</dd>
        <dt>Tradición</dt><dd>${escapeHtml(result.reduction.tradition)}</dd>
        <dt>Reducción</dt><dd class="accent">${result.reduction.value}</dd>
      </dl>
      <div class="lab__result-foot">${escapeHtml(result.disclaimer)}</div>
    </div>
  `;
}

/**
 * Renderiza un bloque de error.
 * @param {string} message
 * @returns {string}
 */
function renderError(message) {
  return `
    <div class="lab__error">
      ✗ ${escapeHtml(message)}
    </div>
  `;
}

if (labForm && labOutput) {
  labForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(labForm);
    const dateValue = String(formData.get('date') || '').trim();
    const textValue = String(formData.get('text') || '').trim();

    const blocks = [];

    // Interpretar fecha
    if (dateValue) {
      try {
        blocks.push(renderDateResult(Cronos.symbolic.interpretDate(dateValue)));
      } catch (err) {
        blocks.push(renderError(`Fecha inválida: ${err.message}`));
      }
    }

    // Interpretar texto (si se proporcionó)
    if (textValue) {
      try {
        blocks.push(renderTextResult(Cronos.symbolic.interpretText(textValue)));
      } catch (err) {
        blocks.push(renderError(`Texto inválido: ${err.message}`));
      }
    }

    if (blocks.length === 0) {
      labOutput.innerHTML = renderError(
        'Introduce al menos una fecha o un texto para interpretar.'
      );
      return;
    }

    labOutput.innerHTML = blocks.join('');
  });

  labForm.addEventListener('reset', () => {
    setTimeout(() => {
      labOutput.innerHTML =
        '<p class="lab__placeholder">Los resultados aparecerán aquí.</p>';
    }, 0);
  });
}

// ---------- Marca de tiempo en consola ----------
console.log(
  '%cCRONOS%c — Sistema de Interpretación Temporal y Simbólica\n' +
  'Arquitectura filosófica y tecnológica. No predice el futuro.\n' +
  'Motor cargado: ' + Cronos.meta.name + ' v' + Cronos.meta.version,
  'color:#c9a44c;font-size:16px;letter-spacing:4px;font-weight:bold;',
  'color:#9a97ab;font-size:11px;'
);
// ---------- Línea temporal ----------
const tlTrack = document.getElementById('tl-track');
const tlFilters = document.getElementById('tl-filters');

if (tlTrack && tlFilters) {
  // Construir la línea temporal con la clase real del proyecto
  const timeline = new Cronos.timeline.Timeline(
    'Historia del Proyecto CRONOS',
    'Documentación cronológica del repositorio'
  );

  const eventosDemo = [
    { id: 'e1', iso: '2026-09-15', label: 'Concepción del proyecto',              tags: ['fundacional'] },
    { id: 'e2', iso: '2026-09-15', label: 'Documentación fundacional completa',   tags: ['fundacional'] },
    { id: 'e3', iso: '2026-09-15', label: 'Corpus simbólico poblado',             tags: ['fundacional'] },
    { id: 'e4', iso: '2026-09-15', label: 'Núcleo y motores implementados',       tags: ['código'] },
    { id: 'e5', iso: '2026-09-15', label: '40 tests activos',                     tags: ['código'] },
    { id: 'e6', iso: '2026-09-15', label: 'Capa de tiempo implementada',          tags: ['código'] },
    { id: 'e7', iso: '2026-09-15', label: 'Sitio publicado en GitHub Pages',      tags: ['sitio'] },
    { id: 'e8', iso: '2026-09-15', label: 'Laboratorio interactivo',              tags: ['sitio'] },
    { id: 'e9', iso: '2026-09-15', label: 'SEO y presentación',                   tags: ['sitio'] },
    { id: 'e10', iso: '2026-09-15', label: 'CodeQL + Push protection',            tags: ['seguridad'] },
    { id: 'e11', iso: '2026-09-15', label: 'Plantillas de Issues y PR',           tags: ['seguridad', 'fundacional'] }
  ];

  for (const e of eventosDemo) timeline.add(e);

  /**
   * Renderiza la línea temporal filtrada por etiqueta.
   * @param {string} tag - '*' para mostrar todos
   */
  function renderTimeline(tag) {
    const events = tag === '*' ? timeline.sorted() : timeline.byTag(tag);

    if (events.length === 0) {
      tlTrack.innerHTML = '<p class="timeline__empty">Sin eventos en esta categoría.</p>';
      return;
    }

    tlTrack.innerHTML = events.map(e => `
      <article class="timeline__event">
        <div class="timeline__event-date">${escapeHtml(e.iso)}</div>
        <h3 class="timeline__event-label">${escapeHtml(e.label)}</h3>
        <div class="timeline__event-tags">
          ${e.tags.map(t => `<span class="timeline__tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  // Render inicial
  renderTimeline('*');

  // Manejar filtros
  tlFilters.addEventListener('click', event => {
    const button = event.target.closest('.timeline__filter');
    if (!button) return;

    tlFilters.querySelectorAll('.timeline__filter').forEach(b =>
      b.classList.remove('is-active')
    );
    button.classList.add('is-active');
    renderTimeline(button.dataset.tag || '*');
  });
}