
import React, { useState, useEffect } from 'react';
import { COURSE_MODULES, INSTRUCTOR, INSTRUCTOR_STATS, PULSENOIR_LINKS, FAQ_ITEMS } from './constants';
import ModuleCard from './components/ModuleCard';
import CoursePlayer from './components/CoursePlayer';
import LegalView from './components/LegalView';
import PrivacyPolicyView from './components/PrivacyPolicyView';
import MentionsLegalesView from './components/MentionsLegalesView';
import PurchaseView from './components/PurchaseView';
import SuccessView from './components/SuccessView';
import LoginView from './components/LoginView';
import InteractivePresentation from './components/InteractivePresentation';
import TestimonialsSection from './components/TestimonialsSection';
import LeadMagnetSection from './components/LeadMagnetSection';
import { supabase } from './lib/supabase';
import { 
  ArrowRight, 
  Instagram,
  Facebook,
  Youtube,
  Check,
  Sparkles,
  CheckCircle2,
  Copy,
  ChevronDown,
  Zap,
  ShieldCheck,
  CalendarDays,
  User,
  Play,
  HelpCircle,
  Plus,
  Minus,
  Search,
  EyeOff,
  TrendingDown,
  Repeat,
  UserCircle,
  Video,
  Mic
} from 'lucide-react';

type ViewState = 'landing' | 'course' | 'cgv' | 'privacy' | 'mentions' | 'purchase' | 'success' | 'login';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg', className?: string }> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-lg lg:text-xl',
    md: 'text-xl lg:text-2xl',
    lg: 'text-2xl lg:text-3xl'
  };
  const heartSize = size === 'sm' ? 16 : size === 'md' ? 22 : 28;

  return (
    <div className={`flex items-center gap-0 group/logo select-none ${className}`}>
      <span className={`text-[#ff0000] font-black tracking-tighter uppercase ${sizeClasses[size]}`}>Pulse</span>
      <div className="relative group-hover/logo:scale-110 group-active/logo:scale-95 transition-transform duration-300 mx-[-6px] lg:mx-[-7px]">
        <svg 
          width={heartSize} 
          height={heartSize} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]"
        >
          <defs>
            <clipPath id="left-half">
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
            <clipPath id="right-half">
              <rect x="12" y="0" width="12" height="24" />
            </clipPath>
          </defs>
          <path 
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
            fill="#ffffff" 
            clipPath="url(#left-half)" 
          />
          <path 
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
            fill="#ff0000" 
            clipPath="url(#right-half)" 
          />
        </svg>
      </div>
      <span className={`text-white font-black tracking-tighter uppercase ${sizeClasses[size]}`}>Noir</span>
    </div>
  );
};

