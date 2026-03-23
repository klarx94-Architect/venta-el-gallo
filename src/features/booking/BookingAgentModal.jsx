import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import BookingAgent from './components/BookingAgent';

const BookingAgentModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12"
        >
          {/* Glassmorphism Backdrop */}
          <div 
            className="absolute inset-0 bg-deep-black/60 backdrop-blur-md transition-opacity"
            onClick={closeBooking}
          ></div>

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-5xl h-[100dvh] md:h-[85vh] bg-metallic-white md:rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-0 md:border border-gold/30 overflow-hidden flex flex-col z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeBooking}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[120] w-10 h-10 md:w-12 md:h-12 rounded-full bg-deep-black text-white border border-gold/50 flex items-center justify-center hover:bg-sacromonte-red transition-all hover:rotate-90 shadow-2xl"
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            <BookingAgent isEmbedded={false} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingAgentModal;
