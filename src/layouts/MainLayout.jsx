import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, WhatsApp } from 'lucide-react';

const MainLayout = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Structural Navbar (Simplified for Modular Restart) */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-8 px-12 transition-all duration-500">
        <div className="glass-card rounded-full px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-xl font-serif font-black tracking-tighter text-sacromonte-red">EL GALLO</Link>
            <div className="hidden lg:flex items-center gap-8">
               {['history', 'artists', 'restaurant', 'events', 'contact'].map((page) => (
                 <Link 
                   key={page} 
                   to={`/${page}`} 
                   className="text-[10px] uppercase font-black tracking-widest text-deep-black/60 hover:text-sacromonte-red transition-colors"
                 >
                   {t(`nav.${page}`)}
                 </Link>
               ))}
            </div>
          </div>
          <button className="btn-primary py-2 px-6">Reservar</button>
        </div>
      </nav>

      {/* Dynamic Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer (Simplified) */}
      <footer className="bg-deep-black py-20 text-white">
        <div className="section-container border-t border-white/5 pt-12 text-center">
          <p className="text-[10px] uppercase tracking-wide-4 opacity-40">© 2026 Cueva Venta El Gallo - Sacromonte, Granada</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
