//Example fetch using pokemonapi.co
document.querySelector('#start').addEventListener('click', getFetch)

function getFetch(){
  let pokemonNames = ["bulbasaur", "charmander", "squirtle", "oddish", "vulpix", "staryu", "ponyta", "bellsprout", "magikarp", "cyndaquil", "totodile", "treecko"];

  const poke1 = pokemonNames[Math.floor(Math.random() * 10)]//document.querySelector('#poke1').value
  console.log(poke1)
  const poke2 = pokemonNames[Math.floor( Math.random() * 10)]//document.querySelector('#poke2').value
  console.log(poke2)
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  console.log(url)
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  console.log(url2)
  let pokeStore = []
  let pokeImg = []
  let pokeName =[]
  let map ={
    "fire"    : ["water"],
    "water"   : ["grass"],
    "grass"   : ["fire"]
  }
  let answer =["Right!","Wrong!"]
  let output = document.querySelector("#winner")
  
  
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        output.setAttribute('visibility','hidden')
        pokeName.push(data.name)
        
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        console.log(pokeStore,pokeImg)  
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          pokeName.push(data.name)
          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)
          console.log(pokeStore,pokeImg) 
          //if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
            document.querySelector('#pokeB1').innerText = pokeName[0]
            document.querySelector('#pokeB2').innerText  = pokeName[1]
          name:
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            
           if (map[pokeStore[0]] != pokeStore[1]){
            answer =["Right!","Wrong!"]
           }else{
            answer =["Wrong!","Right!"]
           }function answerTime(num){
    output.innerText =answer[num]
    output.setAttribute('visibility','visible')
           }
           document.querySelector('#pokeB1').addEventListener('click', () => {answerTime(0)})
           document.querySelector('#pokeB2').addEventListener('click', () => {answerTime(1)})
           console.log(pokeStore[0],map[pokeStore[0]],pokeStore[1],output.innerText)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      

      
}