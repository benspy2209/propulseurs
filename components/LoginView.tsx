
import React, { useState } from 'react';
import { ArrowLeft, Mail, ShieldCheck, ArrowRight, Lock, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface LoginViewProps {
  onBack: () => void;
  onLogin: (email: string) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onBack, onLogin }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    setLoading(true);
    
    try {
      const { data, error: dbError } = await supabase
        .from('utilisateurs')
        .select('*')
        .eq('email', cleanEmail)
        .maybeSingle(); 

      if (dbError) {
        console.error("Erreur Supabase détectée:", dbError);
        
        if (dbError.message.includes("Invalid API key")) {
          setError("ERREUR CONFIGURATION : La clé API dans lib/supabase.ts est incorrecte. Elle doit commencer par 'eyJ...'. Vérifie tes réglages Supabase > API.");
        } else {
          setError(`Erreur base de données: ${dbError.message}`);
        }
        setLoading(false);
        return;
      }

      if (!data) {
        setError("Cet email n'est pas reconnu dans notre base de membres.");
        setLoading(false);
        return;
      }

      if (data.acces_formation === false) {
        setError("Accès non activé. Si vous avez payé, contactez le support.");
        setLoading(false);
        return;
      }

      onLogin(cleanEmail);
    } catch (err) {
      setError("Erreur technique inattendue. Vérifie la console (F12).");
      console.error("Exception:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0000]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-md w-full relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-gray-500 hover:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Retour au site
        </button>

        <div className="bg-neutral-900/40 rounded-[3rem] p-10 border border-white/5 backdrop-blur-xl shadow-2xl">
          <header className="text-center mb-10">
            <div className="w-16 h-16 bg-[#ff0000]/10 text-[#ff0000] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-[#ff0000]/20">
              <Lock size={28} />
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic serif-font mb-2">
              Espace <span className="text-[#ff0000]">Membre</span>
            </h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest italic">
              Connecte-toi pour accéder à tes modules
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-2">
                Ton adresse email d'achat
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-600 group-focus-within:text-[#ff0000] transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@exemple.com"
                  className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] transition-all"
                  required
                />
              </div>
              
              {error && (
                <div className="mt-4 p-4 bg-red-900/20 border border-red-900/50 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle size={16} className="text-[#ff0000] shrink-0 mt-0.5" />
                  <p className="text-[#ff0000] text-[10px] font-bold uppercase italic leading-tight">{error}</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-[#ff0000] text-white rounded-full font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:shadow-[0_0_50px_rgba(255,0,0,0.6)] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Vérification...</span>
                </div>
              ) : (
                <>
                  Accéder à la formation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <footer className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic mb-4">
              Pas encore de compte ?
            </p>
            <button 
              onClick={() => onBack()}
              className="text-[#ff0000] font-black uppercase tracking-[0.2em] text-[10px] hover:underline"
            >
              Découvrir la formation
            </button>
          </footer>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest italic">Accès sécurisé Supabase</span>
          </div>
          <div className="w-1 h-1 bg-gray-800 rounded-full" />
          <span className="text-[9px] font-black uppercase tracking-widest italic">PulseNoir Academy</span>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
