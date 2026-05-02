import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { LOCATIONS } from '../constants';

export const Contact = () => {
  return (
    <section id="locations" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-brand-amber"></span>
              Présence Physique
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Nos Dépôts</h3>
            <p className="text-slate-500 mb-12 text-lg font-light leading-relaxed">
              Des stocks massifs et une logistique optimisée pour servir les chantiers les plus exigeants du continent.
            </p>

            <div className="space-y-10">
              {LOCATIONS.map((loc, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={loc.country} 
                  className="pb-8 border-b border-slate-100 last:border-0"
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-brand-amber font-black text-3xl opacity-20">0{index + 1}</span>
                    <h4 className="text-2xl font-black tracking-tighter uppercase text-slate-800">
                      {loc.city} <span className="text-slate-400 font-light translate-x-2 inline-block">/ {loc.country}</span>
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Localisation</p>
                      <p className="text-sm text-slate-600 font-medium">{loc.address}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Assistance</p>
                      <p className="text-sm text-slate-600 font-medium">{loc.phone}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Liaison</p>
                      <p className="text-sm text-slate-600 font-medium">{loc.email}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-10 text-white relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <span className="text-8xl font-black">Q</span>
            </div>
            
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Devis Express</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Nom Complet</label>
                  <input type="text" className="bg-white/5 border border-white/10 p-4 w-full focus:border-brand-amber outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Pro</label>
                  <input type="email" className="bg-white/5 border border-white/10 p-4 w-full focus:border-brand-amber outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Projet / Entreprise</label>
                <input type="text" className="bg-white/5 border border-white/10 p-4 w-full focus:border-brand-amber outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Description du besoin</label>
                <textarea rows={4} className="bg-white/5 border border-white/10 p-4 w-full focus:border-brand-amber outline-none transition-colors" />
              </div>
              <button className="w-full bg-brand-amber text-white py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all">
                Soumettre la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
