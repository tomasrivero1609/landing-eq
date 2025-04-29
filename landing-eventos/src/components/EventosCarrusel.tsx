'use client';

const eventos = [
  'Boda',
  'Quince años',
  'Empresarial',
  'Bautismo',
  'Cumpleaños',
  'Cena Show',
  'Reunión',
  'Comunión',
  'Primer Año',
  'Parteen',
];

export default function EventosCarrusel() {
  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-white text-xl font-semibold tracking-wider flex gap-10 px-6">
        {eventos.map((evento, idx) => (
          <span key={idx} className="inline-block text-zinc-300 hover:text-white transition">
            {evento}
          </span>
        ))}
      </div>
    </section>
  );
}
