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
import { 
  ArrowRight, 
  Instagram,
  Facebook,
  Check,
  Sparkles,
  CheckCircle2,
  Copy,
  ChevronDown,
  Zap,
  ShieldCheck,
  CalendarDays,
  User
} from 'lucide-react';

type ViewState = 'landing' | 'course' | 'cgv' | 'privacy' | 'mentions' | 'purchase' | 'success' | 'login';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isInstructorHovered, setIsInstructorHovered] = useState(false);
  
  // État de l'utilisateur (Simulation de session)
  const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem('userEmail'));
  const [hasAccess, setHasAccess] = useState<boolean>(localStorage.getItem('hasAccess') === 'true');

  // Simuler la détection du retour Stripe
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
    // Ici, on simulera une vérification réussie
    // En production, on interrogera Supabase ici
    setUserEmail(email);
    setHasAccess(true);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('hasAccess', 'true');
    setCurrentView('course');
  };

  const handleLogout = () => {
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
          
          <h1 className="text-[12vw] md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-6 italic serif-font">
            <span className="text-[#ff0000] text-glow">Vendez</span><br/>
            vos polars
          </h1>

          <p className="max-w-4xl mx-auto text-2xl md:text-4xl text-white font-black uppercase tracking-tight italic border-y border-white/10 py-8 mb-12 bg-white/5 backdrop-blur-sm px-4">
            Plan de Guerre 90 Jours pour Auteurs de Noir & Thriller.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 max-w-4xl mx-auto">
            {[
              "Construire ton écosystème d'auteur de noir moderne, sans te perdre.",
              "Lancer ton polar avec un plan de guerre 90 jours, action par action.",
              "Utiliser des checklists, scripts et fichiers prêts à l'emploi, pensés pour le noir."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start text-left bg-neutral-900/40 p-5 rounded-2xl border border-white/5">
                <Check className="text-[#ff0000] shrink-0 mt-1" size={18} strokeWidth={3} />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={() => setCurrentView('purchase')}
              className="px-16 py-8 bg-[#ff0000] text-white text-base font-black rounded-full flex items-center gap-3 group uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-[0_0_60px_rgba(255,0,0,0.5)] active:scale-95"
            >
              Rejoindre la formation
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-3 text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
              <ShieldCheck size={14} className="text-[#ff0000]" />
              PulseNoir : La référence polar & thriller
            </div>
          </div>
        </div>
      </header>

      {/* Section Pour Qui ? */}
      <section id="pour-qui" className="py-32 bg-neutral-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white italic serif-font">Est-ce pour <span className="text-[#ff0000]">vous</span> ?</h2>
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
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic serif-font group-hover:text-[#ff0000] transition-colors">{profile.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium italic">{profile.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-xl text-white font-black uppercase tracking-widest italic border border-[#ff0000]/20 py-8 px-4 rounded-3xl bg-[#ff0000]/5">
            Si tu écris du noir, du polar, du thriller et que tu veux des lecteurs, cette formation est pour toi.
          </p>
        </div>
      </section>

      {/* Section Programme (Modules) */}
      <section id="programme" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic serif-font leading-tight">Ce que tu vas <span className="text-[#ff0000]">maîtriser</span></h2>
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
               <h2 className={`absolute inset-0 text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white italic serif-font transition-all duration-700 ${isInstructorHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                {INSTRUCTOR.name}
              </h2>
              <h2 className={`absolute inset-0 text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#ff0000] italic serif-font transition-all duration-700 ${isInstructorHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                Pulseman
              </h2>
            </div>
            <p className="text-[#ff0000] font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-10 max-w-xl">
              {INSTRUCTOR.role}
            </p>
            
            <div className="space-y-8">
              <p className="text-gray-400 italic text-xl md:text-2xl leading-relaxed font-light border-l-4 border-[#ff0000] pl-6 py-2">
                {INSTRUCTOR.quote}
              </p>
              
              <div className="space-y-6">
                {INSTRUCTOR.bioBlocks.map((block, idx) => (
                  <p key={idx} className="text-gray-500 text-base md:text-lg leading-relaxed font-medium italic">
                    {block}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-12">
              {INSTRUCTOR_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  {stat.value && (
                    <span className="text-5xl font-black text-white tracking-tighter mb-1">{stat.value}</span>
                  )}
                  <span className="text-[#ff0000] font-black uppercase tracking-widest text-[10px] leading-relaxed max-w-[200px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bloc Format & Mises à jour */}
      <section id="format" className="py-24 bg-neutral-950 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-black/40 p-10 md:p-16 rounded-[3rem] border border-[#ff0000]/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={120} className="text-[#ff0000]" />
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#ff0000]/10 rounded-2xl text-[#ff0000]">
                <CalendarDays size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic serif-font">Comment se présente la <span className="text-[#ff0000]">formation</span> ?</h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium italic">
              <p>
                Aujourd’hui, la formation est construite autour de documents, fiches, checklists, modèles et fichiers que tu peux utiliser immédiatement pour ton lancement : pas besoin de binge-watcher des heures de vidéos avant d’agir.
              </p>
              <div className="relative p-6 bg-[#ff0000]/5 border-l-4 border-[#ff0000] rounded-r-2xl">
                <p className="relative z-10">
                  Des vidéos viendront compléter les modules dans une prochaine mise à jour. Et bonne nouvelle : toutes les personnes qui ont déjà acheté la formation auront accès à ces vidéos, et à toutes les mises à jour futures, <span className="inline-flex items-center gap-2 bg-[#ff0000] text-white px-3 py-1 rounded-full font-black not-italic shadow-[0_0_20px_rgba(255,0,0,0.4)] text-sm uppercase tracking-widest animate-pulse">
                    <Sparkles size={14} /> Gratuitement, à vie.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ – Questions fréquentes */}
      <section id="faq" className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white italic serif-font">FAQ – Questions <span className="text-[#ff0000]">fréquentes</span></h2>
            <div className="h-1 w-24 bg-[#ff0000] mx-auto" />
          </div>
          <div className="grid gap-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-neutral-900/20 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#ff0000]/20">
                <button 
                  onClick={() => toggleFaq(i)} 
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-900/40 transition-colors group"
                >
                  <span className={`text-sm md:text-base font-black uppercase tracking-widest italic transition-colors flex gap-4 ${openFaq === i ? 'text-[#ff0000]' : 'text-white'}`}>
                    <span className="text-[#ff0000]/40 font-sans not-italic">{i + 1}.</span>
                    {item.q}
                  </span>
                  <ChevronDown size={20} className={`text-[#ff0000] shrink-0 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 text-gray-400 font-medium italic text-lg leading-relaxed border-t border-white/5 bg-neutral-950/20 ml-12">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-black text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ff0000]/5 blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.8] mb-10 italic serif-font">
            Vendez vos<br/>
            <span className="text-[#ff0000] text-glow">Polars</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mb-14 max-w-2xl mx-auto italic font-light">
            Plan de Guerre 90 Jours pour Auteurs de Noir & Thriller. Rejoins le clan.
          </p>
          <button 
            onClick={() => setCurrentView('purchase')}
            className="px-16 py-8 bg-[#ff0000] text-white text-lg font-black rounded-full uppercase tracking-[0.2em] transition-all hover:scale-110 shadow-[0_0_80px_rgba(255,0,0,0.6)] active:scale-95 mb-8"
          >
            Rejoindre la formation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5 text-center px-6">
        <div className="mb-10 opacity-30 flex justify-center gap-8">
           <a href={PULSENOIR_LINKS.instagram} target="_blank" className="hover:text-[#ff0000] transition-colors"><Instagram size={24} /></a>
           <a href={PULSENOIR_LINKS.group} target="_blank" className="hover:text-[#ff0000] transition-colors"><Facebook size={24} /></a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#ff0000] font-black text-lg tracking-tighter uppercase">Pulse</span>
            <span className="text-white font-black text-lg tracking-tighter uppercase">Noir</span>
          </div>
          <p className="text-gray-800 text-[10px] font-black uppercase tracking-[0.5em] mb-4">© 2025 PulseNoir - Benjamin de Bruijne - Academy Elite</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button 
              onClick={() => setCurrentView('mentions')}
              className="text-gray-600 hover:text-[#ff0000] text-[9px] font-black uppercase tracking-widest transition-colors underline decoration-white/10 underline-offset-4"
            >
              Mentions Légales
            </button>
            <button 
              onClick={() => setCurrentView('cgv')}
              className="text-gray-600 hover:text-[#ff0000] text-[9px] font-black uppercase tracking-widest transition-colors underline decoration-white/10 underline-offset-4"
            >
              Conditions Générales de Vente
            </button>
            <button 
              onClick={() => setCurrentView('privacy')}
              className="text-gray-600 hover:text-[#ff0000] text-[9px] font-black uppercase tracking-widest transition-colors underline decoration-white/10 underline-offset-4"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;