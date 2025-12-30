
import React, { useState } from 'react';
import { Send, Download, Sparkles, CheckCircle, AlertCircle, Lock, BookOpen, Target } from 'lucide-react';
import { PULSENOIR_LINKS } from '../constants';
import { supabase } from '../lib/supabase';

interface LeadMagnetProps {
  title: string;
  description: string;
  image: string;
  link: string;
  source: string;
  badge: string;
  icon: React.ReactNode;
}

const LeadMagnetCard: React.FC<LeadMagnetProps> = ({ title, description, image, link, source, badge, icon }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setErrorMessage("L'adresse email semble incorrecte.");
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('prospects')
        .upsert({ 
          email: cleanEmail, 
          source: source 
        }, { onConflict: 'email' });

      if (error) throw error;

      setStatus('success');
      window.open(link, '_blank');
    } catch (err: any) {
      console.error("Erreur d'inscription:", err);
      setStatus('error');
      setErrorMessage("Une erreur est survenue. Réessaie plus tard.");
    }
  };

  return (
    <div className="bg-black border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full shadow-2xl overflow-hidden relative group hover:border-[#ff0000]/30 transition-all duration-500">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#ff0000]/5 rounded-full blur-3xl group-hover:bg-[#ff0000]/10 transition-colors" />
      
      <div className="relative z-10 mb-8">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#ff0000]/10 text-[#ff0000] rounded-full text-[9px] font-black uppercase tracking-widest border border-[#ff0000]/20">
          {icon} {badge}
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative aspect-[3/4] bg-neutral-900 rounded-xl border border-white/10 overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 italic serif-font leading-tight group-hover:text-[#ff0000] transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 italic font-light leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto relative z-10">
        {status !== 'success' ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ton email d'auteur..."
                className="w-full bg-neutral-900 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#ff0000] transition-all font-mono text-xs"
                required
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#ff0000] text-white px-6 rounded-full font-black uppercase text-[9px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Traitement...' : <><span className="hidden sm:inline">Récupérer</span> <Send size={12} /></>}
              </button>
            </div>
            {status === 'error' && (
              <p className="flex items-center gap-2 text-[9px] text-[#ff0000] font-black uppercase tracking-widest italic ml-4">
                <AlertCircle size={12} /> {errorMessage}
              </p>
            )}
            <p className="flex items-center gap-2 text-[8px] text-gray-700 font-bold uppercase tracking-widest ml-4">
              <Lock size={10} /> Accès immédiat • Zéro spam
            </p>
          </form>
        ) : (
          <div className="animate-in zoom-in duration-500">
            <div className="flex items-center gap-4 bg-green-500/10 border border-green-500/20 p-4 rounded-2xl mb-4">
              <CheckCircle className="text-green-500 shrink-0" size={24} />
              <div className="text-left">
                <p className="text-white font-black uppercase text-[10px] tracking-tight italic leading-none mb-1">C'est prêt !</p>
                <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">Le dossier est ouvert dans un nouvel onglet.</p>
              </div>
            </div>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#ff0000] hover:text-white transition-all shadow-xl"
            >
              Télécharger le Guide <Download size={14} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const LeadMagnetSection: React.FC = () => {
  return (
    <section id="ressources" className="py-32 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0000]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#ff0000]/30 bg-[#ff0000]/5 text-[#ff0000] text-[10px] font-black uppercase tracking-[0.4em]">
            <Sparkles size={12} /> Ressources Gratuites PulseNoir
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 italic serif-font">
            Préparez votre <span className="text-[#ff0000]">offensive</span>
          </h2>
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.5em] mt-4 italic">Deux outils tactiques offerts pour muscler votre visibilité</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Lead Magnet 1: Power Words */}
          <LeadMagnetCard 
            title="Le Lexique des 10 Power Words"
            description="Brisez l'indifférence du lecteur. Récupérez le lexique des 10 mots de pouvoir qui activent le clic instinctif et rassurent immédiatement les fans de thriller les plus méfiants."
            image="https://raw.githubusercontent.com/benspy2209/propulseurs/ca9723bf220a444a1f67a478d54e3f28f578d187/power.png"
            link={PULSENOIR_LINKS.leadMagnetDoc}
            source="lead_magnet_10_power_words"
            badge="Copywriting Noir"
            icon={<Sparkles size={10} />}
          />

          {/* Lead Magnet 2: Plan d'attaque 7 étapes -> Le Protocole Anti-Invisibilité */}
          <LeadMagnetCard 
            title="Le Protocole Anti-Invisibilité"
            description="Comment forcer le mur de l'algorithme et rassurer un lecteur méfiant en 7 briques stratégiques. Le guide étape par étape pour transformer un manuscrit ignoré en une valeur sûre."
            image="https://raw.githubusercontent.com/benspy2209/propulseurs/10707a5e1d1eae7bf26f636ce3e67218dfaa8854/Lancer%20son%20polar%20en%20auto%20edition%20-%20le%20plan%20d%E2%80%99attaque%20en%207%20etapes.png"
            link={PULSENOIR_LINKS.leadMagnetAutoedition}
            source="lead_magnet_7_steps_autoedition"
            badge="Stratégie Elite"
            icon={<Target size={10} />}
          />
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.4em] italic">
            Rejoignez plus de 1500 auteurs dans le clan PulseNoir
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
