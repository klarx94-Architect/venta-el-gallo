import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import logoGallo from '../assets/raw/logoVentaelGallo.webp';
import FloatingActions from '../components/layout/FloatingActions';

const MainLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'history', path: 'historia' },
    { key: 'artists', path: 'artistas' },
    { key: 'restaurant', path: 'restaurante' },
    { key: 'contact', path: 'contacto' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-deep-black">
      {/* Structural Navbar - Nuclear Standard (Glassmorphism) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'} px-6 lg:px-12 pointer-events-none`}>
        <div className={`max-w-7xl mx-auto rounded-full px-8 py-4 flex items-center justify-between transition-all duration-700 pointer-events-auto ${scrolled ? 'bg-deep-black/85 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'bg-transparent border border-transparent'}`}>
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-4 group">
              <img src={logoGallo} alt="Venta El Gallo Logo" className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
              <span className={`text-lg md:text-xl font-serif font-black tracking-widest uppercase transition-colors duration-500 whitespace-nowrap ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                Venta El Gallo
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8 ml-8">
               {navLinks.map((link) => {
                 const isActive = location.pathname.includes(link.path);
                 return (
                   <Link 
                     key={link.key} 
                     to={`/${link.path}`} 
                     className={`relative text-[10px] uppercase font-black tracking-[0.2em] transition-all duration-500 hover:text-gold ${isActive ? 'text-gold' : 'text-gray-300'}`}
                   >
                     {t(`nav.${link.key}`) || link.key}
                     {isActive && (
                       <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-gold rounded-full transform -translate-x-1/2 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
                     )}
                   </Link>
                 );
               })}
            </div>
          </div>
          <Link to="/contacto" className="hidden lg:block btn-gold shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            Vivir la Experiencia
          </Link>
          <button className="lg:hidden text-white hover:text-gold transition-colors">
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Dynamic Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global Actions (WhatsApp/ScrollTop) */}
      <FloatingActions />

      {/* Footer - High End Professional */}
      <footer className="bg-gradient-to-b from-deep-black to-[#0a0a0a] pt-24 pb-12 text-white/70 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
           
           {/* Column 1: Brand & Desc */}
           <div className="flex flex-col">
             <Link to="/" className="flex items-center gap-4 mb-8">
                <img src={logoGallo} alt="Venta El Gallo" className="w-16 h-16 opacity-80" />
                <span className="text-xl font-serif font-black tracking-widest uppercase text-white">Venta El Gallo</span>
             </Link>
             <p className="text-sm font-light leading-relaxed mb-6">
               Una cueva milenaria donde el flamenco se vive en su estado más puro. Manteniendo vivo el legado de Juanillo Heredia desde 1953.
             </p>
             <div className="flex items-center gap-4">
               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300"><Facebook size={18} /></a>
             </div>
           </div>

           {/* Column 2: Navigation */}
           <div className="flex flex-col">
             <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white mb-8">La Experiencia</h4>
             <ul className="space-y-4">
               <li><Link to="/historia" className="text-sm font-light hover:text-gold transition-colors">Nuestro Legado</Link></li>
               <li><Link to="/artistas" className="text-sm font-light hover:text-gold transition-colors">Zambra y Artistas</Link></li>
               <li><Link to="/restaurante" className="text-sm font-light hover:text-gold transition-colors">Gastronomía</Link></li>
               <li><Link to="/contacto" className="text-sm font-light hover:text-gold transition-colors">Eventos Exclusivos</Link></li>
             </ul>
           </div>

           {/* Column 3: Legal */}
           <div className="flex flex-col">
             <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white mb-8">Políticas Legales</h4>
             <ul className="space-y-4">
               <li><Link to="#" className="text-sm font-light hover:text-gold transition-colors">Aviso Legal</Link></li>
               <li><Link to="#" className="text-sm font-light hover:text-gold transition-colors">Política de Privacidad</Link></li>
               <li><Link to="#" className="text-sm font-light hover:text-gold transition-colors">Política de Cookies</Link></li>
               <li><Link to="#" className="text-sm font-light hover:text-gold transition-colors">Términos de Reserva</Link></li>
             </ul>
           </div>

           {/* Column 4: Contact */}
           <div className="flex flex-col">
             <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-white mb-8">Contacto</h4>
             <ul className="space-y-6">
               <li className="flex items-start gap-4">
                 <MapPin size={18} className="text-gold shrink-0 mt-1" />
                 <span className="text-sm font-light leading-relaxed">Barranco de los Negros, 5<br/> 18010 Sacromonte, Granada</span>
               </li>
               <li className="flex items-center gap-4">
                 <Phone size={18} className="text-gold shrink-0" />
                 <span className="text-sm font-light">+34 958 22 84 76</span>
               </li>
               <li className="flex items-center gap-4">
                 <Mail size={18} className="text-gold shrink-0" />
                 <span className="text-sm font-light">info@ventaelgallo.com</span>
               </li>
             </ul>
           </div>

        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col items-center">
           <div className="w-full h-px bg-white/5 mb-8"></div>
           <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-2">Patrimonio del Sacromonte</p>
           <p className="text-[10px] uppercase tracking-wider text-white/20">© 2026 Cueva Venta El Gallo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
