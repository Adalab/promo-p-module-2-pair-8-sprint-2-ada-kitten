'use strict';

/* Elements from HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');
const inputRace = document.querySelector('.js-input-race');

//Objects from Kittens
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'Spanish Shorthair',
};
const kittenData_2 = {
  image:
    'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Fiona',
  desc: 'Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'Portuguese Shorthair',
};
const kittenData_3 = {
  image:
    'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Cielo',
  desc: 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'Irish Shorthair',
};


let kittenDataList = [];



function renderKitten(kittenData) {

  const li = document.createElement('li');
  listElement.appendChild(li);
  li.classList.add('card');

  const article = document.createElement('article');
  li.appendChild(article);

  const img = document.createElement('img');
  article.appendChild(img);
  img.classList.add('card_img');
  img.setAttribute('src',kittenData.url);

  const h3Name = document.createElement('h3');
  article.appendChild(h3Name);
  h3Name.classList.add('card_title');
  const texth3Name = document.createTextNode(kittenData.name);
  h3Name.appendChild(texth3Name);

  const h3Race = document.createElement('h3');
  article.appendChild(h3Race);
  h3Race.classList.add('card_race');
  const texth3Race = document.createTextNode(kittenData.race);
  h3Race.appendChild(texth3Race);

  const p = document.createElement('p');
  article.appendChild(p);
  p.classList.add('card_description');
  const textP = document.createTextNode(kittenData.desc);
  p.appendChild(textP);

return li;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    const kitten = renderKitten(kittenItem);
    listElement.appendChild(kitten);
  }
}

//Show/hide the form
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}


//Cancel the search for a kitten
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
}

//Events
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);
// searchButton.addEventListener('click', filterKitten);
buttonAdd.addEventListener('click', addNewKitten);
buttonCancelForm.addEventListener('click', cancelNewKitten);

//Add new kitten
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  if (
    valueDesc === '' ||
    valuePhoto === '' ||
    valueName === '' ||
    valueRace === ''
  ) {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
    console.log('hello1');
  } else if (
    valueDesc !== '' ||
    valuePhoto !== '' ||
    valueName !== '' ||
    valueRace !== ''
  ) {
    labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
    console.log('hello2');
  }
  const newKittenDataObject = {
    image: valuePhoto,
    name: valueName,
    desc: valueDesc,
    race: valueRace,
  };
  kittenDataList.push(newKittenDataObject);
  renderKittenList(kittenDataList);
}

buttonAdd.addEventListener('click', addNewKitten);

function filterKitten2(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_race.value;
  const kittenListFiltered = kittenDataList
    .filter((kitten) => kitten.desc.toLowerCase().includes(descrSearchText))
    .filter((kitten) => kitten.race.toLowerCase().includes(raceSearchText));
  renderKittenList(kittenListFiltered);
}

searchButton.addEventListener('click', filterKitten2);

// part-10

const GITHUB_USER = 'patriciapallares';
const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;

fetch(SERVER_URL, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((data) => {
    kittenDataList = data.results;
    console.log(kittenDataList);
    renderKittenList(kittenDataList);
  });

// part-11

const kittenListStored = JSON.parse(localStorage.getItem('kittensList'));

if (kittenListStored !== null) {
  kittenDataList = kittenListStored;
  renderKittenList(kittenDataList);
} else {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      kittenDataList = data.results;
      console.log(kittenDataList);
      renderKittenList(kittenDataList);
      localStorage.setItem('kittensList', JSON.stringify(kittenDataList));
    })

    .catch((error) => {
      console.error(error);
    });
}


// part-12

function renderKitten(kittenData) {

    const li = document.createElement('li');
    listElement.appendChild(li);
    li.classList.add('card');

    const article = document.createElement('article');
    li.appendChild(article);

    const img = document.createElement('img');
    article.appendChild(img);
    img.classList.add('card_img');
    img.setAttribute('src',kittenData.url);

    const h3Name = document.createElement('h3');
    article.appendChild(h3Name);
    h3Name.classList.add('card_title');
    const texth3Name = document.createTextNode(kittenData.name);
    h3Name.appendChild(texth3Name);

    const h3Race = document.createElement('h3');
    article.appendChild(h3Race);
    h3Race.classList.add('card_race');
    const texth3Race = document.createTextNode(kittenData.race);
    h3Race.appendChild(texth3Race);

    const p = document.createElement('p');
    article.appendChild(p);
    p.classList.add('card_description');
    const textP = document.createTextNode(kittenData.desc);
    p.appendChild(textP);

  return li;
}
