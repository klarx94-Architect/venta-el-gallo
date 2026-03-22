import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../../context/BookingContext';

const passes = [
  {
    id: 'consumicion',
    title: 'Espectáculo + Consumición',
    price: '25€',
    subtitle: 'La esencia pura del cante y el baile.',
    features: ['Acceso al espectáculo flamenco (1 hora)', 'Una bebida a elegir (vino, cerveza, refresco)', 'Asientos en zona estándar'],
    children: 'Niños 6-11 años: 20€ | Niños 3-5 años: 10€',
    highlighted: false,
    delay: 0
  },
  {
    id: 'cena',
    title: 'Espectáculo + Cena',
    price: '55€',
    subtitle: 'La experiencia inmersiva definitiva.',
    features: ['Acceso premium al espectáculo', 'Menú Especial Venta El Gallo (3 tiempos)', 'Bebidas ilimitadas durante la cena'],
    children: 'Niños 6-11 años: 32€ (Menú Infantil)',
    highlighted: true, // The core product
    delay: 0.15
  },
  {
    id: 'completo',
    title: 'Show + Cena + Transporte',
    price: '65€',
    subtitle: 'El viaje andalusí sin preocupaciones.',
    features: ['Todo lo incluido en Espectáculo + Cena', 'Paseo guiado por el Albaicín y Sacromonte', 'Recogida en microbús desde el centro'],
    children: 'Niños 6-11 años: 40€',
    highlighted: false,
    delay: 0.3
  }
];

const PasesPricing = () => {
  const { openBooking } = useBooking();
  return (
    <section className="relative z-20 -mt-10 md:-mt-16 lg:-mt-20 px-4 md:px-6 mb-16 lg:mb-20">
      <div className="container mx-auto">
        <div className="text-center mb-8 hidden md:block">
          <h2 className="text-xl lg:text-2xl font-serif text-white opacity-90 tracking-widest uppercase">Elige la opción que más te guste</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl xl:max-w-6xl mx-auto items-start">
          {passes.map((pass) => (
            <motion.div 
              key={pass.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: pass.delay }}
              className={`relative bg-[#FAFAFA] rounded-[1.5rem] p-6 lg:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col border transition-all duration-500 hover:-translate-y-1
                ${pass.highlighted 
                  ? 'border-gold shadow-[0_30px_60px_rgba(212,175,55,0.2)] md:-mt-4 md:mb-4 scale-[1.02] lg:scale-[1.05] z-10' 
                  : 'border-white/10 opacity-95 hover:opacity-100'}`}
            >
              {pass.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-[8px] lg:text-[9px] uppercase font-black tracking-widest py-1.5 px-4 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
                  Más Recomendado
                </div>
              )}
              
              <div className="text-center border-b border-gray-200 pb-5 mb-5 mt-2">
                <h3 className="text-lg lg:text-xl font-serif text-deep-black mb-2 flex items-center justify-center leading-tight">{pass.title}</h3>
                <p className="text-gray-500 font-light text-[11px] lg:text-xs mb-3">{pass.subtitle}</p>
                <div className="flex items-center justify-center items-baseline gap-1.5 text-deep-black">
                  <span className="text-4xl lg:text-5xl font-light tracking-tighter">{pass.price}</span>
                  <span className="text-gray-400 font-medium text-[10px] lg:text-xs">/ pers.</span>
                </div>
              </div>
              
              <ul className="flex-1 space-y-3 mb-6">
                {pass.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                     <span className="text-gold mt-1 text-[10px]">✦</span>
                     <span className="text-gray-700 font-medium text-[11px] lg:text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gray-100 rounded-lg p-3 mb-6 text-center border border-gray-200">
                <p className="text-[9px] lg:text-[10px] text-gray-600 font-medium">{pass.children}</p>
              </div>
              
              <button 
<<<<<<< HEAD
                onClick={() => openBooking({ selectedPass: pass.title, priceConfig: pass.price })}
=======
                onClick={() => openBooking({ from: 'restaurant', pack: pass.id })}
>>>>>>> main
                className={`mt-auto w-full text-center py-3.5 rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 border
                ${pass.highlighted 
                  ? 'bg-deep-black text-gold border-deep-black hover:bg-gold hover:text-deep-black hover:border-gold shadow-md' 
                  : 'bg-white text-deep-black border-gray-300 hover:border-deep-black hover:bg-deep-black hover:text-white'}`}
              >
                Seleccionar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PasesPricing;
