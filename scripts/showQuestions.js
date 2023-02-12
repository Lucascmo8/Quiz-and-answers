let amountOfQuestions = undefined
let useTimer = undefined
let currentQuestion = 0

function rulesQuestions(mode) {
    if (mode == "modeExtreme") {
        currentQuestion = 0
        amountOfQuestions = 20
        useTimer = true
    } else if (mode == "modeHard") {
        currentQuestion = 0
        amountOfQuestions = 20
        useTimer = false
    } else if (mode == "modeMedium") {
        currentQuestion = 0
        amountOfQuestions = 15
        useTimer = false
    } else {
        currentQuestion = 0
        amountOfQuestions = 10
        useTimer = false
    }
    showQuestions()
    quizSection.style.display = "flex"
}



import {
    showResult
} from "./showResult.js"

function nextQuestion() {
    if (currentQuestion < amountOfQuestions) {
        currentQuestion++
    }
    if(currentQuestion == amountOfQuestions){
        showResult()
    }
}

import {
    quiz
} from "./conectApi.js"

import {
    correctCounter
} from "./showResult.js"

let quizSection = document.getElementById("questionsSection")
let homePage = document.getElementById("home")

var scrambledAnswers = []

async function shuffleAnswer() {
    let answers = [quiz[currentQuestion].correctAnswer, quiz[currentQuestion].incorrectAnswers[0], quiz[currentQuestion].incorrectAnswers[1], quiz[currentQuestion].incorrectAnswers[2]]

    console.log(answers)

    for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]]
    }

    scrambledAnswers = answers
}

async function showQuestions() {
    showAnimationHomePage()

    await setTimeout(removeHomePage,1000)

    setTimeout(showQuizSection,500)


    if (currentQuestion < amountOfQuestions) {
        shuffleAnswer()
        quizSection.innerHTML = `
            <h3>Question ${currentQuestion + 1}</h3>
            <div>
                <h4>${quiz[currentQuestion].question}</h4>
                
                <div>
                    <input type="radio" name="options" id="option1" value="${scrambledAnswers[0]}" class="radioOptionsQuiz">
                    <label for="option1" class="optionQuiz" id="labelOption1"><div><p>1</p></div><p class="textAnswers">${scrambledAnswers[0]}</p></label>


                    <input type="radio" name="options" id="option2" value="${scrambledAnswers[1]}" class="radioOptionsQuiz">
                    <label for="option2" class="optionQuiz" id="labelOption2"><div><p>2</p></div><p class="textAnswers">${scrambledAnswers[1]}</p></label>


                    <input type="radio" name="options" id="option3" value="${scrambledAnswers[2]}" class="radioOptionsQuiz">
                    <label for="option3" class="optionQuiz" id="labelOption3"><div><p>3</p></div><p class="textAnswers">${scrambledAnswers[2]}</p></label>


                    <input type="radio" name="options" id="option4" value="${scrambledAnswers[3]}" class="radioOptionsQuiz">
                    <label for="option4" class="optionQuiz" id="labelOption4"><div><p>4</p></div><p class="textAnswers">${scrambledAnswers[3]}</p></label>
                </div>    
            </div>
            <button id="nextBtn">Next</button>` 
    }

    let nextBtn = await document.getElementById("nextBtn")
    nextBtn.addEventListener("click", function () {
        let answerOptionChecked = document.querySelector("input[name='options']:checked")
        correctCounter(answerOptionChecked.value)
        nextQuestion()
        if (currentQuestion < amountOfQuestions){
            setTimeout(showQuestions,100)
        }
        removeQuizSection()
    })
}

function showAnimationHomePage(){
    let corpo = document.body
    corpo.style.overflow = "hidden"
    homePage.classList.add("animate__animated")
    homePage.classList.add("animate__backOutDown")

}

function removeHomePage(){
    homePage.classList.remove("animate__animated")
    homePage.classList.remove("animate__backOutDown")
    homePage.style.display = "none"
    let corpo = document.body
    corpo.style.overflow = "visible"
}

function showQuizSection(){
    let corpo = document.body
    corpo.style.overflow = "hidden"
    quizSection.style.display = "flex"
    quizSection.classList.add("animate__animated")
    quizSection.classList.add("animate__backInRight")
}

function removeQuizSection(){
    quizSection.style.display = "none"
    quizSection.classList.remove("animate__animated")
    quizSection.classList.remove("animate__backInRight")
    let corpo = document.body
    corpo.style.overflow = "visible"
}

export {
    showQuestions,
    rulesQuestions,
    currentQuestion,
    amountOfQuestions,
    quizSection,
    homePage
}