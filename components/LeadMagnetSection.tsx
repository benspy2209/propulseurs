
import React, { useState } from 'react';
import { Send, CheckCircle, Lock, Download, Sparkles, AlertCircle, Zap, Map } from 'lucide-react';
import { PULSENOIR_LINKS } from '../constants';
import { supabase } from '../lib/supabase';

interface LeadMagnetCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  docLink: string;
  source: string;
}

const LeadMagnetCard: React.FC<LeadMagnetCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  icon, 
  docLink, 
  source 
}) => {
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
      window.open(docLink, '_blank');

    } catch (err: any) {
      console.error("Erreur d'inscription:", err);
      setStatus('error');
      setErrorMessage("Une erreur est survenue. Réessaie plus tard.");
    }
  };

  return (
    <div className="bg-black border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-col h-full shadow-2xl overflow-hidden relative group hover:border-[#ff0000]/30 transition-all duration-500">
      
      {/* Visual Header */}
      <div className="relative aspect-[16/9] mb-8 bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500 shadow-xl">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black p-8">
            <div className="text-[#ff0000] opacity-40 group-hover:opacity-100 transition-opacity">
              {icon}
            </div>
          </div>
        )}
        
        <div className="absolute top-4 right-4 bg-[#ff0000] text-white text-[8px] font-black px-2 py-1 rounded-sm rotate-12 shadow-lg z-10">
          TOP SECRET
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="inline-flex items-center gap-2 mb-4 text-[#ff0000] text-[9px] font-black uppercase tracking-widest italic opacity-70">
          <Sparkles size={10} /> {subtitle}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 italic serif-font leading-tight">
          {title.split(':')[0]} <span className="text-[#ff0000]">{title.split(':')[1] || ''}</span>
        </h3>
        
        <p className="text-gray-400 text-sm mb-10 italic font-light leading-relaxed">
          {description}
        </p>

        {/* Form or Success */}
        <div className="mt-auto">
          {(status === 'idle' || status === 'loading' || status === 'error') && (
            <form onSubmit={handleSubmit} className="relative w-full">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ton email..."
                  className="w-full bg-neutral-900 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#ff0000] transition-all font-mono text-xs"
                  required
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#ff0000] text-white px-5 rounded-full font-black uppercase text-[9px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Extraction...' : 'Recevoir'}
                </button>
              </div>
              {status === 'error' && (
                <p className="mt-3 text-[9px] text-[#ff0000] font-black uppercase tracking-widest italic flex items-center gap-1">
                  <AlertCircle size={10} /> {errorMessage}
                </p>
              )}
              <p className="mt-3 flex items-center gap-2 text-[8px] text-gray-700 font-bold uppercase tracking-widest italic">
                <Lock size={8} /> Zéro spam. 100% Noir.
              </p>
            </form>
          )}

          {status === 'success' && (
            <div className="animate-in zoom-in duration-500 text-center">
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl mb-4 flex items-center gap-3">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <p className="text-white font-black uppercase text-[10px] tracking-tight italic">Document prêt !</p>
              </div>
              <a 
                href={docLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#ff0000] hover:text-white transition-all shadow-xl"
              >
                Ouvrir le dossier <Download size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LeadMagnetSection: React.FC = () => {
  return (
    <section id="lead-magnet" className="py-32 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ff0000]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 italic serif-font">
            Dossiers <span className="text-[#ff0000]">Offerts</span>
          </h2>
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.5em] italic">Armes stratégiques pour ta visibilité</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Lead Magnet 1 : Power Words */}
          <LeadMagnetCard 
            id="power-words"
            title="10 Power Words : Noir & Thriller"
            subtitle="Lexique d'impact v1.0"
            description="Le lexique des 10 mots que les lecteurs de thriller repèrent instinctivement. Muscle tes résumés et tes fiches Amazon pour déclencher le clic."
            image="https://raw.githubusercontent.com/benspy2209/propulseurs/ca9723bf220a444a1f67a478d54e3f28f578d187/power.png"
            docLink={PULSENOIR_LINKS.leadMagnetDoc}
            source="lead_magnet_10_power_words"
          />

          {/* Lead Magnet 2 : Plan d'attaque Auto-édition */}
          <LeadMagnetCard 
            id="auto-edition"
            title="Auto-édition : Le Plan d'Attaque"
            subtitle="Protocole 7 Étapes"
            description="Lancer son polar sans se perdre. Les 7 étapes stratégiques incontournables pour construire une sortie de livre qui pulse vraiment."
            image="https://raw.githubusercontent.com/benspy2209/propulseurs/10707a5e1d1eae7bf26f636ce3e67218dfaa8854/Lancer%20son%20polar%20en%20auto%20edition%20-%20le%20plan%20d%E2%80%99attaque%20en%207%20etapes.png"
            docLink={PULSENOIR_LINKS.leadMagnetAutoedition}
            source="lead_magnet_7_etapes_autoedition"
          />
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 p-4 bg-black/40 border border-white/5 rounded-2xl italic">
            <Zap size={18} className="text-[#ff0000]" />
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">
              Contenu exclusif par <span className="text-white">Pulse Noir Academy</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
