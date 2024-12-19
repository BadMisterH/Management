const questions = [
    // PARTIE 1
    {
        question: "Quel est votre mode de communication préféré au travail ?",
        answers: [
            { text: "Face à face", points: { genZ: 0, genY: 0, genX: 0, boomer: 2 } },
            { text: "Téléphone", points: { genZ: 0, genY: 0, genX: 2, boomer: 0 } },
            { text: "Email", points: { genZ: 0, genY: 2, genX: 0, boomer: 0 } },
            { text: "Messagerie instantanée", points: { genZ: 2, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quelle est votre approche du travail à distance ?",
        answers: [
            { text: "Je préfère travailler au bureau", points: { genZ: 0, genY: 0, genX: 0, boomer: 2 } },
            { text: "Je suis ouvert au télétravail occasionnel", points: { genZ: 0, genY: 0, genX: 2, boomer: 0 } },
            { text: "Je préfère un mélange de télétravail et de travail au bureau", points: { genZ: 0, genY: 2, genX: 0, boomer: 0 } },
            { text: "Je préfère travailler entièrement à distance", points: { genZ: 2, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Comment préférez-vous apprendre de nouvelles compétences ?",
        answers: [
            { text: "Par des formations en présentiel", points: { genZ: 0, genY: 0, genX: 0, boomer: 2 } },
            { text: "Par des formations en ligne", points: { genZ: 0, genY: 0, genX: 2, boomer: 0 } },
            { text: "Par des tutoriels vidéo", points: { genZ: 0, genY: 2, genX: 0, boomer: 0 } },
            { text: "Par des applications interactives", points: { genZ: 2, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quel est votre rapport au travail en équipe ?",
        answers: [
            { text: "Je préfère travailler seul", points: { genZ: 0, genY: 0, genX: 0, boomer: 2 } },
            { text: "Je préfère des réunions régulières", points: { genZ: 0, genY: 0, genX: 2, boomer: 0 } },
            { text: "Je préfère des collaborations flexibles", points: { genZ: 0, genY: 2, genX: 0, boomer: 0 } },
            { text: "Je préfère des collaborations virtuelles", points: { genZ: 2, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quelle est votre attitude face aux nouvelles technologies ?",
        answers: [
            { text: "Je suis réticent à les adopter", points: { genZ: 0, genY: 0, genX: 1, boomer: 2 } },
            { text: "Je les adopte progressivement", points: { genZ: 0, genY: 1, genX: 2, boomer: 0 } },
            { text: "Je suis enthousiaste à l'idée de les essayer", points: { genZ: 1, genY: 2, genX: 0, boomer: 0 } },
            { text: "Je suis toujours à la recherche des dernières innovations", points: { genZ: 2, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quel élément vous motive le plus dans votre travail ?",
        answers: [
            { text: "La stabilité financière et la sécurité de l’emploi", points: { genZ: 0, genY: 0, genX: 2, boomer: 4 } },
            { text: "La reconnaissance de mes compétences et mes résultats", points: { genZ: 0, genY: 0, genX: 4, boomer: 2 } },
            { text: "Un environnement de travail flexible et collaboratif", points: { genZ: 0, genY: 4, genX: 0, boomer: 0 } },
            { text: "L’équilibre entre vie personnelle et vie professionnelle", points: { genZ: 5, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Comment considérez-vous les heures supplémentaires ?",
        answers: [
            { text: "Une preuve de dévouement", points: { genZ: 0, genY: 0, genX: 1, boomer: 3 } },
            { text: "Une obligation pour atteindre les objectifs", points: { genZ: 0, genY: 0, genX: 3, boomer: 1 } },
            { text: "Acceptables si elles sont reconnues", points: { genZ: 1, genY: 3, genX: 0, boomer: 0 } },
            { text: "Pas toujours nécessaires, il faut savoir équilibrer", points: { genZ: 3, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quels mots décrivent le mieux vos valeurs principales ?",
        answers: [
            { text: "Loyauté, respect, travail acharné", points: { genZ: 0, genY: 0, genX: 2, boomer: 4 } },
            { text: "Indépendance, efficacité, pragmatisme", points: { genZ: 0, genY: 1, genX: 4, boomer: 1 } },
            { text: "Collaboration, épanouissement, engagement", points: { genZ: 1, genY: 4, genX: 1, boomer: 0 } },
            { text: "Innovation, authenticité, équilibre", points: { genZ: 4, genY: 2, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quelle était votre manière de travailler en équipe dans vos premières expériences professionnelles ?",
        answers: [
            { text: "Suivre des instructions claires d'un leader", points: { genZ: 0, genY: 0, genX: 0, boomer: 3 } },
            { text: "Prendre des initiatives tout en respectant les structures", points: { genZ: 0, genY: 0, genX: 3, boomer: 0 } },
            { text: "Rechercher l'avis des collègues pour collaborer", points: { genZ: 0, genY: 3, genX: 0, boomer: 0 } },
            { text: "Utiliser des outils en ligne pour partager rapidement les idées", points: { genZ: 3, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quel style de leadership préférez-vous ?",
        answers: [
            { text: "Leadership hiérarchique et autoritaire", points: { genZ: 0, genY: 0, genX: 0, boomer: 3 } },
            { text: "Leadership autonome et orienté résultats", points: { genZ: 0, genY: 0, genX: 3, boomer: 0 } },
            { text: "Leadership participatif et collaboratif", points: { genZ: 0, genY: 3, genX: 0, boomer: 0 } },
            { text: "Leadership flexible et ouvert à l’innovation", points: { genZ: 3, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Comment évaluiez-vous le succès personnel ?",
        answers: [
            { text: "Par des réalisations à long terme et la reconnaissance sociale", points: { genZ: 0, genY: 0, genX: 0, boomer: 5 } },
            { text: "Par les accomplissements professionnels et personnels", points: { genZ: 0, genY: 0, genX: 5, boomer: 0 } },
            { text: "Par la capacité à résoudre des problèmes innovants", points: { genZ: 0, genY: 5, genX: 0, boomer: 0 } },
            { text: "Par la liberté et l’épanouissement individuel", points: { genZ: 5, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quel est votre rapport avec les outils numériques au travail ?",
        answers: [
            { text: "Vous préférez limiter leur usage sauf si indispensable", points: { genZ: 0, genY: 0, genX: 0, boomer: 3 } },
            { text: "Vous les utilisez efficacement mais sans excès", points: { genZ: 0, genY: 0, genX: 3, boomer: 0 } },
            { text: "Vous les considérez comme un atout indispensable", points: { genZ: 0, genY: 3, genX: 0, boomer: 0 } },
            { text: "Vous les maîtrisez pleinement et cherchez à les optimiser", points: { genZ: 3, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Quel est le principal problème de communication que vous rencontrez avec votre collègue ?",
        answers: [
            { text: "Manque de clarté dans les instructions", points: { genZ: 0, genY: 0, genX: 0, boomer: 1 } },
            { text: "Différences de priorités", points: { genZ: 0, genY: 0, genX: 1, boomer: 0 } },
            { text: "Différences de style de communication", points: { genZ: 0, genY: 1, genX: 0, boomer: 0 } },
            { text: "Manque de réactivité", points: { genZ: 1, genY: 0, genX: 0, boomer: 0 } }
        ]
    },
    {
        question: "Comment décririez-vous votre relation actuelle avec ce collègue ?",
        answers: [
            { text: "Cordiale mais distante", points: { genZ: 0, genY: 0, genX: 0, boomer: 1 } },
            { text: "Professionnelle mais tendue", points: { genZ: 0, genY: 0, genX: 1, boomer: 0 } },
            { text: "Amicale mais parfois conflictuelle", points: { genZ: 0, genY: 1, genX: 0, boomer: 0 } },
            { text: "Très proche mais avec des malentendus fréquents", points: { genZ: 1, genY: 0, genX: 0, boomer: 0 } }
        ]
    }
];

let currentQuestion = 0;
let userScores = {
    genZ: 0,
    genY: 0,
    genX: 0,
    boomer: 0
};
let colleagueScores = {
    genZ: 0,
    genY: 0,
    genX: 0,
    boomer: 0
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
            button.textContent = answer.text;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectAnswer(answer));
            answersContainer.appendChild(button);
        });
        
        updateProgressBar();
    } else {
        showResults();
    }
}

function selectAnswer(answer) {
    if (currentQuestion < 12) {
        Object.keys(answer.points).forEach(gen => {
            userScores[gen] += answer.points[gen];
        });
    } else {
        Object.keys(answer.points).forEach(gen => {
            colleagueScores[gen] += answer.points[gen];
        });
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

    const userGeneration = getGeneration(userScores);
    const colleagueGeneration = getGeneration(colleagueScores);

    generationResult.innerHTML = `
        <h2>Résultats</h2>
        <p>Votre génération : <strong>${userGeneration}</strong></p>
        <p>La génération de votre collègue : <strong>${colleagueGeneration}</strong></p>
    `;

    recommendations.innerHTML = getRecommendations(userGeneration, colleagueGeneration);
}

function getRecommendations(userGen, colleagueGen) {
    const recommendationMap = {
        'Baby Boomer-Génération X': 'Concentrez-vous sur la communication formelle et le respect de la hiérarchie. Privilégiez les réunions en face à face.',
        'Baby Boomer-Génération Y': 'Trouvez un équilibre entre les méthodes traditionnelles et modernes. Expliquez le "pourquoi" des décisions.',
        'Baby Boomer-Génération Z': 'Adoptez une communication plus directe et numérique. Soyez ouvert aux nouvelles technologies.',
        'Génération X-Génération Y': 'Combinez autonomie et collaboration. Utilisez des outils de communication mixtes.',
        'Génération X-Génération Z': 'Privilégiez la communication rapide et efficace. Soyez flexible dans les méthodes de travail.',
        'Génération Y-Génération Z': 'Utilisez les outils numériques et la communication instantanée. Favorisez le travail collaboratif.'
    };

    const key = [userGen, colleagueGen].sort().join('-');
    return `<h3>Recommandations pour améliorer votre collaboration :</h3>
            <p>${recommendationMap[key] || 'Concentrez-vous sur une communication ouverte et respectueuse des différences générationnelles.'}</p>`;
}

function getGeneration(scores) {
    const maxScore = Math.max(...Object.values(scores));
    if (scores.boomer === maxScore) return 'Baby Boomer';
    if (scores.genX === maxScore) return 'Génération X';
    if (scores.genY === maxScore) return 'Génération Y';
    return 'Génération Z';
}

function restartQuiz() {
    currentQuestion = 0;
    userScores = {
        genZ: 0,
        genY: 0,
        genX: 0,
        boomer: 0
    };
    colleagueScores = {
        genZ: 0,
        genY: 0,
        genX: 0,
        boomer: 0
    };
    resultsScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
}