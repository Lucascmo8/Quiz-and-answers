import { quiz } from "./conectApi.js"
import { currentQuestion } from "./showQuestions.js"
import { amountOfQuestions } from "./showQuestions.js"
import { quizSection } from "./showQuestions.js"
import { homePage } from "./showQuestions.js"
import { cleanQuiz } from "./cleanQuiz.js"
let resultSection = document.getElementById("resultSection")

let answersCorrect = 0

async function correctCounter(valor){
    if(valor == quiz[currentQuestion].correctAnswer){
        answersCorrect++
        console.log(answersCorrect)
    }
}

async function showResult(){
    quizSection.style.display = "none"
    resultSection.style.display = "flex"
    resultSection.innerHTML = `
    <div>
        <h3>Congratulation</h3>
        <p>Category: ALL</p>
        <p>
        you answered <span>${answersCorrect} / ${amountOfQuestions}</span>
        question correct
        </p>
    </div>
    <div><button id="backBtn">Back Home</button></div>
    `
    let backBtn = await document.getElementById("backBtn")
    backBtn.addEventListener("click",function(){
        answersCorrect = 0
        resultSection.style.display = "none"
        homePage.style.display = "flex"
        cleanQuiz()
    })
}

export {correctCounter,showResult,answersCorrect}