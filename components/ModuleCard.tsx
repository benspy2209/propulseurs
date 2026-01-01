
import React from 'react';
import { ModuleContent } from '../types';
import { CheckCircle2, Gift } from 'lucide-react';

interface ModuleCardProps {
  module: ModuleContent;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  const Icon = module.icon;
  
  return (
    <div className="group relative bg-neutral-900/40 rounded-[2.5rem] p-10 border border-white/5 hover:border-[#ff0000]/30 transition-all duration-500 flex flex-col h-full hover:bg-neutral-900 shadow-xl overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#ff0000]/5 rounded-full blur-3xl group-hover:bg-[#ff0000]/10 transition-colors" />

      <div className="flex justify-between items-start mb-10 relative z-10">
        <div className="w-14 h-14 bg-[#ff0000]/10 text-[#ff0000] rounded-2xl flex items-center justify-center group-hover:bg-[#ff0000] group-hover:text-white transition-all duration-500 shadow-inner">
          <Icon size={28} />
        </div>
        <div className="flex flex-col items-end">
          {/* Chiffre en Jaune PulseNoir avec opacité augmentée au survol */}
          <span className="text-6xl font-black text-[#f4c024]/10 italic group-hover:text-[#f4c024]/40 transition-all duration-500 scale-110">0{index + 1}</span>
          {/* Badge Ressources en Jaune avec texte noir */}
          <div className="flex items-center gap-1.5 mt-2 px-3 py-1 bg-[#f4c024] rounded-full text-[9px] font-black text-black uppercase tracking-widest shadow-[0_0_15px_rgba(244,192,36,0.4)]">
            <Gift size={10} /> 4 RESSOURCES INCLUSES
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter italic serif-font group-hover:text-[#ff0000] transition-colors leading-tight relative z-10">
        {module.title}
      </h3>
      <p className="text-[10px] font-black text-gray-500 mb-6 uppercase tracking-[0.2em] relative z-10">
        {module.subtitle}
      </p>
      
      <p className="text-gray-400 mb-8 text-sm leading-relaxed font-medium italic relative z-10">
        {module.description}
      </p>

      <ul className="space-y-4 mt-auto relative z-10">
        {module.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start text-[11px] text-gray-300 font-bold uppercase tracking-wider leading-snug">
            <CheckCircle2 size={14} className="mr-3 mt-0.5 text-[#ff0000] flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleCard;
