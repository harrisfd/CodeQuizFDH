const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const answersButtonsElement = document.getElementById('answer-buttons')
const questionel = document.getElementById("question")
const timerl = document.getElementById("timerdisplay")
let shuffleQuestions, currentQuestionIndex, timeleft

function startGame() {

    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    timeleft = 15

    timer = setInterval(() => {
        if (timeleft >= 0) {
            timerl.textContent = timeleft
            timeleft--
        }
        else {
            timeleft = 0
            clearInterval(timer)
            endquiz()
        }

    }, 1000);
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex])
    } else {
        endquiz()
    }

}

function showQuestion(question) {
    answersButtonsElement.innerHTML = ""
    questionel.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersButtonsElement.appendChild(button)
    })
    currentQuestionIndex++
}

function selectAnswer(event) {
    var correct = event.target.getAttribute("data-correct")

    if (!correct) {
        timeleft -= 5
    }


    setNextQuestion()
    console.log(correct)
}


function endquiz() {
    // timerl.setAttribute("style","display: hidden")
    clearInterval(timer)
    alert("game over")
}
const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'What is 2 + 4',
        answers: [
            { text: '6', correct: true },
            { text: '30', correct: false }
        ]
    },
    {
        question: 'What is 2 + 5',
        answers: [
            { text: '7', correct: true },
            { text: '28', correct: false }
        ]
    }
]



startButton.addEventListener("click", startGame)
document.querySelector("#initials").addEventListener("submit", function (event) {
    event.preventDefault()
    var intials = document.querySelector("#init").value
    console.log(intials)
})