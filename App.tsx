import React from 'react';
import { COURSE_MODULES, INSTRUCTOR } from './constants';
import ModuleCard from './components/ModuleCard';
import { BookOpen, Star, ChevronDown, Check, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  
  const scrollToModules = () => {
    const element = document.getElementById('programme');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff0000] selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="text-[#f4c024]" size={24} />
            <span className="font-serif font-bold text-lg tracking-tight text-white">Benjamin de Bruijne</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#programme" className="hover:text-[#f4c024] transition-colors">Programme</a>
            <a href="#formateur" className="hover:text-[#f4c024] transition-colors">Formateur</a>
            <a href="#temoignages" className="hover:text-[#f4c024] transition-colors">Avis</a>
          </div>
          {/* Call to Action Button */}
          <button className="bg-[#ff0000] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-none">
            Accès Membres
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 bg-neutral-900">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Bureau écrivain" 
            className="w-full h-full object-cover opacity-20 grayscale transition-opacity duration-700"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4c024]/10 text-[#f4c024] border border-[#f4c024]/20 text-xs font-bold uppercase tracking-wider mb-6">
            Nouveau Programme 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 serif-font leading-tight">
            Ne laissez plus vos livres <br/> prendre la poussière.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            La méthode pas à pas pour construire une communauté de lecteurs fidèles et transformer votre passion en revenus, sans y perdre votre âme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToModules}
              className="px-8 py-4 bg-[#ff0000] text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:bg-[#f4c024] hover:text-black hover:shadow-[0_0_20px_rgba(244,192,36,0.4)] transition-all flex items-center gap-2 group"
            >
              Découvrir la formation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-sm text-gray-500 font-medium">
              Formation 100% en ligne • Accès immédiat
            </span>
          </div>
        </div>
      </header>

      {/* Social Proof Bar */}
      <div className="border-y border-white/10 bg-neutral-900/30 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Une méthode approuvée pour tous les genres
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-80 transition-all duration-500">
             {['Thriller', 'Fantasy', 'Romance', 'Développement', 'Jeunesse'].map((genre) => (
               <span key={genre} className="text-xl font-serif font-bold text-gray-300">{genre}</span>
             ))}
          </div>
        </div>
      </div>

      {/* Problem / Solution */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative bg-neutral-900 rounded-2xl">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f4c024] rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#ff0000] rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Écriture" 
                className="relative rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 grayscale hover:grayscale-0 border border-white/10"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 serif-font text-white">
                Le mythe de l'auteur solitaire est terminé.
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Beaucoup d'auteurs pensent qu'il suffit d'écrire un bon livre pour qu'il se vende. C'était vrai il y a 20 ans. Aujourd'hui, avec des milliers de sorties par jour, <strong className="text-white">la visibilité est le nerf de la guerre.</strong>
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Vous ne savez pas par où commencer votre marketing",
                  "Les réseaux sociaux vous épuisent",
                  "Vous avez peu d'avis malgré des lecteurs satisfaits"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-[#ff0000]/10 rounded-full text-[#ff0000]">
                      <ChevronDown size={14} />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-[#f4c024]/5 rounded-xl border border-[#f4c024]/20">
                <p className="font-medium text-[#f4c024]">
                  <span className="font-bold">La solution ?</span> Construire une communauté *avant* et *après* la sortie, transformer vos lecteurs en ambassadeurs, et automatiser votre promotion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Grid */}
      <section id="programme" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 serif-font text-white">Le Programme Complet</h2>
            <p className="text-xl text-gray-400">
              Une feuille de route structurée pour passer de l'anonymat à l'autorité.
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
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <div className="absolute inset-0 bg-[#ff0000]/10 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt={INSTRUCTOR.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 serif-font">{INSTRUCTOR.name}</h2>
              <p className="text-[#f4c024] text-xl mb-8 font-medium tracking-wide">{INSTRUCTOR.role}</p>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                <p>
                  "J'ai créé cette formation après avoir constaté que 90% des auteurs abandonnent, non pas par manque de talent, mais par manque de stratégie."
                </p>
                <p>
                  {INSTRUCTOR.bio}
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">1500+</span>
                  <span className="text-sm text-gray-500">Auteurs accompagnés</span>
                </div>
                <div className="w-px bg-[#ff0000] mx-4 opacity-50"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">4.9/5</span>
                  <span className="text-sm text-gray-500">Note moyenne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff0000] rounded-full blur-[128px] opacity-10 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 serif-font text-white">
            Prêt à écrire votre propre succès ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Rejoignez la prochaine cohorte d'auteurs ambitieux et commencez à construire votre lectorat dès aujourd'hui.
          </p>
          
          <div className="bg-neutral-900 p-8 rounded-3xl border border-white/10 inline-block w-full max-w-md shadow-2xl">
            <div className="text-gray-400 mb-2 font-medium">Prix de lancement</div>
            <div className="text-5xl font-bold text-white mb-2">297€</div>
            <div className="text-[#f4c024] text-sm font-semibold mb-8 flex items-center justify-center gap-1">
              <Check size={14} /> Garantie satisfait ou remboursé 30 jours
            </div>
            
            <button className="w-full py-4 bg-[#ff0000] text-white font-bold rounded-xl hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-none mb-4">
              Rejoindre la formation
            </button>
            <p className="text-xs text-gray-500">Paiement sécurisé en 1x ou 3x</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <BookOpen className="text-gray-400" size={20} />
            <span className="font-serif font-bold text-gray-200">Benjamin de Bruijne</span>
          </div>
          <div className="text-sm">
            © 2025 Tous droits réservés.
          </div>
          <div className="flex gap-6 text-sm">
             <a href="#" className="hover:text-[#f4c024] transition-colors">Mentions légales</a>
             <a href="#" className="hover:text-[#f4c024] transition-colors">CGV</a>
             <a href="#" className="hover:text-[#f4c024] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;