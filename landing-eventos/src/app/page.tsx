import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Galeria from '@/components/Galeria';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import TiposDeEventos from '@/components/TiposDeEventos';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Servicios />
      <TiposDeEventos />
      <Galeria />
      <Testimonios />
      <Contacto />
      <Footer />
    </main>
  );
}
