import React from 'react';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Pillars from './components/Pillars';

const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      <Narrative />
      <Pillars />
      
      {/* Dynamic Booking Section will follow here */}
      <section className="py-40 bg-deep-black text-white text-center">
         <div className="section-container">
           <h2 className="text-5xl font-serif mb-12 italic">¿Listo para la autenticidad?</h2>
           <button className="btn-gold">Reservar Mesa y Espectáculo</button>
         </div>
      </section>
    </div>
  );
};

export default Home;
