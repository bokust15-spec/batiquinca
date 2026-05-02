import { HardHat } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="h-14 bg-slate-100 border-t border-slate-200 flex items-center justify-between px-6 lg:px-12 text-[10px] uppercase font-bold text-slate-500 tracking-widest">
      <div className="flex gap-12">
        <span className="hidden md:inline">Abidjan: +225 07 00 00 00</span>
        <span className="hidden md:inline">Casablanca: +212 5 22 00 00</span>
      </div>
      <div className="flex gap-6 items-center">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Stock Disponible
        </span>
        <span className="opacity-60">&copy; 2024 Quinc-IM CI-MA Group</span>
      </div>
    </footer>
  );
};
