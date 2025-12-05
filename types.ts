export interface Product {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  volume: string;
  image: string;
  type: 'Shampoo' | 'Conditioner' | 'Hair Mask' | 'Serum';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}