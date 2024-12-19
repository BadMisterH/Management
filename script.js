// Configuration du questionnaire
const config = {
    totalQuestions: 0,
    partOneQuestions: 13, // Nombre de questions dans la première partie
    partTwoQuestions: 4, // Nombre de questions dans la deuxième partie
    partThreeQuestions: 5, // Nombre de questions dans la troisième partie
    generations: {
        GenZ: { name: "Génération Z", yearRange: "1997-2012" },
        GenY: { name: "Génération Y (Millennials)", yearRange: "1981-1996" },
        GenX: { name: "Génération X", yearRange: "1965-1980" },
        Boomer: { name: "Baby Boomers", yearRange: "1946-1964" }
    }
};

// État du questionnaire
const quizState = {
    currentQuestionIndex: 0,
    userAnswers: [], // Stocke les réponses de l'utilisateur
    currentPart: 1, // Indique la partie actuelle du questionnaire
    userScores: {
        UserGenZ: 0,
        UserGenY: 0,
        UserGenX: 0,
        UserBoomer: 0
    },
    otherScores: {
        OtherGenZ: 0,
        OtherGenY: 0,
        OtherGenX: 0,
        OtherBoomer: 0
    }
};

// Questions du questionnaire
const questions = [
    // ------------------- PARTIE 1 -------------------
    {
        question: "Quel est votre mode de communication préféré au travail ?",
        answers: [
            { text: "Face à face", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 0, UserBoomer: 2 } },
            { text: "Téléphone", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 2, UserBoomer: 0 } },
            { text: "Email", points: { UserGenZ: 0, UserGenY: 2, UserGenX: 0, UserBoomer: 0 } },
            { text: "Messagerie instantanée", points: { UserGenZ: 2, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Quelle est votre approche du travail à distance ?",
        answers: [
            { text: "Je préfère travailler au bureau", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 0, UserBoomer: 2 } },
            { text: "Je suis ouvert au télétravail occasionnel", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 2, UserBoomer: 0 } },
            { text: "Je préfère un mélange de télétravail et de travail au bureau", points: { UserGenZ: 0, UserGenY: 2, UserGenX: 0, UserBoomer: 0 } },
            { text: "Je préfère travailler entièrement à distance", points: { UserGenZ: 2, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Comment préférez-vous apprendre de nouvelles compétences ?",
        answers: [
            { text: "Par des formations en présentiel", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 0, UserBoomer: 2 } },
            { text: "Par des formations en ligne", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 2, UserBoomer: 0 } },
            { text: "Par des tutoriels vidéo", points: { UserGenZ: 0, UserGenY: 2, UserGenX: 0, UserBoomer: 0 } },
            { text: "Par des applications interactives", points: { UserGenZ: 2, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Quel est votre rapport au travail en équipe ?",
        answers: [
            { text: "Je préfère travailler seul", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 0, UserBoomer: 2 } },
            { text: "Je préfère des réunions régulières", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 2, UserBoomer: 0 } },
            { text: "Je préfère des collaborations flexibles", points: { UserGenZ: 0, UserGenY: 2, UserGenX: 0, UserBoomer: 0 } },
            { text: "Je préfère des collaborations virtuelles", points: { UserGenZ: 2, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Quelle est votre attitude face aux nouvelles technologies ?",
        answers: [
            { text: "Je suis réticent à les adopter", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 1, UserBoomer: 2 } },
            { text: "Je les adopte progressivement", points: { UserGenZ: 0, UserGenY: 1, UserGenX: 2, UserBoomer: 0 } },
            { text: "Je suis enthousiaste à l'idée de les essayer", points: { UserGenZ: 1, UserGenY: 2, UserGenX: 0, UserBoomer: 0 } },
            { text: "Je suis toujours à la recherche des dernières innovations", points: { UserGenZ: 2, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Quel élément vous motive le plus dans votre travail ?",
        answers: [
            { text: "La stabilité financière et la sécurité de l’emploi", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 2, UserBoomer: 4 } },
            { text: "La reconnaissance de mes compétences et mes résultats", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 4, UserBoomer: 2 } },
            { text: "Un environnement de travail flexible et collaboratif", points: { UserGenZ: 0, UserGenY: 4, UserGenX: 0, UserBoomer: 0 } },
            { text: "L’équilibre entre vie personnelle et vie professionnelle", points: { UserGenZ: 5, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Comment considérez-vous les heures supplémentaires ?",
        answers: [
            { text: "Une preuve de dévouement", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 1, UserBoomer: 3 } },
            { text: "Une obligation pour atteindre les objectifs", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 3, UserBoomer: 1 } },
            { text: "Acceptables si elles sont reconnues", points: { UserGenZ: 1, UserGenY: 3, UserGenX: 0, UserBoomer: 0 } },
            { text: "Pas toujours nécessaires, il faut savoir équilibrer", points: { UserGenZ: 3, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Quels mots décrivent le mieux vos valeurs principales ?",
        answers: [
            { text: "Loyauté, respect, travail acharné", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 2, UserBoomer: 4 } },
            { text: "Indépendance, efficacité, pragmatisme", points: { UserGenZ: 0, UserGenY: 1, UserGenX: 4, UserBoomer: 1 } },
            { text: "Collaboration, épanouissement, engagement", points: { UserGenZ: 1, UserGenY: 4, UserGenX: 1, UserBoomer: 0 } },
            { text: "Innovation, authenticité, équilibre", points: { UserGenZ: 4, UserGenY: 2, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Quelle était votre manière de travailler en équipe dans vos premières expériences professionnelles ?",
        answers: [
            { text: "Suivre des instructions claires d'un leader", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 0, UserBoomer: 3 } },
            { text: "Prendre des initiatives tout en respectant les structures", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 3, UserBoomer: 0 } },
            { text: "Rechercher l'avis des collègues pour collaborer", points: { UserGenZ: 0, UserGenY: 3, UserGenX: 0, UserBoomer: 0 } },
            { text: "Utiliser des outils en ligne pour partager rapidement les idées", points: { UserGenZ: 3, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Quel style de leadership préférez-vous ?",
        answers: [
            { text: "Leadership hiérarchique et autoritaire", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 0, UserBoomer: 3 } },
            { text: "Leadership autonome et orienté résultats", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 3, UserBoomer: 0 } },
            { text: "Leadership participatif et collaboratif", points: { UserGenZ: 0, UserGenY: 3, UserGenX: 0, UserBoomer: 0 } },
            { text: "Leadership flexible et ouvert à l’innovation", points: { UserGenZ: 3, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Comment évaluiez-vous le succès personnel ?",
        answers: [
            { text: "Par des réalisations à long terme et la reconnaissance sociale", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 0, UserBoomer: 5 } },
            { text: "Par les accomplissements professionnels et personnels", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 5, UserBoomer: 0 } },
            { text: "Par la capacité à résoudre des problèmes innovants", points: { UserGenZ: 0, UserGenY: 5, UserGenX: 0, UserBoomer: 0 } },
            { text: "Par la liberté et l’épanouissement individuel", points: { UserGenZ: 5, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },
    {
        question: "Quel est votre rapport avec les outils numériques au travail ?",
        answers: [
            { text: "Vous préférez limiter leur usage sauf si indispensable", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 0, UserBoomer: 3 } },
            { text: "Vous les utilisez efficacement mais sans excès", points: { UserGenZ: 0, UserGenY: 0, UserGenX: 3, UserBoomer: 0 } },
            { text: "Vous les considérez comme un atout indispensable", points: { UserGenZ: 0, UserGenY: 3, UserGenX: 0, UserBoomer: 0 } },
            { text: "Vous les maîtrisez pleinement et cherchez à les optimiser", points: { UserGenZ: 3, UserGenY: 0, UserGenX: 0, UserBoomer: 0 } }
        ]
    },


    // ------------------- PARTIE 2 -------------------
    {
        question: "Quel est le principal problème de communication que vous rencontrez avec votre collègue ?",
        answers: [
            { text: "Manque de clarté dans les instructions", points: { OtherGenZ: 0, OtherGenY: 0, OtherGenX: 0, OtherBoomer: 1 } },
            { text: "Différences de priorités", points: { OtherGenZ: 0, OtherGenY: 0, OtherGenX: 1, OtherBoomer: 0 } },
            { text: "Différences de style de communication", points: { OtherGenZ: 0, OtherGenY: 1, OtherGenX: 0, OtherBoomer: 0 } },
            { text: "Manque de réactivité", points: { OtherGenZ: 1, OtherGenY: 0, OtherGenX: 0, OtherBoomer: 0 } }
        ]
    },
    {
        question: "Comment décririez-vous votre relation actuelle avec ce collègue ?",
        answers: [
            { text: "Cordiale mais distante", points: { OtherGenZ: 0, OtherGenY: 0, OtherGenX: 0, OtherBoomer: 1 } },
            { text: "Professionnelle mais tendue", points: { OtherGenZ: 0, OtherGenY: 0, OtherGenX: 1, OtherBoomer: 0 } },
            { text: "Amicale mais parfois conflictuelle", points: { OtherGenZ: 0, OtherGenY: 1, OtherGenX: 0, OtherBoomer: 0 } },
            { text: "Très proche mais avec des malentendus fréquents", points: { OtherGenZ: 1, OtherGenY: 0, OtherGenX: 0, OtherBoomer: 0 } }
        ]
    },
    {
        question: "Quelle est la principale difficulté que vous rencontrez avec cette personne ?",
        answers: [
            { text: "Elle semble résistante aux nouvelles idées", points: { OtherGenZ: 0, OtherGenY: 0, OtherGenX: 0, OtherBoomer: 5 } },
            { text: "Elle manque d’engagement ou de ponctualité", points: { OtherGenZ: 5, OtherGenY: 3, OtherGenX: 0, OtherBoomer: 0 } },
            { text: "Elle a du mal à s’adapter aux outils digitaux", points: { OtherGenZ: 0, OtherGenY: 0, OtherGenX: 3, OtherBoomer: 5 } },
            { text: "Elle ne communique pas clairement ses attentes", points: { OtherGenZ: 0, OtherGenY: 3, OtherGenX: 5, OtherBoomer: 0 } }
        ]
    },
    {
        question: "Comment décririez-vous son style de communication ?",
        answers: [
            { text: "Formelle et distante", points: { OtherBoomer: 5 } },
            { text: "Directe et pragmatique", points: { OtherGenX: 5 } },
            { text: "Collaborative mais parfois dispersée", points: { OtherGenY: 5 } },
            { text: "Rapide et souvent non verbale", points: { OtherGenZ: 5 } }
        ]
    },
    {
        question: "Quels sont ses centres d’intérêt ou priorités dans le travail ?",
        answers: [
            { text: "Réussir ses objectifs personnels", points: { OtherGenX: 5, OtherGenY: 3 } },
            { text: "Maintenir un bon équilibre entre vie pro et perso", points: { OtherGenZ: 5, OtherGenY: 3 } },
            { text: "Travailler en équipe sur des projets stimulants", points: { OtherGenY: 5, OtherGenZ: 3 } },
            { text: "Apprendre et se perfectionner", points: { OtherBoomer: 5, OtherGenX: 3 } }
        ]
    },
    {
        question: "Quelle est selon vous sa principale difficulté à vous comprendre ?",
        answers: [
            { text: "Elle ne comprend pas votre manière de travailler", points: { OtherGenZ: 5, OtherGenY: 3 } },
            { text: "Elle sous-estime votre manière de communiquer", points: { OtherGenX: 5, OtherBoomer: 3 } },
            { text: "Elle ne partage pas vos priorités", points: { OtherGenX: 5, OtherGenZ: 3 } },
            { text: "Elle interprète mal vos intentions", points: { OtherBoomer: 5, OtherGenY: 3 } }
        ]
    },
    {
        question: "Quel est son rythme de travail ?",
        answers: [
            { text: "Prévisible et organisé", points: { OtherBoomer: 5 } },
            { text: "Axé sur des objectifs clairs", points: { OtherGenX: 5 } },
            { text: "Flexible et adaptatif", points: { OtherGenY: 5 } },
            { text: "Rapide et multitâche", points: { OtherGenZ: 5 } }
        ]
    },
    {
        question: "Comment considère-t-elle les relations professionnelles ?",
        answers: [
            { text: "Basées sur le respect hiérarchique", points: { OtherBoomer: 5 } },
            { text: "Basées sur les résultats", points: { OtherGenX: 5 } },
            { text: "Basées sur la collaboration", points: { OtherGenY: 5 } },
            { text: "Basées sur la connexion rapide", points: { OtherGenZ: 5 } }
        ]
    },
    {
        question: "Comment perçoit-elle l’équilibre entre vie personnelle et vie professionnelle ?",
        answers: [
            { text: "Elle préfère se concentrer sur sa carrière", points: { OtherBoomer: 5 } },
            { text: "Elle valorise une division claire entre les deux", points: { OtherGenX: 5 } },
            { text: "Elle cherche à combiner épanouissement personnel et travail", points: { OtherGenY: 5 } },
            { text: "Elle accorde une priorité absolue à l’équilibre", points: { OtherGenZ: 5 } }
        ]
    }
];

// Troisième questionnaire : Mises en situation intergénérationnelles
const situationsQuestions = [
    {
        question: "Vous travaillez sur un projet marketing avec votre collègue. Vous privilégiez les outils numériques tandis qu'il préfère les méthodes traditionnelles. Comment réagissez-vous ?",
        options: [
            "Vous imposez vos méthodes numériques sans discussion",
            "Vous abandonnez vos idées pour suivre ses méthodes",
            "Vous lui proposez de combiner les deux approches en expliquant les avantages",
            "Vous divisez le projet pour travailler chacun à sa manière"
        ],
        correctAnswer: 2,
        explanations: {
            0: "En imposant votre méthode, vous risquez de créer des tensions et de perdre son expertise précieuse",
            1: "En abandonnant vos idées, vous privez le projet d'opportunités d'innovation importantes",
            2: "Cette approche permet de valoriser vos compétences respectives et de créer une synergie",
            3: "La division du travail nuira à la cohérence du projet et à votre relation professionnelle"
        }
    },
    {
        question: "Lors d'une réunion d'équipe, vous remarquez que votre collègue a un style de communication très différent du vôtre. Que faites-vous ?",
        options: [
            "Vous continuez à communiquer à votre façon sans tenir compte de ses préférences",
            "Vous adaptez votre style pour faciliter les échanges avec lui",
            "Vous lui demandez ouvertement de changer sa façon de communiquer",
            "Vous évitez les interactions directes avec lui"
        ],
        correctAnswer: 1,
        explanations: {
            0: "Ignorer ses préférences de communication peut créer des malentendus et des frustrations",
            1: "En vous adaptant, vous facilitez le dialogue et montrez votre respect pour ses habitudes",
            2: "Lui demander de changer peut être perçu comme un manque de respect pour son expérience",
            3: "Éviter la communication nuira à votre collaboration et à l'efficacité du travail"
        }
    },
    {
        question: "Votre collègue et vous avez des visions différentes de l'équilibre vie professionnelle/personnelle. Comment gérez-vous cette situation ?",
        options: [
            "Vous critiquez ouvertement sa vision du travail",
            "Vous ignorez ces différences en espérant qu'elles se résolvent",
            "Vous discutez avec lui pour comprendre son point de vue",
            "Vous vous plaignez à votre supérieur de ses horaires"
        ],
        correctAnswer: 2,
        explanations: {
            0: "La critique ne fera qu'accentuer les tensions et créer un environnement de travail négatif",
            1: "Ignorer ces différences peut mener à des frustrations et des conflits futurs",
            2: "Le dialogue ouvert vous permet de mieux vous comprendre et de trouver un terrain d'entente",
            3: "Impliquer la hiérarchie prématurément peut détériorer votre relation de travail"
        }
    },
    {
        question: "Vous devez former votre collègue sur un nouvel outil que vous maîtrisez bien. Comment procédez-vous ?",
        options: [
            "Vous lui envoyez la documentation par email",
            "Vous créez un guide adapté et lui proposez un accompagnement personnalisé",
            "Vous demandez à quelqu'un d'autre de le former",
            "Vous lui montrez rapidement les bases sans entrer dans les détails"
        ],
        correctAnswer: 1,
        explanations: {
            0: "Une simple documentation ne prend pas en compte ses besoins d'apprentissage spécifiques",
            1: "Un accompagnement personnalisé montre votre engagement et facilite son apprentissage",
            2: "Déléguer la formation peut être perçu comme un manque d'intérêt de votre part",
            3: "Une formation superficielle créera des difficultés dans votre collaboration future"
        }
    },
    {
        question: "Un désaccord survient entre vous et votre collègue sur les priorités d'un projet. Comment le gérez-vous ?",
        options: [
            "Vous maintenez fermement votre position",
            "Vous cédez à son point de vue pour éviter le conflit",
            "Vous proposez une discussion pour comprendre vos perspectives respectives",
            "Vous laissez la situation s'envenimer sans agir"
        ],
        correctAnswer: 2,
        explanations: {
            0: "Rester sur vos positions rigides peut endommager durablement votre relation de travail",
            1: "Céder systématiquement n'est pas une solution viable à long terme",
            2: "Une discussion ouverte permet de trouver une solution qui respecte vos deux points de vue",
            3: "Ne pas gérer le conflit peut créer des tensions qui affecteront votre travail"
        }
    }
];

// Recommandations pour l'amélioration de la communication
const recommendations = {
    GenZ_Boomer: {
        forYounger: "• Privilégiez la communication directe et formelle lors des réunions\n• Montrez du respect pour l'expérience et l'expertise\n• Expliquez comment les nouvelles technologies peuvent améliorer l'efficacité",
        forOlder: "• Restez ouvert aux nouvelles technologies et méthodes de travail\n• Valorisez la créativité et l'innovation des plus jeunes\n• Adoptez une approche de mentorat plutôt que directive"
    },
    GenZ_GenX: {
        forYounger: "• Apprenez à équilibrer communication numérique et face-à-face\n• Valorisez l'expérience pratique\n• Soyez patient avec les processus établis",
        forOlder: "• Encouragez l'innovation et les nouvelles approches\n• Adoptez certains outils de communication modernes\n• Partagez votre expérience de manière collaborative"
    },
    GenY_Boomer: {
        forYounger: "• Respectez les hiérarchies traditionnelles\n• Privilégiez les réunions en personne pour les décisions importantes\n• Démontrez votre engagement à long terme",
        forOlder: "• Acceptez les nouvelles méthodes de travail flexibles\n• Écoutez les suggestions d'amélioration des processus\n• Favorisez l'autonomie dans la gestion des tâches"
    },
    GenY_GenX: {
        forYounger: "• Équilibrez vie professionnelle et personnelle\n• Apprenez des expériences passées\n• Soyez précis dans vos communications",
        forOlder: "• Adoptez une approche plus collaborative\n• Soyez ouvert aux nouvelles technologies\n• Partagez votre expertise de manière constructive"
    }
};

// Conseils de communication intergénérationnelle
const communicationTips = {
    // Conseils pour communiquer avec la Génération Z
    GenZ: {
        strengths: [
            "Maîtrise naturelle du numérique",
            "Capacité à effectuer plusieurs tâches simultanément",
            "Innovation et créativité",
            "Sensibilité aux causes sociales et environnementales"
        ],
        preferences: [
            "Communication instantanée et visuelle",
            "Flexibilité dans les méthodes de travail",
            "Apprentissage par la pratique",
            "Besoin de feedback régulier"
        ],
        howToManage: [
            "Privilégier les communications courtes et visuelles (GIFs, emojis, vidéos)",
            "Offrir des opportunités d'apprentissage en ligne et interactif",
            "Mettre en place un système de mentorat inversé pour valoriser leurs compétences numériques",
            "Donner un feedback immédiat et constructif"
        ],
        howToCommunicate: [
            "Utiliser les outils de messagerie instantanée",
            "Être direct et aller à l'essentiel",
            "Intégrer des éléments visuels dans la communication",
            "Reconnaître leur expertise technologique"
        ]
    },
    // Conseils pour communiquer avec les Millennials (Gen Y)
    GenY: {
        strengths: [
            "Adaptabilité technologique",
            "Esprit collaboratif",
            "Recherche d'équilibre vie pro/perso",
            "Orientation résultats"
        ],
        preferences: [
            "Communication transparente",
            "Environnement de travail collaboratif",
            "Développement professionnel continu",
            "Reconnaissance des accomplissements"
        ],
        howToManage: [
            "Offrir des opportunités de développement professionnel",
            "Mettre en place des objectifs clairs avec des étapes définies",
            "Favoriser le travail en équipe et les projets collaboratifs",
            "Permettre une certaine flexibilité dans l'organisation du travail"
        ],
        howToCommunicate: [
            "Privilégier une communication directe mais constructive",
            "Expliquer le 'pourquoi' derrière les décisions",
            "Utiliser un mix de communication digitale et en personne",
            "Reconnaître leurs idées et contributions"
        ]
    },
    // Conseils pour communiquer avec la Génération X
    GenX: {
        strengths: [
            "Indépendance et autonomie",
            "Expérience professionnelle solide",
            "Équilibre entre traditionnel et digital",
            "Pragmatisme"
        ],
        preferences: [
            "Communication efficace et directe",
            "Respect de l'autonomie",
            "Reconnaissance de l'expérience",
            "Équilibre travail-vie personnelle"
        ],
        howToManage: [
            "Donner de l'autonomie dans la gestion des projets",
            "Valoriser leur expérience et expertise",
            "Maintenir une communication claire et directe",
            "Respecter leur temps personnel"
        ],
        howToCommunicate: [
            "Aller droit au but, éviter le superflu",
            "Privilégier les emails pour la communication formelle",
            "Respecter leur expérience et leurs méthodes de travail",
            "Être professionnel et structuré dans les échanges"
        ]
    },
    // Conseils pour communiquer avec les Baby Boomers
    Boomer: {
        strengths: [
            "Grande expérience professionnelle",
            "Éthique de travail forte",
            "Loyauté envers l'organisation",
            "Expertise approfondie"
        ],
        preferences: [
            "Communication formelle et structurée",
            "Respect de la hiérarchie",
            "Reconnaissance de l'expérience",
            "Stabilité et processus établis"
        ],
        howToManage: [
            "Valoriser leur expérience et leurs connaissances",
            "Maintenir une structure claire et des processus définis",
            "Privilégier les réunions en personne",
            "Montrer du respect pour leur parcours professionnel"
        ],
        howToCommunicate: [
            "Préférer la communication en face à face",
            "Utiliser un langage professionnel et formel",
            "Prendre le temps d'écouter leurs conseils",
            "Éviter le jargon trop moderne ou technologique"
        ]
    },
    GenZGenZ: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Favorisez des objectifs clairs et des missions qui ont un impact concret (importance du sens au travail)",
            "Donnez régulièrement des retours constructifs pour répondre à leur besoin de reconnaissance rapide",
            "Offrez des opportunités de formation continue et de développement personnel",
            "Encouragez une atmosphère de travail flexible et inclusive"
        ],
        howToCommunicate: [
            "Encouragez l'usage d'outils numériques collaboratifs comme Slack ou Trello, adaptés à leur maîtrise des technologies",
            "Maintenez des échanges rapides et directs",
            "Privilégiez les supports visuels et multimédias, comme les vidéos ou infographies",
            "Créez des espaces de discussion pour résoudre les problèmes en temps réel (ex. sessions brainstorming)"
        ]
    },
    GenZGenY: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Construisez une culture basée sur les valeurs partagées, comme la transparence et la collaboration",
            "Donnez de l’autonomie pour exploiter vos esprits entrepreneurials communs",
            "Permettez une flexibilité dans les méthodes de travail, comme le télétravail ou les horaires flexibles",
            "Proposez des projets collaboratifs où chacun peut apprendre de l’autre"
        ],
        howToCommunicate: [
            "Mettez en avant des canaux hybrides : numérique et collaboratif",
            "Valorisez les idées innovantes et montrez une ouverture à la créativité",
            "Limitez les formalités excessives pour fluidifier les échanges",
            "Organisez des réunions brèves mais efficaces pour maintenir l’engagement"
        ]
    },
    GenZGenX: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Offrez un cadre structuré tout en permettant une certaine liberté d'exécution",
            "Mettez en avant l’expérience et leur savoir-faire pour guider les plus jeunes",
            "Incitez à des mentorats inversés : Gen Z enseignant la technologie à Gen X, et vice-versa",
            "Évitez les excès de formalisme tout en respectant leur besoin de rigueur"
        ],
        howToCommunicate: [
            "Maintenez un équilibre entre échanges numériques rapides et discussions directes et concrètes",
            "Clarifiez les attentes dès le début pour éviter des incompréhensions",
            "Adoptez une approche respectueuse des hiérarchies tout en restant accessible",
            "Réservez du temps pour expliquer les avantages des outils modernes"
        ]
    },
    GenZBoomer: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Soulignez l’importance des valeurs traditionnelles, comme l’engagement et le respect des délais",
            "Faites preuve de patience dans l’apprentissage des nouvelles technologies",
            "Intégrez le dans des projets où leur expertise est valorisée",
            "Proposez un soutien clair et constant pour renforcer la confiance entre générations"
        ],
        howToCommunicate: [
            "Utilisez des canaux plus traditionnels pour vous, tout en intégrant des outils modernes",
            "Montrez de la patience face à un rythme plus méthodique",
            "Respectez les préférences pour les réunions en présentiel",
            "Exposez les résultats avec des faits concrets et mesurables, évitant les généralités"
        ]
    },
    GenYGenZ: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Encourager l’autonomie : Laisser plus de liberté et d'initiatives dans leurs projets",
            "Mettre l’accent sur l’équilibre vie pro-vie perso : Offrir de la flexibilité dans les horaires ou le télétravail",
            "Promouvoir le développement personnel : Offrir des formations et des retours réguliers",
            "Soutenir un environnement inclusif : Créer un environnement de travail respectueux et diversifié"
        ],
        howToCommunicate: [
            "Utiliser la communication numérique : Préférer les canaux digitaux comme Slack ou WhatsApp pour une communication rapide",
            "Valoriser l’aspect visuel : Utiliser des images, vidéos ou infographies pour transmettre l’information",
            "Être transparent et authentique : Partager ouvertement les objectifs et changements avec sincérité",
            "Prendre en compte les préférences personnelles : Opter pour un ton décontracté tout en restant professionnel"
        ]
    },
    GenYGenY: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Utilisez des outils collaboratifs et technologiques pour maintenir l’engagement",
            "Encouragez des discussions ouvertes et horizontales, loin des modèles hiérarchiques stricts",
            "Créez des communautés ou des groupes pour stimuler le partage d'idées",
            "Privilégiez la transparence dans les processus décisionnels"
        ],
        howToCommunicate: [
            "Utilisez des outils collaboratifs et technologiques pour maintenir l’engagement",
            "Encouragez des discussions ouvertes et horizontales, loin des modèles hiérarchiques stricts",
            "Créez des communautés ou des groupes pour stimuler le partage d'idées",
            "Privilégiez la transparence dans les processus décisionnels"
        ]
    },
    GenYGenX: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Respectez ses besoins pour une structure claire et des processus définis",
            "Offrez des projets dynamiques et stimulants",
            "Exploitez son expérience pour guider des équipes intergénérationnelles",
            "Organisez des réunions pour discuter en personne, mais laissez des synthèses écrites"
        ],
        howToCommunicate: [
            "Privilégier la communication directe : Aller droit au but avec des échanges clairs et concis",
            "Être ouvert à la rétroaction : Encourager une communication bidirectionnelle et écouter les suggestions",
            "Utiliser des canaux variés : Mélanger échanges en face-à-face et outils numériques",
            "Respecter le temps des autres : Faire preuve de ponctualité et être concis lors des réunions"
        ]
    },
    GenYBoomer: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Mettez en valeur leurs compétences dans des rôles de mentorat",
            "Fournissez des formations adaptées aux évolutions technologiques",
            "Impliquez le dans des projets intergénérationnels pour encourager la coopération",
            "Maintenez une stabilité organisationnelle"
        ],
        howToCommunicate: [
            "Maintenez un ton professionnel et courtois",
            "Organisez des réunions pour discuter en personne, mais laissez des synthèses écrites",
            "Utilisez des faits concrets pour appuyer les propositions et décisions",
            "Montrez du respect pour l’expérience et les valeurs"
        ]
    },
    GenXGenZ: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Donnez lui des responsabilités adaptées à son envie d’apprendre tout en offrant un encadrement précis",
            "Mettez en avant l’expérience et leur savoir-faire pour guider les plus jeunes",
            "Incitez à des mentorats inversés : Gen Z enseignant la technologie à Gen X, et vice-versa",
            "Évitez les excès de formalisme tout en respectant leur besoin de rigueur"
        ],
        howToCommunicate: [
            "Maintenez un équilibre entre échanges numériques rapides et discussions directes et concrètes",
            "Clarifiez les attentes dès le début pour éviter des incompréhensions",
            "Adoptez une approche respectueuse des hiérarchies tout en restant accessible",
            "Réservez du temps pour expliquer les avantages des outils modernes"
        ]
    },
    GenXGenY: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Encourager la prise de responsabilité : Offrir des responsabilités importantes dans les projets",
            "Offrir un équilibre entre autonomie et supervision : Apporter des points de contrôle réguliers sans être intrusif",
            "Respecter l’expérience : Valoriser et tirer parti de leur expertise et compétences",
            "Favoriser une atmosphère flexible : Offrir des horaires flexibles ou du télétravail pour un meilleur équilibre"
        ],
        howToCommunicate: [
            "Privilégier la communication directe : Aller droit au but avec des échanges clairs et concis",
            "Être ouvert à la rétroaction : Encourager une communication bidirectionnelle et écouter les suggestions",
            "Utiliser des canaux variés : Mélanger échanges en face-à-face et outils numériques",
            "Respecter le temps des autres : Faire preuve de ponctualité et être concis lors des réunions"
        ]
    },
    GenXGenX: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Donnez une autonomie suffisante pour lui permettre de gérer ses responsabilités",
            "Assurez un équilibre travail-vie personnelle",
            "Offrez un environnement stable et structuré pour optimiser son efficacité",
            "Adaptez les plans stratégiques à ses besoins d’avancement professionnel"
        ],
        howToCommunicate: [
            "Soyez direct et concis dans les échanges",
            "Valorisez les interactions en face à face, si possible",
            "Utilisez des formats standards, comme les emails, pour transmettre des informations complexes",
            "Restez focus sur les résultats et objectifs communs"
        ]
    },
    GenXBoomer: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Profitez de son expérience pour vous former",
            "Mettez en avant des solutions qui valorisent la longévité et l’engagement au travail",
            "Favorisez des projets intergénérationnels pour partager les compétences",
            "Maintenez des objectifs à long terme"
        ],
        howToCommunicate: [
            "Maintenez une structure claire et des attentes précises",
            "Encouragez des échanges réguliers pour renforcer les liens intergénérationnels",
            "Mettez en avant la stabilité et la continuité dans les discussions",
            "Limitez les distractions technologiques pour respecter les habitudes"
        ]
    },
    BoomerGenZ: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Créez des projets intergénérationnels où votre expérience guide son enthousiasme",
            "Favorisez un apprentissage mutuel : il peut vous aider avec la technologie, et vous pouvez partager votre expertise",
            "Respectez les rythmes différents",
            "Maintenez des discussions professionnelles mais ouvertes à l’innovation"
        ],
        howToCommunicate: [
            "Utilisez des canaux plus traditionnels pour vous, tout en intégrant des outils modernes",
            "Simplifiez les processus complexes en partageant des informations claires et concises",
            "Encouragez ses innovations",
            "Proposez des moments de discussions en présentiel pour établir une connexion humaine"
        ]
    },
    BoomerGenY: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Proposez des projets où votre expérience renforce son innovation",
            "Accordez une certaine flexibilité aux Millennials, tout en maintenant des cadres clairs",
            "Mettez en avant les valeurs partagées, comme la responsabilité et l’engagement",
            "Offrez des formations adaptées à la technologie pour vous tout en soutenant son ambition"
        ],
        howToCommunicate: [
            "Adoptez un style de communication respectueux et professionnel, tout en permettant un échange ouvert et flexible",
            "Préférez les réunions en face à face pour les discussions importantes",
            "Clarifiez les objectifs et attentes dès le départ pour éviter les frustrations",
            "Valorisez les idées novatrices"
        ]
    },
    BoomerGenX: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Transmettez lui votre savoir faire en terme de mentorat",
            "Offrez une structure claire",
            "Stimulez une collaboration basée sur la complémentarité entre votre expérience et sa polyvalence",
            "Donnez lui des projets stratégiques"
        ],
        howToCommunicate: [
            "Privilégiez des échanges directs et respectueux",
            "Partagez des informations détaillées",
            "Maintenez des discussions professionnelles mais ouvertes à l’innovation",
            "Limitez les distractions numériques"
        ]
    },
    BoomerBoomer: {
        strengths: [
            "",
            "",
            "",
            ""
        ],
        preferences: [
            "",
            "",
            "",
            ""
        ],
        howToManage: [
            "Soutenez une gestion stable et bien définie",
            "Offrez des rôles valorisant leur expertise et expérience professionnelle",
            "Donnez des objectifs à long terme",
            "Encouragez la collaboration en mettant en avant son engagement et loyauté"
        ],
        howToCommunicate: [
            "Privilégiez des échanges en présentiel ou par téléphone pour une interaction plus personnelle",
            "Structurez vos messages avec des objectifs clairs et des données concrètes",
            "Favorisez un ton professionnel et respectueux pour renforcer la confiance",
            "Planifiez des réunions régulières pour maintenir une communication continue"
        ]
    }
};

