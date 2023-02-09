const urlApi = `https://the-trivia-api.com/api/questions?categories=geography,film_and_tv,food_and_drink,general_knowledge,history,music,science,society_and_culture,sport_and_leisure,arts_and_literature&limit=15&region=BR&difficulty=medium`
let quiz = []

conectApi(urlApi)
async function conectApi(url){
    const res = await fetch(url)
    quiz = await res.json()
    console.log(quiz)
}

export {quiz}