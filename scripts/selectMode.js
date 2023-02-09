import { quiz } from "./conectApi.js"

let radioBtn = document.querySelectorAll("input[name='mode']")
let labelModes = document.querySelectorAll(".modeQuiz")
let startBtn = document.getElementById("startBtn")
let quizSection = document.getElementById("questionsSection")


console.log(labelModes)
let modeSelected = []

let getMode = ()=> {
    let selected = document.querySelector("input[name='mode']:checked")
    modeSelected.pop()
    modeSelected.push(selected.value)
    console.log(modeSelected)
}

startBtn.addEventListener("click",function(){
    console.log(modeSelected)
    getMode()
    if(modeSelected.length > 0){
        showQuestions()
    }
})

async function showQuestions(){
    let questoes = await quiz
    quizSection.innerHTML = ``
    quizSection.innerHTML = `
    <div>
        <h4>${questoes[0].question}</h4>
        <ul>
            <li>${questoes[0].correctAnswer}</li>
            <li>${questoes[0].incorrectAnswers[0]}</li>
            <li>${questoes[0].incorrectAnswers[1]}</li>
            <li>${questoes[0].incorrectAnswers[2]}</li>
        </ul>
    </div>`
    questoes.pop()
}