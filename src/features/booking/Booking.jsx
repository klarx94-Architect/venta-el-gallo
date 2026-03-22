import React from 'react';
<<<<<<< HEAD

const Booking = () => {
  return (
    <div className="pt-32 pb-20 fade-in min-h-screen bg-white">
      <div className="section-container">
        <h1 className="text-5xl font-serif text-deep-black mb-8 text-center uppercase tracking-widest text-gold-500">Reservas y Contacto</h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-20">
          Asegura tu mesa y vive la experiencia única de Venta El Gallo.
        </p>

        <div className="max-w-2xl mx-auto bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-xl">
           <form className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                 <input type="text" className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                 <input type="email" className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition" />
               </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
                 <input type="date" className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Asistentes</label>
                 <select className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition">
                   <option>1 Persona</option>
                   <option>2 Personas</option>
                   <option>3 - 4 Personas</option>
                   <option>5+ Personas</option>
                 </select>
               </div>
             </div>
             <button type="button" className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-4 rounded-lg uppercase tracking-wider transition-colors duration-300">
                Confirmar Disponibilidad
             </button>
           </form>
=======
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
>>>>>>> main
        </div>
      </div>
    </div>
  );
};

export default Booking;
