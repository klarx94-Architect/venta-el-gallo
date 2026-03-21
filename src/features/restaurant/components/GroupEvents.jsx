import React from 'react';

const GroupEvents = () => {
  return (
    <section className="py-24 md:py-32 bg-deep-black relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[url('../../assets/raw/Venta-El-Gallo-15-1.jpg')] bg-cover bg-center bg-fixed opacity-20 filter grayscale"></div>
      
      {/* Heavy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-deep-black/90"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-metallic-white rounded-[3rem] p-10 md:p-20 shadow-[0_40px_100px_rgba(212,175,55,0.15)] max-w-5xl mx-auto border border-gold/30 flex flex-col md:flex-row items-center gap-12 md:gap-20 relative overflow-hidden group">
          
          {/* Subtle Golden Glow inside card */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl"></div>

          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block px-4 py-1 text-gold border border-gold/30 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              Eventos Especiales
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-deep-black mb-6 leading-[1.1] tracking-tight">
              Grupos y <span className="italic text-sacromonte-red">Celebraciones</span>
            </h2>
            <p className="text-gray-700 font-light text-lg mb-8 leading-relaxed">
              ¿Organizas un viaje, una cena de empresa o un evento masivo? Nuestra cueva tiene capacidad de <strong>hasta 120 plazas</strong>. 
              Tenemos amplia experiencia en shows diarios y menús personalizados adaptados a las necesidades de turismo y agencias.
            </p>
            
            <a href="/contacto" className="inline-block px-12 py-5 bg-deep-black text-white text-xs font-black uppercase tracking-[0.3em] rounded-full shadow-2xl hover:-translate-y-1 hover:bg-gold hover:text-deep-black transition-all duration-300">
              Solicitar Presupuesto Grupal
            </a>
          </div>

          <div className="w-full md:w-auto flex flex-row md:flex-col justify-center gap-6 z-10 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-gold mb-2">120</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Plazas Máximas</div>
            </div>
            <div className="hidden md:block w-12 h-[1px] bg-gray-200 mx-auto"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-gold mb-2">30+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Platos en Carta</div>
            </div>
            <div className="hidden md:block w-12 h-[1px] bg-gray-200 mx-auto"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-gold mb-2">3</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Shows Diarios</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GroupEvents;
