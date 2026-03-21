import React from 'react';
import MenuHighlight from './components/MenuHighlight';

const Restaurant = () => {
  const menus = [
    { title: "Menú Sacromonte", description: "Una selección de tapas tradicionales andaluzas con un toque contemporáneo.", price: "45", features: ["Surtido Ibérico", "Tortilla del Sacromonte", "Vino D.O. Granada"] },
    { title: "Menú Degustación El Gallo", description: "Experiencia gastronómica completa para los paladares más exigentes durante el espectáculo.", price: "65", features: ["Aperitivo de Bienvenida", "Primer Plato a elegir", "Segundo Plato", "Postre Casero"] }
  ];

  return (
    <div className="pt-32 pb-20 fade-in min-h-screen bg-gray-50">
      <div className="section-container">
        <h1 className="text-5xl font-serif text-deep-black mb-8 text-center uppercase tracking-widest text-gold-500">Gastronomía y Menús</h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-20">
          Saborea la auténtica cocina andaluza en nuestras cuevas gastronómicas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {menus.map((menu, idx) => (
             <MenuHighlight key={idx} {...menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
