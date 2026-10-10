import './globals.css';

export const metadata = {
  title: 'CRONOS — Casos registrados',
  description: 'Marcas temporales estructuradas y verificables.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}