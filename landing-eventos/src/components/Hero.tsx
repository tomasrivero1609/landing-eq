'use client';

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Capa oscura encima */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 px-4">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          Tu evento soñado<br />a un click de distancia
        </h1>
        <a
          href="#contacto"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-zinc-200 transition mt-4"
        >
          Consultar disponibilidad
        </a>
      </div>
    </section>
  );
}
