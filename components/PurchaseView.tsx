import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock, CreditCard, Sparkles } from 'lucide-react';

interface PurchaseViewProps {
  onBack: () => void;
  onSuccess: () => void;
}

const PurchaseView: React.FC<PurchaseViewProps> = ({ onBack, onSuccess }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const STRIPE_URLS = {
    oneTime: "https://buy.stripe.com/test_14k3f88wX0lT8N28ww", // Remplacer par l'URL réelle
    twoTimes: "https://buy.stripe.com/test_5kAg1M9B10lT9R66op", // Remplacer par l'URL réelle
    threeTimes: "https://buy.stripe.com/test_aEU7vofVpfAt8N2000" // Remplacer par l'URL réelle
  };

  const handlePayment = (url: string) => {
    // Dans une implémentation réelle, on redirige vers Stripe
    // Pour la démo, on simule le succès ou on ouvre l'URL
    window.open(url, '_blank');
    // Simulation du retour après paiement réussi pour les tests d'interface :
    // onSuccess(); 
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6 selection:bg-[#ff0000] selection:text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#ff0000]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-gray-500 hover:text-white font-black uppercase tracking-widest text-xs transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Retour
        </button>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic serif-font">
            Rejoindre la formation <br/>
            <span className="text-[#ff0000] text-glow">“Vendez vos polars”</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl italic font-light max-w-2xl mx-auto">
            Plan de Guerre 90 Jours pour Auteurs de Noir & Thriller – choisis ton mode de paiement.
          </p>
        </header>

        {/* Rappel Offre */}
        <div className="max-w-3xl mx-auto bg-neutral-900/40 rounded-[2.5rem] p-8 md:p-10 border border-white/5 mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Accès aux 6 modules + tous les goodies (checklists, fichiers, templates).",
              "Plan de Guerre 90 jours pour structurer ton lancement.",
              "Mises à jour futures incluses sans surcoût."
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={18} className="text-[#ff0000] shrink-0 mt-0.5" />
                <p className="text-[11px] font-bold text-gray-300 uppercase tracking-wide leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Options de Paiement */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* 1 Fois - Mis en avant */}
          <div className="bg-neutral-900 border-2 border-[#ff0000] rounded-[3rem] p-10 flex flex-col items-center text-center relative shadow-[0_0_40px_rgba(255,0,0,0.2)]">
            <div className="absolute -top-4 bg-[#ff0000] px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
              <Sparkles size={12} /> Recommandé
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest mb-2 italic serif-font">1 Fois</h3>
            <div className="text-5xl font-black text-white mb-6 tracking-tighter">297€</div>
            <p className="text-gray-400 text-sm italic mb-10 flex-grow">
              1 paiement de 297€ aujourd’hui.<br/>
              Accès immédiat et complet à vie.
            </p>
            <button 
              onClick={() => handlePayment(STRIPE_URLS.oneTime)}
              className="w-full py-5 bg-[#ff0000] text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg active:scale-95"
            >
              Payer 297€ en 1 fois
            </button>
          </div>

          {/* 2 Fois */}
          <div className="bg-neutral-900/40 border border-white/5 rounded-[3rem] p-10 flex flex-col items-center text-center group hover:border-white/20 transition-all">
            <h3 className="text-xl font-black uppercase tracking-widest mb-2 italic serif-font">2 Fois</h3>
            <div className="text-4xl font-black text-white mb-1 tracking-tighter">148,50€</div>
            <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6">par mois</div>
            <p className="text-gray-400 text-sm italic mb-10 flex-grow">
              1er paiement aujourd’hui, 2e dans 30 jours.<br/>
              Accès immédiat à la formation.
            </p>
            <button 
              onClick={() => handlePayment(STRIPE_URLS.twoTimes)}
              className="w-full py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#ff0000] hover:text-white transition-all active:scale-95"
            >
              Payer en 2 fois
            </button>
          </div>

          {/* 3 Fois */}
          <div className="bg-neutral-900/40 border border-white/5 rounded-[3rem] p-10 flex flex-col items-center text-center group hover:border-white/20 transition-all">
            <h3 className="text-xl font-black uppercase tracking-widest mb-2 italic serif-font">3 Fois</h3>
            <div className="text-4xl font-black text-white mb-1 tracking-tighter">99€</div>
            <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6">par mois</div>
            <p className="text-gray-400 text-sm italic mb-10 flex-grow">
              1er paiement aujourd’hui, puis 2 prélèvements mensuels.<br/>
              Accès immédiat à la formation.
            </p>
            <button 
              onClick={() => handlePayment(STRIPE_URLS.threeTimes)}
              className="w-full py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#ff0000] hover:text-white transition-all active:scale-95"
            >
              Payer en 3 fois
            </button>
          </div>
        </div>

        {/* Rassurance */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-green-500" />
              <span className="text-[10px] font-black uppercase tracking-widest">Paiement sécurisé via Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#ff0000]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Garantie satisfait ou remboursé 10 jours</span>
            </div>
          </div>
          <div className="h-px w-24 bg-white/10" />
          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.3em]">
            PulseNoir Academy - Propulsé par HAKUNA MATATA SRL
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseView;