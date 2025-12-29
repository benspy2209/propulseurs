import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock, Sparkles, Zap, ChevronRight } from 'lucide-react';

interface PurchaseViewProps {
  onBack: () => void;
  onSuccess: () => void;
}

const PurchaseView: React.FC<PurchaseViewProps> = ({ onBack, onSuccess }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * Lien Stripe réel pour le paiement en 1 fois (297€)
   */
  const STRIPE_LINK = "https://buy.stripe.com/dRm9AS2UR0sXa7z4f443S01"; 

  const handlePayment = () => {
    window.location.href = STRIPE_LINK;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6 selection:bg-[#ff0000] selection:text-white relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#ff0000]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-gray-500 hover:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Retour au site
        </button>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Offer Details */}
          <div className="lg:col-span-7">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-[#ff0000]/30 bg-[#ff0000]/5 text-[#ff0000] text-[9px] font-black uppercase tracking-[0.3em]">
              Inscription Immédiate
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic serif-font leading-[0.9]">
              Rejoins <br/>
              <span className="text-[#ff0000] text-glow">le clan PulseNoir</span>.
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 italic font-light leading-relaxed">
              Tout ce dont tu as besoin pour lancer ton polar et dominer ta niche en 90 jours est de l'autre côté de ce bouton.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Accès complet aux 6 modules stratégiques",
                "Le Pack complet de Goodies (Checklists, Fichiers, Scripts)",
                "Le Plan de Guerre 90 jours (Action par Action)",
                "Mises à jour gratuites à vie (incluant les futures vidéos)",
                "Accès au groupe privé Facebook des auteurs"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-6 h-6 bg-[#ff0000]/20 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-[#ff0000]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-300 italic">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Pricing Card */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-900 border border-white/10 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Zap size={120} className="text-[#ff0000]" />
              </div>

              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-[#ff0000] text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                  <Sparkles size={10} /> Offre de lancement
                </div>
                <div className="flex justify-center items-baseline gap-1 mb-2">
                   <span className="text-7xl font-black text-white tracking-tighter">297</span>
                   <span className="text-2xl font-black text-[#ff0000]">€</span>
                </div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] italic">Paiement Unique & Définitif</p>
              </div>

              <button 
                onClick={handlePayment}
                className="w-full py-7 bg-[#ff0000] text-white rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.03] transition-all shadow-[0_0_50px_rgba(255,0,0,0.4)] active:scale-95 flex items-center justify-center gap-3 mb-8"
              >
                Finaliser mon inscription <ChevronRight size={18} />
              </button>

              <div className="space-y-6 pt-8 border-t border-white/5">
                <div className="flex items-center gap-4 text-gray-500">
                  <Lock size={16} className="text-green-600 shrink-0" />
                  <span className="text-[9px] font-black uppercase tracking-widest leading-tight">Paiement 100% sécurisé via Stripe</span>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                  <ShieldCheck size={16} className="text-[#ff0000] shrink-0" />
                  <span className="text-[9px] font-black uppercase tracking-widest leading-tight">Garantie 10 jours satisfait ou remboursé</span>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-center text-[9px] text-gray-700 font-bold uppercase tracking-[0.4em] italic leading-relaxed">
              PulseNoir Academy • Academy Elite Group<br/>Propulsé par Hakuna Matata SRL
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PurchaseView;