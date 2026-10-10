/**
 * KRONOS 28 - Dashboard de Observación
 * Creador: Marco Antonio Rojas Valdovinos (#000)
 * Firma: DMD-33
 */

'use client';

import { useState } from 'react';

const ESTADOS = [
  { id: 0, nombre: 'CREADO',     color: 'text-gray-400',   bg: 'bg-gray-800' },
  { id: 1, nombre: 'VALIDADO',   color: 'text-green-400',  bg: 'bg-green-950' },
  { id: 2, nombre: 'SUSPENDIDO', color: 'text-yellow-400', bg: 'bg-yellow-950' },
  { id: 3, nombre: 'REACTIVADO', color: 'text-cyan-400',   bg: 'bg-cyan-950' },
  { id: 4, nombre: 'REVOCADO',   color: 'text-red-400',    bg: 'bg-red-950' },
  { id: 5, nombre: 'PAUSADO',    color: 'text-orange-400', bg: 'bg-orange-950' },
  { id: 6, nombre: 'TRASLADADO', color: 'text-purple-400', bg: 'bg-purple-950' },
];

interface VerificacionResult {
  status: 'VERIFICADO' | 'ALTERADO' | 'NO_AUTORIZADO' | 'ERROR';
  folio?: string;
  error?: string;
  razon?: string;
}

export default function Dashboard() {
  const [folio, setFolio] = useState('');
  const [hash, setHash] = useState('');
  const [firma, setFirma] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [resultado, setResultado] = useState<VerificacionResult | null>(null);
  const [cargando, setCargando] = useState(false);

  async function verificar() {
    setCargando(true);
    setResultado(null);

    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folio, hash, firma, publicKey })
      });
      const data = await res.json();
      setResultado(data);
    } catch (e) {
      setResultado({
        status: 'ERROR',
        error: e instanceof Error ? e.message : 'Error desconocido'
      });
    } finally {
      setCargando(false);
    }
  }

  function limpiar() {
    setFolio('');
    setHash('');
    setFirma('');
    setPublicKey('');
    setResultado(null);
  }

  return (
    <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">Dashboard de Observación</h1>
        <p className="text-gray-400 mb-8">
          Verificación local de folios con hash SHA-256 y firma Ed25519.
        </p>

        {/* Estados posibles */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4 text-gray-300">
            Estados posibles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {ESTADOS.map(e => (
              <div
                key={e.id}
                className={`p-4 border border-gray-700 rounded-lg ${e.bg}`}
              >
                <div className="text-xs text-gray-500 mb-1">
                  Estado {e.id}
                </div>
                <div className={`font-bold ${e.color}`}>
                  {e.nombre}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formulario de verificación */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4 text-gray-300">
            Verificar folio
          </h2>
          <div className="space-y-3">

            <div>
              <label className="block text-sm text-gray-400 mb-1">Folio</label>
              <input
                type="text"
                value={folio}
                onChange={e => setFolio(e.target.value)}
                placeholder="K28-M05-MN01-A1B2C3D4E5F6A7B8-4F9A2C1B8E3D"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Hash (64 chars hex)
              </label>
              <input
                type="text"
                value={hash}
                onChange={e => setHash(e.target.value)}
                placeholder="a1b2c3..."
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Firma Ed25519 (128 chars hex)
              </label>
              <input
                type="text"
                value={firma}
                onChange={e => setFirma(e.target.value)}
                placeholder="0a1b2c..."
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Llave pública Ed25519 (64 chars hex)
              </label>
              <input
                type="text"
                value={publicKey}
                onChange={e => setPublicKey(e.target.value)}
                placeholder="a1b2c3..."
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded font-mono text-sm"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={verificar}
                disabled={cargando || !folio || !hash || !firma || !publicKey}
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {cargando ? 'Verificando...' : 'Verificar'}
              </button>
              <button
                onClick={limpiar}
                className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800"
              >
                Limpiar
              </button>
            </div>

          </div>
        </section>

        {/* Resultado */}
        {resultado && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4 text-gray-300">Resultado</h2>
            <div
              className={`p-6 rounded-lg border ${
                resultado.status === 'VERIFICADO'
                  ? 'bg-green-950 border-green-700'
                  : resultado.status === 'ALTERADO'
                  ? 'bg-red-950 border-red-700'
                  : resultado.status === 'NO_AUTORIZADO'
                  ? 'bg-yellow-950 border-yellow-700'
                  : 'bg-gray-800 border-gray-700'
              }`}
            >
              <div className="text-2xl font-bold mb-2">
                {resultado.status}
              </div>
              {resultado.folio && (
                <div className="text-sm text-gray-400 font-mono">
                  {resultado.folio}
                </div>
              )}
              {resultado.razon && (
                <div className="text-sm text-gray-300 mt-2">
                  {resultado.razon}
                </div>
              )}
              {resultado.error && (
                <div className="text-sm text-red-300 mt-2">
                  {resultado.error}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="text-xs text-gray-600 mt-12 pt-6 border-t border-gray-800">
          © 2026 Marco Antonio Rojas Valdovinos · Fundador #000 · DMD-33
        </footer>

      </div>
    </div>
  );
}

// ============================================================
// FIN DEL ARCHIVO
// © 2026 Marco Antonio Rojas Valdovinos · DMD-33
// ============================================================