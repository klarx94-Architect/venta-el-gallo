import React from 'react';
import BookingAgent from './components/BookingAgent';

const Booking = () => {
  return (
    <div className="pt-32 pb-20 fade-in min-h-screen bg-white md:bg-gray-50/50">
      <div className="section-container">
        <header className="max-w-3xl mx-auto text-center mb-16 px-4">
          <span className="text-gold-600 text-[10px] uppercase font-bold tracking-[0.4em] mb-4 block">Contacto & Reservas Directas</span>
          <h1 className="text-4xl md:text-6xl font-serif text-deep-black mb-6 leading-tight">Vive el Duende en la Cueva de Sacromonte</h1>
          <p className="text-lg text-gray-500 font-light italic">
            Atención personalizada y reservas inmediatas a través de nuestro agente inteligente.
          </p>
        </header>

        <BookingAgent isEmbedded={true} />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-100 pt-16">
          <div>
            <h4 className="text-gold-600 font-bold text-[10px] uppercase tracking-widest mb-4">Ubicación</h4>
            <p className="text-deep-black font-serif italic text-lg">Camino del Sacromonte, 70<br/>Granada, España</p>
          </div>
          <div>
            <h4 className="text-gold-600 font-bold text-[10px] uppercase tracking-widest mb-4">Horarios</h4>
            <p className="text-deep-black font-serif italic text-lg">Todos los días<br/>Lunes a Domingo — 20:00 - 00:00</p>
          </div>
          <div>
            <h4 className="text-gold-600 font-bold text-[10px] uppercase tracking-widest mb-4">Teléfono Directo</h4>
            <p className="text-deep-black font-serif italic text-lg">+34 958 10 10 10<br/>ventaelgallo@sacromonte.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
