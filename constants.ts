
import { 
  Target, 
  UserCircle, 
  Share2, 
  Users, 
  TrendingUp,
  Map,
  BookOpen,
  Sparkles,
  Calendar,
  CheckSquare,
  Mail,
  Zap,
  BarChart3,
  FileText,
  MousePointer2
} from 'lucide-react';
import { ModuleContent } from './types';

export const INSTRUCTOR = {
  name: "Benjamin de Bruijne",
  role: "Fondateur de Pulsenoir - Visibilité Noir & Thriller",
  photo: "https://raw.githubusercontent.com/benspy2209/propulseurs/b432764d6f2f27df0da85a57446329dd5abb426a/public/benjamin.jpg",
  hoverPhoto: "https://raw.githubusercontent.com/benspy2209/propulseurs/b9ec43f7844ebe6793b9d56d94145fcee25e39db/public/pulsemanprofilf.jpg",
  quote: "« Aider les auteurs de noir à ne pas laisser leurs livres disparaître dans le noir des plateformes. »",
  bioBlocks: [
    "En 2025, j’ai vu la même scène se répéter encore et encore : des auteur·rices de polar, thriller, roman noir qui ont travaillé dur sur leur livre… et qui se retrouvent complètement perdu·es au moment de le faire connaître. Pas de méthode, pas de plan, un peu de posts “au hasard”, quelques pubs, beaucoup de frustration, et trop souvent cette phrase : “Mon livre ne se vend pas.” C’est pour ça que j’ai créé Pulsenoir et cette formation : pour donner aux auteurs de noir un plan concret, adapté à leur genre, et pas un énième bla-bla marketing généraliste.",
    "Il y a 35 ans que je suis un lecteur passionné de noir, de polar, de thriller. Et 20 ans que je travaille dans le web : développement, marketing digital, création de sites, optimisation de présence en ligne. J’ai d’abord lancé Bibliopulse, une bibliothèque en ligne pour chercher des livres, suivre ses lectures et écrire des critiques. Puis est né Pulse Noir : un groupe Facebook dédié au polar/thriller, avec aujourd’hui plus de 1500 membres dont environ 350 auteur·rices, où les gens partagent leurs lectures et mettent en avant leurs livres.",
    "En parallèle, des auteur·rices m’ont contacté : premier ou deuxième livre, peu ou pas de ventes, la sensation de parler dans le vide. J’ai commencé à les aider : création de sites, conseils sur leurs fiches Amazon, plans de promo adaptés au polar/thriller. Avec mon double profil de développeur et de marketeur web, j’ai conçu des outils et des méthodes dédiés à ce milieu très spécifique : le noir, le polar, le thriller. J’ai aussi créé studio.pulsenoir.be, un laboratoire pour écrire et structurer ses romans. La formation “Vendez vos polars – Plan de Guerre 90 Jours” est la synthèse de tout ça : 35 ans de lecture passionnée, 20 ans de web, et une obsession simple : que ton livre trouve vraiment ses lecteurs."
  ]
};

export const INSTRUCTOR_STATS = [
  {
    value: "35 ans",
    label: "LECTEUR PASSIONNÉ DE NOIR, POLAR & THRILLER"
  },
  {
    value: "20 ans",
    label: "D'EXPERTISE WEB, DEV & MARKETING DIGITAL"
  },
  {
    value: "1500+",
    label: "MEMBRES DU GROUPE PULSE NOIR (FACEBOOK)"
  },
  {
    value: "350",
    label: "AUTEUR·RICES PRÉSENTS DANS LE CLAN"
  }
];

export const FAQ_ITEMS = [
  {
    q: "À qui s’adresse cette formation exactement ?",
    a: "La formation s’adresse aux auteur·rices de polar, thriller et roman noir qui ont un manuscrit terminé (ou presque) et qui veulent le faire connaître, obtenir des avis et générer des ventes, sans passer des heures à inventer une stratégie marketing compliquée. Elle convient autant aux auteur·rices autoédité·es qu’à celles et ceux en maison d’édition, dès le premier livre."
  },
  {
    q: "Est-ce que c’est adapté si je n’ai encore jamais rien lancé / je suis nul·le en marketing ?",
    a: "Oui, le contenu est pensé pour des auteur·rices qui partent de presque zéro en promo. Les modules avancent pas à pas, avec des checklists, des modèles de messages, des fichiers à remplir et un Plan de Guerre 90 jours très guidé. L’objectif est justement de t’éviter le jargon et les stratégies irréalistes."
  }
];

export const DRIVE_FOLDER = "https://drive.google.com/drive/folders/1G9grASJgCql96ARQ7RHSj864Fe7sqNFg?usp=sharing";

