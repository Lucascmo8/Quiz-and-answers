let page = document.body
let btnToggleTheme = document.getElementById("toggleModeThemeBtn")

btnToggleTheme.addEventListener("click",toggleModeTheme)

let lightModeOn = false

function toggleModeTheme(){
    page.classList.toggle("lightMode")
    if(lightModeOn == false){
        btnToggleTheme.innerText = `Dark Mode`
        lightModeOn = true
    }else{
        btnToggleTheme.innerText = `Light Mode`
        lightModeOn = false
    }

}
