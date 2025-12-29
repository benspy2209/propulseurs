import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, UserCheck, Clock, FileCheck } from 'lucide-react';

interface PrivacyPolicyViewProps {
  onBack: () => void;
}

const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onBack }) => {
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
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#ff0000]/30 bg-[#ff0000]/5 text-[#ff0000] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <ShieldCheck size={12} /> Protection des données
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic serif-font">
            Politique de <span className="text-[#ff0000]">confidentialité</span>
          </h1>
          <p className="mt-4 text-gray-500 text-sm font-bold uppercase tracking-widest italic">Dernière mise à jour : 24 mai 2024</p>
        </header>

        <div className="space-y-16 text-lg leading-relaxed font-medium italic">
          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <UserCheck className="text-[#ff0000]" size={24} /> 
              1. Responsable de traitement
            </h2>
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
              <p>Le responsable du traitement des données personnelles est :</p>
              <div className="mt-4 space-y-1 not-italic">
                <p className="font-bold text-white uppercase tracking-widest">HAKUNA MATATA SRL</p>
                <p>Avenue De Fré 139/52</p>
                <p>1180 Uccle, Belgique</p>
                <p>BCE 0877.585.922</p>
              </div>
              <p className="mt-6">Pour toute question ou exercice de vos droits : <span className="text-[#ff0000] border-b border-[#ff0000]/30">debruijneb@gmail.com</span>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <Database className="text-[#ff0000]" size={24} /> 
              2. Données collectées
            </h2>
            <p className="mb-6">Nous collectons uniquement les données strictement nécessaires à la fourniture de nos services :</p>
            <div className="grid gap-6">
              <div className="p-6 bg-neutral-900/30 rounded-2xl border border-white/5">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3">Données de compte & commande</h3>
                <p className="text-base text-gray-400">Nom, prénom, adresse email, adresse postale (facultatif), historique d’achats.</p>
              </div>
              <div className="p-6 bg-neutral-900/30 rounded-2xl border border-white/5">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3">Données de facturation</h3>
                <p className="text-base text-gray-400">Informations légales requises pour l'émission de factures conformes.</p>
              </div>
              <div className="p-6 bg-neutral-900/30 rounded-2xl border border-white/5">
                <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3">Données de navigation</h3>
                <p className="text-base text-gray-400">Cookies, adresse IP, données de connexion, statistiques anonymisées (via Google Analytics).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <Eye className="text-[#ff0000]" size={24} /> 
              3. Finalités des traitements
            </h2>
            <ul className="space-y-4 list-disc pl-8">
              <li>Gestion des commandes et accès aux formations et contenus associés.</li>
              <li>Relation client : emails de suivi, informations pratiques, support technique.</li>
              <li>Réalisation de statistiques anonymisées pour l'amélioration du site.</li>
              <li>Respect des obligations légales et comptables.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <FileCheck className="text-[#ff0000]" size={24} /> 
              4. Bases légales
            </h2>
            <div className="space-y-4">
              <p><span className="text-white font-bold">Exécution du contrat :</span> Traitement nécessaire pour gérer la commande et fournir l’accès.</p>
              <p><span className="text-white font-bold">Intérêt légitime :</span> Amélioration des services, statistiques, prévention de la fraude.</p>
              <p><span className="text-white font-bold">Consentement :</span> Dépôt de certains cookies non strictement nécessaires (via la bannière de consentement).</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <Lock className="text-[#ff0000]" size={24} /> 
              5. Destinataires des données
            </h2>
            <p>Vos données sont transmises uniquement à nos prestataires techniques de confiance :</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {['Hébergement (Infrastructure Hakuna Matata)', 'Emailing (Resend)', 'Paiement (Stripe)'].map((p, i) => (
                <span key={i} className="px-4 py-2 bg-neutral-900 rounded-full border border-white/5 text-xs font-bold text-gray-400 uppercase tracking-widest">{p}</span>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">Ces prestataires s’engagent contractuellement à respecter la confidentialité de vos données.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <Clock className="text-[#ff0000]" size={24} /> 
              6. Durée de conservation
            </h2>
            <ul className="space-y-4 list-disc pl-8">
              <li>Données client : 3 ans après le dernier contact ou la dernière commande (hors obligations légales).</li>
              <li>Données de facturation : Conservées selon les durées légales imposées par le droit belge.</li>
              <li>Données de cookies : Durée limitée conforme aux recommandations de l'APD.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic flex items-center gap-4">
              <ShieldCheck className="text-[#ff0000]" size={24} /> 
              7. Droits des personnes
            </h2>
            <p>Vous disposez des droits suivants : accès, rectification, effacement (oubli), limitation, opposition et portabilité.</p>
            <div className="mt-8 p-8 bg-[#ff0000]/5 border border-[#ff0000]/20 rounded-2xl">
              <p className="text-white font-black uppercase text-sm tracking-widest mb-4">Comment exercer vos droits ?</p>
              <p>Envoyez un email à <span className="text-[#ff0000]">debruijneb@gmail.com</span> en précisant votre demande.</p>
              <p className="mt-4 text-sm text-gray-500 italic">Vous pouvez également introduire une réclamation auprès de l’Autorité de protection des données (APD) en Belgique.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">8. Cookies</h2>
            <p>Le site utilise des cookies techniques nécessaires au fonctionnement et des cookies de mesure d’audience (Google Analytics) anonymisés.</p>
            <p className="mt-4">Une bannière de consentement vous permet de paramétrer vos choix dès votre arrivée sur le site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">9. Sécurité</h2>
            <p>Nous mettons en œuvre des mesures raisonnables (hébergement sécurisé, accès restreint) pour protéger vos données. Aucune mesure n'offrant une sécurité absolue, nous privilégions des prestataires réputés pour leur haut niveau de protection.</p>
          </section>

          <section className="pb-32 border-t border-white/5 pt-12">
            <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font italic">10. Mise à jour</h2>
            <p>La présente politique peut être modifiée pour tenir compte de l’évolution des services ou du cadre légal. La date de dernière mise à jour sera indiquée en haut de cette page.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;