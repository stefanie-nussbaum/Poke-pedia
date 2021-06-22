

// Make API request function based on user input

// const UserSearch = document.querySelector("#blank")
//uncomment above and delete this:
const UserSearch = "pikachu"
console.log(UserSearch)

const findPokemon = async (input) => {
  try {
    const searchURL = `https://pokeapi.co/api/v2/pokemon/${input}/`
    const response = await axios.get(searchURL)
    console.log(response.data)

  } catch (error) {
    console.error(error)
  }
}
findPokemon(UserSearch)

// Find correct information from API and assign to variables




// Show results on page:





// Remove old search results




// Add event listener for search button to trigger functions