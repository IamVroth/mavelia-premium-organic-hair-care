import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ImageOff } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      {/* Number Badge - Styled like the label */}
      <div className="absolute top-0 left-0 p-6 z-20 pointer-events-none">
        <span className="font-serif text-7xl text-white/90 font-bold drop-shadow-md group-hover:text-gold-200 transition-colors">
          {product.number}
        </span>
      </div>

      {/* Image Area - Lifestyle Full Bleed */}
      <div className="relative h-80 w-full overflow-hidden bg-[#F3EFE0]">
        {/* Subtle overlay for text contrast if needed, mostly for style */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10 opacity-60 pointer-events-none"></div>
        
        {!imageError ? (
          <motion.img 
            src={product.image} 
            alt={product.name}
            onError={() => setImageError(true)}
            className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-300">
             <ImageOff size={48} />
             <span className="text-xs uppercase mt-2">Image unavailable</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col relative">
        {/* Type Label */}
        <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-gold-600 uppercase">
            {product.type}
            </span>
            <span className="text-[10px] font-sans font-medium text-gray-400 tracking-wider">
                {product.volume}
            </span>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl text-dark-900 mb-3 leading-none">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-5 border-b border-gold-100 pb-4">
          {product.tagline}
        </p>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 flex-1">
          {product.description}
        </p>

        {/* Action Area */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Price</span>
            <span className="font-serif text-xl text-dark-900 font-medium">$45.00</span>
          </div>
          <button className="w-12 h-12 rounded-full bg-dark-900 text-gold-400 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all shadow-lg hover:shadow-gold-500/30">
            <Plus size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;