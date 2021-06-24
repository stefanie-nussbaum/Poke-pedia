

// Make API request function based on user input


//uncomment above and delete this:
// const UserSearch = "pikachu"
// console.log(UserSearch)
const form = document.querySelector("form")
const pokemonDataContainer = document.querySelector("#data-container")

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
    const id = document.createElement("p")
    const types = document.createElement("p")
    const height = document.createElement("p")
    const weight = document.createElement("p")
    const image = document.createElement("img")
    
    // assign data from api
    name.innerText = capitalize(response.data.name)
    id.innerText = `ID# ${response.data.id}`
    const imageURL = response.data.sprites.other["official-artwork"].front_default
    image.setAttribute("src", imageURL)
    // image.setAttribute("alt", `${name}`)
    const typeArray = response.data.types
    console.log(typeArray)
    // types.innerText = `Type(s): ${typeArray[0].type.name}`
    
    types.innerText = typeArray.map(type => (
      capitalize(` ${type.type.name}`)))

    // let typeText = types.innerText
    // let typeArray = []
    // typeText = `Type(s): `
    // typeArray.forEach()

    // for (let i = 0; i < typeArray.length - 1; i++) {
    //   if (i === 1) {
    //     typeText.concat(", ")
    //   }
    //   typeText.concat(`${typeArray[i].type.name}`)
    // }
    // console.log(typeText)


    // // Need to check if there is a second type and call a function to log it
    // if (typeof typeArray[1] !== "undefined") {
    //   secondType(typeArray, types.innerText)
    // } else {
    //   // return types.innerText = `Type(s): ${typeArray[0].type.name}`
    // }

    

    //Should change units to m and lbs or kg (something that makes sense)
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

// Function to anazlye and add a second type if necessary
function secondType(array, string) {
  return string = `Types: ${array[0].type.name}, ${array[1].type.name}`
}


// Remove old search results

function removePrevious() {
  while (pokemonDataContainer.lastChild) {
    pokemonDataContainer.removeChild(pokemonDataContainer.lastChild)
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