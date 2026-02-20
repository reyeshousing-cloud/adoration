export interface Service {
  id: string;
  title: string;
  description: string;
  priceStart: string;
  icon: string;
}

export interface PricingItem {
  item: string;
  price: string;
  category: 'Wash & Fold' | 'Dry Cleaning' | 'Ironing' | 'Household';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}