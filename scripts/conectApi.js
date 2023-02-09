const urlEasy = `https://the-trivia-api.com/api/questions?categories=geography&limit=10&region=BR&difficulty=easy`
const urlMedium = `https://the-trivia-api.com/api/questions?categories=film_and_tv,music&limit=15&region=BR&difficulty=medium`
const urlHard = `https://the-trivia-api.com/api/questions?categories=history&limit=20&region=BR&difficulty=hard`
const urlExtreme = `https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=20&region=BR&difficulty=hard`
let quiz = []

async function conectApi(mode){
    let url = undefined
    if(mode == "modeExtreme"){
        url = urlExtreme
    }else if(mode == "modeHard"){
        url = urlHard
    }else if(mode == "modeMedium"){
        url = urlMedium
    }else{
        url = urlEasy
    }
    
    const res = await fetch(url)
    quiz = await res.json()
    console.log(quiz)
}

export {quiz,conectApi}