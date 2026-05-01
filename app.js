function loadQuestion() {
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
