'use client';

import Image from 'next/image';

const servicios = [
  {
    titulo: 'DJ',
    descripcion: 'Música en vivo con energía, variedad y ritmo para tu evento.',
    imagen: '/images/servicios/dj.jpg',
  },
  {
    titulo: 'Barra de Tragos',
    descripcion: 'Cocktails premium preparados en vivo por bartenders expertos.',
    imagen: '/images/servicios/tragos.jpg',
  },
  {
    titulo: 'Ambientación',
    descripcion: 'Transformamos el salón según tu estilo y temática soñada.',
    imagen: '/images/servicios/ambientacion.jpg',
  },
  {
    titulo: 'Sonido e Iluminación',
    descripcion: 'Tecnología de última generación para un evento que brilla.',
    imagen: '/images/servicios/sonido.jpg',
  },
  {
    titulo: 'Catering',
    descripcion: 'Gastronomía de alta calidad adaptada a cada ocasión.',
    imagen: '/images/servicios/catering.jpg',
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          Nuestros Servicios
        </h2>
        <p className="text-zinc-400 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          Hacemos realidad cada detalle que imaginaste.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {servicios.map((s, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-2xl border border-zinc-800 shadow-lg">
            <Image
              src={s.imagen}
              alt={s.titulo}
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-700" />
            <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-title)' }}>
                {s.titulo}
              </h3>
              <p className="text-zinc-300 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                {s.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
