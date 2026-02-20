import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// --- Animations ---
export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = ""
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 active:scale-95 tracking-wide relative overflow-hidden group";
  
  const variants = {
    // Vibrant Gradient Blue/Indigo
    primary: "bg-slate-900 text-white hover:shadow-lg hover:shadow-indigo-500/25 border border-transparent hover:-translate-y-0.5",
    // Clean secondary
    secondary: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    // Elegant outline
    outline: "border-2 border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900 bg-transparent",
    // Pure white for dark backgrounds
    white: "bg-white text-slate-900 hover:bg-slate-50 shadow-xl shadow-black/10"
  };

  const sizes = {
    sm: "px-6 py-2.5 text-xs uppercase tracking-widest",
    md: "px-8 py-3.5 text-sm uppercase tracking-widest",
    lg: "px-10 py-5 text-sm uppercase tracking-widest"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => (
  <div className="w-full group">
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-indigo-600 transition-colors">{label}</label>
    <input 
      className={`w-full px-6 py-4 rounded-xl border bg-white transition-all duration-300 outline-none font-medium
        ${error 
          ? 'border-red-300 bg-red-50/50' 
          : 'border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/5'
        } ${className}`}
      {...props}
    />
    {error && <p className="mt-2 text-xs text-red-500 font-medium ml-1">{error}</p>}
  </div>
);

// --- Section ---
export const Section: React.FC<HTMLMotionProps<'div'> & { containerClass?: string }> = ({ 
  children, 
  className = '', 
  containerClass = '',
  ...props 
}) => (
  <section className={`py-20 md:py-32 relative ${className}`} {...props}>
    <div className={`container mx-auto px-6 md:px-8 relative z-10 ${containerClass}`}>
      {children}
    </div>
  </section>
);

// --- Card ---
export const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => (
  <div className={`bg-white p-8 rounded-3xl border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ${hoverEffect ? 'hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);