import React from 'react';
import { ModuleContent } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface ModuleCardProps {
  module: ModuleContent;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  const Icon = module.icon;
  
  return (
    <div className="group relative bg-neutral-900 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] transition-all duration-300 overflow-hidden border border-white/5 flex flex-col h-full hover:-translate-y-1">
      {/* Top Accent Line - Red */}
      <div className="h-1 w-full bg-[#ff0000]" />
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          {/* Icon Box - Dark with Gold Icon */}
          <div className="p-3 rounded-xl bg-white/5 text-[#f4c024] group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#f4c024] group-hover:text-black">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          {/* Number - Subtle gray */}
          <span className="text-4xl font-bold text-white/10 serif-font group-hover:text-white/20 transition-colors">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 serif-font group-hover:text-[#ff0000] transition-colors">
          {module.title}
        </h3>
        <p className="text-sm font-semibold text-[#ff0000] mb-4 uppercase tracking-wide">
          {module.subtitle}
        </p>
        
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {module.description}
        </p>

        <ul className="space-y-3 mt-auto">
          {module.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-300">
              <CheckCircle2 size={16} className="mr-2 mt-0.5 text-[#f4c024] flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModuleCard;