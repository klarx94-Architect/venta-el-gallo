import React from 'react';

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
        </div>
      </div>
    </div>
  );
};

export default Booking;
