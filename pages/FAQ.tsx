import React, { useState } from 'react';
import { Section } from '../components/UI';
import { FAQS } from '../constants';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'border-teal-200 shadow-lg shadow-teal-900/5' : 'border-slate-200'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
      >
        <span className={`font-bold text-lg ${isOpen ? 'text-teal-800' : 'text-slate-900'}`}>{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
      </button>
      <div className={`px-8 text-slate-600 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-50 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Questions?</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Everything you need to know about our premium service.</p>
      </div>

      <Section className="!pt-0 min-h-[60vh]">
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Still have questions?</h2>
            <p className="text-slate-400 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-colors">
              <HelpCircle size={20} /> Contact Support
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FAQ;