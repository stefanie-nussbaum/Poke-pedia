# Project Overview

## Project Name

[Poke-pedia](https://stefanie-nussbaum.github.io/Poke-pedia/)

## Project Description

This project will be a searchable database of pokemon using the Pokeapi. The user will be able to search for a pokemon by name and see lots of information about it such as the type(s), id, height, weight, and an image. The user will also get information on how effective the current pokemon's type is against other types of pokemon. The user will also be able to save pokemon to their favorites to view later.

## API and Data Sample

[Pokeapi](https://pokeapi.co/docs/v2#pokemon)

```Json 
{    
    "height": 3,
    "held_items": [],
    "id": 133,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/133/encounters",
    "name": "eevee",
    "order": 204,
    "past_types": [],
    "species": {
        "name": "eevee",
        "url": "https://pokeapi.co/api/v2/pokemon-species/133/"
    },
    "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/133.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/133.png",
        "front_shiny_female": null,
        "other": {
            "dream_world": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/133.svg",
                "front_female": null
            },
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
            }
        },
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "normal",
                "url": "https://pokeapi.co/api/v2/type/1/"
            }
        }
    ],
    "weight": 65
}
```
## Wireframes

[Wireframe](./images/Poke-pedia_Wireframe)

### MVP/PostMVP


#### MVP 

- Take user input from a search bar to find pokemon
- Call and use data from pokeapi 
- Render pokemon name, image, type(s), height, and weight data from API
- Style the pokemon information using CSS Flexbox
- Responsive CSS design

#### PostMVP  

- Add and style image(s) to the header/searchbar area
- Learn to use local storage so user may save favorite pokemon
- Create logic to provide recomendations for types of pokemon to use in a battle
- Style type recomendations underneath the main content of the pokemon
- Incorporate an image into the header for a better look

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) / Pseudocode | Complete
|June 23| HTML setup / style HTML elements / Set up API / DOM Output data | Complete
|June 24| Style output data / resposive styling / MVP | Complete
|June 25| JS logic / Style logic output / Save feature / RMVP | Complete
|June 28| Presentations | Incomplete

## Priority Matrix

[Priority Maxtrix](./images/Priority_Matrix)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML, CSS, JS setup | M | 2hrs| 0.5hrs | 0.5hrs |
| HTML page setup | M | 2hrs| 1hrs | 1hrs |
| Setting up API function | H | 3hrs| 1.5hrs | 1.5hrs |
| Header and search/user input | H | 2hrs| 0.5hrs | 0.5hrs |
| Incorporating the user input and API call | H | 2hrs| 2hrs | 2hrs |
| Debugging of the user input/API call | H | 2hrs| 1hrs | 1hrs |
| Style header and search bar | L | 3hrs| 3hrs | 3hrs |
| Pulling data and creating variables from API | H | 3hrs| 1hrs | 1hrs |
| DOM manipulation to show pokemon from user search results | H | 3hrs| 4hrs | 4hrs |
| CSS styling of pokemon information from search results | M | 3hrs| 4hrs | 4hrs |
| JS logic for super effective types | L | 3hrs| 3hrs | 3hrs |
| JS logic for not very effective types | L | 3hrs| 2hrs | 2hrs |
| DOM output to page from JS effectiveness logic | L | 2hrs| 3hrs | 3hrs |
| CSS styling for type effectiveness | L | 3hrs| 3hrs | 3hrs |
| Create the ability to save favorite pokemon | L | 3hrs| 6hrs | 6hrs |
| CSS style of the save feature | L | 3hrs| 3hrs | 3hrs |
| (added) Media query styling | M | 2hrs| 2hrs | 2hrs |
| Total | H | 42hrs| 40.5hrs | 40.5hrs |

## Code Snippet

```
const favoritesButton = document.querySelector("#view-favorites")

function viewFavorites() {
  removePrevious()
  let favPoke = localStorage.getItem("favorites")
  favPoke = JSON.parse(favPoke)
  console.log(favPoke)
  
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

```

## Change Log
- Added time for styling media query for small/mobile screens and responsive design
