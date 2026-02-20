import React from 'react';
import { Section, Card, Button } from '../components/UI';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-50 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">The Laundry Journal</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Expert advice, fabric care tips, and company news.</p>
      </div>

      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-6 shadow-lg shadow-slate-200/50 aspect-[4/3]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-teal-600 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> Admin</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900 group-hover:text-teal-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog`} className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all">
                  Read Article <ArrowRight size={18} className="text-teal-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Blog;