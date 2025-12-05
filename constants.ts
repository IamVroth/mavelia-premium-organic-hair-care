import { Product, Testimonial } from './types';

// Updated with verified, reliable Unsplash IDs for luxury cosmetic packaging
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    number: '01',
    name: 'Premium Argan Oil Shampoo',
    type: 'Shampoo',
    tagline: 'Smooth. Nourish. Revive.',
    volume: '500ml / 16.9 fl.oz',
    description: 'Harnessing the natural hair care benefits of Moroccan argan oil, this shampoo effectively transforms dry, frizzy, and tangled hair. It helps heal and repair damaged hair cuticles, revealing hair that is resilient, smooth, and radiant.',
    benefits: ['Transforms dry, frizzy hair', 'Repairs damaged cuticles', 'Reveals resilient, smooth hair'],
    image: 'https://images.unsplash.com/photo-1631729372330-2eb635d8eb84?q=80&w=800&auto=format&fit=crop' // Beige/Gold Pump Bottle
  },
  {
    id: 'p2',
    number: '02',
    name: 'Velvet Smoothness Conditioner',
    type: 'Conditioner',
    tagline: 'Velvet Smoothness & Deep Repair',
    volume: '500ml / 16.9 fl.oz',
    description: 'Using the natural benefits of Moroccan Argan Oil, it nourishes the hair from the inside, smooths rough and raised hair cuticles, improves hair structure, reduces dryness, and makes it look healthy and refreshed.',
    benefits: ['Nourishes from the inside', 'Smooths rough cuticles', 'Reduces dryness & roughness'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop' // Matching Cosmetic Bottle
  },
  {
    id: 'p3',
    number: '03',
    name: 'Deep Repair Hair Mask',
    type: 'Hair Mask',
    tagline: 'Deep Repair • Strength Renewal • Velvet Softness',
    volume: '300ml / 10.1 fl.oz',
    description: 'Harnessing the natural hair care benefits of Moroccan Argan Oil, this deep-nourishing formula locks in essential nutrients to protect the hair core, repair fiber damage, and strengthen hair. It restores vitality and enhances long-lasting smoothness.',
    benefits: ['Protects hair core', 'Repairs fiber damage', 'Restores vitality'],
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop' // Luxury Cream Jar
  },
  {
    id: 'p4',
    number: '04',
    name: 'Radiant Shine Serum',
    type: 'Serum',
    tagline: 'Revives Hair Lustre • Restores Silkiness • Enhances Radiant Shine',
    volume: '100ml / 3.38 fl.oz',
    description: 'Made with the natural care power of Moroccan Argan Oil, this product goes deep into the hair core to help fix dry, frizzy, and dull hair from the inside. It deeply nourishes and keeps hair moisturized for a glossy finish.',
    benefits: ['Fixes dry & dull hair', 'Deeply nourishes', 'Adds radiant shine'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop' // Amber Dropper Bottle
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elena R.",
    role: "Verified Buyer",
    quote: "The serum (04) completely changed my hair texture. It went from frizzy to glass-like in one use."
  },
  {
    id: 2,
    name: "Sarah J.",
    role: "Salon Professional",
    quote: "Mavelia's organic formula is what I recommend to all my clients who need deep repair without the heavy chemicals."
  }
];