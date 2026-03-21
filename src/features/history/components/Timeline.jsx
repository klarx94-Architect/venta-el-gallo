import React from 'react';

const Timeline = () => {
  const events = [
    { year: "1977", title: "Fundación", desc: "Juanillo el Gallo funda la Cueva en el corazón del Sacromonte." },
    { year: "1980s", title: "La Zambra Gitana", desc: "Consolidación de nuestra Zambra como referente indiscutible del Flamenco en Granada." },
    { year: "2000s", title: "Expansión Culinaria", desc: "Integración de la gastronomía andaluza de alta gama en la experiencia." },
    { year: "Presente", title: "Legado Vivo", desc: "Seguimos honrando nuestras raíces mientras miramos al futuro." }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        {events.map((evt, idx) => (
          <div key={idx} className="flex flex-col md:flex-row mb-12 relative">
            <div className="md:w-1/3 flex md:justify-end pr-8">
              <span className="text-4xl font-serif text-gold-500 font-bold">{evt.year}</span>
            </div>
            <div className="hidden md:block w-px bg-gold-500/30 relative">
              <div className="absolute top-2 -left-1.5 w-3 h-3 rounded-full bg-gold-400"></div>
            </div>
            <div className="md:w-2/3 md:pl-8 pt-2 md:pt-0">
              <h3 className="text-2xl font-bold mb-2 text-deep-black">{evt.title}</h3>
              <p className="text-gray-600 leading-relaxed">{evt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
