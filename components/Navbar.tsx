import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Droplet } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
             {/* Gold Drop Logo using Icon instead of Image for reliability */}
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center shadow-md">
                <Droplet className="w-4 h-4 text-white fill-current" />
             </div>
             <span className={`font-serif text-2xl font-bold tracking-widest ${isScrolled ? 'text-dark-900' : 'text-dark-900 md:text-white'}`}>
               MAVELIA
             </span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex gap-8 items-center ${isScrolled ? 'text-dark-800' : 'text-white'}`}>
            <a href="#collection" className="hover:text-gold-400 transition-colors uppercase text-xs tracking-[0.2em] font-medium">Collection</a>
            <a href="#ritual" className="hover:text-gold-400 transition-colors uppercase text-xs tracking-[0.2em] font-medium">Ritual</a>
            <a href="#about" className="hover:text-gold-400 transition-colors uppercase text-xs tracking-[0.2em] font-medium">Philosophy</a>
            <button className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-gold-500/20">
              <ShoppingBag size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Shop</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-dark-900' : 'text-dark-900'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-dark-900 p-2"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8 text-center">
              <a onClick={() => setIsMobileMenuOpen(false)} href="#collection" className="font-serif text-3xl text-dark-900 hover:text-gold-600 italic">The Collection</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#ritual" className="font-serif text-3xl text-dark-900 hover:text-gold-600 italic">The Ritual</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="font-serif text-3xl text-dark-900 hover:text-gold-600 italic">Our Philosophy</a>
              
              <div className="mt-8">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-dark-900 text-gold-400 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold"
                >
                  Shop All Products
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;