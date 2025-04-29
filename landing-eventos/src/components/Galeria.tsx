'use client';

import Image from 'next/image';

const fotos = [
  '/images/galeria/img1.jpg',
  '/images/galeria/img2.jpg',
  '/images/galeria/img3.jpg',
  '/images/galeria/img4.jpg',
  '/images/galeria/img5.jpg',
  '/images/galeria/img6.jpg',
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          Galería de Momentos
        </h2>
        <p className="text-zinc-400 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          Mirá cómo se viven los eventos más inolvidables.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 max-w-6xl mx-auto">
        {fotos.map((foto, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl break-inside-avoid">
            <Image
              src={foto}
              alt={`Galería ${idx + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
