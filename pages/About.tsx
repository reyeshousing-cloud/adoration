import React from 'react';
import { Section, FadeIn } from '../components/UI';
import { CheckCircle, Shield, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <>
      <div className="pt-40 pb-20 container mx-auto px-6">
        <FadeIn>
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-6 block">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-12 tracking-tight">
            Fabric Care <br/> Specialists.
          </h1>
        </FadeIn>
        
        <div className="grid lg:grid-cols-2 gap-20">
           <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-900 font-serif leading-relaxed">
                Adoration Laundry isn't just a business; it's a promise to treat your garments with the respect they deserve. We combine artisanal attention to detail with modern convenience.
              </p>
           </FadeIn>
           <FadeIn delay={0.4} className="space-y-6 text-slate-600 text-lg font-medium">
              <p>Founded in 2020, we identified a gap in the market for a laundry service that combined speed, impeccable quality, and transparent pricing.</p>
              <p>We started with a small team on Lagos Island. Today, we are proud to serve thousands of households and businesses, employing over 50 fabric care experts.</p>
           </FadeIn>
        </div>
      </div>

      <div className="w-full h-[600px] bg-slate-200 overflow-hidden">
         <img 
           src="https://images.unsplash.com/photo-1581339399838-2a120c18bba3?q=80&w=2070&auto=format&fit=crop" 
           className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" 
           alt="Our Team"
         />
      </div>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Integrity', desc: 'Transparent pricing. No hidden fees. Complete honesty in every transaction.' },
            { icon: CheckCircle, title: 'Quality', desc: 'We inspect every item three times before it is packaged for delivery.' },
            { icon: Users, title: 'Service', desc: 'Your satisfaction is the only metric that matters to us. We guarantee it.' },
            { icon: Globe, title: 'Eco-Friendly', desc: 'We use biodegradable solvents to protect our Lagos environment.' },
          ].map((val, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                 <val.icon size={24} />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900">{val.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{val.desc}</p>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;