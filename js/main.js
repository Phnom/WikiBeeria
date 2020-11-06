
// Global url
const beerUrl = "https://api.punkapi.com/v2/beers/"
document.querySelector(".form > button").addEventListener("click", function() {
    document.querySelector(".beer-info").classList.remove("active")
    document.querySelector(".beer-list").classList.add("active")
    searchBeer()
})

async function fetchBeerData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}


async function renderRandomBeer() {

  const beerContent = document.querySelector(".beer-random-card-content")
  const beerImg = document.querySelector(".beer-random-card-img > img")

  let beerData = await fetchBeerData(`${beerUrl}random`)
  beerData = beerData[0]
  console.log(beerData)
  beerContent.innerHTML = `
  <h1>${beerData.name}</h1>
  <button>Read more...</button>
  `
  beerImg.src = beerData.image_url
  const randomButton = document.querySelector(".beer-random-card-content > button").addEventListener("click", function() {
    const randomCard = document.querySelector(".beer-random-card").classList.remove("active")
    const mainContent = document.querySelector(".main-content").classList.add("active")


    renderBeerInfo(beerData)
  })
}
async function renderBeerInfo(beerData) {
    const beerContent = document.querySelector(".beer-info")
    beerContent.innerHTML = `
    <div class="beer-info-img">
    <img src="${beerData.image_url}" alt="">
    </div>
    <h1>${beerData.name}</h1>
    <p>Alcohol Volume: ${beerData.abv}%</p>
    <p>${beerData.volume.value}${beerData.volume.unit}</p>
    <p>${beerData.description}</p>
    `
}
async function searchBeer() {
    const url = "https://api.punkapi.com/v2/beers/"
    const beerList = document.querySelector(".beer-list")
    beerList.innerHTML = "<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>"
    const beerListItems = document.querySelectorAll(".beer-list > li")
    let beerData = await fetchBeerData(url)
    for (let i = 0; i < 10; i++) {
        beerListItems[i].innerText = beerData[i].name
    }
}
window.onload = (event) => {
    renderRandomBeer()
}


