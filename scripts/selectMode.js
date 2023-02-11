import { rulesQuestions } from "./showQuestions.js"
import { conectApi } from "./conectApi.js"

let radioBtn = document.querySelectorAll("input[name='mode']")
let labelModes = document.querySelectorAll(".modeQuiz")
let startBtn = document.getElementById("startBtn")

let modeSelected = []


async function getMode(){
        let selected = document.querySelector("input[name='mode']:checked")
        modeSelected.pop()
        if(selected != undefined){
            modeSelected.push(selected.value)
        }
        if(modeSelected[0] == undefined){
            alert(`Select one Mode quiz`)
        }else{
            await conectApi(modeSelected[0])
            rulesQuestions(modeSelected[0])
        }
    }

    startBtn.addEventListener("click", function () {
        startBtn.classList.add("animate__animated")
        startBtn.classList.add("animate__tada")
        if (modeSelected.length == 0) {
            setTimeout(getMode, 1000*1.5);
        }
        setTimeout(removeAnimationStartBtn,1500)
    })

    function removeAnimationStartBtn(){
        startBtn.classList.remove("animate__animated")
        startBtn.classList.remove("animate__tada")
    }

    export {modeSelected}