export type CasoRegistrado = {
  id: string;
  codigo: string;
  emisor: string;
  timestamp: string;
  sello: string;
  tipo: string;
  verificable: boolean;
  fuente?: string;
  timezone?: string;
};

export const casosRegistrados: CasoRegistrado[] = [
  {
    id: 'MB-2099-M045',
    codigo: '04-11-15-22-35-43',
    emisor: 'MV--2099EMI-0435',
    timestamp: '2026-07-22T19:19:00',
    sello: '19:19',
    tipo: 'marca temporal estructurada',
    verificable: true,
    fuente: 'Marco Valdovinos',
    timezone: 'America/Mexico_City',
  },
];