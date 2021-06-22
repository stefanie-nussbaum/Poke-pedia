

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
    console.log(response.data)

    // create variables for the info
    const name = response.data.name
    const id = response.data.id
    const imageURL = response.data.sprites.other.official-artwork.front_default
    const type1 = response.data.types.0.type.name
    const type2 = response.data.types.1.type.name
    const height = response.data.height
    const weight = response.data.weight

    // create html elements and show results on page

  } catch (error) {
    console.error(error)
  }
}
// findPokemon(UserSearch)






// Remove old search results

function removePrevious() {
  
}


// Add event listener for search button to trigger functions

form.addEventListener("submit", searchFunction)

function searchFunction(e) {
  e.preventDefault()
  const UserSearch = document.querySelector("#blank").value
  findPokemon(UserSearch)
  return UserSearch
}