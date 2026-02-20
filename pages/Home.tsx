import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield, Sparkles, Shirt, CheckCircle } from 'lucide-react';
import { Section, Button, Card, FadeIn } from '../components/UI';

const Home = () => {
  return (
    <>
      {/* Dynamic Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#FAFAFA]">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-b from-indigo-100/40 to-blue-50/0 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="order-2 lg:order-1">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-slate-600">The #1 Choice in Lagos</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.95] tracking-tight mb-8">
                  The Art of <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-600">Clean.</span>
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg font-medium">
                  We don't just wash clothes. We revive them. Experience Lagos's most premium fabric care concierge service.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link to="/book">
                    <Button size="lg" className="h-16 px-10 shadow-indigo-500/20 shadow-xl">Book Pickup</Button>
                  </Link>
                  <div className="flex items-center gap-2 px-4">
                     <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white bg-cover" style={{backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`}}></div>)}
                     </div>
                     <span className="text-sm font-bold text-slate-600">2k+ Happy Clients</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Hero Visual - Split Image */}
            <div className="order-1 lg:order-2 relative h-[500px] md:h-[650px]">
              <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] rotate-3 opacity-5"></div>
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/10 bg-white">
                 <img 
                  src="https://media-cdn.tripadvisor.com/media/photo-s/13/cb/3d/b0/laundry-service.jpg" 
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2s]"
                  alt="Luxury Fabric"
                 />
                 
                 {/* Floating Card */}
                 <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next Available Slot</p>
                          <p className="text-xl font-serif font-bold text-slate-900">Today, 2:00 PM</p>
                       </div>
                       <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                          <Clock size={20} />
                       </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full w-2/3 bg-indigo-600 rounded-full"></div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <Section className="bg-white">
         <div className="mb-20 md:flex justify-between items-end">
            <div className="max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Expertise in every fiber.</h2>
               <p className="text-lg text-slate-500 font-medium">We treat every garment with a specialized process designed for its specific fabric composition.</p>
            </div>
            <Link to="/services" className="hidden md:block">
               <Button variant="outline">View All Services</Button>
            </Link>
         </div>

         <div className="grid md:grid-cols-3 gap-6 auto-rows-[350px]">
            {/* Large Card */}
            <div className="md:col-span-2 row-span-1 md:row-span-2 rounded-[2.5rem] bg-slate-900 relative overflow-hidden group">
               <img 
                 src="https://marketingedge.com.ng/wp-content/uploads/2020/07/Dry-cleaning.jpg" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-12 flex flex-col justify-end">
                  <Shirt className="text-indigo-400 mb-6" size={40} />
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Dry Cleaning</h3>
                  <p className="text-slate-300 text-lg max-w-md mb-8">Premium solvent-based cleaning for your suits, silks, and delicate couture.</p>
                  <Link to="/book" className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                     Book Now <ArrowRight size={16} className="text-indigo-400" />
                  </Link>
               </div>
            </div>

            {/* Standard Card 1 */}
            <div className="rounded-[2.5rem] bg-indigo-50 p-10 flex flex-col justify-between hover:bg-indigo-100 transition-colors">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                  <Sparkles size={28} />
               </div>
               <div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-3">Wash & Fold</h3>
                  <p className="text-slate-600 font-medium">Everyday laundry, returned crisp and neatly packaged.</p>
               </div>
            </div>

            {/* Standard Card 2 */}
            <div className="rounded-[2.5rem] bg-[#F5F5F7] p-10 flex flex-col justify-between hover:bg-slate-200 transition-colors">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm">
                  <Clock size={28} />
               </div>
               <div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-3">Express 24h</h3>
                  <p className="text-slate-600 font-medium">Same day collection and delivery for urgent needs.</p>
               </div>
            </div>
         </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-8 mb-8 overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4 block">How it works</span>
               <h2 className="text-5xl font-serif mb-12">Effortless care,<br/>delivered to you.</h2>
               
               <div className="space-y-12">
                  {[
                     { title: 'Book Online', desc: 'Select your items and preferred pickup slot in 60 seconds.' },
                     { title: 'We Collect', desc: 'Our concierge arrives at your door with secure garment bags.' },
                     { title: 'Expert Clean', desc: 'Each item is inspected, treated, cleaned, and pressed.' },
                     { title: 'Delivery', desc: 'Your wardrobe returns to you, fresh and ready to wear.' }
                  ].map((step, i) => (
                     <FadeIn key={i} delay={i * 0.1} className="flex gap-6 group">
                        <div className="flex-col items-center hidden md:flex">
                           <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-sm font-bold text-slate-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                              {i + 1}
                           </div>
                           {i !== 3 && <div className="w-px h-16 bg-slate-800 my-2"></div>}
                        </div>
                        <div>
                           <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                           <p className="text-slate-400 leading-relaxed max-w-sm">{step.desc}</p>
                        </div>
                     </FadeIn>
                  ))}
               </div>
            </div>
            
            <div className="relative h-[600px] bg-slate-800 rounded-[2.5rem] overflow-hidden border border-white/10">
               <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Process" />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-8 pt-32">
                  <div className="flex gap-4 items-center bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                     <CheckCircle className="text-green-400" />
                     <div>
                        <p className="font-bold text-sm">Quality Guaranteed</p>
                        <p className="text-xs text-slate-300">If you're not happy, we reclean for free.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Section>
    </>
  );
};

export default Home;