import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Assets
import actionShot1 from '../../../assets/action_shot_1.jpg';
import restaurantImg from '../../../assets/restaurant.jpg';
import caveDetail from '../../../assets/cave_detail.jpg';
import viewImg from '../../../assets/view_1.jpg';

const Pillars = () => {
  const { t } = useTranslation();

  const entryPoints = [
    { 
      title: 'El Espectáculo', 
      desc: 'Zambra pura en el corazón del Sacromonte.', 
      img: actionShot1,
      link: '/artistas',
      num: '01'
    },
    { 
      title: 'Gastronomía', 
      desc: 'Sabores tradicionales tallados en la roca.', 
      img: restaurantImg,
      link: '/restaurante',
      num: '02'
    },
    { 
      title: 'Eventos', 
      desc: 'Celebraciones con alma y duende.', 
      img: caveDetail,
      link: '/eventos',
      num: '03'
    },
    { 
      title: 'Ubicación', 
      desc: 'Frente a la majestuosidad de la Alhambra.', 
      img: viewImg,
      link: '/contacto',
      num: '04'
    }
  ];

  return (
    <section className="py-40 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
             <h2 className="text-5xl font-serif text-deep-black mb-6">El Corazón del Sacromonte</h2>
             <p className="text-gray-400 font-light italic">Cuatro dimensiones de una experiencia única en el mundo.</p>
          </div>
          <div className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center animate-bounce">
            <ArrowRight className="rotate-90 text-gold" size={16} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {entryPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[600px] overflow-hidden bg-white hover:bg-deep-black transition-all duration-700"
            >
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-20 group-hover:opacity-40">
                 <img src={point.img} className="w-full h-full object-cover" alt={point.title} />
              </div>
              
              <div className="absolute top-12 left-12">
                 <span className="text-4xl font-serif text-gold/20 group-hover:text-gold/40 transition-colors uppercase">{point.num}</span>
              </div>

              <div className="absolute bottom-12 left-12 right-12 z-10">
                <h3 className="text-2xl font-serif text-deep-black group-hover:text-white mb-4 transition-colors">{point.title}</h3>
                <p className="text-xs text-gray-400 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 uppercase tracking-widest font-bold">
                  {point.desc}
                </p>
                <Link 
                  to={point.link}
                  className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gold font-bold opacity-0 group-hover:opacity-100 transition-all duration-700"
                >
                  Ver más <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
