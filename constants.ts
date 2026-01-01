
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
  MousePointer2,
  Shield,
  Search,
  Crosshair,
  Repeat,
  PenTool,
  Brain,
  Layout,
  Palette,
  Type,
  Video,
  Briefcase,
  Rocket
} from 'lucide-react';
import { ModuleContent } from './types';

export const INSTRUCTOR = {
  name: "Benjamin de Bruijne",
  role: "Fondateur de Pulsenoir - Visibilité Noir & Thriller",
  photo: "https://raw.githubusercontent.com/benspy2209/propulseurs/b432764d6f2f27df0da85a57446329dd5abb426a/public/benjamin.jpg",
  hoverPhoto: "https://raw.githubusercontent.com/benspy2209/propulseurs/b9ec43f7844ebe6793b9d56d94145fcee25e39db/public/pulsemanprofilf.jpg",
  quote: "« Aider les auteurs de noir à ne pas laisser leurs livres disparaître dans l'ombre des plateformes. »",
  bioBlocks: [
    "En 2026, j’ai vu la même scène se répététer : des auteur·rices de polar, thriller, roman noir qui ont travaillé dur on leur livre… et qui se retrouvent bloqué·es au moment de le faire connaître. Pas de méthode, pas de plan, et trop souvent cette phrase : “Mon livre ne se vend pas.” C’est pour cela que j’ai créé Pulsenoir et cette Intervention : pour vous donner un plan concret, adapté à votre genre, loin des généralités marketing habituelles.",
    "Lecteur passionné de noir depuis 35 ans et expert du web depuis 20 ans, j'ai conçu des méthodes dédiées à ce milieu très spécifique. La méthode « AUTEUR INVISIBLE » est la synthèse de cette expertise : une obsession simple – que votre livre trouve ses lecteurs, en s'appuyant on les mécaniques réelles de la communauté Noir & Thriller."
  ]
};

export const INSTRUCTOR_STATS = [
  { value: "35 ans", label: "LECTEUR PASSIONNÉ DE NOIR, POLAR & THRILLER" },
  { value: "20 ans", label: "D'EXPERTISE WEB, DEV & STRATÉGIE DIGITALE" },
  { value: "1500+", label: "MEMBRES DU CLAN PULSE NOIR (FACEBOOK)" },
  { value: "350", label: "AUTEUR·RICES PRÉSENTS DANS LE CLAN" }
];

