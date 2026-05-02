import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HardHat, Hammer, ShieldCheck, Layers, ArrowRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../constants';

const categoryIcons: Record<string, any> = {
  'HardHat': HardHat,
  'Hammer': Hammer,
  'ShieldCheck': ShieldCheck,
  'Layers': Layers
};

export const Catalog = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalogue" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-brand-amber"></span>
              Catalogue de Référence
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Nos Équipements</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeCategory === 'all' 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-brand-amber'
              }`}
            >
              Tous les stocks
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeCategory === cat.id 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-brand-amber'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white border border-slate-200 p-6 flex flex-col group hover:border-brand-amber transition-colors"
              >
                <div className="h-48 mb-6 overflow-hidden bg-slate-100 flex items-center justify-center relative">
                   <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className="bg-white border border-slate-200 text-[8px] font-bold px-2 py-1 uppercase tracking-tighter">Ref: {product.id}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-black text-xl mb-2 text-slate-800 uppercase tracking-tighter leading-tight group-hover:text-brand-amber transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-light mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1 mb-6">
                    {product.specs?.slice(0, 2).map((spec, i) => (
                      <span key={i} className="text-[9px] font-mono bg-slate-50 text-slate-400 px-2 py-1 uppercase">{spec}</span>
                    ))}
                  </div>
                  <button className="w-full bg-slate-50 group-hover:bg-brand-amber group-hover:text-white py-3 text-[10px] font-bold uppercase tracking-widest transition-all">
                    Fiche Technique
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
