'use client';

const testimonios = [
  {
    nombre: 'María Gómez',
    evento: 'Boda',
    mensaje: 'Fue el día más especial de nuestras vidas, todo estuvo perfecto gracias a ustedes.',
  },
  {
    nombre: 'Julián Torres',
    evento: 'Evento Corporativo',
    mensaje: 'La organización fue impecable, y los detalles marcaron la diferencia.',
  },
  {
    nombre: 'Valeria Méndez',
    evento: 'Cumpleaños de 15',
    mensaje: 'Mi hija vivió una noche mágica. Gracias por hacer realidad su sueño.',
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          Testimonios
        </h2>
        <p className="text-zinc-400 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          Historias reales de eventos inolvidables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonios.map((t, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition-transform duration-500">
            <p className="italic text-zinc-300 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              “{t.mensaje}”
            </p>
            <div className="text-lg font-bold" style={{ fontFamily: 'var(--font-title)' }}>
              {t.nombre}
            </div>
            <div className="text-zinc-400 text-sm mt-1" style={{ fontFamily: 'var(--font-body)' }}>
              {t.evento}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
