import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import caveDetail from '../../../assets/cave_detail.jpg';

const Narrative = () => {
  const { t } = useTranslation();

  return (
    <section className="py-40 relative bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          {/* Image Layering - Asymmetric */}
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img src={caveDetail} className="w-full h-[600px] object-cover shadow-2xl rounded-sm" alt="Cueva Venta El Gallo Detail" />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-64 h-64 border-[20px] border-gold/10 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 bg-sacromonte-red text-white p-12 shadow-2xl z-20">
              <p className="text-5xl font-serif mb-2">1953</p>
              <p className="uppercase tracking-[0.3em] text-[9px] font-black opacity-60">Fundación Legendaria</p>
            </div>
          </div>

          {/* High Density Narrative Content */}
          <div className="flex-1">
            <div className="inline-block px-4 py-1 border border-gold text-gold text-[9px] uppercase tracking-widest font-black mb-10">
              Patrimonio Vivo
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-deep-black mb-12 leading-tight">
              Donde la roca <br/> se hace <span className="italic text-sacromonte-red">quejío</span>.
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
              Desde hace más de siete décadas, nuestras paredes de cal han resonado con la verdad de la Zambra. No es un escenario, es un refugio donde el arte se funde con la tierra.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gray-100">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-4">Acústica Natural</h4>
                <p className="text-xs text-gray-400 font-light">La cueva amplifica el eco del taconeo con una fidelidad que solo la geología puede ofrecer.</p>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-4">Aforo Exclusivo</h4>
                <p className="text-xs text-gray-400 font-light">Mantenemos la intimidad para que cada respiración del artista se sienta a centímetros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
