import React from 'react';

const MenuHighlight = ({ title, description, price, features }) => {
  return (
    <div className="border border-gold-500/30 p-8 rounded-xl bg-white shadow-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-shadow duration-500 flex flex-col h-full">
      <h3 className="text-3xl font-serif font-bold text-deep-black mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      {features && (
        <ul className="mb-8 space-y-2">
          {features.map((feature, idx) => (
             <li key={idx} className="flex items-center text-sm text-gray-700">
               <span className="text-gold-500 mr-2">✦</span> {feature}
             </li>
          ))}
        </ul>
      )}
      
      <div className="mt-auto border-t border-gray-100 pt-6 flex justify-between items-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Desde</span>
        <span className="text-3xl font-bold text-gold-600">{price}€</span>
      </div>
    </div>
  );
};

export default MenuHighlight;
