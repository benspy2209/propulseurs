
import React, { useState } from 'react';
import { Send, FileText, CheckCircle, Lock, Download, Sparkles, AlertCircle } from 'lucide-react';
import { PULSENOIR_LINKS } from '../constants';
import { supabase } from '../lib/supabase';

const LeadMagnetSection: React.FC = () => {
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
      // Insertion dans Supabase avec un "upsert" pour mettre à jour la source si l'email existe déjà
      const { error } = await supabase
        .from('prospects')
        .upsert({ 
          email: cleanEmail, 
          source: 'lead_magnet_10_power_words' 
        }, { onConflict: 'email' });

      if (error) {
        throw error;
      }

      // Succès : On déclenche la redirection
      setStatus('success');
      
      // Ouvrir le document dans un nouvel onglet
      window.open(PULSENOIR_LINKS.leadMagnetDoc, '_blank');

    } catch (err: any) {
      console.error("Erreur d'inscription:", err);
      setStatus('error');
      setErrorMessage("Une erreur est survenue lors de l'extraction. Réessaie plus tard.");
    }
  };

  return (
    <section id="lead-magnet" className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ff0000]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-black border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl overflow-hidden relative">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/3 relative group">
            <div className="absolute -inset-4 bg-[#ff0000]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-[3/4] bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* Image réelle du document */}
              <img 
                src="https://raw.githubusercontent.com/benspy2209/propulseurs/ca9723bf220a444a1f67a478d54e3f28f578d187/power.png" 
                alt="Lexique 10 Power Words" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Decor */}
              <div className="absolute top-4 right-4 bg-[#ff0000] text-white text-[8px] font-black px-2 py-1 rounded-sm rotate-12 shadow-lg z-10">
                TOP SECRET
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#ff0000]/10 text-[#ff0000] rounded-full text-[9px] font-black uppercase tracking-widest border border-[#ff0000]/20">
              <Sparkles size={10} /> Offert par Pulseman
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 italic serif-font leading-none">
              Muscle ton <span className="text-[#ff0000]">résumé</span> gratuitement.
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg mb-10 italic font-light leading-relaxed">
              Ne laisse pas ton livre mourir dans l'indifférence. Récupère le lexique des <span className="text-white font-bold">10 mots de pouvoir</span> que les lecteurs de thriller repèrent instinctivement pour cliquer.
            </p>

            {(status === 'idle' || status === 'loading' || status === 'error') && (
              <form onSubmit={handleSubmit} className="relative max-w-md mx-auto lg:mx-0">
                <div className="relative group">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ton meilleur email..."
                    className="w-full bg-neutral-900 border border-white/10 rounded-full py-5 px-8 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#ff0000] transition-all font-mono text-sm"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="absolute right-2 top-2 bottom-2 bg-[#ff0000] text-white px-8 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Extraction...' : (
                      <>Recevoir <Send size={14} /></>
                    )}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-[10px] text-[#ff0000] font-black uppercase tracking-widest italic">
                    <AlertCircle size={14} /> {errorMessage}
                  </p>
                )}
                <p className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-[9px] text-gray-600 font-bold uppercase tracking-widest">
                  <Lock size={10} /> Zéro spam. Que du Noir.
                </p>
              </form>
            )}

            {status === 'success' && (
              <div className="animate-in zoom-in duration-500">
                <div className="flex items-center gap-4 bg-green-500/10 border border-green-500/20 p-6 rounded-2xl mb-6">
                  <CheckCircle className="text-green-500 shrink-0" size={32} />
                  <div className="text-left">
                    <p className="text-white font-black uppercase text-sm tracking-tight italic">Extraction réussie !</p>
                    <p className="text-gray-500 text-xs">Ton dossier est ouvert dans un nouvel onglet.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={PULSENOIR_LINKS.leadMagnetDoc} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#ff0000] hover:text-white transition-all shadow-2xl"
                  >
                    Ouvrir le document <Download size={18} />
                  </a>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-widest"
                  >
                    Inscrire un autre email
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
