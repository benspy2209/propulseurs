
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
  Play
} from 'lucide-react';

type ViewState = 'landing' | 'course' | 'cgv' | 'privacy' | 'mentions' | 'purchase' | 'success' | 'login';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [showPresentation, setShowPresentation] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isInstructorHovered, setIsInstructorHovered] = useState(false);
  
  // État de l'utilisateur
  const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem('userEmail'));
  const [hasAccess, setHasAccess] = useState<boolean>(localStorage.getItem('hasAccess') === 'true');

  // 1. Écouter les changements d'auth (Magic Link retour)
  useEffect(() => {
    // Vérifier la session actuelle au chargement
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.email) {
        handleLogin(session.user.email);
      }
    });

    // Écouter les changements d'état (clic sur le lien dans le mail)
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

  // 2. Détection du retour Stripe
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
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <div className="fixed top-0 w-full bg-[#f4c024] z-[60] py-2.5 px-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
          <Sparkles size={16} className="text-black hidden sm:block animate-pulse" />
          <div className="flex items-center gap-2">
            <p className="text-black text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.25em]">
              Promotion jusqu'au 15 janvier : <span className="bg-black/10 px-2 py-0.5 rounded">-30% sur la formation</span> avec le code : 
            </p>
            <button 
              onClick={handleCopyCode}
              className="flex items-center gap-2 bg-black text-[#f4c024] px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all group shadow-lg"
            >
              <span className="border-b border-[#f4c024]/30">{PROMO_CODE}</span>
              {copied ? (
                <CheckCircle2 size={14} className="text-green-400" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6 cursor-pointer group" onClick={() => setCurrentView('landing')}>
            <div className="flex items-center">
              <span className="text-[#ff0000] font-black text-2xl tracking-tighter uppercase">Pulse</span>
              <span className="text-white font-black text-2xl tracking-tighter uppercase">Noir</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            <button onClick={() => scrollToSection('pour-qui')} className="hover:text-white transition-colors cursor-pointer">Pour qui ?</button>
            <button onClick={() => scrollToSection('programme')} className="hover:text-white transition-colors cursor-pointer">Le Programme</button>
            <button onClick={() => scrollToSection('format')} className="hover:text-white transition-colors cursor-pointer">Format & Outils</button>
            <button onClick={() => scrollToSection('instructeur')} className="hover:text-white transition-colors cursor-pointer">L'Instructeur</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView(userEmail ? 'course' : 'login')}
              className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
            >
              <User size={14} className={userEmail ? "text-green-500" : "text-gray-600"} />
              {userEmail ? 'Mon Espace' : 'Accès Membre'}
            </button>
            <button 
              onClick={() => setCurrentView('purchase')}
              className="bg-[#ff0000] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,0,0,0.4)] active:scale-95"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-40 px-6 overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0000]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <div className="inline-block px-5 py-1.5 mb-8 rounded-full border border-[#ff0000]/30 bg-[#ff0000]/5 text-[#ff0000] text-[11px] font-black uppercase tracking-[0.3em]">
            Formation Marketing Auteurs
          </div>
          
          <h1 className="text-[14vw] md:text-[160px] leading-[0.75] mb-12 polar-title">
            <span className="text-[#ff0000] text-glow-red block">Vendez</span>
            <span className="text-white text-glow-white block mt-2">vos polars</span>
          </h1>

          <p className="max-w-4xl mx-auto text-xl md:text-3xl text-white font-black uppercase tracking-tight border-y border-white/10 py-8 mb-12 bg-white/5 backdrop-blur-sm px-4">
            Plan de Guerre 90 Jours<br />pour Auteurs de Polar, Noir & Thriller.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => setCurrentView('purchase')}
              className="px-12 py-7 bg-[#ff0000] text-white text-base font-black rounded-full flex items-center gap-3 group uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-[0_0_60px_rgba(255,0,0,0.5)] active:scale-95"
            >
              Rejoindre la formation
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => setShowPresentation(true)}
              className="px-12 py-7 bg-white/5 border border-white/10 text-white text-base font-black rounded-full flex items-center gap-3 group uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black active:scale-95"
            >
              <Play size={20} className="fill-current" />
              Découvrir la méthode
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
            <ShieldCheck size={14} className="text-[#ff0000]" />
            PulseNoir : La référence polar & thriller
          </div>
        </div>
      </header>

      {/* Section Pour Qui ? */}
      <section id="pour-qui" className="py-32 bg-neutral-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">Est-ce pour <span className="text-[#ff0000]">vous</span> ?</h2>
            <div className="h-1 w-24 bg-[#ff0000] mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Le Nouveau Talent",
                desc: "Auteur·rice de polar/thriller qui publie son premier roman et ne sait pas comment le faire connaître.",
              },
              {
                title: "L'Expérimenté Stagnant",
                desc: "Auteur·rice déjà publié·e, qui a tenté la promo 'au feeling' (posts, pubs isolées) sans vision d'ensemble.",
              },
              {
                title: "L'Efficace Radical",
                desc: "Auteur·rice qui aime le noir, mais déteste le blabla marketing et a besoin d'un plan simple à suivre.",
              }
            ].map((profile, i) => (
              <div key={i} className="bg-black p-10 rounded-[2.5rem] border border-white/5 hover:border-[#ff0000]/30 transition-all group h-full">
                <h3 className="text-2xl font-black text-white mb-4 uppercase group-hover:text-[#ff0000] transition-colors">{profile.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{profile.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-xl text-white font-black uppercase tracking-widest border border-[#ff0000]/20 py-8 px-4 rounded-3xl bg-[#ff0000]/5">
            Si tu écris du noir, du polar, du thriller<br />et que tu veux des lecteurs, cette formation est pour toi.
          </p>
        </div>
      </section>

      {/* Section Programme (Modules) */}
      <section id="programme" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-tight">Ce que tu vas <span className="text-[#ff0000]">maîtriser</span></h2>
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.5em]">Une progression logique de l'ombre à la lumière.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSE_MODULES.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <button onClick={() => setCurrentView('purchase')} className="text-[#ff0000] font-black uppercase tracking-[0.3em] text-sm hover:underline flex items-center gap-2 mx-auto">
            Voir le détail complet de la formation <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructeur" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-[40%]">
            <div 
              onMouseEnter={() => setIsInstructorHovered(true)}
              onMouseLeave={() => setIsInstructorHovered(false)}
              className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group aspect-[4/5] md:aspect-auto cursor-help"
            >
              <img 
                src={INSTRUCTOR.photo} 
                alt={INSTRUCTOR.name} 
                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105" 
              />
              <img 
                src={INSTRUCTOR.hoverPhoto} 
                alt={`${INSTRUCTOR.name} survol`} 
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-105" 
              />
            </div>
          </div>
          
          <div className="w-full md:w-[60%] text-left">
            <div className="relative h-16 md:h-20 mb-2 overflow-hidden">
               <h2 className={`absolute inset-0 text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white transition-all duration-700 ${isInstructorHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                {INSTRUCTOR.name}
              </h2>
              <h2 className={`absolute inset-0 text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#ff0000] transition-all duration-700 ${isInstructorHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                Pulseman
              </h2>
            </div>
            <p className="text-[#ff0000] font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-10 max-w-xl">
              {INSTRUCTOR.role}
            </p>
            
            <div className="space-y-8">
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-[#ff0000] pl-6 py-2">
                {INSTRUCTOR.quote}
              </p>
              
              <div className="space-y-6">
                {INSTRUCTOR.bioBlocks.map((block, idx) => (
                  <p key={idx} className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                    {block}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-12 gap-x-8">
              {INSTRUCTOR_STATS.map((stat, i) => ( stat.value && (
                <div key={i} className="flex flex-col">
                  <span className="text-5xl font-black text-white tracking-tighter mb-1">{stat.value}</span>
                  <span className="text-[#ff0000] font-black uppercase tracking-widest text-[10px] leading-relaxed max-w-[240px]">
                    {stat.label}
                  </span>
                </div>
              )))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Lead Magnet Section */}
      <LeadMagnetSection />

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5 text-center px-6">
        <div className="mb-10 opacity-30 flex justify-center gap-8">
           <a href={PULSENOIR_LINKS.instagram} target="_blank" className="hover:text-[#ff0000] transition-colors"><Instagram size={24} /></a>
           <a href={PULSENOIR_LINKS.group} target="_blank" className="hover:text-[#ff0000] transition-colors"><Facebook size={24} /></a>
           <a href={PULSENOIR_LINKS.youtube} target="_blank" className="hover:text-[#ff0000] transition-colors"><Youtube size={24} /></a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#ff0000] font-black text-lg tracking-tighter uppercase">Pulse</span>
            <span className="text-white font-black text-lg tracking-tighter uppercase">Noir</span>
          </div>
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
