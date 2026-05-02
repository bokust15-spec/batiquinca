import React from 'react';
import { motion } from 'motion/react';
import { HardHat, Menu, X, Phone, Globe } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="h-20 border-b border-slate-200 bg-white fixed top-0 left-0 right-0 z-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-amber flex items-center justify-center">
            <span className="text-white font-black text-xl">Q</span>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-slate-800 uppercase">
            BatiQuinca <span className="text-brand-amber font-medium">Pro</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-semibold text-xs uppercase tracking-[0.2em] text-slate-600">
          <a href="#" className="text-brand-amber border-b-2 border-brand-amber py-1">Accueil</a>
          <a href="#catalogue" className="hover:text-brand-amber transition-colors">Catalogue</a>
          <a href="#locations" className="hover:text-brand-amber transition-colors">Dépôts</a>
          <button className="bg-slate-900 text-white px-6 py-2.5 transition-transform hover:scale-105 active:scale-95">
            Contact Direct
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 font-semibold text-xs uppercase tracking-widest"
        >
          <a href="#" className="text-brand-amber">Accueil</a>
          <a href="#catalogue" onClick={() => setIsOpen(false)}>Catalogue</a>
          <a href="#locations" onClick={() => setIsOpen(false)}>Dépôts</a>
          <button className="bg-slate-900 text-white px-6 py-3 mt-2">Contact Direct</button>
        </motion.div>
      )}
    </nav>
  );
};
