import { motion, AnimatePresence } from 'motion/react';
import { Bike, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Terms', href: '/terms' },
    { label: 'Service', href: '/#service' },
    { label: 'Contact', href: '/#contact' }
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/6281234567890?text=Halo Jimbaride, saya ingin menanyakan ketersediaan sewa motor.`, '_blank');
  };

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-jimba-deep/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-jimba-foam flex items-center justify-center transition-transform group-hover:rotate-12">
              <Bike className="text-jimba-deep w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-brand tracking-tighter transition-colors group-hover:text-jimba-accent leading-none">JIMBARIDE</span>
              <span className="text-[7px] font-light tracking-[0.3em] text-white/60 ml-0.5 mt-1">SINCE 2017</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a key={item.label} href={item.href} className="hover:text-jimba-accent transition-colors">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className={`transition-colors ${location.pathname === item.href ? 'text-jimba-accent' : 'hover:text-jimba-accent'}`}>
                  {item.label}
                </Link>
              )
            ))}
            <button 
              onClick={handleWhatsApp}
              className="bg-jimba-foam text-jimba-deep px-6 py-2.5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/20"
            >
              BOOK NOW
            </button>
          </div>

          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center bg-white/10 rounded-full" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-jimba-deep flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <span className="text-xl font-brand leading-none">JIMBARIDE</span>
                <span className="text-[7px] font-light tracking-[0.3em] text-white/50 mt-1 ml-0.5">SINCE 2017</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full"><X /></button>
            </div>
            <div className="flex flex-col gap-8 text-3xl font-display font-black italic">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-jimba-accent transition-colors uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <button onClick={() => { handleWhatsApp(); setMobileMenuOpen(false); }} className="w-full py-5 bg-jimba-foam text-jimba-deep rounded-2xl font-black text-xl mb-8">
                BOOK NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
