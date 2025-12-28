import React, { useState } from 'react';
import { COURSE_MODULES, INSTRUCTOR, PULSENOIR_LINKS } from './constants';
import ModuleCard from './components/ModuleCard';
import CoursePlayer from './components/CoursePlayer';
import { BookOpen, Star, ChevronDown, Check, ArrowRight, Users, Feather, Library, Instagram, ExternalLink, TrendingUp, Search, MessageSquare } from 'lucide-react';

type ViewState = 'landing' | 'course';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  
  const scrollToModules = () => {
    const element = document.getElementById('programme');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Si on est en mode "Cours", on affiche le lecteur
  if (currentView === 'course') {
    return <CoursePlayer modules={COURSE_MODULES} onBack={() => setCurrentView('landing')} />;
  }

  // Sinon, on affiche la page de vente (Vitrine)
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff0000] selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('landing')}>
            <span className="text-[#ff0000] font-bold text-2xl tracking-tighter">PULSE<span className="text-white">NOIR</span></span>
            <span className="text-xs text-gray-500 border-l border-gray-700 pl-2 ml-2 uppercase tracking-widest hidden sm:inline-block">Academy</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#ecosysteme" className="hover:text-[#ff0000] transition-colors">L'Écosystème</a>
            <a href="#programme" className="hover:text-[#ff0000] transition-colors">Programme</a>
            <a href={PULSENOIR_LINKS.main} target="_blank" rel="noreferrer" className="hover:text-[#ff0000] transition-colors flex items-center gap-1">
              Site Officiel <ExternalLink size={12}/>
            </a>
          </div>
          <button 
            onClick={() => setCurrentView('course')}
            className="bg-[#ff0000] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-none"
          >
            Accès Formation
          </button>
        </div>
      </nav>

      {/* Hero Section Re-centrée sur l'Objectif */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black flex flex-col items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 bg-neutral-900">
          <div className="absolute inset-0 bg-neutral-900" />
          <img 
            src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Ambiance Polar Noir" 
            className="w-full h-full object-cover opacity-20 grayscale transition-opacity duration-700 relative z-10"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/50 z-20"></div>
        </div>

        <div className="relative z-30 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/20 text-xs font-black uppercase tracking-[0.2em] mb-8">
            Formation Marketing Auteurs
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 serif-font leading-[0.9] tracking-tighter uppercase">
            Trouvez vos lecteurs.<br/>
            Récoltez des avis.<br/>
            <span className="text-[#ff0000]">Vendez vos polars.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            La méthode pensée pour les auteurs de noir qui veulent <strong className="text-white border-b-2 border-[#ff0000]">trouver leur public</strong>, <strong className="text-white border-b-2 border-[#ff0000]">cumuler les chroniques</strong> et <strong className="text-white border-b-2 border-[#ff0000]">vivre de leur plume</strong> sans s'épuiser inutilement sur les réseaux.
          </p>
          
          {/* Points Clés Rapides */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
             <div className="flex items-center justify-center gap-3 text-sm font-bold text-gray-400">
                <Search size={18} className="text-[#ff0000]" /> Visibilité Ciblée
             </div>
             <div className="flex items-center justify-center gap-3 text-sm font-bold text-gray-400">
                <MessageSquare size={18} className="text-[#ff0000]" /> Preuve Sociale Forte
             </div>
             <div className="flex items-center justify-center gap-3 text-sm font-bold text-gray-400">
                <TrendingUp size={18} className="text-[#ff0000]" /> Ventes Prédictibles
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToModules}
              className="px-10 py-5 bg-[#ff0000] text-white text-xl font-black rounded-full shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:bg-white hover:text-black transition-all flex items-center gap-3 group uppercase tracking-wider"
            >
              Lancer ma carrière
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href={PULSENOIR_LINKS.group}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 font-bold hover:text-[#ff0000] transition-colors flex items-center gap-2"
            >
              Rejoindre le Clan (1.5k membres) <ExternalLink size={14}/>
            </a>
          </div>
        </div>
      </header>

      {/* Ecosystem Section Update */}
      <section id="ecosysteme" className="py-20 bg-neutral-900 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 serif-font text-white uppercase tracking-tight">Plus qu'une formation, un Clan.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Chaque outil de l'écosystème PulseNoir est une brique de votre futur succès commercial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* PULSENOIR.BE */}
            <a href={PULSENOIR_LINKS.main} target="_blank" rel="noreferrer" className="group bg-black p-6 rounded-2xl border border-white/10 hover:border-[#ff0000]/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-600/20 text-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PulseNoir.be</h3>
              <p className="text-sm text-gray-400">Plateforme communautaire : profil auteur, interviews et services <strong>Pack Elite</strong> pour votre site auteur pro.</p>
            </a>

            {/* STUDIO */}
            <a href={PULSENOIR_LINKS.studio} target="_blank" rel="noreferrer" className="group bg-black p-6 rounded-2xl border border-white/10 hover:border-[#ff0000]/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600/20 text-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Feather size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Le Studio</h3>
              <p className="text-sm text-gray-400">Studio d'écriture complet : Pomodoro, Heatmap et structuration narrative avec export PDF professionnel.</p>
            </a>

             {/* BIBLIOPULSE */}
             <a href={PULSENOIR_LINKS.biblio} target="_blank" rel="noreferrer" className="group bg-black p-6 rounded-2xl border border-white/10 hover:border-[#ff0000]/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-600/20 text-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Library size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bibliopulse</h3>
              <p className="text-sm text-gray-400">Gestion de bibliothèque pour <strong>1300+ lecteurs</strong>. Faites découvrir, noter et recommander vos polars.</p>
            </a>

             {/* RESEAU FB/INSTA */}
             <a href={PULSENOIR_LINKS.group} target="_blank" rel="noreferrer" className="group bg-black p-6 rounded-2xl border border-white/10 hover:border-[#ff0000]/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Le Réseau</h3>
              <p className="text-sm text-gray-400">Une communauté de <strong>1500 membres</strong> sur Facebook pour l'entraide, les tests et la promotion collective.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Problem / Solution - IMAGE academy.png SANS FILTRE */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative bg-neutral-900 rounded-2xl">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ff0000] rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
              <div className="relative w-full h-full bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://raw.githubusercontent.com/benspy2209/propulseurs/d29ca924fcad0ef80561967e51046aa519fe4c3e/public/academy.png" 
                  alt="Écriture Noir" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 serif-font text-white uppercase leading-none">
                Vendre du Noir ne s'improvise pas.
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                Le marché du thriller est saturé. Pour sortir de l'ombre, vous n'avez pas besoin d'être partout. Vous avez besoin d'être **là où sont les lecteurs**.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  "Cesser de poster dans le vide sur Facebook",
                  "Transformer chaque lecteur en ambassadeur (avis)",
                  "Profitez de l'écosystème PulseNoir (Studio, Bibliopulse, Communauté)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="p-1.5 bg-[#ff0000] rounded-full text-white shadow-[0_0_10px_rgba(255,0,0,0.4)] group-hover:scale-110 transition-transform">
                      <Check size={16} strokeWidth={4} />
                    </div>
                    <span className="text-gray-200 font-bold text-lg uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-neutral-900 rounded-2xl border border-white/10">
                <p className="text-gray-300">
                  <strong className="text-[#ff0000] font-black italic">La Promesse :</strong> Une stratégie chirurgicale pour dominer votre niche sans y passer 4h par jour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Grid */}
      <section id="programme" className="py-24 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 serif-font text-white uppercase tracking-tight">Le Parcours Auteur Lu & Vendu</h2>
            <p className="text-xl text-gray-400 font-light">
              6 modules pour passer de l'ombre à la lumière (noire).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSE_MODULES.map((module, index) => (
              <ModuleCard key={module.id} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="formateur" className="py-24 bg-neutral-900 text-white overflow-hidden relative border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black">
                <div className="absolute inset-0 bg-[#ff0000]/10 mix-blend-overlay z-10"></div>
                <img 
                  src="https://raw.githubusercontent.com/benspy2209/propulseurs/b432764d6f2f27df0da85a57446329dd5abb426a/public/benjamin.jpg"
                  alt={INSTRUCTOR.name}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl md:text-6xl font-black mb-4 serif-font uppercase">{INSTRUCTOR.name}</h2>
              <p className="text-[#ff0000] text-2xl mb-8 font-black uppercase tracking-[0.2em]">{INSTRUCTOR.role}</p>
              
              <div className="space-y-6 text-xl text-gray-300 leading-relaxed max-w-2xl font-light italic">
                <p>
                  "Mon job, c'est de faire en sorte que votre polar ne finisse pas dans les oubliettes d'Amazon."
                </p>
                <p className="not-italic text-gray-400">
                  {INSTRUCTOR.bio}
                </p>
              </div>

              <div className="mt-12 flex gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white">1.5k+</span>
                  <span className="text-xs text-[#ff0000] font-black uppercase tracking-widest">Auteurs Engagés</span>
                </div>
                <div className="w-px bg-white/10 mx-2"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white">1.3k+</span>
                  <span className="text-xs text-[#ff0000] font-black uppercase tracking-widest">Lecteurs Bibliopulse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-black text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff0000] rounded-full blur-[160px] opacity-10 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 serif-font text-white uppercase leading-[0.9]">
            Ne laissez pas votre talent mourir dans l'ombre.
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Rejoignez la PulseNoir Academy et commencez à récolter les fruits de votre écriture dès aujourd'hui.
          </p>
          
          <div className="bg-neutral-900 p-10 rounded-3xl border border-white/10 inline-block w-full max-w-md shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-tighter">Offre de Lancement</div>
            <div className="text-gray-400 mb-2 font-bold uppercase text-xs tracking-widest">Accès Illimité Écosystème</div>
            <div className="text-6xl font-black text-white mb-2">297€</div>
            <div className="text-[#ff0000] text-xs font-bold mb-10 flex items-center justify-center gap-1 uppercase tracking-tighter">
              <Star size={12} fill="currentColor" /> Formation + Bibliopulse + Studio Inclus
            </div>
            
            <button 
               onClick={() => setCurrentView('course')}
               className="w-full py-5 bg-[#ff0000] text-white font-black text-xl rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,0,0,0.3)] mb-6 uppercase tracking-widest"
            >
              Rejoindre le Clan
            </button>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">Satisfait ou Remboursé sous 30 jours</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-600 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif font-black text-2xl text-white tracking-tighter">PULSE<span className="text-[#ff0000]">NOIR</span></span>
            <span className="text-xs uppercase font-black tracking-[0.3em]">Academy 2025</span>
          </div>
          <div className="text-[10px] uppercase font-bold tracking-widest">
            © PulseNoir.be - Stratégies pour auteurs de l'ombre.
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
             <a href={PULSENOIR_LINKS.main} className="hover:text-[#ff0000] transition-colors">Site Officiel</a>
             <a href={PULSENOIR_LINKS.biblio} className="hover:text-[#ff0000] transition-colors">Bibliothèque</a>
             <a href="mailto:contact@pulsenoir.be" className="hover:text-[#ff0000] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;