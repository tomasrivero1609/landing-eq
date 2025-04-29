'use client';

const eventos = [
  'Boda',
  'Quince años',
  'Cumpleaños',
  'Cena Show',
  'Empresarial',
  'Bautismo',
  'Comunión',
  'Reunión',
  'Primer Año',
  'Parteen',
];

export default function TiposDeEventos() {
  return (
    <section className="py-20 bg-zinc-950 text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          Tipos de Eventos
        </h2>
        <p className="text-zinc-400 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          Adaptamos el espacio y los servicios a cada ocasión especial.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {eventos.map((evento, idx) => (
          <div
            key={idx}
            className="px-6 py-3 rounded-full border border-zinc-700 text-sm text-zinc-300 hover:text-white hover:border-white transition"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {evento}
          </div>
        ))}
      </div>
    </section>
  );
}
