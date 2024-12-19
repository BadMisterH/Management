const questions = [
    {
        question: "Lorem ipsum dolor sit amet?",
        answers: [
            { text: "Consectetur adipiscing elit", points: { genZ: 3, genY: 1, genX: 0, boomer: 0 } },
            { text: "Sed do eiusmod tempor", points: { genZ: 0, genY: 2, genX: 2, boomer: 1 } },
            { text: "Ut labore et dolore", points: { genZ: 1, genY: 3, genX: 1, boomer: 0 } },
            { text: "Magna aliqua ut enim", points: { genZ: 0, genY: 1, genX: 3, boomer: 2 } }
        ]
    },
    {
        question: "Duis aute irure dolor in reprehenderit?",
        answers: [
            { text: "Voluptate velit esse", points: { genZ: 2, genY: 0, genX: 1, boomer: 3 } },
            { text: "Cillum dolore eu fugiat", points: { genZ: 3, genY: 2, genX: 0, boomer: 0 } },
            { text: "Nulla pariatur excepteur", points: { genZ: 1, genY: 3, genX: 2, boomer: 0 } },
            { text: "Sint occaecat cupidatat", points: { genZ: 0, genY: 1, genX: 3, boomer: 2 } }
        ]
    },
    {
        question: "Excepteur sint occaecat cupidatat?",
        answers: [
            { text: "Non proident sunt", points: { genZ: 0, genY: 1, genX: 2, boomer: 3 } },
            { text: "In culpa qui officia", points: { genZ: 3, genY: 2, genX: 0, boomer: 0 } },
            { text: "Deserunt mollit anim", points: { genZ: 1, genY: 3, genX: 1, boomer: 0 } },
            { text: "Id est laborum et", points: { genZ: 0, genY: 0, genX: 3, boomer: 2 } }
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
        case 'genZ':
            generationName = 'Génération Z';
            recommendations_text = 'Vous êtes à l\'aise avec la technologie et les réseaux sociaux. Conseils pour interagir avec les autres générations : soyez patient avec ceux qui sont moins technophiles et valorisez leur expérience.';
            break;
        case 'genY':
            generationName = 'Génération Y (Millennial)';
            recommendations_text = 'Vous êtes adaptable et orienté travail d\'équipe. Pour communiquer efficacement, privilégiez un équilibre entre digital et interactions en personne.';
            break;
        case 'genX':
            generationName = 'Génération X';
            recommendations_text = 'Vous êtes indépendant et pragmatique. Utilisez votre capacité d\'adaptation pour faire le pont entre les générations plus jeunes et plus âgées.';
            break;
        case 'boomer':
            generationName = 'Baby Boomer';
            recommendations_text = 'Vous valorisez l\'expérience et la tradition. Partagez votre sagesse tout en restant ouvert aux nouvelles approches des générations plus jeunes.';
            break;
    }

    generationResult.innerHTML = `<h3>Vous appartenez principalement à la ${generationName}</h3>`;
    recommendations.innerHTML = `<h4>Recommandations :</h4><p>${recommendations_text}</p>`;
}

function restartQuiz() {
    currentQuestion = 0;
    userScores = {
        genZ: 0,
        genY: 0,
        genX: 0,
        boomer: 0
    };
    resultsScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
}
