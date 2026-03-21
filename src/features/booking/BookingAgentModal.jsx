import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';

const BookingAgentModal = () => {
  const { isBookingOpen, closeBooking, bookingData } = useBooking();

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12"
        >
          {/* Glassmorphism Backdrop */}
          <div 
            className="absolute inset-0 bg-deep-black/60 backdrop-blur-md transition-opacity"
            onClick={closeBooking}
          ></div>

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-5xl bg-metallic-white rounded-[2rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-gold/30 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 lg:p-8 border-b border-gray-100 bg-white z-10">
              <div>
                <span className="text-gold text-[10px] uppercase font-black tracking-widest block mb-1">
                  ✦ Asistente de Reservas Inteligente
                </span>
                <h2 className="text-2xl font-serif text-deep-black">
                  Configura tu experiencia
                </h2>
              </div>
              <button 
                onClick={closeBooking}
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-deep-black hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Stepper / Wizard Content Base */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12 relative bg-gray-50/50">
               {/* Background Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <span className="text-[300px] font-serif italic text-gold leading-none">V</span>
              </div>
              
              <div className="relative z-10 text-center max-w-xl mx-auto py-20">
                <h3 className="text-3xl font-serif mb-4 text-deep-black">Paso 1: ¿Cuándo y Quiénes?</h3>
                <p className="text-gray-500 font-light mb-8">
                  Dinos la fecha de tu visita y cuántas personas formarán parte de la experiencia. {bookingData?.selectedPass && `Has seleccionado inicialmente el pase ${bookingData.selectedPass}.`}
                </p>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm animate-pulse flex items-center justify-center h-40">
                  <span className="text-gray-400 text-sm tracking-widest uppercase">Construyendo módulos del agente...</span>
                </div>
              </div>
            </div>

            {/* Sticky Next Button Base */}
            <div className="bg-white p-6 md:p-8 border-t border-gray-100 flex justify-end">
              <button 
                disabled
                className="px-10 py-4 bg-deep-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] opacity-50 cursor-not-allowed"
              >
                Siguiente Paso →
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingAgentModal;
