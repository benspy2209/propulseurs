
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { COURSE_MODULES, INSTRUCTOR, INSTRUCTOR_STATS, FAQ_ITEMS } from '../constants';
import { ModuleContent, Chapter, Resource } from '../types';
import { 
  ArrowLeft, 
  Save, 
  Layout, 
  BookOpen, 
  Plus, 
  Trash2, 
  Image as ImageIcon, 
  Type, 
  Link as LinkIcon,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  PlusCircle,
  MinusCircle,
  ListOrdered,
  Layers,
  Settings as SettingsIcon,
  MessageSquare
} from 'lucide-react';

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'landing' | 'modules' | 'global'>('landing');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Form States
  const [landing, setLanding] = useState({
    heroTitle: "AUTEUR INVISIBLE",
    heroSubtitle: "Pourquoi votre polar ne trouve pas ses lecteurs (et comment y remédier)"
  });
  const [instData, setInstData] = useState(INSTRUCTOR);
  const [modules, setModules] = useState<ModuleContent[]>(COURSE_MODULES);
  const [stats, setStats] = useState(INSTRUCTOR_STATS);
  const [faq, setFaq] = useState(FAQ_ITEMS);
  const [selectedModuleId, setSelectedModuleId] = useState(COURSE_MODULES[0].id);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    setLoading(true);
    try {
      const { data } = await supabase.from('site_content').select('*');
      if (data) {
        const land = data.find(c => c.key === 'landing')?.data;
        const inst = data.find(c => c.key === 'instructor')?.data;
        const mods = data.find(c => c.key === 'modules')?.data;
        const s = data.find(c => c.key === 'stats')?.data;
        const f = data.find(c => c.key === 'faq')?.data;
        
        if (land) setLanding(land);
        if (inst) setInstData(inst);
        if (mods) setModules(mods);
        if (s) setStats(s);
        if (f) setFaq(f);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const payload = [
        { key: 'landing', data: landing },
        { key: 'instructor', data: instData },
        { key: 'modules', data: modules },
        { key: 'stats', data: stats },
        { key: 'faq', data: faq }
      ];

      for (const item of payload) {
        const { error: upsertError } = await supabase
          .from('site_content')
          .upsert(item, { onConflict: 'key' });
        if (upsertError) throw upsertError;
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(`Erreur de sauvegarde: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleModuleChange = (field: keyof ModuleContent, value: any) => {
    setModules(prev => prev.map(m => m.id === selectedModuleId ? { ...m, [field]: value } : m));
  };

  const selectedModule = modules.find(m => m.id === selectedModuleId) || modules[0];

  const updateList = (field: 'bullets' | 'steps', index: number, value: string) => {
    const newList = [...(selectedModule[field] || [])];
    newList[index] = value;
    handleModuleChange(field, newList);
  };

  const addItemToList = (field: 'bullets' | 'steps') => {
    const newList = [...(selectedModule[field] || []), 'Nouvel élément'];
    handleModuleChange(field, newList);
  };

  const removeItemFromList = (field: 'bullets' | 'steps', index: number) => {
    const newList = selectedModule[field]?.filter((_, i) => i !== index);
    handleModuleChange(field, newList);
  };

  const updateChapter = (index: number, field: keyof Chapter, value: any) => {
    const newChapters = [...(selectedModule.chapters || [])];
    newChapters[index] = { ...newChapters[index], [field]: value };
    handleModuleChange('chapters', newChapters);
  };

  const addChapter = () => {
    const newChapter: Chapter = {
      title: 'Nouveau Chapitre',
      content: ['Premier paragraphe'],
      type: 'text'
    };
    handleModuleChange('chapters', [...(selectedModule.chapters || []), newChapter]);
  };

  const removeChapter = (index: number) => {
    const newChapters = selectedModule.chapters?.filter((_, i) => i !== index);
    handleModuleChange('chapters', newChapters);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex">
      {/* Sidebar Admin */}
      <aside className="w-64 border-r border-white/5 bg-neutral-950 flex flex-col fixed h-full">
        <div className="p-8 border-b border-white/5">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all mb-8">
            <ArrowLeft size={14} /> Retour Site
          </button>
          <h1 className="text-xl font-black italic serif-font text-[#ff0000]">ADMIN PANEL</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button 
            onClick={() => setActiveTab('landing')}
            className={`w-full flex items-center gap-3 p-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'landing' ? 'bg-[#ff0000] text-white shadow-lg shadow-[#ff0000]/20' : 'text-gray-500 hover:bg-white/5'}`}
          >
            <Layout size={16} /> Page d'accueil
          </button>
          <button 
            onClick={() => setActiveTab('modules')}
            className={`w-full flex items-center gap-3 p-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'modules' ? 'bg-[#ff0000] text-white shadow-lg shadow-[#ff0000]/20' : 'text-gray-500 hover:bg-white/5'}`}
          >
            <BookOpen size={16} /> Modules Formation
          </button>
          <button 
            onClick={() => setActiveTab('global')}
            className={`w-full flex items-center gap-3 p-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'global' ? 'bg-[#ff0000] text-white shadow-lg shadow-[#ff0000]/20' : 'text-gray-500 hover:bg-white/5'}`}
          >
            <SettingsIcon size={16} /> Réglages Globaux
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={saveContent}
            disabled={loading}
            className="w-full py-4 bg-[#f4c024] text-black rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#f4c024]/10 disabled:opacity-50"
          >
            {loading ? "Sauvegarde..." : <><Save size={16} /> Publier</>}
          </button>
          {success && <p className="text-green-500 text-[10px] font-black uppercase text-center mt-4 animate-pulse">✓ Modifié avec succès</p>}
          {error && <p className="text-[#ff0000] text-[9px] font-black uppercase text-center mt-4">{error}</p>}
        </div>
      </aside>

      {/* Main Content Admin */}
      <main className="flex-1 ml-64 overflow-y-auto p-12 lg:p-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto pb-32">
          
          {activeTab === 'landing' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header className="mb-12">
                <h2 className="text-4xl font-black italic serif-font mb-2">ÉDITION ACCUEIL</h2>
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Modifiez les textes et photos de la landing page</p>
              </header>

              <section className="space-y-6">
                <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest border-l-2 border-[#ff0000] pl-4">Section Hero</h3>
                <div className="grid gap-4 bg-neutral-900/40 p-6 rounded-2xl border border-white/5">
                  <div>
                    <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Titre Principal</label>
                    <input 
                      type="text" 
                      value={landing.heroTitle} 
                      onChange={(e) => setLanding({...landing, heroTitle: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm focus:border-[#ff0000] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Sous-titre Hero</label>
                    <textarea 
                      value={landing.heroSubtitle} 
                      onChange={(e) => setLanding({...landing, heroSubtitle: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm h-32 focus:border-[#ff0000] outline-none"
                    />
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest border-l-2 border-[#ff0000] pl-4">L'Instructeur</h3>
                <div className="grid md:grid-cols-2 gap-4 bg-neutral-900/40 p-6 rounded-2xl border border-white/5">
                  <div>
                    <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Photo Principale (URL)</label>
                    <input 
                      type="text" 
                      value={instData.photo} 
                      onChange={(e) => setInstData({...instData, photo: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-[#ff0000]"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Photo Survol (URL)</label>
                    <input 
                      type="text" 
                      value={instData.hoverPhoto} 
                      onChange={(e) => setInstData({...instData, hoverPhoto: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-[#ff0000]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Citation</label>
                    <input 
                      type="text" 
                      value={instData.quote} 
                      onChange={(e) => setInstData({...instData, quote: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-[#ff0000]"
                    />
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'modules' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header className="mb-12 flex items-center justify-between sticky top-0 bg-[#050505] py-4 z-20 border-b border-white/5">
                <div>
                  <h2 className="text-4xl font-black italic serif-font mb-2">ÉDITION MODULES</h2>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Gérez chaque détail de la formation</p>
                </div>
                <select 
                  value={selectedModuleId}
                  onChange={(e) => setSelectedModuleId(e.target.value)}
                  className="bg-[#ff0000] text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest outline-none shadow-lg cursor-pointer"
                >
                  {modules.map(m => (
                    <option key={m.id} value={m.id}>{m.title}</option>
                  ))}
                </select>
              </header>

              {/* SECTION : INFOS DE BASE */}
              <section className="space-y-6">
                <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest border-l-2 border-[#ff0000] pl-4 flex items-center gap-2">
                   <Type size={14} /> Informations de Base
                </h3>
                <div className="grid gap-6 bg-neutral-900/40 p-8 rounded-[2rem] border border-white/5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Titre</label>
                      <input 
                        type="text" 
                        value={selectedModule.title} 
                        onChange={(e) => handleModuleChange('title', e.target.value)}
                        className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm focus:border-[#ff0000] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Sous-titre / Phase</label>
                      <input 
                        type="text" 
                        value={selectedModule.subtitle} 
                        onChange={(e) => handleModuleChange('subtitle', e.target.value)}
                        className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm focus:border-[#ff0000] outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Description Courte</label>
                    <textarea 
                      value={selectedModule.description} 
                      onChange={(e) => handleModuleChange('description', e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm h-20 focus:border-[#ff0000] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Description Longue (Espace Formation)</label>
                    <textarea 
                      value={selectedModule.longDescription || ''} 
                      onChange={(e) => handleModuleChange('longDescription', e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm h-32 focus:border-[#ff0000] outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* SECTION : BULLETS (CARTES ACCUEIL) */}
              <section className="space-y-6">
                <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest border-l-2 border-[#ff0000] pl-4 flex items-center gap-2">
                   <Layers size={14} /> Points Clés (Cartes Accueil)
                </h3>
                <div className="space-y-3 bg-neutral-900/40 p-8 rounded-[2rem] border border-white/5">
                  {selectedModule.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-2">
                      <input 
                        value={bullet} 
                        onChange={(e) => updateList('bullets', i, e.target.value)}
                        className="flex-1 bg-black border border-white/10 rounded-xl p-3 text-sm focus:border-[#ff0000] outline-none"
                      />
                      <button onClick={() => removeItemFromList('bullets', i)} className="p-3 text-gray-600 hover:text-[#ff0000] transition-colors"><Trash2 size={18} /></button>
                    </div>
                  ))}
                  <button onClick={() => addItemToList('bullets')} className="text-[10px] font-black uppercase text-[#ff0000] flex items-center gap-2 mt-4 px-4 py-2 border border-[#ff0000]/20 rounded-full hover:bg-[#ff0000]/5 transition-all">
                    <Plus size={14} /> Ajouter un point
                  </button>
                </div>
              </section>

              {/* SECTION : SÉQUENCE D'INTERVENTION */}
              <section className="space-y-6">
                <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest border-l-2 border-[#ff0000] pl-4 flex items-center gap-2">
                   <ListOrdered size={14} /> Séquence d'Intervention (Étapes)
                </h3>
                <div className="space-y-3 bg-neutral-900/40 p-8 rounded-[2rem] border border-white/5">
                  {selectedModule.steps?.map((step, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center font-black text-xs shrink-0">{i+1}</div>
                      <input 
                        value={step} 
                        onChange={(e) => updateList('steps', i, e.target.value)}
                        className="flex-1 bg-black border border-white/10 rounded-xl p-3 text-sm focus:border-[#ff0000] outline-none"
                      />
                      <button onClick={() => removeItemFromList('steps', i)} className="p-3 text-gray-600 hover:text-[#ff0000] transition-colors"><Trash2 size={18} /></button>
                    </div>
                  ))}
                  <button onClick={() => addItemToList('steps')} className="text-[10px] font-black uppercase text-[#ff0000] flex items-center gap-2 mt-4 px-4 py-2 border border-[#ff0000]/20 rounded-full hover:bg-[#ff0000]/5 transition-all">
                    <Plus size={14} /> Ajouter une étape
                  </button>
                </div>
              </section>

              {/* SECTION : CHAPITRES (CONTENU PÉDAGOGIQUE) */}
              <section className="space-y-6">
                <div className="flex items-center justify-between border-l-2 border-[#ff0000] pl-4">
                  <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest flex items-center gap-2">
                    <BookOpen size={14} /> Chapitres (Contenu de Formation)
                  </h3>
                  <button onClick={addChapter} className="text-[9px] font-black uppercase bg-[#ff0000] text-white px-3 py-1 rounded-full flex items-center gap-1 hover:scale-105 transition-all">
                    <Plus size={10} /> Nouveau Chapitre
                  </button>
                </div>
                
                <div className="space-y-8">
                  {selectedModule.chapters?.map((chapter, i) => (
                    <div key={i} className="bg-neutral-900/40 border border-white/5 rounded-[2rem] p-8 space-y-6 relative group">
                      <button 
                        onClick={() => removeChapter(i)}
                        className="absolute top-4 right-4 p-2 text-gray-700 hover:text-[#ff0000] transition-colors opacity-0 group-hover:opacity-100"
                        title="Supprimer ce chapitre"
                      >
                        <Trash2 size={16} />
                      </button>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Titre du Chapitre</label>
                          <input 
                            value={chapter.title} 
                            onChange={(e) => updateChapter(i, 'title', e.target.value)}
                            className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm focus:border-[#ff0000] outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Type de Contenu</label>
                          <select 
                            value={chapter.type} 
                            onChange={(e) => updateChapter(i, 'type', e.target.value)}
                            className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm focus:border-[#ff0000] outline-none text-gray-400"
                          >
                            <option value="text">Texte Standard</option>
                            <option value="exercise">Exercice / Phase Pratique</option>
                            <option value="key-concept">Concept Clé / Levier</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Contenu (Un paragraphe par ligne)</label>
                        <textarea 
                          value={chapter.content.join('\n')} 
                          onChange={(e) => updateChapter(i, 'content', e.target.value.split('\n'))}
                          className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm h-32 focus:border-[#ff0000] outline-none font-mono"
                          placeholder="Écrivez votre texte ici..."
                        />
                      </div>

                      {chapter.type === 'exercise' && (
                        <div>
                          <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Questions Guidées (Une par ligne)</label>
                          <textarea 
                            value={chapter.guidedQuestions?.join('\n') || ''} 
                            onChange={(e) => updateChapter(i, 'guidedQuestions', e.target.value.split('\n'))}
                            className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm h-24 focus:border-[#ff0000] outline-none font-mono"
                          />
                        </div>
                      )}

                      <div>
                        <label className="text-[9px] font-black text-gray-600 uppercase mb-2 block">Impact / Résultat Attendu</label>
                        <input 
                          value={chapter.expectedResult || ''} 
                          onChange={(e) => updateChapter(i, 'expectedResult', e.target.value)}
                          className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm focus:border-[#ff0000] outline-none italic text-gray-400"
                          placeholder="Ex: Une vitrine qui rassure immédiatement."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION : TRANSITION FINALE */}
              <section className="space-y-6">
                <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest border-l-2 border-[#ff0000] pl-4">Transition Finale</h3>
                <div className="grid gap-4 bg-neutral-900/40 p-8 rounded-[2rem] border border-white/5">
                  <input 
                    type="text" 
                    value={selectedModule.transitionTitle || ''} 
                    onChange={(e) => handleModuleChange('transitionTitle', e.target.value)}
                    placeholder="Titre de la transition"
                    className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm focus:border-[#ff0000] outline-none"
                  />
                  <textarea 
                    value={selectedModule.transitionText || ''} 
                    onChange={(e) => handleModuleChange('transitionText', e.target.value)}
                    placeholder="Texte d'encouragement"
                    className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm h-24 focus:border-[#ff0000] outline-none"
                  />
                  <input 
                    type="text" 
                    value={selectedModule.transitionButtonText || ''} 
                    onChange={(e) => handleModuleChange('transitionButtonText', e.target.value)}
                    placeholder="Texte du bouton (ex: Voir les instruments)"
                    className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm focus:border-[#ff0000] outline-none"
                  />
                </div>
              </section>
            </div>
          )}

          {activeTab === 'global' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header className="mb-12">
                <h2 className="text-4xl font-black italic serif-font mb-2">RÉGLAGES GLOBAUX</h2>
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Stats, FAQ et éléments transversaux</p>
              </header>

              <section className="space-y-6">
                <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest border-l-2 border-[#ff0000] pl-4">Statistiques de l'Instructeur</h3>
                <div className="grid gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex gap-4 bg-neutral-900/40 p-6 rounded-2xl border border-white/5">
                      <input 
                        value={stat.value} 
                        onChange={(e) => {
                          const newStats = [...stats];
                          newStats[i].value = e.target.value;
                          setStats(newStats);
                        }}
                        className="w-32 bg-black border border-white/10 rounded-xl p-3 text-sm font-black text-[#ff0000]"
                      />
                      <input 
                        value={stat.label} 
                        onChange={(e) => {
                          const newStats = [...stats];
                          newStats[i].label = e.target.value;
                          setStats(newStats);
                        }}
                        className="flex-1 bg-black border border-white/10 rounded-xl p-3 text-sm uppercase tracking-widest font-black"
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center justify-between border-l-2 border-[#ff0000] pl-4">
                  <h3 className="text-[#ff0000] font-black uppercase text-xs tracking-widest flex items-center gap-2">
                    <MessageSquare size={14} /> Foire Aux Questions (FAQ)
                  </h3>
                  <button onClick={() => setFaq([...faq, { q: 'Nouvelle Question', a: 'Réponse' }])} className="text-[9px] font-black uppercase bg-[#ff0000] text-white px-3 py-1 rounded-full flex items-center gap-1 hover:scale-105 transition-all">
                    <Plus size={10} /> Ajouter FAQ
                  </button>
                </div>
                <div className="space-y-4">
                  {faq.map((item, i) => (
                    <div key={i} className="bg-neutral-900/40 p-8 rounded-3xl border border-white/5 space-y-4 relative group">
                      <button onClick={() => setFaq(faq.filter((_, idx) => idx !== i))} className="absolute top-4 right-4 text-gray-700 hover:text-[#ff0000] opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16}/></button>
                      <input 
                        value={item.q} 
                        onChange={(e) => {
                          const newFaq = [...faq];
                          newFaq[i].q = e.target.value;
                          setFaq(newFaq);
                        }}
                        className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm font-black uppercase italic tracking-tighter text-white"
                      />
                      <textarea 
                        value={item.a} 
                        onChange={(e) => {
                          const newFaq = [...faq];
                          newFaq[i].a = e.target.value;
                          setFaq(newFaq);
                        }}
                        className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm h-24 italic text-gray-400"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
