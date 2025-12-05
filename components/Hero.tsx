import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#Fdfbf7]">
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2600&auto=format&fit=crop"
          alt="Golden Silky Hair Texture"
          className="w-full h-[120%] object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/10" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                <h2 className="text-white text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-shadow-sm">
                    Organic Formula
                </h2>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-6 drop-shadow-lg leading-tight">
            Premium <br/>
            <span className="italic text-gold-300 relative inline-block">
                Argan Oil
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/90 max-w-lg mx-auto mb-10 text-base md:text-xl font-light leading-relaxed drop-shadow-md"
        >
          Transform dry, frizzy hair with the revitalizing power of nature. 
          Deep repair, velvet softness, and radiant shine in four steps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
             <button 
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold-500 hover:bg-gold-400 text-white border border-transparent px-10 py-4 rounded-full uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
             >
                Shop Collection
            </button>
            <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-dark-900 px-10 py-4 rounded-full uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300"
            >
                Discover Ingredients
            </button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;