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
    "Toute cette aventure Pulsenoir est récente : elle a commencé en 2025. Mais les racines, elles, remontent bien plus loin. Il y a 35 ans que je suis un lecteur passionné de noir, de polar, de thriller. Et 20 ans que je travaille dans le web : développement, marketing digital, création de sites, optimisation de présence en ligne. J’ai d’abord lancé Bibliopulse, une bibliothèque en ligne pour chercher des livres, suivre ses lectures et écrire des critiques. Puis est né Pulse Noir : un groupe Facebook dédié au polar/thriller, avec aujourd’hui plus de 1500 membres dont environ 350 auteur·rices, où les gens partagent leurs lectures et mettent en avant leurs livres.",
    "En parallèle, des auteur·rices m’ont contacté : premier ou deuxième livre, peu ou pas de ventes, la sensation de parler dans le vide. J’ai commencé à les aider : création de sites, conseils sur leurs fiches Amazon, plans de promo adaptés au polar/thriller. Avec mon double profil de développeur et de marketeur web, j’ai conçu des outils et des méthodes dédiés à ce milieu très spécifique : le noir, le polar, le thriller. J’ai aussi créé studio.pulsenoir.be, un laboratoire pour écrire et structurer ses romans. La formation “Vendez vos polars – Plan de Guerre 90 Jours” est la synthèse de tout ça : 35 ans de lecture passionnée, 20 ans de web, et une obsession simple : que ton livre trouve vraiment ses lecteurs."
  ]
};

export const INSTRUCTOR_STATS = [
  {
    value: "1500+",
    label: "membres du groupe Pulse Noir (Facebook)"
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
  },
  {
    q: "Est-ce que cela fonctionne aussi si mon livre est déjà publié ?",
    a: "Oui. Si ton polar est déjà en ligne mais qu’il “dort” sur les plateformes, tu peux utiliser la formation pour relancer proprement : optimiser ta fiche Amazon, remettre à plat ton réseau (street team, chroniqueurs, lecteurs), travailler ta preuve sociale et dérouler un plan 90 jours pour redonner une vraie visibilité à ton livre."
  },
  {
    q: "Combien de temps dois-je prévoir chaque semaine ?",
    a: "Le plan est conçu pour être modulable. Tu peux suivre la formation avec : un profil “15 minutes par jour” (micro-actions guidées), un profil “1 heure par jour”, ou “1 demi-journée par semaine” en mode batch. Les goodies et le Plan de Guerre 90 jours t’aident à choisir ton niveau d’intensité sans culpabiliser."
  },
  {
    q: "Est-ce que c’est uniquement valable pour le polar/thriller ?",
    a: "Tout est pensé pour le noir : exemples, scripts, listes de groupes, mots-clés Amazon, psychologie des couvertures, etc. Si tu écris de la romance ou de la fantasy, certaines briques resteront utiles, mais la formation est optimisée pour les auteur·rices de polar, thriller et roman noir."
  },
  {
    q: "Que vais-je concrètement obtenir en plus du contenu théorique ?",
    a: "Tu reçois une série de goodies actionnables : blueprints, checklists, tableurs, fiches à remplir, scripts de messages, fichiers de suivi, listes de mots-clés, laboratoires de résumés, plan de guerre 90 jours, etc. L’idée est que tu n’aies pas à repartir d’une page blanche à chaque étape."
  },
  {
    q: "Y a‑t‑il des vidéos dans la formation ?",
    a: "La première version de la formation est 100% basée sur des documents, fiches, checklists et outils pratiques. Les vidéos arriveront dans une prochaine mise à jour. Toutes les personnes qui ont déjà acheté la formation auront accès à ces vidéos, et à toutes les mises à jour futures, gratuitement à vie."
  },
  {
    q: "Pendant combien de temps ai-je accès à la formation ?",
    a: "L’accès est prévu comme durable : tu peux revenir sur les modules et les outils à chaque nouveau lancement (ou relancement) de polar/thriller. Et toutes les futures mises à jour (ajouts de contenus, vidéos, nouveaux outils) sont incluses gratuitement pour les personnes qui ont déjà acheté la formation."
  },
  {
    q: "Comment se passe le paiement ? Puis-je payer en plusieurs fois ?",
    a: "Le paiement est géré de manière sécurisée via une solution de paiement professionnelle (Stripe). Le paiement en 3 fois est possible : tu choisis l’option qui te convient au moment du règlement, directement sur la page de paiement."
  },
  {
    q: "Et si je manque de temps en plein milieu des 90 jours ?",
    a: "Le Plan de Guerre 90 jours est un cadre, pas une prison. Tu peux ralentir le rythme, reprendre une phase plus tard, ou te concentrer uniquement sur les “actions essentielles” si tu n’as plus de bande passante. L’idée est de t’aider à avancer, pas de te mettre une pression supplémentaire."
  },
  {
    q: "Je n’ai pas encore fini d’écrire mon livre, est‑ce pour moi ?",
    a: "Oui, c’est même le meilleur moment. Tu construis ta visibilité pendant l’écriture pour être prêt·e le jour J, au lieu d’attendre le dernier chapitre pour te poser la question « et maintenant, je fais quoi ? »."
  },
  {
    q: "Je suis nul·le en technique / pub, est‑ce que je vais suivre ?",
    a: "Tout est guidé. Les outils (templates, checklists, fichiers à remplir) font 80% du travail technique pour toi. Tu suis les étapes, tu coches, tu adaptes à ton cas : pas besoin d’être marketeur ou geek."
  },
  {
    q: "Je n’ai pas beaucoup de temps, est‑ce réaliste ?",
    a: "Oui. Le plan est adaptable : de 15 minutes par jour à une demi‑journée par semaine. Tu choisis ton « mode » et tu avances à ton rythme ; ce qui compte, c’est la régularité, pas la perfection."
  },
  {
    q: "Est‑ce réservé à l’autoédition ou aussi aux auteurs en maison ?",
    a: "C’est pour les deux. Même en maison d’édition, l’auteur moderne doit aujourd’hui savoir gérer sa propre communauté, ses lecteurs et sa visibilité. La formation t’aide à prendre en main cette partie, quel que soit ton mode de publication."
  }
];

