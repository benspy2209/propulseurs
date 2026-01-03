import React from 'react';
import { Map, Shield, User, ArrowDown } from 'lucide-react';

const EcosystemOverview: React.FC = () => {
  const pillars = [
    {
      id: 1,
      title: "LA MÉTHODE",
      subtitle: "LE PLAN DE BATAILLE",
      icon: Map,
      color: "text-white",
      bg: "bg-white/5",
      border: "border-white/10",
      desc: "Une stratégie vidéo pas à pas en 6 phases pour diagnostiquer, réparer et relancer votre livre."
    },
    {
      id: 2,
      title: "LE Q.G.",
      subtitle: "L'ARMEMENT",
      icon: Shield,
      color: "text-[#ff0000]",
      bg: "bg-[#ff0000]/10",
      border: "border-[#ff0000]/30",
      desc: "Accès à l'Arsenal (Drive de ressources) et au Clan (Groupe Privé) pour ne jamais rester seul."
    },
    {
      id: 3,
      title: "LE MENTOR",
      subtitle: "LE GUIDAGE",
      icon: User,
      color: "text-[#f4c024]",
      bg: "bg-[#f4c024]/10",
      border: "border-[#f4c024]/30",
      desc: "Un accompagnement humain direct pour débloquer les situations complexes et valider votre trajectoire."
    }
  ];

  return (
    <section id="ecosysteme" className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white italic serif-font mb-4">
            Un Système <span className="text-[#ff0000]">Complet</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">
            Pas juste des vidéos. Une architecture de réussite en 3 piliers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className={`relative p-8 rounded-[2rem] border ${pillar.border} ${pillar.bg} flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${pillar.color === 'text-[#ff0000]' ? 'bg-[#ff0000]/20' : pillar.color === 'text-[#f4c024]' ? 'bg-[#f4c024]/20' : 'bg-white/10'}`}>
                <pillar.icon size={32} className={pillar.color} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">
                PILIER {pillar.id}
              </div>
              <h3 className={`text-2xl font-black uppercase italic serif-font mb-4 ${pillar.color}`}>
                {pillar.title}
              </h3>
              <div className="w-8 h-1 bg-current opacity-20 mb-4 rounded-full" />
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-gray-400 leading-relaxed font-medium text-sm">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center opacity-30 animate-bounce">
          <ArrowDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  );
};

export default EcosystemOverview;