'use client';

import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-500 text-sm py-10 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Nombre o Logo */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'var(--font-title)' }}>
            Salón de Eventos
          </h3>
          <p className="text-zinc-400 mt-2" style={{ fontFamily: 'var(--font-body)' }}>
            Creando momentos inolvidables.
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Abajo derechos */}
      <div className="text-center text-xs text-zinc-600 mt-10">
        © {new Date().getFullYear()} Salón de Eventos. Todos los derechos reservados.
      </div>
    </footer>
  );
}
