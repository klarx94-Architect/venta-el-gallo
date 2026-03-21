import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Pillars from './components/Pillars';

const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      <Narrative />
      <Pillars />
      
      {/* Dynamic Booking Section */}
      <section className="py-40 bg-deep-black text-white text-center">
         <div className="section-container">
           <h2 className="text-5xl font-serif mb-12 italic tracking-wide">¿Listo para la autenticidad?</h2>
           <Link to="/contacto" className="btn-gold text-lg px-8 py-4 inline-block transform transition-transform duration-300 hover:scale-105">
             Reservar Mesa y Espectáculo
           </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;
