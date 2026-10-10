/**
 * KRONOS 28 - Home honesto
 * Creador: Marco Antonio Rojas Valdovinos (#000)
 * Firma: DMD-33
 */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white">
      <div className="max-w-2xl w-full text-center">

        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          KRONOS 28
        </h1>

        <p className="text-lg text-gray-400 mb-10">
          Protocolo de folios con hash SHA-256 y firma Ed25519.
          Verificación local-first sin servidor central.
        </p>

        {/* Estado real del proyecto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm">
          <div className="p-4 border border-gray-800 rounded">
            <div className="text-gray-500 mb-1">Estado</div>
            <div className="text-yellow-500 font-bold">Pre-Alpha</div>
          </div>
          <div className="p-4 border border-gray-800 rounded">
            <div className="text-gray-500 mb-1">Contrato</div>
            <div className="text-red-500 font-bold">Pendiente</div>
          </div>
          <div className="p-4 border border-gray-800 rounded">
            <div className="text-gray-500 mb-1">Clientes</div>
            <div className="text-red-500 font-bold">0</div>
          </div>
          <div className="p-4 border border-gray-800 rounded">
            <div className="text-gray-500 mb-1">Presupuesto</div>
            <div className="text-red-500 font-bold">$11.5k USD</div>
          </div>
        </div>

        {/* Navegación */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/api/verify"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
          >
            API Verify
          </a>
        </div>

        {/* Qué es */}
        <div className="text-left text-sm text-gray-400 space-y-2 mb-10 max-w-md mx-auto">
          <p className="text-gray-300 font-bold mb-2">Qué hace:</p>
          <p>· Genera folios únicos con checksum SHA-256</p>
          <p>· Firma con Ed25519 desde el dispositivo del usuario</p>
          <p>· Registra hash en contrato EVM</p>
          <p>· Verifica sin servidor central</p>
        </div>

        {/* Qué falta */}
        <div className="text-left text-sm text-gray-400 space-y-2 mb-10 max-w-md mx-auto">
          <p className="text-gray-300 font-bold mb-2">Qué falta:</p>
          <p>· Desplegar Kronos28.sol en testnet</p>
          <p>· Conectar API verify a on-chain</p>
          <p>· Primer cliente pagando</p>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-600 mt-12">
          © 2026 Marco Antonio Rojas Valdovinos · Fundador #000 · DMD-33
        </p>

      </div>
    </main>
  );
}

// ============================================================
// FIN DEL ARCHIVO
// © 2026 Marco Antonio Rojas Valdovinos · DMD-33
// ============================================================