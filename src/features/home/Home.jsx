import React from 'react';
import Hero from './components/Hero';

const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      {/* Future sections will be imported here as modular components */}
      <section className="py-40 text-center">
         <h2 className="text-4xl opacity-20">Contenido en construcción modulada...</h2>
      </section>
    </div>
  );
};

export default Home;
