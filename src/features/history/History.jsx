import React from 'react';
import Timeline from './components/Timeline';

const History = () => {
  return (
    <div className="pt-32 pb-20 fade-in min-h-screen">
      <div className="section-container">
        <h1 className="text-5xl font-serif text-deep-black mb-8 text-center">Nuestra Historia</h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Descubre el legado de Cueva Venta El Gallo, un templo del flamenco en el corazón del Sacromonte.
        </p>
        
        <Timeline />
      </div>
    </div>
  );
};

export default History;
