// Configuration du questionnaire
const config = {
    totalQuestions: 0,
    partOneQuestions: 13, // Nombre de questions dans la première partie
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
    }
};

// Fonction pour obtenir les conseils de communication
function getCommunicationAdvice(userGeneration, otherGeneration) {
    const userGen = userGeneration.replace('User', '');
    const otherGen = otherGeneration.replace('Other', '');
    
    return {
        userProfile: communicationTips[userGen],
        otherProfile: communicationTips[otherGen]
    };
}

// Initialisation du questionnaire
function startQuiz() {
    config.totalQuestions = questions.length;
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
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const partIndicator = document.getElementById('part-indicator');
    const questionCounter = document.getElementById('question-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Mise à jour de l'indicateur de partie et du compteur
    if (quizState.currentQuestionIndex < config.partOneQuestions) {
        partIndicator.textContent = "Partie 1: Votre profil";
        partIndicator.style.background = "#667eea";
        questionCounter.textContent = `Question ${quizState.currentQuestionIndex + 1}/${config.partOneQuestions}`;
    } else {
        partIndicator.textContent = "Partie 2: Profil de l'autre personne";
        partIndicator.style.background = "#764ba2";
        questionCounter.textContent = `Question ${quizState.currentQuestionIndex - config.partOneQuestions + 1}/${config.totalQuestions - config.partOneQuestions}`;
    }
    
    // Mise à jour des boutons de navigation
    prevBtn.disabled = (quizState.currentPart === 1 && quizState.currentQuestionIndex === 0) || 
                      (quizState.currentPart === 2 && quizState.currentQuestionIndex === config.partOneQuestions);
    nextBtn.disabled = quizState.userAnswers[quizState.currentQuestionIndex] === null;
    
    document.getElementById('question-text').textContent = currentQuestion.question;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
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
    
    updateProgressBar();
}

// Sélection d'une réponse
function selectAnswer(answer, index) {
    // Supprimer les scores précédents si on change de réponse
    if (quizState.userAnswers[quizState.currentQuestionIndex] !== null) {
        const previousAnswer = questions[quizState.currentQuestionIndex].answers[quizState.userAnswers[quizState.currentQuestionIndex]];
        Object.entries(previousAnswer.points).forEach(([generation, points]) => {
            if (generation.startsWith('User')) {
                quizState.userScores[generation] -= points;
            } else {
                quizState.otherScores[generation] -= points;
            }
        });
    }
    
    // Ajouter les nouveaux scores
    Object.entries(answer.points).forEach(([generation, points]) => {
        if (generation.startsWith('User')) {
            quizState.userScores[generation] += points;
        } else {
            quizState.otherScores[generation] += points;
        }
    });
    
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
                    <h3>Votre profil : ${userGen.name}</h3>
                    <p class="generation-years">(${userGen.yearRange})</p>
                    <div class="profile-details">
                        <h4>Vos points forts :</h4>
                        <ul>${advice.userProfile.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                    </div>
                </div>
                
                <div class="profile other-profile">
                    <h3>Leur profil : ${otherGen.name}</h3>
                    <p class="generation-years">(${otherGen.yearRange})</p>
                    <div class="profile-details">
                        <h4>Leurs préférences :</h4>
                        <ul>${advice.otherProfile.preferences.map(p => `<li>${p}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>

            <div class="communication-advice">
                <h3>Conseils pour une communication efficace</h3>
                <div class="advice-section">
                    <h4>Comment communiquer avec eux :</h4>
                    <ul>${advice.otherProfile.howToCommunicate.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
                <div class="advice-section">
                    <h4>Comment les manager efficacement :</h4>
                    <ul>${advice.otherProfile.howToManage.map(t => `<li>${t}</li>`).join('')}</ul>
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