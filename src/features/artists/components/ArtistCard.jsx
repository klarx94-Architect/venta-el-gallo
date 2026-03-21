import React from 'react';

const ArtistCard = ({ name, role, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-deep-black text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500">
      <div className="aspect-[3/4] overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
             <span className="text-gray-500 italic">Imagen no disponible</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent opacity-80"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-serif font-bold mb-1 text-gold-400">{name}</h3>
        <p className="text-sm uppercase tracking-widest text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{role}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
