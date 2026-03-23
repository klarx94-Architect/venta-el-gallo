import React from 'react';
import BookingAgent from './components/BookingAgent';
import { MapPin, Clock, Phone, Mail, MessageSquare } from 'lucide-react';
import heroBg from '../../assets/raw/Venta-El-Gallo-1-1280x961-2.jpg';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <div className="fade-in min-h-screen bg-deep-black">
      {/* Hero Section - Optimized for Form Priority */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 via-transparent to-deep-black"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Compact Callout instead of Large Titles */}
          <header className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8"
            >
              <div className="flex items-center gap-3 border-r border-white/20 pr-4">
                <Phone size={16} className="text-gold-500" />
                <span className="text-white font-serif text-lg">+34 958 22 84 76</span>
              </div>
              <a 
                href="tel:+34958228476"
                className="text-gold-400 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors"
              >
                Llamar Ahora
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold"
            >
              Reserva Directa u Online
            </motion.div>
          </header>

          {/* Booking Agent Container - The Star of the Page */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-20"
          >
            <BookingAgent isEmbedded={true} />
          </motion.div>
        </div>
      </section>

      {/* Info Section - Clean & Professional */}
      <section className="py-20 bg-white border-t border-gold/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Location */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-4 group-hover:bg-gold-600 group-hover:text-white transition-all duration-500">
                <MapPin size={20} />
              </div>
              <h4 className="text-gold-600 font-bold text-[10px] uppercase tracking-widest mb-3">Donde estamos</h4>
              <p className="text-deep-black font-serif italic text-lg leading-snug">
                Camino del Sacromonte, 70<br/>
                Granada, España
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-4 group-hover:bg-gold-600 group-hover:text-white transition-all duration-500">
                <Clock size={20} />
              </div>
              <h4 className="text-gold-600 font-bold text-[10px] uppercase tracking-widest mb-3">Disponibilidad</h4>
              <p className="text-deep-black font-serif italic text-lg leading-snug">
                Abierto todos los días<br/>
                Pases: 20:30 & 22:30
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-4 group-hover:bg-gold-600 group-hover:text-white transition-all duration-500">
                <MessageSquare size={20} />
              </div>
              <h4 className="text-gold-600 font-bold text-[10px] uppercase tracking-widest mb-3">Consultas</h4>
              <p className="text-deep-black font-serif italic text-lg leading-snug">
                info@ventaelgallo.com<br/>
                Whatsapp disponible
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
