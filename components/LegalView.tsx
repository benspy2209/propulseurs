import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalViewProps {
  onBack: () => void;
}

const LegalView: React.FC<LegalViewProps> = ({ onBack }) => {
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

          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-16 italic serif-font">
            Conditions générales de <span className="text-[#ff0000]">vente</span>
          </h1>

          <div className="space-y-12 text-lg leading-relaxed font-medium italic">
             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">1. Objet</h2>
                <div className="space-y-4">
                  <p>Les présentes Conditions Générales de Vente (ci‑après « CGV ») s’appliquent à toute commande de formations numériques, programmes et packs de ressources (PDF, tableurs, modèles, checklists, fichiers de suivi, accès à un espace membre, etc.) proposés sur le site Pulsenoir, notamment la formation « Vendez vos polars – Plan de Guerre 90 Jours pour Auteurs de Noir & Thriller ».</p>
                  <p>Toute commande implique l’acceptation pleine et entière des présentes CGV par le client.</p>
                </div>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">2. Identité du vendeur</h2>
                <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
                   <p className="font-bold text-white mb-2 uppercase tracking-widest">HAKUNA MATATA SRL</p>
                   <p>Avenue De Fré 139/52</p>
                   <p>1180 Uccle – Belgique</p>
                   <p className="mt-2">Numéro d’entreprise (BCE) : 0877.585.922</p>
                   <p className="mt-6">Contact : <span className="text-[#ff0000] border-b border-[#ff0000]/30 pb-0.5">debruijneb@gmail.com</span></p>
                   <p className="mt-6 text-sm text-gray-500 italic border-t border-white/5 pt-4">Aucun support téléphonique n’est proposé ; les échanges se font par email et via un groupe privé dédié aux acheteurs.</p>
                </div>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">3. Produits et services</h2>
                <p>Les produits vendus sont des contenus numériques et des outils :</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                   {[
                     "documents PDF", "tableurs", "templates", 
                     "checklists", "fichiers de suivi", "accès à un espace membre"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 bg-neutral-900/30 p-4 rounded-xl border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff0000]" />
                        <span className="text-gray-300 font-bold uppercase text-xs tracking-widest">{item}</span>
                     </li>
                   ))}
                </ul>
                <p className="mt-8 text-gray-500 text-sm">Aucun envoi physique n’est effectué.</p>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">4. Prix</h2>
                <div className="space-y-4">
                  <p>Les prix des formations et produits numériques sont indiqués en euros, toutes taxes comprises (TTC).</p>
                  <p>Sauf mention contraire, les prix sont les mêmes pour tous les clients, quel que soit leur pays (UE ou hors UE).</p>
                  <p>HAKUNA MATATA SRL se réserve le droit de modifier ses tarifs à tout moment, sans effet rétroactif sur les commandes déjà passées.</p>
                </div>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">5. Commande</h2>
                <p>Le processus de commande standard est le suivant :</p>
                <div className="mt-6 space-y-4">
                   {[
                     "le client accède à la page de présentation de l’offre",
                     "il clique sur un bouton d’achat",
                     "il est redirigé vers une page de paiement sécurisée",
                     "après validation du paiement, il reçoit un email de confirmation et les instructions d’accès"
                   ].map((step, i) => (
                     <div key={i} className="flex gap-4">
                        <span className="text-[#ff0000] font-black">{i + 1}.</span>
                        <p>{step}</p>
                     </div>
                   ))}
                </div>
                <p className="mt-8">La validation de la commande vaut acceptation sans réserve des CGV en vigueur au jour de l’achat.</p>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">6. Paiement</h2>
                <div className="space-y-4">
                  <p>Le règlement s’effectue en ligne via Stripe, en une fois ou, lorsque proposé, en 3 fois.</p>
                  <p>Les données bancaires sont traitées directement par le prestataire de paiement et ne sont pas stockées sur le site Pulsenoir ni par HAKUNA MATATA SRL.</p>
                </div>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">7. Accès aux contenus</h2>
                <p>Après confirmation du paiement :</p>
                <ul className="list-disc pl-8 mt-4 space-y-4">
                   <li>le client reçoit un email avec les informations nécessaires pour accéder à l’espace membre ;</li>
                   <li>l’accès est individuel et nominatif (non transférable à des tiers).</li>
                </ul>
                <p className="mt-8">La société s’engage à maintenir l’accès pour la durée de vie du produit / de la plateforme, sous réserve des contraintes techniques raisonnables.</p>
                <div className="mt-8 relative p-6 bg-[#ff0000]/5 border border-[#ff0000]/20 rounded-2xl italic text-white font-black uppercase tracking-tight text-sm">
                   <p>Les mises à jour futures de la formation (ajout de documents, de nouveaux outils, de vidéos, etc.) sont accessibles sans supplément à toutes les personnes ayant déjà acheté la formation.</p>
                </div>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">8. Droit de rétractation et garantie commerciale</h2>
                <div className="space-y-6">
                  <p>Compte tenu de la nature numérique des produits et de l’accès quasi immédiat aux contenus, le cadre légal du droit de rétractation peut être limité ou adapté.</p>
                  <p>En complément, HAKUNA MATATA SRL met en place une garantie commerciale <span className="text-[#ff0000] font-black not-italic underline decoration-[#ff0000]/30 underline-offset-4">“satisfait ou remboursé 10 jours”</span> :</p>
                  <ul className="list-disc pl-8 space-y-4">
                    <li>le client dispose de 10 jours calendaires à compter de la date d’achat pour demander un remboursement s’il estime que la formation ne correspond pas à ses attentes ;</li>
                    <li>au‑delà de ce délai, aucun remboursement n’est accordé.</li>
                  </ul>
                  <p className="pt-4">Les modalités pratiques de demande se font par email à : <span className="text-[#ff0000]">debruijneb@gmail.com</span>.</p>
                </div>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">9. Propriété intellectuelle</h2>
                <div className="space-y-6">
                  <p>Tous les contenus des formations et du site (textes, futures vidéos, PDF, tableurs, modèles, checklists, marques, logos, etc.) sont protégés par le droit d’auteur.</p>
                  <div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5">
                    <p className="font-bold text-white mb-4 uppercase text-sm tracking-widest">Le client bénéficie d’un droit d’usage personnel :</p>
                    <ul className="list-disc pl-8 space-y-2 text-sm">
                      <li>il est autorisé à imprimer les documents pour son usage propre (par exemple pour les remplir à la main).</li>
                    </ul>
                  </div>
                  <div className="bg-[#ff0000]/5 p-6 rounded-2xl border border-[#ff0000]/10">
                    <p className="font-bold text-[#ff0000] mb-4 uppercase text-sm tracking-widest">Il lui est en revanche strictement interdit de :</p>
                    <ul className="list-disc pl-8 space-y-2 text-sm">
                      <li>partager les fichiers dans des groupes, forums, ou avec d’autres auteurs ;</li>
                      <li>revendre, diffuser, reproduire ou proposer ces contenus à des tiers, à titre gratuit ou payant.</li>
                    </ul>
                  </div>
                </div>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">10. Données personnelles</h2>
                <div className="space-y-4">
                  <p>Dans le cadre de la vente et de la gestion des comptes clients, certaines données personnelles sont collectées (nom, prénom, email, données de facturation, etc.).</p>
                  <p>Les modalités de collecte, de traitement et de protection de ces données sont détaillées dans la page « Politique de confidentialité » du site, à laquelle les présentes CGV renvoient.</p>
                </div>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">11. Support et assistance</h2>
                <p>Le support client est assuré :</p>
                <ul className="list-disc pl-8 mt-6 space-y-4">
                   <li>par email à l’adresse : <span className="text-[#ff0000]">debruijneb@gmail.com</span> ;</li>
                   <li>via un groupe privé “Vendez vos polars” réservé aux acheteurs de la formation.</li>
                </ul>
                <p className="mt-8 text-gray-500 text-sm">Un délai de réponse indicatif de 72 heures ouvrées est visé.</p>
             </section>

             <section>
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">12. Responsabilité</h2>
                <div className="space-y-4">
                  <p>Les formations et outils proposés ont pour objectif de fournir des méthodes, stratégies et supports pour la promotion de livres de polar/thriller.</p>
                  <p>HAKUNA MATATA SRL ne peut en aucun cas garantir un volume de ventes précis ni un résultat chiffré (nombre d’avis, chiffre d’affaires, etc.). Les résultats dépendent notamment de la qualité de l’ouvrage, de l’implication du client et de facteurs externes.</p>
                  <p>La responsabilité de la société ne saurait être engagée pour l’utilisation des informations par le client ni pour des problèmes liés à des services tiers, dans la limite de la loi applicable.</p>
                </div>
             </section>

             <section className="pb-32">
                <h2 className="text-2xl font-black text-white uppercase mb-6 serif-font border-l-4 border-[#ff0000] pl-6 italic">13. Droit applicable</h2>
                <div className="space-y-4">
                  <p>Les présentes CGV sont soumises au droit belge.</p>
                  <p>En cas de litige, et à défaut d’accord amiable, compétence est attribuée aux tribunaux de Bruxelles, sous réserve des règles impératives plus protectrices applicables aux consommateurs.</p>
                </div>
             </section>
          </div>
       </div>
    </div>
  );
};

export default LegalView;