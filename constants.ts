import { Service, PricingItem, BlogPost, FaqItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'dry-cleaning',
    title: 'Premium Dry Cleaning',
    description: 'Expert care for your delicate fabrics using eco-friendly solvents.',
    priceStart: 'From ₦2,500',
    icon: 'Shirt'
  },
  {
    id: 'wash-fold',
    title: 'Wash & Fold',
    description: 'Everyday laundry washed, dried, and neatly folded for you.',
    priceStart: 'From ₦800/kg',
    icon: 'Layers'
  },
  {
    id: 'ironing',
    title: 'Steam Ironing',
    description: 'Professional pressing to ensure your clothes are crisp and wrinkle-free.',
    priceStart: 'From ₦500/item',
    icon: 'Wind'
  },
  {
    id: 'corporate',
    title: 'Corporate Laundry',
    description: 'Specialized laundry solutions for hotels, hospitals, and businesses.',
    priceStart: 'Custom Quote',
    icon: 'Building2'
  },
  {
    id: 'express',
    title: 'Express Delivery',
    description: 'Same-day service for urgent laundry needs. Pickup before 10 AM.',
    priceStart: '+50% Surcharge',
    icon: 'Zap'
  },
  {
    id: 'shoes',
    title: 'Shoe & Bag Care',
    description: 'Professional cleaning and restoration for footwear and luxury bags.',
    priceStart: 'From ₦3,000',
    icon: 'Footprints'
  }
];

export const PRICING_DATA: PricingItem[] = [
  { item: 'T-Shirt', price: '₦1,500', category: 'Dry Cleaning' },
  { item: 'Suit (2pc)', price: '₦5,500', category: 'Dry Cleaning' },
  { item: 'Dress (Simple)', price: '₦3,500', category: 'Dry Cleaning' },
  { item: 'Trousers', price: '₦2,000', category: 'Dry Cleaning' },
  { item: 'Mixed Clothes (min 5kg)', price: '₦1,200/kg', category: 'Wash & Fold' },
  { item: 'Bed Sheet (Set)', price: '₦3,000', category: 'Household' },
  { item: 'Curtains (per kg)', price: '₦2,500', category: 'Household' },
  { item: 'Shirt Ironing', price: '₦800', category: 'Ironing' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Care for Your Clothes Properly',
    excerpt: 'Learn the secrets to extending the life of your favorite garments with these professional tips.',
    date: 'Oct 12, 2025',
    content: 'Full content goes here...',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Why Professional Dry Cleaning Matters',
    excerpt: 'Understanding the difference between home washing and professional dry cleaning.',
    date: 'Sep 28, 2025',
    content: 'Full content goes here...',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Laundry Tips for Busy Professionals',
    excerpt: 'Save time and look your best with our efficient laundry management strategies.',
    date: 'Sep 15, 2025',
    content: 'Full content goes here...',
    image: 'https://picsum.photos/800/600?random=3'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How long does delivery take?',
    answer: 'Standard service takes 48 hours. We also offer Express Same-Day service for pickups scheduled before 10 AM.'
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes! Our Express Service ensures your clothes are ready by 6 PM same day if picked up by 10 AM.'
  },
  {
    question: 'What areas do you cover?',
    answer: 'We currently serve Lagos Island, Lekki, Victoria Island, and Ikoyi. Mainland expansion is coming soon.'
  },
  {
    question: 'How are clothes handled?',
    answer: 'We sort clothes by color and fabric type. Delicate items are treated with special care and eco-friendly solvents.'
  }
];