// Fonction pour obtenir les conseils de communication
function getCommunicationAdvice(userGeneration, otherGeneration) {
    const userGen = userGeneration.replace('User', '');
    const otherGen = otherGeneration.replace('Other', '');
    const combinedGen = userGen + otherGen;
    
    return {
        userProfile: communicationTips[userGen],
        otherProfile: communicationTips[otherGen],
        combinedProfile: communicationTips[combinedGen]
    };
}

// Initialisation du questionnaire
function startQuiz() {
    config.totalQuestions = questions.length + situationsQuestions.length;
    quizState.currentQuestionIndex = 0;
    quizState.userAnswers = new Array(config.totalQuestions).fill(null);
    resetScores();
    
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    showQuestion();
}

// Réinitialisation des scores
function resetScores() {
    Object.keys(quizState.userScores).forEach(key => quizState.userScores[key] = 0);
    Object.keys(quizState.otherScores).forEach(key => quizState.otherScores[key] = 0);
}

// Affichage de la question courante
function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    let currentQuestion;
    if (quizState.currentQuestionIndex < questions.length) {
        currentQuestion = questions[quizState.currentQuestionIndex];
    } else {
        currentQuestion = situationsQuestions[quizState.currentQuestionIndex - questions.length];
    }
    const partIndicator = document.getElementById('part-indicator');
    const questionCounter = document.getElementById('question-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Mise à jour de l'indicateur de partie et du compteur
    if (quizState.currentQuestionIndex < config.partOneQuestions) {
        partIndicator.textContent = "Partie 1: Votre profil";
        partIndicator.style.background = "#667eea";
        questionCounter.textContent = `Question ${quizState.currentQuestionIndex + 1}/${config.partOneQuestions}`;
    } else if (quizState.currentQuestionIndex < questions.length) {
        partIndicator.textContent = "Partie 2: Profil de l'autre personne";
        partIndicator.style.background = "#764ba2";
        questionCounter.textContent = `Question ${quizState.currentQuestionIndex - config.partOneQuestions + 1}/${config.totalQuestions - config.partOneQuestions}`;
    } else {
        partIndicator.textContent = "Partie 3: Mises en situation";
        partIndicator.style.background = "#4CAF50";
        questionCounter.textContent = `Question ${quizState.currentQuestionIndex - questions.length + 1}/${config.partThreeQuestions}`;
    }
    
    // Mise à jour des boutons de navigation
    prevBtn.disabled = (quizState.currentPart === 1 && quizState.currentQuestionIndex === 0) || 
                      (quizState.currentPart === 2 && quizState.currentQuestionIndex === config.partOneQuestions) ||
                      (quizState.currentPart === 3 && quizState.currentQuestionIndex === questions.length);
    nextBtn.disabled = quizState.userAnswers[quizState.currentQuestionIndex] === null;
    
    document.getElementById('question-text').textContent = currentQuestion.question;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    if (quizState.currentQuestionIndex < questions.length) {
        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.classList.add('btn', 'answer-btn');
            button.textContent = answer.text;
            
            if (quizState.userAnswers[quizState.currentQuestionIndex] === index) {
                button.classList.add('selected');
            }
            
            button.onclick = () => selectAnswer(answer, index);
            answersContainer.appendChild(button);
        });
    } else {
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('btn', 'answer-btn');
            button.textContent = option;
            
            if (quizState.userAnswers[quizState.currentQuestionIndex] === index) {
                button.classList.add('selected');
            }
            
            button.onclick = () => selectAnswer(option, index);
            answersContainer.appendChild(button);
        });
    }
    
    updateProgressBar();
}

