import React, { useState } from 'react';
import { ModuleContent, Chapter, Resource } from '../types';
import { PULSENOIR_LINKS } from '../constants';
import { 
  CheckCircle, 
  ArrowLeft, 
  Lock, 
  FileText, 
  PenTool, 
  Lightbulb,
  Menu,
  X,
  Download,
  Layout,
  ListChecks,
  Table,
  ExternalLink,
  Users,
  Feather,
  Library
} from 'lucide-react';

interface CoursePlayerProps {
  modules: ModuleContent[];
  onBack: () => void;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({ modules, onBack }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

  const renderResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'pdf': return <FileText size={20} className="text-red-500" />;
      case 'sheet': return <Table size={20} className="text-green-500" />;
      case 'checklist': return <ListChecks size={20} className="text-blue-500" />;
      case 'template': return <Layout size={20} className="text-purple-500" />;
      default: return <Download size={20} className="text-gray-400" />;
    }
  };

  const renderChapterContent = (chapter: Chapter, idx: number) => {
    switch (chapter.type) {
      case 'exercise':
        return (
          <div key={idx} className="my-8 bg-[#ff0000]/10 border border-[#ff0000]/30 rounded-xl p-6 relative">
            <div className="absolute -top-3 left-6 bg-black px-2 text-[#ff0000] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <PenTool size={12} /> À vous de jouer
            </div>
            <h4 className="text-xl font-serif font-bold text-[#ff0000] mb-4">{chapter.title}</h4>
            <div className="space-y-3 text-gray-300">
              {chapter.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        );
      case 'key-concept':
        return (
          <div key={idx} className="my-8 bg-neutral-900 border-l-4 border-[#ff0000] p-6 rounded-r-xl">
             <div className="flex items-center gap-2 text-[#ff0000] mb-3 font-bold uppercase text-xs tracking-wider">
                <Lightbulb size={14} /> Concept Clé
             </div>
            <h4 className="text-xl font-serif font-bold text-white mb-3">{chapter.title}</h4>
            <div className="space-y-3 text-gray-400">
              {chapter.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        );
      default: // text
        return (
          <div key={idx} className="mb-10">
            <h3 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#ff0000] text-lg font-sans opacity-50">0{idx + 1}</span>
              {chapter.title}
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              {chapter.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
      
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#ff0000] p-4 rounded-full shadow-lg text-white"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-80 bg-neutral-900 border-r border-white/10 flex flex-col transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0
        `}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black">
           <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
             <ArrowLeft size={16} /> Accueil PulseNoir
           </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-6 mb-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Formation</div>
          <div className="space-y-1 mb-8">
            {modules.map((module, idx) => {
              const isActive = module.id === activeModuleId;
              const Icon = module.icon;
              // Nous déverrouillons tous les modules pour vous permettre de voir le contenu
              const isLocked = false; 

              return (
                <button
                  key={module.id}
                  onClick={() => !isLocked && setActiveModuleId(module.id)}
                  className={`
                    w-full px-6 py-4 flex items-start gap-3 transition-all text-left relative group
                    ${isActive ? 'bg-black/50' : 'hover:bg-white/5'}
                    ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff0000]" />
                  )}
                  
                  <div className={`mt-1 ${isActive ? 'text-[#ff0000]' : 'text-gray-500'}`}>
                    {isLocked ? <Lock size={18} /> : <Icon size={18} />}
                  </div>
                  
                  <div>
                    <div className={`text-sm font-semibold mb-1 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {module.title}
                    </div>
                    <div className="text-xs text-gray-600">
                      {module.duration || 'Bientôt disponible'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* SECTION ÉCOSYSTÈME DANS LA SIDEBAR */}
          <div className="px-6 mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest pt-4 border-t border-white/5">
            Écosystème PulseNoir
          </div>
          <div className="space-y-1 px-3">
             <a 
               href={PULSENOIR_LINKS.group} 
               target="_blank" 
               rel="noreferrer"
               className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
             >
               <Users size={16} className="text-blue-500" />
               <span className="text-sm">Groupe Facebook</span>
               <ExternalLink size={12} className="ml-auto opacity-50" />
             </a>
             <a 
               href={PULSENOIR_LINKS.studio} 
               target="_blank" 
               rel="noreferrer"
               className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
             >
               <Feather size={16} className="text-purple-500" />
               <span className="text-sm">Le Studio</span>
               <ExternalLink size={12} className="ml-auto opacity-50" />
             </a>
             <a 
               href={PULSENOIR_LINKS.biblio} 
               target="_blank" 
               rel="noreferrer"
               className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
             >
               <Library size={16} className="text-amber-500" />
               <span className="text-sm">Bibliopulse</span>
               <ExternalLink size={12} className="ml-auto opacity-50" />
             </a>
          </div>
        </div>

        <div className="p-6 border-t border-white/10 bg-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center font-bold">
              BD
            </div>
            <div>
              <div className="text-sm font-bold text-white">Benjamin de B.</div>
              <div className="text-xs text-[#ff0000]">PulseNoir Founder</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-black relative">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
          
          {/* Header */}
          <header className="mb-12 border-b border-white/10 pb-8">
            <div className="flex items-center gap-3 text-[#ff0000] mb-4 text-sm font-bold uppercase tracking-wider">
               <span className="px-2 py-1 bg-[#ff0000]/10 rounded">Module en cours</span>
               <span>{activeModule.duration}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              {activeModule.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              {activeModule.longDescription || activeModule.description}
            </p>
          </header>

          {/* Chapters Content */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {activeModule.chapters && activeModule.chapters.length > 0 ? (
              activeModule.chapters.map((chapter, idx) => renderChapterContent(chapter, idx))
            ) : (
              <div className="bg-neutral-900 border border-white/10 rounded-xl p-12 text-center">
                 <Lock className="mx-auto text-gray-600 mb-4" size={48} />
                 <h3 className="text-xl font-bold text-white mb-2">Contenu verrouillé</h3>
                 <p className="text-gray-500">
                   Ce module sera disponible prochainement ou nécessite de compléter le précédent.
                 </p>
              </div>
            )}
          </div>

          {/* Resources / Goodies Section */}
          {activeModule.resources && activeModule.resources.length > 0 && (
            <div className="mt-16 bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#ff0000]/20 rounded-lg text-[#ff0000]">
                  <Download size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Ressources & Outils PulseNoir</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {activeModule.resources.map((resource, idx) => (
                  <button 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-black border border-white/10 hover:border-[#ff0000]/50 hover:bg-[#ff0000]/5 transition-all text-left group"
                    onClick={() => alert("Le téléchargement de '" + resource.title + "' démarrerait ici.")}
                  >
                    <div className="p-3 rounded-lg bg-neutral-800 text-gray-400 group-hover:text-[#ff0000] transition-colors">
                      {renderResourceIcon(resource.type)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-[#ff0000] transition-colors">
                        {resource.title}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                        {resource.type === 'pdf' ? 'Document PDF' : resource.type === 'template' ? 'Modèle à remplir' : resource.type === 'sheet' ? 'Feuille Excel/Notion' : 'Checklist'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer Navigation */}
          {activeModule.chapters && activeModule.chapters.length > 0 && (
             <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
               <button className="text-gray-500 hover:text-white transition-colors">
                 Module Précédent
               </button>
               <button className="px-6 py-3 bg-[#ff0000] text-white rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2">
                 Marquer comme terminé <CheckCircle size={18} />
               </button>
             </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default CoursePlayer;