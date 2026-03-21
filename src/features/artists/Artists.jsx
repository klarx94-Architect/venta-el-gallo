import React from 'react';
import ArtistCard from './components/ArtistCard';

const Artists = () => {
  const artists = [
    { name: "Juan Heredia", role: "Cantaor", imageUrl: "" },
    { name: "María La Canastera", role: "Bailaora", imageUrl: "" },
    { name: "Paco El Guitarrero", role: "Guitarrista", imageUrl: "" },
    { name: "Estrella", role: "Bailaora Principal", imageUrl: "" }
  ];

  return (
    <div className="pt-32 pb-20 fade-in min-h-screen bg-deep-black text-white">
      <div className="section-container">
        <h1 className="text-5xl font-serif mb-8 text-center uppercase tracking-widest text-gold-400">Elenco Artístico</h1>
        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-20">
          Conoce a los maestros que dan vida a la Zambra gitana cada noche.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {artists.map((artist, idx) => (
             <ArtistCard key={idx} name={artist.name} role={artist.role} imageUrl={artist.imageUrl} />
           ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
