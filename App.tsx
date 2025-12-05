import React from 'react';
import { PRODUCTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Ritual from './components/Ritual';
import Ingredients from './components/Ingredients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-dark-900 selection:bg-gold-200 selection:text-dark-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Collection Section */}
        <section id="collection" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold">Discover Excellence</span>
              <h2 className="font-serif text-4xl md:text-5xl text-dark-900">The Collection</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Ingredients />
        
        <Ritual />

        {/* Newsletter/CTA */}
        <section className="py-24 bg-gold-500 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             
             <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Join the Mavelia Club</h2>
                <p className="text-white/80 max-w-lg mx-auto mb-8">
                    Subscribe for exclusive offers, hair care tips, and early access to new organic formulas.
                </p>
                <div className="flex flex-col md:flex-row max-w-md mx-auto gap-4">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:bg-white focus:text-dark-900 transition-all"
                    />
                    <button className="px-8 py-4 bg-dark-900 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-gold-600 transition-all">
                        Subscribe
                    </button>
                </div>
             </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;