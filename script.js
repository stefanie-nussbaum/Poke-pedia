
const form = document.querySelector("#searchForm")

const pokemonDataContainer = document.querySelector("#data-container")
const pokemonEffectiveness = document.querySelector("#effectiveness")
const pokeFavoritesArray = []
let savePokeObj = ""

// Make API request function based on user input

const findPokemon = async (input) => {
  try {
    const searchURL = `https://pokeapi.co/api/v2/pokemon/${input}/`
    const response = await axios.get(searchURL)
    appendPokeData(response)
    
    return response
  } catch (error) {
    console.error(error)
  }
}


 // Display data on page

function appendPokeData(response) {
  savePokeObj = response
  console.log(savePokeObj)
  const pokemonInfo = document.createElement("div")
  pokemonInfo.classList = "pokemon-info"
  
  // Create variables for API information
  const name = document.createElement("h2")
  const id = document.createElement("p")
  const types = document.createElement("p")
  const height = document.createElement("p")
  const weight = document.createElement("p")
  const image = document.createElement("img")
  image.className = "pokemon-image"
    
  // assign data from api
  name.innerText = capitalize(response.data.name)
  id.innerText = `ID# ${response.data.id}`
  const imageURL = response.data.sprites.other["official-artwork"].front_default
  image.setAttribute("src", imageURL)
  const typeArray = response.data.types
  types.innerText = `Type(s):`
   
  types.innerText += typeArray.map(type => (
  capitalize(` ${type.type.name}`)))
    

  height.innerText = `Height: ${(response.data.height) / 10}m`
  weight.innerText = `Weight: ${(response.data.weight) / 10}kg`

  // create html elements and show results on page
  pokemonDataContainer.append(image)
  pokemonDataContainer.append(pokemonInfo)
  pokemonInfo.append(name)
  pokemonInfo.append(id)
  pokemonInfo.append(types)
  pokemonInfo.append(height)
  pokemonInfo.append(weight)

  const typeInfo = document.createElement("div")
  typeInfo.className = "type-effectiveness"
  typeInfo.innerText = `Type Effectiveness of ${capitalize(name.innerText)}:`
  pokemonEffectiveness.append(typeInfo)


    // create type effectiveness logic

    for (let i = 0; i < typeArray.length; i++) {
      // console.log(typeArray[i].type.name)
      let type = typeArray[i].type.name
      const typeRecs = document.createElement('p')
      typeInfo.append(typeRecs)
      const typeNotRecs = document.createElement('p')
      typeInfo.append(typeNotRecs)
      const noEffect = document.createElement("p")
      typeInfo.append(noEffect)

      if (type === "normal") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are not super effective against any other types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against rock and steel types.`
        noEffect.innerText = `${capitalize(type)} types have no effect against ghost types.`

      } else if (type === "fire") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against grass, ice, bug, and steel types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against fire, water, rock, and dragon types.`

      } else if (type === "water") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against fire, ground, and rock types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against water, grass, and steel types.`

      } else if (type === "electric") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against water and flying types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against electric, grass, and dragon types.`
        noEffect.innerText = `${capitalize(type)} types have no effect against ground types.`

      } else if (type === "grass") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against water, ground, and rock types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against fire, grass, poison, flying, bug, dragon, and steel types.`

      } else if (type === "ice") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against grass, ground, flying, and dragon types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against fire, water, ice, and steel types.`
        
      } else if (type === "fighting") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against normal, ice, rock, dark, and steel types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against poison, flying, psychic, bug, and fairy types.`
        noEffect.innerText = `${capitalize(type)} types have no effect against ghost types.`
        
      } else if (type === "poison") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against grass and fairy types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against poison, ground, rock, and ghost types.`
        noEffect.innerText = `${capitalize(type)} types have no effect against steel types.`
        
      } else if (type === "ground") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against fire, electric, poison, rock, and steel types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against rock, ghost, or steel types.`
        noEffect.innerText = `${capitalize(type)} types have no effect against flying types.`

      } else if (type === "flying") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against grass, fighting, and bug types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against electric, rock, and steel types.`
        
      } else if (type === "psychic") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against fighting and poison types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against psychic and steel types.`
        noEffect.innerText = `${capitalize(type)} types have no effect against dark types.`
        
      } else if (type === "bug") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against grass, psychic, and dark types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against fire, fighting, poison, flying, ghost, steel, and fairy types.`

      } else if (type === "rock") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against fire, ice, flying, and bug types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against fighting, ground, and steel types.`
        
      } else if (type === "ghost") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against psychic and ghost types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against dark types.`
        noEffect.innerText = `${capitalize(type)} types have no effect against normal types.`
        
      } else if (type === "dragon") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against dragon types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against steel types.`
        noEffect.innerText = `${capitalize(type)} types have no effect against fairy types.`
        
      } else if (type === "dark") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against psychic and ghost types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against fighting, dark, and fairy types.`
        
      } else if (type === "steel") {
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against ice, rock, and fairy types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against fire, water, electric, and steel types.`
        
      } else {
        // only type left should be fairy
        typeRecs.innerText = `${capitalize(type)} type pokemon are super effective against fighting, dragon, and dark types.`
        typeNotRecs.innerText = `${capitalize(type)} type pokemon are not very effective against fire, poison, and steel types.`
      }
    }

}


// Capitalize function:
// Source used to figure out capitalization: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}


// Remove old search results

function removePrevious() {
  while (pokemonDataContainer.lastChild) {
    pokemonDataContainer.removeChild(pokemonDataContainer.lastChild)
  }
  while (pokemonEffectiveness.lastChild) {
    pokemonEffectiveness.removeChild(pokemonEffectiveness.lastChild)
  }
}


// Add event listener for search button to trigger functions

form.addEventListener("submit", searchFunction)

function searchFunction(e) {
  e.preventDefault()
  const userSearch = document.querySelector("#input").value
  removePrevious()
  findPokemon(userSearch)
  return userSearch
}


// Adding to favorites


const addFavorites = document.querySelector("#add-favorites")

function saveToFavorites(pokeData) {
  pokeFavoritesArray.push(pokeData.data)
  localStorage.setItem("favorites", JSON.stringify(pokeFavoritesArray))
  
}

addFavorites.addEventListener("click", () => {
  saveToFavorites(savePokeObj)
})




// View favorites

const favoritesButton = document.querySelector("#view-favorites")

function viewFavorites() {
  removePrevious()
  let favPoke = localStorage.getItem("favorites")
  favPoke = JSON.parse(favPoke)
  console.log(favPoke)
  
  // Looping through favorites and appending each name and image to the page

  for (let i = 0; i < favPoke.length; i++) {
    const favoriteInfo = document.createElement("div")
    favoriteInfo.className = "favorite-container"
    const name = document.createElement("h3")
    name.className = "favorite-name"
    const image = document.createElement("img")
    image.className = "favorite-pokemon-image"
    const imageURL = favPoke[i].sprites.other["official-artwork"].front_default
    image.setAttribute("src", imageURL)
    name.innerText = capitalize(favPoke[i].name)

    pokemonDataContainer.append(favoriteInfo)
    favoriteInfo.append(image)
    favoriteInfo.append(name)
  }

}

favoritesButton.addEventListener("click", viewFavorites)



