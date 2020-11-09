


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



/***********************

        EventListeners

 ***********************/

document.getElementById("search").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    clearMain()
    searchForBeer()
  }
});


// EventListeners ENDS //


/***********************

        Functions

 ***********************/


async function searchForBeer() {
  searchInput = document.getElementById("search").value.toLowerCase();

  const query = "?beer_name="
  const fetch = query + searchInput
  let beer = await fetchBeerData(fetch)

  if (isLightChecked === true) {
    beer = beer.filter(beer => beer.ph < light)
  } else if (isStrongChecked === true) {
    beer = beer.filter(beer => beer.ph >= strong)
  }


  for (let i = 0; i < beer.length; i++) {
    createSearchResult(beer[i])
  }
}


function createSearchResult(beer) {


  //Shorten the beer description to fit inside the "card"-element
  shortenDescription = shorten(beer.description, 150, " ") + "..."

  const cardWrapper = document.createElement("div")
  cardWrapper.className = "card-wrapper"

  const card = document.createElement("a")
  card.href = "#"
  card.id = beer.id
  card.className = "card"
  cardWrapper.append(card)

  const cardImg = document.createElement("img")
  cardImg.className = "card-img"
  cardImg.src = beer.image_url

  // Check if a beer-image exists, if not inserts generic img and giving it the class off missing
  if (cardImg.src == "http://127.0.0.1:5500/null") {
    cardImg.src = "img/missing.png"
    cardImg.className = "card-img missing"
  }

  card.append(cardImg)

  const cardContent = document.createElement("div")
  cardContent.className = "card-content"
  card.append(cardContent)

  const cardContentHeadline = document.createElement("h1")
  cardContentHeadline.innerHTML = beer.name
  cardContentHeadline.className = "card-content-headline"
  cardContent.appendChild(cardContentHeadline)

  const cardContentDescription = document.createElement("p")
  cardContentDescription.classList = "card-content-description"
  cardContentDescription.innerHTML = shortenDescription
  cardContent.appendChild(cardContentDescription)

  const cardQuickfacts = document.createElement("div")
  cardQuickfacts.className = "card-quickfacts"
  card.append(cardQuickfacts)

  const cardQuickFactsPh = document.createElement("p")
  cardQuickFactsPh.className = "card-quickfacts-ph"
  cardQuickFactsPh.innerHTML = beer.ph
  cardQuickfacts.append(cardQuickFactsPh)

  // Outputs the result inside <main>
  document.querySelector("main").append(cardWrapper)
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

  //Object that holds the HTML-structure, that will be used to create the layout on the page
  const htmlStructure = [
    {
      "element": "div",
      "addClassName": "beer-details",
      "appendTo": "main",
    },
    {
      "element": "div",
      "addClassName": "beer-details-ingredients",
      "appendTo": "beer-details",
    },
    {
      "element": "div",
      "addClassName": "beer-details-ingredients-hops",
      "appendTo": "beer-details-ingredients",
    },
    {
      "element": "h3",
      "addClassName": "Ingredients-for-hops-headline",
      "appendTo": "beer-details-ingredients-hops",
      "text": "Hops:",
    },
    {
      "element": "ul",
      "addClassName": "Ingredients-for-hops-ul",
      "appendTo": "beer-details-ingredients-hops",
    },
    {
      "element": "div",
      "addClassName": "beer-details-ingredients-malts",
      "appendTo": "beer-details-ingredients",
    },
    {
      "element": "h3",
      "addClassName": "Ingredients-for-malts-headline",
      "appendTo": "beer-details-ingredients-malts",
      "text": "Malts:",
    },
    {
      "element": "ul",
      "addClassName": "Ingredients-for-malts-ul",
      "appendTo": "beer-details-ingredients-malts",
    },
    {
      "element": "div",
      "addClassName": "beer-details-ingredients-yeasts",
      "appendTo": "beer-details-ingredients",
    },
    {
      "element": "h3",
      "addClassName": "Ingredients-for-yeasts-headline",
      "appendTo": "beer-details-ingredients-yeasts",
      "text": "yeasts:",
    },
    {
      "element": "ul",
      "addClassName": "Ingredients-for-yeasts-ul",
      "appendTo": "beer-details-ingredients-yeasts",
    },
    {
      "element": "div",
      "addClassName": "beer-details-description",
      "appendTo": "beer-details",
    },
    {
      "element": "div",
      "addClassName": "beer-details-description",
      "appendTo": "beer-details",
    },
    {
      "element": "h1",
      "addClassName": "beer-details-description-headline",
      "appendTo": "beer-details",
    },
    {
      "element": "p",
      "addClassName": "beer-details-description-text",
      "appendTo": "beer-details",
    },
    {
      "element": "div",
      "addClassName": "beer-details-stats",
      "appendTo": "beer-details",
    },
  ]

  // Calling the function "createHtmlStructure", that will render the layout to the page
  createHtmlStructure(htmlStructure)


  const yeasts = beer.ingredients.yeast
  const yeastsUl = document.querySelector(".Ingredients-for-yeasts-ul")
  getIngredients(yeasts, yeastsUl)


  const hops = beer.ingredients.hops
  const hopsUl = document.querySelector(".Ingredients-for-hops-ul")
  getIngredients(hops, hopsUl)


  const malts = beer.ingredients.malt
  const maltsUl = document.querySelector(".Ingredients-for-malts-ul")
  getIngredients(malts, maltsUl)



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



// Creates the HTML <elements> and then rendering it do the page.
function createHtmlStructure(obj) {

  //Getting the the value of each item
  for (const key of obj) {

    const element = key.element;
    const addClassName = key.addClassName;
    const appendTo = key.appendTo;
    const text = key.text;

    renderTheHtml(element, addClassName, appendTo, text)
  }

  // Function for rendering the html-structure
  function renderTheHtml(element, addClassName, appendTo, text) {
    const htmlElement = document.createElement(element)
    htmlElement.className = addClassName
    const add = document.querySelector(`.${appendTo}`)

    add.append(htmlElement)

    if (text != null) {
      const addText = document.querySelector(`.${addClassName}`)
      addText.innerHTML = text
    }
  }

}


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