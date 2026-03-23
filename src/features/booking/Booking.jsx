import React from 'react';
import BookingAgent from './components/BookingAgent';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import heroBg from '../../assets/raw/Venta-El-Gallo-15-1.jpg';

const Booking = () => {
  return (
    <div className="fade-in min-h-screen bg-deep-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <header className="max-w-4xl mx-auto text-center mb-16 px-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gold-500 text-[10px] md:text-xs uppercase font-bold tracking-[0.5em] mb-6 block"
            >
              Atención & Reservas
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
            >
              Tu Mesa en la <br/> <span className="italic text-sacromonte-red">Cueva Legendaria</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
            >
              Vive una noche inolvidable de flamenco y gastronomía en el corazón del Sacromonte. Nuestro asistente inteligente te ayudará a personalizar tu visita.
            </motion.p>
          </header>

          {/* Booking Agent Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative z-20"
          >
            <BookingAgent isEmbedded={true} />
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Location */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                <MapPin size={28} />
              </div>
              <h4 className="text-gold-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Ubicación</h4>
              <p className="text-deep-black font-serif italic text-xl leading-relaxed">
                Camino del Sacromonte, 70<br/>
                18010 Granada, España
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Clock size={28} />
              </div>
              <h4 className="text-gold-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Horarios</h4>
              <p className="text-deep-black font-serif italic text-xl leading-relaxed">
                Todos los días<br/>
                Espectáculos: 20:30 & 22:30
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Phone size={28} />
              </div>
              <h4 className="text-gold-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Contacto Directo</h4>
              <div className="space-y-2">
                <p className="text-deep-black font-serif italic text-xl">+34 958 22 84 76</p>
                <p className="text-gray-400 font-light text-sm">info@ventaelgallo.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add Framer Motion to scope
import { motion } from 'framer-motion';

export default Booking;
