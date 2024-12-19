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






let currentQuestion = 0;
let userScores = {
    UserGenZ: 0,
    UserGenY: 0,
    UserGenX: 0,
    UserBoomer: 0,
    OtherGenZ: 0,
    OtherGenY: 0,
    OtherGenX: 0,
    OtherBoomer: 0 
};

// Éléments du DOM
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const progressBar = document.getElementById('progress');
const generationResult = document.getElementById('generation-result');
const recommendations = document.getElementById('recommendations');

// Événements
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionText.textContent = question.question;
        answersContainer.innerHTML = '';
        
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer.text;
            button.addEventListener('click', () => selectAnswer(answer));
            answersContainer.appendChild(button);
        });

        updateProgressBar();
    } else {
        showResults();
    }
}

function selectAnswer(answer) {
    // Ajouter les points
    for (const [generation, points] of Object.entries(answer.points)) {
        userScores[generation] += points;
    }
    
    currentQuestion++;
    showQuestion();
}

function updateProgressBar() {
    const progress = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    // Trouver la génération dominante
    let maxScore = 0;
    let dominantGeneration = '';
    
    for (const [generation, score] of Object.entries(userScores)) {
        if (score > maxScore) {
            maxScore = score;
            dominantGeneration = generation;
        }
    }

    // Afficher les résultats
    let generationName = '';
    let recommendations_text = '';
    
    switch(dominantGeneration) {
        case 'UserGenZ':
            generationName = 'Génération Z';
            recommendations_text = 'Vous êtes à l\'aise avec la technologie et les réseaux sociaux. Conseils pour interagir avec les autres générations : soyez patient avec ceux qui sont moins technophiles et valorisez leur expérience.';
            break;
        case 'UserGenY':
            generationName = 'Génération Y (Millennial)';
            recommendations_text = 'Vous êtes adaptable et orienté travail d\'équipe. Pour communiquer efficacement, privilégiez un équilibre entre digital et interactions en personne.';
            break;
        case 'UserGenX':
            generationName = 'Génération X';
            recommendations_text = 'Vous êtes indépendant et pragmatique. Utilisez votre capacité d\'adaptation pour faire le pont entre les générations plus jeunes et plus âgées.';
            break;
        case 'UserBoomer':
            generationName = 'Baby boomer';
            recommendations_text = 'Vous valorisez l\'expérience et la tradition. Partagez votre sagesse tout en restant ouvert aux nouvelles approches des générations plus jeunes.';
            break;
    }

    generationResult.innerHTML = `<h3>Vous appartenez principalement à la ${generationName}</h3>`;
    recommendations.innerHTML = `<h4>Recommandations :</h4><p>${recommendations_text}</p>`;
}

function restartQuiz() {
    currentQuestion = 0;
    userScores = {
        UserGenZ: 0,
        UserGenY: 0,
        UserGenX: 0,
        UserBoomer: 0,
        OtherGenZ: 0,
        OtherGenY: 0,
        OtherGenX: 0,
        OtherBoomer: 0 


    };
    resultsScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
}
