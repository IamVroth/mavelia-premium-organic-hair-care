import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { 
    num: '01', 
    title: 'Cleanse', 
    subtitle: 'Premium Argan Oil Shampoo',
    desc: 'Massage gently into wet hair and scalp. The organic formula opens cuticles to clean deep without stripping moisture.' 
  },
  { 
    num: '02', 
    title: 'Condition', 
    subtitle: 'Velvet Smoothness Conditioner',
    desc: 'Apply from mid-lengths to ends. Leave for 5–10 minutes as per label instructions for deep absorption.' 
  },
  { 
    num: '03', 
    title: 'Repair', 
    subtitle: 'Deep Repair Hair Mask',
    desc: 'For intense recovery, apply mask generously. Let the nutrients penetrate the core to repair fiber damage.' 
  },
  { 
    num: '04', 
    title: 'Shine', 
    subtitle: 'Radiant Shine Serum',
    desc: 'Finish by applying a moderate amount evenly. Locks in moisture, fixes frizz, and adds a glass-like shine.' 
  },
];

const Ritual: React.FC = () => {
  return (
    <section id="ritual" className="py-24 bg-[#121212] text-white relative overflow-hidden">
        {/* Decorative Gold Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-400/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gold-400 uppercase tracking-[0.3em] text-xs font-bold border border-gold-400/30 px-4 py-1 rounded-full"
                >
                    The Ritual
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl mt-6 mb-6 text-white"
                >
                    Four Steps to <span className="text-gold-300 italic">Perfection</span>
                </motion.h2>
                <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">
                    Follow our specific numbering system designed to layer hydration, repair structure, and seal in brilliance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                        className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-white/10 hover:border-gold-500/30 transition-all duration-500 group overflow-hidden"
                    >
                        {/* Background number watermark */}
                        <div className="absolute -bottom-10 -right-5 text-[150px] font-serif font-bold text-white/[0.03] group-hover:text-gold-500/[0.05] transition-colors leading-none select-none pointer-events-none">
                            {step.num}
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-3xl font-serif text-gold-400">{step.num}</span>
                                <div className="h-px flex-1 bg-gold-400/30"></div>
                            </div>
                            
                            <h3 className="text-2xl font-serif text-white mb-1">{step.title}</h3>
                            <div className="text-xs uppercase tracking-wider text-gold-200/70 mb-4 font-medium">{step.subtitle}</div>
                            
                            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Ritual;