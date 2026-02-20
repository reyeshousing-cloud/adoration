import React, { useState } from 'react';
import { Section, Input, Button, Card } from '../components/UI';
import { Calendar, Truck, Check, Info } from 'lucide-react';

const Book = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'Wash & Fold',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <Card className="max-w-lg w-full p-10 text-center">
          <div className="w-24 h-24 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
            <Check size={48} />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4 text-slate-900">Booking Received!</h2>
          <p className="text-slate-500 mb-8 text-lg">
            Thank you, {formData.name}. We have scheduled your pickup for <strong>{formData.date}</strong>. 
            <br/><br/>
            Our rider will call {formData.phone} shortly.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Book Another Pickup</Button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="pt-32 pb-16 bg-slate-50 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Schedule Pickup</h1>
        <p className="text-slate-500 text-lg">We'll be at your doorstep before you know it.</p>
      </div>

      <Section className="!pt-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="p-8 md:p-10 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                  <Truck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Pickup Details</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    label="Full Name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input 
                    label="Phone Number" 
                    name="phone" 
                    placeholder="080 1234 5678" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <Input 
                  label="Email Address" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input 
                  label="Pickup Address" 
                  name="address" 
                  placeholder="Street address, Apartment, City" 
                  required 
                  value={formData.address}
                  onChange={handleChange}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Service Type</label>
                    <select 
                      name="service"
                      className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option>Wash & Fold</option>
                      <option>Dry Cleaning</option>
                      <option>Ironing Only</option>
                      <option>Express Service</option>
                      <option>Household Items</option>
                    </select>
                  </div>
                  <Input 
                    label="Preferred Date" 
                    name="date" 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Special Instructions</label>
                  <textarea 
                    name="notes"
                    rows={4} 
                    className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                    placeholder="Gate code, specific stains to watch for, etc."
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full mt-4">Confirm Booking</Button>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem]">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Calendar className="text-teal-400" size={24} /> Opening Hours
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Mon - Fri</span> <span className="font-medium text-white">8am - 8pm</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span> <span className="font-medium text-white">9am - 6pm</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="font-medium text-white">Closed</span></li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 p-8 rounded-[2rem]">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center shrink-0">
                  <Info size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Express Service</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Need it today? Call our express line for immediate pickup. +50% surcharge applies.
                  </p>
                  <a href="tel:+234800000000" className="text-teal-600 font-bold hover:underline">
                    Call +234 800 ADORATION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Book;