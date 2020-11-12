function loadBeerWiki() {
  const hops = ["1 lemon drop chilli", "Ahtanum", "Amarillo", "American Oak Chips Heavy Toast Soaked in Bourbon", "American Oak Chips Heavy Toast soaked in Speyside Whisky", "American Oak Chips Medium Toast Soaked In Speyside Whisky", "American Oak Chips Medium Toast Soaked in Bourbon", "American Oak Chips Medium Toast soaked in Speyside Whisky", "American Oak Wood- chip medium toast, Ageing soaked in Bourbon", "American Oak Wood- chip medium toast, Ageing soaked in Rye Whisky", "Apollo", "Apricot Juice", "Ariana", "Bay Leaves", "Bitter Orange Peel", "Black Pepper", "Blackberry Concentrate", "Blackcurrant Concentrate", "Blueberries", "Blueberry Juice", "Bobek", "Bramling Cross", "Bramling Cross/ First Gold", "Bravo", "C02 Extract", "CO2 Extract", "Cacao Nibs", "Cacoa Nibs", "Callista", "Cardamon", "Cascade", "Cascara", "Centennial", "Challenger", "Chinook", "Cinnamon", "Cinnamon Powder", "Citra", "Cloudberries", "Cocoa Nibs", "Coconut Extract", "Coffee", "Coffee Beans", "Coffee beans", "Cold Brew Coffee", "Cold Infused Coffee", "Cold infused coffee", "Columbus", "Columbus Extract", "Comet", "Coriander", "Coriander Seed", "Coriander Seeds", "Coriander seed", "Crystal", "Dana", "Dark Muscavado", "Demerara Sugar", "EXP 366", "East Kent Golding", "East Kent Goldings", "El Dorado", "Elderflower", "Elderflower Concentrate", "Ella", "Enigma", "Equinox", "First Gold", "French Oak Chips Medium Toast", "Fresh Strawberries", "Fuggles", "Galaxy", "Galena", "German Cascade", "German Comet", "Ginger", "Ginger Powder", "Golden Honey", "Goldings", "Green Bullet", "Ground Coffee", "Guarana Powder", "HBC 366", "HBC 369", "Habanero", "Habanero powder", "Habenero Powder", "Hallertauer Blanc", "Hallertauer Mittelfrüh", "Heather Honey", "Hercules", "Hersbrucker", "Honey", "Hop Extract", "Huell Melon", "Idaho 7", "Jasmine", "Jester", "Juniper Berries", "Juniper Berry", "Kohatu", "Kola Nut Powder", "Lactose", "Lemon Concentrate", "Lemon Juice", "Lemon Peel", "Lemon drop chili", "Liberty", "Lingonberry Juice", "Magnum", "Mandarin Segements", "Mandarina Bavaria", "Mango", "Mango Concentrate", "Mango Puree", "Maple Syrup", "Marshmallows", "Milk Sugars", "Mosaic", "Motueka", "Mt.Hood", "Muscovado Sugar", "NZ Nelson Sauvin", "Nelson Sauvin", "Nugget", "Nutmeg", "Oak Chips", "Oat Husks", "Orange Peel", "Pacific Gem", "Pacific Hallertau", "Pacific Jade", "Pacifica", "Peach Concentrate", "Peach Juice", "Peppercorn", "Peppercorns", "Perle", "Pineapple Juice", "Pink Peppercorns", "Pioneer", "Plum Concentrate", "Poppy Seed", "Raspberry Juice", "Rosemary", "Saaz", "Saphire", "Seville Orange Juice", "Simcoe", "Sodium Chloride", "Sorachi Ace", "Sour Cherry Puree", "Spalter", "Star Anis", "Sterling", "Strisselspalt", "Styrian Goldings", "Sweet Orange Peel", "Tangerine Extract", "Tettnang", "Tomahawk", "Vanilla", "Vanilla Extract", "Vic Secret", "Waimea", "Willamette"]
  const malt = ["Acidulated Malt", "Acidulated Malt for kettle souring", "Amber", "Bitter Orange", "Black Malt", "Black Patent", "Brown", "Cane Sugar", "CaraAroma", "Carafa Special Malt Type 1", "Carafa Special Malt Type 2", "Carafa Special Malt Type 3", "Carahell", "Caramalt", "Caramunich", "Carapils", "Carared", "Cascara", "Chocolate", "Chocolate Wheat", "Crisp Rye", "Crystal", "Crystal 120", "Crystal 150", "DRC", "Dark Crystal", "Dark Crystal 350", "Dark Crystal 350-400", "Dark Muscavado (Wort Kettle)", "Dextrin Malt", "Dextrose", "Double Roasted Crystal", "Extra Dark Crystal", "Extra Pale", "Extra Pale - Spring Blend", "Flaked Malted Oats", "Flaked Oats", "Ginger Root", "Golden Naked Oats", "Grano Dei Miracoli", "Grapefruit Peel", "Honey", "Lactose", "Lager Malt", "Light Crystal", "Maris Otter", "Maris Otter Extra Pale", "Medium Crystal", "Munich", "Munich Type 1 Light", "Oat Husks", "Organic Caramalt", "Organic Chocolate", "Organic Lager", "Organic Munich", "Pale Ale", "Pale Ale - Tipple", "Pale Chocolate", "Pale Crystal", "Pale Crystal 60", "Peated Malt", "Pilsner", "Pinhead Oats", "Popcorn", "Premium English Caramalt", "Propino Pale Malt", "Propino Pale Malt for kettle souring", "Roasted Barley", "Roasted Malt", "Rye", "Simpsons Rye", "Smoked Malt", "Smoked Peaty", "Smoked Warminster", "Smoked Weyermann", "Special W", "Spelt", "Sweet Orange Peel", "Torrified Wheat", "Uncrushed Wheat", "Vienna", "Weyermann Beech Smoked", "Weyermann Smoked", "Weyermann Special III", "Wheat", "Wheat Malt", "White Cane Sugar", "White Wheat"]
  const yeast = ["Champagne", "Safale US-05", "Saflager S189", "Saflager W-34/70", "WLP013 - London Ale", "WLP099 - Super High Gravity Ale", "WLP351 - Bavarian Weizen", "WLP4000 - Vermont Ale", "WLP500 - Monastery Ale", "Westvleteren 12 (recovered from a bottle)", "Wyeast 1010 - American Wheat™", "Wyeast 1056 - American Ale™", "Wyeast 1056 - American Ale™ & Wyeast 1272 - American Ale II™", "Wyeast 1272 - American Ale II™", "Wyeast 1388 - Belgian Strong Ale™", "Wyeast 2007 - Pilsen Lager™", "Wyeast 2124 - Bohemian Lager™", "Wyeast 2126 - Bohemian Lager™", "Wyeast 3333 - German Wheat™", "Wyeast 3522 - Belgian Ardennes™", "Wyeast 3638 - Bavarian Wheat™", "Wyeast 3711 - French Saison™", "Wyeast 3724 - Belgian Saison™", "Wyeast 3787 - Trappist High Gravity™", "Wyeast 3944 - Belgian Witbier™"]
  let lastSearch = [];

  // Dropdown menus
  function renderDropdowns() {
    const hopsMenu = document.querySelector('.hops');
    const maltMenu = document.querySelector('.malt');
    const yeastMenu = document.querySelector('.yeast');
    hops.forEach(item => {
      const hopsOption = document.createElement('option');
      hopsOption.innerText = item;
      hopsOption.value = item;
      hopsMenu.append(hopsOption);
    });
    malt.forEach(item => {
      const maltOption = document.createElement('option');
      maltOption.innerText = item;
      maltOption.value = item;
      maltMenu.append(maltOption);
    });
    yeast.forEach(item => {
      const yeastOption = document.createElement('option');
      yeastOption.innerText = item;
      yeastOption.value = item;
      yeastMenu.append(yeastOption);
    });
  }

  renderDropdowns();

  /***********************

        API-fetch

 ***********************/

  // Function to fetch beer data
  async function fetchBeerData(query) {
    const response = await fetch('https://api.punkapi.com/v2/beers' + query);
    let data = await response.json();
    return data;
  }
  // API-fetch ENDS //

  //funktion för att söka data till bärs i konstruktion av sidan
/* 
async function getBeer() {
  const temp = []
  const beers = await fetchBeerData("?page=7&per_page=80")
  console.log(yeast)
  for (let current of beers) {
    //for (c of current.ingredients.malt) {
      if (!yeast.includes(current.name) && !temp.includes(current.ingredients.yeast.name)) {
        temp.push(current.ingredients.yeast.name)
    //}
    }
  }
  yeast.forEach(hop => temp.push(hop))
  console.log(temp)
}
getBeer()
*/

  const searchBtn = document.querySelector('button');

  searchBtn.addEventListener('click', () => {
    clearMain();
    searchForBeer();
    document.querySelectorAll('.search-advanced > select').forEach(opt => opt.selectedIndex = 0)
  });

  document.querySelector('.search').addEventListener('keypress', function (e) {
    // let searchInput = document.getElementById('search');
    // const main = document.querySelector('main');
    if (e.key === 'Enter') {
      clearMain();
      searchForBeer();
      document.querySelectorAll('.search-advanced > select').forEach(opt => opt.selectedIndex = 0)
    }
  });

  // EventListeners ENDS //

  /*********************** Functions ***********************/

  async function searchForBeer() {
    let searchInput = document.querySelector('.search').value.toLowerCase();
    const hopsMenu = document.querySelector('.hops').value.toLowerCase();
    const maltMenu = document.querySelector('.malt').value.toLowerCase();
    const yeastMenu = document.querySelector('.yeast').value.toLowerCase();
    const abvLessMenu = document
      .querySelector('.abvLesser')
      .value.toLowerCase();
    const abvGreatMenu = document
      .querySelector('.abvGreater')
      .value.toLowerCase();
    const brewedBeforeMenu = document
      .querySelector('.brewedBefore')
      .value.toLowerCase();
    const brewedAfterMenu = document
      .querySelector('.brewedAfter')
      .value.toLowerCase();
    let input = document.querySelector('.search');

    let query = '?per_page=80';

    if (searchInput.length > 0) {
      query += `&beer_name=${searchInput}`;
    }
    if (hopsMenu !== 'hops') {
      query += `&hops=${hopsMenu}`;
    }
    if (maltMenu !== 'malt') {
      query += `&malt=${maltMenu}`;
    }
    if (yeastMenu !== 'yeast') {
      query += `&yeast=${yeastMenu}`;
    }
    if (abvLessMenu !== 'abvlesser') {
      query += `&abv_lt=${abvLessMenu}`;
    }
    if (abvGreatMenu !== 'abvgreater') {
      query += `&abv_gt=${abvGreatMenu}`;
    }
    if (brewedBeforeMenu !== 'brewedbefore') {
      query += `&brewed_before=01-${brewedBeforeMenu}`;
    }
    if (brewedAfterMenu !== 'brewedafter') {
      query += `&brewed_after=01-${brewedAfterMenu}`;
    }
    if (query.length > 12) {
      input.classList.remove('active');
      input.placeholder = 'Find your beer...';
      let beer = await fetchBeerData(query);
      lastSearch = beer;
      createSearchNav();

      for (let i = 0; i < 10; i++) {
        if (beer[i] !== undefined) {
          createSearchResult(beer[i]);
        }
      }
    } else {
      input.classList.add('active');
      input.placeholder = 'Search can not be empty..';
    }
  }

  function createSearchNav() {
    const searchNav = document.querySelector('.search-page-nav');
    searchNav.innerHTML = '';
    for (let i = 0; i < Math.ceil(lastSearch.length / 10); i++) {
      searchNav.innerHTML += `<a href="#">${i + 1}</a>`;
    }
    const searchPagination = document.querySelectorAll('.search-page-nav > a');
    if (searchPagination.length < 0) {
      searchPagination[0].classList.add('active-page');
    } 
    searchPagination.forEach(pageLink => {
      pageLink.addEventListener('click', () => {
        searchPagination.forEach(Link => Link.classList.remove('active-page'));
        pageLink.classList.add('active-page');
        clearMain();
        for (let j = 0; j < 10; j++) {
          // if = bugfix blankt resultat på sista
          if (lastSearch[(pageLink.innerText - 1) * 10 + j] !== undefined) {
            createSearchResult(lastSearch[(pageLink.innerText - 1) * 10 + j]);
          }
        }
      });
    });
  }

  function createSearchResult(beer) {
    /** Html-structure **/
    const main = document.querySelector('main');

    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';
    main.append(cardWrapper);

    const card = document.createElement('a');
    card.href = '#';
    card.className = 'card card-small';
    cardWrapper.append(card);

    const leftAside = document.createElement('div');
    leftAside.className = 'card-left-aside';
    card.append(leftAside);

    const img = document.createElement('img');
    img.className = 'card-img';
    leftAside.append(img);

    const content = document.createElement('div');
    content.className = 'card-content';
    card.append(content);

    const headline = document.createElement('h1');
    headline.className = 'card-headline';
    content.append(headline);

    const rightAside = document.createElement('div');
    rightAside.className = 'right-aside';
    card.append(rightAside);

    /** Html-structure  ends **/

    //Shorten the beer description to fit inside the "card"-element
    const shortenDescription = shorten(beer.description);

    // Add content
    content.innerHTML = `<h1>${beer.name}</h1><p>${shortenDescription}<p>`;
    if (beer.image_url) {
      img.src = beer.image_url;
    } else {
      img.src = 'img/missing.png';
    }

    card.addEventListener('click', () => {
      clearMain();
      beerDetails(beer);
    });
  }

  /**    function createSearchResult() ENDS */

  drick();
  async function drick() {
    const response = await fetch('https://api.punkapi.com/v2/beers/random');
    let data = await response.json();
    data = data[0];
    beerDetails(data);
  }

  function beerDetails(beer) {
    /** Html-structure **/

    const main = document.querySelector('main');
    const card = document.createElement('div');
    card.className = 'card card-big';
    main.append(card);

    const leftAside = document.createElement('div');
    leftAside.className = 'card-left-aside';
    card.append(leftAside);

    const img = document.createElement('img');
    img.className = 'card-img';
    leftAside.append(img);

    const content = document.createElement('div');
    content.className = 'card-content';
    card.append(content);

    const rightAside = document.createElement('div');
    rightAside.className = 'right-aside';
    card.append(rightAside);

    const CreateHopsUl = document.createElement('ul');
    CreateHopsUl.className = 'ingredients-hops';
    rightAside.append(CreateHopsUl);

    const hopsHeadline = document.createElement('h3');
    CreateHopsUl.append(hopsHeadline);

    const CreateMaltsUl = document.createElement('ul');
    CreateMaltsUl.className = 'ingredients-malts';
    rightAside.append(CreateMaltsUl);

    const maltHeadline = document.createElement('h3');
    CreateMaltsUl.append(maltHeadline);

    const createYeastsUl = document.createElement('ul');
    createYeastsUl.className = 'ingredients-yeasts';
    rightAside.append(createYeastsUl);

    const yeastHeadline = document.createElement('h3');
    createYeastsUl.append(yeastHeadline);

    /** Html-structure  ends **/

    const hops = beer.ingredients.hops;
    const hopsUl = document.querySelector('.ingredients-hops');
    hopsHeadline.innerHTML = 'Hops:';
    getIngredients(hops, hopsUl);

    const malts = beer.ingredients.malt;
    const maltsUl = document.querySelector('.ingredients-malts');
    maltHeadline.innerHTML = 'Malt:';
    getIngredients(malts, maltsUl);

    const yeasts = beer.ingredients.yeast;
    yeastHeadline.innerHTML = 'Yeast:';
    const yeastsUl = document.querySelector('.ingredients-yeasts');
    getIngredients(yeasts, yeastsUl);

    // Add content
    content.innerHTML = `<h1>${beer.name}</h1><p>${beer.description}<p><strong>Volume: </strong>${beer.volume.value} ${beer.volume.unit}</p><p><strong>Alcohol content: </strong>${beer.abv}%</p><h2>Brewers tips;</h2><p>${beer.brewers_tips}</p></p><h3>Recommended food pairing:</h3> <ul class="food-pairing"></ul> `;
    if (beer.image_url) {
      img.src = beer.image_url;
    } else {
      img.src = 'img/missing.png';
    }

    const foods = beer.food_pairing;
    const pairingUl = document.querySelector('.food-pairing');

    // Adds recommended foods to <ul>
    foodPairing(foods);
    function foodPairing(foods) {
      for (const food of foods) {
        addItemtoUl(food, pairingUl);
      }
    }

    function getIngredients(ingredients, nameOfUl) {
      // Temporary array for holding all ingredients
      let allIngredients = [];

      //
      if (typeof ingredients == 'object') {
        // Iterating and then pushing every ingredient to "allIngredients"
        for (const ingredient of ingredients) {
          allIngredients.push(ingredient.name);
        }
      } else {
        // (if string) just push that value
        allIngredients.push(ingredients);
      }

      // Remove all duplicate from original array (allIngredients)
      const noDuplicates = [...new Set(allIngredients)];

      //Calls function to render in to webpage
      for (const ingredient of noDuplicates) {
        addItemtoUl(ingredient, nameOfUl);
      }
    }
  }

  /**************** reusable functions  *****************/

  // Adds <li>-items to a <ul>
  function addItemtoUl(item, nameOfUl) {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    nameOfUl.append(listItem);
  }

  // Function for shortening sentences and no wordbreak
  function shorten(str) {
    if (str.length <= 150) return str;
    return str.substr(0, str.lastIndexOf(' ', 150)) + '...';
  }

  //  Clears all content from the <main>
  function clearMain() {
    document.querySelector('main').innerHTML = '';
  }

  // Prevent form from refreshing the page
  function preventDefault(event) {
    event.preventDefault();
  }
}

window.onload = () => {
  loadBeerWiki();
};
