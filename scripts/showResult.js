import { quiz } from "./conectApi.js"
import { currentQuestion } from "./showQuestions.js"
import { amountOfQuestions } from "./showQuestions.js"
import { quizSection } from "./showQuestions.js"
import { homePage } from "./showQuestions.js"
import { cleanQuiz } from "./cleanQuiz.js"
import { modeSelected } from "./selectMode.js"
let resultSection = document.getElementById("resultSection")

let answersCorrect = 0

async function correctCounter(valor){
    if(valor == quiz[currentQuestion].correctAnswer){
        answersCorrect++
        console.log(answersCorrect)
    }
}
let categoryMode = `General Knowgledge`

async function categoryQuiz(){
    if(modeSelected == "modeExtreme"){
        categoryMode = `General Knowgledge`
    }else if(modeSelected == "modeHard"){
        categoryMode = `History`
    }else if(modeSelected == "modeMedium"){
        categoryMode = `Film, Tv and Music`
    }else{
        categoryMode = `Geography`
    }
}

async function showResult(){
    quizSection.style.display = "none"

    showResulSection()
    categoryQuiz()
    resultSection.innerHTML = `
    <div id="congratulationText">
        <h3>Congratulation!</h3>
        <p>Category: ${categoryMode} </p>
        <p>
        you answered <br><span>${answersCorrect} / ${amountOfQuestions}</span><br>
        question correct
        </p>
    </div>
    <div><button id="backBtn">Back Home</button></div>
    `
    let backBtn = await document.getElementById("backBtn")
    backBtn.addEventListener("click",function(){
        answersCorrect = 0
        removeResulSection()
        setTimeout(removeResulSection,1000)
        setTimeout(function(){
            homePage.style.display = "flex"
        },100)
        cleanQuiz()
    })
}

function showResulSection(){
    resultSection.style.display = "flex"
    let corpo = document.body
    corpo.style.overflow = "hidden"
    resultSection.classList.add("animate__animated")
    resultSection.classList.add("animate__bounceInDown")
}

function removeResulSection(){
    resultSection.classList.remove("animate__animated")
    resultSection.classList.remove("animate__bounceInDown")
    resultSection.style.display = "none"
    let corpo = document.body
    corpo.style.overflow = "visible"
}

export {correctCounter,showResult,answersCorrect,categoryQuiz}