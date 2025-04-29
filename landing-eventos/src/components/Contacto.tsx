'use client';

import { Send, MessageCircle } from 'lucide-react';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-zinc-950 text-white px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          Contactanos
        </h2>
        <p className="text-zinc-400 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          Consultanos fechas disponibles, presupuestos o cualquier duda que tengas.
        </p>
      </div>

      {/* Formulario */}
      <form className="space-y-6 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full p-4 rounded-xl bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-4 rounded-xl bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <textarea
          placeholder="Mensaje"
          className="w-full p-4 h-32 rounded-xl bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="flex items-center gap-2 justify-center w-full bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 transition"
        >
          <Send size={18} /> Enviar mensaje
        </button>
      </form>

      {/* Botón WhatsApp */}
      <div className="text-center mt-12">
        <a
          href="https://wa.me/59899123456"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition mt-4"
        >
          <MessageCircle size={20} /> Chateá por WhatsApp
        </a>
      </div>
    </section>
  );
}
