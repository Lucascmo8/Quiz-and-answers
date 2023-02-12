import { currentQuestion, timerText } from "./showQuestions.js"
import { amountOfQuestions } from "./showQuestions.js"
import { showQuestions } from "./showQuestions.js"
import { nextQuestion } from "./showQuestions.js"

let time = 91
var cron;
function timer(){
    cron = setInterval(timerFunction,1000)
}

function timerFunction(){
    time--
    timerText.innerText = `${time}S`
    if(time == 0){
        stopTimer()
        verifyTime()
    }
}
function stopTimer(){
    clearInterval(cron)
    time = 91
}

function verifyTime(){
    console.log(currentQuestion,amountOfQuestions)
    if(currentQuestion == amountOfQuestions-1){
        nextQuestion()
    }else if(currentQuestion<amountOfQuestions-1){
        nextQuestion()
        setTimeout(showQuestions,1000)
    }
}

export{timer,
stopTimer}