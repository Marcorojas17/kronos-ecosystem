import { casosRegistrados } from '@/data/casos';

export function CasosRegistrados() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            CRONOS
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
            Casos registrados
          </h2>
        </div>
        <p className="text-sm text-zinc-500">
          {casosRegistrados.length} sello(s)
        </p>
      </div>

      <div className="grid gap-4">
        {casosRegistrados.map((caso) => (
          <article
            key={caso.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs text-zinc-500">{caso.id}</p>
                <h3 className="mt-1 text-xl font-semibold text-zinc-950">
                  Sello {caso.sello}
                </h3>
              </div>

              <span className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                {caso.verificable ? 'Verificable' : 'No verificable'}
              </span>
            </div>

            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-zinc-500">Código</dt>
                <dd className="font-mono text-zinc-950">{caso.codigo}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Emisor</dt>
                <dd className="font-mono text-zinc-950">{caso.emisor}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Timestamp</dt>
                <dd className="text-zinc-950">
                  {caso.timestamp}
                  {caso.timezone ? ` (${caso.timezone})` : ''}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Tipo</dt>
                <dd className="text-zinc-950">{caso.tipo}</dd>
              </div>
              {caso.fuente && (
                <div>
                  <dt className="text-zinc-500">Fuente</dt>
                  <dd className="text-zinc-950">{caso.fuente}</dd>
                </div>
              )}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}