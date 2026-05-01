let currentIdx = 0;
let score = 0;
let answered = false;

const qText = document.getElementById('question');
const optBox = document.getElementById('options');
const topicLabel = document.getElementById('topic-title');
const progressLabel = document.getElementById('progress');
const feedback = document.getElementById('feedback');
const descText = document.getElementById('desc');
const nextBtn = document.getElementById('next');
const quizBox = document.getElementById('quiz');
const resultBox = document.getElementById('result');

function load() {
    if (currentIdx >= questionsData.length) {
        quizBox.classList.add('hidden');
        resultBox.classList.remove('hidden');
        document.getElementById('score').textContent = `${((score/questionsData.length)*100).toFixed(0)}%`;
        return;
    }

    const q = questionsData[currentIdx];
    answered = false;
    
    topicLabel.textContent = `${q.module} | ${q.topic}`;
    progressLabel.textContent = `Pregunta ${currentIdx + 1} de ${questionsData.length}`;
    qText.textContent = q.question;
    
    optBox.innerHTML = '';
    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');

    Object.entries(q.options).forEach(([key, val]) => {
        const b = document.createElement('button');
        b.className = 'option';
        b.textContent = `${key}. ${val}`;
        b.onclick = () => check(key, b);
        optBox.appendChild(b);
    });
}

function check(choice, btn) {
    if (answered) return;
    answered = true;
    
    const correct = questionsData[currentIdx].answer;
    const btns = optBox.querySelectorAll('.option');

    if (choice === correct) {
        score++;
        btn.classList.add('correct');
    } else {
        btn.classList.add('incorrect');
        btns.forEach(b => {
            if (b.textContent.startsWith(correct)) b.classList.add('correct');
        });
    }

    descText.textContent = questionsData[currentIdx].explanation;
    feedback.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
}

nextBtn.onclick = () => {
    currentIdx++;
    load();
};

window.onload = load;
