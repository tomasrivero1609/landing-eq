'use client';

import {
  Heart,
  PartyPopper,
  Calendar,
  Utensils,
  Building2,
  Baby,
  BookOpen,
  Users2,
  Smile,
  Star,
} from 'lucide-react';

const eventos = [
  { nombre: 'Boda', icono: <Heart size={20} /> },
  { nombre: 'Quince años', icono: <Star size={20} /> },
  { nombre: 'Cumpleaños', icono: <Smile size={20} /> },
  { nombre: 'Cena Show', icono: <Utensils size={20} /> },
  { nombre: 'Empresarial', icono: <Building2 size={20} /> },
  { nombre: 'Bautismo', icono: <Baby size={20} /> },
  { nombre: 'Comunión', icono: <BookOpen size={20} /> },
  { nombre: 'Reunión', icono: <Users2 size={20} /> },
  { nombre: 'Primer Año', icono: <Calendar size={20} /> },
  { nombre: 'Parteen', icono: <PartyPopper size={20} /> },
];

export default function TiposDeEventos() {
  return (
    <section id='tipos' className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          Tipos de Eventos
        </h2>
        <p className="text-zinc-400 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          Un espacio versátil para cada ocasión especial.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {eventos.map((evento, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-3 p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-white hover:text-white transition duration-300"
          >
            <div className="text-white">{evento.icono}</div>
            <p className="text-sm font-medium text-zinc-300" style={{ fontFamily: 'var(--font-body)' }}>
              {evento.nombre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
