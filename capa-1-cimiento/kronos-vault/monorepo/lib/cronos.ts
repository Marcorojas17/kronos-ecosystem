import { casosRegistrados } from '@/data/casos';

export type CronosEvent = {
  id: string;
  iso: string;
  label: string;
  tags: string[];
  meta: Record<string, string | boolean | undefined>;
};

export const timelineSellosMB = {
  name: 'Sellos MB',
  events: casosRegistrados.map<CronosEvent>((caso) => ({
    id: caso.id,
    iso: caso.timestamp,
    label: `Sello ${caso.sello}`,
    tags: ['MB', 'sello', caso.timestamp.slice(0, 4), 'CRONOS'],
    meta: {
      codigo: caso.codigo,
      emisor: caso.emisor,
      referencia: caso.id,
      timestamp: `${caso.sello} del 22 de julio 2026`,
      timezone: caso.timezone,
      verificable: caso.verificable,
    },
  })),
};