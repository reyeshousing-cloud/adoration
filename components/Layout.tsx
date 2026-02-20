import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, Phone, Mail, Shirt } from 'lucide-react';
import { Button } from './UI';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'top-4' : 'top-6'}`}>
        <div className={`
          relative flex items-center justify-between transition-all duration-500 ease-out
          ${isScrolled 
            ? 'w-[95%] max-w-7xl glass-panel shadow-2xl shadow-indigo-900/10 rounded-full px-6 py-3' 
            : 'w-full container px-8 bg-transparent py-2'
          }
        `}>
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group z-50">
            <div className="relative">
               <div className="absolute inset-0 bg-indigo-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
               <div className={`relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-indigo-800 text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg`}>
                 <Shirt size={20} className="text-indigo-200" />
               </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-serif font-bold tracking-tight text-xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-600 group-hover:to-purple-600 transition-all duration-500`}>
                Adoration
              </span>
              <span className="text-[0.6rem] font-bold uppercase tracking-wider text-indigo-600 leading-tight mt-0.5 hidden sm:block">
                Laundry & Dry Cleaning Services
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 p-1.5 rounded-full border border-white/40 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
            <Link to="/book">
              <Button size="sm" variant="primary" className="shadow-indigo-500/20">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white text-slate-900 shadow-lg border border-slate-100 z-50 hover:bg-slate-50"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#FAFAFA] transition-all duration-500 ease-[0.76, 0, 0.24, 1] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
          
          <div className="space-y-4 relative z-10">
            {navLinks.concat({ name: 'Contact', path: '/contact' }).map((link, idx) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="block text-5xl md:text-7xl font-serif font-bold text-slate-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-slate-900 hover:to-indigo-600 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-12 pt-12 border-t border-slate-200 flex flex-col items-start gap-6">
             <Link to="/book" onClick={() => setIsOpen(false)} className="w-full">
                <Button size="lg" className="w-full text-lg">Book a Pickup</Button>
             </Link>
             <div className="text-slate-500">
                <p className="text-lg font-medium">+234 800 ADORATION</p>
                <p className="text-lg">hello@adorationlaundry.ng</p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer = () => (
  <footer className="bg-[#0B1120] text-slate-300 pt-32 pb-10 rounded-t-[3rem] mt-20 relative overflow-hidden">
    {/* Abstract Shapes */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

    <div className="container mx-auto px-6 md:px-8 relative z-10">
      <div className="grid md:grid-cols-12 gap-12 mb-24 border-b border-white/5 pb-16">
         <div className="md:col-span-5">
            <div className="flex items-center gap-4 text-white mb-8 group">
              <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-3 rounded-2xl shadow-lg shadow-indigo-900/50 group-hover:scale-110 transition-transform duration-500">
                <Shirt size={28} className="text-white" />
              </div>
              <div>
                  <span className="text-3xl font-bold font-serif block leading-none tracking-tight">Adoration</span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-indigo-300 block mt-1.5">Laundry & Dry Cleaning Services</span>
              </div>
            </div>
            <h2 className="text-3xl font-serif text-white mb-6 leading-tight">Care that feels <br/> like magic.</h2>
            <div className="flex gap-4">
              <Button variant="white" size="sm" className="font-bold">Book Now</Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-slate-900 hover:border-white">Contact Us</Button>
            </div>
         </div>
         
         <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 opacity-50">Sitemap</h4>
            <ul className="space-y-4 font-medium">
               {['Home', 'Services', 'Pricing', 'About'].map(i => (
                  <li key={i}><Link to={`/${i === 'Home' ? '' : i.toLowerCase()}`} className="hover:text-white transition-colors hover:translate-x-1 inline-block">{i}</Link></li>
               ))}
            </ul>
         </div>

         <div className="md:col-span-4">
           <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 opacity-50">Contact</h4>
           <ul className="space-y-6">
             <li className="flex gap-4 items-start">
                <div className="w-6 mt-1 text-indigo-400"><Phone size={20} /></div>
                <span className="text-xl text-white font-serif">+234-9048566947</span>
             </li>
             <li className="flex gap-4 items-start">
                <div className="w-6 mt-1 text-indigo-400"><Mail size={20} /></div>
                <span className="text-lg">hello@adorationlaundry.ng</span>
             </li>
           </ul>
         </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
         <p>© 2026 Adoration Laundry.</p>
         <div className="flex gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
               <a key={i} href="#" className="hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"><Icon size={16} /></a>
            ))}
         </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-600 selection:text-white overflow-x-hidden">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);