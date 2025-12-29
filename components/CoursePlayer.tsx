// Ajout de l'import React pour corriger l'erreur de namespace sur React.FC
import React, { useState } from 'react';
import { ModuleContent, Chapter } from '../types';
import { INSTRUCTOR, DRIVE_FOLDER, PULSENOIR_LINKS } from '../constants';
import { 
  CheckCircle, 
  ArrowLeft, 
  PenTool, 
  Lightbulb,
  Menu,
  X,
  PlayCircle,
  Download,
  FileText,
  Layout,
  CheckSquare,
  BarChart3,
  Gift,
  ExternalLink
} from 'lucide-react';

interface CoursePlayerProps {
  modules: ModuleContent[];
  onBack: () => void;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({ modules, onBack }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText size={16} />;
      case 'template': return <Layout size={16} />;
      case 'checklist': return <CheckSquare size={16} />;
      case 'sheet': return <BarChart3 size={16} />;
      default: return <Download size={16} />;
    }
  };

  const renderChapterContent = (chapter: Chapter, idx: number) => {
    switch (chapter.type) {
      case 'exercise':
        return (
          <div key={idx} className="my-10 bg-[#ff0000]/5 border border-[#ff0000]/20 rounded-2xl p-10 relative shadow-2xl">
            <div className="absolute -top-3 left-8 bg-[#ff0000] px-4 py-1 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 rounded-full shadow-lg">
              <PenTool size={10} /> Travail Stratégique
            </div>
            <h4 className="text-2xl font-serif font-bold text-white mb-6 italic">{chapter.title}</h4>
            <div className="space-y-5 text-gray-300 text-base font-medium leading-relaxed">
              {chapter.content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        );
      case 'key-concept':
        return (
          <div key={idx} className="my-10 bg-neutral-900 border-l-8 border-[#ff0000] p-10 rounded-r-2xl shadow-xl">
             <div className="flex items-center gap-2 text-[#ff0000] mb-4 font-black uppercase text-[10px] tracking-widest">
                <Lightbulb size={14} /> Concept Clé à Maîtriser
             </div>
            <h4 className="text-2xl font-serif font-bold text-white mb-4 italic">{chapter.title}</h4>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              {chapter.content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        );
      default:
        return (
          <div key={idx} className="mb-16">
            <h3 className="text-3xl font-serif font-black text-white mb-8 flex items-center gap-6 italic uppercase tracking-tighter">
              <span className="text-[#ff0000] text-lg bg-[#ff0000]/10 w-12 h-12 rounded-full flex items-center justify-center font-sans italic border border-[#ff0000]/20">0{idx + 1}</span>
              {chapter.title}
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg font-light">
              {chapter.content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
      
      {/* Sidebar Mobile Toggle */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#ff0000] p-4 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.5)] text-white"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Section */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-80 bg-neutral-950 border-r border-white/5 flex flex-col transition-transform duration-500 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 shadow-2xl`}>
        <div className="p-8 border-b border-white/5 bg-black">
           <button onClick={onBack} className="text-gray-500 hover:text-white flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all group">
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Quitter le Programme
           </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 scrollbar-hide px-6">
          <div className="mb-4 text-[10px] font-black text-gray-700 uppercase tracking-widest px-2">Progression Modules</div>
          <div className="space-y-1 mb-12">
            {modules.map((module) => {
              const isActive = module.id === activeModuleId;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`w-full p-4 flex items-center gap-4 transition-all rounded-2xl relative ${isActive ? 'bg-[#ff0000]/10 border border-[#ff0000]/20' : 'hover:bg-white/[0.03] border border-transparent'}`}
                >
                  <div className={`${isActive ? 'text-[#ff0000]' : 'text-gray-700'}`}>
                    <module.icon size={18} />
                  </div>
                  <div className="text-left">
                    <div className={`text-[11px] font-black uppercase tracking-tight ${isActive ? 'text-white' : 'text-gray-500'}`}>{module.title}</div>
                    <div className="text-[9px] text-gray-700 font-bold uppercase italic">{module.duration}</div>
                  </div>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 bg-[#ff0000] rounded-full" />}
                </button>
              );
            })}
          </div>

          {activeModule.resources && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6 px-2">
                <div className="text-[10px] font-black text-[#ff0000] uppercase tracking-[0.2em] flex items-center gap-2">
                  <Gift size={12} /> Vos Goodies
                </div>
                <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{activeModule.resources.length} Fichiers</div>
              </div>
              <div className="space-y-3">
                {activeModule.resources.map((res, i) => {
                  const isExternal = res.url?.startsWith('http');
                  return (
                    <a 
                      key={i} 
                      href={res.url || '#'} 
                      download={(!isExternal && res.url) ? res.title : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-4 p-4 bg-neutral-900 rounded-2xl border border-white/5 hover:border-[#ff0000]/50 transition-all cursor-pointer group shadow-lg text-left no-underline"
                    >
                      <div className="text-[#ff0000] bg-[#ff0000]/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        {getResourceIcon(res.type)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-gray-300 uppercase tracking-tighter group-hover:text-white transition-colors leading-none mb-1">{res.title}</span>
                        <span className="text-[8px] text-gray-600 font-black uppercase tracking-widest">{res.type}</span>
                      </div>
                      {isExternal ? (
                        <ExternalLink size={14} className="ml-auto text-gray-800 group-hover:text-[#ff0000] transition-colors" />
                      ) : (
                        <Download size={14} className="ml-auto text-gray-800 group-hover:text-[#ff0000] transition-colors" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Coach Footer */}
        <div className="p-8 border-t border-white/5 bg-black/80">
          <div className="flex items-center gap-4">
            <img src={INSTRUCTOR.photo} className="w-12 h-12 rounded-2xl border border-white/10 object-cover shadow-xl" alt="Benjamin" />
            <div>
              <div className="text-xs font-black text-white uppercase tracking-tighter italic">Benjamin de Bruijne</div>
              <div className="text-[10px] text-[#ff0000] font-black uppercase tracking-widest italic opacity-80">Instructeur Elite</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 overflow-y-auto bg-black relative">
        <div className="max-w-4xl mx-auto px-8 py-20 lg:px-24 lg:py-32">
          
          <header className="mb-20 border-b border-white/5 pb-16">
            <div className="flex items-center gap-6 text-[#ff0000] mb-8">
               <span className="px-5 py-1.5 bg-[#ff0000] text-white rounded-full text-[10px] font-black uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(255,0,0,0.4)]">Session Elite</span>
               <span className="text-[11px] font-black text-gray-600 uppercase tracking-[0.3em]">{activeModule.duration} • 0% Complété</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-black text-white mb-10 tracking-tighter leading-[0.9] italic uppercase">
              {activeModule.title}
            </h1>
            <p className="text-2xl text-gray-500 leading-relaxed font-light italic max-w-2xl">
              {activeModule.longDescription || activeModule.description}
            </p>
            
            <div className="mt-16 aspect-video bg-neutral-900 rounded-[3rem] border border-white/5 flex items-center justify-center group cursor-pointer overflow-hidden relative shadow-2xl">
               <img src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80`} className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-transform duration-1000" alt="Cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
               <div className="w-24 h-24 bg-[#ff0000] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(255,0,0,0.6)] group-hover:scale-110 transition-transform z-10 relative">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                  <PlayCircle size={48} />
               </div>
               <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#ff0000] rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Masterclass Vidéo HD</span>
               </div>
            </div>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            {activeModule.chapters?.map((chapter, idx) => renderChapterContent(chapter, idx))}
            
            {/* The Huge Goodies Call to Action */}
            <div className="mt-32 p-16 bg-gradient-to-br from-neutral-900 to-black rounded-[4rem] border border-[#ff0000]/30 text-center relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff0000]/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-900/10 rounded-full blur-[100px]" />

              <div className="w-24 h-24 bg-[#ff0000] text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(255,0,0,0.4)] rotate-12">
                <Gift size={48} />
              </div>
              
              <h3 className="text-4xl font-serif font-black text-white mb-6 uppercase italic tracking-tighter">Votre Pack Bonus Elite</h3>
              <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto italic font-light">Pour passer de la théorie à la pratique, nous avons préparé des outils exclusifs disponibles dans notre Hub central.</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {activeModule.resources?.map((res, i) => {
                  const isExternal = res.url?.startsWith('http');
                  return (
                    <a 
                      key={i} 
                      href={res.url || '#'} 
                      download={(!isExternal && res.url) ? res.title : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-6 bg-black/50 border border-white/5 rounded-[1.5rem] hover:border-[#ff0000]/50 transition-all group no-underline w-full max-w-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-[#ff0000]">{getResourceIcon(res.type)}</div>
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">{res.title}</span>
                      </div>
                      {isExternal ? (
                        <ExternalLink size={16} className="text-gray-800 group-hover:text-[#ff0000] transition-colors" />
                      ) : (
                        <Download size={16} className="text-gray-800 group-hover:text-[#ff0000] transition-colors" />
                      )}
                    </a>
                  );
                })}
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-600 mb-6 font-bold uppercase tracking-widest italic">Accédez au dossier partagé pour récupérer vos outils</p>
                <a 
                  href={DRIVE_FOLDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-[#ff0000] text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,0,0,0.5)] inline-flex items-center gap-3 no-underline"
                >
                  Accéder au Hub Drive <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 gap-8">
             <div className="flex items-center gap-6">
                <a href={PULSENOIR_LINKS.group} target="_blank" className="text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors italic flex items-center gap-2">
                  Poser une question au Clan <ExternalLink size={14} />
                </a>
             </div>
             <button className="px-12 py-6 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-[#ff0000] hover:text-white hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-4 group">
               Module Terminé <CheckCircle size={20} className="group-hover:animate-bounce" />
             </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePlayer;