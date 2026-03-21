import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../../context/BookingContext';

const menus = {
  especial: {
    title: 'Menú Especial Venta El Gallo',
    subtitle: 'Nuestra propuesta gastronómica más representativa.',
    price: 'Incluido en el Pase de 55€',
    courses: [
      {
        name: 'Entrantes (A elegir)',
        items: [
          'Revuelto de habitas con jamón serrano y huevos camperos',
          'Crema de verduras a la andaluza con picatostes',
          'Salmorejo cordobés con polvo de jamón ibérico y huevo duro',
          'Sopa de picadillo típica de Granada con toques de hierbabuena',
          'Ensalada trufada de temporada con lascas de queso curado'
        ]
      },
      {
        name: 'Plato Principal (A elegir)',
        items: [
          'Lomo de salmón al horno con patatas panaderas al vino blanco',
          'Bacalao confitado con salsa de tomate casera estilo Albaicín',
          'Solomillo de cerdo ibérico con reducción de Pedro Ximénez',
          'Entrecot de ternera a la brasa con guarnición tradicional',
          'Carrillada ibérica braseada a baja temperatura (deshace en boca)'
        ]
      },
      {
        name: 'Postres & Bebidas',
        items: [
          'Surtido de postres caseros típicos de la casa',
          'Bebidas incluidas durante la cena: Cerveza, Vino, Sangría, Agua, Refrescos'
        ]
      }
    ]
  },
  tapas: {
    title: 'Menú de Tapas Tradicionales',
    subtitle: 'El formato perfecto para compartir y saborear.',
    price: 'Consultar pase',
    courses: [
      {
        name: 'Degustación',
        items: [
          'Surtido de embutidos y quesos ibéricos curados',
          'Croquetas caseras de la abuela (receta centenaria)',
          'Tortilla del Sacromonte (especialidad de la cueva)',
          'Albóndigas caseras en salsa de almendras tostadas',
          'Champiñones al ajillo flameados al brandy'
        ]
      },
      {
        name: 'Postre',
        items: ['Pionono de Santa Fe (Dulce típico granadino)']
      }
    ]
  },
  vegetariano: {
    title: 'Menú Vegetariano',
    subtitle: 'Frescura y tradición desde la vega granadina.',
    price: 'Incluido en el Pase de 55€',
    courses: [
      {
        name: 'Entrantes (A elegir)',
        items: [
          'Ensalada templada de queso de cabra, nueces y miel de caña',
          'Salmorejo clásico granadino (sin jamón)'
        ]
      },
      {
        name: 'Plato Principal (A elegir)',
        items: [
          'Parrillada de verduras frescas de la vega al carbón',
          'Lasaña vegetal gratinada con bechamel suave y queso parmesano'
        ]
      },
      {
        name: 'Postres',
        items: ['Fruta fresca de temporada', 'Tarta de queso casera']
      }
    ]
  },
  carta: {
    title: 'A La Carta',
    subtitle: 'Explora nuestra selección completa.',
    price: 'Más de 30 platos',
    courses: [
      {
        name: 'Especialidades Destacadas',
        items: [
          'Rabo de toro estofado a la antigua usanza',
          'Huevos rotos con jamón ibérico de bellota',
          'Fritura de pescado fresco estilo andaluz',
          'Tabla de quesos de oveja y cabra de la sierra'
        ]
      }
    ]
  }
};

const InteractiveMenu = () => {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState('especial');

  return (
    <section className="py-16 lg:py-20 bg-metallic-white relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl xl:max-w-6xl">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-black mb-3">Explora Nuestros Menús</h2>
          <p className="text-gray-600 font-light text-xs lg:text-sm max-w-2xl mx-auto">
            Nuestra propuesta gastronómica está diseñada para complementar el arte flamenco. 
            Elige tu menú ideal o disfruta de los más de 30 platos a la carta.
          </p>
        </div>

        {/* Agente Interactivo (Tabs) */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          
          {/* Sidebar / Tabs */}
          <div className="lg:w-1/4 flex flex-col gap-2">
            {[
              { id: 'especial', label: 'Menú Especial' },
              { id: 'tapas', label: 'Menú de Tapas' },
              { id: 'vegetariano', label: 'Vegetariano' },
              { id: 'carta', label: 'A La Carta' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-4 lg:px-5 py-3 lg:py-4 rounded-xl transition-all duration-300 text-[11px] lg:text-xs font-medium tracking-wide ${
                  activeTab === tab.id 
                  ? 'bg-deep-black text-gold shadow-xl scale-[1.02] lg:scale-105' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-deep-black border border-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
            
            {/* Visual Callout for the 'Agent' feel */}
            <div className="mt-5 lg:mt-6 p-4 lg:p-5 bg-gold/10 border border-gold/30 rounded-xl hidden lg:block">
              <span className="block text-gold text-[9px] lg:text-[10px] font-black uppercase tracking-widest mb-1.5">✦ Asesor de Reservas</span>
              <p className="text-[10px] lg:text-xs text-deep-black/80 italic font-serif leading-relaxed">Al reservar tu pase con cena, podrás elegir entre estas opciones directamente en la mesa o contactando con nosotros previamente.</p>
            </div>
          </div>

          {/* Menú Content Engine */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[1.5rem] p-5 lg:p-6 xl:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
              >
                {/* Decorative background watermark */}
                <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none hidden md:block">
                  <span className="text-[120px] lg:text-[150px] font-serif italic text-gold leading-none pb-0 mb-0">Z</span>
                </div>

                <div className="border-b border-gray-100 pb-4 lg:pb-5 mb-5 lg:mb-6 relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-3">
                  <div>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif text-deep-black mb-1">{menus[activeTab].title}</h3>
                    <p className="text-gray-500 font-light text-xs lg:text-sm">{menus[activeTab].subtitle}</p>
                  </div>
                  <div className="bg-deep-black text-white px-4 lg:px-5 py-1.5 rounded-full text-[9px] lg:text-[10px] font-bold uppercase tracking-widest self-start md:self-auto border border-gold/50">
                    {menus[activeTab].price}
                  </div>
                </div>

                <div className="space-y-6 lg:space-y-8 relative z-10">
                  {menus[activeTab].courses.map((course, idx) => (
                    <div key={idx}>
                      <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-[9px] lg:text-[10px] mb-3 lg:mb-4 flex items-center gap-2">
                        <span className="w-5 lg:w-6 h-[1px] bg-gold/50"></span>
                        {course.name}
                      </h4>
                      <ul className="space-y-2 lg:space-y-3 pr-2">
                        {course.items.map((item, i) => (
                          <li key={i} className="text-gray-800 font-medium text-xs lg:text-sm xl:text-base leading-snug border-b border-gray-50 pb-2 lg:pb-3 last:border-0 last:pb-0">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 lg:mt-10 pt-5 lg:pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-5 relative z-10">
                  <p className="text-[9px] lg:text-[10px] text-gray-500 italic flex-1 text-center sm:text-left">
                    * Todos nuestros menús adaptan opciones para celíacos o intolerancias alérgicas bajo previo aviso.
                  </p>
                  <button 
                    onClick={() => openBooking({ selectedPass: menus[activeTab].title })}
                    className="whitespace-nowrap px-6 lg:px-8 py-2.5 lg:py-3 bg-deep-black text-white rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-gold hover:text-deep-black transition-all duration-300"
                  >
                    Reservar con Menú
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMenu;
