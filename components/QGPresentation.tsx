import React from 'react';
import { Shield, HardDrive, Users, CheckCircle2 } from 'lucide-react';

const QGPresentation: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-900 border-y border-white/5 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f4c024]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#ff0000]/30 bg-[#ff0000]/5 text-[#ff0000] text-[10px] font-black uppercase tracking-[0.4em]">
            <Shield size={12} /> Pilier 2 : Le Quartier Général
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white italic serif-font leading-none">
            Ne restez plus <span className="text-[#f4c024]">Seul</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm mt-6 max-w-2xl mx-auto">
            L'Intervention ne s'arrête pas à la théorie. Nous vous donnons les armes et l'armée.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Bloc Arsenal (Drive) */}
          <div className="bg-black border border-white/10 rounded-[3rem] p-10 md:p-12 relative overflow-hidden group hover:border-[#ff0000]/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <HardDrive size={120} className="text-white" />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#ff0000] text-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                <HardDrive size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase italic serif-font">L'Arsenal</h3>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Le Drive de Ressources</p>
              </div>
            </div>

            <p className="text-gray-400 text-lg italic mb-8 leading-relaxed">
              Ne perdez pas de temps à créer des fichiers. Copiez-collez ce qui marche. Accès immédiat à notre base de données.
            </p>

            <ul className="space-y-4">
              {[
                "Audit de l'Invisibilité (PDF)",
                "Calculateur de Prix (Excel)",
                "Scripts de Relance (Word)",
                "Templates de 4ème de couv",
                "Checklist de Lancement"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-300 uppercase tracking-wide">
                  <CheckCircle2 size={16} className="text-[#ff0000]" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc Clan (Groupe) */}
          <div className="bg-[#f4c024] rounded-[3rem] p-10 md:p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(244,192,36,0.2)]">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={120} className="text-black" />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-black text-[#f4c024] rounded-2xl flex items-center justify-center shadow-lg">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-black uppercase italic serif-font">Le Clan</h3>
                <p className="text-[10px] text-black/60 font-black uppercase tracking-widest">Groupe Privé Facebook</p>
              </div>
            </div>

            <p className="text-black font-medium text-lg italic mb-8 leading-relaxed">
              Rejoignez le QG où tout se passe. Questions, déblocages, sessions live et entraide tactique.
            </p>

            <div className="bg-black/10 rounded-2xl p-6 border border-black/5">
              <div className="flex items-center gap-4 mb-4">
                 <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-black border-2 border-[#f4c024]" />
                   ))}
                 </div>
                 <span className="text-xs font-black uppercase tracking-widest text-black">+350 Auteurs actifs</span>
              </div>
              <p className="text-sm font-bold text-black/80 italic">
                "Ce groupe est le plus bienveillant et tactique qui existe. On se sent enfin compris."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QGPresentation;