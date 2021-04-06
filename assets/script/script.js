const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const answersButtonsElement = document.getElementById('answer-buttons')
const questionel = document.getElementById("question")
const timerl = document.getElementById("timerdisplay")
let shuffleQuestions, currentQuestionIndex, timeleft
var highscore = []
function startGame() {

    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    timeleft = 60

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
        timeleft -= 10
    }


    setNextQuestion()
    console.log(correct)
}


function endquiz() {
    // timerl.setAttribute("style","display: hidden")
    clearInterval(timer)
    document.querySelector("#initialscontainer").classList.remove("hide")
    alert("game over")
}
const questions = [
    {
        question: 'The external JavaScript file must contain the <script> tag',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<scripting>', correct: false },
            { text: '<js>', correct: false },
            { text: '<javascript>', correct: false }
        ]
    },
    {
        question: 'Is JavaScript case-sensitive?',
        answers: [
            { text: 'False', correct: false },
            { text: 'True', correct: true },
        ]
    },
    {
        question: 'What will the following code return: Boolean(10 > 9)',
        answers: [
            { text: 'False', correct: false },
            { text: 'True', correct: true },
            { text: 'NaN', correct: false }
        ]
    },
    {
        question: 'How do you declare a JavaScript variable?',
        answers: [
            { text: 'variable carName;', correct: false },
            { text: 'v carName;', correct: false },
            { text: 'var carName;', correct: true }
        ]
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: [

            { text: 'onmouseover', correct: false },
            { text: 'onclick', correct: true },
            { text: 'onchange', correct: false },
            { text: 'onmouseclick', correct: false }
        ]
    },
    {
        question: 'How does a FOR loop start?',
        answers: [
            { text: 'for (i = 0; i <= 5)', correct: false },
            { text: 'for (i <= 5; i++)', correct: false },
            { text: 'for i = 1 to 5', correct: false },
            { text: 'for (i = 0; i <= 5; i++)', correct: true },
        ]
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        answers: [
            { text: 'This is a comment', correct: false },
            { text: '<!--This is a comment-->', correct: false },
            { text: '//This is a comment', correct: true }

        ]
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
            { text: 'var colors = "red", "green", "blue"', correct: false },
            { text: 'var colors = ["red", "green", "blue"] ', correct: true },
            { text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false },
            { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false },

        ]
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            { text: '-', correct: false },
            { text: 'X', correct: false },
            { text: '=', correct: true },
            { text: '*', correct: false }
        ]
    }
]



startButton.addEventListener("click", startGame)
document.querySelector("#initials").addEventListener("submit", function (event) {
    event.preventDefault()
    var initials = document.querySelector("#init").value
    var paring = {
        initials: initials,
        score: timeleft
    }
    highscore.push(paring)
    localStorage.setItem("highscore", JSON.stringify(highscore))
    document.querySelector("#initialscontainer").classList.add("hide")
})


document.querySelector("#highscore-button").addEventListener("click", function () {
    var scorelist = document.querySelector("#scorelist")
    var scores = JSON.parse(localStorage.getItem("highscore"))
    for (let i = 0; i < 5; i++) {
        if (i >= scores.length) {
            return
        }
        var p = document.createElement("p")
        p.textContent = `${scores[i].initials} - ${scores[i].score}`
        scorelist.appendChild(p)

    }
})