export const FAQ_ITEMS = [
  {
    q: "Cette opération est-elle vraiment réservée au Polar et au Thriller ?",
    a: "Oui. Chaque instrument, chaque mot-clé et chaque module de relance est injecté de l'ADN 'Noir'. On ne relance pas un thriller comme on vend de la romance. C’est cette spécialisation qui fait l'efficacité de l'Intervention."
  },
  {
    q: "Mon livre est déjà publié longtemps, est-ce utile ?",
    a: "C’est l'objectif même de l'Intervention AUTEUR INVISIBLE. Nous diagnostiquons ce qui bloque on votre livre existant, nous réparons la vitrine et nous orchestrons une séquence de relance stratégique."
  },
  {
    q: "Je n'aime pas la technique, vais-je m'en sortir ?",
    a: "L'Intervention évite tout jargon inutile. Tout est traduit en actions de correction concrètes : des instruments de diagnostic, des modèles de messages et des fichiers de suivi prêts à l'emploi."
  },
  {
    q: "Combien de temps dois-je y consacrer ?",
    a: "Vous choisissez votre intensité : de 15 min par jour pour les corrections légères à une demi-journée par semaine pour une relance complète. L'important est d'appliquer les corrections méthodiquement."
  },
  {
    q: "Et si je réalise que l'opération ne me convient pas ?",
    a: "Vous bénéficiez d'une garantie de 10 jours. Si après avoir exploré les premiers modules de diagnostic vous estimez que l'approche ne vous correspond pas, un simple mail suffit."
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

export const AUTHOR_TOOLBOX = [
  {
    id: "writing",
    title: "ÉCRITURE & STRUCTURATION",
    icon: PenTool,
    items: [
      { name: "studio.pulsenoir.be", url: "https://studio.pulsenoir.be", internal: true },
      { name: "Scrivener", url: "https://www.literatureandlatte.com/scrivener/overview" },
      { name: "Google Docs", url: "https://docs.google.com" },
      { name: "Notion", url: "https://www.notion.so" },
      { name: "Ulysses", url: "https://ulysses.app" },
      { name: "LibreOffice Writer", url: "https://www.libreoffice.org" },
      { name: "Manuskript", url: "https://www.theologeek.ch/manuskript" },
      { name: "FocusWriter", url: "https://gottcode.org/focuswriter" },
      { name: "Obsidian", url: "https://obsidian.md" },
      { name: "LivingWriter", url: "https://livingwriter.com" }
    ]
  },
  {
    id: "correction",
    title: "CORRECTION & STYLE",
    icon: Brain,
    items: [
      { name: "Antidote", url: "https://www.antidote.info" },
      { name: "LanguageTool", url: "https://languagetool.org" },
      { name: "ProWritingAid", url: "https://prowritingaid.com" },
      { name: "Grammarly", url: "https://www.grammarly.com" },
      { name: "MerciApp", url: "https://www.merci-app.com" },
      { name: "Scribens", url: "https://www.scribens.fr" }
    ]
  },
  {
    id: "layout",
    title: "MISE EN PAGE & EXPORT",
    icon: Layout,
    items: [
      { name: "Reedsy Book Editor", url: "https://reedsy.com/write-a-book" },
      { name: "Vellum", url: "https://vellum.pub" },
      { name: "Adobe InDesign", url: "https://www.adobe.com/products/indesign.html" },
      { name: "Calibre", url: "https://calibre-ebook.com" },
      { name: "Atticus", url: "https://www.atticus.io" },
      { name: "Papyrus Author", url: "https://www.papyrusauthor.com" }
    ]
  },
  {
    id: "design",
    title: "COUVERTURE & DESIGN",
    icon: Palette,
    items: [
      { name: "Canva", url: "https://www.canva.com" },
      { name: "Adobe Photoshop", url: "https://www.adobe.com/products/photoshop.html" },
      { name: "Affinity Designer", url: "https://affinity.serif.com/designer" },
      { name: "GIMP", url: "https://www.gimp.org" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "Leonardo AI", url: "https://leonardo.ai" },
      { name: "Stable Diffusion", url: "https://stability.ai" },
      { name: "BookBrush", url: "https://bookbrush.com" }
    ]
  },
  {
    id: "copywriting",
    title: "4E & COPYWRITING",
    icon: Type,
    items: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Jasper", url: "https://www.jasper.ai" },
      { name: "Writesonic", url: "https://writesonic.com" },
      { name: "Copy.ai", url: "https://www.copy.ai" },
      { name: "Anyword", url: "https://anyword.com" }
    ]
  },
  {
    id: "video",
    title: "PROMOTION & VIDÉO",
    icon: Video,
    items: [
      { name: "CapCut", url: "https://www.capcut.com" },
      { name: "Canva Video", url: "https://www.capcanva.com/video-editor" },
      { name: "InShot", url: "https://inshot.com" },
      { name: "Adobe Premiere Pro", url: "https://www.adobe.com/products/premiere.html" },
      { name: "Descript", url: "https://www.descript.com" }
    ]
  },
  {
    id: "productivity",
    title: "ORGANISATION",
    icon: Briefcase,
    items: [
      { name: "Trello", url: "https://trello.com" },
      { name: "Todoist", url: "https://todoist.com" },
      { name: "ClickUp", url: "https://clickup.com" },
      { name: "Asana", url: "https://asana.com" },
      { name: "Evernote", url: "https://evernote.com" }
    ]
  },
  {
    id: "distribution",
    title: "PUBLICATION",
    icon: Rocket,
    items: [
      { name: "Amazon KDP", url: "https://kdp.amazon.com" },
      { name: "Draft2Digital", url: "https://www.draft2digital.com" },
      { name: "Kobo Writing Life", url: "https://www.kobo.com/writinglife" },
      { name: "IngramSpark", url: "https://www.ingramspark.com" },
      { name: "Lulu", url: "https://www.lulu.com" }
    ]
  }
];

export const COURSE_MODULES: ModuleContent[] = [
  {
    id: 'fondations',
    title: "Module 1 — Diagnostic de l’Invisibilité",
    subtitle: "Identifier précisément ce qui empêche votre polar déjà publié de se vendre",
    description: "Transformez le flou en diagnostic clair pour comprendre pourquoi votre livre ne trouve pas son public.",
    duration: "1h 45",
    bullets: [
      "Repérer les ruptures de signal technique et vitrine",
      "Identifier votre lecteur réel et sa psychologie",
      "Vérifier la lisibilité de votre positionnement",
      "Constater l’état réel de votre crédibilité visible"
    ],
    icon: Target,
    color: "red",
    imageKeyword: "diagnostic",
    longDescription: "Votre polar est publié. Vous avez investi du temps, de l’énergie, parfois de l’argent. Pourtant, il reste invisible : peu ou pas de ventes, peu ou pas de signaux qui remontent. Ce module a un objectif unique : transformer ce flou en diagnostic clair. Vous allez regarder votre livre non plus comme son auteur, mais comme un analyste qui cherche où le signal se casse entre votre texte et le lecteur. Ce module n’est pas là pour rassurer, il est là pour mesurer. Vous allez passer en revue, point par point, la présence de votre livre sur le marché : disponibilité technique, qualité de la vitrine, clarté du positionnement, cohérence du prix, quantité et qualité des preuves sociales, mais aussi adéquation avec votre lecteur réel. À la fin, vous surez pourquoi votre livre est invisible aujourd’hui et où intervenir en priorité dans les modules suivants.",
    steps: [
      "Préparez l’accès à vos fiches produits (Amazon, Kobo, Fnac, autres plateformes).",
      "Téléchargez et ouvrez l’Audit de l’Invisibilité (Ressource 1).",
      "Téléchargez et ouvrez le Profilage du Lecteur Réel (Ressource 2).",
      "Téléchargez et ouvrez le Positionnement de Niche : Polar, Thriller ou Noir ? (Ressource 3).",
      "Téléchargez et ouvrez la Stratégie de Rassurance – Mur de crédibilité (Ressource 4).",
      "Procédez au scan clinique sans complaisance : d’abord l’état objectif de votre livre, ensuite votre lecteur réel, puis votre niche, enfin la solidité de vos preuves de crédibilité."
    ],
    transitionTitle: "Établissez votre diagnostic",
    transitionText: "Ce module pose le diagnostic. Tant qu’il n’est pas fait, toutes les idées de relance ou de pub restent des paris au hasard.",
    transitionButtonText: "Accéder aux instruments",
    chapters: [
      {
        title: "Ce que vous allez corriger dans ce module",
        type: "key-concept",
        expectedResult: "Une compréhension chirurgicale des freins de votre livre.",
        content: [
          "À la fin du Module 1, vous serez capable de :",
          "• Repérer les ruptures de signal : problèmes techniques, fiches incomplètes, vitrine peu claire, mauvais choix de catégories ou de prix.",
          "• Identifier votre lecteur réel et vérifier si votre livre lui parle vraiment dans la forme où il est présenté aujourd’hui.",
          "• Vérifier si votre positionnement de niche (polar, thriller, noir et sous-genre) est livible pour un lecteur qui ne vous connaît pas.",
          "• Constater l’état réel de votre crédibilité visible : avis, chroniques, éléments de preuve, ou au contraire “mur de silence”, puis structurer un mur de crédibilité à afficher.",
          "Ce module pose le diagnostic. Tant qu’il n’est pas fait, toutes les idées de relance ou de pub restent des paris au hasard."
        ]
      },
      {
        title: "Module pratique – Utilisation des ressources",
        type: "exercise",
        expectedResult: "Diagnostic complet et identification des 3 zones rouges prioritaires.",
        guidedQuestions: [
          "Quels sont les trois points de rupture techniques immédiats qui ressortent de l’audit ?",
          "Qui est exactement votre lecteur réel, et votre vitrine lui parle-t-elle vraiment ?",
          "Votre genre et votre sous-niche sont-ils livibles pour un lecteur de polar/thriller ?",
          "De quelles preuves de crédibilité visibles dispose un lecteur qui arrive on votre fiche aujourd’hui, et que manque-t-ils à votre mur de crédibilité ?",
          "Quel est votre score final d’invisibilité et quelles sont vos trois zones rouges ?"
        ],
        content: [
          "Pour travailler ce module, vous disposez de quatre documents téléchargeables :",
          "• Ressource 1 – Audit de l’Invisibilité : Scan complet de la situation : checklists, tableaux, score d’invisibilité et trois zones rouges prioritaires.",
          "• Ressource 2 – Profilage du Lecteur Réel : Fiche “acheteur instinctif” : portrait, habitudes de lecture polar/thriller, attentes, peurs et déclencheurs d’achat.",
          "• Ressource 3 – Positionnement de Niche : Polar, Thriller ou Noir ? : Fiche de positionnement : genre principal, sous-niche précise, auteurs comparables et cohérences / incohérences avec ta vitrine actuelle.",
          "• Ressource 4 – Stratégie de Rassurance : Construire votre mur de crédibilité : Inventaire de toutes vos preuves, sélection des avis forts, extraction de citations et assemblage d’un mur de crédibilité prêt à être affiché on vos fiches et bios.",
          "Prenez ces PDF comme un examen clinique : répondez honnêtement, sans chercher à vous justifier. Le but n’est pas de juger votre travail d’auteur, mais d’identifier les points de rupture entre un livre écrit… et un livre visible, rassurant et crédible pour le bon lecteur, dans la bonne niche."
        ]
      },
      {
        title: "Le Verdict Final",
        type: "text",
        expectedResult: "Base stratégique pour les modules 2 à 6.",
        content: [
          "Quand ce module est terminé, vous devez pouvoir formuler en une phrase :",
          "“Mon livre est invisible principalement parce que ___, ___ et ___.”",
          "Cette phrase, appuyée par vos quatre ressources, devient le point de départ de toutes les corrections à venir : vitrine, crédibilité, relance, algorithmes et trajectoire long terme."
        ]
      }
    ],
    resources: [
      { title: "Ressource 1 — Audit de l’Invisibilité", type: "pdf", url: DRIVE_FOLDER },
      { title: "Ressource 2 — Profilage du Lecteur Réel", type: "template", url: DRIVE_FOLDER },
      { title: "Ressource 3 — Positionnement de Niche : Polar, Thriller ou Noir ?", type: "template", url: DRIVE_FOLDER },
      { title: "Ressource 4 — Stratégie de Rassurance : Votre Mur de Crédibilité", type: "checklist", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'vitrine',
    title: "Module 2 — Réparer la vitrine du livre",
    subtitle: "Intervention on cover, titre et 4e",
    description: "Correction technique de votre vitrine pour lever les doutes et déclencher enfin le clic de l'acheteur.",
    duration: "1h 15",
    bullets: [
      "Psychologie du Clic : Réparer la 4ème de couv",
      "Codes Visuels : Chasser les signaux 'Amateurs'",
      "Hook Haute-Tension : Captiver dès la première ligne de votre 4e de couverture et de votre page produit.",
      "Signal d'Achat : Convertir le lecteur méfiant"
    ],
    icon: BookOpen,
    color: "red",
    imageKeyword: "repair",
    longDescription: "Vous allez aborder votre livre comme un produit en rayon. Plus de “j’aime / j’aime pas”, mais une seule question : est-ce que cette vitrine donne envie à mon lecteur réel, dans ma niche, de risquer son temps et son argent ? À la fin du module, vous aurez une 4e de couverture resserrée, une première impression plus pro, et une vitrine cohérente avec le diagnostic du Module 1. Votre texte existe déjà. Ce qui bloque maintenant, c’est la vitrine : ce que voit le lecteur avant même de lire une ligne. Couverture, titre, sous-titre, 4e de couverture et premières lignes de la page produit décident en quelques secondes si un lecteur clic… ou passe au suivant. Ce module vise une chose : corriger techniquement cette vitrine pour lever les doutes et déclencher enfin le clic de l’acheteur méfiant.",
    steps: [
      "Utilisez la Ressource 2 pour passer votre couverture au crible des codes visuels.",
      "Utilisez la Ressource 1 pour transformer votre 4e actuelle en outil de décision.",
      "Utilisez la Ressource 3 pour travailler spécifiquement votre première ligne.",
      "Utilisez la Ressource 4 pour vérifier l'ensemble de votre fiche produit."
    ],
    transitionTitle: "Restaurez votre vitrine",
    transitionText: "Ce module intervient uniquement on l’enveloppe visible de votre livre, là où se joue la majorité des décisions d’achat.",
    transitionButtonText: "Accéder aux instruments",
    chapters: [
      {
        title: "Ce que vous allez corriger dans ce module",
        type: "key-concept",
        expectedResult: "Une vitrine qui convertit le lecteur méfiant.",
        content: [
          "À la fin du Module 2, vous serez capable de :",
          "• Voir votre 4e de couverture comme un outil de décision, et pas comme un résumé littéraire, puis la réécrire pour qu’elle réponde aux attentes et déclencheurs d’achat de votre lecteur réel.",
          "• Détecter et éliminer les signaux “amateurs” dans votre couverture (composition, typographie, codes de genre) qui font fuir un lecteur de polar/thriller avant même qu’il lise le titre.",
          "• Créer un hook haute-tension en première ligne de 4e / de description, qui capte l’attention en moins de trois secondes.",
          "• Ajuster les éléments-clés de votre fiche (titre, sous-titre, mentions, citations) pour envoyer un signal d’achat clair : “ce livre est pour toi, c’est un pari raisonnable”.",
          "Ce module ne touche pas à votre texte intérieur. Il intervient uniquement on l’enveloppe visible de votre livre."
        ]
      },
      {
        title: "Module pratique – Les instruments d’intervention",
        type: "text",
        expectedResult: "Maîtrise des instruments de conversion visuelle.",
        content: [
          "Pour travailler ce module, vous utiliserez quatre instruments :",
          "• Ressource 1 — Psychologie du Clic – Réparer votre 4e de couverture : Vous transformez votre 4e actuelle en un texte orienté lecteur : promesse claire, enjeu livible, tension, éléments de crédibilité, au lieu d’un résumé flou ou littéraire.",
          "• Ressource 2 — Codes Visuels Polar/Thriller – Chasser les signaux “amateurs” : Vous passez votre couverture au crible des codes de votre niche (polar, thriller, noir) afin d’identifier ce qui fait “autoédition bricolée” et ce qui, au contraire, rassure immédiatement.",
          "• Ressource 3 — Hook Haute-Tension – La première ligne qui arrête le lecteur : Vous travaillez spécifiquement la première phrase de votre 4e et de votre page produit pour qu’elle arrête le regard, crée une question, et pousse à lire le reste.",
          "• Ressource 4 — Signal d’Achat – Vérifier que ta vitrine donne envie de cliquer : Vous vérifiez que l’ensemble de la fiche (titre, sous-titre, 4e, citations, éléments de rassurance issus du Module 1) fonctionne comme un ensemble cohérent qui donne envie de cliquer on “Acheter”."
        ]
      },
      {
        title: "Questions de diagnostic pour valider le module",
        type: "exercise",
        expectedResult: "Validation finale de la vitrine réparée.",
        guidedQuestions: [
          "Un lecteur qui ne vous connaît pas peut-il dire en une phrase quel type de polar/thriller vous proposez, rien qu’en voyant la couverture et la première ligne de la 4e ?",
          "Votre couverture ressemble-t-elle à ce qu’on trouve dans les rayons pro de votre sous-niche, ou continue-t-elle à envoyer des signaux “premier essai amateur” ?",
          "Votre 4e de couverture répond-elle aux attentes et déclencheurs d’achat de votre lecteur réel, tels que définis dans le Module 1 ?",
          "Si vous comparez votre fiche à celles de 3 livres concurrents, auriez-vous envie de cliquer on la vôtre ?"
        ],
        content: [
          "Quand ces questions appellent enfin des “oui” honnêtes, vous pouvez considérer que la vitrine de votre polar a été réparée et qu’elle est prête pour la relance et la réactivation des algorithmes."
        ]
      }
    ],
    resources: [
      { title: "Ressource 1 — Psychologie du Clic – Réparer votre 4e de couverture", type: "template", url: DRIVE_FOLDER },
      { title: "Ressource 2 — Codes Visuels Polar/Thriller – Chasser les signaux “amateurs”", type: "template", url: DRIVE_FOLDER },
      { title: "Ressource 3 — Hook Haute-Tension – La première ligne qui arrête le lecteur", type: "pdf", url: DRIVE_FOLDER },
      { title: "Ressource 4 — Signal d’Achat – Vérifier que ta vitrine donne envie de cliquer", type: "checklist", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'identite',
    title: "Module 3 — Restaurer votre crédibilité d’auteur",
    subtitle: "Nettoyage et repositionnement de présence",
    description: "Reprenez le contrôle de votre image numérique pour devenir lisible et crédible aux yeux du Clan.",
    duration: "1h 50",
    bullets: [
      "Psychologie de la Bio : Convertir le visiteur en 3s",
      "Le Hub Auteur : Votre quartier général professionnel",
      "Infiltration Stratégique : Être là où le Clan palpite",
      "Aura Numérique : Restaurer la confiance"
    ],
    icon: UserCircle,
    color: "red",
    imageKeyword: "authority",
    longDescription: "Votre livre n’est pas seulement jugé on sa couverture. Il est aussi jugé on vous : votre nom, votre bio, votre page auteur, votre manière d’apparaître (ou non) dans l’écosystème noir/polar/thriller. Si votre présence numérique est floue, absente ou “amateur”, le lecteur et les algorithmes en déduisent une chose simple : pari risqué. Ce module a pour but de réparer cette image pour que votre profil d’auteur cesse de saboter vos efforts de relance. Après avoir diagnostiqué l’invisibilité (Module 1) et réparé la vitrine du livre (Module 2), vous allez maintenant vous occuper de la vitrine de l’auteur : bio, hub central, lieux où vous apparaissez, signaux de sérieux et de constance. L’objectif n’est pas de devenir une “marque personnelle” abstraite, mais de paraître livible, crédible et cohérent pour un lecteur qui découvre votre nom pour la première fois.",
    steps: [
      "Récupérez ce que vous avez déjà : bio(s), pages auteur, profils réseaux, site ou blog, pages on plateformes (Amazon, Kobo, Fnac, Babelio…).",
      "Clarifiez qui vous êtes pour le lecteur polar/thriller à partir de votre diagnostic et de votre niche (Modules 1 et 2).",
      "Reconcevez une bio courte et une bio longue orientées “rassurance” lecteur.",
      "Posez ou ajustez votre Hub Auteur : un point central où tout converge (page auteur, mini-site, page dédiée).",
      "Décidez où vous devez être présent dans le “Clan” (lecteurs, groupes, médias, événements) et ce que vous y montrez."
    ],
    transitionTitle: "Restaurez votre crédibilité",
    transitionText: "Votre livre ne sera plus porté par une vitrine solide (Module 2) posée on une identité floue, mais par un ensemble cohérent : auteur livible, livre livible, niche livible.",
    transitionButtonText: "Accéder aux instruments",
    chapters: [
      {
        title: "Ce que vous allez corriger dans ce module",
        type: "key-concept",
        expectedResult: "Bio d’auteur polarisée, Hub Auteur clair, et nettoyage des profils existants.",
        content: [
          "À la fin du Module 3, vous serez capable de :",
          "• Écrire une bio d’auteur polarisée : en 3 secondes, le lecteur comprend qui vous êtes, ce que vous écrivez, et pourquoi vous êtes légitime dans cette niche.",
          "• Mettre en place un Hub Auteur clair (page auteur / mini-site) qui rassemble vos livres, vos preuves de crédibilité et vos points de contact, au lieu de tout laisser éparpillé.",
          "• Choisir les bons terrains d’infiltration : groupes, communautés, événements et plateformes où se trouve réellement votre lectorat noir/polar/thriller.",
          "• Nettoyer vos profils existants pour qu’ils renvoient tous la même image professionnelle, cohérente avec le mur de crédibilité construit au Module 1.",
          "Ce module ne vous demande pas d’être partout ni tout le temps. Il vous demande d’être livible là où ça compte, pour ne plus perdre des lecteurs potentiels au moment où ils se renseignent on vous."
        ]
      },
      {
        title: "Module pratique – Les instruments d’intervention",
        type: "text",
        expectedResult: "Mise en œuvre des instruments de crédibilité.",
        content: [
          "Pour travailler ce module, vous utiliserez quatre instruments (ressources téléchargeables) :",
          "• Psychologie de la Bio : Convertir le visiteur en 3 secondes. Vous reformulez vos bios (courte, moyenne, longue) pour qu’elles parlent au lecteur de polar/thriller : genre, univers, légitimité, ton, en évitant les formulations floues et génériques.",
          "• Le Hub Auteur : Votre quartier général professionnel. Vous concevez le plan de votre “maison d’auteur” : quelles sections, quels liens, quelles preuves y afficher pour qu’un lecteur ou un libraire comprenne en un coup d’œil qui vous êtes et ce que vous écrivez.",
          "• Infiltration Stratégique : Être là où le Clan palpite. Vous cartographiez les lieux où se trouvent vos lecteurs et vos pairs (groupes, festivals, médias, communautés en ligne) et vous décidez où vous allez réellement vous investir, with quel type de présence.",
          "• Aura Numérique : Audit et nettoyage de vos profils. Vous passez vos profils existants (Amazon, réseaux, Babelio, etc.) au crible et vous listez toutes les corrections à faire pour qu’aucun ne renvoie une image contradictoire, vide ou amateur."
        ]
      },
      {
        title: "Questions de diagnostic",
        type: "exercise",
        expectedResult: "Validation de la crédibilité d'auteur.",
        guidedQuestions: [
          "Un lecteur qui tombe on votre nom pour la première fois peut-il dire en une phrase qui vous êtes et quel type de polar/thriller vous écrivez ?",
          "Existe-t-il un endroit central où il peut voir vos livres, vos preuves de crédibilité et vos liens sans devoir fouiller partout ?",
          "Vos différents profils (plateformes, réseaux, pages auteur) racontent-ils la même histoire ou donnent-ils des versions contradictoires de vous ?",
          "Êtes-vous présent, même modestement, là où votre lectorat se trouve vraiment, ou restez-vous cantonné à des endroits où personne ne cherche de polar ?"
        ],
        content: [
          "Quand ces questions obtiennent des réponses claires, vous pouvez considérer que votre crédibilité d’auteur est restaurée au niveau minimum pro."
        ]
      }
    ],
    resources: [
      { title: "Psychologie de la Bio : Convertir le visiteur en 3 secondes", type: "template", url: DRIVE_FOLDER },
      { title: "Le Hub Auteur : Votre quartier général professionnel", type: "sheet", url: DRIVE_FOLDER },
      { title: "Infiltration Stratégique : Être là où le Clan palpite", type: "pdf", url: DRIVE_FOLDER },
      { title: "Aura Numérique : Audit et nettoyage de vos profils", type: "pdf", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'cercle',
    title: "Module 4 — Relancer un livre invisible",
    subtitle: "Orchestration de la séquence de relance",
    description: "Mobilisez votre Clan initial pour forcer les algorithmes à reconsidérer votre livre déjà publié.",
    duration: "2h 10",
    bullets: [
      "Protocole du Clan : Mobiliser vos membres fidèles",
      "Opération Avis : Sortir du désert Amazon",
      "Relance Tactique : Le timing de la seconde chance",
      "Service de Presse : Correction de trajectoire avis"
    ],
    icon: Users,
    color: "red",
    imageKeyword: "relaunch",
    longDescription: "Votre polar est déjà publié. Il a eu une sortie timide, peu structurée, ou il a simplement disparu dans le flux. Ce module existe pour une seule chose : organiser une vraie opération de relance autour de ce livre, comme s’il bénéficiait enfin du lancement qu’il n’a jamais eu. Il ne s’agit pas de “faire un peu plus de posts”, mais de dérouler une séquence précise qui envoie un signal fort au lecteur, aux algorithmes et à votre Clan.\n\nAprès le diagnostic (Module 1), la réparation de la vitrine (Module 2) et la restauration de votre crédibilité d’auteur (Module 3), vous allez maintenant mettre tout cela en mouvement. L’objectif : concentrer vos efforts on une période courte, pour créer un pic de visibilité livible par les plateformes et générer de nouveaux avis, de nouveaux clics, de nouveaux lecteurs.",
    steps: [
      "Choisissez un livre cible : un polar/thriller déjà publié que vous voulez sortir de l’oubli en priorité.",
      "Fixez une fenêtre de relance (10 à 14 jours) pendant laquelle vous acceptez de concentrer vos actions on ce livre.",
      "Mobilisez votre Clan existant (lecteurs, proches, communauté, newsletter) avec une démarche claire : “opération seconde chance” autour de ce titre.",
      "Lancez une Opération Avis pour sortir du désert et renforcer votre mur de crédibilité.",
      "Déployez une Relance Tactique jour par jour : contenus, rappels, offres ponctuelles éventuelles.",
      "Envoyez un Service de Presse ciblé à des relais pertinents (blogs, chroniqueurs, bookstagram, médias spécialisés) en cohérence with votre niche."
    ],
    transitionTitle: "Actionnez la relance",
    transitionText: "Le diagnostic et la réparation sont faits. Passez à l'action coordonnée with ces instruments de relance.",
    transitionButtonText: "Accéder aux instruments",
    chapters: [
      {
        title: "Ce que vous allez corriger dans ce module",
        type: "key-concept",
        expectedResult: "Passer d’un livre “posé sur les plateformes” à un livre porté par une campagne de relance structurée.",
        content: [
          "À la fin du Module 4, vous serez capable de :",
          "• Passer d’un livre “posé sur les plateformes” à un livre porté par une campagne de relance structurée.",
          "• Activer votre Clan sans gêne ni mendicité : avec des messages précis, limités dans le temps, qui donnent envie d’aider.",
          "• Sortir du désert d’avis et enclencher une dynamique de preuves sociales visibles sur les fiches produit.",
          "• Utiliser un service de presse post-publication comme un instrument stratégique, pas comme une tentative désespérée.",
          "Ce module ne vous demande pas d’être omniprésent. Il vous demande d’être intentionnel : choisir un livre, un créneau de relance, des actions claires, puis les exécuter sans dispersion."
        ]
      },
      {
        title: "Module pratique – Comment utiliser les instruments de relance",
        type: "text",
        expectedResult: "Maîtrise des protocoles de mobilisation et de service de presse.",
        content: [
          "Pour dérouler cette opération, vous utiliserez quatre instruments (ressources) :",
          "• Protocole du Clan – Mobiliser vos membres fidèles : Vous planifiez ce que vous demandez à votre entourage et à votre communauté (lecteurs existants, groupe Pulse Noir, newsletter) : quel message, à quel moment, avec quel lien. L’idée est de transformer une bonne volonté diffuse en actions concrètes (avis, partages, commentaires, participation à une promo).",
          "• Opération Avis – Sortir du désert Amazon : Vous dressez la liste des personnes que vous pouvez légitimement solliciter, vous notez qui a déjà lu, qui pourrait lire, et vous organisez vos demandes d’avis dans le temps. L’objectif : atteindre un niveau d’avis qui rassure un lecteur inconnu et déclenche mieux les algorithmes.",
          "• Relance Tactique – Le timing de la seconde chance : Vous construisez un mini-calendrier de 10 à 14 jours autour de votre livre : quels posts, quels emails, quels rappels, quels extraits, quels signaux mettre en avant et à quel moment. Vous arrêtez “l’impro quotidienne” pour adopter un plan clair.",
          "• Service de Presse – Correction de trajectoire avis : Vous créez un pack propre (mail, fiche, éléments clés) pour proposer votre livre à des chroniqueurs et médias ciblés, même s’il est déjà sorti. Le but : obtenir quelques chroniques structurantes qui nourriront votre mur de crédibilité et vos futures communications."
        ]
      },
      {
        title: "Questions de diagnostic",
        type: "exercise",
        expectedResult: "Validation de la Relance.",
        guidedQuestions: [
          "Votre livre cible a-t-il, pour la première fois, une fenêtre de relance définie avec un début, un milieu et une fin clairs ?",
          "Pouvez-vous nommer au moins 10 personnes ou relais que vous avez contactés dans le cadre de l’Opération Avis et/ou du Service de Presse ?",
          "Avez-vous publié / envoyé une suite de contenus cohérents (et non des posts isolés) pendant la période de relance ?",
          "À la fin de ce module, pouvez-vous constater au moins un changement concret : nouveaux avis, nouvelles ventes, nouveaux lecteurs entrés dans votre écosystème ?"
        ],
        content: [
          "Si vous pouvez répondre honnêtement “oui” à ces questions, votre livre n’est plus un simple fichier oublié : il a bénéficié d’une vraie intervention de relance, et vous avez un protocole que vous pourrez réutiliser pour vos prochains titres."
        ]
      }
    ],
    resources: [
      { title: "Protocole du Clan : Mobiliser vos membres fidèles", type: "template", url: DRIVE_FOLDER },
      { title: "Opération Avis : Sortir du désert Amazon", type: "template", url: DRIVE_FOLDER },
      { title: "Relance Tactique : Le timing de la seconde chance", type: "sheet", url: DRIVE_FOLDER },
      { title: "Service de Presse : Correction de trajectoire avis", type: "sheet", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'ventes',
    title: "Module 5 — Réactiver les algorithmes",
    subtitle: "Signaux de visibilité et relance des ventes",
    description: "Ce module montre comment utiliser la psychologie de l’acheteur et les leviers techniques des plateformes (surtout Amazon) pour déclencher un nouveau cycle de ventes, sans repartir de zéro à chaque livre.",
    duration: "2h 30",
    bullets: [
      "Amazon Ads : Ciblage chirurgical des concurrents",
      "SEO Amazon : Réparer vos Mots-clés et Titres",
      "Déclencheur d'Achat : Activer la visibilité",
      "Ads Diagnostic : Tester votre nouvelle vitrine"
    ],
    icon: TrendingUp,
    color: "red",
    imageKeyword: "algorithm",
    longDescription: "C’est le module de réactivation. Le Module 5 sert à réactiver les algorithmes en s’appuyant sur les signaux que vous avez déjà remis en place dans les modules précédents (vitrine, crédibilité, relance). On utilise la publicité Amazon comme un scalpel, pas comme un arrosoir. L'objectif est de transformer votre livre réparé et relancé en un actif qui tourne grâce aux algorithmes, en corrigeant les failles de mots-clés et en installant des déclencheurs d'achat clairs.",
    steps: [
      "Diagnostic SEO : Repérez les failles de mots-clés et de titres qui empêchent votre livre d’être trouvé.",
      "Activation du Crochet : Installez un déclencheur d’achat clair et visible sur votre fiche produit.",
      "Test micro-Ads : Lancez une campagne de diagnostic pour tester votre nouvelle vitrine avec un budget maîtrisé.",
      "Interprétation des chiffres : Apprenez à lire les données (impressions, clics, ventes) pour prendre des décisions rationnelles."
    ],
    transitionTitle: "Relancez la machine",
    transitionText: "Utilisez ces instruments techniques pour forcer la visibilité et réactiver vos courbes de ventes.",
    transitionButtonText: "Accéder aux instruments",
    chapters: [
      {
        title: "La Logique du Signal",
        type: "key-concept",
        expectedResult: "Compréhension des mécanismes de visibilité algorithmique.",
        content: [
          "On n’achète pas la visibilité : on nourrit des algorithmes avec des signaux cohérents (clics, conversions, avis, temps de lecture), déclenchés par un positionnement clair et une fiche crédible.",
          "Ce module utilise la pub et le SEO comme un après‑coup du travail déjà fait (diagnostic, vitrine, crédibilité, relance), pas comme un pansement qui masquerait une fiche bancale."
        ]
      },
      {
        title: "Les Instruments de Réactivation",
        type: "text",
        expectedResult: "Maîtrise des outils Amazon Ads et SEO.",
        content: [
          "Utilisez vos 4 nouveaux instruments pour passer de la pub “au hasard” à une visibilité ciblée.",
          "• Amazon Ads : Ciblage chirurgical des concurrents. Fiche de travail pour choisir vos cibles, structurer vos campagnes et suivre vos résultats.",
          "• SEO Amazon : Réparer vos mots‑clés et titres. Diagnostic de votre fiche et optimisation des back-end keywords.",
          "• Déclencheur d’achat : Activer la visibilité. Travaillez votre phrase‑crochet et vos éléments de singularité pour arrêter le regard du lecteur.",
          "• Ads Diagnostic : Tester votre nouvelle vitrine. Feuille de route pour lancer de petites campagnes‑tests, lire les chiffres essentiels (impressions, clics, conversions) et en déduire quoi ajuster sur votre fiche ou vos ciblages avant d’augmenter les budgets."
        ]
      },
      {
        title: "La Grille d'Interprétation",
        type: "exercise",
        expectedResult: "Capacité à diagnostiquer les performances publicitaires.",
        guidedQuestions: [
          "Bon taux d’impressions mais très peu de clics → Quel est le problème de votre couverture ?",
          "Beaucoup de clics mais peu de ventes → Comment est perçue votre fiche produit (avis, prix, 4e) ?",
          "Très peu d’impressions → Vos enchères ou vos mots‑clés sont-ils pertinents ?",
          "Quelle décision prenez-vous pour votre vitrine avant de relancer une campagne ?"
        ],
        content: [
          "Utilisez de petites campagnes de publicité comme outil de diagnostic de la fiche et non comme solution magique de ventes.",
          "Le tableau de suivi vous permettra de noter ce que disent les chiffres : impressions, clics, taux de clic, conversions approximatives.",
          "Prenez vos décisions après test : que changer sur la vitrine avant de réinvestir ?"
        ]
      }
    ],
    resources: [
      { title: "Amazon Ads : Ciblage chirurgical des concurrents", type: "sheet", url: DRIVE_FOLDER },
      { title: "SEO Amazon : Réparer vos mots‑clés et titres", type: "sheet", url: DRIVE_FOLDER },
      { title: "Déclencheur d’achat : Activer la visibilité", type: "template", url: DRIVE_FOLDER },
      { title: "Ads Diagnostic : Tester votre nouvelle vitrine", type: "checklist", url: DRIVE_FOLDER }
    ]
  },
  {
    id: 'bonus',
    title: "Module 6 — Sortir durablement de l’invisibilité",
    subtitle: "Bâtir votre rampe de lancement de carrière",
    description: "Construisez le système qui sécurise vos succès futurs et transforme chaque livre en moteur de croissance.",
    duration: "1h 30",
    bullets: [
      "Protocole Pipeline : Capturer chaque lecteur anonyme",
      "Plan de Relance 90 Jours : L'opération continue"
    ],
    icon: Repeat,
    color: "red",
    imageKeyword: "legacy",
    longDescription: "Votre polar n’est plus invisible, mais rien n’est encore acquis. Ce module existe pour une chose : construire le système qui transforme chaque nouveau lecteur en contact durable et chaque sortie de livre en marche supplémentaire de votre carrière. Il ne s’agit plus seulement de réparer un titre ou de relancer une fiche, mais d’installer une mécanique qui continue à tourner quand vous écrivez le prochain roman. À la fin de ce module, vous aurez une pipeline claire pour capturer les lecteurs anonymes et un plan de relance 90 jours pour éviter le retour au silence.",
    steps: [
      "Clarifiez votre objectif de carrière sur 12 à 24 mois : nombre de livres, séries, formats, temps disponible.",
      "Choisissez votre canal principal de capture (newsletter, communauté privée, plateforme auteur) et vos points d’entrée visibles sur chaque fiche livre.",
      "Mettez en place votre Protocole Pipeline : comment un lecteur qui découvre votre polar aujourd’hui peut s’abonner, recevoir une première séquence de bienvenue et rester dans votre écosystème.",
      "Construisez un Plan de Relance 90 jours qui synchronise écriture, communication et mises en avant de catalogue, pour que chaque trimestre comporte un mini‑événement autour de vos titres.",
      "Faites le lien entre vos modules précédents (diagnostic, vitrine, crédibilité, relance, algorithmes) et ce système de long terme, de manière à ce que chaque nouveau livre arrive sur une piste déjà balisée."
    ],
    transitionTitle: "Sécurisez votre avenir",
    transitionText: "L'opération touche à sa fin. Sécurisez vos acquis et construisez votre trajectoire with ces instruments de long terme.",
    transitionButtonText: "Accéder aux instruments",
    chapters: [
      {
        title: "Ce que vous allez corriger dans ce module",
        type: "key-concept",
        expectedResult: "Vision stratégique long terme et rituels de visibilité.",
        content: [
          "À la fin du Module 6, vous serez capable de :",
          "• Passer d’une logique de “coup de projecteur ponctuel” à une rampe de carrière où chaque livre nourrit les suivants.",
          "• Capturer vos lecteurs au moment précis où ils sont le plus chauds (après lecture, après une pub, après une promo) au lieu de les laisser repartir anonymes.",
          "• Organiser vos 90 prochains jours autour d’un petit nombre de rituels de visibilité réalistes, alignés sur votre temps d’écriture.",
          "• Réutiliser vos instruments des modules 3, 4 et 5 (mur de crédibilité, relances, ads) à l’intérieur d’un calendrier récurrent, plutôt que de tout réinventer à chaque fois."
        ]
      },
      {
        title: "2 instruments d’intervention du Module 6",
        type: "text",
        expectedResult: "Mise en place de la pipeline de capture et du calendrier 90 jours.",
        content: [
          "• Protocole Pipeline : Capturer chaque lecteur anonyme. Vous dessinez le trajet idéal d’un lecteur qui découvre votre polar : de la fiche Amazon à votre liste email ou votre communauté, puis à la découverte de vos autres livres. Vous identifiez vos points de capture (bonus, extraits, nouvelles, formulaires, liens en fin d’ebook) et vous structurez une courte séquence d’accueil qui transforme un lecteur isolé en membre de votre base.",
          "• Plan de Relance 90 jours : L’opération continue. Vous construisez un calendrier simple sur trois mois, avec des jalons précis : rappels autour de vos titres existants, mise en avant de preuves sociales, mini‑événements pour votre Clan, tests publicitaires ciblés. L’objectif : éviter le trou noir après une sortie et installer un rythme de visibilité régulier, compatible avec l’écriture du prochain manuscrit."
        ]
      },
      {
        title: "Question de diagnostic",
        type: "exercise",
        expectedResult: "Validation finale de votre autonomie stratégique.",
        guidedQuestions: [
          "Chaque nouveau lecteur qui termine un de vos polars a‑t‑il une proposition claire pour rester en contact avec vous (et la voit‑il vraiment) ?",
          "Pouvez‑vous montrer, noir sur blanc, ce qui est prévu pour vos livres sur les 90 prochains jours sans ouvrir les réseaux “au feeling” ?",
          "Êtes‑vous capable d’indiquer, pour chaque action de visibilité (relance, promo, pub), où elle mène votre lecteur dans votre pipeline ?"
        ],
        content: [
          "Si vous pouvez répondre honnêtement “oui” à ces questions, vous avez cessé de dépendre du hasard pour votre visibilité. Si la réponse est non à au moins une de ces questions, ce module devient votre chantier prioritaire pour sortir durablement de l’invisibilité."
        ]
      }
    ],
    resources: [
      { title: "Protocole : Le Pipeline de Vente", type: "checklist", url: DRIVE_FOLDER },
      { title: "Checklist : Opération Relance Durable 90 Jours", type: "checklist", url: DRIVE_FOLDER }
    ]
  }
];