// Sélection d'une réponse
function selectAnswer(answer, index) {
    // Supprimer les scores précédents si on change de réponse
    if (quizState.userAnswers[quizState.currentQuestionIndex] !== null) {
        if (quizState.currentQuestionIndex < questions.length) {
            const previousAnswer = questions[quizState.currentQuestionIndex].answers[quizState.userAnswers[quizState.currentQuestionIndex]];
            Object.entries(previousAnswer.points).forEach(([generation, points]) => {
                if (generation.startsWith('User')) {
                    quizState.userScores[generation] -= points;
                } else {
                    quizState.otherScores[generation] -= points;
                }
            });
        } else {
            const previousAnswer = situationsQuestions[quizState.currentQuestionIndex - questions.length].options[quizState.userAnswers[quizState.currentQuestionIndex]];
            // Pas de points à soustraire pour les situations
        }
    }
    
    // Ajouter les nouveaux scores
    if (quizState.currentQuestionIndex < questions.length) {
        const newAnswer = questions[quizState.currentQuestionIndex].answers[index];
        Object.entries(newAnswer.points).forEach(([generation, points]) => {
            if (generation.startsWith('User')) {
                quizState.userScores[generation] += points;
            } else {
                quizState.otherScores[generation] += points;
            }
        });
    } else {
        // Pas de points à ajouter pour les situations
    }
    
    // Enregistrer la réponse
    quizState.userAnswers[quizState.currentQuestionIndex] = index;
    
    // Activer le bouton suivant
    document.getElementById('next-btn').disabled = false;
    
    // Mettre à jour l'apparence des boutons
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

// Navigation entre les questions
function goToNextQuestion() {
    if (quizState.currentQuestionIndex === config.partOneQuestions - 1) {
        // Fin de la première partie
        showTransitionScreen();
    } else if (quizState.currentQuestionIndex === questions.length - 1) {
        // Fin de la deuxième partie
        showTransitionScreen2();
    } else if (quizState.currentQuestionIndex < config.totalQuestions - 1) {
        quizState.currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

// Navigation vers la question précédente
function goToPreviousQuestion() {
    if (quizState.currentPart === 2) {
        // Dans la partie 2, ne pas permettre de revenir à la partie 1
        if (quizState.currentQuestionIndex > config.partOneQuestions) {
            quizState.currentQuestionIndex--;
            showQuestion();
        }
    } else if (quizState.currentPart === 3) {
        // Dans la partie 3, ne pas permettre de revenir à la partie 2
        if (quizState.currentQuestionIndex > questions.length) {
            quizState.currentQuestionIndex--;
            showQuestion();
        }
    } else {
        // Dans la partie 1, navigation normale
        if (quizState.currentQuestionIndex > 0) {
            quizState.currentQuestionIndex--;
            showQuestion();
        }
    }
}

// Affichage de l'écran de transition
function showTransitionScreen() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('transition-screen').classList.add('active');
}

// Continuer vers la partie 2
function continueToPart2() {
    document.getElementById('transition-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    quizState.currentQuestionIndex++;
    quizState.currentPart = 2;
    showQuestion();
}

// Affichage de l'écran de transition 2
function showTransitionScreen2() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('transition-screen2').classList.add('active');
}

// Continuer vers la partie 3
function continueToPart3() {
    document.getElementById('transition-screen2').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    quizState.currentQuestionIndex++;
    quizState.currentPart = 3;
    showQuestion();
}

// Mise à jour de la barre de progression
function updateProgressBar() {
    const progress = document.getElementById('progress');
    const percentage = (quizState.currentQuestionIndex / config.totalQuestions) * 100;
    progress.style.width = `${percentage}%`;
}

// Affichage des résultats
function showResults() {
    const userGeneration = Object.entries(quizState.userScores).reduce((a, b) => b[1] > a[1] ? b : a)[0];
    const otherGeneration = Object.entries(quizState.otherScores).reduce((a, b) => b[1] > a[1] ? b : a)[0];
    
    const advice = getCommunicationAdvice(userGeneration, otherGeneration);
    const userGen = config.generations[userGeneration.replace('User', '')];
    const otherGen = config.generations[otherGeneration.replace('Other', '')];

    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    const resultHTML = `
        <div class="results-container">
            <div class="generation-profiles">
                <div class="profile your-profile">
                    <h3>${userGen.name}</h3>
                    <div class="profile-details">
                        <h4>Vos points forts :</h4>
                        <ul>${advice.userProfile.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                    </div>
                </div>
                
                <div class="profile other-profile">
                    <h3>Son profil : ${otherGen.name}</h3>
                    <div class="profile-details">
                        <h4>Ses préférences :</h4>
                        <ul>${advice.otherProfile.preferences.map(p => `<li>${p}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>

            <div class="communication-advice">
                <h3>Conseils pour une communication efficace</h3>
                <div class="advice-section">
                    <h4>Comment communiquer avec eux :</h4>
                    <ul>${advice.combinedProfile.howToCommunicate.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
                <div class="advice-section">
                    <h4>Comment les manager efficacement :</h4>
                    <ul>${advice.combinedProfile.howToManage.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
            </div>
        </div>
    `;

    document.getElementById('generation-result').innerHTML = resultHTML;
}

// Redémarrage du questionnaire
function restartQuiz() {
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

// Initialisation des événements
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('next-btn').addEventListener('click', goToNextQuestion);
document.getElementById('prev-btn').addEventListener('click', goToPreviousQuestion);
document.getElementById('continue-btn').addEventListener('click', continueToPart2);
document.getElementById('continue-btn2').addEventListener('click', continueToPart3);