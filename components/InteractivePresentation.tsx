
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X, BookOpen, Target, Users, Zap, Award, Shield } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  content: string;
  icon: React.ReactNode;
}

const slides: Slide[] = [
  {
    title: "L'Écosystème de Visibilité",
    subtitle: "La Stratégie de Base",
    content: "Pour un nouvel auteur, le plus efficace est de construire progressivement une présence cohérente. On ne devient pas un best-seller par accident, on le devient par architecture et persévérance.",
    icon: <Target size={64} />,
  },
  {
    title: "La Niche Radicale",
    subtitle: "Brique n°1 : Le Positionnement",
    content: "Ne cherchez pas à plaire à tout le monde. Dans le Noir, la spécialisation est votre armure. Devenez la référence d'un sous-genre précis : Polar Social, Thriller Tech, ou Noir Rural.",
    icon: <BookOpen size={64} />,
  },
  {
    title: "L'Identité Magnétique",
    subtitle: "Brique n°2 : Votre Aura",
    content: "Votre bio, vos visuels et votre ton doivent crier 'NOIR'. Un lecteur doit ressentir l'ambiance de vos livres avant même d'avoir cliqué sur le bouton 'Acheter'.",
    icon: <Zap size={64} />,
  },
  {
    title: "Le Réseau d'Influence",
    subtitle: "Brique n°3 : Le Clan",
    content: "Le succès est une affaire de clan. Recrutez vos 50 premiers lecteurs ultra-fidèles. Ils sont vos soldats, ceux qui propulsent vos avis Amazon dès le premier jour.",
    icon: <Users size={64} />,
  },
  {
    title: "Dominer les 90 Jours",
    subtitle: "Brique n°4 : Le Plan de Guerre",
    content: "Une action par jour pendant trois mois. C'est la différence entre un auteur qui attend et un auteur qui règne. Votre écosystème est votre forteresse contre l'oubli.",
    icon: <Shield size={64} />,
  }
];

const InteractivePresentation: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') onExit();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = slides[current];

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Film Noir Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-20" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }}></div>

      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#ff0000]/5 rounded-full blur-[150px]"></div>
      </div>

      <button 
        onClick={onExit}
        className="absolute top-10 right-10 text-gray-500 hover:text-[#ff0000] transition-colors z-[110] bg-black/50 p-2 rounded-full backdrop-blur-md"
      >
        <X size={32} />
      </button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 flex gap-1 z-[110]">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 transition-all duration-700 ${i <= current ? 'bg-[#ff0000]' : 'bg-neutral-900'}`} 
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl w-full px-6 md:px-10 text-center flex flex-col items-center">
        <div className="text-[#ff0000] mb-8 md:mb-12 animate-in zoom-in duration-700 drop-shadow-[0_0_30px_rgba(255,0,0,0.3)]">
          {slide.icon}
        </div>
        
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gray-600 mb-4 md:mb-6 block italic animate-in fade-in slide-in-from-top-4 duration-1000">
          {slide.subtitle}
        </span>
        
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 md:mb-10 italic serif-font leading-[1.1] md:leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
          {slide.title.split(' ').map((word, i) => (
            <span key={i} className={i % 2 === 1 ? "text-[#ff0000] text-glow" : "text-white"}>{word} </span>
          ))}
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff0000] to-transparent opacity-50"></div>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light italic leading-relaxed pl-8 text-left animate-in fade-in duration-1000">
            {slide.content}
          </p>
        </div>

        <div className="mt-16 md:mt-24 flex items-center justify-center gap-8 md:gap-12 z-[110]">
          <button 
            onClick={prev}
            className="p-4 md:p-5 rounded-full border border-white/10 hover:border-[#ff0000] hover:text-[#ff0000] transition-all group active:scale-90 bg-white/5"
          >
            <ArrowLeft size={24} className="md:size-[32px]" />
          </button>
          <div className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-gray-800">
            <span className="text-white">{current + 1}</span> <span className="mx-2 text-gray-900">/</span> {slides.length}
          </div>
          <button 
            onClick={next}
            className="p-4 md:p-5 rounded-full border border-white/10 hover:border-[#ff0000] hover:text-[#ff0000] transition-all group active:scale-90 bg-white/5"
          >
            <ArrowRight size={24} className="md:size-[32px]" />
          </button>
        </div>
      </div>
      
      {/* Decorative Background Number */}
      <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 text-[100px] md:text-[200px] font-black text-white/[0.02] serif-font leading-none pointer-events-none select-none z-0">
        0{current + 1}
      </div>
    </div>
  );
};

export default InteractivePresentation;
