
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X, BookOpen, Target, Users, Zap, Award } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  content: string;
  icon: React.ReactNode;
  color: string;
}

const slides: Slide[] = [
  {
    title: "L'Écosystème de l'Auteur",
    subtitle: "Le Plan de Guerre",
    content: "Pour un nouvel auteur, le plus efficace est de construire progressivement une présence cohérente. On ne devient pas un best-seller par accident, on le devient par architecture.",
    icon: <Target size={48} />,
    color: "#ff0000"
  },
  {
    title: "La Niche Radicale",
    subtitle: "Brique n°1 : Le Positionnement",
    content: "Ne cherchez pas à plaire à tout le monde. Dans le Noir, la spécialisation est votre armure. Devenez la référence d'un sous-genre précis (Polar Social, Thriller Tech, Noir Rural).",
    icon: <BookOpen size={48} />,
    color: "#ff0000"
  },
  {
    title: "L'Identité Magnétique",
    subtitle: "Brique n°2 : Votre Aura",
    content: "Votre bio, vos visuels et votre ton doivent crier 'NOIR'. Un lecteur doit ressentir l'ambiance de vos livres avant même d'avoir lu la première page de votre résumé.",
    icon: <Zap size={48} />,
    color: "#ff0000"
  },
  {
    title: "Le Réseau d'Influence",
    subtitle: "Brique n°3 : La Street Team",
    content: "Le succès est une affaire de clan. Recrutez vos 50 premiers lecteurs ultra-fidèles. Ils sont vos soldats, ceux qui propulsent vos avis Amazon dès le premier jour.",
    icon: <Users size={48} />,
    color: "#ff0000"
  },
  {
    title: "La Domination Long Terme",
    subtitle: "Brique n°4 : La Répétition",
    content: "90 jours pour lancer, une vie pour régner. L'écosystème que vous bâtissez aujourd'hui servira de tremplin pour chacun de vos futurs romans.",
    icon: <Award size={48} />,
    color: "#ff0000"
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
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#ff0000]/5 rounded-full blur-[150px]"></div>
      </div>

      <button 
        onClick={onExit}
        className="absolute top-10 right-10 text-gray-500 hover:text-[#ff0000] transition-colors z-20"
      >
        <X size={40} />
      </button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 transition-all duration-500 ${i <= current ? 'bg-[#ff0000]' : 'bg-neutral-800'}`} 
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl w-full px-10 text-center animate-in fade-in slide-in-from-bottom-10 duration-700">
        <div className="text-[#ff0000] mb-12 flex justify-center scale-125 md:scale-150">
          {slide.icon}
        </div>
        
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gray-500 mb-6 block italic">
          {slide.subtitle}
        </span>
        
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 italic serif-font leading-tight">
          {slide.title.split(' ').map((word, i) => (
            <span key={i} className={i % 2 === 1 ? "text-[#ff0000]" : "text-white"}>{word} </span>
          ))}
        </h2>

        <p className="text-xl md:text-3xl text-gray-400 font-light italic leading-relaxed max-w-3xl mx-auto border-l-2 border-[#ff0000]/30 pl-8 text-left">
          {slide.content}
        </p>

        <div className="mt-20 flex items-center justify-center gap-12">
          <button 
            onClick={prev}
            className="p-4 rounded-full border border-white/10 hover:border-[#ff0000] hover:text-[#ff0000] transition-all group"
          >
            <ArrowLeft size={32} />
          </button>
          <div className="text-xs font-black uppercase tracking-widest text-gray-700">
            {current + 1} / {slides.length}
          </div>
          <button 
            onClick={next}
            className="