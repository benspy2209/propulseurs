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
  role: "Fondateur PulseNoir & Stratège",
  bio: "J'ai créé l'écosystème PulseNoir pour offrir aux auteurs de polar et thriller une structure de visibilité complète. Du Studio d'écriture gratuit (structuration et export pro) à la puissance communautaire de Bibliopulse, je vous donne les clés pour professionnaliser votre plume et atteindre vos lecteurs."
};

export const PULSENOIR_LINKS = {
  main: "https://pulsenoir.be/",
  group: "https://www.facebook.com/groups/pulsenoir",
  studio: "https://studio.pulsenoir.be/",
  biblio: "https://bibliopulse.com/",
  instagram: "https://www.instagram.com/pulsenoirbe/"
};

export const COURSE_MODULES: ModuleContent[] = [
  {
    id: 'bases',
    title: "Module 1 : Les Fondations PulseNoir",
    subtitle: "Positionnement et Identité",
    description: "Définir votre identité d'auteur noir/thriller en vous appuyant sur la force du collectif PulseNoir et de ses 1500 membres.",
    longDescription: "Dans ce premier module, nous posons les bases. Vous n'êtes pas isolé : vous entrez dans une niche forte. Nous verrons comment utiliser la plateforme PulseNoir.be pour crédibiliser votre démarche et vous faire connaître auprès de notre communauté de passionnés.",
    duration: "45 min",
    bullets: [
      "Comprendre votre place dans l'écosystème PulseNoir",
      "Définir votre 'Sous-Genre' pour le référencement",
      "L'effet de levier : comment PulseNoir amplifie votre voix"
    ],
    icon: Target,
    color: "slate",
    imageKeyword: "noir_detective",
    chapters: [
      {
        title: "1. L'Intention : L'auteur est une marque",
        type: "key-concept",
        content: [
          "PulseNoir est une plateforme communautaire dédiée. En créant votre profil auteur sur PulseNoir.be, vous bénéficiez immédiatement de notre image de marque.",
          "Pour un nouvel auteur, le plus efficace est de construire progressivement une image cohérente sur notre réseau pour gagner en visibilité dès vos premières publications.",
          "Vous n'êtes pas seul : vous rejoignez un réseau de plus de 1500 membres actifs sur Facebook et une plateforme qui centralise les talents du noir."
        ]
      },
      {
        title: "2. Définir votre Positionnement Unique",
        type: "text",
        content: [
          "Votre positionnement sur PulseNoir repose sur trois piliers :",
          "• Le Genre : Soyez précis pour les filtres de recherche de Bibliopulse (Polar rural, Thriller tech, etc.).",
          "• Le Public : Ciblez les lecteurs qui cherchent du frisson et de l'enquête.",
          "• Le Professionnalisme : Utilisez nos services comme le Pack Elite pour obtenir un site auteur professionnel."
        ]
      },
      {
        title: "Action PulseNoir : Votre Pitch",
        type: "exercise",
        content: [
          "Rédigez votre pitch en pensant à votre future fiche sur Bibliopulse.com.",
          "Modèle : « Mon livre est un [SOUS-GENRE] qui s’adresse aux fans de [AUTEUR RÉFÉRENCE] et promet [ÉMOTION : angoisse, adrénaline]. »",
          "Ce pitch sera la pierre angulaire de votre visibilité sur nos outils."
        ]
      }
    ],
    resources: [
      { title: "Fiche « Phrase de Positionnement » (Compatible Bibliopulse)", type: "template" },
      { title: "Grille des sous-genres du Thriller", type: "sheet" },
      { title: "Mini-Plan Marketing PulseNoir", type: "pdf" }
    ]
  },
  {
    id: 'presence',
    title: "Module 2 : Maîtriser le Studio d'Écriture",
    subtitle: "Productivité et Structuration",
    description: "Utiliser le Studio PulseNoir pour structurer votre récit, gérer vos personnages et maintenir une discipline d'acier.",
    longDescription: "Le Studio est votre quartier général. De la structuration narrative à l'export PDF professionnel, découvrez comment nos outils gratuits (Pomodoro, Heatmap, Streaks) transforment votre flux de travail.",
    duration: "1h 10min",
    bullets: [
      "Structuration narrative et gestion de personnages",
      "Pomodoro et Heatmap d'écriture pour la discipline",
      "Export PDF professionnel de votre manuscrit"
    ],
    icon: Globe,
    color: "emerald",
    imageKeyword: "dark_network",
    chapters: [
      {
        title: "1. Structurer avec le Studio",
        type: "text",
        content: [
          "Le Studio PulseNoir offre des outils de gestion de personnages et de lieux indispensables pour les intrigues complexes du thriller.",
          "Utilisez l'éditeur intégré pour centraliser vos recherches et votre manuscrit sans distraction.",
          "Grâce à l'export PDF professionnel, votre texte est prêt pour l'envoi aux éditeurs ou pour vos bêta-lecteurs."
        ]
      },
      {
        title: "2. La Productivité de l'Auteur",
        type: "key-concept",
        content: [
          "Maintenez votre 'streak' d'écriture : le Studio suit vos progrès quotidiens.",
          "Utilisez le mode Pomodoro pour rester concentré sur vos chapitres les plus sombres.",
          "Consultez votre Heatmap pour identifier vos moments de créativité maximale."
        ]
      },
      {
        title: "Action PulseNoir : Configuration Studio",
        type: "exercise",
        content: [
          "Créez votre compte sur studio.pulsenoir.be.",
          "Importez votre plan ou vos fiches personnages.",
          "Lancez votre première session Pomodoro de 25 minutes aujourd'hui."
        ]
      }
    ],
    resources: [
      { title: "Guide complet de l'Éditeur Studio", type: "pdf" },
      { title: "Tutoriel : Exporter son manuscrit en PDF Pro", type: "pdf" },
      { title: "Gabarit de fiche personnage 'Noir'", type: "template" }
    ]
  },
  {
    id: 'social',
    title: "Module 3 : Stratégie Sociale & Communauté",
    subtitle: "Dompter Facebook & Instagram",
    description: "Utilisez le Groupe PulseNoir (1500 membres) comme tremplin pour votre visibilité.",
    longDescription: "Fini de poster dans le vide. Nous allons utiliser la puissance du groupe Facebook PulseNoir comme terrain d'entraînement et Instagram comme vitrine de votre univers.",
    duration: "55 min",
    bullets: [
      "Interagir avec les 1500 membres du Groupe Facebook",
      "Interviews et espaces d'entraide PulseNoir.be",
      "Calendrier éditorial spécial 'Polar'"
    ],
    icon: Share2,
    color: "violet",
    imageKeyword: "social_media_dark",
    chapters: [
      {
        title: "1. Le Groupe Facebook : Votre Laboratoire",
        type: "key-concept",
        content: [
          "Le groupe Facebook PulseNoir est un lieu d'entraide unique entre 1500 passionnés.",
          "• Testez vos couvertures : Demandez l'avis des membres (souvent des lecteurs cibles).",
          "• Participez aux interviews d'auteurs organisées par la plateforme.",
          "• Profitez de l'espace d'entraide pour débloquer vos intrigues."
        ]
      },
      {
        title: "2. Instagram : La Vitrine Noire",
        type: "text",
        content: [
          "Observez le compte @pulsenoirbe : une esthétique marquée, des visuels soignés.",
          "• Apprenez à utiliser @pulsenoirbe comme levier de crédibilité en étant relayé.",
          "• Utilisez les hashtags de la communauté pour toucher les fans de frissons."
        ]
      }
    ],
    resources: [
      { title: "Calendrier Éditorial « Spécial Polar »", type: "template" },
      { title: "Guide : Réussir son interview auteur", type: "pdf" }
    ]
  },
  {
    id: 'avis',
    title: "Module 4 : Le Levier Bibliopulse",
    subtitle: "Visibilité & Preuve Sociale",
    description: "Faites découvrir votre œuvre à plus de 1300 lecteurs passionnés et récoltez des avis certifiés.",
    longDescription: "Bibliopulse n'est pas qu'une bibliothèque personnelle, c'est un moteur de découverte. Apprenez à intégrer les bibliothèques des lecteurs et à générer des recommandations au sein de ce réseau engagé.",
    duration: "40 min",
    bullets: [
      "Cataloguer et promouvoir son livre sur Bibliopulse",
      "Toucher les 1300+ membres de la communauté de lecteurs",
      "Générer des avis et des coups de cœur certifiés"
    ],
    icon: MessageCircle,
    color: "amber",
    imageKeyword: "reviews",
    chapters: [
      {
        title: "1. Bibliopulse pour l'Auteur",
        type: "key-concept",
        content: [
          "Bibliopulse permet aux lecteurs de cataloguer leurs livres et de suivre leurs lectures.",
          "Pour vous, c'est l'opportunité d'apparaître dans les suggestions de 1300 lecteurs actifs.",
          "Chaque ajout à une bibliothèque et chaque critique partagée augmente votre portée organique."
        ]
      },
      {
        title: "2. Centraliser la Preuve Sociale",
        type: "text",
        content: [
          "Les lecteurs partagent activement leurs coups de cœur sur Bibliopulse.",
          "Encouragez vos lecteurs à poster leurs avis sur la plateforme pour rassurer les nouveaux acheteurs.",
          "Plus votre livre est présent dans les bibliothèques, plus il remonte dans les tendances du réseau."
        ]
      },
      {
        title: "Action PulseNoir : Offensive Bibliopulse",
        type: "exercise",
        content: [
          "Créez la fiche de votre livre sur Bibliopulse.",
          "Incitez votre Street Team à l'ajouter à leur liste 'En cours' ou 'Lu'.",
          "Partagez votre première critique positive sur vos réseaux."
        ]
      }
    ],
    resources: [
      { title: "Check-list « Fiche Livre Bibliopulse »", type: "checklist" },
      { title: "Guide : Recruter des lecteurs sur Bibliopulse", type: "pdf" }
    ]
  },
  {
    id: 'ventes',
    title: "Module 5 : Accélérer avec le Pack Elite",
    subtitle: "Lancements & Sites Professionnels",
    description: "Maximisez l'impact de vos publications avec des outils de vente professionnels et l'agenda PulseNoir.",
    longDescription: "Passez au niveau supérieur. De la création de votre site auteur professionnel via le Pack Elite à la synchronisation de vos promos avec nos newsletters, transformez vos lecteurs en acheteurs.",
    duration: "1h 30min",
    bullets: [
      "Création de site auteur professionnel (Pack Elite)",
      "Coordonner sa promo avec l'agenda PulseNoir",
      "Vendre via la vitrine Bibliopulse"
    ],
    icon: TrendingUp,
    color: "rose",
    imageKeyword: "sales_graph",
    chapters: [
      {
        title: "1. Votre Site Auteur Elite",
        type: "text",
        content: [
          "Le Pack Elite de PulseNoir.be vous permet d'avoir un site professionnel sans technique.",
          "Un site dédié est indispensable pour capturer des emails et vendre en direct ou via Amazon.",
          "Intégrez vos fiches Bibliopulse sur votre site pour montrer la satisfaction de vos lecteurs."
        ]
      },
      {
        title: "2. Lancer avec la Force du Réseau",
        type: "key-concept",
        content: [
          "Synchronisez vos sorties avec nos newsletters et événements de groupe.",
          "Profitez de la vitrine Bibliopulse pour mettre en avant vos promotions flash.",
          "Utilisez les interviews du Studio pour créer de l'attente autour de votre prochain titre."
        ]
      }
    ],
    resources: [
      { title: "Checklist « Site Auteur Pro »", type: "checklist" },
      { title: "Plan Promo Flash PulseNoir", type: "template" }
    ]
  },
  {
    id: 'action',
    title: "Bonus : Plan d'Action 90 Jours",
    subtitle: "Votre feuille de route",
    description: "3 mois pour s'intégrer totalement à l'écosystème et vendre.",
    longDescription: "Ce plan transforme la formation en routine. Devenez un membre incontournable de PulseNoir et utilisez le Studio et Bibliopulse quotidiennement.",
    duration: "20 min",
    bullets: [
      "Mois 1 : Studio & Structuration",
      "Mois 2 : Bibliopulse & Visibilité",
      "Mois 3 : PulseNoir Elite & Ventes"
    ],
    icon: Map,
    color: "blue",
    imageKeyword: "roadmap_dark",
    chapters: [
      {
        title: "Mois 1 : Production",
        type: "text",
        content: [
          "Objectif : Écrire et structurer.",
          "• Utilisation quotidienne du Studio (Pomodoro).",
          "• Finalisation des personnages et de l'intrigue."
        ]
      },
      {
        title: "Mois 2 : Connexion",
        type: "text",
        content: [
          "Objectif : Toucher les lecteurs.",
          "• Présence sur Bibliopulse et interactions dans le groupe Facebook.",
          "• Récolte des premiers avis."
        ]
      },
      {
        title: "Mois 3 : Explosion",
        type: "text",
        content: [
          "Objectif : Professionnalisation.",
          "• Lancement avec le Pack Elite (Site Auteur).",
          "• Promotion coordonnée avec PulseNoir.be."
        ]
      }
    ],
    resources: [
      { title: "Calendrier d'Action 90 Jours PulseNoir", type: "sheet" }
    ]
  }
];