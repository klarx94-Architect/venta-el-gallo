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
            className="relative w-full max-w-5xl h-[100dvh] md:h-auto md:max-h-[90vh] bg-metallic-white md:rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-0 md:border border-gold/30 overflow-hidden flex flex-col z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <BookingAgent isEmbedded={false} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingAgentModal;
