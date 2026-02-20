import React from 'react';
import { Section, Input, Button, Card } from '../components/UI';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-50 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">Have questions? We'd love to hear from you. Reach out to us anytime.</p>
      </div>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Contact Information</h2>
            <div className="grid gap-6">
              {[
                { icon: MapPin, title: 'Visit Us', text: '18 Nwachinemelu Nwabugo street, Anambra, Nigeria', color: 'bg-emerald-50 text-emerald-600' },
                { icon: Phone, title: 'Call Us', text: '+234-9048566947', color: 'bg-blue-50 text-blue-600' },
                { icon: Mail, title: 'Email Us', text: 'hello@adorationlaundry.ng', color: 'bg-purple-50 text-purple-600' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shrink-0`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-[2rem] text-white shadow-xl shadow-green-500/20">
              <h3 className="font-bold text-2xl mb-2">Chat on WhatsApp</h3>
              <p className="text-green-50 mb-6 opacity-90">Need a quick response? Chat directly with our customer support team.</p>
              <a href="https://wa.me/2349048566947" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-white text-green-700 border-none hover:bg-green-50 flex items-center gap-2 justify-center">
                  <MessageCircle size={20} /> Open WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Form */}
          <Card className="p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-2">
              <Send className="text-teal-600" /> Send a Message
            </h2>
            <form className="space-y-6">
              <Input label="Name" placeholder="Your Name" />
              <Input label="Email" type="email" placeholder="Your Email" />
              <Input label="Subject" placeholder="Inquiry about..." />
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button className="w-full" size="lg">Send Message</Button>
            </form>
          </Card>
        </div>
      </Section>

      {/* Map Placeholder */}
      <div className="h-[400px] w-full bg-slate-200 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.735626960017!2d3.4187!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad067687817%3A0x6731034405373307!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1645434523451!5m2!1sen!2sus" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen 
           loading="lazy"
         ></iframe>
      </div>
    </>
  );
};

export default Contact;