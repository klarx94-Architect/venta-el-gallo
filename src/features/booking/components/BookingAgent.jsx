import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../../context/BookingContext';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, ChevronRight, ChevronLeft, Check, Smartphone } from 'lucide-react';

const BookingAgent = ({ isEmbedded = false }) => {
  const { closeBooking, contextData } = useBooking();
  const [phase, setPhase] = useState(1);
  
  // State for Booking Data
  const [booking, setBooking] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '20:30',
    adults: 2,
    children: 0,
    menus: [],
    extras: [],
    contact: {
      name: '',
      email: '',
      phone: '',
      notes: ''
    }
  });

  // Pre-fill from context if available
  useEffect(() => {
    if (contextData.package) {
      const packMap = {
        'consumicion': 'espectaculo',
        'cena': 'tapas',
        'completo': 'especial'
      };
      const internalId = packMap[contextData.package] || contextData.package;
      setBooking(prev => ({
        ...prev,
        menus: [{ type: internalId, count: prev.adults }]
      }));
    }
  }, [contextData]);

  // Pricing Logic (Mock for 10k Demo)
  const menuPrices = {
    'espectaculo': 35,
    'tapas': 55,
    'especial': 85,
    'infantil': 25
  };

  const menuNames = {
    'espectaculo': 'Solo Espectáculo',
    'tapas': 'Espectáculo + Tapas',
    'especial': 'Gala Cena Sacromonte',
    'infantil': 'Menú Infantil'
  };

  const extraPrices = {
    'vino': 18,
    'copa': 8,
    'tarta': 12
  };

  const calculateTotal = () => {
    let total = 0;
    booking.menus.forEach(m => total += (menuPrices[m.type] || 0) * m.count);
    booking.extras.forEach(e => total += (extraPrices[e.type] || 0) * e.count);
    return total;
  };

  const nextPhase = () => setPhase(prev => Math.min(prev + 1, 4));
  const prevPhase = () => setPhase(prev => Math.max(prev - 1, 1));

  // WhatsApp Logic (Dummy number as requested)
  const handleWhatsApp = () => {
    const total = calculateTotal();
    const message = `*Nueva Reserva Inteligente - Venta El Gallo*%0A%0A` +
      `📅 *Fecha:* ${booking.date}%0A` +
      `⏰ *Hora:* ${booking.time}%0A` +
      `👥 *Pax:* ${booking.adults} adultos, ${booking.children} niños%0A` +
      `🍽️ *Selección:* ${booking.menus.map(m => `${m.count}x ${menuNames[m.type] || m.type}`).join(', ')}%0A` +
      `🍷 *Extras:* ${booking.extras.length > 0 ? booking.extras.map(e => e.type).join(', ') : 'Ninguno'}%0A%0A` +
      `👤 *Cliente:* ${booking.contact.name}%0A` +
      `📞 *Tel:* ${booking.contact.phone}%0A%0A` +
      `💰 *Total Estimado:* ${total}€%0A%0A` +
      `_Enviado desde el Agente Inteligente_`;
    
    window.open(`https://wa.me/5491100000000?text=${message}`, '_blank');
  };

  const containerClasses = isEmbedded 
    ? "w-full max-w-4xl mx-auto bg-white/40 backdrop-blur-xl border border-gold/20 rounded-[2.5rem] shadow-2xl overflow-hidden"
    : "w-full h-full flex flex-col";

  return (
    <div className={containerClasses}>
      {/* STEPS INDICATOR */}
      <div className="flex justify-between items-center p-6 md:px-12 bg-white/50 border-b border-gray-100 shrink-0">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all ${
              phase >= s ? 'bg-gold-500 border-gold-500 text-white' : 'border-gray-200 text-gray-400'
            }`}>
              {phase > s ? <Check size={14} /> : s}
            </div>
            <span className={`hidden md:block text-[9px] uppercase tracking-widest font-bold ${
              phase === s ? 'text-deep-black' : 'text-gray-300'
            }`}>
              {s === 1 && 'Viaje'}
              {s === 2 && 'Pases'}
              {s === 3 && 'Upsell'}
              {s === 4 && 'Cierre'}
            </span>
          </div>
        ))}
      </div>

      {/* PHASE CONTENT */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
          >
            {phase === 1 && (
              <div className="space-y-8 py-4">
                <header className="text-center mb-12">
                  <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.3em] mb-2 block">Paso 01 — El Comienzo</span>
                  <h2 className="text-4xl font-serif text-deep-black">¿Cuándo nos visitarás?</h2>
                </header>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-gold-300 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 group-hover:scale-110 transition-transform">
                        <Calendar size={20} />
                      </div>
                      <span className="font-serif text-xl">Fecha de visita</span>
                    </div>
                    <input 
                      type="date" 
                      className="w-full bg-transparent border-none focus:ring-0 p-0 text-xl font-light text-deep-black"
                      value={booking.date}
                      onChange={(e) => setBooking({...booking, date: e.target.value})}
                    />
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-sacromonte-red">
                        <Users size={20} />
                      </div>
                      <span className="font-serif text-xl">Compañía</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Adultos</span>
                      <div className="flex items-center gap-4">
                        <button onClick={() => setBooking({...booking, adults: Math.max(1, booking.adults - 1)})} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">-</button>
                        <span className="font-bold w-4 text-center">{booking.adults}</span>
                        <button onClick={() => setBooking({...booking, adults: booking.adults + 1})} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">+</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Niños (4-12)</span>
                      <div className="flex items-center gap-4">
                        <button onClick={() => setBooking({...booking, children: Math.max(0, booking.children - 1)})} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">-</button>
                        <span className="font-bold w-4 text-center">{booking.children}</span>
                        <button onClick={() => setBooking({...booking, children: booking.children + 1})} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {phase === 2 && (
              <div className="space-y-8 py-4">
                <header className="text-center mb-8">
                  <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.3em] mb-2 block">Paso 02 — Selección de Galas</span>
                  <h2 className="text-4xl font-serif text-deep-black">Viste tu mesa</h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'espectaculo', name: 'Sólo Espectáculo', desc: 'Acceso a la Zambra con bebida.', price: 35 },
                    { id: 'tapas', name: 'Espectáculo + Tapas', desc: 'Menú degustación de tapas típicas.', price: 55 },
                    { id: 'especial', name: 'Gala Cena Sacromonte', desc: 'Menú completo de 3 tiempos.', price: 85 },
                    { id: 'infantil', name: 'Menú Infantil', desc: 'Para menores de 12 años.', price: 25 }
                  ].map(p => {
                    const existing = booking.menus.find(m => m.type === p.id);
                    return (
                      <div 
                        key={p.id}
                        onClick={() => {
                          if (existing) {
                            setBooking({...booking, menus: booking.menus.filter(m => m.type !== p.id)});
                          } else {
                            const count = p.id === 'infantil' ? booking.children : booking.adults;
                            if (count > 0) {
                              setBooking({...booking, menus: [...booking.menus, { type: p.id, count: count }]});
                            }
                          }
                        }}
                        className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all ${
                          existing 
                          ? 'border-gold-500 bg-gold-50/20' 
                          : 'border-white/50 bg-white/50 hover:border-gold-200'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-serif text-lg text-deep-black">{p.name}</h4>
                          <span className="text-gold-600 font-bold">{p.price}€</span>
                        </div>
                        <p className="text-xs text-gray-500 font-light mb-4">{p.desc}</p>
                        {existing && (
                           <div className="flex justify-between items-center bg-white rounded-full px-4 py-1.5 border border-gold-200">
                             <span className="text-[10px] text-gold-600 font-bold uppercase tracking-tighter">Personas</span>
                             <div className="flex items-center gap-3">
                                <button 
                                  onClick={(e) => { 
                                    e.stopPropagation(); 
                                    const newMenus = booking.menus.map(m => m.type === p.id ? {...m, count: Math.max(1, m.count - 1)} : m);
                                    setBooking({...booking, menus: newMenus});
                                  }} 
                                  className="text-gray-400 w-6 h-6 flex items-center justify-center hover:text-deep-black"
                                >-</button>
                                <span className="font-bold text-sm min-w-[1rem] text-center">{existing.count}</span>
                                <button 
                                  onClick={(e) => { 
                                    e.stopPropagation(); 
                                    const newMenus = booking.menus.map(m => m.type === p.id ? {...m, count: m.count + 1} : m);
                                    setBooking({...booking, menus: newMenus});
                                  }} 
                                  className="text-gold-500 w-6 h-6 flex items-center justify-center hover:scale-110"
                                >+</button>
                             </div>
                           </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {phase === 3 && (
              <div className="space-y-8 py-4">
                <header className="text-center mb-12">
                  <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.3em] mb-2 block">Paso 03 — El Maridaje</span>
                  <h2 className="text-4xl font-serif text-deep-black">Eleva tu estancia</h2>
                </header>

                <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar px-2">
                  {[
                    { id: 'vino', name: 'Bodega de la Cueva', desc: 'Vino D.O. Granada (Tinto/Blanco)', price: 18, img: '🍷' },
                    { id: 'copa', name: 'Cocktail Flamenco', desc: 'Combinado especial Venta El Gallo', price: 8, img: '🍸' },
                    { id: 'tarta', name: 'Sorpresa Ibérica', desc: 'Repostería tradicional para compartir', price: 12, img: '🍰' }
                  ].map(extra => {
                    const isAdded = booking.extras.some(e => e.type === extra.id);
                    return (
                      <div key={extra.id} className="min-w-[280px] bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
                        <div className="text-5xl mb-6">{extra.img}</div>
                        <div>
                          <h4 className="font-serif text-xl text-deep-black mb-1">{extra.name}</h4>
                          <p className="text-xs text-gray-400 mb-6">{extra.desc}</p>
                          <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                            <span className="font-black text-gold-600">{extra.price}€</span>
                            <button 
                              onClick={() => {
                                if (isAdded) {
                                  setBooking({...booking, extras: booking.extras.filter(e => e.type !== extra.id)});
                                } else {
                                  setBooking({...booking, extras: [...booking.extras, { type: extra.id, count: 1 }]});
                                }
                              }}
                              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${
                                isAdded ? 'bg-gold-500 text-white' : 'bg-gray-50 text-gray-400 hover:bg-deep-black hover:text-white'
                              }`}
                            >
                              {isAdded ? 'Añadido' : 'Añadir'}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {phase === 4 && (
              <div className="space-y-8 py-4">
                <header className="text-center mb-8">
                  <span className="text-green-500 text-[10px] uppercase font-bold tracking-[0.3em] mb-2 block">Paso Final — Compromiso</span>
                  <h2 className="text-4xl font-serif text-deep-black">Resumen de tu Gala</h2>
                </header>

                <div className="bg-metallic-white rounded-3xl p-8 border border-gold/10 shadow-inner">
                   <div className="flex justify-between items-center mb-8 pb-8 border-b border-gold/10">
                      <div>
                        <div className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">Total Estimado</div>
                        <div className="text-5xl font-serif text-deep-black leading-none">{calculateTotal()}€</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase tracking-widest">{booking.date}</div>
                        <div className="text-xl font-serif text-deep-black">{booking.adults} Comensales</div>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          placeholder="Nombre Completo" 
                          className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-gold-300"
                          value={booking.contact.name}
                          onChange={(e) => setBooking({...booking, contact: {...booking.contact, name: e.target.value}})}
                        />
                        <input 
                          type="tel" 
                          placeholder="WhatsApp / Teléfono" 
                          className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-gold-300"
                          value={booking.contact.phone}
                          onChange={(e) => setBooking({...booking, contact: {...booking.contact, phone: e.target.value}})}
                        />
                      </div>
                      <textarea 
                        placeholder="Peticiones Especiales (Alergias, Aniversarios...)"
                        className="w-full bg-white border border-gray-100 p-4 rounded-xl h-32 outline-none focus:ring-2 focus:ring-gold-300"
                      />
                   </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="p-6 md:p-10 bg-white border-t border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center shrink-0">
        <button 
          onClick={phase === 1 ? (!isEmbedded ? closeBooking : null) : prevPhase}
          className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
            phase === 1 && isEmbedded ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-deep-black'
          }`}
        >
          <ChevronLeft size={16} /> Atrás
        </button>

        {phase < 4 ? (
          <button 
            onClick={nextPhase}
            className="w-full md:w-auto px-12 py-5 bg-deep-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-gold-500/20 hover:scale-105 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            Siguiente Paso <ChevronRight size={16} />
          </button>
        ) : (
          <button 
            onClick={handleWhatsApp}
            className="w-full md:w-auto px-12 py-5 bg-green-600 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-green-700 hover:scale-105 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <Smartphone size={16} /> Finalizar vía WhatsApp
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingAgent;
