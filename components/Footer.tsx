import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t border-gold-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold tracking-wider mb-4">MAVELIA</h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Redefining luxury hair care with the power of nature.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-serif text-lg text-gold-400 mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ingredients</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-serif text-lg text-gold-400 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex gap-6 mb-4 md:mb-0">
             <Instagram size={20} className="text-gray-400 hover:text-gold-400 cursor-pointer transition-colors" />
             <Facebook size={20} className="text-gray-400 hover:text-gold-400 cursor-pointer transition-colors" />
             <Twitter size={20} className="text-gray-400 hover:text-gold-400 cursor-pointer transition-colors" />
             <Mail size={20} className="text-gray-400 hover:text-gold-400 cursor-pointer transition-colors" />
          </div>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Mavelia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;