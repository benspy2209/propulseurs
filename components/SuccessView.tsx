import React, { useEffect } from 'react';
import { CheckCircle, Mail, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface SuccessViewProps {
  onGoToCourse: () => void;
}

const SuccessView: React.FC<SuccessViewProps> = ({ onGoToCourse }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff0000]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-2xl w-full bg-neutral-900/40 rounded-[4rem] p-10 md:p-16 border border-[#ff0000]/20 text-center relative z-10 shadow-2xl backdrop-blur-xl">
        <div className="w-24 h-24 bg-[#ff0000] text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(255,0,0,0.5)] animate-bounce">
          <CheckCircle size={48} />
        </div>

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic serif-font">
          Merci, ton accès est <span className="text-[#ff0000]">confirmé</span>.
        </h1>

        <div className="space-y-8 text-gray-400 text-lg italic font-light mb-12">
          <div className="flex items-start gap-4 text-left bg-black/30 p-6 rounded-2xl border border-white/5">
            <Mail className="text-[#ff0000] shrink-0" size={24} />
            <p className="text-sm">
              Tu vas recevoir dans quelques minutes un email avec ta confirmation de paiement, ton lien vers l'espace membre et les accès au groupe privé.
            </p>
          </div>
          
          <div className="flex items-start gap-4 text-left bg-black/30 p-6 rounded-2xl border border-white/5">
            <MessageCircle className="text-[#ff0000] shrink-0" size={24} />
            <p className="text-sm">
              Si tu ne reçois rien d’ici 15 minutes, vérifie tes spams et écris à : <span className="text-white font-bold">debruijneb@gmail.com</span>.
            </p>
          </div>
        </div>

        <button 
          onClick={onGoToCourse}
          className="w-full py-8 bg-[#ff0000] text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,0,0,0.4)] flex items-center justify-center gap-3 group active:scale-95"
        >
          Accéder à mon espace <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </button>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-600">
          <Sparkles size={12} className="text-[#ff0000]" />
          Bienvenue dans le clan PulseNoir
        </div>
      </div>
    </div>
  );
};

export default SuccessView;