import React from 'react';
import { 
  Users, 
  ExternalLink, 
  HardDrive, 
  ArrowRight, 
  Shield, 
  Download,
  Zap
} from 'lucide-react';
import { PULSENOIR_LINKS, DRIVE_FOLDER, AUTHOR_TOOLBOX } from '../constants';

const QGView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header QG */}
      <header className="mb-12 border-b border-white/5 pb-10">
        <div className="flex items-center gap-4 text-[#ff0000] mb-6">
           <span className="px-4 py-1.5 bg-[#ff0000]/10 border border-[#ff0000]/20 text-[#ff0000] rounded-full text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2">
             <Shield size={12} /> War Room
           </span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-serif font-black text-white mb-6 tracking-tighter leading-none italic uppercase">
          Quartier Général <span className="text-[#ff0000]">Opérationnel</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed font-light italic max-w-3xl">
          Ici, on ne théorise pas, on s'équipe. Accédez au Clan pour le soutien tactique, récupérez vos armes dans l'Arsenal (Drive) et utilisez les outils validés pour la production.
        </p>
      </header>

      {/* BLOC 1 : LE CLAN (GROUPE PRIVÉ) */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#f4c024] rounded-[2.5rem] p-10 relative overflow-hidden group shadow-[0_0_40px_rgba(244,192,36,0.2)] hover:shadow-[0_0_60px_rgba(244,192,36,0.4)] transition-all duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users size={120} className="text-black" />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black text-[#f4c024] rounded-2xl flex items-center justify-center">
                <Users size={24} />
              </div>
              <span className="text-black font-black uppercase tracking-widest text-xs border-b-2 border-black/20 pb-1">Priorité N°1</span>
            </div>
            
            <h3 className="text-3xl font-black text-black uppercase tracking-tighter italic serif-font mb-4 leading-tight">
              Rejoindre le Clan Pulse Noir
            </h3>
            <p className="text-black/80 font-bold text-sm leading-relaxed mb-8 flex-1">
              C'est ici que tout se passe. Questions, déblocages, sessions live et entraide. Ne restez pas seul dans votre coin.
            </p>

            <a 
              href={PULSENOIR_LINKS.group}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-[#f4c024] py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              Accéder au Groupe Facebook <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* BLOC 2 : L'ARSENAL (DRIVE) */}
        <div className="bg-neutral-900 rounded-[2.5rem] p-10 relative overflow-hidden group border border-white/10 hover:border-[#ff0000]/30 transition-all duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <HardDrive size={120} className="text-[#ff0000]" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#ff0000]/10 text-[#ff0000] rounded-2xl flex items-center justify-center">
                <Download size={24} />
              </div>
              <span className="text-gray-500 font-black uppercase tracking-widest text-xs border-b border-white/10 pb-1">Ressources & Templates</span>
            </div>

            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic serif-font mb-4 leading-tight">
              L'Arsenal Visuel & Scripts
            </h3>
            <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8 flex-1 italic">
              Le dossier Drive unique contenant tous les PDF, les tableurs Excel, les templates Canva et les scripts de relance mentionnés dans les modules.
            </p>

            <a 
              href={DRIVE_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#ff0000] text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-colors"
            >
              Ouvrir le Dossier Drive <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* BLOC 3 : LA BOÎTE À OUTILS (GRID) */}
      <div className="pt-12 border-t border-white/5">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-[#ff0000]">
             <Zap size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest italic serif-font">La Boîte à Outils</h2>
            <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">Logiciels & Services recommandés</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUTHOR_TOOLBOX.map((category) => (
            <div key={category.id} className="bg-neutral-950/50 border border-white/5 rounded-3xl p-6 hover:border-[#ff0000]/20 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <category.icon size={18} className="text-gray-400" />
                <h3 className="text-sm font-black text-white uppercase tracking-wider">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.items.map((tool, idx) => (
                  <a 
                    key={idx}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl text-[10px] font-bold uppercase tracking-wide transition-all no-underline group ${tool.internal ? 'bg-[#ff0000]/5 text-[#ff0000] border border-[#ff0000]/10 hover:bg-[#ff0000]/10' : 'bg-black/40 text-gray-500 hover:text-white hover:bg-white/5'}`}
                  >
                    <span>{tool.name}</span>
                    <ExternalLink size={10} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default QGView;