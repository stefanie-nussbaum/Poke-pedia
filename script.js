

// Make API request function based on user input


const form = document.querySelector("#searchForm")
const favoritesButton = document.querySelector("#favorites-button")
const pokemonDataContainer = document.querySelector("#data-container")
const pokemonEffectiveness = document.querySelector("#effectiveness")
const pokeFavoritesArray = []

const findPokemon = async (input) => {
  try {
    const searchURL = `https://pokeapi.co/api/v2/pokemon/${input}/`
    const response = await axios.get(searchURL)
    // console.log(response.data)

    // create variables for the info
    
    //append html elements to the page

    const pokemonInfo = document.createElement("div")
    pokemonInfo.classList = "pokemon-info"
    
    const name = document.createElement("h2")
    const addFavorite = document.createElement("button")
    addFavorite.classList = "favButton"
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
    // image.setAttribute("alt", `${name}`)
    const typeArray = response.data.types
    // console.log(typeArray)
    types.innerText = `Type(s):`
    
    types.innerText += typeArray.map(type => (
    capitalize(` ${type.type.name}`)))
    

    //Should change units to m and lbs or kg (something that makes sense)
    height.innerText = `Height: ${(response.data.height) / 10}m`
    weight.innerText = `Weight: ${(response.data.weight) / 10}kg`

    // create html elements and show results on page
    pokemonDataContainer.append(image)
    pokemonDataContainer.append(pokemonInfo)
    pokemonInfo.append(name)
    name.append(addFavorite)
    pokemonInfo.append(id)
    pokemonInfo.append(types)
    pokemonInfo.append(height)
    pokemonInfo.append(weight)

    const typeInfo = document.createElement("div")
    typeInfo.className = "type-effectiveness"
    typeInfo.innerText = `Type Effectiveness of ${capitalize(name.innerText)}`
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


    //Favorites event handler goes inside function?
    addFavorite.addEventListener("click", saveToFavorites(response.data))
    

    return response
  } catch (error) {
    console.error(error)
  }
}
// findPokemon(UserSearch)

// Capitalize function

function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

// // Function to anazlye and add a second type if necessary
// function secondType(array, string) {
//   return string = `Types: ${array[0].type.name}, ${array[1].type.name}`
// }


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
  const UserSearch = document.querySelector("#blank").value
  removePrevious()
  findPokemon(UserSearch)
  return UserSearch
}


// Local storage for favorites


// const favoritesButton = document.querySelector("#favoritesButton")

function saveToFavorites(pokeData) {
  pokeFavoritesArray.push(pokeData)
  console.log(pokeFavoritesArray)

  // localStorage.setItem("name", response.data.name)
  
  // console.log(localStorage)
  // localStorage.setItem("name")
}


// fav.addEventListener("click", saveToFavorites)


// View favorites

function viewFavorites() {
  removePrevious()
  let savedPokemon = []
  let keys = Object.keys(localStorage)
  let i = keys.length

  while (i--) {
    savedPokemon.push(localStorage.getItem(keys[i]))
  }
  return savedPokemon
}

// console.log(localStorage)


// viewFavorites.addEventListener("click", viewFavorites)
