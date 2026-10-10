import { CasosRegistrados } from '@/components/CasosRegistrados';
import { timelineSellosMB } from '@/lib/cronos';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="mx-auto max-w-5xl px-6 pt-20">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
          CRONOS
        </h1>
        <p className="mt-2 max-w-2xl text-zinc-600">
          Marcas temporales estructuradas. Datos, no magia.
        </p>
        <p className="mt-4 font-mono text-xs text-zinc-500">
          Timeline: {timelineSellosMB.name} · {timelineSellosMB.events.length} evento(s)
        </p>
      </header>

      <CasosRegistrados />
    </main>
  );
}