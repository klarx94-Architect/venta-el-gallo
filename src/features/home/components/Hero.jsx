import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-deep-black text-white">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold"></div>
            <span className="text-[10px] uppercase tracking-wide-5 text-gold font-black">Sacromonte, Granada</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-12 leading-[0.8] tracking-tighter">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/40 font-light max-w-xl mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <button className="btn-primary">
              {t('hero.cta')}
            </button>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/20 mb-2">Coordenadas</span>
              <span className="text-xs font-mono text-gold tracking-tighter">37.1818° N, 3.5855° W</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
        <h2 className="text-[20rem] font-black uppercase tracking-tighter -mb-20">ZAMBRA</h2>
      </div>
    </section>
  );
};

export default Hero;
