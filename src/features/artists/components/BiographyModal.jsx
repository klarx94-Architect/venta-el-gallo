import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BiographyModal = ({ artist, isOpen, onClose, onNext, onPrev }) => {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !artist) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12"
        >
          {/* Fondo Cristalino/Desenfocado - Más claro y Premium */}
          <div 
            className="absolute inset-0 bg-deep-black/70 backdrop-blur-[20px]"
            onClick={onClose}
          />

          {/* Contenedor del Modal - DISEÑO EDITORIAL ESTRICTO */}
          {/* Utilizamos h-[95vh] en móvil y h-[80vh] en desktop para evitar inconsistencias de flexbox */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-7xl h-[100dvh] md:h-[80vh] max-h-screen md:max-h-[1000px] bg-zinc-950 md:rounded-3xl shadow-[0_20px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row z-10 border-0 md:border border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar CERRAR PARA MÓVIL (Solo visible < md) */}
            <div className="absolute top-0 right-0 left-0 bg-gradient-to-b from-black/60 to-transparent p-4 flex justify-end md:hidden z-[60]">
               <button 
                 onClick={onClose} 
                 className="flex items-center gap-2 p-2 bg-black/40 backdrop-blur-md rounded-full text-white/90 border border-white/10 shadow-lg active:scale-95"
               >
                 <span className="text-[10px] pl-2 uppercase tracking-[0.2em] font-medium">Cerrar</span>
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                 </div>
               </button>
            </div>

            {/* SECCIÓN IZQUIERDA: Imagen Fija en Móvil */}
            <div className="absolute top-0 left-0 right-0 h-[40vh] md:relative md:w-1/2 md:h-full shrink-0 flex items-center justify-center bg-zinc-950 overflow-hidden border-b md:border-b-0 md:border-r border-white/5 isolate z-10">
              {/* Fondo desenfocado dinámico */}
              <div 
                className="absolute inset-0 bg-cover bg-center blur-3xl opacity-40 scale-125 saturate-200"
                style={{ backgroundImage: `url(${artist.imageUrl})` }}
              />
              
              <img 
                src={artist.imageUrl} 
                alt={artist.name} 
                className="relative z-20 w-full h-full object-contain object-center p-4 md:p-8 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              />
              
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent md:hidden z-30 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-950 via-zinc-950/60 to-transparent hidden md:block z-30 pointer-events-none" />

              {/* CONTROLES DE NAVEGACIÓN MÓVIL: Flotantes en la base de la imagen */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6 md:hidden z-[70]">
                <button 
                  onClick={(e) => { e.stopPropagation(); onPrev(); }}
                  className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white active:scale-90 transition-all shadow-2xl"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onNext(); }}
                  className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white active:scale-90 transition-all shadow-2xl"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            {/* SECCIÓN DERECHA: Zona de Scroll Independiente en Móvil */}
            <div className="absolute top-[40vh] bottom-0 left-0 right-0 md:relative md:top-0 md:flex-1 md:w-1/2 flex flex-col bg-zinc-950 overflow-y-auto md:overflow-visible z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] md:shadow-none">
              
              {/* Top Bar CERRAR PARA ESCRITORIO (Solo visible md+) */}
              <div className="hidden md:flex justify-end p-8 pb-4 shrink-0 z-20">
                <button 
                  onClick={onClose}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group cursor-pointer"
                >
                  <span className="text-[11px] uppercase tracking-[0.3em] font-medium group-hover:text-gold-500 transition-colors">Cerrar</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-500 group-hover:text-gold-500 transition-colors bg-white/5 group-hover:bg-gold-500/10">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </div>
                </button>
              </div>

              {/* Contenido de la Biografía */}
              <div className="p-8 pt-10 md:p-12 md:pt-4">
                <motion.div
                  key={artist.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="w-10 h-[1px] bg-sacromonte-red"></div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold-500">
                      {artist.role}
                    </span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-serif text-white mb-6 md:mb-8 leading-[0.9] tracking-tighter">
                    {artist.name}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed first-letter:text-6xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-gold-500 first-letter:mr-3 lg:first-letter:mr-4 first-letter:float-left first-letter:leading-none">
                    {artist.description}
                  </p>

                  <div className="mt-12 md:mt-20 text-gold-500/10 font-serif italic text-2xl md:text-4xl tracking-[0.2em] text-right select-none pr-4">
                    Sacromonte Pureza
                  </div>
                  {/* Espacio extra abajo del scroll para no chocar con la barra inferior en móviles pequeños */}
                  <div className="h-10 md:h-0"></div>
                </motion.div>
              </div>

              {/* Barra Inferior CERRADA: Controles Claros y Explícitos (Visible solo en md+) */}
              <div className="hidden md:flex shrink-0 bottom-0 p-5 md:p-8 bg-zinc-950/90 backdrop-blur-lg border-t border-white/5 justify-between items-center z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); onPrev(); }}
                  className="flex items-center gap-3 md:gap-4 text-white/50 hover:text-gold-500 transition-colors group cursor-pointer active:scale-95"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/50 transition-colors">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
                  </div>
                  <div className="flex flex-col items-start leading-none pointer-events-none">
                    <span className="text-[8px] md:text-[9px] text-gold-500/70 uppercase tracking-widest mb-1 font-bold">Descubrir</span>
                    <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em]">Anterior</span>
                  </div>
                </button>

                <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>

                <div className="hidden sm:flex text-[9px] text-white/20 uppercase tracking-[0.4em]">
                  Zambra Gitana
                </div>

                <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>

                <button 
                  onClick={(e) => { e.stopPropagation(); onNext(); }}
                  className="flex items-center gap-3 md:gap-4 text-white/50 hover:text-gold-500 transition-colors group cursor-pointer active:scale-95"
                >
                  <div className="flex flex-col items-end leading-none pointer-events-none">
                    <span className="text-[8px] md:text-[9px] text-gold-500/70 uppercase tracking-widest mb-1 font-bold">Explorar</span>
                    <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.2em]">Siguiente</span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/50 transition-colors">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
                  </div>
                </button>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BiographyModal;
