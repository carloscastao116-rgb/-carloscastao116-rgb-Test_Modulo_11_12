let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let answered = false;

const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-button');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options-container');
const explanationText = document.getElementById('explanation-text');
const explanationContainer = document.getElementById('explanation-container');
const nextButton = document.getElementById('next-button');
const moduleTag = document.getElementById('module-tag');
const progressText = document.getElementById('progress-text');

function loadQuestion() {
    if (currentQuestionIndex >= questionsData.length) {
        showResults();
        return; 
    }
    
    const currentQuestion = questionsData[currentQuestionIndex];
    const totalQuestions = questionsData.length;
    answered = false; 

    questionContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');

    // Actualizar textos de cabecera
    moduleTag.textContent = currentQuestion.module;
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
    questionEl.textContent = currentQuestion.question; 
    
    optionsEl.innerHTML = ''; 
    explanationContainer.classList.add('hidden');
    nextButton.classList.add('hidden');

    for (const [key, value] of Object.entries(currentQuestion.options)) {
        const button = document.createElement('button');
        button.textContent = `${key}. ${value}`;
        button.classList.add('option-button');
        button.addEventListener('click', () => {
            selectAnswer(key, currentQuestion.answer, currentQuestion.explanation);
        });
        optionsEl.appendChild(button);
    }
}

function selectAnswer(selectedKey, correctAnswer, explanation) {
    if (answered) return; 
    answered = true;

    const optionButtons = document.querySelectorAll('.option-button');
    let isCorrect = (selectedKey === correctAnswer);

    if (isCorrect) {
        correctCount++;
    } else {
        incorrectCount++;
    }
    
    optionButtons.forEach(button => {
        button.disabled = true;
        const optionKey = button.textContent.charAt(0);
        
        if (optionKey === correctAnswer) {
            button.classList.add('correct');
        } else if (optionKey === selectedKey) {
            button.classList.add('incorrect');
        }
    });

    explanationText.textContent = explanation;
    explanationContainer.classList.remove('hidden');
    nextButton.classList.remove('hidden');
}

function showResults() {
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    const totalQuestions = questionsData.length;
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);

    scoreText.innerHTML = `
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <p>Aciertos: <strong style="color: #16a34a;">${correctCount}</strong></p>
            <p>Fallos: <strong style="color: #dc2626;">${incorrectCount}</strong></p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;">
            <p style="font-size: 1.5rem;">Puntuación: <strong>${percentage}%</strong></p>
        </div>
    `;
}

function restartTest() {
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    loadQuestion();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

restartButton.addEventListener('click', restartTest);

loadQuestion();function loadQuestion() {
    if (currentQuestionIndex >= questionsData.length) {
        showResults();
        return; 
    }
    
    const currentQuestion = questionsData[currentQuestionIndex];
    const totalQuestions = questionsData.length;
    answered = false; 

    // Referencias a los nuevos elementos estéticos
    const moduleTag = document.getElementById('module-tag');
    
    questionContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');

    // Separamos el módulo del texto de la pregunta
    moduleTag.textContent = currentQuestion.module;
    questionEl.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}: ${currentQuestion.question}`; 
    
    optionsEl.innerHTML = ''; 
    explanationContainer.classList.add('hidden');
    nextButton.classList.add('hidden');

    for (const [key, value] of Object.entries(currentQuestion.options)) {
        const button = document.createElement('button');
        button.textContent = `${key}. ${value}`;
        button.classList.add('option-button');
        button.addEventListener('click', () => {
            selectAnswer(key, currentQuestion.answer, currentQuestion.explanation);
        });
        optionsEl.appendChild(button);
    }
}
