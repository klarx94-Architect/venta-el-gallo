import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappNumber = "34958228476"; 
  const whatsappMessage = encodeURIComponent("Hola! Me gustaría solicitar información sobre una reserva en Venta El Gallo.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[60] pointer-events-none px-6 md:px-10 lg:px-12 flex justify-between items-end">
      
      {/* Scroll to Top (Left) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={scrollToTop}
            className="pointer-events-auto w-12 h-12 rounded-full bg-deep-black/80 backdrop-blur-md border border-white/10 text-gold flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-gold hover:text-deep-black transition-all duration-500 group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp (Right) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_50px_rgba(37,211,102,0.5)] transition-all duration-500 overflow-hidden relative"
      >
        <MessageCircle size={30} fill="currentColor" />
        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></div>
      </motion.a>

    </div>
  );
};

export default FloatingActions;
