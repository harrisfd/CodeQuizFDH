const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionContainerElement = document.getElementById('question')
const answersButtonsElement = document.getElementById('answers-buttons')
let shuffleQuestions, currentQuestionIndex

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function startGame() {

}

function setNextQuestion() {
    showQuestion(shuffled[currentQuestionIndex])

}

function showQuestion(question) {
    questionContainerElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.textbutton.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersButtonsElement.appendChild(button)
    })

}

function selectAnswer() {

}
const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    }
]