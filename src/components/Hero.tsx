import { motion } from 'motion/react';
import { ChevronRight, ArrowDownRight } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="min-h-[400px] bg-slate-900 text-white flex flex-col justify-center px-6 lg:px-12 relative pt-20 overflow-hidden">
      <div className="absolute right-0 top-0 w-full lg:w-1/3 h-full bg-brand-amber/10 border-l border-white/10 hidden lg:block">
        <div className="p-12">
          <p className="text-brand-amber font-bold mb-4 uppercase text-xs tracking-[0.3em] font-mono">Nos Hubs Stratégiques</p>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <p className="text-xl font-light italic text-white/90">Abidjan, Côte d'Ivoire</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Siège Afrique de l'Ouest</p>
            </div>
            <div>
              <p className="text-xl font-light italic text-white/90">Casablanca, Maroc</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Hub Maghreb & Europe</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-brand-amber"></span>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">Expertise Panafricaine</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 uppercase tracking-tighter">
            MATÉRIEL DE <br/>
            <span className="text-brand-amber">GÉNIE CIVIL</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed mb-10">
            Le leader de la quincaillerie professionnelle pour les grands chantiers en Côte d'Ivoire et au Maroc. Équipements lourds, outillage de précision et matériaux de structure.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#catalogue" className="bg-brand-amber text-white px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              Explorer le Stock
            </a>
            <a href="#locations" className="border border-white/20 text-white px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
              Nos Localisations
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mobile Location Info */}
      <div className="lg:hidden mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] text-brand-amber font-bold uppercase tracking-widest mb-1 italic">Abidjan</p>
          <p className="text-sm font-light text-white/70 italic">Côte d'Ivoire</p>
        </div>
        <div>
          <p className="text-[10px] text-brand-amber font-bold uppercase tracking-widest mb-1 italic">Casablanca</p>
          <p className="text-sm font-light text-white/70 italic">Maroc</p>
        </div>
      </div>
    </header>
  );
};
