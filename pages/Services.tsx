import React from 'react';
import { Section, Card, FadeIn, Button } from '../components/UI';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { Shirt, Layers, Wind, Building2, Zap, Footprints, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Shirt': <Shirt size={32} />,
  'Layers': <Layers size={32} />,
  'Wind': <Wind size={32} />,
  'Building2': <Building2 size={32} />,
  'Zap': <Zap size={32} />,
  'Footprints': <Footprints size={32} />,
};

const Services = () => {
  return (
    <>
      <div className="pt-40 pb-20 container mx-auto px-6">
         <FadeIn>
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-widest mb-6">World Class Care</div>
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 tracking-tight">Our Services</h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl font-medium leading-relaxed">
            From your daily wear to your most precious couture, we have a specialized process for every fabric type.
          </p>
         </FadeIn>
      </div>

      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 0.1}>
               <Card className="h-full flex flex-col justify-between group hover:border-indigo-600/20 hover:shadow-xl hover:shadow-indigo-900/5 bg-white">
                 <div>
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                     {iconMap[service.icon]}
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
                   <p className="text-slate-500 mb-8 leading-relaxed font-medium">{service.description}</p>
                 </div>
                 
                 <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                   <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">{service.priceStart}</span>
                   <Link to="/book" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                     <ArrowUpRight size={20} />
                   </Link>
                 </div>
               </Card>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-20 bg-indigo-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-[80px]"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-serif mb-6">Not sure what you need?</h2>
              <p className="text-indigo-100 mb-8 text-lg max-w-xl mx-auto">Our experts can inspect your garments and recommend the best treatment.</p>
              <Link to="/contact"><Button variant="white">Talk to an Expert</Button></Link>
           </div>
        </div>
      </Section>
    </>
  );
};

export default Services;