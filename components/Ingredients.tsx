import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, ShieldCheck } from 'lucide-react';

const Ingredients: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gold-100/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
             <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=2601&auto=format&fit=crop" 
                    alt="Pure Argan Oil Texture"
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                 />
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <div>
                <h2 className="font-serif text-4xl text-dark-900 mb-4">Liquid Gold from Morocco</h2>
                <div className="w-20 h-1 bg-gold-500 mb-6"></div>
                <p className="text-gray-600 leading-relaxed">
                    At the heart of every Mavelia product lies pure, organic Moroccan Argan Oil. 
                    Known as "liquid gold," it is rich in essential nutrients, antioxidants, 
                    and Vitamin E, providing your hair with unparalleled nourishment and protection.
                </p>
            </div>

            <div className="grid gap-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full shadow-md text-gold-600">
                        <Droplets size={24} />
                    </div>
                    <div>
                        <h4 className="font-serif text-lg font-bold text-dark-900">Deep Hydration</h4>
                        <p className="text-sm text-gray-500">Locks in moisture to repair fiber damage from within.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full shadow-md text-gold-600">
                        <Sparkles size={24} />
                    </div>
                    <div>
                        <h4 className="font-serif text-lg font-bold text-dark-900">Radiant Shine</h4>
                        <p className="text-sm text-gray-500">Smooths the cuticle for a glass-like, non-greasy finish.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full shadow-md text-gold-600">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-serif text-lg font-bold text-dark-900">Organic Formula</h4>
                        <p className="text-sm text-gray-500">Free from harmful chemicals. Safe for treated hair.</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;