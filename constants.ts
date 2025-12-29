
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
  instagram: "https://www.instagram.com/pulsenoirbe/"
};

// Guide de mapping pour n8n / Automation
export const AUTOMATION_GUIDE = {
  stripe_trigger: "checkout.session.completed",
  supabase_table: "utilisateurs",
  mapping: [
    { source: "customer_details.email", target: "email", type: "string" },
    { source: "fixed_value: true", target: "acces_formation", type: "boolean" },
    { source: "auto_generated", target: "id", type: "uuid" }
  ]
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
    longDescription: "Ce module est la pierre angulaire de ta carrière d’auteur de noir. Il pose les bases de ton écosystème : ce que tu promets à tes lecteurs, comment tu te positionnes, et comment tu construis une présence cohérente au lieu de “publier dans le vide”. À la fin, tu auras une vision claire de ton ADN d’auteur et des briques à mettre en place.",
    steps: [
      "Lire la partie « Construire progressivement son écosystème ».",
      "Faire l’exercice « Définir sa Promesse de Noir ».",
      "Télécharger et remplir les 4 outils du Pack Bonus du module."
    ],
    transitionTitle: "Mettre en pratique avec les outils du module",
    transitionText: "Une fois que tu as lu cette page et répondu à l’exercice sur ta Promesse de Noir, passe aux outils ci‑dessous. Ils te servent à concrétiser ton ADN d’auteur : ton écosystème, ton calcul de rentabilité, ton lecteur cible et tes piliers pro.",
    transitionButtonText: "Descendre vers les outils",
    chapters: [
      {
        title: "Construire progressivement son écosystème",
        type: "text",
        expectedResult: "À la fin de cette section, tu sais ce que tu cherches à construire : un écosystème d’auteur de noir, pas seulement un livre isolé.",
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
        title: "Définir sa Promesse de Noir",
        type: "exercise",
        guidedQuestions: [
          "Quel type de frisson veux-tu provoquer (malaise psychologique, tension d’enquête, horreur, noir social…) ?",
          "Quels sont 3 auteurs de noir/thriller dont la promesse te parle le plus, et pourquoi ?",
          "Si un lecteur devait résumer ton univers en une phrase après plusieurs livres, quelle phrase aimerais-tu qu’il dise ?"
        ],
        content: [
          "Quel est le 'frisson' spécifique que vous apportez ? Est-ce le malaise psychologique ? L'adrénaline de la traque ? Le réalisme brut du polar social ?",
          "Note tes réponses dans tes notes ET dans les outils du Pack Bonus (Blueprint + Fiche Avatar)."
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
    longDescription: "Ton identité numérique est ta vitrine 24h/24. Ce module t’aide à rendre tes profils (Instagram, Facebook, etc.) cohérents avec ton univers de noir, mémorables, et capables de transformer les curieux en vrais lecteurs. À la fin, tu auras une bio qui accroche, une image claire, et des profils alignés avec ton polar/thriller.",
    steps: [
      "Lire la section « L’anatomie d’une bio qui tue ».",
      "Faire l’audit rapide de tes profils actifs.",
      "Utiliser les outils du Pack Bonus pour créer/mettre à jour ta bio, tes bannières et ton setup newsletter."
    ],
    transitionTitle: "Mettre en pratique avec les outils du module",
    transitionText: "Une fois que tu as lu cette page et répondu à l’audit et à l’exercice sur ta bio, passe aux outils ci‑dessous. Ils t’aident à concrétiser ton identité numérique : pack de bannières auteur noir, générateur de bio haute‑tension, guide setup newsletter en 15 minutes et checklist d’audit de présence digitale.",
    transitionButtonText: "Descendre vers les outils",
    chapters: [
      {
        title: "L’anatomie d’une bio qui tue",
        type: "text",
        expectedResult: "À la fin de cette section, tu sais exactement comment construire une bio qui donne envie de te suivre et de découvrir tes livres.",
        content: [
          "Structure de conversion : Accroche Choc + Preuve Sociale/Univers + Appel à l’action clair.",
          "Pourquoi votre photo de profil doit être cohérente avec votre genre.",
          "Chaque caractère compte : sur les réseaux sociaux, vous avez environ 3 secondes pour prouver que vous valez la peine d'être suivi par un fan de thriller."
        ]
      },
      {
        title: "Audit express de ton identité numérique",
        type: "key-concept",
        content: [
          "Avant de tout refaire, prends 5 minutes pour regarder tes profils avec un œil neuf, comme si tu étais un lecteur qui ne te connaît pas.",
          "Est-ce qu’en 3 secondes on comprend que tu écris du polar/thriller ?",
          "Ta bio mentionne‑t‑elle clairement ton genre et ton univers ?",
          "Tes visuels (photo, bannière) respirent‑ils ton ambiance (noir, urbain, rural, psychologique…) ?",
          "Est-ce qu’il y a un lien clair vers ton livre ou ta newsletter ?",
          "Si tu étais un lecteur, aurais‑tu envie de scroller et de suivre ce compte ?",
          "Note tes réponses dans tes notes ou dans la checklist du pack bonus."
        ]
      },
      {
        title: "Exercice : Réécrire ta bio magnétique",
        type: "exercise",
        guidedQuestions: [
          "Version courte (Instagram / bio courte) : ________",
          "Version plus longue (site, Amazon, quatrième) : ________",
          "Phrase de pitch noir/thriller à intégrer : ________"
        ],
        content: [
          "À partir de la structure bio + de ton audit, réécris une version courte et une version longue de ta bio auteur. Utilise ton générateur de bio dans le pack bonus si tu veux un coup de main."
        ]
      }
    ],
    resources: [
      { title: "Pack graphique : Bannières Auteur Noir", type: "template", url: DRIVE_FOLDER },
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
    longDescription: "Dans ce module, tu apprends à construire ton réseau d’influence noir : groupes de lecteurs, chroniqueurs, réseaux sociaux. Le but : automatiser jusqu’à 80% de ta présence tout en gardant des interactions authentiques, pour te laisser du temps pour écrire.",
    steps: [
      "Lire la section « Infiltrer les groupes de lecteurs ».",
      "Noter 3–5 groupes / communautés où tu pourrais t’infiltrer.",
      "Utiliser les outils du Pack Bonus pour planifier tes posts, approcher les chroniqueurs et cartographier ton réseau."
    ],
    transitionTitle: "Mettre en pratique avec les outils du module",
    transitionText: "Une fois que tu as lu cette page, cartographié ton réseau et défini ton plan d’infiltration sur 30 jours, passe aux outils ci‑dessous. Ils t’aident à rendre tout ça concret : 50 accroches de posts spécial thriller, un calendrier éditorial prêt à remplir, des scripts d’approche chroniqueurs et une liste de groupes & comptes lecteurs polar/thriller.",
    transitionButtonText: "Descendre vers les outils",
    chapters: [
      {
        title: "Infiltrer les groupes de lecteurs",
        type: "text",
        expectedResult: "À la fin de cette section, tu sais comment entrer dans un groupe de lecteurs sans passer pour un spammeur, et comment amener naturellement ton livre dans la conversation.",
        content: [
          "Ne postez jamais votre lien de vente en premier. Apportez de la valeur d’abord.",
          "La technique du “Cheval de Troie” pour susciter l’intérêt.",
          "Interagir avec les autres membres, répondre aux questions, partager ses propres lectures : c'est ainsi que l'on devient une figure familière et respectée du clan."
        ]
      },
      {
        title: "Cartographier ton réseau d’influence noir",
        type: "key-concept",
        content: [
          "Avant d’utiliser les outils, liste les lieux où ton livre peut rencontrer ses lecteurs : groupes Facebook, comptes Instagram, chroniqueurs, blogs, chaînes YouTube…",
          "3 groupes de lecteurs polar/thriller à infiltrer : ________",
          "3 chroniqueurs / comptes que tu aimerais approcher : ________",
          "2–3 blogs, podcasts ou chaînes YouTube alignés avec ton univers : ________",
          "Tu pourras ensuite reporter ces idées dans le fichier de suivi et le calendrier éditorial du pack bonus."
        ]
      },
      {
        title: "Exercice : Ton plan d’infiltration sur 30 jours",
        type: "exercise",
        guidedQuestions: [
          "Groupes de lecteurs : dans quels groupes interviens‑tu chaque semaine ? (ex. 2 commentaires de valeur, 1 post par semaine)",
          "Réseaux sociaux : quels types de posts liés à ton livre / à ton univers vas‑tu publier ? (stories, extraits, coulisses, jeux…)",
          "Chroniqueurs : combien de nouveaux contacts par semaine ?"
        ],
        content: [
          "Pour éviter de faire tout et n’importe quoi, définis un plan simple d’actions sur 30 jours : où tu interviens, à quelle fréquence, et avec quel type de contenu.",
          "Tu peux détailler ce plan dans le Template Calendrier Éditorial 2026 du pack bonus."
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
    longDescription: "La preuve sociale est le moteur de vente organique le plus puissant : avis, chroniques, bouche‑à‑oreille. Ce module te montre comment préparer ta street team, organiser la bêta‑lecture et orchestrer une sortie de livre qui génère naturellement des retours.",
    steps: [
      "Lire la section « Bâtir sa Street Team de A à Z ».",
      "Décider qui tu veux dans ta street team (liste courte).",
      "Utiliser les outils du pack bonus pour formaliser la relation, organiser les bêta‑lectures et suivre les avis."
    ],
    transitionTitle: "Mettre en pratique avec les outils du module",
    transitionText: "Une fois que tu as défini ta street team idéale et ton organisation de bêta‑lecture, passe aux outils ci‑dessous. Ils t’aident à formaliser l’accord moral, structurer les retours, relancer les avis sans être lourd et suivre précisément qui a chroniqué quoi.",
    transitionButtonText: "Descendre vers les outils",
    chapters: [
      {
        title: "Bâtir sa street team de A à Z",
        type: "text",
        expectedResult: "À la fin de cette section, tu sais à quoi sert une street team, qui y inviter, et comment la récompenser sans exploser ton budget.",
        content: [
          "Recrutez vos 20–50 lecteurs les plus fidèles.",
          "Le système de récompense immatériel : accès anticipé, coulisses de l'écriture, remerciements dans les crédits.",
          "Une street team n'est pas un groupe de fans passifs, c'est une force d'intervention rapide pour vos avis et votre visibilité."
        ]
      },
      {
        title: "Qui recruter, comment les approcher ?",
        type: "key-concept",
        content: [
          "La street team doit être composée de lecteurs motviés (pas toute ta famille).",
          "Clarifier l’accord dès le départ : ce que tu offres (avant-première, bonus) et ce que tu demandes (avis honnête, partage).",
          "5 personnes de ton entourage lecteur à qui tu pourrais proposer la street team : ________",
          "5 lecteurs rencontrés via groupes / réseaux : ________",
          "Message d’invitation type (à adapter) → renvoi au Contrat informel dans le pack bonus."
        ]
      },
      {
        title: "Organiser la bêta‑lecture et les avis",
        type: "exercise",
        guidedQuestions: [
          "À qui j’envoie le Questionnaire de Bêta‑lecture Stratégique ?",
          "À quel moment je déclenche le Pack de 10 mails de relance ? (avant / pendant / après lancement)",
          "Où je note qui a reçu quoi ? → renvoi au Fichier de Suivi Chroniqueurs & Avis."
        ],
        content: [
          "Distinguer bêta‑lecteurs (fond du livre) et street team (visibilité).",
          "Donner un cadre clair : délai indicatif de lecture, type de retour attendu.",
          "Préparer dès maintenant les futures demandes d’avis pour ne pas être pris de court au lancement."
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
    longDescription: "C’est ici que se joue une grande partie du potentiel de ventes : titre, résumé, couverture, positionnement. Dans ce module, on décortique les mécaniques des best‑sellers thriller/polar pour renforcer l’ADN de ton propre livre et écrire un résumé qui déclenche le clic.",
    steps: [
      "Lire la section « Le résumé haute tension ».",
      "Choisir un best‑seller noir/thriller à analyser.",
      "Utiliser les outils du pack bonus pour analyser, décortiquer et réécrire ton propre résumé."
    ],
    transitionTitle: "Mettre en pratique avec les outils du module",
    transitionText: "Une fois que tu as compris ce qui fait la force d’un résumé et analysé un best‑seller, passe aux outils ci‑dessous. Ils t’aident à décortiquer en profondeur 50 résumés, à construire une base de 1000 mots‑clés Amazon Ads polar/thriller, à cartographier l’ADN d’un best‑seller noir et à travailler la psychologie de ta couverture.",
    transitionButtonText: "Descendre vers les outils",
    chapters: [
      {
        title: "Le résumé haute tension",
        type: "text",
        expectedResult: "À la fin de cette section, tu comprends comment ouvrir ton résumé avec un hook fort et l’alimenter avec un vocabulaire qui donne une couleur thriller/polar nette.",
        content: [
          "Le “Hook” : la première phrase qui doit faire mal. C'est l'hameçon qui doit capturer l'attention du lecteur en une fraction de seconde.",
          "Utilisation des “power words” du thriller. Le vocabulaire employé doit évoquer la tension, le mystère et l'urgence dès les premiers mots."
        ]
      },
      {
        title: "Décortiquer un best-seller noir",
        type: "key-concept",
        content: [
          "Choisis un best‑seller de ton genre et passe‑le sur la table d’opération : quelle est son accroche, quel est son enjeu, comment se termine le résumé, quelle promesse de lecture est faite ?",
          "Quelle est la situation de départ présentée en 1–2 phrases ?",
          "Quel est l’événement perturbateur mis en avant ?",
          "Quel est l’enjeu principal (ce que le héros risque) ?",
          "Quelle est la dernière phrase crochet du résumé ?",
          "Tu peux répondre à ces questions dans le Swipe File : Laboratoire de Résumés de Thrillers et dans le Kit : Carte ADN d’un Best‑Seller Noir."
        ]
      },
      {
        title: "Réécrire ton résumé comme un best-seller",
        type: "exercise",
        guidedQuestions: [
          "Hook (1 phrase) : ________",
          "Résumé complet (3–5 phrases) : ________",
          "Dernière phrase crochet : ________"
        ],
        content: [
          "À partir de ce que tu as observé, réécris ton propre résumé en version “haute tension”. Concentre‑toi sur une accroche forte, un enjeu clair et une dernière phrase qui donne envie de cliquer.",
          "Tu peux t’aider des gabarits et formules du Swipe File : Laboratoire de Résumés de Thrillers."
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
    longDescription: "La formation se termine, mais ta carrière commence. Ce module te donne un plan d’action sur 90 jours pour lancer ton polar/thriller sans te perdre : quoi faire, dans quel ordre, et avec quel niveau d’intensité.",
    steps: [
      "Lire la section « Le pipeline de vente continu ».",
      "Choisir ton niveau d’intensité (15 min/jour, 1 h/jour, ou 1 demi‑journée par semaine).",
      "Utiliser la checklist Plan de Guerre 90 Jours pour planifier concrètement ton lancement."
    ],
    transitionTitle: "Mettre en pratique avec le Plan de Guerre",
    transitionText: "Maintenant que tu connais la logique du pipeline de vente continu et des 3 phases, télécharge la checklist 90 jours ci‑dessous. Elle te donne, semaine après semaine, les actions essentielles à mener pour lancer ton polar : préparation, lancement, consolidation. Choisis ton niveau d’intensité et coche au fur et à mesure.",
    transitionButtonText: "Descendre vers l'outil",
    chapters: [
      {
        title: "Le pipeline de vente continu",
        type: "text",
        expectedResult: "À la fin de cette section, tu comprends pourquoi tout le plan de guerre vise à construire une base d’emails de lecteurs plutôt que de dépendre uniquement des algorithmes.",
        content: [
          "Pourquoi ta newsletter est plus importante que Facebook.",
          "How to harvest emails from the first page (backmatter, bonus, etc.).",
          "Le but ultime n'est pas seulement de vendre un livre, mais de posséder le lien direct avec ton audience pour tes lancements futurs."
        ]
      },
      {
        title: "Choisir ton niveau d’intensité",
        type: "key-concept",
        content: [
          "Le plan de guerre est modulable. Tu peux l’appliquer en mode léger ou en mode commando. L’important est de choisir une cadence réaliste que tu peux tenir.",
          "Profil 1 : 15 minutes par jour – 1 micro‑action par jour (ex. 1 message à un lecteur, 1 post, 1 mail).",
          "Profil 2 : 1 heure par jour – séquence type (20 min réseaux, 20 min contacts, 20 min suivi/stats).",
          "Profil 3 : 1 demi‑journée par semaine – tout regrouper (programmation posts, mails, relances).",
          "La checklist 90 jours te propose un cadre que tu peux adapter à l’un de ces trois profils."
        ]
      },
      {
        title: "Les 3 phases du Plan de Guerre",
        type: "key-concept",
        content: [
          "Phase 1 : Préparation (J‑30 à J‑1) – optimiser la fiche Amazon, préparer les contenus, mobiliser street team et chroniqueurs.",
          "Phase 2 : Lancement (J0 à J+30) – concentrer l’attention, obtenir les premiers avis, tester pubs/visibilité.",
          "Phase 3 : Consolidation (J+31 à J+90) – maintenir la présence, exploiter les avis, préparer le livre suivant.",
          "La checklist Plan de Guerre 90 Jours détaille semaine par semaine les actions proposées dans un cadre tactique précis."
        ]
      }
    ],
    resources: [
      { title: "Checklist : Plan de Guerre 90 Jours : Lancement Polar Total", type: "checklist", url: DRIVE_FOLDER }
    ]
  }
];