export const PULSENOIR_LINKS = {
  main: "https://pulsenoir.be/",
  group: "https://www.facebook.com/groups/pulsenoir",
  studio: "https://studio.pulsenoir.be/",
  biblio: "https://bibliopulse.com/",
  instagram: "https://www.instagram.com/pulsenoirbe/",
  youtube: "https://www.youtube.com/@PulseNoirBe",
  leadMagnetDoc: "https://drive.google.com/file/d/1A_3xB_TOWQaOMU5CJXD9LAkjXGJb3PTM/view?usp=drive_link",
  leadMagnetAutoedition: "https://drive.google.com/file/d/1GUz-z2ENCpF_ZdSTbXLNX2UFQyZtyqkM/view?usp=drive_link"
};

/**
 * COURSE_MODULES defines the structured content for the training program.
 * Each module contains information for cards, slides, and the course player.
 */
export const COURSE_MODULES: ModuleContent[] = [
  {
    id: 'intro',
    title: "Le Positionnement Radical",
    subtitle: "Trouver sa niche dans le noir",
    description: "Comment arrêter de crier dans le vide et devenir la référence d'un sous-genre précis.",
    bullets: [
      "Identifier ton lecteur idéal 'Noir'",
      "Le test de la niche radicale",
      "Ton positionnement unique (USP)"
    ],
    icon: Target,
    imageKeyword: "noir-detective",
    color: "red",
    duration: "1h 15min",
    longDescription: "Dans ce premier module, on pose les fondations. Sans positionnement clair, ton livre est invisible. On va définir exactement à qui tu parles et pourquoi ils vont t'aimer.",
    steps: ["Analyser ton manuscrit", "Rechercher tes concurrents directs", "Rédiger ton pitch 'Noir'"],
    chapters: [
      {
        title: "Pourquoi la niche est ton armure",
        content: ["Dans un marché saturé, la généralisation est un suicide commercial. Pour le polar, c'est encore plus vrai.", "On va voir comment segmenter le genre Noir pour y trouver ta place."],
        type: 'text',
        expectedResult: "Une définition claire de ton sous-genre de prédilection."
      },
      {
        title: "Exercice : Ton Lecteur Idéal",
        content: ["Décris la personne qui va dévorer ton livre en une nuit.", "Qu'est-ce qu'elle cherche ? Du sang ? Du mystère ? De la psychologie ?"],
        type: 'exercise',
        guidedQuestions: ["Quel est le dernier livre qu'il a aimé ?", "Pourquoi l'a-t-il aimé ?"]
      }
    ],
    resources: [
      { title: "Checklist : Ma Niche Radical", type: 'checklist' },
      { title: "Template : Pitch de Vente", type: 'template' }
    ]
  },
  {
    id: 'aura',
    title: "L'Aura de l'Auteur",
    subtitle: "Ton identité visuelle et narrative",
    description: "Construire un univers cohérent qui rassure le lecteur avant même l'achat.",
    bullets: [
      "Ta bio d'auteur qui captive",
      "Visuels : L'esthétique du Noir",
      "Ton 'Tone of Voice' spécifique"
    ],
    icon: UserCircle,
    imageKeyword: "author-noir",
    color: "red",
    duration: "55 min",
    chapters: [
      {
        title: "Le concept d'Aura Magnétique",
        content: ["Un auteur de polar n'est pas un auteur de romance. Tout doit transpirer ton genre.", "On travaille sur ton image de marque personnelle."],
        type: 'key-concept'
      }
    ]
  },
  {
    id: 'siege',
    title: "Le Siège Amazon",
    subtitle: "Optimisation des fiches produits",
    description: "Transformer les simples visiteurs en acheteurs compulsifs.",
    bullets: [
      "Mots-clés stratégiques (KDP)",
      "La couverture qui hurle 'Achetez-moi'",
      "La description 'Copywriting Noir'"
    ],
    icon: Share2,
    imageKeyword: "amazon-books",
    color: "red",
    duration: "1h 30min",
    chapters: [
       {
         title: "Les secrets de l'algorithme KDP",
         content: ["Comment Amazon décide de montrer ton livre.", "L'importance des 30 premiers jours."],
         type: 'text'
       }
    ]
  },
  {
    id: 'clan',
    title: "Le Clan des 50",
    subtitle: "Ta communauté de lecteurs fidèles",
    description: "Comment recruter et animer ton armée de premiers lecteurs.",
    bullets: [
      "Le Lead Magnet (Cadeau gratuit)",
      "Animer sa liste email",
      "Le Groupe de Lecture Privé"
    ],
    icon: Users,
    imageKeyword: "readers",
    color: "red",
    duration: "1h 10min",
    chapters: []
  },
  {
    id: 'plan',
    title: "Le Plan de Guerre 90 Jours",
    subtitle: "Ton calendrier d'actions concrètes",
    description: "Le protocole jour après jour pour ne plus jamais procrastiner ta promo.",
    bullets: [
      "Phase 1 : Pré-lancement (J-30)",
      "Phase 2 : Le Choc (J-0)",
      "Phase 3 : La Maintenance (J+60)"
    ],
    icon: TrendingUp,
    imageKeyword: "strategy-map",
    color: "red",
    duration: "2h",
    chapters: []
  }
];
