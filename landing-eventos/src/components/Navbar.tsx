'use client';

import Link from 'next/link';
import PresupuestoModal from '@/components/PresupuestoModal';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
        {/* Logo o nombre */}
        <Link href="#" className="text-white font-bold tracking-wide text-lg" style={{ fontFamily: 'var(--font-title)' }}>
          Eventos Quilmes
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-zinc-300 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
          <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
          <li><a href="#tipos" className="hover:text-white transition">Eventos</a></li>
          <li><a href="#galeria" className="hover:text-white transition">Galería</a></li>
          <li><a href="#testimonios" className="hover:text-white transition">Testimonios</a></li>
          <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
        </ul>

        {/* Botón presupuesto */}
        <PresupuestoModal />
      </nav>
    </header>
  );
}
