
import React, { useState } from 'react';
import { ArrowLeft, Mail, ShieldCheck, ArrowRight, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface LoginViewProps {
  onBack: () => void;
  onLogin: (email: string) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onBack, onLogin }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);

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
      // 1. Vérification préalable : l'utilisateur existe-t-il dans notre table de clients ?
      // (Remplie par n8n lors de l'achat Stripe)
      const { data, error: dbError } = await supabase
        .from('utilisateurs')
        .select('*')
        .eq('email', cleanEmail)
        .maybeSingle(); 

      if (dbError) {
        setError(`Erreur base de données: ${dbError.message}`);
        setLoading(false);
        return;
      }

      if (!data) {
        setError("Cet email n'est pas reconnu dans notre base de membres. Assurez-vous d'utiliser l'email utilisé lors de votre achat.");
        setLoading(false);
        return;
      }

      if (data.acces_formation === false) {
        setError("Votre accès n'est pas encore activé. Cela peut prendre 1 à 2 minutes après l'achat.");
        setLoading(false);
        return;
      }

      // 2. Déclenchement du Magic Link Supabase
      const { error: authError } = await supabase.auth.signInWithOtp({
        email: cleanEmail,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (authError) {
        setError(`Erreur d'envoi : ${authError.message}`);
        setLoading(false);
        return;
      }

      // 3. Succès de l'envoi
      setIsSent(true);
    } catch (err) {
      setError("Erreur technique inattendue.");
      console.error("Exception:", err);
    } finally {
      setLoading(false);
    }
  };

  if (isSent) {
    return (
      <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0000]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-md w-full relative z-10 text-center">
          <div className="bg-neutral-900/40 rounded-[3rem] p-12 border border-[#ff0000]/30 backdrop-blur-xl shadow-2xl">
            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-green-500/20">
              <CheckCircle size={40} />
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic serif-font mb-6">
              Lien <span className="text-[#ff0000]">Envoyé</span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-8 italic">
              Vérifie ta boîte mail (et tes spams). Clique sur le bouton dans l'email pour accéder instantanément à tes modules.
            </p>
            <button 
              onClick={() => setIsSent(false)}
              className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
            >
              Utiliser une autre adresse email
            </button>
          </div>
        </div>
      </div>
    );
  }

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
              Accès sécurisé par Magic Link
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
                  <span>Envoi du lien...</span>
                </div>
              ) : (
                <>
                  Recevoir mon lien d'accès
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <footer className="mt-10 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 font-medium italic">
            Inutile de créer un mot de passe.<br/>
            Un lien unique te sera envoyé par email.
          </footer>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest italic">Authentification Supabase</span>
          </div>
          <div className="w-1 h-1 bg-gray-800 rounded-full" />
          <span className="text-[9px] font-black uppercase tracking-widest italic">PulseNoir Academy</span>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
