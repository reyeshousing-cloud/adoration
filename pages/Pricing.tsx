import React from 'react';
import { Section, Button, FadeIn } from '../components/UI';
import { PRICING_DATA } from '../constants';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  const categories = Array.from(new Set(PRICING_DATA.map(i => i.category)));

  return (
    <>
      <div className="pt-40 pb-20 container mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-widest mb-6">Simple Pricing</div>
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 tracking-tight">Invest in Quality</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Premium care at honest prices. No hidden fees.
          </p>
        </FadeIn>
      </div>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-32">
           {/* Plan Cards */}
           {[
            { name: 'Standard', desc: '48hr Turnaround', price: 'Standard', features: ['Wash & Fold', 'Free Pickup > ₦10k', 'Standard Folding'], highlight: false },
            { name: 'Express', desc: 'Same Day Delivery', price: '+50%', features: ['Priority Handling', 'Express Pickup', 'Premium Packaging'], highlight: true },
            { name: 'Corporate', desc: 'For Business', price: 'Custom', features: ['Monthly Billing', 'Dedicated Account Mgr', 'Volume Discounts'], highlight: false },
          ].map((plan, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`h-full p-10 rounded-[2.5rem] flex flex-col transition-transform duration-300 hover:-translate-y-2 ${plan.highlight ? 'bg-slate-900 text-white shadow-2xl shadow-indigo-900/20' : 'bg-white border border-slate-100 shadow-lg shadow-slate-200/50'}`}>
                 <div className="mb-8">
                    <h3 className="text-3xl font-serif mb-2">{plan.name}</h3>
                    <p className={`text-xs font-bold uppercase tracking-widest ${plan.highlight ? 'text-indigo-400' : 'text-slate-400'}`}>{plan.desc}</p>
                 </div>
                 
                 <div className="mb-10 text-4xl font-serif">{plan.price}</div>

                 <ul className="space-y-6 mb-12 flex-grow">
                   {plan.features.map((f, idx) => (
                     <li key={idx} className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider">
                       <div className={`p-1 rounded-full ${plan.highlight ? 'bg-indigo-600' : 'bg-indigo-100 text-indigo-600'}`}>
                          <Check size={12} strokeWidth={4} />
                       </div>
                       {f}
                     </li>
                   ))}
                 </ul>

                 <Link to="/book" className="w-full">
                   <Button className="w-full" variant={plan.highlight ? 'white' : 'primary'}>
                      {plan.name === 'Corporate' ? 'Contact Us' : 'Choose Plan'}
                   </Button>
                 </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Detailed List */}
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
           <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-slate-900">Itemized Price List</h2>
           </div>
           <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {categories.map((cat, i) => (
                <FadeIn key={cat} delay={i * 0.1}>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold uppercase tracking-widest text-indigo-600 mb-6 pb-2 border-b border-indigo-100">{cat}</h3>
                    <div className="space-y-5">
                      {PRICING_DATA.filter(item => item.category === cat).map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center group">
                          <span className="font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{item.item}</span>
                          <span className="font-bold text-slate-900 font-serif text-lg">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </Section>
    </>
  );
};

export default Pricing;