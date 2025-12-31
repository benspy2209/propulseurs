
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock, Sparkles, Zap, ChevronRight, CreditCard, Video, Mic } from 'lucide-react';

interface PurchaseViewProps {
  onBack: () => void;
  onSuccess: () => void;
}

const PurchaseView: React.FC<PurchaseViewProps> = ({ onBack, onSuccess }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * LIENS DE PAIEMENT STRIPE
   */
  const STRIPE_LINK_1X = "https://buy.stripe.com/dRm9AS2UR0sXa7z4f443S01"; 
  const STRIPE_LINK_2X = "https://buy.stripe.com/28E9AS8fbb7B7Zr8vk43S02"; 
  const STRIPE_LINK_3X = "https://buy.stripe.com/3cI6oGbrnejN4Nf8vk43S03"; 

  const handlePayment = (url: string) => {
    if (url === "#") {
      alert("Cette option de paiement arrive très prochainement. Veuillez privilégier les options disponibles pour le moment.");
      return;
    }
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6 selection:bg-[#ff0000] selection:text-white relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#ff0000]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-gray-500 hover:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Retour au site
        </button>

        <header className="text-center mb-16">
          <div className="inline-block px-5 py-1.5 mb-6 rounded-full border border-[#f4c024]/30 bg-[#f4c024]/5 text-[#f4c024] text-[10px] font-black uppercase tracking-[0.3em]">
            Choisis ta formule
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic serif-font leading-none">
            Rejoins <span className="text-[#ff0000] text-glow">le clan</span>.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl italic font-light max-w-2xl mx-auto mb-10">
            Accès immédiat à la méthode : <br/>
            <span className="text-white font-black">"Pourquoi les bons polars restent-ils invisibles ? - En 90 jours, brisez le plafond de verre et devenez une valeur sûre."</span>
          </p>

          <div className="max-w-3xl mx-auto mb-16 bg-[#ff0000]/10 border border-[#f4c024]/30 rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f4c024]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-[#f4c024] rounded-[1.5rem] flex items-center justify-center text-black shrink-0 shadow-[0_0_30px_rgba(244,192,36,0.3)] relative z-10">
              <Video size={32} />
            </div>
            <div className="text-center md:text-left relative z-10">
              <p className="text-[#f4c024] font-black uppercase text-[10px] tracking-[0.3em] mb-1 italic">CADEAU : ACCOMPAGNEMENT INDIVIDUEL</p>
              <p className="text-white font-bold text-lg italic leading-snug">
                Votre session de coaching chirurgical d'une heure <span className="text-[#f4c024]">(Valeur 150€)</span> est <span className="underline decoration-[#f4c024] underline-offset-4">OFFERTE</span> avec votre accès. **Je m'immerge** personnellement dans votre projet pour propulser votre visibilité.
              </p>
              <p className="text-gray-500 text-[10px] mt-2 font-black uppercase tracking-widest italic">* Limité aux 10 premiers inscrits (C'est mon cadeau)</p>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-center">
          
          {/* Option 2X */}
          <div className="bg-neutral-950 border border-white/10 rounded-[3rem] p-8 relative overflow-hidden flex flex-col group hover:border-[#ff0000]/30 transition-all lg:h-[90%]">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-white/10">
                <CreditCard size={10} /> Le compromis
              </div>
              <h3 className="text-xl font-black uppercase italic serif-font tracking-tight">Paiement en <span className="text-white">2 fois</span></h3>
              <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest italic">Équilibre budget & économie</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white tracking-tighter">155</span>
                <span className="text-lg font-black text-gray-600">€</span>
                <span className="text-[10px] font-black text-gray-600 uppercase ml-2">/ mois</span>
              </div>
              <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-2">Pendant 2 mois (310€ au total)</p>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {[
                "1h Coaching Master inclus (si places)",
                "Allège ta trésorerie ce mois-ci",
                "Accès complet dès le 1er versement",
                "Idéal pour investir sereinement",
                "Prélèvement automatique simple"
              ].map((benefit, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle2 size={14} className="text-gray-700 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400 italic">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => handlePayment(STRIPE_LINK_2X)}
              className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-white hover:text-black active:scale-95 flex items-center justify-center gap-2"
            >
              Choisir 2x <ChevronRight size={14} />
            </button>
          </div>

          {/* Option 1X - THE YELLOW ONE */}
          <div className="bg-neutral-900 border-2 border-[#f4c024] rounded-[3rem] p-10 relative overflow-hidden flex flex-col shadow-[0_0_50px_rgba(244,192,36,0.3)] group scale-105 z-20 transition-all lg:h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={100} className="text-[#f4c024]" />
            </div>
            
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-[#f4c024] text-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4">
                <Sparkles size={10} /> Meilleur Choix
              </div>
              <h3 className="text-2xl font-black uppercase italic serif-font tracking-tight">Paiement <span className="text-[#f4c024]">Unique</span></h3>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest italic">Le plus avantageux</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-7xl font-black text-white tracking-tighter">297</span>
                <span className="text-2xl font-black text-[#f4c024]">€</span>
              </div>
              <p className="text-[10px] text-[#f4c024] font-black uppercase tracking-widest mt-2">Un seul règlement • Économise 30€</p>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {[
                "1h Coaching Master inclus (si places)",
                "Zéro frais de gestion additionnels",
                "Tous les modules débloqués à vie",
                "Le Pack de Goodies complet",
                "Priorité sur le groupe privé"
              ].map((benefit, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle2 size={16} className="text-[#f4c024] shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wide text-gray-200 italic">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => handlePayment(STRIPE_LINK_1X)}
              className="w-full py-6 bg-[#f4c024] text-black rounded-full font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-[0_0_30px_rgba(244,192,36,0.4)] hover:shadow-[0_0_50px_rgba(244,192,36,0.6)] active:scale-95 flex items-center justify-center gap-3 group"
            >
              Choisir 1x <ChevronRight size={16} />
            </button>
          </div>

          {/* Option 3X */}
          <div className="bg-neutral-950 border border-white/10 rounded-[3rem] p-8 relative overflow-hidden flex flex-col group hover:border-[#ff0000]/30 transition-all lg:h-[90%]">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-400 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-white/10">
                <CreditCard size={10} /> Flexibilité Max
              </div>
              <h3 className="text-xl font-black uppercase italic serif-font tracking-tight">Paiement en <span className="text-white">3 fois</span></h3>
              <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest italic">Liberté totale</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white tracking-tighter">109</span>
                <span className="text-lg font-black text-gray-600">€</span>
                <span className="text-[10px] font-black text-gray-600 uppercase ml-2">/ mois</span>
              </div>
              <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-2">Pendant 3 mois (327€ au total)</p>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {[
                "1h Coaching Master inclus (si places)",
                "La mensualité la plus petite",
                "Accès au groupe privé inclus",
                "Mises à jour à vie incluses",
                "Gestion automatique par Stripe"
              ].map((benefit, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle2 size={14} className="text-gray-700 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400 italic">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => handlePayment(STRIPE_LINK_3X)}
              className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-white hover:text-black active:scale-95 flex items-center justify-center gap-2"
            >
              Choisir 3x <ChevronRight size={14} />
            </button>
          </div>

        </div>

        <div className="mt-20 flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-600">
            <div className="flex items-center gap-3">
              <Lock size={16} className="text-green-900" />
              <span className="text-[9px] font-black uppercase tracking-widest">Paiement sécurisé par Stripe</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={16} className="text-[#f4c024]/40" />
              <span className="text-[9px] font-black uppercase tracking-widest">Garantie 10 Jours</span>
            </div>
          </div>
          <p className="text-[9px] text-gray-800 font-bold uppercase tracking-[0.4em] italic text-center leading-relaxed">
            PulseNoir Academy • Academy Elite Group<br/>Propulsé par Hakuna Matata SRL
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseView;
