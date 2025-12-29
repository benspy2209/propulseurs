import React, { useEffect } from 'react';
import { ArrowLeft, Landmark, User, Server, BookOpen, Scale, Globe, ShieldCheck } from 'lucide-react';

interface MentionsLegalesViewProps {
  onBack: () => void;
}

const MentionsLegalesView: React.FC<MentionsLegalesViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans py-20 px-6 selection:bg-[#ff0000] selection:text-white">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-[#ff0000] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Retour à l'accueil
        </button>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 italic serif-font">
            Mentions <span className="text-[#ff0000]">légales</span>
          </h1>
          <div className="h-1 w-24 bg-[#ff0000]" />
        </header>

        <div className="space-y-16 text-lg leading-relaxed font-medium italic">
          
          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-8 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <Landmark className="text-[#ff0000]" size={24} /> 
              1. Éditeur du site
            </h2>
            <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Landmark size={80} className="text-[#ff0000]" />
               </div>
               <div className="relative z-10 space-y-2 not-italic">
                  <p className="font-black text-white text-xl tracking-widest uppercase mb-4">HAKUNA MATATA SRL</p>
                  <p className="text-gray-400">Avenue De Fré 139/52</p>
                  <p className="text-gray-400">1180 Uccle – Belgique</p>
                  <p className="text-gray-400">BCE : 0877.585.922</p>
                  <p className="text-gray-400">Forme juridique : Société à responsabilité limitée (SRL)</p>
                  <p className="mt-6 pt-6 border-t border-white/5 text-[#ff0000] font-bold">Email : debruijneb@gmail.com</p>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <User className="text-[#ff0000]" size={24} /> 
              2. Directeur de la publication
            </h2>
            <p>Directeur de la publication : <span className="text-white font-bold">Benjamin De Bruijne</span>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <Server className="text-[#ff0000]" size={24} /> 
              3. Hébergeur du site
            </h2>
            <div className="p-6 bg-neutral-900/30 rounded-2xl border border-white/5">
              <p>Hébergeur : <span className="text-white font-bold">Hakuna Matata</span> – infrastructure technique gérée par la société.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <BookOpen className="text-[#ff0000]" size={24} /> 
              4. Activité du site
            </h2>
            <p>
              Le site Pulsenoir a pour objet la présentation et la vente de formations, programmes et ressources destinés aux auteur·rices de polar, thriller et roman noir (notamment la formation “Vendez vos polars – Plan de Guerre 90 Jours pour Auteurs de Noir & Thriller”).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <Scale className="text-[#ff0000]" size={24} /> 
              5. Propriété intellectuelle
            </h2>
            <div className="space-y-4">
              <p>L’ensemble des contenus présents sur le site (textes, images, logos, marques, documents, goodies, ressources téléchargeables, etc.) est protégé par le droit d’auteur et/ou les droits de propriété intellectuelle.</p>
              <p>Ces contenus restent la propriété exclusive de <span className="text-white">HAKUNA MATATA SRL</span> ou de ses partenaires.</p>
              <p className="p-4 bg-[#ff0000]/5 border-l-2 border-[#ff0000] text-sm text-white font-black uppercase tracking-widest">Toute reproduction, représentation, diffusion, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <ShieldCheck className="text-[#ff0000]" size={24} /> 
              6. Responsabilité
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>Les informations fournies sur le site le sont à titre indicatif et peuvent être modifiées à tout moment.</p>
              <p>Malgré le soin apporté à la rédaction des contenus, l’éditeur ne peut être tenu responsable des erreurs, omissions, ou d’un éventuel usage inapproprié des informations par les visiteurs.</p>
              <p>L’éditeur ne peut être tenu responsable des interruptions ou dysfonctionnements du site (hébergement, maintenance, etc.) ni des dommages directs ou indirects liés à l’utilisation du site.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <Globe className="text-[#ff0000]" size={24} /> 
              7. Liens hypertextes
            </h2>
            <p>
              Le site peut contenir des liens vers d’autres sites web. <span className="text-white">HAKUNA MATATA SRL</span> n’a pas la maîtrise du contenu de ces sites tiers et ne peut donc être tenu responsable de leurs contenus, de leur fonctionnement ou de tout dommage pouvant résulter de leur utilisation.
            </p>
          </section>

          <section className="pb-32">
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">8. Données personnelles</h2>
            <p>
              Pour tous les détails concernant la collecte et le traitement des données personnelles, veuillez consulter notre <button onClick={onBack} className="text-[#ff0000] underline underline-offset-4 decoration-[#ff0000]/30 hover:text-white transition-colors">Politique de confidentialité</button>, laquelle fait partie intégrante des présentes mentions légales.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesView;