
const hops = ["Fuggles", "First Gold", "Cascade", "Amarillo", "Simcoe", "Motueka", "Bramling Cross", "Centennial", "Saaz", "Nelson Sauvin", "Peppercorns", "Tomahawk", "Magnum", "Hersbrucker", "Honey", "Lactose", "Citra", "Columbus Extract", "Columbus", "Willamette", "Galena", "Hop Extract", "Chinook", "Mt.Hood", "Challenger", "Waimea", "Ahtanum", "Crystal", "Sorachi Ace", "Coffee", "HBC 369", "Dana", "Hallertauer Mittelfrüh", "Kohatu", "Blackberry Concentrate", "Sour Cherry Puree", "Mosaic", "CO2 Extract", "Goldings", "Bobek", "Ginger", "Orange Peel", "Mandarina Bavaria", "Coffee Beans", "Pacifica", "Pacific Jade", "Vic Secret"]
const malt = ["Maris Otter Extra Pale", "Caramalt", "Munich", "Propino Pale Malt", "Wheat Malt", "Propino Pale Malt for kettle souring", "Acidulated Malt for kettle souring", "Extra Pale", "Dark Crystal", "Lager Malt", "Wheat", "Chocolate", "Carafa Special Malt Type 3", "Acidulated Malt", "Flaked Oats", "Crystal", "Peated Malt", "Amber", "Brown", "Crystal 150", "Pale Ale", "Smoked Weyermann", "Carafa Special Malt Type 1", "Dark Crystal 350-400", "Pale Ale - Tipple", "Extra Pale - Spring Blend", "Roasted Barley", "Smoked Malt", "Crystal 120", "Honey", "Rye", "Pale Crystal", "Weyermann Beech Smoked", "Popcorn", "Pale Chocolate", "Torrified Wheat", "Smoked Peaty", "Dextrose", "Black Malt", "Special W", "Dark Crystal 350", "Black Patent"]
const yeast = ["Wyeast 1056 - American Ale™", "Wyeast 2007 - Pilsen Lager™", "Wyeast 3711 - French Saison™", "Wyeast 3522 - Belgian Ardennes™", "Saflager S189", "Wyeast 1272 - American Ale II™", "Wyeast 3333 - German Wheat™", "Wyeast 3638 - Bavarian Wheat™", "WLP500 - Monastery Ale", "Wyeast 1010 - American Wheat™", "WLP099 - Super High Gravity Ale", "Wyeast 3787 - Trappist High Gravity™"]
/***********************

        API-fetch

 ***********************/

// Function to fetch beer data
async function fetchBeerData(query) {
  const response = await fetch("https://api.punkapi.com/v2/beers" + query)
  let data = await response.json()
  return data
}
// API-fetch ENDS //

/*
function för att leta data ta bort sen
async function getBeer() {
  const temp = []
  const beers = await fetchBeerData("?per_page=80")
  console.log(beers)
  for (let current of beers) {
    if (!yeast.includes(current.ingredients.yeast)) {
        temp.push(current.ingredients.yeast)
    }
  }
  console.log(temp)
}
getBeer()
*/





document.getElementById("search").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    clearMain()
    searchForBeer()
  }
});


// EventListeners ENDS //


/*********************** Functions ***********************/

async function searchForBeer() {
  searchInput = document.getElementById("search").value.toLowerCase();

  const query = "?beer_name="
  const fetch = query + searchInput
  let beer = await fetchBeerData(fetch)

  for (let i = 0; i < beer.length; i++) {
    createSearchResult(beer[i])
  }
}


function createSearchResult(beer) {

  /** Html-structure **/
  const main = document.querySelector("main")

  const cardWrapper = document.createElement("div")
  cardWrapper.className = "card-wrapper"
  main.append(cardWrapper)

  const card = document.createElement("a")
  card.href = "#"
  card.className = "card card-small"
  cardWrapper.append(card)

  const leftAside = document.createElement("div")
  leftAside.className = "card-left-aside"
  card.append(leftAside)

  const img = document.createElement("img")
  img.className = "card-img"
  leftAside.append(img)

  const content = document.createElement("div")
  content.className = "card-content"
  card.append(content)

  const headline = document.createElement("h1")
  headline.className = "card-headline"
  content.append(headline)

  const rightAside = document.createElement("div")
  rightAside.className = "right-aside"
  card.append(rightAside)

  /** Html-structure  ends **/

  //Shorten the beer description to fit inside the "card"-element
  const shortenDescription = shorten(beer.description, 150, " ") + "..."

  // Add content
  content.innerHTML = `<h1>${beer.name}</h1><p>${shortenDescription}<p>`
  img.src = beer.image_url

  card.addEventListener("click", () => {
    clearMain()
    beerDetails(beer)
  })

}

/**    function createSearchResult() ENDS */

drick()
async function drick() {
  const response = await fetch("https://api.punkapi.com/v2/beers/random")
  let data = await response.json()
  data = data[0]
  beerDetails(data)
}



function beerDetails(beer) {

  /** Html-structure **/

  const main = document.querySelector("main")
  const card = document.createElement("div")
  card.className = "card card-big"
  main.append(card)

  const leftAside = document.createElement("div")
  leftAside.className = "card-left-aside"
  card.append(leftAside)

  const img = document.createElement("img")
  img.className = "card-img"
  leftAside.append(img)

  const content = document.createElement("div")
  content.className = "card-content"
  card.append(content)

  const rightAside = document.createElement("div")
  rightAside.className = "right-aside"
  card.append(rightAside)

  const CreateHopsUl = document.createElement("ul")
  CreateHopsUl.className = "ingredients-hops"
  rightAside.append(CreateHopsUl)

  const CreateMaltsUl = document.createElement("ul")
  CreateMaltsUl.className = "ingredients-malts"
  rightAside.append(CreateMaltsUl)

  const createYeastsUl = document.createElement("ul")
  createYeastsUl.className = "ingredients-yeasts"
  rightAside.append(createYeastsUl)

  /** Html-structure  ends **/

  const hops = beer.ingredients.hops
  const hopsUl = document.querySelector(".ingredients-hops")
  getIngredients(hops, hopsUl)

  const malts = beer.ingredients.malt
  const maltsUl = document.querySelector(".ingredients-malts")
  getIngredients(malts, maltsUl)

  const yeasts = beer.ingredients.yeast
  const yeastsUl = document.querySelector(".ingredients-hops")
  getIngredients(yeasts, yeastsUl)

  // Add content
  content.innerHTML = `<h1>${beer.name}</h1><p>${beer.description}<p>${beer.abv}%</p><p>${beer.volume.value} ${beer.volume.unit}</p><p>${beer.brewers_tips}</p></p>`

  img.src = beer.image_url




  /*
   
    beer.food_pairing
  
  */


  function getIngredients(ingredients, nameOfUl) {

    // Temporary array for holding all ingredients
    let allIngredients = []

    // 
    if (typeof ingredients == "object") {
      // Iterating and then pushing every ingredient to "allIngredients"
      for (const ingredient of ingredients) {
        allIngredients.push(ingredient.name)
      }
    } else {
      // (if string) just push that value
      allIngredients.push(ingredients)
    }

    // Remove all duplicate from original array (allIngredients)
    const noDuplicates = [...new Set(allIngredients)];

    //Calls function to render in to webpage
    for (const ingredient of noDuplicates) {
      addItemtoUl(ingredient, nameOfUl)
    }
  }
}


/**************** reusable functions  *****************/

// Adds <li>-items to a <ul>
function addItemtoUl(item, nameOfUl) {
  const listItem = document.createElement("li")
  listItem.innerHTML = item
  nameOfUl.append(listItem)
}

// Function for shortening sentences and no wordbreak
function shorten(str, maxNumOfChar, separator = " ") {
  if (str.length <= maxNumOfChar) return str;
  return str.substr(0, str.lastIndexOf(separator, maxNumOfChar));
}

//  Clears all content from the <main>
function clearMain() {
  document.querySelector("main").innerHTML = ""
}

// Prevent form from refreshing the page
function preventDefault(event) {
  event.preventDefault();
}