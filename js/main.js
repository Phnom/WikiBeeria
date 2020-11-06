
// Global url
const beerUrl = "https://api.punkapi.com/v2/beers/"

async function fetchBeerData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}


async function renderRandomBeer() {

  const beerContent = document.querySelector(".beer-random-card-content")

  let beerData = await fetchBeerData(`${beerUrl}random`)
  beerData = beerData[0]

  beerContent.innerHTML = `
  <h1>${beerData.name}</h1>
  <p>${beerData.description}</p>
  <button>Read more...</button>
  `

}
renderRandomBeer()