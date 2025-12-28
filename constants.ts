import { 
  Target, 
  Globe, 
  Share2, 
  MessageCircle, 
  TrendingUp,
  Map,
  BookOpenCheck
} from 'lucide-react';
import { ModuleContent } from './types';

export const INSTRUCTOR = {
  name: "Benjamin de Bruijne",
  role: "Stratège Littéraire & Auteur",
  bio: "J'aide les nouveaux auteurs à transformer leur passion en carrière durable. Ma méthode repose sur la construction progressive d'une communauté engagée, loin des recettes miracles, pour des résultats concrets et pérennes."
};

export const COURSE_MODULES: ModuleContent[] = [
  {
    id: 'bases',
    title: "Module 1 : Les Fondations",
    subtitle: "Positionnement et Objectifs",
    description: "Avant d'écrire la première ligne de votre plan marketing, nous définissons ensemble votre identité d'auteur.",
    bullets: [
      "Définir votre positionnement unique (Genre, Public, Format)",
      "Fixer des objectifs réalistes (Ex: 100 premiers lecteurs qualifiés)",
      "Créer votre mini-plan marketing de lancement"
    ],
    icon: Target,
    imageKeyword: "architecture",
    color: "slate"
  },
  {
    id: 'presence',
    title: "Module 2 : Identité Numérique",
    subtitle: "Exister sans se disperser",
    description: "Apprenez à construire une vitrine professionnelle sans y passer vos journées.",
    bullets: [
      "Créer un profil auteur magnétique",
      "Mettre en place votre « Hub » (Site, Linktree, Page Auteur)",
      "Définir votre phrase-signature et votre promesse"
    ],
    icon: Globe,
    imageKeyword: "website",
    color: "emerald"
  },
  {
    id: 'social',
    title: "Module 3 : Stratégie Sociale",
    subtitle: "Dompter les réseaux",
    description: "Fini le stress des algorithmes. Nous ciblons les canaux qui convertissent vraiment pour votre genre.",
    bullets: [
      "Choisir ses batailles : Facebook vs Instagram/TikTok",
      "Le calendrier éditorial minimaliste (3h/semaine max)",
      "S'intégrer aux communautés (BookTok, Bookstagram)"
    ],
    icon: Share2,
    imageKeyword: "smartphone",
    color: "violet"
  },
  {
    id: 'avis',
    title: "Module 4 : Le Cercle Vertueux",
    subtitle: "Bêta-lecteurs et Avis",
    description: "La preuve sociale est votre meilleur vendeur. Voici comment l'obtenir éthiquement.",
    bullets: [
      "Recruter une 'Street Team' de lecteurs ambassadeurs",
      "Les plateformes de Service de Presse qui fonctionnent",
      "Automatisations pour récolter des avis 5 étoiles"
    ],
    icon: MessageCircle,
    imageKeyword: "feedback",
    color: "amber"
  },
  {
    id: 'ventes',
    title: "Module 5 : Accélérer les Ventes",
    subtitle: "Conversion et Publicité",
    description: "Transformez votre visibilité en revenus récurrents.",
    bullets: [
      "L'anatomie d'une fiche produit Amazon parfaite",
      "Lancer des promotions flash rentables",
      "Introduction à la publicité (Amazon Ads & Meta)"
    ],
    icon: TrendingUp,
    imageKeyword: "growth",
    color: "rose"
  },
  {
    id: 'action',
    title: "Bonus : Plan d'Action 90 Jours",
    subtitle: "Votre feuille de route",
    description: "Vous ne repartez pas seulement avec des connaissances, mais avec un plan jour par jour.",
    bullets: [
      "Planning type sur 3 mois",
      "Checklists de lancement",
      "Modèles de posts et d'emails"
    ],
    icon: Map,
    imageKeyword: "roadmap",
    color: "blue"
  }
];