export const DRIVE_FOLDER = "https://drive.google.com/drive/folders/1G9grASJgCql96ARQ7RHSj864Fe7sqNFg?usp=sharing";

export const PULSENOIR_LINKS = {
  main: "https://pulsenoir.be/",
  group: "https://www.facebook.com/groups/pulsenoir",
  studio: "https://studio.pulsenoir.be/",
  biblio: "https://bibliopulse.com/",
  instagram: "https://www.instagram.com/pulsenoirbe/"
};

export const COURSE_MODULES: ModuleContent[] = [
  {
    id: 'fondations',
    title: "Module 1 : L'ADN de l'Auteur de Noir",
    subtitle: "Positionnement Radical & Domination de Niche",
    description: "Posez les bases professionnelles indispensables : positionnement, chiffres et lecteur cible.",
    duration: "1h 45",
    bullets: [
      "La Pyramide de Visibilité : Bâtir son écosystème",
      "Le 'Lecteur Avatar' : Profilage psychologique profond",
      "L'Audit de Niche : Polar, Thriller ou Noir ?",
      "La Promesse d'Auteur : Ce que vous vendez au-delà des mots"
    ],
    icon: Target,
    color: "red",
    imageKeyword: "strategy",
    longDescription: "Ce module est la pierre angulaire de votre carrière. Nous allons transformer votre approche 'amateur' en une stratégie 'auteur-entrepreneur'. On ne lance pas un livre au hasard, on construit un écosystème de vente.",
    chapters: [
      {
        title: "1. Construire progressivement son Écosystème",
        type: "text",
        content: [
          "Pour un nouvel auteur, le plus efficace est de construire progressivement une présence cohérente. Cela commence par le choix d'une niche ultra-précise. Ne cherchez pas à plaire à tout le monde, cherchez à devenir indispensable pour quelques-uns.",
          "Plutôt que de viser la masse anonyme, l'objectif est de bâtir une 'forteresse de visibilité' brique par brique. Chaque interaction, chaque post et chaque mail doit renforcer votre image de spécialiste du noir.",
          "La Loi des 1000 Fans : Pourquoi vous n'avez pas besoin de millions de vues, mais de 1000 lecteurs ultra-engagés qui achètent tout ce que vous produisez."
        ]
      },
      {
        title: "La Stratégie de l'Infiltration",
        type: "key-concept",
        content: [
          "L'erreur fatale du débutant est de hurler 'ACHETEZ MON LIVRE' dans le vide. Le professionnel, lui, s'infiltre. Il se rend visible là où ses lecteurs dorment déjà : dans les groupes de fans, les blogs spécialisés et les communautés comme Bibliopulse.",
          "On ne construit pas une audience en un jour, mais on peut construire une base solide en 90 jours avec de la méthode."
        ]
      },
      {
        title: "Exercice : Définir sa Promesse de Noir",
        type: "exercise",
        content: [
          "Quel est le 'frisson' spécifique que vous apportez ? Est-ce le malaise psychologique ? L'adrénaline de la traque ? Le réalisme brut du polar social ?",
          "Remplissez votre fiche 'ADN Auteur' disponible dans les ressources pour définir votre angle d'attaque unique."
        ]
      }
    ],
    resources: [
      { title: "Blueprint : Écosystème Auteur 2026", type: "pdf", url: DRIVE_FOLDER },
      { title: "Calculateur : Rentabilité (Ventes vs Pubs)", type: "sheet", url: DRIVE_FOLDER },
      { title: "Template : Fiche Avatar Lecteur Psychologique", type: "template", url: DRIVE_FOLDER },
      { title: "Checklist : Les 10 Piliers de l'Auteur Pro", type: "checklist", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'identite',
    title: "Module 2 : L'Identité Numérique Magnétique",
    subtitle: "Bâtir son Hub et son Aura d'Auteur",
    description: "Rendez votre profil identifiable et crédible en ligne pour attirer instantanément l'œil du lecteur.",
    duration: "1h 15",
    bullets: [
      "Psychologie de la Bio Auteur : Convertir en 3 secondes",
      "Le Hub Central : Votre quartier général (Amazon vs Site)",
      "L'Art du Storytelling Personnel : Quoi dire sans s'exposer",
      "Le Lead Magnet : Offrir l'ombre pour vendre la lumière"
    ],
    icon: UserCircle,
    color: "red",
    imageKeyword: "identity",
    longDescription: "Votre identité numérique est votre vitrine 24h/24. Ce module vous apprend à structurer vos réseaux pour qu'ils convertissent les curieux en acheteurs compulsifs.",
    chapters: [
      {
        title: "L'Anatomie d'une Bio qui Tue",
        type: "text",
        content: [
          "Structure de conversion : [Accroche Choc] + [Preuve Sociale/Univers] + [Appel à l'action clair].",
          "Pourquoi votre photo de profil doit être cohérente avec votre genre."
        ]
      }
    ],
    resources: [
      { title: "Pack Graphique : Bannières Auteur Noir", type: "template", url: DRIVE_FOLDER },
      { title: "Générateur : Bio Instagram Haute-Tension", type: "template", url: DRIVE_FOLDER },
      { title: "Guide : Setup de Newsletter en 15 minutes", type: "pdf", url: DRIVE_FOLDER },
      { title: "Checklist : Audit de Présence Digitale", type: "checklist", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'social',
    title: "Module 3 : Le Réseau d'Influence Noir",
    subtitle: "Infiltration et Engagement Communautaire",
    description: "Construisez votre réseau de visibilité auprès des chroniqueurs et des communautés de lecteurs.",
    duration: "1h 50",
    bullets: [
      "L'Algorithme du Noir : Ce qui fait réagir les fans",
      "Calendrier de Guerre : 3 types de posts essentiels",
      "L'Infiltration : Approcher les blogueurs avec élégance",
      "La Puissance de Bibliopulse pour votre visibilité"
    ],
    icon: Share2,
    color: "red",
    imageKeyword: "social",
    longDescription: "Nous allons voir comment automatiser 80% de votre présence sociale pour vous laisser le temps d'écrire, tout en créant une interaction authentique.",
    chapters: [
      {
        title: "Infiltrer les Groupes de Lecteurs",
        type: "text",
        content: [
          "Ne postez jamais votre lien de vente en premier. Apportez de la valeur d'abord.",
          "La technique du 'Cheval de Troie' pour susciter l'intérêt."
        ]
      }
    ],
    resources: [
      { title: "Fichier : 50 Accroches de Posts Spécial Thriller", type: "sheet", url: DRIVE_FOLDER },
      { title: "Template : Calendrier Éditorial 2026", type: "template", url: DRIVE_FOLDER },
      { title: "Scripts : Approche Chroniqueurs (Copy/Paste)", type: "sheet", url: DRIVE_FOLDER },
      { title: "Liste : Groupes & Comptes Lecteurs Polar/Thriller", type: "pdf", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'cercle',
    title: "Module 4 : L'Ingénierie de la Preuve Sociale",
    subtitle: "Street Team, Bêta-lecture & Machine à Avis",
    description: "Obtenez des retours et des avis structurés pour déclencher le bouche-à-oreille dès le premier jour.",
    duration: "2h 10",
    bullets: [
      "La Street Team : Recruter et motiver vos soldats",
      "Protocole de Bêta-lecture : Améliorer le marketing",
      "Chasse aux Avis : Stratégies Amazon & Babelio",
      "L'Art du Service de Presse (SP) Gagnant-Gagnant"
    ],
    icon: Users,
    color: "red",
    imageKeyword: "community",
    longDescription: "La preuve sociale est le SEUL moteur de vente organique puissant. Ce module vous montre comment orchestrer une sortie de livre fracassante.",
    chapters: [
      {
        title: "Bâtir sa Street Team de A à Z",
        type: "text",
        content: [
          "Recrutez vos 20-50 lecteurs les plus fidèles.",
          "Le système de récompense immatériel."
        ]
      }
    ],
    resources: [
      { title: "Contrat : (Informel) de la Street Team", type: "template", url: DRIVE_FOLDER },
      { title: "Questionnaire : Bêta-lecture Stratégique", type: "template", url: DRIVE_FOLDER },
      { title: "Pack : 10 Mails de Relance Avis Lecteurs", type: "sheet", url: DRIVE_FOLDER },
      { title: "Fichier de Suivi : Chroniqueurs & Avis", type: "sheet", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'ventes',
    title: "Module 5 : La Chirurgie du Best-Seller",
    subtitle: "Copywriting de Thriller & Amazon Ads",
    description: "Optimisez votre fiche produit et vos publicités pour transformer les clics en ventes.",
    duration: "2h 30",
    bullets: [
      "Copywriting Hypnotique : Le résumé en 3 actes",
      "Design de Couverture : Codes visuels du Thriller",
      "Amazon Ads : Ciblage chirurgical de vos concurrents",
      "L'Ingénierie du Titre et du Sous-titre SEO"
    ],
    icon: TrendingUp,
    color: "red",
    imageKeyword: "sales",
    longDescription: "C'est ici que l'argent se gagne. Nous allons décortiquer les mécanismes psychologiques qui poussent au clic.",
    chapters: [
      {
        title: "Le Résumé 'Haute Tension'",
        type: "text",
        content: [
          "Le 'Hook' : La première phrase qui doit faire mal.",
          "Utilisation des 'Power Words' du thriller."
        ]
      }
    ],
    resources: [
      { title: "Swipe File : 50 Résumés de Best-Sellers", type: "pdf", url: DRIVE_FOLDER },
      { title: "Liste : 1000 Mots-Clés Amazon Ads Polar", type: "sheet", url: DRIVE_FOLDER },
      { title: "Kit : Carte ADN d’un Best-Seller Noir", type: "checklist", url: DRIVE_FOLDER },
      { title: "Guide : Psychologie des Couvertures Noir", type: "pdf", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'bonus',
    title: "Module 6 : Le Plan de Guerre (90 Jours)",
    subtitle: "Exécution Tactique & Maintenance de Carrière",
    description: "Orchestrez concrètement votre lancement jour après jour sur les 3 prochains mois.",
    duration: "1h 30",
    bullets: [
      "Compte à Rebours Lancement (J-30 à J+30)",
      "Routine Quotidienne de l'Auteur-Entrepreneur",
      "Gestion de la Liste Email : Votre trésor caché",
      "Strategie Multi-Série : Vivre de sa plume"
    ],
    icon: Map,
    color: "red",
    imageKeyword: "roadmap",
    longDescription: "La formation se termine, mais votre carrière commence. Ce plan d'action vous donne une direction claire pour les 90 prochains jours.",
    chapters: [
      {
        title: "Le Pipeline de Vente Continu",
        type: "text",
        content: [
          "Pourquoi votre newsletter est plus importante que Facebook.",
          "Comment récolter des emails dès la première page."
        ]
      }
    ],
    resources: [
      { title: "Checklist : Plan de Guerre 90 Jours : Lancement Polar Total", type: "checklist", url: DRIVE_FOLDER }
    ]
  }
];