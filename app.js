let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let answered = false;

// Elementos del DOM
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-button');

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options-container');
const explanationText = document.getElementById('explanation-text');
const explanationContainer = document.getElementById('explanation-container');
const nextButton = document.getElementById('next-button');

/**
 * Carga la pregunta actual en el DOM
 */
function loadQuestion() {
    // Si hemos llegado al final del array de preguntas, mostramos resultados
    if (currentQuestionIndex >= questionsData.length) {
        showResults();
        return; 
    }
    
    const currentQuestion = questionsData[currentQuestionIndex];
    const totalQuestions = questionsData.length;
    answered = false; 
    
    // Configurar la visibilidad de los contenedores
    questionContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');

    // ACTUALIZACIÓN: Muestra el Módulo, el número de pregunta y el texto de la pregunta
    questionEl.textContent = `[${currentQuestion.module}] Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}: ${currentQuestion.question}`; 
    
    // Limpiar opciones anteriores y ocultar retroalimentación
    optionsEl.innerHTML = ''; 
    explanationContainer.classList.add('hidden');
    nextButton.classList.add('hidden');

    // Crear botones para cada opción
    for (const [key, value] of Object.entries(currentQuestion.options)) {
        const button = document.createElement('button');
        button.textContent = `${key}. ${value}`;
        button.classList.add('option-button');
        
        // Evento al hacer clic en una respuesta
        button.addEventListener('click', () => {
            selectAnswer(key, currentQuestion.answer, currentQuestion.explanation);
        });
        optionsEl.appendChild(button);
    }
}

/**
 * Procesa la respuesta seleccionada por el usuario
 */
function selectAnswer(selectedKey, correctAnswer, explanation) {
    if (answered) return; 
    answered = true;

    const optionButtons = document.querySelectorAll('.option-button');
    let isCorrect = (selectedKey === correctAnswer);

    // Actualizar contadores globales
    if (isCorrect) {
        correctCount++;
    } else {
        incorrectCount++;
    }
    
    // Marcar visualmente aciertos y errores
    optionButtons.forEach(button => {
        button.disabled = true; // Deshabilitar para que no cambie la respuesta
        const optionKey = button.textContent.charAt(0);
        
        if (optionKey === correctAnswer) {
            button.classList.add('correct');
        }
        
        if (optionKey === selectedKey && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    // Mostrar la explicación técnica (Idea clave)
    explanationText.textContent = `Respuesta Correcta: ${correctAnswer}. ${explanation}`;
    explanationContainer.classList.remove('hidden');
    
    // Habilitar el paso a la siguiente pregunta
    nextButton.classList.remove('hidden');
}

/**
 * Muestra la pantalla final con el resumen de puntos
 */
function showResults() {
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    const totalQuestions = questionsData.length;
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);

    scoreText.innerHTML = `
        <p>Has terminado el simulador de los Módulos 11 y 12. Aquí están tus resultados:</p>
        <ul style="list-style: none; padding: 0;">
            <li><strong>Total de Preguntas:</strong> ${totalQuestions}</li>
            <li><strong>Respuestas Correctas:</strong> ${correctCount}</li>
            <li><strong>Respuestas Incorrectas:</strong> ${incorrectCount}</li>
        </ul>
        <h3>Puntuación final: ${percentage}%</h3>
        <p class="${percentage >= 70 ? 'pass' : 'fail'}">
            ${percentage >= 70 ? '¡Excelente trabajo! Dominas los conceptos clave.' : 'Te recomendamos repasar los conceptos fallados.'}
        </p>
    `;
}

/**
 * Reinicia el test desde la primera pregunta
 */
function restartTest() {
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    loadQuestion();
}

// Configuración de eventos de botones
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

restartButton.addEventListener('click', restartTest);

// Iniciar el simulador al cargar el archivo
loadQuestion();