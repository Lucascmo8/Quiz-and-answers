import { rulesQuestions } from "./showQuestions.js"
import { conectApi } from "./conectApi.js"

let radioBtn = document.querySelectorAll("input[name='mode']")
let labelModes = document.querySelectorAll(".modeQuiz")
let startBtn = document.getElementById("startBtn")

let modeSelected = []


async function getMode(){
        let selected = document.querySelector("input[name='mode']:checked")
        modeSelected.pop()
        modeSelected.push(selected.value)
        await conectApi(modeSelected[0])
        rulesQuestions(modeSelected[0])
    }

    startBtn.addEventListener("click", function () {
        if (modeSelected.length == 0) {
            getMode()
        }
    })

    export {modeSelected}