const CoachingBonusSection: React.FC = () => {
  return (
    <section id="coaching" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-neutral-900/50 border-2 border-[#ff0000]/30 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <UserCircle size={120} className="text-[#ff0000]" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#ff0000] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg">
              <Zap size={14} fill="currentColor" /> BONUS MASTER : ACCOMPAGNEMENT HUMAIN
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white italic serif-font mb-6 leading-tight">
              1 Heure de <span className="text-[#ff0000]">Coaching Individuel</span> Offerte
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl italic font-light leading-relaxed mb-10">
              Pour les 10 premiers inscrits uniquement, **je m'immerge** personnellement dans votre projet pour débloquer votre visibilité et valider votre plan d'attaque personnalisé. Ce n'est pas un appel de courtoisie, c'est une séance de travail chirurgicale que **je mène avec vous** pour votre carrière d'auteur de noir.
            </p>
            
            <div className="pt-8 border-t border-white/5">
              <p className="text-gray-400 text-xs italic font-medium leading-relaxed">
                * L'attribution se fait selon l'ordre d'arrivée des commandes Stripe. Une fois les 10 places envolées, cette offre disparaîtra définitivement pour préserver la qualité de l'accompagnement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [showPresentation, setShowPresentation] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isInstructorHovered, setIsInstructorHovered] = useState(false);
  
  const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem('userEmail'));
  const [hasAccess, setHasAccess] = useState<boolean>(localStorage.getItem('hasAccess') === 'true');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.email) {
        handleLogin(session.user.email);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user?.email) {
        handleLogin(session.user.email);
      } else if (event === 'SIGNED_OUT') {
        handleLogout();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success') {
      setCurrentView('success');
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const PROMO_CODE = "JELANCEMONLIVRE";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setHasAccess(true);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('hasAccess', 'true');
    setCurrentView('course');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserEmail(null);
    setHasAccess(false);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('hasAccess');
    setCurrentView('landing');
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (showPresentation) {
    return <InteractivePresentation onExit={() => setShowPresentation(false)} />;
  }

  if (currentView === 'login') {
    return <LoginView onBack={() => setCurrentView('landing')} onLogin={handleLogin} />;
  }

  if (currentView === 'course') {
    if (!hasAccess) {
      return <LoginView onBack={() => setCurrentView('landing')} onLogin={handleLogin} />;
    }
    return <CoursePlayer modules={COURSE_MODULES} onBack={() => setCurrentView('landing')} onLogout={handleLogout} />;
  }

  if (currentView === 'cgv') {
    return <LegalView onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'privacy') {
    return <PrivacyPolicyView onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'mentions') {
    return <MentionsLegalesView onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'purchase') {
    return (
      <PurchaseView 
        onBack={() => setCurrentView('landing')} 
        onSuccess={() => setCurrentView('success')} 
      />
    );
  }

  if (currentView === 'success') {
    return (
      <SuccessView 
        onGoToCourse={() => setCurrentView('login')} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff0000] selection:text-white">
      
      {/* Promotional Subheader */}
      <div className="fixed top-0 w-full bg-[#f4c024] z-[60] py-2 px-4 shadow-xl min-h-[44px] flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
          <Sparkles size={14} className="text-black hidden sm:block animate-pulse shrink-0" />
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <p className="text-black text-[9px] sm:text-[11px] lg:text-xs font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-tight">
              Promotion jusqu'au 15 janvier : <span className="bg-black/10 px-1.5 py-0.5 rounded">-30% sur la formation</span> avec le code : 
            </p>
            <button 
              onClick={handleCopyCode}
              className="flex items-center gap-2 bg-black text-[#f4c024] px-3 py-1 rounded-full text-[9px] sm:text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all group shadow-lg shrink-0"
            >
              <span className="border-b border-[#f4c024]/30">{PROMO_CODE}</span>
              {copied ? (
                <CheckCircle2 size={12} className="text-green-400" />
              ) : (
                <Copy size={12} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-[72px] lg:top-[44px] w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
          <button onClick={() => setCurrentView('landing')} className="hover:opacity-80 transition-opacity">
            <Logo size="md" />
          </button>
          
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            <button onClick={() => scrollToSection('autopsie')} className="hover:text-white transition-colors cursor-pointer">L'Analyse</button>
            <button onClick={() => scrollToSection('pour-qui')} className="hover:text-white transition-colors cursor-pointer">Pour qui ?</button>
            <button onClick={() => scrollToSection('programme')} className="hover:text-white transition-colors cursor-pointer">Le Programme</button>
            <button onClick={() => scrollToSection('ressources')} className="hover:text-white transition-colors cursor-pointer">Plan d'Attaque</button>
            <button onClick={() => scrollToSection('instructeur')} className="hover:text-white transition-colors cursor-pointer">L'Instructeur</button>
            <button onClick={() => scrollToSection('coaching')} className="hover:text-white transition-colors cursor-pointer">Coaching</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</button>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <button 
              onClick={() => setCurrentView(userEmail ? 'course' : 'login')}
              className="flex items-center gap-1.5 lg:gap-2 text-gray-400 hover:text-white text-[9px] lg:text-[10px] font-black uppercase tracking-widest transition-colors"
            >
              <User size={14} className={userEmail ? "text-green-500" : "text-gray-600"} />
              <span>{userEmail ? 'Mon Espace' : 'Accès Membre'}</span>
            </button>
            <button 
              onClick={() => setCurrentView('purchase')}
              className="bg-[#ff0000] text-white px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)] active:scale-95"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-52 lg:pt-40 px-6 overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0000]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <div className="inline-block px-5 py-1.5 mb-8 rounded-full border border-[#ff0000]/30 bg-[#ff0000]/5 text-[#ff0000] text-[11px] font-black uppercase tracking-[0.3em]">
            Dossier : Rupture de l'Anonymat
          </div>
          
          <h1 className="text-[10vw] md:text-[120px] leading-[0.85] mb-12 polar-title">
            Pourquoi les bons polars restent-ils <span className="text-[#ff0000] text-glow-red">invisibles</span> ?
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-2xl text-white font-black uppercase tracking-tight border-y border-white/10 py-6 lg:py-8 mb-8 bg-white/5 backdrop-blur-sm px-4 leading-relaxed">
            Ce n'est pas une question de talent. C'est un système biaisé et un lecteur qui a peur de l'inconnu. <br />
            En 90 jours, brisez le plafond de verre et devenez une valeur sûre.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <button 
              onClick={() => setCurrentView('purchase')}
              className="w-full md:w-auto px-12 py-7 bg-[#ff0000] text-white text-base font-black rounded-full flex items-center justify-center gap-3 group uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-[0_0_60px_rgba(255,0,0,0.5)] active:scale-95"
            >
              Rejoindre l'offensive
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => setShowPresentation(true)}
              className="w-full md:w-auto px-12 py-7 bg-white/5 border border-white/10 text-white text-base font-black rounded-full flex items-center justify-center gap-3 group uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black active:scale-95"
            >
              <Play size={20} className="fill-current" />
              Découvrir la méthode
            </button>
          </div>

          {/* New Coaching Mention in Hero */}
          <div className="flex items-center justify-center gap-3 text-white/60 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs italic bg-white/5 py-3 px-6 rounded-full border border-white/5 backdrop-blur-sm">
            <Video size={16} className="text-[#ff0000]" />
            Inclus : 1h de coaching privé avec Benjamin (AKA Pulseman) <span className="text-[#ff0000]">(Offert aux 10 premiers)</span>
          </div>
        </div>
      </header>

      {/* ... (rest of the sections: Autopsie, Pour qui, Programme, etc.) */}
      
      {/* NOUVELLE SECTION : Autopsie du Marché */}
      <section id="autopsie" className="py-32 bg-neutral-950 relative border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(255,0,0,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white italic serif-font">L'Autopsie du <span className="text-[#ff0000]">Marché</span></h2>
            <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] mt-4">Pourquoi la qualité ne suffit plus en 2025</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <EyeOff size={40} className="text-[#ff0000]" />, 
                title: "Le Mur du Lecteur", 
                desc: "Le budget se resserre. Le lecteur ne prend plus de risque. S'il ne voit pas de signaux de rassurance immédiats, il retourne vers les auteurs 'bankables'." 
              },
              { 
                icon: <TrendingDown size={40} className="text-[#ff0000]" />, 
                title: "L'Étranglement", 
                desc: "400 polars par mois. Les algorithmes et les libraires ne voient que ce qui brille déjà. Sans machine de guerre, votre texte est noyé dans la masse." 
              },
              { 
                icon: <Repeat size={40} className="text-[#ff0000]" />, 
                title: "La Boucle de l'Oubli", 
                desc: "Pas vu → Pas acheté → Moins vu. C'est un cercle vicieux systémique. Pour en sortir, il ne faut pas 'faire de la promo', il faut bâtir un écosystème." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-black/40 p-10 rounded-[3rem] border border-white/5 hover:border-[#ff0000]/20 transition-all group">
                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic serif-font tracking-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium italic text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pour Qui ? */}
      <section id="pour-qui" className="py-32 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-white italic serif-font">Est-ce pour <span className="text-[#ff0000]">vous</span> ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Le Nouveau Talent", desc: "Pour ne pas griller votre première cartouche dans le vide et sortir de l'anonymat dès le premier jour." },
              { title: "L'Expérimenté", desc: "Pour briser le plafond de verre qui vous empêche de percer et transformer vos ventes stagnantes." },
              { title: "L'Efficace Radical", desc: "Pour ceux qui veulent des armes, une méthode chirurgicale, et pas un énième blabla marketing." }
            ].map((profile, i) => (
              <div key={i} className="bg-neutral-950 p-10 rounded-[2.5rem] border border-white/5 hover:border-[#ff0000]/30 transition-all group h-full">
                <h3 className="text-2xl font-black text-white mb-4 uppercase group-hover:text-[#ff0000] transition-colors tracking-tight italic serif-font">{profile.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium italic text-lg">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Programme */}
      <section id="programme" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-tight italic serif-font">Votre arsenal de <span className="text-[#ff0000]">guerre</span></h2>
          <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] mt-4 italic">6 étapes tactiques + 1 Master Bonus pour briser l'invisibilité</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSE_MODULES.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
          
          {/* Bonus Master Block in Program */}
          <div className="group relative bg-[#ff0000]/5 rounded-[2.5rem] p-10 border-2 border-[#ff0000]/30 transition-all duration-500 flex flex-col h-full hover:bg-[#ff0000]/10 shadow-[0_0_30px_rgba(255,0,0,0.1)] overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#ff0000]/10 rounded-full blur-3xl" />
            
            <div className="flex justify-between items-start mb-10 relative z-10">
              <div className="w-14 h-14 bg-[#ff0000] text-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                <Video size={28} />
              </div>
              <div className="px-3 py-1 bg-[#ff0000] rounded-full text-[9px] font-black text-white uppercase tracking-widest shadow-lg">
                MASTER BONUS
              </div>
            </div>

            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter italic serif-font group-hover:text-[#ff0000] transition-colors leading-tight relative z-10">
              Le Coaching Commando
            </h3>
            <p className="text-[10px] font-black text-gray-500 mb-6 uppercase tracking-[0.2em] relative z-10">
              Accompagnement Humain Direct
            </p>
            
            <p className="text-gray-400 mb-8 text-sm leading-relaxed font-medium italic relative z-10">
              **Je m'immerge** personnellement dans votre projet lors d'une session privée d'une heure.
            </p>

            <ul className="space-y-4 mt-auto relative z-10">
              {[
                "1h de Visio privée avec moi",
                "J'audite directement votre visibilité",
                "Je valide votre plan d'attaque",
                "Je réponds à vos blocages précis"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start text-[11px] text-gray-200 font-bold uppercase tracking-wider leading-snug">
                  <CheckCircle2 size={14} className="mr-3 mt-0.5 text-[#ff0000] flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructeur" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12 lg:gap-20">
          <div className="w-full md:w-[40%]">
            <div 
              onMouseEnter={() => setIsInstructorHovered(true)}
              onMouseLeave={() => setIsInstructorHovered(false)}
              className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group aspect-[4/5] md:aspect-auto cursor-help mb-12"
            >
              <img src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105" />
              <img src={INSTRUCTOR.hoverPhoto} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-105" />
            </div>

            {/* Statistiques Cartouches */}
            <div className="grid grid-cols-2 gap-4">
              {INSTRUCTOR_STATS.map((stat, i) => (
                <div key={i} className="bg-neutral-900/40 p-6 rounded-3xl border border-white/5 hover:border-[#ff0000]/30 transition-all group text-center">
                   <div className="text-2xl font-black text-white group-hover:text-[#ff0000] transition-colors mb-2 serif-font italic tracking-tighter">
                     {stat.value}
                   </div>
                   <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest leading-tight italic">
                     {stat.label}
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-[60%] text-left">
            <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter italic serif-font mb-4 transition-colors duration-500 ${isInstructorHovered ? 'text-[#ff0000]' : 'text-white'}`}>
              {isInstructorHovered ? 'Pulseman' : INSTRUCTOR.name}
            </h2>
            <p className="text-[#ff0000] font-black uppercase tracking-[0.2em] text-xs mb-10">{INSTRUCTOR.role}</p>
            <div className="space-y-8">
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-[#ff0000] pl-6 py-2 italic">
                {INSTRUCTOR.quote}
              </p>
              <div className="space-y-6 text-gray-500 text-base md:text-lg leading-relaxed font-medium italic">
                {INSTRUCTOR.bioBlocks.map((block, idx) => <p key={idx}>{block}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Lead Magnet */}
      <LeadMagnetSection />

      {/* Coaching Bonus Section */}
      <CoachingBonusSection />

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-black relative border-t border-white/5">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none select-none italic font-black text-[15vw] masonry-none uppercase">Questions</div>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#ff0000]/30 bg-[#ff0000]/5 text-[#ff0000] text-[10px] font-black uppercase tracking-[0.4em]">
              <HelpCircle size={14} /> Dossier : Clarification
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white italic serif-font">
              FAQ : OPÉRATION <span className="text-[#ff0000]">PLAN DE GUERRE</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div 
                key={i} 
                className={`group border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 ${openFaq === i ? 'bg-neutral-900/50 border-[#ff0000]/30 shadow-2xl' : 'bg-neutral-950 hover:border-white/10'}`}
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-8 text-left flex items-center justify-between gap-6"
                >
                  <span className={`text-lg md:text-xl font-black uppercase tracking-tight italic transition-colors ${openFaq === i ? 'text-[#ff0000]' : 'text-white'}`}>
                    {item.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${openFaq === i ? 'bg-[#ff0000] border-[#ff0000] text-white rotate-180' : 'bg-black border-white/10 text-gray-500 group-hover:border-white/20'}`}>
                    {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0">
                    <div className="h-px w-12 bg-[#ff0000]/30 mb-6" />
                    <p className="text-gray-400 text-lg italic leading-relaxed font-light">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center p-12 bg-[#ff0000]/5 border border-[#ff0000]/10 rounded-[3rem]">
            <p className="text-white font-black uppercase tracking-widest text-sm mb-6 italic">Une autre question en tête ?</p>
            <a href="mailto:debruijneb@gmail.com" className="text-[#ff0000] font-black uppercase tracking-[0.3em] text-xs hover:underline decoration-white/20 underline-offset-8">Envoyez un message direct à l'instructeur</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5 text-center px-6">
        <div className="mb-10 opacity-30 flex justify-center gap-8">
           <a href={PULSENOIR_LINKS.instagram} target="_blank" className="hover:text-[#ff0000] transition-colors"><Instagram size={24} /></a>
           <a href={PULSENOIR_LINKS.group} target="_blank" className="hover:text-[#ff0000] transition-colors"><Facebook size={24} /></a>
           <a href={PULSENOIR_LINKS.youtube} target="_blank" className="hover:text-[#ff0000] transition-colors"><Youtube size={24} /></a>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Logo size="sm" />
          <p className="text-gray-800 text-[10px] font-black uppercase tracking-[0.5em] mb-4">© 2025 PulseNoir - Benjamin de Bruijne - Academy Elite</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button onClick={() => setCurrentView('mentions')} className="text-gray-600 hover:text-[#ff0000] text-[9px] font-black uppercase tracking-widest transition-colors underline decoration-white/10 underline-offset-4">Mentions Légales</button>
            <button onClick={() => setCurrentView('cgv')} className="text-gray-600 hover:text-[#ff0000] text-[9px] font-black uppercase tracking-widest transition-colors underline decoration-white/10 underline-offset-4">Conditions Générales de Vente</button>
            <button onClick={() => setCurrentView('privacy')} className="text-gray-600 hover:text-[#ff0000] text-[9px] font-black uppercase tracking-widest transition-colors underline decoration-white/10 underline-offset-4">Politique de confidentialité</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
